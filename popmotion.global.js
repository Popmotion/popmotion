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
	
	var _popmotion = __webpack_require__(2);
	
	var popmotion = _interopRequireWildcard(_popmotion);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var UIref = window.motion;
	
	popmotion.noConflict = function () {
	    window.motion = UIref;
	};
	
	window.motion = window.popmotion = popmotion;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdsb2JhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0lBQVksU0FBUzs7OztBQUVyQixJQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDOztBQUU1QixTQUFTLENBQUMsVUFBVSxHQUFHLFlBQVk7QUFDL0IsVUFBTSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Q0FDekIsQ0FBQzs7QUFFRixNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDIiwiZmlsZSI6Imdsb2JhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHBvcG1vdGlvbiBmcm9tICcuLi9wb3Btb3Rpb24nO1xuXG5jb25zdCBVSXJlZiA9IHdpbmRvdy5tb3Rpb247XG5cbnBvcG1vdGlvbi5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgIHdpbmRvdy5tb3Rpb24gPSBVSXJlZjtcbn07XG5cbndpbmRvdy5tb3Rpb24gPSB3aW5kb3cucG9wbW90aW9uID0gcG9wbW90aW9uOyJdfQ==

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.Input = exports.Physics = exports.Track = exports.Tween = exports.Action = undefined;
	
	var _Action = __webpack_require__(6);
	
	var _Action2 = _interopRequireDefault(_Action);
	
	var _Tween = __webpack_require__(3);
	
	var _Tween2 = _interopRequireDefault(_Tween);
	
	var _Physics = __webpack_require__(4);
	
	var _Physics2 = _interopRequireDefault(_Physics);
	
	var _Track = __webpack_require__(5);
	
	var _Track2 = _interopRequireDefault(_Track);
	
	var _Input = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./input/Input\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _Input2 = _interopRequireDefault(_Input);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.
	// Actions
	Action = _Action2.default;
	exports.Tween = _Tween2.default;
	exports.Track = _Track2.default;
	exports.Physics = _Physics2.default;
	exports.
	
	// Input
	Input = _Input2.default;
	
	// Input
	// Actions
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcG1vdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVdJLE1BQU07UUFDTixLQUFLO1FBQ0wsS0FBSztRQUNMLE9BQU87Ozs7QUFHUCxLQUFLIiwiZmlsZSI6InBvcG1vdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEFjdGlvbnNcbmltcG9ydCBBY3Rpb24gZnJvbSAnLi9hY3Rpb25zL0FjdGlvbic7XG5pbXBvcnQgVHdlZW4gZnJvbSAnLi9hY3Rpb25zL1R3ZWVuJztcbmltcG9ydCBQaHlzaWNzIGZyb20gJy4vYWN0aW9ucy9QaHlzaWNzJztcbmltcG9ydCBUcmFjayBmcm9tICcuL2FjdGlvbnMvVHJhY2snO1xuXG4vLyBJbnB1dFxuaW1wb3J0IElucHV0IGZyb20gJy4vaW5wdXQvSW5wdXQnO1xuXG5leHBvcnQge1xuICAgIC8vIEFjdGlvbnNcbiAgICBBY3Rpb24sXG4gICAgVHdlZW4sXG4gICAgVHJhY2ssXG4gICAgUGh5c2ljcyxcblxuICAgIC8vIElucHV0XG4gICAgSW5wdXRcbn07Il19

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
	var _Action2 = __webpack_require__(6);
	
	var _Action3 = _interopRequireDefault(_Action2);
	
	var _presetEasing = __webpack_require__(7);
	
	var _presetEasing2 = _interopRequireDefault(_presetEasing);
	
	var _uiUtils = __webpack_require__(8);
	
	var _uiCalc = __webpack_require__(9);
	
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
	    var progressLimited = (0, _uiCalc.restrict)(progress, 0, 1);
	    var easingFunction = (0, _uiUtils.isString)(ease) ? _presetEasing2.default[ease] : ease;
	    var easedProgress = easingFunction(progressLimited);
	
	    return (0, _uiCalc.getValueFromProgress)(easedProgress, from, to);
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
	
	    Tween.prototype.update = function update(tween, frameStamp, elapsed) {
	        var _this2 = this;
	
	        var progressTarget = this.playDirection === 1 ? 1 : 0;
	
	        this.ended = true;
	        this.elapsed += elapsed * this.dilate * this.playDirection;
	
	        (0, _uiUtils.each)(this.values, function (value, key) {
	            var progress = (0, _uiCalc.restrict)((0, _uiCalc.getProgressFromValue)(_this2.elapsed - value.delay, 0, value.duration), 0, 1);
	
	            // Mark Tween as NOT ended if still in progress
	            if (progress !== progressTarget) {
	                _this2.ended = false;
	            }
	
	            // Step progress if we're stepping
	            if (value.steps) {
	                progress = (0, _uiCalc.stepProgress)(progress, value.steps);
	            }
	
	            // Ease progress
	            value.current = ease(progress, value.from, value.to, value.ease);
	        });
	    };
	
	    Tween.prototype.frameEnd = function frameEnd() {
	        var _this3 = this;
	
	        if (this.ended) {
	            var stepTaken = false;
	
	            (0, _uiUtils.each)(NEXT_STEPS, function (method, step) {
	                var maxSteps = _this3[step];
	
	                if (maxSteps === true || (0, _uiUtils.isNum)(maxSteps) && maxSteps > _this3[step + COUNT]) {
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
	
	        (0, _uiUtils.each)(this.values, function (value, key) {
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
	        this.started = (0, _uiUtils.currentTime)();
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
	//# sourceMappingURL=data:application/json;base64,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QztBQUNaLFlBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7S0FDM0M7O0FBdkVnQixTQUFLLFdBeUV0QixlQUFlLDhCQUFHO0FBQ2QsNEJBQ08sa0JBQU0sZUFBZSxLQUFBLE1BQUU7QUFDMUIsaUJBQUssRUFBRSxDQUFDO0FBQ1Isa0JBQU0sRUFBRSxDQUFDO0FBQ1Qsb0JBQVEsRUFBRSxHQUFHO0FBQ2IsZ0JBQUksRUFBRSxLQUFLO0FBQ1gsZ0JBQUksRUFBRSxLQUFLO0FBQ1gsZ0JBQUksRUFBRSxLQUFLO0FBQ1gseUJBQWEsRUFBRSxDQUFDO0FBQ2hCLGlCQUFLLEVBQUUsS0FBSztBQUNaLG1CQUFPLEVBQUUsQ0FBQztXQUNaO0tBQ0w7O0FBdEZnQixTQUFLLFdBd0Z0QixlQUFlLDhCQUFHO0FBQ2QsNEJBQ08sa0JBQU0sZUFBZSxLQUFBLE1BQUU7QUFDMUIsaUJBQUssRUFBRSxDQUFDO0FBQ1Isb0JBQVEsRUFBRSxHQUFHO0FBQ2IsZ0JBQUksRUFBRSxTQUFTO0FBQ2YsbUJBQU8sRUFBRSxDQUFDO0FBQ1YsbUJBQU8sRUFBRSxDQUFDO0FBQ1YsaUJBQUssRUFBRSxDQUFDO0FBQ1IsZ0JBQUksRUFBRSxDQUFDO0FBQ1AsY0FBRSxFQUFFLENBQUM7QUFDTCxpQkFBSyxFQUFFLEtBQUs7V0FDZDtLQUNMOztBQXJHZ0IsU0FBSyxXQXVHdEIsbUJBQW1CLGtDQUFHO0FBQ2xCLGVBQU8sSUFBSSxDQUFDO0tBQ2Y7O1dBekdnQixLQUFLOzs7a0JBQUwsS0FBSyIsImZpbGUiOiJUd2Vlbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBY3Rpb24gZnJvbSAnLi9BY3Rpb24nO1xuaW1wb3J0IHByZXNldEVhc2luZyBmcm9tICcuL3R3ZWVuL3ByZXNldC1lYXNpbmcnO1xuaW1wb3J0IHtcbiAgICBjdXJyZW50VGltZSxcbiAgICBlYWNoLFxuICAgIGlzTnVtLFxuICAgIGlzU3RyaW5nXG59IGZyb20gJ3VpLXV0aWxzJztcbmltcG9ydCB7XG4gICAgcmVzdHJpY3QsXG4gICAgZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUsXG4gICAgZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MsXG4gICAgc3RlcFByb2dyZXNzXG59IGZyb20gJ3VpLWNhbGMnO1xuXG5jb25zdCBDT1VOVCA9ICdDb3VudCc7XG5jb25zdCBORVhUX1NURVBTID0ge1xuICAgIGxvb3A6ICdyZXN0YXJ0JyxcbiAgICB5b3lvOiAncmV2ZXJzZScsXG4gICAgZmxpcDogJ2ZsaXBWYWx1ZXMnXG59O1xuXG4vKlxuICAgIEVhc2UgdmFsdWUgd2l0aGluIHJhbmdlZCBwYXJhbWV0ZXJzXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBQcm9ncmVzcyBiZXR3ZWVuIDAgYW5kIDFcbiAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIG9mIDAgcHJvZ3Jlc3NcbiAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIG9mIDEgcHJvZ3Jlc3NcbiAgICBAcGFyYW0gW3N0cmluZyB8fCBmdW5jdGlvbl06IE5hbWUgb2YgcHJlc2V0IGVhc2luZ1xuICAgICAgICB0byB1c2Ugb3IgZ2VuZXJhdGVkIGVhc2luZyBmdW5jdGlvblxuICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIG9mIGVhc2VkIHByb2dyZXNzIGluIHJhbmdlXG4qLyBcbmZ1bmN0aW9uIGVhc2UocHJvZ3Jlc3MsIGZyb20sIHRvLCBlYXNlKSB7XG4gICAgY29uc3QgcHJvZ3Jlc3NMaW1pdGVkID0gcmVzdHJpY3QocHJvZ3Jlc3MsIDAsIDEpO1xuICAgIGNvbnN0IGVhc2luZ0Z1bmN0aW9uID0gaXNTdHJpbmcoZWFzZSkgPyBwcmVzZXRFYXNpbmdbZWFzZV0gOiBlYXNlO1xuICAgIGNvbnN0IGVhc2VkUHJvZ3Jlc3MgPSBlYXNpbmdGdW5jdGlvbihwcm9ncmVzc0xpbWl0ZWQpO1xuXG4gICAgcmV0dXJuIGdldFZhbHVlRnJvbVByb2dyZXNzKGVhc2VkUHJvZ3Jlc3MsIGZyb20sIHRvKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFR3ZWVuIGV4dGVuZHMgQWN0aW9uIHtcbiAgICBzdGFydCgpIHtcbiAgICAgICAgc3VwZXIuc3RhcnQoKTtcbiAgICAgICAgdGhpcy5lbGFwc2VkID0gMDtcbiAgICAgICAgdGhpcy5mbGlwQ291bnQgPSB0aGlzLnlveW9Db3VudCA9IHRoaXMubG9vcENvdW50ID0gMDtcbiAgICB9XG5cbiAgICB1cGRhdGUodHdlZW4sIGZyYW1lU3RhbXAsIGVsYXBzZWQpIHtcbiAgICAgICAgY29uc3QgcHJvZ3Jlc3NUYXJnZXQgPSAodGhpcy5wbGF5RGlyZWN0aW9uID09PSAxKSA/IDEgOiAwO1xuXG4gICAgICAgIHRoaXMuZW5kZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmVsYXBzZWQgKz0gKGVsYXBzZWQgKiB0aGlzLmRpbGF0ZSkgKiB0aGlzLnBsYXlEaXJlY3Rpb247XG5cbiAgICAgICAgZWFjaCh0aGlzLnZhbHVlcywgKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgICAgIGxldCBwcm9ncmVzcyA9IHJlc3RyaWN0KGdldFByb2dyZXNzRnJvbVZhbHVlKHRoaXMuZWxhcHNlZCAtIHZhbHVlLmRlbGF5LCAwLCB2YWx1ZS5kdXJhdGlvbiksIDAsIDEpO1xuXG4gICAgICAgICAgICAvLyBNYXJrIFR3ZWVuIGFzIE5PVCBlbmRlZCBpZiBzdGlsbCBpbiBwcm9ncmVzc1xuICAgICAgICAgICAgaWYgKHByb2dyZXNzICE9PSBwcm9ncmVzc1RhcmdldCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW5kZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU3RlcCBwcm9ncmVzcyBpZiB3ZSdyZSBzdGVwcGluZ1xuICAgICAgICAgICAgaWYgKHZhbHVlLnN0ZXBzKSB7XG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3MgPSBzdGVwUHJvZ3Jlc3MocHJvZ3Jlc3MsIHZhbHVlLnN0ZXBzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRWFzZSBwcm9ncmVzc1xuICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IGVhc2UocHJvZ3Jlc3MsIHZhbHVlLmZyb20sIHZhbHVlLnRvLCB2YWx1ZS5lYXNlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnJhbWVFbmQoKSB7XG4gICAgICAgIGlmICh0aGlzLmVuZGVkKSB7XG4gICAgICAgICAgICBsZXQgc3RlcFRha2VuID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGVhY2goTkVYVF9TVEVQUywgKG1ldGhvZCwgc3RlcCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1heFN0ZXBzID0gdGhpc1tzdGVwXTtcblxuICAgICAgICAgICAgICAgIGlmIChtYXhTdGVwcyA9PT0gdHJ1ZSB8fCAoaXNOdW0obWF4U3RlcHMpICYmIG1heFN0ZXBzID4gdGhpc1tzdGVwICsgQ09VTlRdKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzW3N0ZXAgKyBDT1VOVF0rKztcbiAgICAgICAgICAgICAgICAgICAgc3RlcFRha2VuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpc1ttZXRob2RdKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICghc3RlcFRha2VuKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmbGlwVmFsdWVzKCkge1xuICAgICAgICB0aGlzLmVsYXBzZWQgPSB0aGlzLmR1cmF0aW9uIC0gdGhpcy5lbGFwc2VkO1xuXG4gICAgICAgIGVhY2godGhpcy52YWx1ZXMsICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgICAgICBbdmFsdWUudG8sIHZhbHVlLmZyb21dID0gW3ZhbHVlLmZyb20sIHZhbHVlLnRvXTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV2ZXJzZSgpIHtcbiAgICAgICAgdGhpcy5wbGF5RGlyZWN0aW9uICo9IC0xO1xuICAgIH1cblxuICAgIHJlc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuZWxhcHNlZCA9ICh0aGlzLnBsYXlEaXJlY3Rpb24gPT09IDEpID8gMCA6IHRoaXMuZHVyYXRpb247XG4gICAgICAgIHRoaXMuc3RhcnRlZCA9IGN1cnJlbnRUaW1lKCk7XG4gICAgfVxuXG4gICAgc2Vlayhwcm9ncmVzcykge1xuICAgICAgICB0aGlzLm9uY2UoKTtcbiAgICAgICAgdGhpcy5lbGFwc2VkID0gdGhpcy5kdXJhdGlvbiAqIHByb2dyZXNzO1xuICAgIH1cbiAgICBcbiAgICBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdXBlci5nZXREZWZhdWx0UHJvcHMoKSxcbiAgICAgICAgICAgIGRlbGF5OiAwLFxuICAgICAgICAgICAgZGlsYXRlOiAxLFxuICAgICAgICAgICAgZHVyYXRpb246IDMwMCxcbiAgICAgICAgICAgIGxvb3A6IGZhbHNlLFxuICAgICAgICAgICAgeW95bzogZmFsc2UsXG4gICAgICAgICAgICBmbGlwOiBmYWxzZSxcbiAgICAgICAgICAgIHBsYXlEaXJlY3Rpb246IDEsXG4gICAgICAgICAgICBlbmRlZDogZmFsc2UsXG4gICAgICAgICAgICBlbGFwc2VkOiAwXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZ2V0RGVmYXVsdFZhbHVlKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3VwZXIuZ2V0RGVmYXVsdFZhbHVlKCksXG4gICAgICAgICAgICBkZWxheTogMCxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAzMDAsXG4gICAgICAgICAgICBlYXNlOiAnZWFzZU91dCcsXG4gICAgICAgICAgICBlbGFwc2VkOiAwLFxuICAgICAgICAgICAgc3RhZ2dlcjogMCxcbiAgICAgICAgICAgIHN0ZXBzOiAwLFxuICAgICAgICAgICAgZnJvbTogMCxcbiAgICAgICAgICAgIHRvOiAwLFxuICAgICAgICAgICAgcm91bmQ6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZ2V0RGVmYXVsdFZhbHVlUHJvcCgpIHtcbiAgICAgICAgcmV0dXJuICd0byc7XG4gICAgfVxufVxuIl19

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
	var _Action2 = __webpack_require__(6);
	
	var _Action3 = _interopRequireDefault(_Action2);
	
	var _uiCalc = __webpack_require__(9);
	
	var _uiUtils = __webpack_require__(8);
	
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
	
	    Physics.prototype.update = function update(physics, frameStamp, elapsed) {
	        var _this2 = this;
	
	        this.hasChanged = false;
	
	        (0, _uiUtils.each)(this.values, function (value, key) {
	            var previousValue = value.current;
	
	            // Apply acceleration
	            value.velocity += (0, _uiCalc.speedPerFrame)(value.force, elapsed);
	
	            // Apply friction
	            value.velocity *= Math.pow(1 - value.friction, elapsed / 10);
	
	            // Apply spring
	            if (value.spring && (0, _uiUtils.isNum)(value.to)) {
	                var distanceToTarget = value.to - value.current;
	                value.velocity += distanceToTarget * (0, _uiCalc.speedPerFrame)(value.spring, elapsed);
	            }
	
	            // Apply latest velocity
	            value.current += (0, _uiCalc.speedPerFrame)(value.velocity, elapsed);
	
	            // Check if value has changed
	            if (value.current !== previousValue || Math.abs(value.velocity) >= value.stopSpeed) {
	                _this2.hasChanged = true;
	            }
	        });
	    };
	
	    Physics.prototype.frameEnd = function frameEnd() {
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
	//# sourceMappingURL=data:application/json;base64,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ZnJvbSAnLi9BY3Rpb24nO1xuaW1wb3J0IHsgc3BlZWRQZXJGcmFtZSwgc3BlZWRQZXJTZWNvbmQgfSBmcm9tICd1aS1jYWxjJztcbmltcG9ydCB7IGVhY2gsIGlzTnVtIH0gZnJvbSAndWktdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQaHlzaWNzIGV4dGVuZHMgQWN0aW9uIHtcblxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJncyk7XG4gICAgICAgIHRoaXMuaW5hY3RpdmVGcmFtZXMgPSAwO1xuICAgIH1cblxuICAgIHVwZGF0ZShwaHlzaWNzLCBmcmFtZVN0YW1wLCBlbGFwc2VkKSB7XG4gICAgICAgIHRoaXMuaGFzQ2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgICAgIGVhY2godGhpcy52YWx1ZXMsICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcmV2aW91c1ZhbHVlID0gdmFsdWUuY3VycmVudDtcblxuICAgICAgICAgICAgLy8gQXBwbHkgYWNjZWxlcmF0aW9uXG4gICAgICAgICAgICB2YWx1ZS52ZWxvY2l0eSArPSBzcGVlZFBlckZyYW1lKHZhbHVlLmZvcmNlLCBlbGFwc2VkKTtcblxuICAgICAgICAgICAgLy8gQXBwbHkgZnJpY3Rpb25cbiAgICAgICAgICAgIHZhbHVlLnZlbG9jaXR5ICo9ICgxIC0gdmFsdWUuZnJpY3Rpb24pICoqIChlbGFwc2VkIC8gMTApO1xuXG4gICAgICAgICAgICAvLyBBcHBseSBzcHJpbmdcbiAgICAgICAgICAgIGlmICh2YWx1ZS5zcHJpbmcgJiYgaXNOdW0odmFsdWUudG8pKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGlzdGFuY2VUb1RhcmdldCA9IHZhbHVlLnRvIC0gdmFsdWUuY3VycmVudDtcbiAgICAgICAgICAgICAgICB2YWx1ZS52ZWxvY2l0eSArPSBkaXN0YW5jZVRvVGFyZ2V0ICogc3BlZWRQZXJGcmFtZSh2YWx1ZS5zcHJpbmcsIGVsYXBzZWQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBBcHBseSBsYXRlc3QgdmVsb2NpdHlcbiAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgKz0gc3BlZWRQZXJGcmFtZSh2YWx1ZS52ZWxvY2l0eSwgZWxhcHNlZCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHZhbHVlIGhhcyBjaGFuZ2VkXG4gICAgICAgICAgICBpZiAodmFsdWUuY3VycmVudCAhPT0gcHJldmlvdXNWYWx1ZSB8fCBNYXRoLmFicyh2YWx1ZS52ZWxvY2l0eSkgPj0gdmFsdWUuc3RvcFNwZWVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnJhbWVFbmQoKSB7XG4gICAgICAgIGlmICh0aGlzLmF1dG9FbmQpIHtcbiAgICAgICAgICAgIHRoaXMuaW5hY3RpdmVGcmFtZXMgPSB0aGlzLmhhc0NoYW5nZWQgPyAxIDogdGhpcy5pbmFjdGl2ZUZyYW1lcyArIDE7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmluYWN0aXZlRnJhbWVzID49IHRoaXMubWF4SW5hY3RpdmVGcmFtZXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgICAgICMgR2V0IGRlZmF1bHQgU2ltdWxhdGUgcHJvcHNcblxuICAgICAgICBAcmV0dXJuIFtvYmplY3RdXG4gICAgKi9cbiAgICBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdXBlci5nZXREZWZhdWx0UHJvcHMoKSxcbiAgICAgICAgICAgIGF1dG9FbmQ6IHRydWUsXG4gICAgICAgICAgICBtYXhJbmFjdGl2ZUZyYW1lczogM1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgICMgR2V0IGRlZmF1bHQgU2ltdWxhdGUgdmFsdWUgcHJvcHNcblxuICAgICAgICBAcmV0dXJuIFtvYmplY3RdXG4gICAgKi9cbiAgICBnZXREZWZhdWx0VmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdXBlci5nZXREZWZhdWx0VmFsdWUoKSxcbiAgICAgICAgICAgIGZvcmNlOiAwLCAvLyBbbnVtYmVyXTogQWNjZWxlcmF0aW9uIHRvIGFwcGx5IHRvIHZhbHVlLCBpbiB1bml0cyBwZXIgc2Vjb25kXG4gICAgICAgICAgICBib3VuY2U6IDAsIC8vIFtudW1iZXJdOiBGYWN0b3IgdG8gbXVsdGlwbHkgdmVsb2NpdHkgYnkgb24gYm91bmNlXG4gICAgICAgICAgICBzcHJpbmc6IDAsIC8vIFtudW1iZXJdOiBTcHJpbmcgc3RyZW5ndGggZHVyaW5nICdzdHJpbmcnXG4gICAgICAgICAgICBzdG9wU3BlZWQ6IDAuMDAwMSwgLy8gW251bWJlcl06IFN0b3Agc2ltdWxhdGlvbiB1bmRlciB0aGlzIHNwZWVkXG4gICAgICAgICAgICBmcmljdGlvbjogMCAvLyBbbnVtYmVyXTogRnJpY3Rpb24gdG8gYXBwbHkgcGVyIGZyYW1lLCAwLTFcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICAjIEdldCBkZWZhdWx0IFNpbXVsYXRlIHZhbHVlIHByb3BlcnR5IG5hbWVcbiAgICAgICAgIyMgU2V0IHZhbHVlcyB0byB0aGlzIHdoZW4gYSBgdmFsdWVgIGlzIG5vdCBwcm92aWRlZCBhcyBhbiBvYmplY3RcblxuICAgICAgICBAcmV0dXJuIFtzdHJpbmddXG4gICAgKi9cbiAgICBnZXREZWZhdWx0VmFsdWVQcm9wKCkge1xuICAgICAgICByZXR1cm4gJ3ZlbG9jaXR5JztcbiAgICB9XG59XG4iXX0=

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _Action2 = __webpack_require__(6);
	
	var _Action3 = _interopRequireDefault(_Action2);
	
	var _uiCalc = __webpack_require__(9);
	
	var _uiUtils = __webpack_require__(8);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Track = (function (_Action) {
	    _inherits(Track, _Action);
	
	    function Track(props, input) {
	        _classCallCheck(this, Track);
	
	        var _this = _possibleConstructorReturn(this, _Action.call(this, props));
	
	        _this.input = input;
	        return _this;
	    }
	
	    Track.prototype.start = function start() {
	        _Action.prototype.start.call(this);
	        this.inputOrigin = {};
	    };
	
	    Track.prototype.update = function update(track, frameDuration, elapsed) {
	        var _this2 = this;
	
	        this.inputOffset = (0, _uiCalc.offset)(this.inputOrigin, this.input.current);
	
	        (0, _uiUtils.each)(this.values, function (value, key) {
	            if (_this2.inputOffset.hasOwnProperty(key)) {
	                if (value.direct) {
	                    value.current = _this2.input.current[key];
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRyYWNrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSXFCLEtBQUs7Y0FBTCxLQUFLOztBQUN0QixhQURpQixLQUFLLENBQ1YsS0FBSyxFQUFFLEtBQUssRUFBRTs4QkFEVCxLQUFLOztxREFFbEIsbUJBQU0sS0FBSyxDQUFDOztBQUNaLGNBQUssS0FBSyxHQUFHLEtBQUssQ0FBQzs7S0FDdEI7O0FBSmdCLFNBQUssV0FNdEIsS0FBSyxvQkFBRztBQUNKLDBCQUFNLEtBQUssS0FBQSxNQUFFLENBQUM7QUFDZCxZQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztLQUN6Qjs7QUFUZ0IsU0FBSyxXQVd0QixNQUFNLG1CQUFDLEtBQUssRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFOzs7QUFDbEMsWUFBSSxDQUFDLFdBQVcsR0FBRyxZQWZsQixNQUFNLEVBZW1CLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQzs7QUFFaEUscUJBaEJDLElBQUksRUFnQkEsSUFBSSxDQUFDLE1BQU0sRUFBRSxVQUFDLEtBQUssRUFBRSxHQUFHLEVBQUs7QUFDOUIsZ0JBQUksT0FBSyxXQUFXLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO0FBQ3RDLG9CQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUU7QUFDZCx5QkFBSyxDQUFDLE9BQU8sR0FBRyxPQUFLLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQzNDLE1BQU07QUFDSCx5QkFBSyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsTUFBTSxHQUFHLE9BQUssV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUN4RDthQUNKO1NBQ0osQ0FBQyxDQUFDO0tBQ047O0FBdkJnQixTQUFLLFdBeUJ0QixlQUFlLDhCQUFHO0FBQ2QsZUFBTztBQUNILGVBQUcsRUFBRSxDQUFDO0FBQ04scUJBQVMsRUFBRSxDQUFDO0FBQ1osa0JBQU0sRUFBRSxLQUFLO0FBQ2Isa0JBQU0sRUFBRSxDQUFDO1NBQ1osQ0FBQztLQUNMOztXQWhDZ0IsS0FBSzs7O2tCQUFMLEtBQUsiLCJmaWxlIjoiVHJhY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWN0aW9uIGZyb20gJy4vQWN0aW9uJztcbmltcG9ydCB7IG9mZnNldCB9IGZyb20gJ3VpLWNhbGMnO1xuaW1wb3J0IHsgZWFjaCB9IGZyb20gJ3VpLXV0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhY2sgZXh0ZW5kcyBBY3Rpb24ge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzLCBpbnB1dCkge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuaW5wdXQgPSBpbnB1dDtcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgc3VwZXIuc3RhcnQoKTtcbiAgICAgICAgdGhpcy5pbnB1dE9yaWdpbiA9IHt9O1xuICAgIH1cblxuICAgIHVwZGF0ZSh0cmFjaywgZnJhbWVEdXJhdGlvbiwgZWxhcHNlZCkge1xuICAgICAgICB0aGlzLmlucHV0T2Zmc2V0ID0gb2Zmc2V0KHRoaXMuaW5wdXRPcmlnaW4sIHRoaXMuaW5wdXQuY3VycmVudCk7XG5cbiAgICAgICAgZWFjaCh0aGlzLnZhbHVlcywgKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlucHV0T2Zmc2V0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUuZGlyZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSB0aGlzLmlucHV0LmN1cnJlbnRba2V5XTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gdmFsdWUub3JpZ2luICsgdGhpcy5pbnB1dE9mZnNldFtrZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0RGVmYXVsdFZhbHVlKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYW1wOiAxLFxuICAgICAgICAgICAgZXNjYXBlQW1wOiAwLFxuICAgICAgICAgICAgZGlyZWN0OiBmYWxzZSxcbiAgICAgICAgICAgIHNtb290aDogMFxuICAgICAgICB9O1xuICAgIH1cbn1cbiJdfQ==

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
	var _framesync = __webpack_require__(12);
	
	var _uiUtils = __webpack_require__(8);
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var DEFAULT_PROP = 'current';
	
	var Action = (function (_Process) {
	    _inherits(Action, _Process);
	
	    /*
	        # Action class constructor
	        ## Assign default properties of Action or extended class and set user-defined props
	         @param [object]
	    */
	
	    function Action(props) {
	        _classCallCheck(this, Action);
	
	        // Load default props
	
	        var _this = _possibleConstructorReturn(this, _Process.call(this));
	
	        (0, _uiUtils.each)(_this.getDefaultProps(), function (value, key) {
	            return _this[key] = value;
	        });
	
	        _this.values = {};
	        _this.set(props, _this.getDefaultValueProp());
	        return _this;
	    }
	
	    /*
	        # Set Action properties
	        ## Set user-defined Action properties
	         @param [object]
	        @param [string]: Name of default value property (set when `value` is **not** provided as object)
	        @return [Action]
	    */
	
	    Action.prototype.set = function set(props) {
	        var _this2 = this;
	
	        var defaultValueProp = arguments.length <= 1 || arguments[1] === undefined ? DEFAULT_PROP : arguments[1];
	        var values = props.values;
	
	        var propsToSet = _objectWithoutProperties(props, ['values']);
	
	        // Loop through non-`value` props and set
	
	        (0, _uiUtils.each)(propsToSet, function (value, key) {
	            _this2[key] = value;
	        });
	
	        // Merge `value` properties with existing
	        if (values) {
	            (function () {
	                var currentValues = _this2.values;
	                var defaultValue = _this2.getDefaultValue();
	
	                // Inherit values from props
	                (0, _uiUtils.each)(defaultValue, function (value, key) {
	                    if (propsToSet[key] !== undefined) {
	                        defaultValue[key] = propsToSet[key];
	                    }
	                });
	
	                // Overwrite per-value props
	                (0, _uiUtils.each)(values, function (value, key) {
	                    var existingValue = currentValues[key];
	                    var newValue = _extends({}, defaultValue);
	
	                    if ((0, _uiUtils.isObj)(value)) {
	                        newValue = _extends({}, newValue, value);
	                    } else {
	                        newValue[defaultValueProp] = value;
	                    }
	
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
	        # Get default Action properties
	         @return [object]
	    */
	
	    Action.prototype.getDefaultProps = function getDefaultProps() {
	        return {};
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
	
	    /*
	        # Extend this Action with new properties
	        ## Returns new instance of this Action's `prototype` with existing and new properties
	         @param [object] (optional)
	        @return [Action]
	    */
	
	    Action.prototype.extend = function extend(props) {
	        return new this.constructor(_extends({}, this, { props: props }), this.getDefaultValueProp());
	    };
	
	    return Action;
	})(_framesync.Process);
	
	exports.default = Action;
	;
	//# sourceMappingURL=data:application/json;base64,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LEVBQUU7QUFDVixlQUFPLElBQUksSUFBSSxDQUFDLFdBQVcsY0FBTSxJQUFJLElBQUUsS0FBSyxFQUFMLEtBQUssS0FBSSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDO0tBQy9FOztXQWpIZ0IsTUFBTTtjQUxsQixPQUFPOztrQkFLSyxNQUFNO0FBa0gxQixDQUFDIiwiZmlsZSI6IkFjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb2Nlc3MgfSBmcm9tICdmcmFtZXN5bmMnO1xuaW1wb3J0IHsgZWFjaCwgaXNPYmogfSBmcm9tICd1aS11dGlscyc7XG5cbmNvbnN0IERFRkFVTFRfUFJPUCA9ICdjdXJyZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0aW9uIGV4dGVuZHMgUHJvY2VzcyB7XG4gICAgLypcbiAgICAgICAgIyBBY3Rpb24gY2xhc3MgY29uc3RydWN0b3JcbiAgICAgICAgIyMgQXNzaWduIGRlZmF1bHQgcHJvcGVydGllcyBvZiBBY3Rpb24gb3IgZXh0ZW5kZWQgY2xhc3MgYW5kIHNldCB1c2VyLWRlZmluZWQgcHJvcHNcblxuICAgICAgICBAcGFyYW0gW29iamVjdF1cbiAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgLy8gTG9hZCBkZWZhdWx0IHByb3BzXG4gICAgICAgIGVhY2godGhpcy5nZXREZWZhdWx0UHJvcHMoKSwgKHZhbHVlLCBrZXkpID0+IHRoaXNba2V5XSA9IHZhbHVlKTtcblxuICAgICAgICB0aGlzLnZhbHVlcyA9IHt9O1xuICAgICAgICB0aGlzLnNldChwcm9wcywgdGhpcy5nZXREZWZhdWx0VmFsdWVQcm9wKCkpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgICMgU2V0IEFjdGlvbiBwcm9wZXJ0aWVzXG4gICAgICAgICMjIFNldCB1c2VyLWRlZmluZWQgQWN0aW9uIHByb3BlcnRpZXNcblxuICAgICAgICBAcGFyYW0gW29iamVjdF1cbiAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBOYW1lIG9mIGRlZmF1bHQgdmFsdWUgcHJvcGVydHkgKHNldCB3aGVuIGB2YWx1ZWAgaXMgKipub3QqKiBwcm92aWRlZCBhcyBvYmplY3QpXG4gICAgICAgIEByZXR1cm4gW0FjdGlvbl1cbiAgICAqL1xuICAgIHNldChwcm9wcywgZGVmYXVsdFZhbHVlUHJvcCA9IERFRkFVTFRfUFJPUCkge1xuICAgICAgICBjb25zdCB7IHZhbHVlcywgLi4ucHJvcHNUb1NldCB9ID0gcHJvcHM7XG5cbiAgICAgICAgLy8gTG9vcCB0aHJvdWdoIG5vbi1gdmFsdWVgIHByb3BzIGFuZCBzZXRcbiAgICAgICAgZWFjaChwcm9wc1RvU2V0LCAodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICAgICAgdGhpc1trZXldID0gdmFsdWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIE1lcmdlIGB2YWx1ZWAgcHJvcGVydGllcyB3aXRoIGV4aXN0aW5nXG4gICAgICAgIGlmICh2YWx1ZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZXMgPSB0aGlzLnZhbHVlcztcbiAgICAgICAgICAgIGNvbnN0IGRlZmF1bHRWYWx1ZSA9IHRoaXMuZ2V0RGVmYXVsdFZhbHVlKCk7XG5cbiAgICAgICAgICAgIC8vIEluaGVyaXQgdmFsdWVzIGZyb20gcHJvcHNcbiAgICAgICAgICAgIGVhY2goZGVmYXVsdFZhbHVlLCAodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1RvU2V0W2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWVba2V5XSA9IHByb3BzVG9TZXRba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gT3ZlcndyaXRlIHBlci12YWx1ZSBwcm9wc1xuICAgICAgICAgICAgZWFjaCh2YWx1ZXMsICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdWYWx1ZSA9IGN1cnJlbnRWYWx1ZXNba2V5XTtcbiAgICAgICAgICAgICAgICBsZXQgbmV3VmFsdWUgPSB7IC4uLmRlZmF1bHRWYWx1ZSB9O1xuXG4gICAgICAgICAgICAgICAgaWYgKGlzT2JqKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IHsgLi4ubmV3VmFsdWUsIC4uLnZhbHVlIH07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWVbZGVmYXVsdFZhbHVlUHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjdXJyZW50VmFsdWVzW2tleV0gPSBleGlzdGluZ1ZhbHVlID8geyAuLi5leGlzdGluZ1ZhbHVlLCAuLi5uZXdWYWx1ZSB9IDogbmV3VmFsdWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHBhdXNlKCkge1xuICAgICAgICBzdXBlci5zdG9wKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJlc3VtZSgpIHtcbiAgICAgICAgc3VwZXIuc3RhcnQoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgIyBHZXQgZGVmYXVsdCBBY3Rpb24gcHJvcGVydGllc1xuXG4gICAgICAgIEByZXR1cm4gW29iamVjdF1cbiAgICAqL1xuICAgIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgICMgR2V0IGRlZmF1bHQgQWN0aW9uIHZhbHVlIHByb3BlcnRpZXNcblxuICAgICAgICBAcmV0dXJuIFtvYmplY3RdXG4gICAgKi9cbiAgICBnZXREZWZhdWx0VmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjdXJyZW50OiAwLFxuICAgICAgICAgICAgdmVsb2NpdHk6IDBcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICAjIEdldCBkZWZhdWx0IEFjdGlvbiB2YWx1ZSBwcm9wZXJ0eSBuYW1lXG4gICAgICAgICMjIFNldCB0aGlzIGB2YWx1ZWAgcHJvcGVydHkgd2hlbiBzZXQgYXMgdmFsdWUgaW5zdGVhZCBvZiBvYmplY3RcblxuICAgICAgICBAcmV0dXJuIFtzdHJpbmddXG4gICAgKi9cbiAgICBnZXREZWZhdWx0VmFsdWVQcm9wKCkge1xuICAgICAgICByZXR1cm4gREVGQVVMVF9QUk9QO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgICMgRXh0ZW5kIHRoaXMgQWN0aW9uIHdpdGggbmV3IHByb3BlcnRpZXNcbiAgICAgICAgIyMgUmV0dXJucyBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBBY3Rpb24ncyBgcHJvdG90eXBlYCB3aXRoIGV4aXN0aW5nIGFuZCBuZXcgcHJvcGVydGllc1xuXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XSAob3B0aW9uYWwpXG4gICAgICAgIEByZXR1cm4gW0FjdGlvbl1cbiAgICAqL1xuICAgIGV4dGVuZChwcm9wcykge1xuICAgICAgICByZXR1cm4gbmV3IHRoaXMuY29uc3RydWN0b3IoeyAuLi50aGlzLCBwcm9wcyB9LCB0aGlzLmdldERlZmF1bHRWYWx1ZVByb3AoKSk7XG4gICAgfVxufTtcbiJdfQ==

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _createEasing = __webpack_require__(10);
	
	var _createEasing2 = _interopRequireDefault(_createEasing);
	
	var _uiUtils = __webpack_require__(8);
	
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
	    baseEasing[easingName] = generatePowerEasing(i + 3);
	});
	
	// Generate in/out/inOut variations
	(0, _uiUtils.each)(baseEasing, function (baseEase, key) {
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZXNldC1lYXNpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOEJBLElBQU0scUJBQXFCLEdBQUcsS0FBSyxDQUFDO0FBQ3BDLElBQU0sb0JBQW9CLEdBQUcsQ0FBQzs7O0FBQUMsQUFHL0IsSUFBTSxtQkFBbUIsR0FBRyxVQUFBLFFBQVE7V0FBSSxVQUFDLFFBQVEsRUFBRSxRQUFRO2VBQUssVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO0tBQUE7Q0FBQTs7Ozs7Ozs7QUFBQyxBQVFwRyxJQUFJLFVBQVUsR0FBRztBQUNiLFFBQUksRUFBRSxVQUFDLFFBQVE7WUFBRSxRQUFRLHlEQUFHLG9CQUFvQjt3QkFBSyxRQUFRLEVBQUksUUFBUTtLQUFBO0FBQ3pFLFFBQUksRUFBRSxVQUFBLFFBQVE7ZUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQUE7QUFDbkQsUUFBSSxFQUFFLFVBQUMsUUFBUTtZQUFFLFFBQVEseURBQUcscUJBQXFCO2VBQUssQUFBQyxRQUFRLEdBQUcsUUFBUSxJQUFLLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQSxHQUFJLFFBQVEsR0FBRyxRQUFRLENBQUEsQUFBQztLQUFBO0NBQ3ZILENBQUM7O0FBRUYsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLFVBQVUsRUFBRSxDQUFDLEVBQUU7QUFDekQsY0FBVSxDQUFDLFVBQVUsQ0FBQyxHQUFHLG1CQUFtQixDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztDQUN2RCxDQUFDOzs7QUFBQyxBQUdILGFBMUJTLElBQUksRUEwQlIsVUFBVSxFQUFFLFVBQUMsUUFBUSxFQUFFLEdBQUcsRUFBSztBQUNoQyxRQUFJLGNBQWMsR0FBRyw0QkFBYSxRQUFRLENBQUMsQ0FBQztBQUM1QyxjQUFVLENBQUksR0FBRyxRQUFLLEdBQUcsY0FBYyxDQUFDLEVBQUUsQ0FBQztBQUMzQyxjQUFVLENBQUksR0FBRyxTQUFNLEdBQUcsY0FBYyxDQUFDLEdBQUcsQ0FBQztBQUM3QyxjQUFVLENBQUksR0FBRyxXQUFRLEdBQUcsY0FBYyxDQUFDLEtBQUssQ0FBQztDQUNwRCxDQUFDLENBQUM7O0FBRUgsVUFBVSxDQUFDLE1BQU0sR0FBRyxVQUFBLFFBQVE7V0FBSSxRQUFRO0NBQUEsQ0FBQztBQUN6QyxVQUFVLENBQUMsVUFBVSxHQUFHLFVBQUMsUUFBUTtRQUFFLFFBQVEseURBQUcscUJBQXFCO1dBQy9ELEFBQUMsQ0FBQyxRQUFRLElBQUUsQ0FBQyxDQUFBLEdBQUksQ0FBQyxHQUFJLEdBQUcsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsR0FBSSxHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUEsQUFBQyxDQUFDLENBQUEsQUFBQztDQUFBLENBQUM7O2tCQUV4RyxVQUFVIiwiZmlsZSI6InByZXNldC1lYXNpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICAgIEVhc2luZyBmdW5jdGlvbnNcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgXG4gICAgR2VuZXJhdGVzIGFuZCBwcm92aWRlcyBlYXNpbmcgZnVuY3Rpb25zIGJhc2VkIG9uIGJhc2VGdW5jdGlvbiBkZWZpbml0aW9uc1xuICAgIFxuICAgIEEgY2FsbCB0byBlYXNpbmdGdW5jdGlvbi5nZXQoJ2Z1bmN0aW9uTmFtZScpIHJldHVybnMgYSBmdW5jdGlvbiB0aGF0IGNhbiBiZSBwYXNzZWQ6XG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogUHJvZ3Jlc3MgMC0xXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBBbXAgbW9kaWZpZXIsIG9ubHkgYWNjZXB0ZWQgaW4gc29tZSBlYXNpbmcgZnVuY3Rpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmQgaXMgdXNlZCB0byBhZGp1c3Qgb3ZlcmFsbCBzdHJlbmd0aFxuICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBFYXNlZCBwcm9ncmVzc1xuICAgICAgICBcbiAgICBXZSBjYW4gZ2VuZXJhdGUgbmV3IGZ1bmN0aW9ucyBieSBzZW5kaW5nIGFuIGVhc2luZyBmdW5jdGlvbiB0aHJvdWdoIGVhc2luZ0Z1bmN0aW9uLmV4dGVuZChuYW1lLCBtZXRob2QpLlxuICAgIFdoaWNoIHdpbGwgbWFrZSBuYW1lSW4sIG5hbWVPdXQgYW5kIG5hbWVJbk91dCBmdW5jdGlvbnMgYXZhaWxhYmxlIHRvIHVzZS5cbiAgICAgICAgXG4gICAgRWFzaW5nIGZ1bmN0aW9ucyBmcm9tIFJvYmVydCBQZW5uZXJcbiAgICBodHRwOi8vd3d3LnJvYmVydHBlbm5lci5jb20vZWFzaW5nL1xuICAgICAgICBcbiAgICBCZXppZXIgY3VydmUgaW50ZXJwcmV0b3IgY3JlYXRlZCBmcm9tIEdhw6t0YW4gUmVuYXVkZWF1J3Mgb3JpZ2luYWwgQmV6aWVyRWFzaW5nICBcbiAgICBodHRwczovL2dpdGh1Yi5jb20vZ3JlL2Jlemllci1lYXNpbmcvYmxvYi9tYXN0ZXIvaW5kZXguanMgIFxuICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZy9ibG9iL21hc3Rlci9MSUNFTlNFXG5cbiAgICBBbnRpY2lwYXRlIGVhc2luZyBjcmVhdGVkIGJ5IEVsbGlvdCBHaW5vXG4gICAgaHR0cHM6Ly90d2l0dGVyLmNvbS9FbGxpb3RHZW5vXG4qL1xuLy8gSW1wb3J0c1xuaW1wb3J0IGNyZWF0ZUVhc2luZyBmcm9tICcuL2NyZWF0ZS1lYXNpbmcnO1xuaW1wb3J0IHsgZWFjaCB9IGZyb20gJ3VpLXV0aWxzJztcblxuLy8gVmFsdWVzXG5jb25zdCBERUZBVUxUX0JBQ0tfU1RSRU5HVEggPSAxLjUyNTtcbmNvbnN0IERFRkFVTFRfUE9XX1NUUkVOR1RIID0gMjtcblxuLy8gVXRpbGl0eSBmdW5jdGlvbnNcbmNvbnN0IGdlbmVyYXRlUG93ZXJFYXNpbmcgPSBzdHJlbmd0aCA9PiAocHJvZ3Jlc3MsIHN0cmVuZ3RoKSA9PiBiYXNlRWFzaW5nLmVhc2UocHJvZ3Jlc3MsIHN0cmVuZ3RoKTtcblxuLypcbiAgICBFYWNoIG9mIHRoZXNlIGJhc2UgZnVuY3Rpb25zIGlzIGFuIGVhc2VJblxuICAgIFxuICAgIE9uIGluaXQsIHdlIHVzZSAubWlycm9yIGFuZCAucmV2ZXJzZSB0byBnZW5lcmF0ZSBlYXNlSW5PdXQgYW5kXG4gICAgZWFzZU91dCBmdW5jdGlvbnMgcmVzcGVjdGl2ZWx5LlxuKi9cbmxldCBiYXNlRWFzaW5nID0ge1xuICAgIGVhc2U6IChwcm9ncmVzcywgc3RyZW5ndGggPSBERUZBVUxUX1BPV19TVFJFTkdUSCkgPT4gcHJvZ3Jlc3MgKiogc3RyZW5ndGgsXG4gICAgY2lyYzogcHJvZ3Jlc3MgPT4gMSAtIE1hdGguc2luKE1hdGguYWNvcyhwcm9ncmVzcykpLFxuICAgIGJhY2s6IChwcm9ncmVzcywgc3RyZW5ndGggPSBERUZBVUxUX0JBQ0tfU1RSRU5HVEgpID0+IChwcm9ncmVzcyAqIHByb2dyZXNzKSAqICgoc3RyZW5ndGggKyAxKSAqIHByb2dyZXNzIC0gc3RyZW5ndGgpXG59O1xuXG5bJ2N1YmljJywgJ3F1YXJ0JywgJ3F1aW50J10uZm9yRWFjaChmdW5jdGlvbiAoZWFzaW5nTmFtZSwgaSkge1xuICAgIGJhc2VFYXNpbmdbZWFzaW5nTmFtZV0gPSBnZW5lcmF0ZVBvd2VyRWFzaW5nKGkgKyAzKTtcbn0pO1xuXG4vLyBHZW5lcmF0ZSBpbi9vdXQvaW5PdXQgdmFyaWF0aW9uc1xuZWFjaChiYXNlRWFzaW5nLCAoYmFzZUVhc2UsIGtleSkgPT4ge1xuICAgIGxldCBlYXNpbmdGdW5jdGlvbiA9IGNyZWF0ZUVhc2luZyhiYXNlRWFzZSk7XG4gICAgYmFzZUVhc2luZ1tgJHtrZXl9SW5gXSA9IGVhc2luZ0Z1bmN0aW9uLmluO1xuICAgIGJhc2VFYXNpbmdbYCR7a2V5fU91dGBdID0gZWFzaW5nRnVuY3Rpb24ub3V0O1xuICAgIGJhc2VFYXNpbmdbYCR7a2V5fUluT3V0YF0gPSBlYXNpbmdGdW5jdGlvbi5pbk91dDtcbn0pO1xuXG5iYXNlRWFzaW5nLmxpbmVhciA9IHByb2dyZXNzID0+IHByb2dyZXNzO1xuYmFzZUVhc2luZy5hbnRpY2lwYXRlID0gKHByb2dyZXNzLCBzdHJlbmd0aCA9IERFRkFVTFRfQkFDS19TVFJFTkdUSCkgPT5cbiAgICAoKHByb2dyZXNzKj0yKSA8IDEpID8gMC41ICogYmFzZUVhc2luZy5iYWNrSW4ocHJvZ3Jlc3MsIHN0cmVuZ3RoKSA6ICAwLjUgKiAoMiAtIE1hdGgucG93KDIsIC0xMCAqIChwcm9ncmVzcyAtIDEpKSk7XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VFYXNpbmc7Il19

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.toDecimal = exports.splitValueUnit = exports.isString = exports.isRelativeValue = exports.isObj = exports.isNum = exports.isFunc = exports.isArray = exports.hasProperty = exports.hasChanged = exports.each = exports.currentTime = exports.createBuffer = exports.camelToDash = undefined;
	
	var _bufferMethods = __webpack_require__(11);
	
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
	
	    array.push = _bufferMethods.push;
	    array._maxSize = maxSize || 0;
	
	    return array;
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
	
	var toDecimal = exports.toDecimal = function (num) {
	    var precision = arguments.length <= 1 || arguments[1] === undefined ? 2 : arguments[1];
	
	    precision = Math.pow(10, precision);
	    return Math.round(num * precision) / precision;
	};
	//# sourceMappingURL=data:application/json;base64,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UyxDQUFDLEdBQUcsU0FBUyxDQUFDO0NBQ2xELENBQUMiLCJmaWxlIjoiZW50cnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwdXNoIH0gZnJvbSAnLi9pbmMvYnVmZmVyLW1ldGhvZHMnO1xuXG5jb25zdCBDQU1FTF9DQVNFX1BBVFRFUk4gPSAvKFthLXpdKShbQS1aXSkvZztcbmNvbnN0IFJFUExBQ0VfVEVNUExBVEUgPSAnJDEtJDInO1xuY29uc3QgSEFTX1BFUkZPUk1BTkNFX05PVyA9ICh0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnICYmIHBlcmZvcm1hbmNlLm5vdyk7XG5cbi8qXG4gICAgR2V0IHZhciB0eXBlIGFzIHN0cmluZ1xuICAgIFxuICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgIEByZXR1cm4gW3N0cmluZ106IFJldHVybnMsIGZvciBpbnN0YW5jZSAnT2JqZWN0JyBpZiBbb2JqZWN0IE9iamVjdF1cbiovXG5jb25zdCB2YXJUeXBlID0gdmFyaWFibGUgPT4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhcmlhYmxlKS5zbGljZSg4LCAtMSk7XG5cbi8qXG4gICAgQ29udmVydCBjYW1lbENhc2UgdG8gZGFzaC1jYXNlXG5cbiAgICBAcGFyYW0gW3N0cmluZ11cbiAgICBAcmV0dXJuIFtzdHJpbmddXG4qL1xuZXhwb3J0IGNvbnN0IGNhbWVsVG9EYXNoID0gKHN0cmluZykgPT4gc3RyaW5nLnJlcGxhY2UoQ0FNRUxfQ0FTRV9QQVRURVJOLCBSRVBMQUNFX1RFTVBMQVRFKS50b0xvd2VyQ2FzZSgpO1xuXG4vKlxuICAgIENyZWF0ZSBhbiBhdXRvLWN1bGxpbmcgYnVmZmVyIGFycmF5XG5cbiAgICBAcGFyYW0gW2FycmF5XVxuICAgIEBwYXJhbSBbaW50XVxuICAgIEByZXR1cm4gW2FycmF5XVxuKi9cbmV4cG9ydCBjb25zdCBjcmVhdGVCdWZmZXIgPSAobWF4U2l6ZSA9IDMsIGFycmF5ID0gW10pID0+IHtcbiAgICBhcnJheS5wdXNoID0gcHVzaDtcbiAgICBhcnJheS5fbWF4U2l6ZSA9IG1heFNpemUgfHwgMDtcblxuICAgIHJldHVybiBhcnJheTtcbn1cblxuLypcbiAgICBHZW5lcmF0ZSBjdXJyZW50IHRpbWVzdGFtcFxuICAgIFxuICAgIEByZXR1cm4gW3RpbWVzdGFtcF06IEN1cnJlbnQgVU5JWCB0aW1lc3RhbXBcbiovXG5leHBvcnQgY29uc3QgY3VycmVudFRpbWUgPSAoKSA9PiBIQVNfUEVSRk9STUFOQ0VfTk9XID8gcGVyZm9ybWFuY2Uubm93KCkgOiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuLypcbiAgICBJdGVyYXRlIG92ZXIgYW4gb2JqZWN0IGFuZCBmaXJlIGEgY2FsbGJhY2sgZm9yIGV2ZXJ5IGl0ZW0gaW4gaXRcblxuICAgIEBwYXJhbSBbb2JqZWN0XTogT2JqZWN0IHRvIGl0ZXJhdGUgb3ZlclxuICAgIEBwYXJhbSBbZnVuY3Rpb25dOiBDYWxsYmFjayB0byBmaXJlXG4qL1xuZXhwb3J0IGNvbnN0IGVhY2ggPSAob2JqZWN0LCBjYWxsYmFjaykgPT4ge1xuICAgIGNvbnN0IGtleXMgPSBvYmplY3QgPyBPYmplY3Qua2V5cyhvYmplY3QpIDogW107XG4gICAgY29uc3QgbnVtS2V5cyA9IGtleXMubGVuZ3RoO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1LZXlzOyBpKyspIHtcbiAgICAgICAgY29uc3Qga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgY29uc3QgcHJvcCA9IG9iamVjdFtrZXldO1xuXG4gICAgICAgIGNhbGxiYWNrKHByb3AsIGtleSwgb2JqZWN0KTtcbiAgICB9XG59O1xuXG4vKlxuICAgIENoZWNrIGlmIHR3byBvYmplY3RzIGhhdmUgY2hhbmdlZCBmcm9tIGVhY2ggb3RoZXJcbiAgICBcbiAgICBAcGFyYW0gW29iamVjdF06IElucHV0IEFcbiAgICBAcGFyYW0gW29iamVjdF06IElucHV0IEJcbiAgICBAcmV0dXJuIFtib29sZWFuXTogVHJ1ZSBpZiBkaWZmZXJlbnRcbiovXG5leHBvcnQgY29uc3QgaGFzQ2hhbmdlZCA9IChhLCBiKSA9PiB7XG4gICAgbGV0IGNoYW5nZWQgPSBmYWxzZTtcblxuICAgIGVhY2goYSwgKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgaWYgKGhhc1Byb3BlcnR5KGIsIGtleSkpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gYltrZXldKSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNoYW5nZWQ7XG59O1xuXG4vKlxuICAgIENoZWNrIGlmIG9iamVjdCBoYXMgcHJvcGVydHkgYW5kIGl0IGlzbid0IHVuZGVmaW5lZFxuXG4gICAgQHBhcmFtIFtvYmplY3RdXG4gICAgQHBhcmFtIFtzdHJpbmddXG4gICAgQHJldHVybiBbYm9vbGVhbl1cbiovXG5leHBvcnQgY29uc3QgaGFzUHJvcGVydHkgPSAob2JqZWN0LCBwcm9wZXJ0eU5hbWUpID0+IG9iamVjdC5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eU5hbWUpICYmIG9iamVjdFtwcm9wZXJ0eU5hbWVdICE9PSB1bmRlZmluZWQ7XG5cbi8qXG4gICAgSXMgdXRpbHMgdmFyIGFuIGFycmF5ID8gXG4gICAgXG4gICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB1dGlscy52YXJUeXBlID09PSAnQXJyYXknXG4qL1xuZXhwb3J0IGNvbnN0IGlzQXJyYXkgPSAoYXJyKSA9PiB2YXJUeXBlKGFycikgPT09ICdBcnJheSc7XG5cbi8qXG4gICAgSXMgdXRpbHMgdmFyIGEgZnVuY3Rpb24gPyBcbiAgICBcbiAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHV0aWxzLnZhclR5cGUgPT09ICdGdW5jdGlvbidcbiovXG5leHBvcnQgY29uc3QgaXNGdW5jID0gKG9iaikgPT4gdmFyVHlwZShvYmopID09PSAnRnVuY3Rpb24nO1xuXG4vKlxuICAgIElzIHV0aWxzIHZhciBhIG51bWJlcj9cbiAgICBcbiAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiA9PT0gJ251bWJlcidcbiovXG5leHBvcnQgY29uc3QgaXNOdW0gPSAobnVtKSA9PiB0eXBlb2YgbnVtID09PSAnbnVtYmVyJztcblxuLypcbiAgICBJcyB1dGlscyB2YXIgYW4gb2JqZWN0P1xuICAgIFxuICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mID09PSAnb2JqZWN0J1xuKi9cbmV4cG9ydCBjb25zdCBpc09iaiA9IChvYmopID0+IHR5cGVvZiBvYmogPT09ICdvYmplY3QnO1xuXG4vKlxuICAgIElzIHV0aWxzIGEgcmVsYXRpdmUgdmFsdWUgYXNzaWdubWVudD9cbiAgICBcbiAgICBAcGFyYW0gW3N0cmluZ106IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtib29sZWFuXTogSWYgdXRpbHMgbG9va3MgbGlrZSBhIHJlbGF0aXZlIHZhbHVlIGFzc2lnbm1lbnRcbiovXG5leHBvcnQgY29uc3QgaXNSZWxhdGl2ZVZhbHVlID0gKHZhbHVlKSA9PiAodmFsdWUgJiYgdmFsdWUuaW5kZXhPZiAmJiB2YWx1ZS5pbmRleE9mKCc9JykgPiAwKSA/IHRydWUgOiBmYWxzZTtcblxuLypcbiAgICBJcyB1dGlscyB2YXIgYSBzdHJpbmcgPyBcbiAgICBcbiAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnXG4qL1xuZXhwb3J0IGNvbnN0IGlzU3RyaW5nID0gKHN0cikgPT4gdHlwZW9mIHN0ciA9PT0gJ3N0cmluZyc7XG5cbi8qXG4gICAgU3BsaXQgYSB2YWx1ZSBpbnRvIGEgdmFsdWUvdW5pdCBvYmplY3RcbiAgICBcbiAgICAgICAgXCIyMDBweFwiIC0+IHsgdmFsdWU6IDIwMCwgdW5pdDogXCJweFwiIH1cbiAgICAgICAgXG4gICAgQHBhcmFtIFtzdHJpbmddOiBWYWx1ZSB0byBzcGxpdFxuICAgIEByZXR1cm4gW29iamVjdF06IE9iamVjdCB3aXRoIHZhbHVlIGFuZCB1bml0IHByb3BzXG4qL1xuZXhwb3J0IGNvbnN0IHNwbGl0VmFsdWVVbml0ID0gKHZhbHVlKSA9PiB7XG4gICAgY29uc3Qgc3BsaXRWYWwgPSB2YWx1ZS5tYXRjaCgvKC0/XFxkKlxcLj9cXGQqKSguKikvKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHZhbHVlOiBwYXJzZUZsb2F0KHNwbGl0VmFsWzFdKSxcbiAgICAgICAgdW5pdDogIHNwbGl0VmFsWzJdXG4gICAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCB0b0RlY2ltYWwgPSAobnVtLCBwcmVjaXNpb24gPSAyKSA9PiB7XG4gICAgcHJlY2lzaW9uID0gMTAgKiogcHJlY2lzaW9uO1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG51bSAqIHByZWNpc2lvbikgLyBwcmVjaXNpb247XG59O1xuXG4iXX0=

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.stepProgress = exports.speedPerSecond = exports.speedPerFrame = exports.smooth = exports.restrict = exports.relativeValue = exports.random = exports.radiansToDegrees = exports.pointFromAngleAndDistance = exports.offset = exports.getProgressFromValue = exports.getValueFromProgress = exports.hypotenuse = exports.distance = exports.dilate = exports.degreesToRadians = exports.angle = undefined;
	
	var _uiUtils = __webpack_require__(8);
	
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
	    if ((0, _uiUtils.isNum)(a)) {
	        return distance1D(a, b);
	
	        // Multi-dimensional
	    } else {
	            var xDelta = distance1D(a.x, b.x);
	            var yDelta = distance1D(a.y, b.y);
	            var zDelta = (0, _uiUtils.isNum)(a.z) ? distance1D(a.z, b.z) : 0;
	
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
	
	    (0, _uiUtils.each)(b, function (value, key) {
	        offset[key] = (0, _uiUtils.hasProperty)(a, key) ? value - a[key] : 0;
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
	
	    var _splitValueUnit = (0, _uiUtils.splitValueUnit)(equation[1]);
	
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
	    return (0, _uiUtils.toDecimal)(oldValue + duration * (newValue - oldValue) / Math.max(smoothing, duration));
	};
	
	/*
	    Convert x per second to per frame velocity based on fps
	    
	    @param [number]: Unit per second
	    @param [number]: Frame duration in ms
	*/
	var speedPerFrame = exports.speedPerFrame = function (xps, frameDuration) {
	    return (0, _uiUtils.isNum)(xps) ? xps / (1000 / frameDuration) : 0;
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
	//# sourceMappingURL=data:application/json;base64,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LFFBQVEsR0FBSSxRQUFRLElBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQSxBQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLEFBQUMsQ0FBQztDQUFBOzs7Ozs7OztBQUFDLEFBUXpKLElBQU0sYUFBYSxXQUFiLGFBQWEsR0FBRyxVQUFDLEdBQUcsRUFBRSxhQUFhO1dBQUssQUFBQyxhQTVPbEQsS0FBSyxFQTRPbUQsR0FBRyxDQUFDLEdBQUksR0FBRyxJQUFJLElBQUksR0FBRyxhQUFhLENBQUEsQUFBQyxHQUFHLENBQUM7Q0FBQTs7Ozs7Ozs7QUFBQyxBQVE5RixJQUFNLGNBQWMsV0FBZCxjQUFjLEdBQUcsVUFBQyxRQUFRLEVBQUUsYUFBYTtXQUFLLFFBQVEsSUFBSSxJQUFJLEdBQUcsYUFBYSxDQUFBLEFBQUM7Q0FBQTs7Ozs7Ozs7O0FBQUMsQUFTdEYsSUFBTSxZQUFZLFdBQVosWUFBWSxHQUFHLFVBQUMsUUFBUSxFQUFFLEtBQUssRUFBSztBQUM3QyxRQUFNLE9BQU8sR0FBRyxDQUFDLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQSxBQUFDLENBQUM7QUFDaEMsUUFBTSxNQUFNLEdBQUcsQ0FBQyxHQUFJLENBQUMsR0FBRyxLQUFLLEFBQUMsQ0FBQztBQUMvQixRQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQzs7QUFFeEQsV0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxHQUFHLE9BQU8sQ0FBQztDQUMzRCxDQUFDIiwiZmlsZSI6ImVudHJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBlYWNoLFxuICAgIGhhc1Byb3BlcnR5LFxuICAgIGlzTnVtLFxuICAgIHNwbGl0VmFsdWVVbml0LFxuICAgIHRvRGVjaW1hbFxufSBmcm9tICd1aS11dGlscyc7XG5cbmNvbnN0IFpFUk9fUE9JTlQgPSB7XG4gICAgeDogMCxcbiAgICB5OiAwLFxuICAgIHo6IDBcbn07XG5cbmNvbnN0IGRpc3RhbmNlMUQgPSAoYSwgYikgPT4gTWF0aC5hYnMoYSAtIGIpO1xuXG4vKlxuICAgIEFuZ2xlIGJldHdlZW4gcG9pbnRzXG4gICAgXG4gICAgVHJhbnNsYXRlcyB0aGUgaHlwb3RoZXRpY2FsIGxpbmUgc28gdGhhdCB0aGUgJ2Zyb20nIGNvb3JkaW5hdGVzXG4gICAgYXJlIGF0IDAsMCwgdGhlbiByZXR1cm4gdGhlIGFuZ2xlIHVzaW5nIC5hbmdsZUZyb21DZW50ZXIoKVxuICAgIFxuICAgIEBwYXJhbSBbb2JqZWN0XTogWCBhbmQgWSBjb29yZGluYXRlcyBvZiBmcm9tIHBvaW50XG4gICAgQHBhcmFtIFtvYmplY3RdOiBYIGFuZCBZIGNvcmRpbmF0ZXMgb2YgdG8gcG9pbnRcbiAgICBAcmV0dXJuIFtyYWRpYW5dOiBBbmdsZSBiZXR3ZWVuIHRoZSB0d28gcG9pbnRzIGluIHJhZGlhbnNcbiovXG5leHBvcnQgY29uc3QgYW5nbGUgPSAoYSwgYiA9IFpFUk9fUE9JTlQpID0+IHJhZGlhbnNUb0RlZ3JlZXMoTWF0aC5hdGFuMihhLnggLSBiLngsIGEueSAtIGIueSkpO1xuXG4vKlxuICAgIENvbnZlcnQgZGVncmVlcyB0byByYWRpYW5zXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBpbiBkZWdyZWVzXG4gICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgaW4gcmFkaWFuc1xuKi9cbmV4cG9ydCBjb25zdCBkZWdyZWVzVG9SYWRpYW5zID0gKGRlZ3JlZXMpID0+IGRlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwO1xuXG4vKlxuICAgIERpbGF0ZVxuICAgIFxuICAgIENoYW5nZSB0aGUgcHJvZ3Jlc3Npb24gYmV0d2VlbiBhIGFuZCBiIGFjY29yZGluZyB0byBkaWxhdGlvbi5cbiAgICBcbiAgICBTbyBkaWxhdGlvbiA9IDAuNSB3b3VsZCBjaGFuZ2VcbiAgICBcbiAgICBhIC0tLS0tLS0tLSBiXG4gICAgXG4gICAgdG9cbiAgICBcbiAgICBhIC0tLS0gYlxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogUHJldmlvdXMgdmFsdWVcbiAgICBAcGFyYW0gW251bWJlcl06IEN1cnJlbnQgdmFsdWVcbiAgICBAcGFyYW0gW251bWJlcl06IERpbGF0ZSBwcm9ncmVzcyBieSB4XG4gICAgQHJldHVybiBbbnVtYmVyXTogUHJldmlvdXMgdmFsdWUgcGx1cyB0aGUgZGlsYXRlZCBkaWZmZXJlbmNlXG4qL1xuZXhwb3J0IGNvbnN0IGRpbGF0ZSA9IChhLCBiLCBkaWxhdGlvbikgPT4gYSArICgoYiAtIGEpICogZGlsYXRpb24pO1xuXG4vKlxuICAgIERpc3RhbmNlXG4gICAgXG4gICAgUmV0dXJucyB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0d28gbiBkaW1lbnNpb25hbCBwb2ludHMuXG4gICAgXG4gICAgQHBhcmFtIFtvYmplY3QvbnVtYmVyXTogeCBhbmQgeSBvciBqdXN0IHggb2YgcG9pbnQgQVxuICAgIEBwYXJhbSBbb2JqZWN0L251bWJlcl06IChvcHRpb25hbCk6IHggYW5kIHkgb3IganVzdCB4IG9mIHBvaW50IEJcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBUaGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgdHdvIHBvaW50c1xuKi9cbmV4cG9ydCBjb25zdCBkaXN0YW5jZSA9IChhLCBiID0gWkVST19QT0lOVCkgPT4ge1xuICAgIC8vIDFEIGRpbWVuc2lvbnNcbiAgICBpZiAoaXNOdW0oYSkpIHtcbiAgICAgICAgcmV0dXJuIGRpc3RhbmNlMUQoYSwgYik7XG5cbiAgICAvLyBNdWx0aS1kaW1lbnNpb25hbFxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHhEZWx0YSA9IGRpc3RhbmNlMUQoYS54LCBiLngpO1xuICAgICAgICBjb25zdCB5RGVsdGEgPSBkaXN0YW5jZTFEKGEueSwgYi55KTtcbiAgICAgICAgY29uc3QgekRlbHRhID0gKGlzTnVtKGEueikpID8gZGlzdGFuY2UxRChhLnosIGIueikgOiAwO1xuXG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoKHhEZWx0YSAqKiAyKSArICh5RGVsdGEgKiogMikgKyAoekRlbHRhICoqIDIpKTtcbiAgICB9XG59O1xuIFxuLypcbiAgICBIeXBvdGVudXNlXG4gICAgXG4gICAgUmV0dXJucyB0aGUgaHlwb3RlbnVzZSwgc2lkZSBDLCBnaXZlbiB0aGUgbGVuZ3RocyBvZiBzaWRlcyBBIGFuZCBCLlxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogTGVuZ3RoIG9mIEFcbiAgICBAcGFyYW0gW251bWJlcl06IExlbmd0aCBvZiBCXG4gICAgQHJldHVybiBbbnVtYmVyXTogTGVuZ3RoIG9mIENcbiovXG5leHBvcnQgY29uc3QgaHlwb3RlbnVzZSA9IChhLCBiKSA9PiBNYXRoLnNxcnQoKGEgKiBhKSArIChiICogYikpO1xuXG4vKlxuICAgIFZhbHVlIGluIHJhbmdlIGZyb20gcHJvZ3Jlc3NcbiAgICBcbiAgICBHaXZlbiBhIGxvd2VyIGxpbWl0IGFuZCBhbiB1cHBlciBsaW1pdCwgd2UgcmV0dXJuIHRoZSB2YWx1ZSB3aXRoaW5cbiAgICB0aGF0IHJhbmdlIGFzIGV4cHJlc3NlZCBieSBwcm9ncmVzcyAoYSBudW1iZXIgZnJvbSAwLTEpXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBUaGUgcHJvZ3Jlc3MgYmV0d2VlbiBsb3dlciBhbmQgdXBwZXIgbGltaXRzIGV4cHJlc3NlZCAwLTFcbiAgICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IG9mIHJhbmdlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBVcHBlciBsaW1pdCBvZiByYW5nZVxuICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGFzIGNhbGN1bGF0ZWQgZnJvbSBwcm9ncmVzcyB3aXRoaW4gcmFuZ2UgKG5vdCBsaW1pdGVkIHdpdGhpbiByYW5nZSlcbiovXG5leHBvcnQgY29uc3QgZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MgPSAocHJvZ3Jlc3MsIGZyb20sIHRvKSA9PiAoLSBwcm9ncmVzcyAqIGZyb20pICsgKHByb2dyZXNzICogdG8pICsgZnJvbTtcblxuLypcbiAgICBQcm9ncmVzcyB3aXRoaW4gZ2l2ZW4gcmFuZ2VcbiAgICBcbiAgICBHaXZlbiBhIGxvd2VyIGxpbWl0IGFuZCBhbiB1cHBlciBsaW1pdCwgd2UgcmV0dXJuIHRoZSBwcm9ncmVzc1xuICAgIChleHByZXNzZWQgYXMgYSBudW1iZXIgMC0xKSByZXByZXNlbnRlZCBieSB0aGUgZ2l2ZW4gdmFsdWUsIGFuZFxuICAgIGxpbWl0IHRoYXQgcHJvZ3Jlc3MgdG8gd2l0aGluIDAtMS5cbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIHRvIGZpbmQgcHJvZ3Jlc3Mgd2l0aGluIGdpdmVuIHJhbmdlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBMb3dlciBsaW1pdCBcbiAgICBAcGFyYW0gW251bWJlcl06IFVwcGVyIGxpbWl0XG4gICAgQHJldHVybiBbbnVtYmVyXTogUHJvZ3Jlc3Mgb2YgdmFsdWUgd2l0aGluIHJhbmdlIGFzIGV4cHJlc3NlZCAwLTFcbiovXG5leHBvcnQgY29uc3QgZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUgPSAodmFsdWUsIGZyb20sIHRvKSA9PiAodmFsdWUgLSBmcm9tKSAvICh0byAtIGZyb20pO1xuXG4vKlxuICAgIE9mZnNldCBiZXR3ZWVuIHR3byBvYmplY3RzIG9mIG51bWJlcnNcblxuICAgIElmIHByb3BlcnR5IGlzIGZvdW5kIGluIGIgbm90IHByZXNlbnQgaW4gYSwgaXQgd2lsbCByZXR1cm4gYDBgIGZvciB0aGF0IHByb3AuXG4gICAgXG4gICAgQHBhcmFtIFtQb2ludF06IEZpcnN0IG9iamVjdFxuICAgIEBwYXJhbSBbUG9pbnRdOiBTZWNvbmQgb2JqZWN0XG4gICAgQHJldHVybiBbT2Zmc2V0XTogRGlzdGFuY2UgbWV0cmljcyBiZXR3ZWVuIHR3byBwb2ludHNcbiovXG5leHBvcnQgY29uc3Qgb2Zmc2V0ID0gKGEsIGIpID0+IHtcbiAgICBjb25zdCBvZmZzZXQgPSB7fTtcblxuICAgIGVhY2goYiwgKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgb2Zmc2V0W2tleV0gPSBoYXNQcm9wZXJ0eShhLCBrZXkpID8gdmFsdWUgLSBhW2tleV0gOiAwO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG9mZnNldDtcbn07XG5cbi8qXG4gICAgUG9pbnQgZnJvbSBhbmdsZSBhbmQgZGlzdGFuY2VcbiAgICBcbiAgICBAcGFyYW0gW29iamVjdF06IDJEIHBvaW50IG9mIG9yaWdpblxuICAgIEBwYXJhbSBbbnVtYmVyXTogQW5nbGUgZnJvbSBvcmlnaW5cbiAgICBAcGFyYW0gW251bWJlcl06IERpc3RhbmNlIGZyb20gb3JpZ2luXG4gICAgQHJldHVybiBbb2JqZWN0XTogQ2FsY3VsYXRlZCAyRCBwb2ludFxuKi9cbmV4cG9ydCBjb25zdCBwb2ludEZyb21BbmdsZUFuZERpc3RhbmNlID0gKG9yaWdpbiwgYW5nbGUsIGRpc3RhbmNlKSA9PiB7XG4gICAgYW5nbGUgPSBkZWdyZWVzVG9SYWRpYW5zKGFuZ2xlKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHg6IGRpc3RhbmNlICogTWF0aC5jb3MoYW5nbGUpICsgb3JpZ2luLngsXG4gICAgICAgIHk6IGRpc3RhbmNlICogTWF0aC5zaW4oYW5nbGUpICsgb3JpZ2luLnlcbiAgICB9O1xufTtcblxuLypcbiAgICBDb252ZXJ0IHJhZGlhbnMgdG8gZGVncmVlc1xuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgaW4gcmFkaWFuc1xuICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGluIGRlZ3JlZXNcbiovXG5leHBvcnQgY29uc3QgcmFkaWFuc1RvRGVncmVlcyA9IChyYWRpYW5zKSA9PiByYWRpYW5zICogMTgwIC8gTWF0aC5QSTtcblxuLypcbiAgICBSZXR1cm4gcmFuZG9tIG51bWJlciBiZXR3ZWVuIHJhbmdlXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IE91dHB1dCBtaW5pbXVtXG4gICAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IE91dHB1dCBtYXhpbXVtXG4gICAgQHJldHVybiBbbnVtYmVyXTogUmFuZG9tIG51bWJlciB3aXRoaW4gcmFuZ2UsIG9yIDAgYW5kIDEgaWYgbm9uZSBwcm92aWRlZFxuKi9cbmV4cG9ydCBjb25zdCByYW5kb20gPSAobWluID0gMCwgbWF4ID0gMSkgPT4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xuXG4vKlxuICAgIENhbGN1bGF0ZSByZWxhdGl2ZSB2YWx1ZVxuICAgIFxuICAgIFRha2VzIHRoZSBvcGVyYXRvciBhbmQgdmFsdWUgZnJvbSBhIHN0cmluZywgaWUgXCIrPTVcIiwgYW5kIGFwcGxpZXNcbiAgICB0byB0aGUgY3VycmVudCB2YWx1ZSB0byByZXNvbHZlIGEgbmV3IHRhcmdldC5cbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IEN1cnJlbnQgdmFsdWVcbiAgICBAcGFyYW0gW3N0cmluZ106IFJlbGF0aXZlIHZhbHVlXG4gICAgQHJldHVybiBbbnVtYmVyXTogTmV3IHZhbHVlXG4qL1xuZXhwb3J0IGNvbnN0IHJlbGF0aXZlVmFsdWUgPSAoY3VycmVudCwgcmVsYXRpdmUpID0+IHtcbiAgICBsZXQgbmV3VmFsdWUgPSBjdXJyZW50O1xuICAgIGNvbnN0IGVxdWF0aW9uID0gcmVsYXRpdmUuc3BsaXQoJz0nKTtcbiAgICBjb25zdCBvcGVyYXRvciA9IGVxdWF0aW9uWzBdO1xuICAgIGxldCB7IHVuaXQsIHZhbHVlIH0gPSBzcGxpdFZhbHVlVW5pdChlcXVhdGlvblsxXSk7XG5cbiAgICB2YWx1ZSA9IHBhcnNlRmxvYXQodmFsdWUpO1xuXG4gICAgc3dpdGNoIChvcGVyYXRvcikge1xuICAgICAgICBjYXNlICcrJzpcbiAgICAgICAgICAgIG5ld1ZhbHVlICs9IHZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJy0nOlxuICAgICAgICAgICAgbmV3VmFsdWUgLT0gdmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnKic6XG4gICAgICAgICAgICBuZXdWYWx1ZSAqPSB2YWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICcvJzpcbiAgICAgICAgICAgIG5ld1ZhbHVlIC89IHZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIFxuICAgIGlmICh1bml0KSB7XG4gICAgICAgIG5ld1ZhbHVlICs9IHVuaXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld1ZhbHVlO1xufTtcblxuLypcbiAgICBSZXN0cmljdCB2YWx1ZSB0byByYW5nZVxuICAgIFxuICAgIFJldHVybiB2YWx1ZSB3aXRoaW4gdGhlIHJhbmdlIG9mIGxvd2VyTGltaXQgYW5kIHVwcGVyTGltaXRcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIHRvIGtlZXAgd2l0aGluIHJhbmdlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBMb3dlciBsaW1pdCBvZiByYW5nZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogVXBwZXIgbGltaXQgb2YgcmFuZ2VcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBhcyBsaW1pdGVkIHdpdGhpbiBnaXZlbiByYW5nZVxuKi9cbmV4cG9ydCBjb25zdCByZXN0cmljdCA9ICh2YWx1ZSwgbWluLCBtYXgpID0+IE1hdGgubWF4KE1hdGgubWluKHZhbHVlLCBtYXgpLCBtaW4pO1xuXG4vKlxuICAgIEZyYW1lcmF0ZS1pbmRlcGVuZGVudCBzbW9vdGhpbmdcblxuICAgIEBwYXJhbSBbbnVtYmVyXTogTmV3IHZhbHVlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBPbGQgdmFsdWVcbiAgICBAcGFyYW0gW251bWJlcl06IEZyYW1lIGR1cmF0aW9uXG4gICAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IFNtb290aGluZyAoMCBpcyBub25lKVxuKi9cbmV4cG9ydCBjb25zdCBzbW9vdGggPSAobmV3VmFsdWUsIG9sZFZhbHVlLCBkdXJhdGlvbiwgc21vb3RoaW5nID0gMCkgPT4gdG9EZWNpbWFsKG9sZFZhbHVlICsgKGR1cmF0aW9uICogKG5ld1ZhbHVlIC0gb2xkVmFsdWUpIC8gTWF0aC5tYXgoc21vb3RoaW5nLCBkdXJhdGlvbikpKTtcblxuLypcbiAgICBDb252ZXJ0IHggcGVyIHNlY29uZCB0byBwZXIgZnJhbWUgdmVsb2NpdHkgYmFzZWQgb24gZnBzXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBVbml0IHBlciBzZWNvbmRcbiAgICBAcGFyYW0gW251bWJlcl06IEZyYW1lIGR1cmF0aW9uIGluIG1zXG4qL1xuZXhwb3J0IGNvbnN0IHNwZWVkUGVyRnJhbWUgPSAoeHBzLCBmcmFtZUR1cmF0aW9uKSA9PiAoaXNOdW0oeHBzKSkgPyB4cHMgLyAoMTAwMCAvIGZyYW1lRHVyYXRpb24pIDogMDtcblxuLypcbiAgICBDb252ZXJ0IHZlbG9jaXR5IGludG8gdmVsaWNpdHkgcGVyIHNlY29uZFxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVW5pdCBwZXIgZnJhbWVcbiAgICBAcGFyYW0gW251bWJlcl06IEZyYW1lIGR1cmF0aW9uIGluIG1zXG4qL1xuZXhwb3J0IGNvbnN0IHNwZWVkUGVyU2Vjb25kID0gKHZlbG9jaXR5LCBmcmFtZUR1cmF0aW9uKSA9PiB2ZWxvY2l0eSAqICgxMDAwIC8gZnJhbWVEdXJhdGlvbik7XG5cbi8qXG4gICAgQ3JlYXRlIHN0ZXBwZWQgdmVyc2lvbiBvZiAwLTEgcHJvZ3Jlc3NcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IEN1cnJlbnQgdmFsdWVcbiAgICBAcGFyYW0gW2ludF06IE51bWJlciBvZiBzdGVwc1xuICAgIEByZXR1cm4gW251bWJlcl06IFN0ZXBwZWQgdmFsdWVcbiovXG5leHBvcnQgY29uc3Qgc3RlcFByb2dyZXNzID0gKHByb2dyZXNzLCBzdGVwcykgPT4ge1xuICAgIGNvbnN0IHNlZ21lbnQgPSAxIC8gKHN0ZXBzIC0gMSk7XG4gICAgY29uc3QgdGFyZ2V0ID0gMSAtICgxIC8gc3RlcHMpO1xuICAgIGNvbnN0IHByb2dyZXNzT2ZUYXJnZXQgPSBNYXRoLm1pbihwcm9ncmVzcyAvIHRhcmdldCwgMSk7XG5cbiAgICByZXR1cm4gTWF0aC5mbG9vcihwcm9ncmVzc09mVGFyZ2V0IC8gc2VnbWVudCkgKiBzZWdtZW50O1xufTsiXX0=

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = createEasing;
	
	var _Bezier = __webpack_require__(13);
	
	var _Bezier2 = _interopRequireDefault(_Bezier);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
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
	function createEasing(x1, y1, x2, y2) {
	    var method = x1;
	    var easingFunction = undefined;
	
	    // If this is a bezier curve, return a bezier function
	    if (arguments.length > 1) {
	        easingFunction = new _Bezier2.default(x1, y1, x2, y2);
	    } else {
	        easingFunction = function (progress, strength) {
	            return method(progress, strength);
	        };
	        easingFunction.in = function (progress, strength) {
	            return method(progress, strength);
	        };
	        easingFunction.out = reverseEasing(method);
	        easingFunction.inOut = mirrorEasing(method);
	    }
	
	    return easingFunction;
	}
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1lYXNpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O2tCQWtDd0IsWUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdEJwQyxJQUFNLFlBQVksR0FBRyxVQUFBLE1BQU07V0FBSSxVQUFDLFFBQVEsRUFBRSxRQUFRO2VBQUssQUFBQyxRQUFRLElBQUksR0FBRyxHQUFJLE1BQU0sQ0FBQyxDQUFDLEdBQUcsUUFBUSxFQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUEsQUFBQyxFQUFFLFFBQVEsQ0FBQyxDQUFBLEdBQUksQ0FBQztLQUFBO0NBQUE7Ozs7Ozs7Ozs7OztBQUFDLEFBWS9KLElBQU0sYUFBYSxHQUFHLFVBQUEsTUFBTTtXQUFJLFVBQUMsUUFBUSxFQUFFLFFBQVE7ZUFBSyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsR0FBRyxRQUFRLEVBQUUsUUFBUSxDQUFDO0tBQUE7Q0FBQTs7Ozs7Ozs7OztBQUFDLEFBVTVFLFNBQVMsWUFBWSxDQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtBQUNsRCxRQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7QUFDbEIsUUFBSSxjQUFjLFlBQUE7OztBQUFDLEFBR25CLFFBQUksU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7QUFDdEIsc0JBQWMsR0FBRyxxQkFBVyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztLQUUvQyxNQUFNO0FBQ0gsc0JBQWMsR0FBRyxVQUFDLFFBQVEsRUFBRSxRQUFRO21CQUFLLE1BQU0sQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO1NBQUEsQ0FBQztBQUNwRSxzQkFBYyxDQUFDLEVBQUUsR0FBRyxVQUFDLFFBQVEsRUFBRSxRQUFRO21CQUFLLE1BQU0sQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO1NBQUEsQ0FBQztBQUN2RSxzQkFBYyxDQUFDLEdBQUcsR0FBRyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDM0Msc0JBQWMsQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQy9DOztBQUVELFdBQU8sY0FBYyxDQUFDO0NBQ3pCIiwiZmlsZSI6ImNyZWF0ZS1lYXNpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmV6aWVyIGZyb20gJy4vQmV6aWVyJztcblxuLypcbiAgICBNaXJyb3IgZWFzaW5nXG4gICAgXG4gICAgTWlycm9ycyB0aGUgcHJvdmlkZWQgZWFzaW5nIGZ1bmN0aW9uLCB1c2VkIGhlcmUgZm9yIG1pcnJvcmluZyBhblxuICAgIGVhc2VJbiBpbnRvIGFuIGVhc2VJbk91dFxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogUHJvZ3Jlc3MsIGZyb20gMCAtIDEsIG9mIGN1cnJlbnQgc2hpZnRcbiAgICBAcGFyYW0gW2Z1bmN0aW9uXTogVGhlIGVhc2luZyBmdW5jdGlvbiB0byBtaXJyb3JcbiAgICBAcmV0dXJucyBbbnVtYmVyXTogVGhlIGVhc2luZy1hZGp1c3RlZCBkZWx0YVxuKi9cbmNvbnN0IG1pcnJvckVhc2luZyA9IG1ldGhvZCA9PiAocHJvZ3Jlc3MsIHN0cmVuZ3RoKSA9PiAocHJvZ3Jlc3MgPD0gMC41KSA/IG1ldGhvZCgyICogcHJvZ3Jlc3MsIHN0cmVuZ3RoKSAvIDIgOiAoMiAtIG1ldGhvZCgyICogKDEgLSBwcm9ncmVzcyksIHN0cmVuZ3RoKSkgLyAyO1xuICAgICAgICBcbi8qXG4gICAgUmV2ZXJzZSBlYXNpbmdcbiAgICBcbiAgICBSZXZlcnNlcyB0aGUgb3V0cHV0IG9mIHRoZSBwcm92aWRlZCBlYXNpbmcgZnVuY3Rpb24sIHVzZWQgZm9yIGZsaXBwaW5nIGVhc2VJblxuICAgIGN1cnZlIHRvIGFuIGVhc2VPdXQuXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBQcm9ncmVzcywgZnJvbSAwIC0gMSwgb2YgY3VycmVudCBzaGlmdFxuICAgIEBwYXJhbSBbZnVuY3Rpb25dOiBUaGUgZWFzaW5nIGZ1bmN0aW9uIHRvIHJldmVyc2VcbiAgICBAcmV0dXJucyBbbnVtYmVyXTogVGhlIGVhc2luZy1hZGp1c3RlZCBkZWx0YVxuKi9cbmNvbnN0IHJldmVyc2VFYXNpbmcgPSBtZXRob2QgPT4gKHByb2dyZXNzLCBzdHJlbmd0aCkgPT4gMSAtIG1ldGhvZCgxIC0gcHJvZ3Jlc3MsIHN0cmVuZ3RoKTtcblxuLypcbiAgICBFYXNpbmcgY2xhc3NcblxuICAgIElmIHByb3ZpZGVkIGVhc2luZyBmdW5jdGlvbiwgcmV0dXJucyBlYXNpbmcgZnVuY3Rpb24gd2l0aCBcbiAgICBpbi9vdXQvaW5PdXQgdmFyaWF0aW9uc1xuXG4gICAgSWYgcHJvdmlkZWQgZm91ciBhcmd1bWVudHMsIHJldHVybnMgbmV3IEJlemllciBjbGFzcyBpbnN0ZWFkLlxuKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUVhc2luZyAoeDEsIHkxLCB4MiwgeTIpIHtcbiAgICBjb25zdCBtZXRob2QgPSB4MTtcbiAgICBsZXQgZWFzaW5nRnVuY3Rpb247XG5cbiAgICAvLyBJZiB0aGlzIGlzIGEgYmV6aWVyIGN1cnZlLCByZXR1cm4gYSBiZXppZXIgZnVuY3Rpb25cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZWFzaW5nRnVuY3Rpb24gPSBuZXcgQmV6aWVyKHgxLCB5MSwgeDIsIHkyKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIGVhc2luZ0Z1bmN0aW9uID0gKHByb2dyZXNzLCBzdHJlbmd0aCkgPT4gbWV0aG9kKHByb2dyZXNzLCBzdHJlbmd0aCk7XG4gICAgICAgIGVhc2luZ0Z1bmN0aW9uLmluID0gKHByb2dyZXNzLCBzdHJlbmd0aCkgPT4gbWV0aG9kKHByb2dyZXNzLCBzdHJlbmd0aCk7XG4gICAgICAgIGVhc2luZ0Z1bmN0aW9uLm91dCA9IHJldmVyc2VFYXNpbmcobWV0aG9kKTtcbiAgICAgICAgZWFzaW5nRnVuY3Rpb24uaW5PdXQgPSBtaXJyb3JFYXNpbmcobWV0aG9kKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWFzaW5nRnVuY3Rpb247XG59XG4iXX0=

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.push = push;
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmMvYnVmZmVyLW1ldGhvZHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O1FBQWdCLElBQUksR0FBSixJQUFJO0FBQWIsU0FBUyxJQUFJLEdBQVU7OztzQ0FBTixJQUFJO0FBQUosWUFBSTs7O0FBQ3hCLDZCQUFBLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFDLElBQUksTUFBQSx5QkFBQyxJQUFJLFNBQUssSUFBSSxFQUFDLENBQUM7O0FBRXpDLFFBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO0FBQzlCLFlBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztLQUNoQjtDQUNKIiwiZmlsZSI6ImJ1ZmZlci1tZXRob2RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHB1c2goLi4uYXJncykge1xuICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmNhbGwodGhpcywgLi4uYXJncyk7XG5cbiAgICBpZiAodGhpcy5sZW5ndGggPj0gdGhpcy5fbWF4U2l6ZSkge1xuICAgICAgICB0aGlzLnNoaWZ0KCk7XG4gICAgfVxufSJdfQ==

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.setDilation = exports.setSteps = exports.Process = undefined;
	
	var _Process = __webpack_require__(14);
	
	var _Process2 = _interopRequireDefault(_Process);
	
	var _loop = __webpack_require__(15);
	
	var _timer = __webpack_require__(16);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Process = _Process2.default;
	exports.setSteps = _loop.setSteps;
	exports.setDilation = _timer.setDilation;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9mcmFtZXN5bmMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O1FBSVMsT0FBTztRQUFFLFFBQVEsU0FIakIsUUFBUTtRQUdXLFdBQVcsVUFGOUIsV0FBVyIsImZpbGUiOiJmcmFtZXN5bmMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvY2VzcyBmcm9tICcuL1Byb2Nlc3MnO1xuaW1wb3J0IHsgc2V0U3RlcHMgfSBmcm9tICcuL2xvb3AnO1xuaW1wb3J0IHsgc2V0RGlsYXRpb24gfSBmcm9tICcuL2luYy90aW1lcidcblxuZXhwb3J0IHsgUHJvY2Vzcywgc2V0U3RlcHMsIHNldERpbGF0aW9uIH07Il19

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

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
	"use strict";
	
	var NEWTON_ITERATIONS = 8,
	    NEWTON_MIN_SLOPE = 0.001,
	    SUBDIVISION_PRECISION = 0.0000001,
	    SUBDIVISION_MAX_ITERATIONS = 10,
	    K_SPLINE_TABLE_SIZE = 11,
	    K_SAMPLE_STEP_SIZE = 1.0 / (K_SPLINE_TABLE_SIZE - 1.0),
	    FLOAT_32_SUPPORTED = typeof Float32Array !== 'undefined',
	    a = function (a1, a2) {
	    return 1.0 - 3.0 * a2 + 3.0 * a1;
	},
	    b = function (a1, a2) {
	    return 3.0 * a2 - 6.0 * a1;
	},
	    c = function (a1) {
	    return 3.0 * a1;
	},
	    getSlope = function (t, a1, a2) {
	    return 3.0 * a(a1, a2) * t * t + 2.0 * b(a1, a2) * t + c(a1);
	},
	    calcBezier = function (t, a1, a2) {
	    return ((a(a1, a2) * t + b(a1, a2)) * t + c(a1)) * t;
	},
	
	/*
	    Bezier constructor
	*/
	Bezier = function (mX1, mY1, mX2, mY2) {
	    var sampleValues = FLOAT_32_SUPPORTED ? new Float32Array(K_SPLINE_TABLE_SIZE) : new Array(K_SPLINE_TABLE_SIZE),
	        _precomputed = false,
	        binarySubdivide = function (aX, aA, aB) {
	        var currentX,
	            currentT,
	            i = 0;
	
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
	    },
	        newtonRaphsonIterate = function (aX, aGuessT) {
	        var i = 0,
	            currentSlope = 0.0,
	            currentX;
	
	        for (; i < NEWTON_ITERATIONS; ++i) {
	            currentSlope = getSlope(aGuessT, mX1, mX2);
	
	            if (currentSlope === 0.0) {
	                return aGuessT;
	            }
	
	            currentX = calcBezier(aGuessT, mX1, mX2) - aX;
	            aGuessT -= currentX / currentSlope;
	        }
	
	        return aGuessT;
	    },
	        calcSampleValues = function () {
	        for (var i = 0; i < K_SPLINE_TABLE_SIZE; ++i) {
	            sampleValues[i] = calcBezier(i * K_SAMPLE_STEP_SIZE, mX1, mX2);
	        }
	    },
	        getTForX = function (aX) {
	        var intervalStart = 0.0,
	            currentSample = 1,
	            lastSample = K_SPLINE_TABLE_SIZE - 1,
	            dist = 0.0,
	            guessForT = 0.0,
	            initialSlope = 0.0;
	
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
	    },
	        precompute = function () {
	        _precomputed = true;
	        if (mX1 != mY1 || mX2 != mY2) {
	            calcSampleValues();
	        }
	    },
	
	    /*
	        Generated function
	        
	        Returns value 0-1 based on X
	    */
	    f = function (aX) {
	        var returnValue;
	
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
	
	    return f;
	};
	
	module.exports = Bezier;
	//# sourceMappingURL=data:application/json;base64,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O0FBRUQsZUFBTyxXQUFXLENBQUM7S0FDdEIsQ0FBQzs7QUFFRixXQUFPLENBQUMsQ0FBQztDQUNoQixDQUFDOztBQUVOLE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDIiwiZmlsZSI6IkJlemllci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gICAgQmV6aWVyIGZ1bmN0aW9uIGdlbmVyYXRvclxuICAgICAgICBcbiAgICBHYcOrdGFuIFJlbmF1ZGVhdSdzIEJlemllckVhc2luZ1xuICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZy9ibG9iL21hc3Rlci9pbmRleC5qcyAgXG4gICAgaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAgICBZb3UncmUgYSBoZXJvXG4gICAgXG4gICAgVXNlXG4gICAgXG4gICAgICAgIHZhciBlYXNlT3V0ID0gbmV3IEJlemllciguMTcsLjY3LC44MywuNjcpLFxuICAgICAgICAgICAgeCA9IGVhc2VPdXQoMC41KTsgLy8gcmV0dXJucyAwLjYyNy4uLlxuKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgTkVXVE9OX0lURVJBVElPTlMgPSA4LFxuICAgIE5FV1RPTl9NSU5fU0xPUEUgPSAwLjAwMSxcbiAgICBTVUJESVZJU0lPTl9QUkVDSVNJT04gPSAwLjAwMDAwMDEsXG4gICAgU1VCRElWSVNJT05fTUFYX0lURVJBVElPTlMgPSAxMCxcbiAgICBLX1NQTElORV9UQUJMRV9TSVpFID0gMTEsXG4gICAgS19TQU1QTEVfU1RFUF9TSVpFID0gMS4wIC8gKEtfU1BMSU5FX1RBQkxFX1NJWkUgLSAxLjApLFxuICAgIEZMT0FUXzMyX1NVUFBPUlRFRCA9ICh0eXBlb2YgRmxvYXQzMkFycmF5ICE9PSAndW5kZWZpbmVkJyksXG4gICAgXG4gICAgYSA9IGZ1bmN0aW9uIChhMSwgYTIpIHtcbiAgICAgICAgcmV0dXJuIDEuMCAtIDMuMCAqIGEyICsgMy4wICogYTE7XG4gICAgfSxcbiAgICBcbiAgICBiID0gZnVuY3Rpb24gKGExLCBhMikge1xuICAgICAgICByZXR1cm4gMy4wICogYTIgLSA2LjAgKiBhMTtcbiAgICB9LFxuICAgIFxuICAgIGMgPSBmdW5jdGlvbiAoYTEpIHtcbiAgICAgICAgcmV0dXJuIDMuMCAqIGExO1xuICAgIH0sXG5cbiAgICBnZXRTbG9wZSA9IGZ1bmN0aW9uICh0LCBhMSwgYTIpIHtcbiAgICAgICAgcmV0dXJuIDMuMCAqIGEoYTEsIGEyKSAqIHQgKiB0ICsgMi4wICogYihhMSwgYTIpICogdCArIGMoYTEpO1xuICAgIH0sXG5cbiAgICBjYWxjQmV6aWVyID0gZnVuY3Rpb24gKHQsIGExLCBhMikge1xuICAgICAgICByZXR1cm4gKChhKGExLCBhMikgKiB0ICsgYihhMSwgYTIpKSAqIHQgKyBjKGExKSkgKiB0O1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgQmV6aWVyIGNvbnN0cnVjdG9yXG4gICAgKi9cbiAgICBCZXppZXIgPSBmdW5jdGlvbiAobVgxLCBtWTEsIG1YMiwgbVkyKSB7XG4gICAgICAgIHZhciBzYW1wbGVWYWx1ZXMgPSBGTE9BVF8zMl9TVVBQT1JURUQgPyBuZXcgRmxvYXQzMkFycmF5KEtfU1BMSU5FX1RBQkxFX1NJWkUpIDogbmV3IEFycmF5KEtfU1BMSU5FX1RBQkxFX1NJWkUpLFxuICAgICAgICAgICAgX3ByZWNvbXB1dGVkID0gZmFsc2UsXG4gICAgXG4gICAgICAgICAgICBiaW5hcnlTdWJkaXZpZGUgPSBmdW5jdGlvbiAoYVgsIGFBLCBhQikge1xuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50WCwgY3VycmVudFQsIGkgPSAwO1xuXG4gICAgICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50VCA9IGFBICsgKGFCIC0gYUEpIC8gMi4wO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50WCA9IGNhbGNCZXppZXIoY3VycmVudFQsIG1YMSwgbVgyKSAtIGFYO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFggPiAwLjApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFCID0gY3VycmVudFQ7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhQSA9IGN1cnJlbnRUO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSB3aGlsZSAoTWF0aC5hYnMoY3VycmVudFgpID4gU1VCRElWSVNJT05fUFJFQ0lTSU9OICYmICsraSA8IFNVQkRJVklTSU9OX01BWF9JVEVSQVRJT05TKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW50VDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgICAgICAgbmV3dG9uUmFwaHNvbkl0ZXJhdGUgPSBmdW5jdGlvbiAoYVgsIGFHdWVzc1QpIHtcbiAgICAgICAgICAgICAgICB2YXIgaSA9IDAsXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTbG9wZSA9IDAuMCxcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFg7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZm9yICg7IGkgPCBORVdUT05fSVRFUkFUSU9OUzsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTbG9wZSA9IGdldFNsb3BlKGFHdWVzc1QsIG1YMSwgbVgyKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50U2xvcGUgPT09IDAuMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFHdWVzc1Q7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRYID0gY2FsY0JlemllcihhR3Vlc3NULCBtWDEsIG1YMikgLSBhWDtcbiAgICAgICAgICAgICAgICAgICAgYUd1ZXNzVCAtPSBjdXJyZW50WCAvIGN1cnJlbnRTbG9wZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFHdWVzc1Q7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNhbGNTYW1wbGVWYWx1ZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBLX1NQTElORV9UQUJMRV9TSVpFOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgc2FtcGxlVmFsdWVzW2ldID0gY2FsY0JlemllcihpICogS19TQU1QTEVfU1RFUF9TSVpFLCBtWDEsIG1YMik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBnZXRURm9yWCA9IGZ1bmN0aW9uIChhWCkge1xuICAgICAgICAgICAgICAgIHZhciBpbnRlcnZhbFN0YXJ0ID0gMC4wLFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50U2FtcGxlID0gMSxcbiAgICAgICAgICAgICAgICAgICAgbGFzdFNhbXBsZSA9IEtfU1BMSU5FX1RBQkxFX1NJWkUgLSAxLFxuICAgICAgICAgICAgICAgICAgICBkaXN0ID0gMC4wLFxuICAgICAgICAgICAgICAgICAgICBndWVzc0ZvclQgPSAwLjAsXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxTbG9wZSA9IDAuMDtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZm9yICg7IGN1cnJlbnRTYW1wbGUgIT0gbGFzdFNhbXBsZSAmJiBzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0gPD0gYVg7ICsrY3VycmVudFNhbXBsZSkge1xuICAgICAgICAgICAgICAgICAgICBpbnRlcnZhbFN0YXJ0ICs9IEtfU0FNUExFX1NURVBfU0laRTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLS1jdXJyZW50U2FtcGxlO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGRpc3QgPSAoYVggLSBzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0pIC8gKHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlKzFdIC0gc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdKTtcbiAgICAgICAgICAgICAgICBndWVzc0ZvclQgPSBpbnRlcnZhbFN0YXJ0ICsgZGlzdCAqIEtfU0FNUExFX1NURVBfU0laRTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpbml0aWFsU2xvcGUgPSBnZXRTbG9wZShndWVzc0ZvclQsIG1YMSwgbVgyKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBJZiBzbG9wZSBpcyBncmVhdGVyIHRoYW4gbWluXG4gICAgICAgICAgICAgICAgaWYgKGluaXRpYWxTbG9wZSA+PSBORVdUT05fTUlOX1NMT1BFKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXd0b25SYXBoc29uSXRlcmF0ZShhWCwgZ3Vlc3NGb3JUKTtcbiAgICAgICAgICAgICAgICAvLyBTbG9wZSBpcyBlcXVhbCB0byBtaW5cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGluaXRpYWxTbG9wZSA9PT0gMC4wKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBndWVzc0ZvclQ7XG4gICAgICAgICAgICAgICAgLy8gU2xvcGUgaXMgbGVzcyB0aGFuIG1pblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBiaW5hcnlTdWJkaXZpZGUoYVgsIGludGVydmFsU3RhcnQsIGludGVydmFsU3RhcnQgKyBLX1NBTVBMRV9TVEVQX1NJWkUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHByZWNvbXB1dGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3ByZWNvbXB1dGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAobVgxICE9IG1ZMSB8fCBtWDIgIT0gbVkyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGNTYW1wbGVWYWx1ZXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgIEdlbmVyYXRlZCBmdW5jdGlvblxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFJldHVybnMgdmFsdWUgMC0xIGJhc2VkIG9uIFhcbiAgICAgICAgICAgICovXG4gICAgICAgICAgICBmID0gZnVuY3Rpb24gKGFYKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJldHVyblZhbHVlO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFfcHJlY29tcHV0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJlY29tcHV0ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBJZiBsaW5lYXIgZ3JhZGllbnQsIHJldHVybiBYIGFzIFRcbiAgICAgICAgICAgICAgICBpZiAobVgxID09PSBtWTEgJiYgbVgyID09PSBtWTIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSBhWDtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gSWYgYXQgc3RhcnQsIHJldHVybiAwXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhWCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIElmIGF0IGVuZCwgcmV0dXJuIDFcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFYID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblZhbHVlID0gMTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblZhbHVlID0gY2FsY0JlemllcihnZXRURm9yWChhWCksIG1ZMSwgbVkyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJldHVyblZhbHVlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIGY7XG4gICAgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBCZXppZXI7Il19

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _loop = __webpack_require__(15);
	
	var loop = _interopRequireWildcard(_loop);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Process = (function () {
	    /*
	        [object]: Step functions
	        [boolean] (optional): Is Process lazy?
	    */
	
	    function Process(steps, isLazy) {
	        _classCallCheck(this, Process);
	
	        // Assign each step method to this process
	        for (var key in steps) {
	            if (steps.hasOwnProperty(key)) {
	                this[key] = steps[key];
	            }
	        }
	
	        this.isLazy = isLazy || false;
	        this.id = loop.getProcessId();
	        this.isActive = false;
	    }
	
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
	        var _this = this;
	
	        this.cleanup = function () {
	            _this.stop();
	            _this.cleanup = undefined;
	        };
	
	        this.start();
	
	        return this;
	    };
	
	    return Process;
	})();
	
	exports.default = Process;
	;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Qcm9jZXNzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQUFZLElBQUk7Ozs7OztJQUVLLE9BQU87Ozs7OztBQUt4QixhQUxpQixPQUFPLENBS1osS0FBSyxFQUFFLE1BQU0sRUFBRTs4QkFMVixPQUFPOzs7QUFPcEIsYUFBSyxJQUFJLEdBQUcsSUFBSSxLQUFLLEVBQUU7QUFDbkIsZ0JBQUksS0FBSyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtBQUMzQixvQkFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUMxQjtTQUNKOztBQUVELFlBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxJQUFJLEtBQUssQ0FBQztBQUM5QixZQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztBQUM5QixZQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztLQUN6Qjs7QUFoQmdCLFdBQU8sV0FrQnhCLEtBQUssb0JBQUc7QUFDSixZQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztBQUNyQixZQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDN0IsZUFBTyxJQUFJLENBQUM7S0FDZjs7QUF0QmdCLFdBQU8sV0F3QnhCLElBQUksbUJBQUc7QUFDSCxZQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztBQUN0QixZQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUN6QixlQUFPLElBQUksQ0FBQztLQUNmOztBQTVCZ0IsV0FBTyxXQThCeEIsSUFBSSxtQkFBRzs7O0FBQ0gsWUFBSSxDQUFDLE9BQU8sR0FBRyxZQUFNO0FBQ2pCLGtCQUFLLElBQUksRUFBRSxDQUFDO0FBQ1osa0JBQUssT0FBTyxHQUFHLFNBQVMsQ0FBQztTQUM1QixDQUFDOztBQUVGLFlBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7QUFFYixlQUFPLElBQUksQ0FBQztLQUNmOztXQXZDZ0IsT0FBTzs7O2tCQUFQLE9BQU87QUF3QzNCLENBQUMiLCJmaWxlIjoiUHJvY2Vzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGxvb3AgZnJvbSAnLi9sb29wJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvY2VzcyB7XG4gICAgLypcbiAgICAgICAgW29iamVjdF06IFN0ZXAgZnVuY3Rpb25zXG4gICAgICAgIFtib29sZWFuXSAob3B0aW9uYWwpOiBJcyBQcm9jZXNzIGxhenk/XG4gICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzdGVwcywgaXNMYXp5KSB7XG4gICAgICAgIC8vIEFzc2lnbiBlYWNoIHN0ZXAgbWV0aG9kIHRvIHRoaXMgcHJvY2Vzc1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gc3RlcHMpIHtcbiAgICAgICAgICAgIGlmIChzdGVwcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGhpc1trZXldID0gc3RlcHNba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXNMYXp5ID0gaXNMYXp5IHx8IGZhbHNlO1xuICAgICAgICB0aGlzLmlkID0gbG9vcC5nZXRQcm9jZXNzSWQoKTtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgbG9vcC5hY3RpdmF0ZSh0aGlzLmlkLCB0aGlzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc3RvcCgpIHtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBsb29wLmRlYWN0aXZhdGUodGhpcy5pZCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG9uY2UoKSB7XG4gICAgICAgIHRoaXMuY2xlYW51cCA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICAgICAgdGhpcy5jbGVhbnVwID0gdW5kZWZpbmVkO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc3RhcnQoKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59O1xuIl19

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.getProcessId = getProcessId;
	exports.activate = activate;
	exports.deactivate = deactivate;
	exports.setSteps = setSteps;
	
	var _timer = __webpack_require__(16);
	
	var _timer2 = _interopRequireDefault(_timer);
	
	var _tick = __webpack_require__(17);
	
	var _tick2 = _interopRequireDefault(_tick);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var processOrder = [{ step: 'frameStart' }, { step: 'update' }, { step: 'willRender', decideRender: true }, { step: 'preRender', isRender: true }, { step: 'render', isRender: true }, { step: 'postRender', isRender: true }, { step: 'frameEnd' }, { step: 'cleanup' }];
	var numProcessSteps = processOrder.length;
	
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
	
	// [array]: Array of process IDs queued for deactivation
	var deactivateQueue = [];
	
	// [boolean]: Is loop running?
	var isRunning = false;
	
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
	
	function purge() {
	    var queueLength = deactivateQueue.length;
	
	    while (queueLength--) {
	        var idToDelete = deactivateQueue[queueLength];
	        var activeIdIndex = runningIds.indexOf(idToDelete);
	
	        // If process is active, deactivate
	        if (activeIdIndex > -1) {
	            runningIds.splice(activeIdIndex, 1);
	
	            updateCount(false, runningProcesses[idToDelete].isLazy);
	
	            delete runningProcesses[idToDelete];
	        }
	    }
	
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
	
	    purge();
	
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
	
	    purge();
	
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
	    var queueIndex = deactivateQueue.indexOf(id);
	    var isQueued = queueIndex > -1;
	    var isRunning = runningIds.indexOf(id) > -1;
	
	    // Remove from deactivateQueue if queued
	    if (isQueued) {
	        deactivateQueue.splice(queueIndex, 1);
	    }
	
	    // Add to running processes array if not there
	    if (!isRunning) {
	        runningIds.push(id);
	        runningProcesses[id] = process;
	
	        updateCount(true, process.isLazy);
	        start();
	    }
	}
	
	/*
	    [int]: Process ID to deactivate
	*/
	function deactivate(id) {
	    if (deactivateQueue.indexOf(id) === -1) {
	        deactivateQueue.push(id);
	    }
	}
	
	function setSteps(newProcessOrder) {
	    processOrder = newProcessOrder;
	}
	//# sourceMappingURL=data:application/json;base64,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QyxlQUFlLEVBQUU7QUFDdEMsZ0JBQVksR0FBRyxlQUFlLENBQUM7Q0FDbEMiLCJmaWxlIjoibG9vcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0aW1lciBmcm9tICcuL2luYy90aW1lcic7XG5pbXBvcnQgdGljayBmcm9tICcuL2luYy90aWNrJztcblxubGV0IHByb2Nlc3NPcmRlciA9IFtcbiAgICB7IHN0ZXA6ICdmcmFtZVN0YXJ0JyB9LFxuICAgIHsgc3RlcDogJ3VwZGF0ZScgfSxcbiAgICB7IHN0ZXA6ICd3aWxsUmVuZGVyJywgZGVjaWRlUmVuZGVyOiB0cnVlIH0sXG4gICAgeyBzdGVwOiAncHJlUmVuZGVyJywgaXNSZW5kZXI6IHRydWUgfSxcbiAgICB7IHN0ZXA6ICdyZW5kZXInLCBpc1JlbmRlcjogdHJ1ZSB9LFxuICAgIHsgc3RlcDogJ3Bvc3RSZW5kZXInLCBpc1JlbmRlcjogdHJ1ZSB9LFxuICAgIHsgc3RlcDogJ2ZyYW1lRW5kJyB9LFxuICAgIHsgc3RlcDogJ2NsZWFudXAnIH1cbl07XG5jb25zdCBudW1Qcm9jZXNzU3RlcHMgPSBwcm9jZXNzT3JkZXIubGVuZ3RoO1xuXG4vLyBbaW50XTogUHJvY2VzcyBJRCwgaW5jcmVtZW50ZWQgZm9yIGVhY2ggbmV3IHByb2Nlc3NcbmxldCBjdXJyZW50UHJvY2Vzc0lkID0gMDtcblxuLy8gW2ludF06IE51bWJlciBvZiBydW5uaW5nIHByb2Nlc3Nlc1xubGV0IHJ1bm5pbmdDb3VudCA9IDA7XG5cbi8vIFtpbnRdOiBOdW1iZXIgb2YgcnVubmluZyBub24tYmFja2dyb3VuZCBwcm9jZXNzZXNcbmxldCBhY3RpdmVDb3VudCA9IDA7XG5cbi8vIFthcnJheV06IEFycmF5IG9mIGFjdGl2ZSBwcm9jZXNzIElEc1xubGV0IHJ1bm5pbmdJZHMgPSBbXTtcblxuLy8gW29iamVjdF06IE1hcCBvZiBhY3RpdmUgcHJvY2Vzc2VzXG5sZXQgcnVubmluZ1Byb2Nlc3NlcyA9IHt9O1xuXG4vLyBbYXJyYXldOiBBcnJheSBvZiBwcm9jZXNzIElEcyBxdWV1ZWQgZm9yIGRlYWN0aXZhdGlvblxubGV0IGRlYWN0aXZhdGVRdWV1ZSA9IFtdO1xuXG4vLyBbYm9vbGVhbl06IElzIGxvb3AgcnVubmluZz9cbmxldCBpc1J1bm5pbmcgPSBmYWxzZTtcblxuLypcbiAgICBVcGRhdGUgcnVubmluZ1xuXG4gICAgW2Jvb2xlYW5dOiBgdHJ1ZWAgdG8gYWRkXG4gICAgW2Jvb2xlYW5dOiBgdHJ1ZWAgaWYgbGF6eVxuKi9cbmZ1bmN0aW9uIHVwZGF0ZUNvdW50KGFkZCwgaXNMYXp5KSB7XG4gICAgY29uc3QgbW9kaWZ5ID0gYWRkID8gMSA6IC0xO1xuXG4gICAgcnVubmluZ0NvdW50ICs9IG1vZGlmeTtcblxuICAgIGlmICghaXNMYXp5KSB7XG4gICAgICAgIGFjdGl2ZUNvdW50ICs9IG1vZGlmeTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHB1cmdlKCkge1xuICAgIGxldCBxdWV1ZUxlbmd0aCA9IGRlYWN0aXZhdGVRdWV1ZS5sZW5ndGg7XG5cbiAgICB3aGlsZSAocXVldWVMZW5ndGgtLSkge1xuICAgICAgICBjb25zdCBpZFRvRGVsZXRlID0gZGVhY3RpdmF0ZVF1ZXVlW3F1ZXVlTGVuZ3RoXTtcbiAgICAgICAgY29uc3QgYWN0aXZlSWRJbmRleCA9IHJ1bm5pbmdJZHMuaW5kZXhPZihpZFRvRGVsZXRlKTtcblxuICAgICAgICAvLyBJZiBwcm9jZXNzIGlzIGFjdGl2ZSwgZGVhY3RpdmF0ZVxuICAgICAgICBpZiAoYWN0aXZlSWRJbmRleCA+IC0xKSB7XG4gICAgICAgICAgICBydW5uaW5nSWRzLnNwbGljZShhY3RpdmVJZEluZGV4LCAxKTtcblxuICAgICAgICAgICAgdXBkYXRlQ291bnQoZmFsc2UsIHJ1bm5pbmdQcm9jZXNzZXNbaWRUb0RlbGV0ZV0uaXNMYXp5KTtcblxuICAgICAgICAgICAgZGVsZXRlIHJ1bm5pbmdQcm9jZXNzZXNbaWRUb0RlbGV0ZV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZWFjdGl2YXRlUXVldWUgPSBbXTtcbn1cblxuLypcbiAgICBbdGltZXN0YW1wXTogRnJhbWUgdGltZXN0YW1wXG4gICAgW2ludF06IFRpbWUgc2luY2UgbGFzdCBmcmFtZVxuKi9cbmZ1bmN0aW9uIGZpcmVBbGwoZnJhbWVTdGFtcCwgZWxhcHNlZCkge1xuICAgIGxldCBtZXRob2QgPSB7fTtcbiAgICBsZXQgbWV0aG9kTmFtZSA9ICcnO1xuICAgIGxldCBpc1JlbmRlclN0ZXAgPSBmYWxzZTtcbiAgICBsZXQgcHJvY2VzcztcbiAgICBsZXQgcmVzdWx0O1xuXG4gICAgcHVyZ2UoKTtcblxuICAgIGNvbnN0IG51bVJ1bm5pbmcgPSBydW5uaW5nQ291bnQ7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVByb2Nlc3NTdGVwczsgaSsrKSB7XG4gICAgICAgIG1ldGhvZCA9IHByb2Nlc3NPcmRlcltpXTtcbiAgICAgICAgbWV0aG9kTmFtZSA9IG1ldGhvZC5zdGVwO1xuICAgICAgICBpc1JlbmRlclN0ZXAgPSBtZXRob2QuaXNSZW5kZXIgPyB0cnVlIDogZmFsc2U7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1SdW5uaW5nOyBpKyspIHtcbiAgICAgICAgICAgIHByb2Nlc3MgPSBydW5uaW5nUHJvY2Vzc2VzW3J1bm5pbmdJZHNbaV1dO1xuXG4gICAgICAgICAgICBpZiAocHJvY2VzcyAmJiBwcm9jZXNzW21ldGhvZE5hbWVdICYmICghaXNSZW5kZXJTdGVwIHx8IChpc1JlbmRlclN0ZXAgJiYgcHJvY2Vzcy5fcmVuZGVyID09PSB0cnVlKSkpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBwcm9jZXNzW21ldGhvZE5hbWVdLmNhbGwocHJvY2VzcywgcHJvY2VzcywgZnJhbWVTdGFtcCwgZWxhcHNlZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChtZXRob2QuZGVjaWRlUmVuZGVyKSB7XG4gICAgICAgICAgICAgICAgcHJvY2Vzcy5fcmVuZGVyID0gKHByb2Nlc3NbbWV0aG9kTmFtZV0gJiYgcmVzdWx0ID09PSBmYWxzZSkgPyBmYWxzZSA6IHRydWU7IFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVyZ2UoKTtcblxuICAgIHJldHVybiBhY3RpdmVDb3VudCA/IHRydWUgOiBmYWxzZTtcbn1cblxuLy8gRnVuY3Rpb24gdG8gZmlyZSBldmVyeSBmcmFtZVxuZnVuY3Rpb24gZnJhbWUoKSB7XG4gICAgdGljaygoZnJhbWVTdGFtcCkgPT4ge1xuICAgICAgICBpZiAoaXNSdW5uaW5nKSB7XG4gICAgICAgICAgICBmcmFtZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGltZXIudXBkYXRlKGZyYW1lU3RhbXApO1xuICAgICAgICBpc1J1bm5pbmcgPSBmaXJlQWxsKGZyYW1lU3RhbXAsIHRpbWVyLmdldEVsYXBzZWQoKSk7XG4gICAgfSk7XG59XG5cbi8vIFN0YXJ0IGxvb3BcbmZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgIGlmICghaXNSdW5uaW5nKSB7XG4gICAgICAgIHRpbWVyLnN0YXJ0KCk7XG4gICAgICAgIGlzUnVubmluZyA9IHRydWU7XG4gICAgICAgIGZyYW1lKCk7XG4gICAgfVxufVxuXG4vLyBTdG9wIGxvb3BcbmZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgaXNSdW5uaW5nID0gZmFsc2U7XG59XG5cbi8vIEV4cG9ydHNcbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9jZXNzSWQoKSB7XG4gICAgcmV0dXJuIGN1cnJlbnRQcm9jZXNzSWQrKztcbn1cblxuLypcbiAgICBbaW50XTogUHJvY2VzcyBJRCB0byBhY3RpdmF0ZVxuICAgIFtQcm9jZXNzXTogUHJvY2VzcyB0byBhY3RpdmF0ZVxuKi9cbmV4cG9ydCBmdW5jdGlvbiBhY3RpdmF0ZShpZCwgcHJvY2Vzcykge1xuICAgIGNvbnN0IHF1ZXVlSW5kZXggPSBkZWFjdGl2YXRlUXVldWUuaW5kZXhPZihpZCk7XG4gICAgY29uc3QgaXNRdWV1ZWQgPSAocXVldWVJbmRleCA+IC0xKTtcbiAgICBjb25zdCBpc1J1bm5pbmcgPSAocnVubmluZ0lkcy5pbmRleE9mKGlkKSA+IC0xKTtcblxuICAgIC8vIFJlbW92ZSBmcm9tIGRlYWN0aXZhdGVRdWV1ZSBpZiBxdWV1ZWRcbiAgICBpZiAoaXNRdWV1ZWQpIHtcbiAgICAgICAgZGVhY3RpdmF0ZVF1ZXVlLnNwbGljZShxdWV1ZUluZGV4LCAxKTtcbiAgICB9XG5cbiAgICAvLyBBZGQgdG8gcnVubmluZyBwcm9jZXNzZXMgYXJyYXkgaWYgbm90IHRoZXJlXG4gICAgaWYgKCFpc1J1bm5pbmcpIHtcbiAgICAgICAgcnVubmluZ0lkcy5wdXNoKGlkKTtcbiAgICAgICAgcnVubmluZ1Byb2Nlc3Nlc1tpZF0gPSBwcm9jZXNzO1xuXG4gICAgICAgIHVwZGF0ZUNvdW50KHRydWUsIHByb2Nlc3MuaXNMYXp5KTtcbiAgICAgICAgc3RhcnQoKTtcbiAgICB9XG59XG5cbi8qXG4gICAgW2ludF06IFByb2Nlc3MgSUQgdG8gZGVhY3RpdmF0ZVxuKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWFjdGl2YXRlKGlkKSB7XG4gICAgaWYgKGRlYWN0aXZhdGVRdWV1ZS5pbmRleE9mKGlkKSA9PT0gLTEpIHtcbiAgICAgICAgZGVhY3RpdmF0ZVF1ZXVlLnB1c2goaWQpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFN0ZXBzKG5ld1Byb2Nlc3NPcmRlcikge1xuICAgIHByb2Nlc3NPcmRlciA9IG5ld1Byb2Nlc3NPcmRlcjtcbn0iXX0=

/***/ },
/* 16 */
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmMvdGltZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O1FBOEJnQixXQUFXLEdBQVgsV0FBVztBQTlCM0IsSUFBTSxpQkFBaUIsR0FBSSxPQUFPLFdBQVcsS0FBSyxXQUFXLElBQUksV0FBVyxDQUFDLEdBQUcsQUFBQyxDQUFDO0FBQ2xGLElBQU0sV0FBVyxHQUFHO1dBQU0saUJBQWlCLEdBQUcsV0FBVyxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFO0NBQUEsQ0FBQzs7QUFFdkYsSUFBTSxXQUFXLEdBQUcsRUFBRSxDQUFDOztBQUV2QixJQUFJLElBQUksR0FBRyxDQUFDLENBQUM7QUFDYixJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUM7QUFDaEIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDO0FBQ25CLElBQUksUUFBUSxHQUFHLENBQUMsQ0FBQztBQUNqQixJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUM7O2tCQUVGO0FBQ1gsVUFBTSxFQUFFLFVBQUMsVUFBVSxFQUFLO0FBQ3BCLFlBQUksSUFBSSxLQUFLLENBQUMsRUFBRTtBQUNaLG1CQUFPLEdBQUcsSUFBSSxHQUFHLFVBQVUsQ0FBQztTQUMvQjs7QUFFRCxZQUFNLElBQUksR0FBRyxPQUFPLENBQUM7QUFDckIsWUFBTSxZQUFZLEdBQUcsVUFBVSxHQUFHLFFBQVEsQ0FBQztBQUMzQyxZQUFNLGlCQUFpQixHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxHQUFHLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQztBQUNyRSxlQUFPLEdBQUcsaUJBQWlCLEdBQUcsUUFBUSxDQUFDO0FBQ3ZDLGVBQU8sSUFBSSxPQUFPLENBQUM7QUFDbkIsZ0JBQVEsSUFBSSxpQkFBaUIsR0FBRyxPQUFPLENBQUM7S0FDM0M7O0FBRUQsU0FBSyxFQUFFO2VBQU0sT0FBTyxHQUFHLFdBQVcsRUFBRTtLQUFBOztBQUVwQyxjQUFVLEVBQUU7ZUFBTSxPQUFPO0tBQUE7Q0FDNUI7QUFFTSxTQUFTLFdBQVcsQ0FBQyxXQUFXLEVBQUU7QUFDckMsWUFBUSxHQUFHLFdBQVcsQ0FBQztDQUMxQiIsImZpbGUiOiJ0aW1lci5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGhhc1BlcmZvcm1hbmNlTm93ID0gKHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCcgJiYgcGVyZm9ybWFuY2Uubm93KTtcbmNvbnN0IGN1cnJlbnRUaW1lID0gKCkgPT4gaGFzUGVyZm9ybWFuY2VOb3cgPyBwZXJmb3JtYW5jZS5ub3coKSA6IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG5jb25zdCBNQVhfRUxBUFNFRCA9IDMzO1xuXG5sZXQgYmFzZSA9IDA7XG5sZXQgY3VycmVudCA9IDA7XG5sZXQgZWxhcHNlZCA9IDE2Ljc7XG5sZXQgZGlsYXRpb24gPSAxO1xubGV0IGxvc3RUaW1lID0gMDtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHVwZGF0ZTogKGZyYW1lc3RhbXApID0+IHtcbiAgICAgICAgaWYgKGJhc2UgPT09IDApIHtcbiAgICAgICAgICAgIGN1cnJlbnQgPSBiYXNlID0gZnJhbWVzdGFtcDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByZXYgPSBjdXJyZW50O1xuICAgICAgICBjb25zdCBsb3NzQWRqdXN0ZWQgPSBmcmFtZXN0YW1wIC0gbG9zdFRpbWU7XG4gICAgICAgIGNvbnN0IG5vbkRpbGF0ZWRFbGFwc2VkID0gTWF0aC5taW4obG9zc0FkanVzdGVkIC0gcHJldiwgTUFYX0VMQVBTRUQpO1xuICAgICAgICBlbGFwc2VkID0gbm9uRGlsYXRlZEVsYXBzZWQgKiBkaWxhdGlvbjtcbiAgICAgICAgY3VycmVudCArPSBlbGFwc2VkO1xuICAgICAgICBsb3N0VGltZSArPSBub25EaWxhdGVkRWxhcHNlZCAtIGVsYXBzZWQ7XG4gICAgfSxcblxuICAgIHN0YXJ0OiAoKSA9PiBjdXJyZW50ID0gY3VycmVudFRpbWUoKSxcblxuICAgIGdldEVsYXBzZWQ6ICgpID0+IGVsYXBzZWRcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXREaWxhdGlvbihuZXdEaWxhdGlvbikge1xuICAgIGRpbGF0aW9uID0gbmV3RGlsYXRpb247XG59Il19

/***/ },
/* 17 */
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmMvdGljay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUEsSUFBTSxNQUFNLEdBQUcsQUFBQyxPQUFPLE1BQU0sS0FBSyxXQUFXLElBQUksTUFBTSxDQUFDLHFCQUFxQixHQUFJLElBQUksR0FBRyxLQUFLLENBQUM7O0FBRTlGLElBQUksSUFBSSxZQUFBLENBQUM7O0FBRVQsSUFBSSxNQUFNLEVBQUU7QUFDUixRQUFJLEdBQUcsTUFBTSxDQUFDLHFCQUFxQixDQUFDO0NBRXZDLE1BQU07Ozs7Ozs7Ozs7Ozs7OztBQWVILFlBQUksUUFBUSxHQUFHLENBQUMsQ0FBQzs7QUFFakIsWUFBSSxHQUFHLFVBQUMsUUFBUSxFQUFLO0FBQ2pCLGdCQUFNLFdBQVcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQ3pDLGdCQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksV0FBVyxHQUFHLFFBQVEsQ0FBQSxBQUFDLENBQUMsQ0FBQzs7QUFFOUQsb0JBQVEsR0FBRyxXQUFXLEdBQUcsVUFBVSxDQUFDOztBQUVwQyxzQkFBVSxDQUFDO3VCQUFNLFFBQVEsQ0FBQyxRQUFRLENBQUM7YUFBQSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1NBQ3BELENBQUE7O0NBQ0o7O2tCQUVjLElBQUkiLCJmaWxlIjoidGljay5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gICAgRGV0ZWN0IGFuZCBsb2FkIGFuIGFwcHJvcHJpYXRlIGNsb2NrIHNldHRpbmcgZm9yIHRoZSBlbnZpcm9ubWVudFxuKi9cblxuY29uc3QgaGFzUkFGID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpID8gdHJ1ZSA6IGZhbHNlO1xuXG5sZXQgdGljaztcblxuaWYgKGhhc1JBRikge1xuICAgIHRpY2sgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xuXG59IGVsc2Uge1xuICAgIC8qXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbFxuICAgICAgICBcbiAgICAgICAgRm9yIElFOC85IEZsaW5zdG9uZXMgYW5kIG5vbi1icm93c2VyIGVudmlyb25tZW50c1xuXG4gICAgICAgIFRha2VuIGZyb20gUGF1bCBJcmlzaC4gV2UndmUgc3RyaXBwZWQgb3V0IGNhbmNlbEFuaW1hdGlvbkZyYW1lIGNoZWNrcyBiZWNhdXNlIHdlIGRvbid0IGZveCB3aXRoIHRoYXRcbiAgICAgICAgXG4gICAgICAgIGh0dHA6Ly9wYXVsaXJpc2guY29tLzIwMTEvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1hbmltYXRpbmcvXG4gICAgICAgIGh0dHA6Ly9teS5vcGVyYS5jb20vZW1vbGxlci9ibG9nLzIwMTEvMTIvMjAvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1lci1hbmltYXRpbmdcbiAgICAgICAgIFxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGwgYnkgRXJpayBNw7ZsbGVyLiBmaXhlcyBmcm9tIFBhdWwgSXJpc2ggYW5kIFRpbm8gWmlqZGVsXG4gICAgICAgICBcbiAgICAgICAgTUlUIGxpY2Vuc2VcbiAgICAqL1xuICAgIGxldCBsYXN0VGltZSA9IDA7XG5cbiAgICB0aWNrID0gKGNhbGxiYWNrKSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIGNvbnN0IHRpbWVUb0NhbGwgPSBNYXRoLm1heCgwLCAxNiAtIChjdXJyZW50VGltZSAtIGxhc3RUaW1lKSk7XG5cbiAgICAgICAgbGFzdFRpbWUgPSBjdXJyZW50VGltZSArIHRpbWVUb0NhbGw7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBjYWxsYmFjayhsYXN0VGltZSksIHRpbWVUb0NhbGwpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdGljazsiXX0=

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTBiNWFkN2QxZDYzMmFjNDg2MjIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvYWQvZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9wb3Btb3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvVHdlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvUGh5c2ljcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9UcmFjay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9BY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvdHdlZW4vcHJlc2V0LWVhc2luZy5qcyIsIndlYnBhY2s6Ly8vLi9+L3VpLXV0aWxzL2xpYi9lbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9+L3VpLWNhbGMvbGliL2VudHJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3R3ZWVuL2NyZWF0ZS1lYXNpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi91aS11dGlscy9saWIvaW5jL2J1ZmZlci1tZXRob2RzLmpzIiwid2VicGFjazovLy8uL34vZnJhbWVzeW5jL2xpYi9mcmFtZXN5bmMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvdHdlZW4vQmV6aWVyLmpzIiwid2VicGFjazovLy8uL34vZnJhbWVzeW5jL2xpYi9Qcm9jZXNzLmpzIiwid2VicGFjazovLy8uL34vZnJhbWVzeW5jL2xpYi9sb29wLmpzIiwid2VicGFjazovLy8uL34vZnJhbWVzeW5jL2xpYi9pbmMvdGltZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9mcmFtZXN5bmMvbGliL2luYy90aWNrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7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QSx1Q0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRDQUEyQyxtdks7Ozs7OztBQzFGM0M7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFtQixhQUFhO0FBQ2hDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEscUJBQW9COztBQUVwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBMkMsbWdTOzs7Ozs7QUNoTTNDOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTJDLHUyZTs7Ozs7O0FDMVMzQzs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLHVDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTJDLG1vSDs7Ozs7O0FDdkUzQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvRUFBbUUsYUFBYTtBQUNoRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTJDLCtzQjs7Ozs7O0FDakIzQzs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHVDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0E7QUFDQSw0Q0FBMkMsMmM7Ozs7OztBQ2xCM0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDhCQUE2QjtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQSxVQUFTOztBQUVUO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWMsdUJBQXVCO0FBQ3JDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLO0FBQ0w7QUFDQSx3QkFBdUIseUJBQXlCO0FBQ2hEO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBYyxrRUFBa0U7QUFDaEY7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFTO0FBQ1Q7O0FBRUE7QUFDQSxjQUFhO0FBQ2I7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBMkMsbW1ZOzs7Ozs7QUMzSjNDOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHdDQUF1Qyw2QkFBNkIsWUFBWSxFQUFFLE9BQU8saUJBQWlCLG1CQUFtQix1QkFBdUIsNEVBQTRFLEVBQUUsRUFBRSxzQkFBc0IsZUFBZSxFQUFFOztBQUUzUSxrREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxFQUFDOztBQUVEO0FBQ0E7QUFDQSw0Q0FBMkMsMmlGOzs7Ozs7QUMvRDNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGLHNCQUFxQixxQkFBcUIsR0FBRyxpQkFBaUIsR0FBRyx5Q0FBeUMsR0FBRyxvQ0FBb0MsR0FBRyxpQ0FBaUMsR0FBRyxxQ0FBcUMsR0FBRyxtQkFBbUIsR0FBRyxrQkFBa0I7QUFDeFE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLG9CQUFtQixxQkFBcUI7QUFDeEM7QUFDQTtBQUNBOztBQUVBLHlCQUF3QixpQkFBaUI7QUFDekM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBMkMsMnRVOzs7Ozs7QUN2TDNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUEyQywrK0U7Ozs7OztBQzFDM0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBLE1BQUs7QUFDTDs7QUFFQTtBQUNBLDRDQUEyQyx1M0UiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBhMGI1YWQ3ZDFkNjMyYWM0ODYyMlxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9wb3Btb3Rpb24gPSByZXF1aXJlKCcuLi9wb3Btb3Rpb24nKTtcblxudmFyIHBvcG1vdGlvbiA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9wb3Btb3Rpb24pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG52YXIgVUlyZWYgPSB3aW5kb3cubW90aW9uO1xuXG5wb3Btb3Rpb24ubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICB3aW5kb3cubW90aW9uID0gVUlyZWY7XG59O1xuXG53aW5kb3cubW90aW9uID0gd2luZG93LnBvcG1vdGlvbiA9IHBvcG1vdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbWRzYjJKaGJDNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3TzBsQlFWa3NVMEZCVXpzN096dEJRVVZ5UWl4SlFVRk5MRXRCUVVzc1IwRkJSeXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZET3p0QlFVVTFRaXhUUVVGVExFTkJRVU1zVlVGQlZTeEhRVUZITEZsQlFWazdRVUZETDBJc1ZVRkJUU3hEUVVGRExFMUJRVTBzUjBGQlJ5eExRVUZMTEVOQlFVTTdRMEZEZWtJc1EwRkJRenM3UVVGRlJpeE5RVUZOTEVOQlFVTXNUVUZCVFN4SFFVRkhMRTFCUVUwc1EwRkJReXhUUVVGVExFZEJRVWNzVTBGQlV5eERRVUZESWl3aVptbHNaU0k2SW1kc2IySmhiQzVxY3lJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENBcUlHRnpJSEJ2Y0cxdmRHbHZiaUJtY205dElDY3VMaTl3YjNCdGIzUnBiMjRuTzF4dVhHNWpiMjV6ZENCVlNYSmxaaUE5SUhkcGJtUnZkeTV0YjNScGIyNDdYRzVjYm5CdmNHMXZkR2x2Ymk1dWIwTnZibVpzYVdOMElEMGdablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJSGRwYm1SdmR5NXRiM1JwYjI0Z1BTQlZTWEpsWmp0Y2JuMDdYRzVjYm5kcGJtUnZkeTV0YjNScGIyNGdQU0IzYVc1a2IzY3VjRzl3Ylc5MGFXOXVJRDBnY0c5d2JXOTBhVzl1T3lKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2xvYWQvZ2xvYmFsLmpzXG4gKiogbW9kdWxlIGlkID0gMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5JbnB1dCA9IGV4cG9ydHMuUGh5c2ljcyA9IGV4cG9ydHMuVHJhY2sgPSBleHBvcnRzLlR3ZWVuID0gZXhwb3J0cy5BY3Rpb24gPSB1bmRlZmluZWQ7XG5cbnZhciBfQWN0aW9uID0gcmVxdWlyZSgnLi9hY3Rpb25zL0FjdGlvbicpO1xuXG52YXIgX0FjdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9BY3Rpb24pO1xuXG52YXIgX1R3ZWVuID0gcmVxdWlyZSgnLi9hY3Rpb25zL1R3ZWVuJyk7XG5cbnZhciBfVHdlZW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVHdlZW4pO1xuXG52YXIgX1BoeXNpY3MgPSByZXF1aXJlKCcuL2FjdGlvbnMvUGh5c2ljcycpO1xuXG52YXIgX1BoeXNpY3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUGh5c2ljcyk7XG5cbnZhciBfVHJhY2sgPSByZXF1aXJlKCcuL2FjdGlvbnMvVHJhY2snKTtcblxudmFyIF9UcmFjazIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9UcmFjayk7XG5cbnZhciBfSW5wdXQgPSByZXF1aXJlKCcuL2lucHV0L0lucHV0Jyk7XG5cbnZhciBfSW5wdXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfSW5wdXQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLlxuLy8gQWN0aW9uc1xuQWN0aW9uID0gX0FjdGlvbjIuZGVmYXVsdDtcbmV4cG9ydHMuVHdlZW4gPSBfVHdlZW4yLmRlZmF1bHQ7XG5leHBvcnRzLlRyYWNrID0gX1RyYWNrMi5kZWZhdWx0O1xuZXhwb3J0cy5QaHlzaWNzID0gX1BoeXNpY3MyLmRlZmF1bHQ7XG5leHBvcnRzLlxuXG4vLyBJbnB1dFxuSW5wdXQgPSBfSW5wdXQyLmRlZmF1bHQ7XG5cbi8vIElucHV0XG4vLyBBY3Rpb25zXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5CdmNHMXZkR2x2Ymk1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096dEJRVmRKTEUxQlFVMDdVVUZEVGl4TFFVRkxPMUZCUTB3c1MwRkJTenRSUVVOTUxFOUJRVTg3T3pzN1FVRkhVQ3hMUVVGTElpd2labWxzWlNJNkluQnZjRzF2ZEdsdmJpNXFjeUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWk4dklFRmpkR2x2Ym5OY2JtbHRjRzl5ZENCQlkzUnBiMjRnWm5KdmJTQW5MaTloWTNScGIyNXpMMEZqZEdsdmJpYzdYRzVwYlhCdmNuUWdWSGRsWlc0Z1puSnZiU0FuTGk5aFkzUnBiMjV6TDFSM1pXVnVKenRjYm1sdGNHOXlkQ0JRYUhsemFXTnpJR1p5YjIwZ0p5NHZZV04wYVc5dWN5OVFhSGx6YVdOekp6dGNibWx0Y0c5eWRDQlVjbUZqYXlCbWNtOXRJQ2N1TDJGamRHbHZibk12VkhKaFkyc25PMXh1WEc0dkx5QkpibkIxZEZ4dWFXMXdiM0owSUVsdWNIVjBJR1p5YjIwZ0p5NHZhVzV3ZFhRdlNXNXdkWFFuTzF4dVhHNWxlSEJ2Y25RZ2UxeHVJQ0FnSUM4dklFRmpkR2x2Ym5OY2JpQWdJQ0JCWTNScGIyNHNYRzRnSUNBZ1ZIZGxaVzRzWEc0Z0lDQWdWSEpoWTJzc1hHNGdJQ0FnVUdoNWMybGpjeXhjYmx4dUlDQWdJQzh2SUVsdWNIVjBYRzRnSUNBZ1NXNXdkWFJjYm4wN0lsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3BvcG1vdGlvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9BY3Rpb24yID0gcmVxdWlyZSgnLi9BY3Rpb24nKTtcblxudmFyIF9BY3Rpb24zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQWN0aW9uMik7XG5cbnZhciBfcHJlc2V0RWFzaW5nID0gcmVxdWlyZSgnLi90d2Vlbi9wcmVzZXQtZWFzaW5nJyk7XG5cbnZhciBfcHJlc2V0RWFzaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ByZXNldEVhc2luZyk7XG5cbnZhciBfdWlVdGlscyA9IHJlcXVpcmUoJ3VpLXV0aWxzJyk7XG5cbnZhciBfdWlDYWxjID0gcmVxdWlyZSgndWktY2FsYycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBDT1VOVCA9ICdDb3VudCc7XG52YXIgTkVYVF9TVEVQUyA9IHtcbiAgICBsb29wOiAncmVzdGFydCcsXG4gICAgeW95bzogJ3JldmVyc2UnLFxuICAgIGZsaXA6ICdmbGlwVmFsdWVzJ1xufTtcblxuLypcbiAgICBFYXNlIHZhbHVlIHdpdGhpbiByYW5nZWQgcGFyYW1ldGVyc1xuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogUHJvZ3Jlc3MgYmV0d2VlbiAwIGFuZCAxXG4gICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBvZiAwIHByb2dyZXNzXG4gICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBvZiAxIHByb2dyZXNzXG4gICAgQHBhcmFtIFtzdHJpbmcgfHwgZnVuY3Rpb25dOiBOYW1lIG9mIHByZXNldCBlYXNpbmdcbiAgICAgICAgdG8gdXNlIG9yIGdlbmVyYXRlZCBlYXNpbmcgZnVuY3Rpb25cbiAgICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBvZiBlYXNlZCBwcm9ncmVzcyBpbiByYW5nZVxuKi9cbmZ1bmN0aW9uIGVhc2UocHJvZ3Jlc3MsIGZyb20sIHRvLCBlYXNlKSB7XG4gICAgdmFyIHByb2dyZXNzTGltaXRlZCA9ICgwLCBfdWlDYWxjLnJlc3RyaWN0KShwcm9ncmVzcywgMCwgMSk7XG4gICAgdmFyIGVhc2luZ0Z1bmN0aW9uID0gKDAsIF91aVV0aWxzLmlzU3RyaW5nKShlYXNlKSA/IF9wcmVzZXRFYXNpbmcyLmRlZmF1bHRbZWFzZV0gOiBlYXNlO1xuICAgIHZhciBlYXNlZFByb2dyZXNzID0gZWFzaW5nRnVuY3Rpb24ocHJvZ3Jlc3NMaW1pdGVkKTtcblxuICAgIHJldHVybiAoMCwgX3VpQ2FsYy5nZXRWYWx1ZUZyb21Qcm9ncmVzcykoZWFzZWRQcm9ncmVzcywgZnJvbSwgdG8pO1xufTtcblxudmFyIFR3ZWVuID0gKGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gICAgX2luaGVyaXRzKFR3ZWVuLCBfQWN0aW9uKTtcblxuICAgIGZ1bmN0aW9uIFR3ZWVuKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVHdlZW4pO1xuXG4gICAgICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQWN0aW9uLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgIH1cblxuICAgIFR3ZWVuLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgICAgICBfQWN0aW9uLnByb3RvdHlwZS5zdGFydC5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLmVsYXBzZWQgPSAwO1xuICAgICAgICB0aGlzLmZsaXBDb3VudCA9IHRoaXMueW95b0NvdW50ID0gdGhpcy5sb29wQ291bnQgPSAwO1xuICAgIH07XG5cbiAgICBUd2Vlbi5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKHR3ZWVuLCBmcmFtZVN0YW1wLCBlbGFwc2VkKSB7XG4gICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgIHZhciBwcm9ncmVzc1RhcmdldCA9IHRoaXMucGxheURpcmVjdGlvbiA9PT0gMSA/IDEgOiAwO1xuXG4gICAgICAgIHRoaXMuZW5kZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmVsYXBzZWQgKz0gZWxhcHNlZCAqIHRoaXMuZGlsYXRlICogdGhpcy5wbGF5RGlyZWN0aW9uO1xuXG4gICAgICAgICgwLCBfdWlVdGlscy5lYWNoKSh0aGlzLnZhbHVlcywgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICAgIHZhciBwcm9ncmVzcyA9ICgwLCBfdWlDYWxjLnJlc3RyaWN0KSgoMCwgX3VpQ2FsYy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSkoX3RoaXMyLmVsYXBzZWQgLSB2YWx1ZS5kZWxheSwgMCwgdmFsdWUuZHVyYXRpb24pLCAwLCAxKTtcblxuICAgICAgICAgICAgLy8gTWFyayBUd2VlbiBhcyBOT1QgZW5kZWQgaWYgc3RpbGwgaW4gcHJvZ3Jlc3NcbiAgICAgICAgICAgIGlmIChwcm9ncmVzcyAhPT0gcHJvZ3Jlc3NUYXJnZXQpIHtcbiAgICAgICAgICAgICAgICBfdGhpczIuZW5kZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU3RlcCBwcm9ncmVzcyBpZiB3ZSdyZSBzdGVwcGluZ1xuICAgICAgICAgICAgaWYgKHZhbHVlLnN0ZXBzKSB7XG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3MgPSAoMCwgX3VpQ2FsYy5zdGVwUHJvZ3Jlc3MpKHByb2dyZXNzLCB2YWx1ZS5zdGVwcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEVhc2UgcHJvZ3Jlc3NcbiAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSBlYXNlKHByb2dyZXNzLCB2YWx1ZS5mcm9tLCB2YWx1ZS50bywgdmFsdWUuZWFzZSk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBUd2Vlbi5wcm90b3R5cGUuZnJhbWVFbmQgPSBmdW5jdGlvbiBmcmFtZUVuZCgpIHtcbiAgICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHRoaXMuZW5kZWQpIHtcbiAgICAgICAgICAgIHZhciBzdGVwVGFrZW4gPSBmYWxzZTtcblxuICAgICAgICAgICAgKDAsIF91aVV0aWxzLmVhY2gpKE5FWFRfU1RFUFMsIGZ1bmN0aW9uIChtZXRob2QsIHN0ZXApIHtcbiAgICAgICAgICAgICAgICB2YXIgbWF4U3RlcHMgPSBfdGhpczNbc3RlcF07XG5cbiAgICAgICAgICAgICAgICBpZiAobWF4U3RlcHMgPT09IHRydWUgfHwgKDAsIF91aVV0aWxzLmlzTnVtKShtYXhTdGVwcykgJiYgbWF4U3RlcHMgPiBfdGhpczNbc3RlcCArIENPVU5UXSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpczNbc3RlcCArIENPVU5UXSsrO1xuICAgICAgICAgICAgICAgICAgICBzdGVwVGFrZW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBfdGhpczNbbWV0aG9kXSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoIXN0ZXBUYWtlbikge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIFR3ZWVuLnByb3RvdHlwZS5mbGlwVmFsdWVzID0gZnVuY3Rpb24gZmxpcFZhbHVlcygpIHtcbiAgICAgICAgdGhpcy5lbGFwc2VkID0gdGhpcy5kdXJhdGlvbiAtIHRoaXMuZWxhcHNlZDtcblxuICAgICAgICAoMCwgX3VpVXRpbHMuZWFjaCkodGhpcy52YWx1ZXMsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgICAgICB2YXIgX3JlZiA9IFt2YWx1ZS5mcm9tLCB2YWx1ZS50b107XG4gICAgICAgICAgICB2YWx1ZS50byA9IF9yZWZbMF07XG4gICAgICAgICAgICB2YWx1ZS5mcm9tID0gX3JlZlsxXTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIFR3ZWVuLnByb3RvdHlwZS5yZXZlcnNlID0gZnVuY3Rpb24gcmV2ZXJzZSgpIHtcbiAgICAgICAgdGhpcy5wbGF5RGlyZWN0aW9uICo9IC0xO1xuICAgIH07XG5cbiAgICBUd2Vlbi5wcm90b3R5cGUucmVzdGFydCA9IGZ1bmN0aW9uIHJlc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuZWxhcHNlZCA9IHRoaXMucGxheURpcmVjdGlvbiA9PT0gMSA/IDAgOiB0aGlzLmR1cmF0aW9uO1xuICAgICAgICB0aGlzLnN0YXJ0ZWQgPSAoMCwgX3VpVXRpbHMuY3VycmVudFRpbWUpKCk7XG4gICAgfTtcblxuICAgIFR3ZWVuLnByb3RvdHlwZS5zZWVrID0gZnVuY3Rpb24gc2Vlayhwcm9ncmVzcykge1xuICAgICAgICB0aGlzLm9uY2UoKTtcbiAgICAgICAgdGhpcy5lbGFwc2VkID0gdGhpcy5kdXJhdGlvbiAqIHByb2dyZXNzO1xuICAgIH07XG5cbiAgICBUd2Vlbi5wcm90b3R5cGUuZ2V0RGVmYXVsdFByb3BzID0gZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIF9BY3Rpb24ucHJvdG90eXBlLmdldERlZmF1bHRQcm9wcy5jYWxsKHRoaXMpLCB7XG4gICAgICAgICAgICBkZWxheTogMCxcbiAgICAgICAgICAgIGRpbGF0ZTogMSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAzMDAsXG4gICAgICAgICAgICBsb29wOiBmYWxzZSxcbiAgICAgICAgICAgIHlveW86IGZhbHNlLFxuICAgICAgICAgICAgZmxpcDogZmFsc2UsXG4gICAgICAgICAgICBwbGF5RGlyZWN0aW9uOiAxLFxuICAgICAgICAgICAgZW5kZWQ6IGZhbHNlLFxuICAgICAgICAgICAgZWxhcHNlZDogMFxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgVHdlZW4ucHJvdG90eXBlLmdldERlZmF1bHRWYWx1ZSA9IGZ1bmN0aW9uIGdldERlZmF1bHRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBfQWN0aW9uLnByb3RvdHlwZS5nZXREZWZhdWx0VmFsdWUuY2FsbCh0aGlzKSwge1xuICAgICAgICAgICAgZGVsYXk6IDAsXG4gICAgICAgICAgICBkdXJhdGlvbjogMzAwLFxuICAgICAgICAgICAgZWFzZTogJ2Vhc2VPdXQnLFxuICAgICAgICAgICAgZWxhcHNlZDogMCxcbiAgICAgICAgICAgIHN0YWdnZXI6IDAsXG4gICAgICAgICAgICBzdGVwczogMCxcbiAgICAgICAgICAgIGZyb206IDAsXG4gICAgICAgICAgICB0bzogMCxcbiAgICAgICAgICAgIHJvdW5kOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgVHdlZW4ucHJvdG90eXBlLmdldERlZmF1bHRWYWx1ZVByb3AgPSBmdW5jdGlvbiBnZXREZWZhdWx0VmFsdWVQcm9wKCkge1xuICAgICAgICByZXR1cm4gJ3RvJztcbiAgICB9O1xuXG4gICAgcmV0dXJuIFR3ZWVuO1xufSkoX0FjdGlvbjMuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFR3ZWVuO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklsUjNaV1Z1TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3TzBGQlpVRXNTVUZCVFN4TFFVRkxMRWRCUVVjc1QwRkJUeXhEUVVGRE8wRkJRM1JDTEVsQlFVMHNWVUZCVlN4SFFVRkhPMEZCUTJZc1VVRkJTU3hGUVVGRkxGTkJRVk03UVVGRFppeFJRVUZKTEVWQlFVVXNVMEZCVXp0QlFVTm1MRkZCUVVrc1JVRkJSU3haUVVGWk8wTkJRM0pDT3pzN096czdPenM3T3pzN1FVRkJReXhCUVZsR0xGTkJRVk1zU1VGQlNTeERRVUZETEZGQlFWRXNSVUZCUlN4SlFVRkpMRVZCUVVVc1JVRkJSU3hGUVVGRkxFbEJRVWtzUlVGQlJUdEJRVU53UXl4UlFVRk5MR1ZCUVdVc1IwRkJSeXhaUVhoQ2VFSXNVVUZCVVN4RlFYZENlVUlzVVVGQlVTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRCUVVOcVJDeFJRVUZOTEdOQlFXTXNSMEZCUnl4aFFUVkNka0lzVVVGQlVTeEZRVFJDZDBJc1NVRkJTU3hEUVVGRExFZEJRVWNzZFVKQlFXRXNTVUZCU1N4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRE8wRkJRMnhGTEZGQlFVMHNZVUZCWVN4SFFVRkhMR05CUVdNc1EwRkJReXhsUVVGbExFTkJRVU1zUTBGQlF6czdRVUZGZEVRc1YwRkJUeXhaUVRGQ1VDeHZRa0ZCYjBJc1JVRXdRbEVzWVVGQllTeEZRVUZGTEVsQlFVa3NSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJRenREUVVONFJDeERRVUZET3p0SlFVVnRRaXhMUVVGTE8yTkJRVXdzUzBGQlN6czdZVUZCVEN4TFFVRkxPemhDUVVGTUxFdEJRVXM3T3pzN08wRkJRVXdzVTBGQlN5eFhRVU4wUWl4TFFVRkxMRzlDUVVGSE8wRkJRMG9zTUVKQlFVMHNTMEZCU3l4TFFVRkJMRTFCUVVVc1EwRkJRenRCUVVOa0xGbEJRVWtzUTBGQlF5eFBRVUZQTEVkQlFVY3NRMEZCUXl4RFFVRkRPMEZCUTJwQ0xGbEJRVWtzUTBGQlF5eFRRVUZUTEVkQlFVY3NTVUZCU1N4RFFVRkRMRk5CUVZNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVTBGQlV5eEhRVUZITEVOQlFVTXNRMEZCUXp0TFFVTjRSRHM3UVVGTVowSXNVMEZCU3l4WFFVOTBRaXhOUVVGTkxHMUNRVUZETEV0QlFVc3NSVUZCUlN4VlFVRlZMRVZCUVVVc1QwRkJUeXhGUVVGRk96czdRVUZETDBJc1dVRkJUU3hqUVVGakxFZEJRVWNzUVVGQlF5eEpRVUZKTEVOQlFVTXNZVUZCWVN4TFFVRkxMRU5CUVVNc1IwRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZET3p0QlFVVXhSQ3haUVVGSkxFTkJRVU1zUzBGQlN5eEhRVUZITEVsQlFVa3NRMEZCUXp0QlFVTnNRaXhaUVVGSkxFTkJRVU1zVDBGQlR5eEpRVUZKTEVGQlFVTXNUMEZCVHl4SFFVRkhMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWtzU1VGQlNTeERRVUZETEdGQlFXRXNRMEZCUXpzN1FVRkZOMFFzY1VKQmFrUktMRWxCUVVrc1JVRnBSRXNzU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlN4VlFVRkRMRXRCUVVzc1JVRkJSU3hIUVVGSExFVkJRVXM3UVVGRE9VSXNaMEpCUVVrc1VVRkJVU3hIUVVGSExGbEJOME4yUWl4UlFVRlJMRVZCTmtOM1FpeFpRVFZEYUVNc2IwSkJRVzlDTEVWQk5FTnBReXhQUVVGTExFOUJRVThzUjBGQlJ5eExRVUZMTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNc1JVRkJSU3hMUVVGTExFTkJRVU1zVVVGQlVTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJRenM3TzBGQlFVTXNRVUZIYmtjc1owSkJRVWtzVVVGQlVTeExRVUZMTEdOQlFXTXNSVUZCUlR0QlFVTTNRaXgxUWtGQlN5eExRVUZMTEVkQlFVY3NTMEZCU3l4RFFVRkRPMkZCUTNSQ096czdRVUZCUVN4QlFVZEVMR2RDUVVGSkxFdEJRVXNzUTBGQlF5eExRVUZMTEVWQlFVVTdRVUZEWWl4M1FrRkJVU3hIUVVGSExGbEJia1IyUWl4WlFVRlpMRVZCYlVSM1FpeFJRVUZSTEVWQlFVVXNTMEZCU3l4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8yRkJRMnhFT3pzN1FVRkJRU3hCUVVkRUxHbENRVUZMTEVOQlFVTXNUMEZCVHl4SFFVRkhMRWxCUVVrc1EwRkJReXhSUVVGUkxFVkJRVVVzUzBGQlN5eERRVUZETEVsQlFVa3NSVUZCUlN4TFFVRkxMRU5CUVVNc1JVRkJSU3hGUVVGRkxFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0VFFVTndSU3hEUVVGRExFTkJRVU03UzBGRFRqczdRVUUzUW1kQ0xGTkJRVXNzVjBFclFuUkNMRkZCUVZFc2RVSkJRVWM3T3p0QlFVTlFMRmxCUVVrc1NVRkJTU3hEUVVGRExFdEJRVXNzUlVGQlJUdEJRVU5hTEdkQ1FVRkpMRk5CUVZNc1IwRkJSeXhMUVVGTExFTkJRVU03TzBGQlJYUkNMSGxDUVhaRlVpeEpRVUZKTEVWQmRVVlRMRlZCUVZVc1JVRkJSU3hWUVVGRExFMUJRVTBzUlVGQlJTeEpRVUZKTEVWQlFVczdRVUZETDBJc2IwSkJRVTBzVVVGQlVTeEhRVUZITEU5QlFVc3NTVUZCU1N4RFFVRkRMRU5CUVVNN08wRkJSVFZDTEc5Q1FVRkpMRkZCUVZFc1MwRkJTeXhKUVVGSkxFbEJRVXNzWVVGNlJYUkRMRXRCUVVzc1JVRjVSWFZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRkZCUVZFc1IwRkJSeXhQUVVGTExFbEJRVWtzUjBGQlJ5eExRVUZMTEVOQlFVTXNRVUZCUXl4RlFVRkZPMEZCUTNwRkxESkNRVUZMTEVsQlFVa3NSMEZCUnl4TFFVRkxMRU5CUVVNc1JVRkJSU3hEUVVGRE8wRkJRM0pDTERaQ1FVRlRMRWRCUVVjc1NVRkJTU3hEUVVGRE8wRkJRMnBDTERKQ1FVRkxMRTFCUVUwc1EwRkJReXhGUVVGRkxFTkJRVU03YVVKQlEyeENPMkZCUTBvc1EwRkJReXhEUVVGRE96dEJRVVZJTEdkQ1FVRkpMRU5CUVVNc1UwRkJVeXhGUVVGRk8wRkJRMW9zYjBKQlFVa3NRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJRenRoUVVObU8xTkJRMG83UzBGRFNqczdRVUZxUkdkQ0xGTkJRVXNzVjBGdFJIUkNMRlZCUVZVc2VVSkJRVWM3UVVGRFZDeFpRVUZKTEVOQlFVTXNUMEZCVHl4SFFVRkhMRWxCUVVrc1EwRkJReXhSUVVGUkxFZEJRVWNzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXpzN1FVRkZOVU1zY1VKQk1VWktMRWxCUVVrc1JVRXdSa3NzU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlN4VlFVRkRMRXRCUVVzc1JVRkJSU3hIUVVGSExFVkJRVXM3ZFVKQlEwd3NRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hGUVVGRkxFdEJRVXNzUTBGQlF5eEZRVUZGTEVOQlFVTTdRVUZCT1VNc2FVSkJRVXNzUTBGQlF5eEZRVUZGTzBGQlFVVXNhVUpCUVVzc1EwRkJReXhKUVVGSk8xTkJRM2hDTEVOQlFVTXNRMEZCUXp0TFFVTk9PenRCUVhwRVowSXNVMEZCU3l4WFFUSkVkRUlzVDBGQlR5eHpRa0ZCUnp0QlFVTk9MRmxCUVVrc1EwRkJReXhoUVVGaExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTTdTMEZETlVJN08wRkJOMFJuUWl4VFFVRkxMRmRCSzBSMFFpeFBRVUZQTEhOQ1FVRkhPMEZCUTA0c1dVRkJTU3hEUVVGRExFOUJRVThzUjBGQlJ5eEJRVUZETEVsQlFVa3NRMEZCUXl4aFFVRmhMRXRCUVVzc1EwRkJReXhIUVVGSkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRPMEZCUXpsRUxGbEJRVWtzUTBGQlF5eFBRVUZQTEVkQlFVY3NZVUYwUjI1Q0xGZEJRVmNzUjBGelIzRkNMRU5CUVVNN1MwRkRhRU03TzBGQmJFVm5RaXhUUVVGTExGZEJiMFYwUWl4SlFVRkpMR2xDUVVGRExGRkJRVkVzUlVGQlJUdEJRVU5ZTEZsQlFVa3NRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJRenRCUVVOYUxGbEJRVWtzUTBGQlF5eFBRVUZQTEVkQlFVY3NTVUZCU1N4RFFVRkRMRkZCUVZFc1IwRkJSeXhSUVVGUkxFTkJRVU03UzBGRE0wTTdPMEZCZGtWblFpeFRRVUZMTEZkQmVVVjBRaXhsUVVGbExEaENRVUZITzBGQlEyUXNORUpCUTA4c2EwSkJRVTBzWlVGQlpTeExRVUZCTEUxQlFVVTdRVUZETVVJc2FVSkJRVXNzUlVGQlJTeERRVUZETzBGQlExSXNhMEpCUVUwc1JVRkJSU3hEUVVGRE8wRkJRMVFzYjBKQlFWRXNSVUZCUlN4SFFVRkhPMEZCUTJJc1owSkJRVWtzUlVGQlJTeExRVUZMTzBGQlExZ3NaMEpCUVVrc1JVRkJSU3hMUVVGTE8wRkJRMWdzWjBKQlFVa3NSVUZCUlN4TFFVRkxPMEZCUTFnc2VVSkJRV0VzUlVGQlJTeERRVUZETzBGQlEyaENMR2xDUVVGTExFVkJRVVVzUzBGQlN6dEJRVU5hTEcxQ1FVRlBMRVZCUVVVc1EwRkJRenRYUVVOYU8wdEJRMHc3TzBGQmRFWm5RaXhUUVVGTExGZEJkMFowUWl4bFFVRmxMRGhDUVVGSE8wRkJRMlFzTkVKQlEwOHNhMEpCUVUwc1pVRkJaU3hMUVVGQkxFMUJRVVU3UVVGRE1VSXNhVUpCUVVzc1JVRkJSU3hEUVVGRE8wRkJRMUlzYjBKQlFWRXNSVUZCUlN4SFFVRkhPMEZCUTJJc1owSkJRVWtzUlVGQlJTeFRRVUZUTzBGQlEyWXNiVUpCUVU4c1JVRkJSU3hEUVVGRE8wRkJRMVlzYlVKQlFVOHNSVUZCUlN4RFFVRkRPMEZCUTFZc2FVSkJRVXNzUlVGQlJTeERRVUZETzBGQlExSXNaMEpCUVVrc1JVRkJSU3hEUVVGRE8wRkJRMUFzWTBGQlJTeEZRVUZGTEVOQlFVTTdRVUZEVEN4cFFrRkJTeXhGUVVGRkxFdEJRVXM3VjBGRFpEdExRVU5NT3p0QlFYSkhaMElzVTBGQlN5eFhRWFZIZEVJc2JVSkJRVzFDTEd0RFFVRkhPMEZCUTJ4Q0xHVkJRVThzU1VGQlNTeERRVUZETzB0QlEyWTdPMWRCZWtkblFpeExRVUZMT3pzN2EwSkJRVXdzUzBGQlN5SXNJbVpwYkdVaU9pSlVkMlZsYmk1cWN5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQkJZM1JwYjI0Z1puSnZiU0FuTGk5QlkzUnBiMjRuTzF4dWFXMXdiM0owSUhCeVpYTmxkRVZoYzJsdVp5Qm1jbTl0SUNjdUwzUjNaV1Z1TDNCeVpYTmxkQzFsWVhOcGJtY25PMXh1YVcxd2IzSjBJSHRjYmlBZ0lDQmpkWEp5Wlc1MFZHbHRaU3hjYmlBZ0lDQmxZV05vTEZ4dUlDQWdJR2x6VG5WdExGeHVJQ0FnSUdselUzUnlhVzVuWEc1OUlHWnliMjBnSjNWcExYVjBhV3h6Snp0Y2JtbHRjRzl5ZENCN1hHNGdJQ0FnY21WemRISnBZM1FzWEc0Z0lDQWdaMlYwVUhKdlozSmxjM05HY205dFZtRnNkV1VzWEc0Z0lDQWdaMlYwVm1Gc2RXVkdjbTl0VUhKdlozSmxjM01zWEc0Z0lDQWdjM1JsY0ZCeWIyZHlaWE56WEc1OUlHWnliMjBnSjNWcExXTmhiR01uTzF4dVhHNWpiMjV6ZENCRFQxVk9WQ0E5SUNkRGIzVnVkQ2M3WEc1amIyNXpkQ0JPUlZoVVgxTlVSVkJUSUQwZ2UxeHVJQ0FnSUd4dmIzQTZJQ2R5WlhOMFlYSjBKeXhjYmlBZ0lDQjViM2x2T2lBbmNtVjJaWEp6WlNjc1hHNGdJQ0FnWm14cGNEb2dKMlpzYVhCV1lXeDFaWE1uWEc1OU8xeHVYRzR2S2x4dUlDQWdJRVZoYzJVZ2RtRnNkV1VnZDJsMGFHbHVJSEpoYm1kbFpDQndZWEpoYldWMFpYSnpYRzRnSUNBZ1hHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJRY205bmNtVnpjeUJpWlhSM1pXVnVJREFnWVc1a0lERmNiaUFnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUZaaGJIVmxJRzltSURBZ2NISnZaM0psYzNOY2JpQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRlpoYkhWbElHOW1JREVnY0hKdlozSmxjM05jYmlBZ0lDQkFjR0Z5WVcwZ1czTjBjbWx1WnlCOGZDQm1kVzVqZEdsdmJsMDZJRTVoYldVZ2IyWWdjSEpsYzJWMElHVmhjMmx1WjF4dUlDQWdJQ0FnSUNCMGJ5QjFjMlVnYjNJZ1oyVnVaWEpoZEdWa0lHVmhjMmx1WnlCbWRXNWpkR2x2Ymx4dUlDQWdJRUJ5WlhSMWNtNGdXMjUxYldKbGNsMDZJRlpoYkhWbElHOW1JR1ZoYzJWa0lIQnliMmR5WlhOeklHbHVJSEpoYm1kbFhHNHFMeUJjYm1aMWJtTjBhVzl1SUdWaGMyVW9jSEp2WjNKbGMzTXNJR1p5YjIwc0lIUnZMQ0JsWVhObEtTQjdYRzRnSUNBZ1kyOXVjM1FnY0hKdlozSmxjM05NYVcxcGRHVmtJRDBnY21WemRISnBZM1FvY0hKdlozSmxjM01zSURBc0lERXBPMXh1SUNBZ0lHTnZibk4wSUdWaGMybHVaMFoxYm1OMGFXOXVJRDBnYVhOVGRISnBibWNvWldGelpTa2dQeUJ3Y21WelpYUkZZWE5wYm1kYlpXRnpaVjBnT2lCbFlYTmxPMXh1SUNBZ0lHTnZibk4wSUdWaGMyVmtVSEp2WjNKbGMzTWdQU0JsWVhOcGJtZEdkVzVqZEdsdmJpaHdjbTluY21WemMweHBiV2wwWldRcE8xeHVYRzRnSUNBZ2NtVjBkWEp1SUdkbGRGWmhiSFZsUm5KdmJWQnliMmR5WlhOektHVmhjMlZrVUhKdlozSmxjM01zSUdaeWIyMHNJSFJ2S1R0Y2JuMDdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJR05zWVhOeklGUjNaV1Z1SUdWNGRHVnVaSE1nUVdOMGFXOXVJSHRjYmlBZ0lDQnpkR0Z5ZENncElIdGNiaUFnSUNBZ0lDQWdjM1Z3WlhJdWMzUmhjblFvS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVsYkdGd2MyVmtJRDBnTUR0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVtYkdsd1EyOTFiblFnUFNCMGFHbHpMbmx2ZVc5RGIzVnVkQ0E5SUhSb2FYTXViRzl2Y0VOdmRXNTBJRDBnTUR0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0IxY0dSaGRHVW9kSGRsWlc0c0lHWnlZVzFsVTNSaGJYQXNJR1ZzWVhCelpXUXBJSHRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdjSEp2WjNKbGMzTlVZWEpuWlhRZ1BTQW9kR2hwY3k1d2JHRjVSR2x5WldOMGFXOXVJRDA5UFNBeEtTQS9JREVnT2lBd08xeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdVpXNWtaV1FnUFNCMGNuVmxPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtVnNZWEJ6WldRZ0t6MGdLR1ZzWVhCelpXUWdLaUIwYUdsekxtUnBiR0YwWlNrZ0tpQjBhR2x6TG5Cc1lYbEVhWEpsWTNScGIyNDdYRzVjYmlBZ0lDQWdJQ0FnWldGamFDaDBhR2x6TG5aaGJIVmxjeXdnS0haaGJIVmxMQ0JyWlhrcElEMCtJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHeGxkQ0J3Y205bmNtVnpjeUE5SUhKbGMzUnlhV04wS0dkbGRGQnliMmR5WlhOelJuSnZiVlpoYkhWbEtIUm9hWE11Wld4aGNITmxaQ0F0SUhaaGJIVmxMbVJsYkdGNUxDQXdMQ0IyWVd4MVpTNWtkWEpoZEdsdmJpa3NJREFzSURFcE8xeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBdkx5Qk5ZWEpySUZSM1pXVnVJR0Z6SUU1UFZDQmxibVJsWkNCcFppQnpkR2xzYkNCcGJpQndjbTluY21WemMxeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIQnliMmR5WlhOeklDRTlQU0J3Y205bmNtVnpjMVJoY21kbGRDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdVpXNWtaV1FnUFNCbVlXeHpaVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdVM1JsY0NCd2NtOW5jbVZ6Y3lCcFppQjNaU2R5WlNCemRHVndjR2x1WjF4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0haaGJIVmxMbk4wWlhCektTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjSEp2WjNKbGMzTWdQU0J6ZEdWd1VISnZaM0psYzNNb2NISnZaM0psYzNNc0lIWmhiSFZsTG5OMFpYQnpLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdSV0Z6WlNCd2NtOW5jbVZ6YzF4dUlDQWdJQ0FnSUNBZ0lDQWdkbUZzZFdVdVkzVnljbVZ1ZENBOUlHVmhjMlVvY0hKdlozSmxjM01zSUhaaGJIVmxMbVp5YjIwc0lIWmhiSFZsTG5SdkxDQjJZV3gxWlM1bFlYTmxLVHRjYmlBZ0lDQWdJQ0FnZlNrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnWm5KaGJXVkZibVFvS1NCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2gwYUdsekxtVnVaR1ZrS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JzWlhRZ2MzUmxjRlJoYTJWdUlEMGdabUZzYzJVN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUdWaFkyZ29Ua1ZZVkY5VFZFVlFVeXdnS0cxbGRHaHZaQ3dnYzNSbGNDa2dQVDRnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJRzFoZUZOMFpYQnpJRDBnZEdocGMxdHpkR1Z3WFR0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2h0WVhoVGRHVndjeUE5UFQwZ2RISjFaU0I4ZkNBb2FYTk9kVzBvYldGNFUzUmxjSE1wSUNZbUlHMWhlRk4wWlhCeklENGdkR2hwYzF0emRHVndJQ3NnUTA5VlRsUmRLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhR2x6VzNOMFpYQWdLeUJEVDFWT1ZGMHJLenRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2MzUmxjRlJoYTJWdUlEMGdkSEoxWlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkR2hwYzF0dFpYUm9iMlJkS0NrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnZlNrN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDZ2hjM1JsY0ZSaGEyVnVLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXpkRzl3S0NrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JpQWdJQ0JtYkdsd1ZtRnNkV1Z6S0NrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG1Wc1lYQnpaV1FnUFNCMGFHbHpMbVIxY21GMGFXOXVJQzBnZEdocGN5NWxiR0Z3YzJWa08xeHVYRzRnSUNBZ0lDQWdJR1ZoWTJnb2RHaHBjeTUyWVd4MVpYTXNJQ2gyWVd4MVpTd2dhMlY1S1NBOVBpQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCYmRtRnNkV1V1ZEc4c0lIWmhiSFZsTG1aeWIyMWRJRDBnVzNaaGJIVmxMbVp5YjIwc0lIWmhiSFZsTG5SdlhUdGNiaUFnSUNBZ0lDQWdmU2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjbVYyWlhKelpTZ3BJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXdiR0Y1UkdseVpXTjBhVzl1SUNvOUlDMHhPMXh1SUNBZ0lIMWNibHh1SUNBZ0lISmxjM1JoY25Rb0tTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdVpXeGhjSE5sWkNBOUlDaDBhR2x6TG5Cc1lYbEVhWEpsWTNScGIyNGdQVDA5SURFcElEOGdNQ0E2SUhSb2FYTXVaSFZ5WVhScGIyNDdYRzRnSUNBZ0lDQWdJSFJvYVhNdWMzUmhjblJsWkNBOUlHTjFjbkpsYm5SVWFXMWxLQ2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjMlZsYXlod2NtOW5jbVZ6Y3lrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG05dVkyVW9LVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWxiR0Z3YzJWa0lEMGdkR2hwY3k1a2RYSmhkR2x2YmlBcUlIQnliMmR5WlhOek8xeHVJQ0FnSUgxY2JpQWdJQ0JjYmlBZ0lDQm5aWFJFWldaaGRXeDBVSEp2Y0hNb0tTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBdUxpNXpkWEJsY2k1blpYUkVaV1poZFd4MFVISnZjSE1vS1N4Y2JpQWdJQ0FnSUNBZ0lDQWdJR1JsYkdGNU9pQXdMRnh1SUNBZ0lDQWdJQ0FnSUNBZ1pHbHNZWFJsT2lBeExGeHVJQ0FnSUNBZ0lDQWdJQ0FnWkhWeVlYUnBiMjQ2SURNd01DeGNiaUFnSUNBZ0lDQWdJQ0FnSUd4dmIzQTZJR1poYkhObExGeHVJQ0FnSUNBZ0lDQWdJQ0FnZVc5NWJ6b2dabUZzYzJVc1hHNGdJQ0FnSUNBZ0lDQWdJQ0JtYkdsd09pQm1ZV3h6WlN4Y2JpQWdJQ0FnSUNBZ0lDQWdJSEJzWVhsRWFYSmxZM1JwYjI0NklERXNYRzRnSUNBZ0lDQWdJQ0FnSUNCbGJtUmxaRG9nWm1Gc2MyVXNYRzRnSUNBZ0lDQWdJQ0FnSUNCbGJHRndjMlZrT2lBd1hHNGdJQ0FnSUNBZ0lIMDdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ1oyVjBSR1ZtWVhWc2RGWmhiSFZsS0NrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnTGk0dWMzVndaWEl1WjJWMFJHVm1ZWFZzZEZaaGJIVmxLQ2tzWEc0Z0lDQWdJQ0FnSUNBZ0lDQmtaV3hoZVRvZ01DeGNiaUFnSUNBZ0lDQWdJQ0FnSUdSMWNtRjBhVzl1T2lBek1EQXNYRzRnSUNBZ0lDQWdJQ0FnSUNCbFlYTmxPaUFuWldGelpVOTFkQ2NzWEc0Z0lDQWdJQ0FnSUNBZ0lDQmxiR0Z3YzJWa09pQXdMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2MzUmhaMmRsY2pvZ01DeGNiaUFnSUNBZ0lDQWdJQ0FnSUhOMFpYQnpPaUF3TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdabkp2YlRvZ01DeGNiaUFnSUNBZ0lDQWdJQ0FnSUhSdk9pQXdMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2NtOTFibVE2SUdaaGJITmxYRzRnSUNBZ0lDQWdJSDA3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdaMlYwUkdWbVlYVnNkRlpoYkhWbFVISnZjQ2dwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUNkMGJ5YzdYRzRnSUNBZ2ZWeHVmVnh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9Ud2Vlbi5qc1xuICoqIG1vZHVsZSBpZCA9IDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9BY3Rpb24yID0gcmVxdWlyZSgnLi9BY3Rpb24nKTtcblxudmFyIF9BY3Rpb24zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQWN0aW9uMik7XG5cbnZhciBfdWlDYWxjID0gcmVxdWlyZSgndWktY2FsYycpO1xuXG52YXIgX3VpVXRpbHMgPSByZXF1aXJlKCd1aS11dGlscycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBQaHlzaWNzID0gKGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gICAgX2luaGVyaXRzKFBoeXNpY3MsIF9BY3Rpb24pO1xuXG4gICAgZnVuY3Rpb24gUGh5c2ljcygpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBoeXNpY3MpO1xuXG4gICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0FjdGlvbi5jYWxsLmFwcGx5KF9BY3Rpb24sIFt0aGlzXS5jb25jYXQoYXJncykpKTtcblxuICAgICAgICBfdGhpcy5pbmFjdGl2ZUZyYW1lcyA9IDA7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBQaHlzaWNzLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUocGh5c2ljcywgZnJhbWVTdGFtcCwgZWxhcHNlZCkge1xuICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICB0aGlzLmhhc0NoYW5nZWQgPSBmYWxzZTtcblxuICAgICAgICAoMCwgX3VpVXRpbHMuZWFjaCkodGhpcy52YWx1ZXMsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgICAgICB2YXIgcHJldmlvdXNWYWx1ZSA9IHZhbHVlLmN1cnJlbnQ7XG5cbiAgICAgICAgICAgIC8vIEFwcGx5IGFjY2VsZXJhdGlvblxuICAgICAgICAgICAgdmFsdWUudmVsb2NpdHkgKz0gKDAsIF91aUNhbGMuc3BlZWRQZXJGcmFtZSkodmFsdWUuZm9yY2UsIGVsYXBzZWQpO1xuXG4gICAgICAgICAgICAvLyBBcHBseSBmcmljdGlvblxuICAgICAgICAgICAgdmFsdWUudmVsb2NpdHkgKj0gTWF0aC5wb3coMSAtIHZhbHVlLmZyaWN0aW9uLCBlbGFwc2VkIC8gMTApO1xuXG4gICAgICAgICAgICAvLyBBcHBseSBzcHJpbmdcbiAgICAgICAgICAgIGlmICh2YWx1ZS5zcHJpbmcgJiYgKDAsIF91aVV0aWxzLmlzTnVtKSh2YWx1ZS50bykpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGlzdGFuY2VUb1RhcmdldCA9IHZhbHVlLnRvIC0gdmFsdWUuY3VycmVudDtcbiAgICAgICAgICAgICAgICB2YWx1ZS52ZWxvY2l0eSArPSBkaXN0YW5jZVRvVGFyZ2V0ICogKDAsIF91aUNhbGMuc3BlZWRQZXJGcmFtZSkodmFsdWUuc3ByaW5nLCBlbGFwc2VkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQXBwbHkgbGF0ZXN0IHZlbG9jaXR5XG4gICAgICAgICAgICB2YWx1ZS5jdXJyZW50ICs9ICgwLCBfdWlDYWxjLnNwZWVkUGVyRnJhbWUpKHZhbHVlLnZlbG9jaXR5LCBlbGFwc2VkKTtcblxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdmFsdWUgaGFzIGNoYW5nZWRcbiAgICAgICAgICAgIGlmICh2YWx1ZS5jdXJyZW50ICE9PSBwcmV2aW91c1ZhbHVlIHx8IE1hdGguYWJzKHZhbHVlLnZlbG9jaXR5KSA+PSB2YWx1ZS5zdG9wU3BlZWQpIHtcbiAgICAgICAgICAgICAgICBfdGhpczIuaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBQaHlzaWNzLnByb3RvdHlwZS5mcmFtZUVuZCA9IGZ1bmN0aW9uIGZyYW1lRW5kKCkge1xuICAgICAgICBpZiAodGhpcy5hdXRvRW5kKSB7XG4gICAgICAgICAgICB0aGlzLmluYWN0aXZlRnJhbWVzID0gdGhpcy5oYXNDaGFuZ2VkID8gMSA6IHRoaXMuaW5hY3RpdmVGcmFtZXMgKyAxO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5pbmFjdGl2ZUZyYW1lcyA+PSB0aGlzLm1heEluYWN0aXZlRnJhbWVzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgIyBHZXQgZGVmYXVsdCBTaW11bGF0ZSBwcm9wc1xuICAgICAgICAgQHJldHVybiBbb2JqZWN0XVxuICAgICovXG5cbiAgICBQaHlzaWNzLnByb3RvdHlwZS5nZXREZWZhdWx0UHJvcHMgPSBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgX0FjdGlvbi5wcm90b3R5cGUuZ2V0RGVmYXVsdFByb3BzLmNhbGwodGhpcyksIHtcbiAgICAgICAgICAgIGF1dG9FbmQ6IHRydWUsXG4gICAgICAgICAgICBtYXhJbmFjdGl2ZUZyYW1lczogM1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgIyBHZXQgZGVmYXVsdCBTaW11bGF0ZSB2YWx1ZSBwcm9wc1xuICAgICAgICAgQHJldHVybiBbb2JqZWN0XVxuICAgICovXG5cbiAgICBQaHlzaWNzLnByb3RvdHlwZS5nZXREZWZhdWx0VmFsdWUgPSBmdW5jdGlvbiBnZXREZWZhdWx0VmFsdWUoKSB7XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgX0FjdGlvbi5wcm90b3R5cGUuZ2V0RGVmYXVsdFZhbHVlLmNhbGwodGhpcyksIHtcbiAgICAgICAgICAgIGZvcmNlOiAwLCAvLyBbbnVtYmVyXTogQWNjZWxlcmF0aW9uIHRvIGFwcGx5IHRvIHZhbHVlLCBpbiB1bml0cyBwZXIgc2Vjb25kXG4gICAgICAgICAgICBib3VuY2U6IDAsIC8vIFtudW1iZXJdOiBGYWN0b3IgdG8gbXVsdGlwbHkgdmVsb2NpdHkgYnkgb24gYm91bmNlXG4gICAgICAgICAgICBzcHJpbmc6IDAsIC8vIFtudW1iZXJdOiBTcHJpbmcgc3RyZW5ndGggZHVyaW5nICdzdHJpbmcnXG4gICAgICAgICAgICBzdG9wU3BlZWQ6IDAuMDAwMSwgLy8gW251bWJlcl06IFN0b3Agc2ltdWxhdGlvbiB1bmRlciB0aGlzIHNwZWVkXG4gICAgICAgICAgICBmcmljdGlvbjogMCAvLyBbbnVtYmVyXTogRnJpY3Rpb24gdG8gYXBwbHkgcGVyIGZyYW1lLCAwLTFcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8qXG4gICAgICAgICMgR2V0IGRlZmF1bHQgU2ltdWxhdGUgdmFsdWUgcHJvcGVydHkgbmFtZVxuICAgICAgICAjIyBTZXQgdmFsdWVzIHRvIHRoaXMgd2hlbiBhIGB2YWx1ZWAgaXMgbm90IHByb3ZpZGVkIGFzIGFuIG9iamVjdFxuICAgICAgICAgQHJldHVybiBbc3RyaW5nXVxuICAgICovXG5cbiAgICBQaHlzaWNzLnByb3RvdHlwZS5nZXREZWZhdWx0VmFsdWVQcm9wID0gZnVuY3Rpb24gZ2V0RGVmYXVsdFZhbHVlUHJvcCgpIHtcbiAgICAgICAgcmV0dXJuICd2ZWxvY2l0eSc7XG4gICAgfTtcblxuICAgIHJldHVybiBQaHlzaWNzO1xufSkoX0FjdGlvbjMuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFBoeXNpY3M7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWxCb2VYTnBZM011YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3T3pzN096czdPenM3T3pzN096dEpRVWx4UWl4UFFVRlBPMk5CUVZBc1QwRkJUenM3UVVGRmVFSXNZVUZHYVVJc1QwRkJUeXhIUVVWSU96aENRVVpLTEU5QlFVODdPekJEUVVWVUxFbEJRVWs3UVVGQlNpeG5Ra0ZCU1RzN08zRkVRVU5tTERCRFFVRlRMRWxCUVVrc1JVRkJRenM3UVVGRFpDeGpRVUZMTEdOQlFXTXNSMEZCUnl4RFFVRkRMRU5CUVVNN08wdEJRek5DT3p0QlFVeG5RaXhYUVVGUExGZEJUM2hDTEUxQlFVMHNiVUpCUVVNc1QwRkJUeXhGUVVGRkxGVkJRVlVzUlVGQlJTeFBRVUZQTEVWQlFVVTdPenRCUVVOcVF5eFpRVUZKTEVOQlFVTXNWVUZCVlN4SFFVRkhMRXRCUVVzc1EwRkJRenM3UVVGRmVFSXNjVUpCV2tNc1NVRkJTU3hGUVZsQkxFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVXNWVUZCUXl4TFFVRkxMRVZCUVVVc1IwRkJSeXhGUVVGTE8wRkJRemxDTEdkQ1FVRk5MR0ZCUVdFc1IwRkJSeXhMUVVGTExFTkJRVU1zVDBGQlR6czdPMEZCUVVNc1FVRkhjRU1zYVVKQlFVc3NRMEZCUXl4UlFVRlJMRWxCUVVrc1dVRnFRbkpDTEdGQlFXRXNSVUZwUW5OQ0xFdEJRVXNzUTBGQlF5eExRVUZMTEVWQlFVVXNUMEZCVHl4RFFVRkRPenM3UVVGQlF5eEJRVWQwUkN4cFFrRkJTeXhEUVVGRExGRkJRVkVzWVVGQlN5eERRVUZETEVkQlFVY3NTMEZCU3l4RFFVRkRMRkZCUVZFc1JVRkJUU3hQUVVGUExFZEJRVWNzUlVGQlJTeERRVUZET3pzN1FVRkJReXhCUVVkNlJDeG5Ra0ZCU1N4TFFVRkxMRU5CUVVNc1RVRkJUU3hKUVVGSkxHRkJkRUpxUWl4TFFVRkxMRVZCYzBKclFpeExRVUZMTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVN1FVRkRha01zYjBKQlFVMHNaMEpCUVdkQ0xFZEJRVWNzUzBGQlN5eERRVUZETEVWQlFVVXNSMEZCUnl4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRE8wRkJRMnhFTEhGQ1FVRkxMRU5CUVVNc1VVRkJVU3hKUVVGSkxHZENRVUZuUWl4SFFVRkhMRmxCZWtJMVF5eGhRVUZoTEVWQmVVSTJReXhMUVVGTExFTkJRVU1zVFVGQlRTeEZRVUZGTEU5QlFVOHNRMEZCUXl4RFFVRkRPMkZCUXpkRk96czdRVUZCUVN4QlFVZEVMR2xDUVVGTExFTkJRVU1zVDBGQlR5eEpRVUZKTEZsQk4wSndRaXhoUVVGaExFVkJOa0p4UWl4TFFVRkxMRU5CUVVNc1VVRkJVU3hGUVVGRkxFOUJRVThzUTBGQlF6czdPMEZCUVVNc1FVRkhlRVFzWjBKQlFVa3NTMEZCU3l4RFFVRkRMRTlCUVU4c1MwRkJTeXhoUVVGaExFbEJRVWtzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUzBGQlN5eERRVUZETEZOQlFWTXNSVUZCUlR0QlFVTm9SaXgxUWtGQlN5eFZRVUZWTEVkQlFVY3NTVUZCU1N4RFFVRkRPMkZCUXpGQ08xTkJRMG9zUTBGQlF5eERRVUZETzB0QlEwNDdPMEZCYWtOblFpeFhRVUZQTEZkQmJVTjRRaXhSUVVGUkxIVkNRVUZITzBGQlExQXNXVUZCU1N4SlFVRkpMRU5CUVVNc1QwRkJUeXhGUVVGRk8wRkJRMlFzWjBKQlFVa3NRMEZCUXl4alFVRmpMRWRCUVVjc1NVRkJTU3hEUVVGRExGVkJRVlVzUjBGQlJ5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMR05CUVdNc1IwRkJSeXhEUVVGRExFTkJRVU03TzBGQlJYQkZMR2RDUVVGSkxFbEJRVWtzUTBGQlF5eGpRVUZqTEVsQlFVa3NTVUZCU1N4RFFVRkRMR2xDUVVGcFFpeEZRVUZGTzBGQlF5OURMRzlDUVVGSkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTTdZVUZEWmp0VFFVTktPMHRCUTBvN096czdPenM3UVVFelEyZENMRmRCUVU4c1YwRnJSSGhDTEdWQlFXVXNPRUpCUVVjN1FVRkRaQ3cwUWtGRFR5eHJRa0ZCVFN4bFFVRmxMRXRCUVVFc1RVRkJSVHRCUVVNeFFpeHRRa0ZCVHl4RlFVRkZMRWxCUVVrN1FVRkRZaXcyUWtGQmFVSXNSVUZCUlN4RFFVRkRPMWRCUTNSQ08wdEJRMHc3T3pzN096czdRVUY0UkdkQ0xGZEJRVThzVjBFclJIaENMR1ZCUVdVc09FSkJRVWM3UVVGRFpDdzBRa0ZEVHl4clFrRkJUU3hsUVVGbExFdEJRVUVzVFVGQlJUdEJRVU14UWl4cFFrRkJTeXhGUVVGRkxFTkJRVU03UVVGRFVpeHJRa0ZCVFN4RlFVRkZMRU5CUVVNN1FVRkRWQ3hyUWtGQlRTeEZRVUZGTEVOQlFVTTdRVUZEVkN4eFFrRkJVeXhGUVVGRkxFMUJRVTA3UVVGRGFrSXNiMEpCUVZFc1JVRkJSU3hEUVVGRE8wRkJRVUVzVjBGRFlqdExRVU5NT3pzN096czdPenRCUVhoRlowSXNWMEZCVHl4WFFXZEdlRUlzYlVKQlFXMUNMR3REUVVGSE8wRkJRMnhDTEdWQlFVOHNWVUZCVlN4RFFVRkRPMHRCUTNKQ096dFhRV3hHWjBJc1QwRkJUenM3TzJ0Q1FVRlFMRTlCUVU4aUxDSm1hV3hsSWpvaVVHaDVjMmxqY3k1cWN5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQkJZM1JwYjI0Z1puSnZiU0FuTGk5QlkzUnBiMjRuTzF4dWFXMXdiM0owSUhzZ2MzQmxaV1JRWlhKR2NtRnRaU3dnYzNCbFpXUlFaWEpUWldOdmJtUWdmU0JtY205dElDZDFhUzFqWVd4akp6dGNibWx0Y0c5eWRDQjdJR1ZoWTJnc0lHbHpUblZ0SUgwZ1puSnZiU0FuZFdrdGRYUnBiSE1uTzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCamJHRnpjeUJRYUhsemFXTnpJR1Y0ZEdWdVpITWdRV04wYVc5dUlIdGNibHh1SUNBZ0lHTnZibk4wY25WamRHOXlLQzR1TG1GeVozTXBJSHRjYmlBZ0lDQWdJQ0FnYzNWd1pYSW9MaTR1WVhKbmN5azdYRzRnSUNBZ0lDQWdJSFJvYVhNdWFXNWhZM1JwZG1WR2NtRnRaWE1nUFNBd08xeHVJQ0FnSUgxY2JseHVJQ0FnSUhWd1pHRjBaU2h3YUhsemFXTnpMQ0JtY21GdFpWTjBZVzF3TENCbGJHRndjMlZrS1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YUdGelEyaGhibWRsWkNBOUlHWmhiSE5sTzF4dVhHNGdJQ0FnSUNBZ0lHVmhZMmdvZEdocGN5NTJZV3gxWlhNc0lDaDJZV3gxWlN3Z2EyVjVLU0E5UGlCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQndjbVYyYVc5MWMxWmhiSFZsSUQwZ2RtRnNkV1V1WTNWeWNtVnVkRHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdMeThnUVhCd2JIa2dZV05qWld4bGNtRjBhVzl1WEc0Z0lDQWdJQ0FnSUNBZ0lDQjJZV3gxWlM1MlpXeHZZMmwwZVNBclBTQnpjR1ZsWkZCbGNrWnlZVzFsS0haaGJIVmxMbVp2Y21ObExDQmxiR0Z3YzJWa0tUdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdRWEJ3YkhrZ1puSnBZM1JwYjI1Y2JpQWdJQ0FnSUNBZ0lDQWdJSFpoYkhWbExuWmxiRzlqYVhSNUlDbzlJQ2d4SUMwZ2RtRnNkV1V1Wm5KcFkzUnBiMjRwSUNvcUlDaGxiR0Z3YzJWa0lDOGdNVEFwTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0F2THlCQmNIQnNlU0J6Y0hKcGJtZGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaDJZV3gxWlM1emNISnBibWNnSmlZZ2FYTk9kVzBvZG1Gc2RXVXVkRzhwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnWkdsemRHRnVZMlZVYjFSaGNtZGxkQ0E5SUhaaGJIVmxMblJ2SUMwZ2RtRnNkV1V1WTNWeWNtVnVkRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IyWVd4MVpTNTJaV3h2WTJsMGVTQXJQU0JrYVhOMFlXNWpaVlJ2VkdGeVoyVjBJQ29nYzNCbFpXUlFaWEpHY21GdFpTaDJZV3gxWlM1emNISnBibWNzSUdWc1lYQnpaV1FwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMeUJCY0hCc2VTQnNZWFJsYzNRZ2RtVnNiMk5wZEhsY2JpQWdJQ0FnSUNBZ0lDQWdJSFpoYkhWbExtTjFjbkpsYm5RZ0t6MGdjM0JsWldSUVpYSkdjbUZ0WlNoMllXeDFaUzUyWld4dlkybDBlU3dnWld4aGNITmxaQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdJQ0FnSUM4dklFTm9aV05ySUdsbUlIWmhiSFZsSUdoaGN5QmphR0Z1WjJWa1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RtRnNkV1V1WTNWeWNtVnVkQ0FoUFQwZ2NISmxkbWx2ZFhOV1lXeDFaU0I4ZkNCTllYUm9MbUZpY3loMllXeDFaUzUyWld4dlkybDBlU2tnUGowZ2RtRnNkV1V1YzNSdmNGTndaV1ZrS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVvWVhORGFHRnVaMlZrSUQwZ2RISjFaVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmU2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdabkpoYldWRmJtUW9LU0I3WEc0Z0lDQWdJQ0FnSUdsbUlDaDBhR2x6TG1GMWRHOUZibVFwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWFXNWhZM1JwZG1WR2NtRnRaWE1nUFNCMGFHbHpMbWhoYzBOb1lXNW5aV1FnUHlBeElEb2dkR2hwY3k1cGJtRmpkR2wyWlVaeVlXMWxjeUFySURFN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaDBhR2x6TG1sdVlXTjBhWFpsUm5KaGJXVnpJRDQ5SUhSb2FYTXViV0Y0U1c1aFkzUnBkbVZHY21GdFpYTXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxuTjBiM0FvS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYmx4dUlDQWdJQzhxWEc0Z0lDQWdJQ0FnSUNNZ1IyVjBJR1JsWm1GMWJIUWdVMmx0ZFd4aGRHVWdjSEp2Y0hOY2JseHVJQ0FnSUNBZ0lDQkFjbVYwZFhKdUlGdHZZbXBsWTNSZFhHNGdJQ0FnS2k5Y2JpQWdJQ0JuWlhSRVpXWmhkV3gwVUhKdmNITW9LU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUI3WEc0Z0lDQWdJQ0FnSUNBZ0lDQXVMaTV6ZFhCbGNpNW5aWFJFWldaaGRXeDBVSEp2Y0hNb0tTeGNiaUFnSUNBZ0lDQWdJQ0FnSUdGMWRHOUZibVE2SUhSeWRXVXNYRzRnSUNBZ0lDQWdJQ0FnSUNCdFlYaEpibUZqZEdsMlpVWnlZVzFsY3pvZ00xeHVJQ0FnSUNBZ0lDQjlPMXh1SUNBZ0lIMWNibHh1SUNBZ0lDOHFYRzRnSUNBZ0lDQWdJQ01nUjJWMElHUmxabUYxYkhRZ1UybHRkV3hoZEdVZ2RtRnNkV1VnY0hKdmNITmNibHh1SUNBZ0lDQWdJQ0JBY21WMGRYSnVJRnR2WW1wbFkzUmRYRzRnSUNBZ0tpOWNiaUFnSUNCblpYUkVaV1poZFd4MFZtRnNkV1VvS1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0F1TGk1emRYQmxjaTVuWlhSRVpXWmhkV3gwVm1Gc2RXVW9LU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lHWnZjbU5sT2lBd0xDQXZMeUJiYm5WdFltVnlYVG9nUVdOalpXeGxjbUYwYVc5dUlIUnZJR0Z3Y0d4NUlIUnZJSFpoYkhWbExDQnBiaUIxYm1sMGN5QndaWElnYzJWamIyNWtYRzRnSUNBZ0lDQWdJQ0FnSUNCaWIzVnVZMlU2SURBc0lDOHZJRnR1ZFcxaVpYSmRPaUJHWVdOMGIzSWdkRzhnYlhWc2RHbHdiSGtnZG1Wc2IyTnBkSGtnWW5rZ2IyNGdZbTkxYm1ObFhHNGdJQ0FnSUNBZ0lDQWdJQ0J6Y0hKcGJtYzZJREFzSUM4dklGdHVkVzFpWlhKZE9pQlRjSEpwYm1jZ2MzUnlaVzVuZEdnZ1pIVnlhVzVuSUNkemRISnBibWNuWEc0Z0lDQWdJQ0FnSUNBZ0lDQnpkRzl3VTNCbFpXUTZJREF1TURBd01Td2dMeThnVzI1MWJXSmxjbDA2SUZOMGIzQWdjMmx0ZFd4aGRHbHZiaUIxYm1SbGNpQjBhR2x6SUhOd1pXVmtYRzRnSUNBZ0lDQWdJQ0FnSUNCbWNtbGpkR2x2YmpvZ01DQXZMeUJiYm5WdFltVnlYVG9nUm5KcFkzUnBiMjRnZEc4Z1lYQndiSGtnY0dWeUlHWnlZVzFsTENBd0xURmNiaUFnSUNBZ0lDQWdmVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQXZLbHh1SUNBZ0lDQWdJQ0FqSUVkbGRDQmtaV1poZFd4MElGTnBiWFZzWVhSbElIWmhiSFZsSUhCeWIzQmxjblI1SUc1aGJXVmNiaUFnSUNBZ0lDQWdJeU1nVTJWMElIWmhiSFZsY3lCMGJ5QjBhR2x6SUhkb1pXNGdZU0JnZG1Gc2RXVmdJR2x6SUc1dmRDQndjbTkyYVdSbFpDQmhjeUJoYmlCdlltcGxZM1JjYmx4dUlDQWdJQ0FnSUNCQWNtVjBkWEp1SUZ0emRISnBibWRkWEc0Z0lDQWdLaTljYmlBZ0lDQm5aWFJFWldaaGRXeDBWbUZzZFdWUWNtOXdLQ2tnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnSjNabGJHOWphWFI1Snp0Y2JpQWdJQ0I5WEc1OVhHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL1BoeXNpY3MuanNcbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfQWN0aW9uMiA9IHJlcXVpcmUoJy4vQWN0aW9uJyk7XG5cbnZhciBfQWN0aW9uMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0FjdGlvbjIpO1xuXG52YXIgX3VpQ2FsYyA9IHJlcXVpcmUoJ3VpLWNhbGMnKTtcblxudmFyIF91aVV0aWxzID0gcmVxdWlyZSgndWktdXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgVHJhY2sgPSAoZnVuY3Rpb24gKF9BY3Rpb24pIHtcbiAgICBfaW5oZXJpdHMoVHJhY2ssIF9BY3Rpb24pO1xuXG4gICAgZnVuY3Rpb24gVHJhY2socHJvcHMsIGlucHV0KSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUcmFjayk7XG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0FjdGlvbi5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICAgICAgX3RoaXMuaW5wdXQgPSBpbnB1dDtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIFRyYWNrLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgICAgICBfQWN0aW9uLnByb3RvdHlwZS5zdGFydC5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLmlucHV0T3JpZ2luID0ge307XG4gICAgfTtcblxuICAgIFRyYWNrLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUodHJhY2ssIGZyYW1lRHVyYXRpb24sIGVsYXBzZWQpIHtcbiAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5pbnB1dE9mZnNldCA9ICgwLCBfdWlDYWxjLm9mZnNldCkodGhpcy5pbnB1dE9yaWdpbiwgdGhpcy5pbnB1dC5jdXJyZW50KTtcblxuICAgICAgICAoMCwgX3VpVXRpbHMuZWFjaCkodGhpcy52YWx1ZXMsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMyLmlucHV0T2Zmc2V0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUuZGlyZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSBfdGhpczIuaW5wdXQuY3VycmVudFtrZXldO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSB2YWx1ZS5vcmlnaW4gKyBfdGhpczIuaW5wdXRPZmZzZXRba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBUcmFjay5wcm90b3R5cGUuZ2V0RGVmYXVsdFZhbHVlID0gZnVuY3Rpb24gZ2V0RGVmYXVsdFZhbHVlKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYW1wOiAxLFxuICAgICAgICAgICAgZXNjYXBlQW1wOiAwLFxuICAgICAgICAgICAgZGlyZWN0OiBmYWxzZSxcbiAgICAgICAgICAgIHNtb290aDogMFxuICAgICAgICB9O1xuICAgIH07XG5cbiAgICByZXR1cm4gVHJhY2s7XG59KShfQWN0aW9uMy5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gVHJhY2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWxSeVlXTnJMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096czdPenM3T3pzN096czdPenM3TzBsQlNYRkNMRXRCUVVzN1kwRkJUQ3hMUVVGTE96dEJRVU4wUWl4aFFVUnBRaXhMUVVGTExFTkJRMVlzUzBGQlN5eEZRVUZGTEV0QlFVc3NSVUZCUlRzNFFrRkVWQ3hMUVVGTE96dHhSRUZGYkVJc2JVSkJRVTBzUzBGQlN5eERRVUZET3p0QlFVTmFMR05CUVVzc1MwRkJTeXhIUVVGSExFdEJRVXNzUTBGQlF6czdTMEZEZEVJN08wRkJTbWRDTEZOQlFVc3NWMEZOZEVJc1MwRkJTeXh2UWtGQlJ6dEJRVU5LTERCQ1FVRk5MRXRCUVVzc1MwRkJRU3hOUVVGRkxFTkJRVU03UVVGRFpDeFpRVUZKTEVOQlFVTXNWMEZCVnl4SFFVRkhMRVZCUVVVc1EwRkJRenRMUVVONlFqczdRVUZVWjBJc1UwRkJTeXhYUVZkMFFpeE5RVUZOTEcxQ1FVRkRMRXRCUVVzc1JVRkJSU3hoUVVGaExFVkJRVVVzVDBGQlR5eEZRVUZGT3pzN1FVRkRiRU1zV1VGQlNTeERRVUZETEZkQlFWY3NSMEZCUnl4WlFXWnNRaXhOUVVGTkxFVkJaVzFDTEVsQlFVa3NRMEZCUXl4WFFVRlhMRVZCUVVVc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXpzN1FVRkZhRVVzY1VKQmFFSkRMRWxCUVVrc1JVRm5Ra0VzU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlN4VlFVRkRMRXRCUVVzc1JVRkJSU3hIUVVGSExFVkJRVXM3UVVGRE9VSXNaMEpCUVVrc1QwRkJTeXhYUVVGWExFTkJRVU1zWTBGQll5eERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZPMEZCUTNSRExHOUNRVUZKTEV0QlFVc3NRMEZCUXl4TlFVRk5MRVZCUVVVN1FVRkRaQ3g1UWtGQlN5eERRVUZETEU5QlFVOHNSMEZCUnl4UFFVRkxMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdhVUpCUXpORExFMUJRVTA3UVVGRFNDeDVRa0ZCU3l4RFFVRkRMRTlCUVU4c1IwRkJSeXhMUVVGTExFTkJRVU1zVFVGQlRTeEhRVUZITEU5QlFVc3NWMEZCVnl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8ybENRVU40UkR0aFFVTktPMU5CUTBvc1EwRkJReXhEUVVGRE8wdEJRMDQ3TzBGQmRrSm5RaXhUUVVGTExGZEJlVUowUWl4bFFVRmxMRGhDUVVGSE8wRkJRMlFzWlVGQlR6dEJRVU5JTEdWQlFVY3NSVUZCUlN4RFFVRkRPMEZCUTA0c2NVSkJRVk1zUlVGQlJTeERRVUZETzBGQlExb3NhMEpCUVUwc1JVRkJSU3hMUVVGTE8wRkJRMklzYTBKQlFVMHNSVUZCUlN4RFFVRkRPMU5CUTFvc1EwRkJRenRMUVVOTU96dFhRV2hEWjBJc1MwRkJTenM3TzJ0Q1FVRk1MRXRCUVVzaUxDSm1hV3hsSWpvaVZISmhZMnN1YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ1FXTjBhVzl1SUdaeWIyMGdKeTR2UVdOMGFXOXVKenRjYm1sdGNHOXlkQ0I3SUc5bVpuTmxkQ0I5SUdaeWIyMGdKM1ZwTFdOaGJHTW5PMXh1YVcxd2IzSjBJSHNnWldGamFDQjlJR1p5YjIwZ0ozVnBMWFYwYVd4ekp6dGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdZMnhoYzNNZ1ZISmhZMnNnWlhoMFpXNWtjeUJCWTNScGIyNGdlMXh1SUNBZ0lHTnZibk4wY25WamRHOXlLSEJ5YjNCekxDQnBibkIxZENrZ2UxeHVJQ0FnSUNBZ0lDQnpkWEJsY2lod2NtOXdjeWs3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVhVzV3ZFhRZ1BTQnBibkIxZER0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J6ZEdGeWRDZ3BJSHRjYmlBZ0lDQWdJQ0FnYzNWd1pYSXVjM1JoY25Rb0tUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1cGJuQjFkRTl5YVdkcGJpQTlJSHQ5TzF4dUlDQWdJSDFjYmx4dUlDQWdJSFZ3WkdGMFpTaDBjbUZqYXl3Z1puSmhiV1ZFZFhKaGRHbHZiaXdnWld4aGNITmxaQ2tnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbWx1Y0hWMFQyWm1jMlYwSUQwZ2IyWm1jMlYwS0hSb2FYTXVhVzV3ZFhSUGNtbG5hVzRzSUhSb2FYTXVhVzV3ZFhRdVkzVnljbVZ1ZENrN1hHNWNiaUFnSUNBZ0lDQWdaV0ZqYUNoMGFHbHpMblpoYkhWbGN5d2dLSFpoYkhWbExDQnJaWGtwSUQwK0lIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaDBhR2x6TG1sdWNIVjBUMlptYzJWMExtaGhjMDkzYmxCeWIzQmxjblI1S0d0bGVTa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RtRnNkV1V1WkdseVpXTjBLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIWmhiSFZsTG1OMWNuSmxiblFnUFNCMGFHbHpMbWx1Y0hWMExtTjFjbkpsYm5SYmEyVjVYVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMllXeDFaUzVqZFhKeVpXNTBJRDBnZG1Gc2RXVXViM0pwWjJsdUlDc2dkR2hwY3k1cGJuQjFkRTltWm5ObGRGdHJaWGxkTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlNrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnWjJWMFJHVm1ZWFZzZEZaaGJIVmxLQ2tnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdZVzF3T2lBeExGeHVJQ0FnSUNBZ0lDQWdJQ0FnWlhOallYQmxRVzF3T2lBd0xGeHVJQ0FnSUNBZ0lDQWdJQ0FnWkdseVpXTjBPaUJtWVd4elpTeGNiaUFnSUNBZ0lDQWdJQ0FnSUhOdGIyOTBhRG9nTUZ4dUlDQWdJQ0FnSUNCOU8xeHVJQ0FnSUgxY2JuMWNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9UcmFjay5qc1xuICoqIG1vZHVsZSBpZCA9IDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9mcmFtZXN5bmMgPSByZXF1aXJlKCdmcmFtZXN5bmMnKTtcblxudmFyIF91aVV0aWxzID0gcmVxdWlyZSgndWktdXRpbHMnKTtcblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBERUZBVUxUX1BST1AgPSAnY3VycmVudCc7XG5cbnZhciBBY3Rpb24gPSAoZnVuY3Rpb24gKF9Qcm9jZXNzKSB7XG4gICAgX2luaGVyaXRzKEFjdGlvbiwgX1Byb2Nlc3MpO1xuXG4gICAgLypcbiAgICAgICAgIyBBY3Rpb24gY2xhc3MgY29uc3RydWN0b3JcbiAgICAgICAgIyMgQXNzaWduIGRlZmF1bHQgcHJvcGVydGllcyBvZiBBY3Rpb24gb3IgZXh0ZW5kZWQgY2xhc3MgYW5kIHNldCB1c2VyLWRlZmluZWQgcHJvcHNcbiAgICAgICAgIEBwYXJhbSBbb2JqZWN0XVxuICAgICovXG5cbiAgICBmdW5jdGlvbiBBY3Rpb24ocHJvcHMpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFjdGlvbik7XG5cbiAgICAgICAgLy8gTG9hZCBkZWZhdWx0IHByb3BzXG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1Byb2Nlc3MuY2FsbCh0aGlzKSk7XG5cbiAgICAgICAgKDAsIF91aVV0aWxzLmVhY2gpKF90aGlzLmdldERlZmF1bHRQcm9wcygpLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgX3RoaXMudmFsdWVzID0ge307XG4gICAgICAgIF90aGlzLnNldChwcm9wcywgX3RoaXMuZ2V0RGVmYXVsdFZhbHVlUHJvcCgpKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgICMgU2V0IEFjdGlvbiBwcm9wZXJ0aWVzXG4gICAgICAgICMjIFNldCB1c2VyLWRlZmluZWQgQWN0aW9uIHByb3BlcnRpZXNcbiAgICAgICAgIEBwYXJhbSBbb2JqZWN0XVxuICAgICAgICBAcGFyYW0gW3N0cmluZ106IE5hbWUgb2YgZGVmYXVsdCB2YWx1ZSBwcm9wZXJ0eSAoc2V0IHdoZW4gYHZhbHVlYCBpcyAqKm5vdCoqIHByb3ZpZGVkIGFzIG9iamVjdClcbiAgICAgICAgQHJldHVybiBbQWN0aW9uXVxuICAgICovXG5cbiAgICBBY3Rpb24ucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIHNldChwcm9wcykge1xuICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICB2YXIgZGVmYXVsdFZhbHVlUHJvcCA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IERFRkFVTFRfUFJPUCA6IGFyZ3VtZW50c1sxXTtcbiAgICAgICAgdmFyIHZhbHVlcyA9IHByb3BzLnZhbHVlcztcblxuICAgICAgICB2YXIgcHJvcHNUb1NldCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgWyd2YWx1ZXMnXSk7XG5cbiAgICAgICAgLy8gTG9vcCB0aHJvdWdoIG5vbi1gdmFsdWVgIHByb3BzIGFuZCBzZXRcblxuICAgICAgICAoMCwgX3VpVXRpbHMuZWFjaCkocHJvcHNUb1NldCwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICAgIF90aGlzMltrZXldID0gdmFsdWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIE1lcmdlIGB2YWx1ZWAgcHJvcGVydGllcyB3aXRoIGV4aXN0aW5nXG4gICAgICAgIGlmICh2YWx1ZXMpIHtcbiAgICAgICAgICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRWYWx1ZXMgPSBfdGhpczIudmFsdWVzO1xuICAgICAgICAgICAgICAgIHZhciBkZWZhdWx0VmFsdWUgPSBfdGhpczIuZ2V0RGVmYXVsdFZhbHVlKCk7XG5cbiAgICAgICAgICAgICAgICAvLyBJbmhlcml0IHZhbHVlcyBmcm9tIHByb3BzXG4gICAgICAgICAgICAgICAgKDAsIF91aVV0aWxzLmVhY2gpKGRlZmF1bHRWYWx1ZSwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BzVG9TZXRba2V5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWVba2V5XSA9IHByb3BzVG9TZXRba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy8gT3ZlcndyaXRlIHBlci12YWx1ZSBwcm9wc1xuICAgICAgICAgICAgICAgICgwLCBfdWlVdGlscy5lYWNoKSh2YWx1ZXMsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBleGlzdGluZ1ZhbHVlID0gY3VycmVudFZhbHVlc1trZXldO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3VmFsdWUgPSBfZXh0ZW5kcyh7fSwgZGVmYXVsdFZhbHVlKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoKDAsIF91aVV0aWxzLmlzT2JqKSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gX2V4dGVuZHMoe30sIG5ld1ZhbHVlLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZVtkZWZhdWx0VmFsdWVQcm9wXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFZhbHVlc1trZXldID0gZXhpc3RpbmdWYWx1ZSA/IF9leHRlbmRzKHt9LCBleGlzdGluZ1ZhbHVlLCBuZXdWYWx1ZSkgOiBuZXdWYWx1ZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgQWN0aW9uLnByb3RvdHlwZS5wYXVzZSA9IGZ1bmN0aW9uIHBhdXNlKCkge1xuICAgICAgICBfUHJvY2Vzcy5wcm90b3R5cGUuc3RvcC5jYWxsKHRoaXMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgQWN0aW9uLnByb3RvdHlwZS5yZXN1bWUgPSBmdW5jdGlvbiByZXN1bWUoKSB7XG4gICAgICAgIF9Qcm9jZXNzLnByb3RvdHlwZS5zdGFydC5jYWxsKHRoaXMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgIyBHZXQgZGVmYXVsdCBBY3Rpb24gcHJvcGVydGllc1xuICAgICAgICAgQHJldHVybiBbb2JqZWN0XVxuICAgICovXG5cbiAgICBBY3Rpb24ucHJvdG90eXBlLmdldERlZmF1bHRQcm9wcyA9IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH07XG5cbiAgICAvKlxuICAgICAgICAjIEdldCBkZWZhdWx0IEFjdGlvbiB2YWx1ZSBwcm9wZXJ0aWVzXG4gICAgICAgICBAcmV0dXJuIFtvYmplY3RdXG4gICAgKi9cblxuICAgIEFjdGlvbi5wcm90b3R5cGUuZ2V0RGVmYXVsdFZhbHVlID0gZnVuY3Rpb24gZ2V0RGVmYXVsdFZhbHVlKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY3VycmVudDogMCxcbiAgICAgICAgICAgIHZlbG9jaXR5OiAwXG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIC8qXG4gICAgICAgICMgR2V0IGRlZmF1bHQgQWN0aW9uIHZhbHVlIHByb3BlcnR5IG5hbWVcbiAgICAgICAgIyMgU2V0IHRoaXMgYHZhbHVlYCBwcm9wZXJ0eSB3aGVuIHNldCBhcyB2YWx1ZSBpbnN0ZWFkIG9mIG9iamVjdFxuICAgICAgICAgQHJldHVybiBbc3RyaW5nXVxuICAgICovXG5cbiAgICBBY3Rpb24ucHJvdG90eXBlLmdldERlZmF1bHRWYWx1ZVByb3AgPSBmdW5jdGlvbiBnZXREZWZhdWx0VmFsdWVQcm9wKCkge1xuICAgICAgICByZXR1cm4gREVGQVVMVF9QUk9QO1xuICAgIH07XG5cbiAgICAvKlxuICAgICAgICAjIEV4dGVuZCB0aGlzIEFjdGlvbiB3aXRoIG5ldyBwcm9wZXJ0aWVzXG4gICAgICAgICMjIFJldHVybnMgbmV3IGluc3RhbmNlIG9mIHRoaXMgQWN0aW9uJ3MgYHByb3RvdHlwZWAgd2l0aCBleGlzdGluZyBhbmQgbmV3IHByb3BlcnRpZXNcbiAgICAgICAgIEBwYXJhbSBbb2JqZWN0XSAob3B0aW9uYWwpXG4gICAgICAgIEByZXR1cm4gW0FjdGlvbl1cbiAgICAqL1xuXG4gICAgQWN0aW9uLnByb3RvdHlwZS5leHRlbmQgPSBmdW5jdGlvbiBleHRlbmQocHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyB0aGlzLmNvbnN0cnVjdG9yKF9leHRlbmRzKHt9LCB0aGlzLCB7IHByb3BzOiBwcm9wcyB9KSwgdGhpcy5nZXREZWZhdWx0VmFsdWVQcm9wKCkpO1xuICAgIH07XG5cbiAgICByZXR1cm4gQWN0aW9uO1xufSkoX2ZyYW1lc3luYy5Qcm9jZXNzKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQWN0aW9uO1xuO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklrRmpkR2x2Ymk1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3T3pzN096czdPenM3T3pzN1FVRkhRU3hKUVVGTkxGbEJRVmtzUjBGQlJ5eFRRVUZUTEVOQlFVTTdPMGxCUlZZc1RVRkJUVHRqUVVGT0xFMUJRVTA3T3pzN096czdPMEZCVDNaQ0xHRkJVR2xDTEUxQlFVMHNRMEZQV0N4TFFVRkxMRVZCUVVVN09FSkJVRVlzVFVGQlRUczdPenR4UkVGUmJrSXNiVUpCUVU4N08wRkJSMUFzY1VKQlprTXNTVUZCU1N4RlFXVkJMRTFCUVVzc1pVRkJaU3hGUVVGRkxFVkJRVVVzVlVGQlF5eExRVUZMTEVWQlFVVXNSMEZCUnp0dFFrRkJTeXhOUVVGTExFZEJRVWNzUTBGQlF5eEhRVUZITEV0QlFVczdVMEZCUVN4RFFVRkRMRU5CUVVNN08wRkJSV2hGTEdOQlFVc3NUVUZCVFN4SFFVRkhMRVZCUVVVc1EwRkJRenRCUVVOcVFpeGpRVUZMTEVkQlFVY3NRMEZCUXl4TFFVRkxMRVZCUVVVc1RVRkJTeXh0UWtGQmJVSXNSVUZCUlN4RFFVRkRMRU5CUVVNN08wdEJReTlET3pzN096czdPenM3UVVGQlFUdEJRV1puUWl4VlFVRk5MRmRCZVVKMlFpeEhRVUZITEdkQ1FVRkRMRXRCUVVzc1JVRkJiVU03T3p0WlFVRnFReXhuUWtGQlowSXNlVVJCUVVjc1dVRkJXVHRaUVVNNVFpeE5RVUZOTEVkQlFXOUNMRXRCUVVzc1EwRkJMMElzVFVGQlRUczdXVUZCU3l4VlFVRlZMRFJDUVVGTExFdEJRVXM3T3pzN1FVRkhka01zY1VKQmFrTkRMRWxCUVVrc1JVRnBRMEVzVlVGQlZTeEZRVUZGTEZWQlFVTXNTMEZCU3l4RlFVRkZMRWRCUVVjc1JVRkJTenRCUVVNM1FpeHRRa0ZCU3l4SFFVRkhMRU5CUVVNc1IwRkJSeXhMUVVGTExFTkJRVU03VTBGRGNrSXNRMEZCUXpzN08wRkJRVU1zUVVGSFNDeFpRVUZKTEUxQlFVMHNSVUZCUlRzN1FVRkRVaXh2UWtGQlRTeGhRVUZoTEVkQlFVY3NUMEZCU3l4TlFVRk5MRU5CUVVNN1FVRkRiRU1zYjBKQlFVMHNXVUZCV1N4SFFVRkhMRTlCUVVzc1pVRkJaU3hGUVVGRk96czdRVUZCUXl4QlFVYzFReXcyUWtFelEwZ3NTVUZCU1N4RlFUSkRTU3haUVVGWkxFVkJRVVVzVlVGQlF5eExRVUZMTEVWQlFVVXNSMEZCUnl4RlFVRkxPMEZCUXk5Q0xIZENRVUZKTEZWQlFWVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1MwRkJTeXhUUVVGVExFVkJRVVU3UVVGREwwSXNiME5CUVZrc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eFZRVUZWTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN2NVSkJRM1pETzJsQ1FVTktMRU5CUVVNN096dEJRVUZETEVGQlIwZ3NOa0pCYkVSSUxFbEJRVWtzUlVGclJFa3NUVUZCVFN4RlFVRkZMRlZCUVVNc1MwRkJTeXhGUVVGRkxFZEJRVWNzUlVGQlN6dEJRVU42UWl4M1FrRkJUU3hoUVVGaExFZEJRVWNzWVVGQllTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMEZCUTNwRExIZENRVUZKTEZGQlFWRXNaMEpCUVZFc1dVRkJXU3hEUVVGRkxFTkJRVU03TzBGQlJXNURMSGRDUVVGSkxHRkJkRVJNTEV0QlFVc3NSVUZ6UkUwc1MwRkJTeXhEUVVGRExFVkJRVVU3UVVGRFpDeG5RMEZCVVN4blFrRkJVU3hSUVVGUkxFVkJRVXNzUzBGQlN5eERRVUZGTEVOQlFVTTdjVUpCUTNoRExFMUJRVTA3UVVGRFNDeG5RMEZCVVN4RFFVRkRMR2RDUVVGblFpeERRVUZETEVkQlFVY3NTMEZCU3l4RFFVRkRPM0ZDUVVOMFF6czdRVUZGUkN4cFEwRkJZU3hEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEdGQlFXRXNaMEpCUVZFc1lVRkJZU3hGUVVGTExGRkJRVkVzU1VGQlN5eFJRVUZSTEVOQlFVTTdhVUpCUTNKR0xFTkJRVU1zUTBGQlF6czdVMEZEVGpzN1FVRkZSQ3hsUVVGUExFbEJRVWtzUTBGQlF6dExRVU5tT3p0QlFUZEVaMElzVlVGQlRTeFhRU3RFZGtJc1MwRkJTeXh2UWtGQlJ6dEJRVU5LTERKQ1FVRk5MRWxCUVVrc1MwRkJRU3hOUVVGRkxFTkJRVU03UVVGRFlpeGxRVUZQTEVsQlFVa3NRMEZCUXp0TFFVTm1PenRCUVd4RlowSXNWVUZCVFN4WFFXOUZka0lzVFVGQlRTeHhRa0ZCUnp0QlFVTk1MREpDUVVGTkxFdEJRVXNzUzBGQlFTeE5RVUZGTEVOQlFVTTdRVUZEWkN4bFFVRlBMRWxCUVVrc1EwRkJRenRMUVVObU96czdPenM3TzBGQmRrVm5RaXhWUVVGTkxGZEJPRVYyUWl4bFFVRmxMRGhDUVVGSE8wRkJRMlFzWlVGQlR5eEZRVUZGTEVOQlFVTTdTMEZEWWpzN096czdPenRCUVdoR1owSXNWVUZCVFN4WFFYVkdka0lzWlVGQlpTdzRRa0ZCUnp0QlFVTmtMR1ZCUVU4N1FVRkRTQ3h0UWtGQlR5eEZRVUZGTEVOQlFVTTdRVUZEVml4dlFrRkJVU3hGUVVGRkxFTkJRVU03VTBGRFpDeERRVUZETzB0QlEwdzdPenM3T3pzN08wRkJOVVpuUWl4VlFVRk5MRmRCYjBkMlFpeHRRa0ZCYlVJc2EwTkJRVWM3UVVGRGJFSXNaVUZCVHl4WlFVRlpMRU5CUVVNN1MwRkRka0k3T3pzN096czdPenRCUVhSSFowSXNWVUZCVFN4WFFTdEhka0lzVFVGQlRTeHRRa0ZCUXl4TFFVRkxMRVZCUVVVN1FVRkRWaXhsUVVGUExFbEJRVWtzU1VGQlNTeERRVUZETEZkQlFWY3NZMEZCVFN4SlFVRkpMRWxCUVVVc1MwRkJTeXhGUVVGTUxFdEJRVXNzUzBGQlNTeEpRVUZKTEVOQlFVTXNiVUpCUVcxQ0xFVkJRVVVzUTBGQlF5eERRVUZETzB0QlF5OUZPenRYUVdwSVowSXNUVUZCVFR0alFVeHNRaXhQUVVGUE96dHJRa0ZMU3l4TlFVRk5PMEZCYTBneFFpeERRVUZESWl3aVptbHNaU0k2SWtGamRHbHZiaTVxY3lJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCN0lGQnliMk5sYzNNZ2ZTQm1jbTl0SUNkbWNtRnRaWE41Ym1Nbk8xeHVhVzF3YjNKMElIc2daV0ZqYUN3Z2FYTlBZbW9nZlNCbWNtOXRJQ2QxYVMxMWRHbHNjeWM3WEc1Y2JtTnZibk4wSUVSRlJrRlZURlJmVUZKUFVDQTlJQ2RqZFhKeVpXNTBKenRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnWTJ4aGMzTWdRV04wYVc5dUlHVjRkR1Z1WkhNZ1VISnZZMlZ6Y3lCN1hHNGdJQ0FnTHlwY2JpQWdJQ0FnSUNBZ0l5QkJZM1JwYjI0Z1kyeGhjM01nWTI5dWMzUnlkV04wYjNKY2JpQWdJQ0FnSUNBZ0l5TWdRWE56YVdkdUlHUmxabUYxYkhRZ2NISnZjR1Z5ZEdsbGN5QnZaaUJCWTNScGIyNGdiM0lnWlhoMFpXNWtaV1FnWTJ4aGMzTWdZVzVrSUhObGRDQjFjMlZ5TFdSbFptbHVaV1FnY0hKdmNITmNibHh1SUNBZ0lDQWdJQ0JBY0dGeVlXMGdXMjlpYW1WamRGMWNiaUFnSUNBcUwxeHVJQ0FnSUdOdmJuTjBjblZqZEc5eUtIQnliM0J6S1NCN1hHNGdJQ0FnSUNBZ0lITjFjR1Z5S0NrN1hHNWNiaUFnSUNBZ0lDQWdMeThnVEc5aFpDQmtaV1poZFd4MElIQnliM0J6WEc0Z0lDQWdJQ0FnSUdWaFkyZ29kR2hwY3k1blpYUkVaV1poZFd4MFVISnZjSE1vS1N3Z0tIWmhiSFZsTENCclpYa3BJRDArSUhSb2FYTmJhMlY1WFNBOUlIWmhiSFZsS1R0Y2JseHVJQ0FnSUNBZ0lDQjBhR2x6TG5aaGJIVmxjeUE5SUh0OU8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG5ObGRDaHdjbTl3Y3l3Z2RHaHBjeTVuWlhSRVpXWmhkV3gwVm1Gc2RXVlFjbTl3S0NrcE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUM4cVhHNGdJQ0FnSUNBZ0lDTWdVMlYwSUVGamRHbHZiaUJ3Y205d1pYSjBhV1Z6WEc0Z0lDQWdJQ0FnSUNNaklGTmxkQ0IxYzJWeUxXUmxabWx1WldRZ1FXTjBhVzl1SUhCeWIzQmxjblJwWlhOY2JseHVJQ0FnSUNBZ0lDQkFjR0Z5WVcwZ1cyOWlhbVZqZEYxY2JpQWdJQ0FnSUNBZ1FIQmhjbUZ0SUZ0emRISnBibWRkT2lCT1lXMWxJRzltSUdSbFptRjFiSFFnZG1Gc2RXVWdjSEp2Y0dWeWRIa2dLSE5sZENCM2FHVnVJR0IyWVd4MVpXQWdhWE1nS2lwdWIzUXFLaUJ3Y205MmFXUmxaQ0JoY3lCdlltcGxZM1FwWEc0Z0lDQWdJQ0FnSUVCeVpYUjFjbTRnVzBGamRHbHZibDFjYmlBZ0lDQXFMMXh1SUNBZ0lITmxkQ2h3Y205d2N5d2daR1ZtWVhWc2RGWmhiSFZsVUhKdmNDQTlJRVJGUmtGVlRGUmZVRkpQVUNrZ2UxeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCN0lIWmhiSFZsY3l3Z0xpNHVjSEp2Y0hOVWIxTmxkQ0I5SUQwZ2NISnZjSE03WEc1Y2JpQWdJQ0FnSUNBZ0x5OGdURzl2Y0NCMGFISnZkV2RvSUc1dmJpMWdkbUZzZFdWZ0lIQnliM0J6SUdGdVpDQnpaWFJjYmlBZ0lDQWdJQ0FnWldGamFDaHdjbTl3YzFSdlUyVjBMQ0FvZG1Gc2RXVXNJR3RsZVNrZ1BUNGdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjMXRyWlhsZElEMGdkbUZzZFdVN1hHNGdJQ0FnSUNBZ0lIMHBPMXh1WEc0Z0lDQWdJQ0FnSUM4dklFMWxjbWRsSUdCMllXeDFaV0FnY0hKdmNHVnlkR2xsY3lCM2FYUm9JR1Y0YVhOMGFXNW5YRzRnSUNBZ0lDQWdJR2xtSUNoMllXeDFaWE1wSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElHTjFjbkpsYm5SV1lXeDFaWE1nUFNCMGFHbHpMblpoYkhWbGN6dGNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJR1JsWm1GMWJIUldZV3gxWlNBOUlIUm9hWE11WjJWMFJHVm1ZWFZzZEZaaGJIVmxLQ2s3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQzh2SUVsdWFHVnlhWFFnZG1Gc2RXVnpJR1p5YjIwZ2NISnZjSE5jYmlBZ0lDQWdJQ0FnSUNBZ0lHVmhZMmdvWkdWbVlYVnNkRlpoYkhWbExDQW9kbUZzZFdVc0lHdGxlU2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2h3Y205d2MxUnZVMlYwVzJ0bGVWMGdJVDA5SUhWdVpHVm1hVzVsWkNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JrWldaaGRXeDBWbUZzZFdWYmEyVjVYU0E5SUhCeWIzQnpWRzlUWlhSYmEyVjVYVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlLVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdMeThnVDNabGNuZHlhWFJsSUhCbGNpMTJZV3gxWlNCd2NtOXdjMXh1SUNBZ0lDQWdJQ0FnSUNBZ1pXRmphQ2gyWVd4MVpYTXNJQ2gyWVd4MVpTd2dhMlY1S1NBOVBpQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ1pYaHBjM1JwYm1kV1lXeDFaU0E5SUdOMWNuSmxiblJXWVd4MVpYTmJhMlY1WFR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCc1pYUWdibVYzVm1Gc2RXVWdQU0I3SUM0dUxtUmxabUYxYkhSV1lXeDFaU0I5TzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLR2x6VDJKcUtIWmhiSFZsS1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J1WlhkV1lXeDFaU0E5SUhzZ0xpNHVibVYzVm1Gc2RXVXNJQzR1TG5aaGJIVmxJSDA3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2JtVjNWbUZzZFdWYlpHVm1ZWFZzZEZaaGJIVmxVSEp2Y0YwZ1BTQjJZV3gxWlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpkWEp5Wlc1MFZtRnNkV1Z6VzJ0bGVWMGdQU0JsZUdsemRHbHVaMVpoYkhWbElEOGdleUF1TGk1bGVHbHpkR2x1WjFaaGJIVmxMQ0F1TGk1dVpYZFdZV3gxWlNCOUlEb2dibVYzVm1Gc2RXVTdYRzRnSUNBZ0lDQWdJQ0FnSUNCOUtUdGNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsek8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhCaGRYTmxLQ2tnZTF4dUlDQWdJQ0FnSUNCemRYQmxjaTV6ZEc5d0tDazdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TzF4dUlDQWdJSDFjYmx4dUlDQWdJSEpsYzNWdFpTZ3BJSHRjYmlBZ0lDQWdJQ0FnYzNWd1pYSXVjM1JoY25Rb0tUdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE03WEc0Z0lDQWdmVnh1WEc0Z0lDQWdMeXBjYmlBZ0lDQWdJQ0FnSXlCSFpYUWdaR1ZtWVhWc2RDQkJZM1JwYjI0Z2NISnZjR1Z5ZEdsbGMxeHVYRzRnSUNBZ0lDQWdJRUJ5WlhSMWNtNGdXMjlpYW1WamRGMWNiaUFnSUNBcUwxeHVJQ0FnSUdkbGRFUmxabUYxYkhSUWNtOXdjeWdwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUh0OU8xeHVJQ0FnSUgxY2JseHVJQ0FnSUM4cVhHNGdJQ0FnSUNBZ0lDTWdSMlYwSUdSbFptRjFiSFFnUVdOMGFXOXVJSFpoYkhWbElIQnliM0JsY25ScFpYTmNibHh1SUNBZ0lDQWdJQ0JBY21WMGRYSnVJRnR2WW1wbFkzUmRYRzRnSUNBZ0tpOWNiaUFnSUNCblpYUkVaV1poZFd4MFZtRnNkV1VvS1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqZFhKeVpXNTBPaUF3TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdkbVZzYjJOcGRIazZJREJjYmlBZ0lDQWdJQ0FnZlR0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0F2S2x4dUlDQWdJQ0FnSUNBaklFZGxkQ0JrWldaaGRXeDBJRUZqZEdsdmJpQjJZV3gxWlNCd2NtOXdaWEowZVNCdVlXMWxYRzRnSUNBZ0lDQWdJQ01qSUZObGRDQjBhR2x6SUdCMllXeDFaV0FnY0hKdmNHVnlkSGtnZDJobGJpQnpaWFFnWVhNZ2RtRnNkV1VnYVc1emRHVmhaQ0J2WmlCdlltcGxZM1JjYmx4dUlDQWdJQ0FnSUNCQWNtVjBkWEp1SUZ0emRISnBibWRkWEc0Z0lDQWdLaTljYmlBZ0lDQm5aWFJFWldaaGRXeDBWbUZzZFdWUWNtOXdLQ2tnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnUkVWR1FWVk1WRjlRVWs5UU8xeHVJQ0FnSUgxY2JseHVJQ0FnSUM4cVhHNGdJQ0FnSUNBZ0lDTWdSWGgwWlc1a0lIUm9hWE1nUVdOMGFXOXVJSGRwZEdnZ2JtVjNJSEJ5YjNCbGNuUnBaWE5jYmlBZ0lDQWdJQ0FnSXlNZ1VtVjBkWEp1Y3lCdVpYY2dhVzV6ZEdGdVkyVWdiMllnZEdocGN5QkJZM1JwYjI0bmN5QmdjSEp2ZEc5MGVYQmxZQ0IzYVhSb0lHVjRhWE4wYVc1bklHRnVaQ0J1WlhjZ2NISnZjR1Z5ZEdsbGMxeHVYRzRnSUNBZ0lDQWdJRUJ3WVhKaGJTQmJiMkpxWldOMFhTQW9iM0IwYVc5dVlXd3BYRzRnSUNBZ0lDQWdJRUJ5WlhSMWNtNGdXMEZqZEdsdmJsMWNiaUFnSUNBcUwxeHVJQ0FnSUdWNGRHVnVaQ2h3Y205d2N5a2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdibVYzSUhSb2FYTXVZMjl1YzNSeWRXTjBiM0lvZXlBdUxpNTBhR2x6TENCd2NtOXdjeUI5TENCMGFHbHpMbWRsZEVSbFptRjFiSFJXWVd4MVpWQnliM0FvS1NrN1hHNGdJQ0FnZlZ4dWZUdGNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9BY3Rpb24uanNcbiAqKiBtb2R1bGUgaWQgPSA2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfY3JlYXRlRWFzaW5nID0gcmVxdWlyZSgnLi9jcmVhdGUtZWFzaW5nJyk7XG5cbnZhciBfY3JlYXRlRWFzaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUVhc2luZyk7XG5cbnZhciBfdWlVdGlscyA9IHJlcXVpcmUoJ3VpLXV0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8vIFZhbHVlc1xuLypcbiAgICBFYXNpbmcgZnVuY3Rpb25zXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIFxuICAgIEdlbmVyYXRlcyBhbmQgcHJvdmlkZXMgZWFzaW5nIGZ1bmN0aW9ucyBiYXNlZCBvbiBiYXNlRnVuY3Rpb24gZGVmaW5pdGlvbnNcbiAgICBcbiAgICBBIGNhbGwgdG8gZWFzaW5nRnVuY3Rpb24uZ2V0KCdmdW5jdGlvbk5hbWUnKSByZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCBjYW4gYmUgcGFzc2VkOlxuICAgICAgICBAcGFyYW0gW251bWJlcl06IFByb2dyZXNzIDAtMVxuICAgICAgICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogQW1wIG1vZGlmaWVyLCBvbmx5IGFjY2VwdGVkIGluIHNvbWUgZWFzaW5nIGZ1bmN0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5kIGlzIHVzZWQgdG8gYWRqdXN0IG92ZXJhbGwgc3RyZW5ndGhcbiAgICAgICAgQHJldHVybiBbbnVtYmVyXTogRWFzZWQgcHJvZ3Jlc3NcbiAgICAgICAgXG4gICAgV2UgY2FuIGdlbmVyYXRlIG5ldyBmdW5jdGlvbnMgYnkgc2VuZGluZyBhbiBlYXNpbmcgZnVuY3Rpb24gdGhyb3VnaCBlYXNpbmdGdW5jdGlvbi5leHRlbmQobmFtZSwgbWV0aG9kKS5cbiAgICBXaGljaCB3aWxsIG1ha2UgbmFtZUluLCBuYW1lT3V0IGFuZCBuYW1lSW5PdXQgZnVuY3Rpb25zIGF2YWlsYWJsZSB0byB1c2UuXG4gICAgICAgIFxuICAgIEVhc2luZyBmdW5jdGlvbnMgZnJvbSBSb2JlcnQgUGVubmVyXG4gICAgaHR0cDovL3d3dy5yb2JlcnRwZW5uZXIuY29tL2Vhc2luZy9cbiAgICAgICAgXG4gICAgQmV6aWVyIGN1cnZlIGludGVycHJldG9yIGNyZWF0ZWQgZnJvbSBHYcOrdGFuIFJlbmF1ZGVhdSdzIG9yaWdpbmFsIEJlemllckVhc2luZyAgXG4gICAgaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nL2Jsb2IvbWFzdGVyL2luZGV4LmpzICBcbiAgICBodHRwczovL2dpdGh1Yi5jb20vZ3JlL2Jlemllci1lYXNpbmcvYmxvYi9tYXN0ZXIvTElDRU5TRVxuXG4gICAgQW50aWNpcGF0ZSBlYXNpbmcgY3JlYXRlZCBieSBFbGxpb3QgR2lub1xuICAgIGh0dHBzOi8vdHdpdHRlci5jb20vRWxsaW90R2Vub1xuKi9cbi8vIEltcG9ydHNcbnZhciBERUZBVUxUX0JBQ0tfU1RSRU5HVEggPSAxLjUyNTtcbnZhciBERUZBVUxUX1BPV19TVFJFTkdUSCA9IDI7XG5cbi8vIFV0aWxpdHkgZnVuY3Rpb25zXG52YXIgZ2VuZXJhdGVQb3dlckVhc2luZyA9IGZ1bmN0aW9uIChzdHJlbmd0aCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAocHJvZ3Jlc3MsIHN0cmVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBiYXNlRWFzaW5nLmVhc2UocHJvZ3Jlc3MsIHN0cmVuZ3RoKTtcbiAgICB9O1xufTtcblxuLypcbiAgICBFYWNoIG9mIHRoZXNlIGJhc2UgZnVuY3Rpb25zIGlzIGFuIGVhc2VJblxuICAgIFxuICAgIE9uIGluaXQsIHdlIHVzZSAubWlycm9yIGFuZCAucmV2ZXJzZSB0byBnZW5lcmF0ZSBlYXNlSW5PdXQgYW5kXG4gICAgZWFzZU91dCBmdW5jdGlvbnMgcmVzcGVjdGl2ZWx5LlxuKi9cbnZhciBiYXNlRWFzaW5nID0ge1xuICAgIGVhc2U6IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICB2YXIgc3RyZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBERUZBVUxUX1BPV19TVFJFTkdUSCA6IGFyZ3VtZW50c1sxXTtcbiAgICAgICAgcmV0dXJuIE1hdGgucG93KHByb2dyZXNzLCBzdHJlbmd0aCk7XG4gICAgfSxcbiAgICBjaXJjOiBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgcmV0dXJuIDEgLSBNYXRoLnNpbihNYXRoLmFjb3MocHJvZ3Jlc3MpKTtcbiAgICB9LFxuICAgIGJhY2s6IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICB2YXIgc3RyZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBERUZBVUxUX0JBQ0tfU1RSRU5HVEggOiBhcmd1bWVudHNbMV07XG4gICAgICAgIHJldHVybiBwcm9ncmVzcyAqIHByb2dyZXNzICogKChzdHJlbmd0aCArIDEpICogcHJvZ3Jlc3MgLSBzdHJlbmd0aCk7XG4gICAgfVxufTtcblxuWydjdWJpYycsICdxdWFydCcsICdxdWludCddLmZvckVhY2goZnVuY3Rpb24gKGVhc2luZ05hbWUsIGkpIHtcbiAgICBiYXNlRWFzaW5nW2Vhc2luZ05hbWVdID0gZ2VuZXJhdGVQb3dlckVhc2luZyhpICsgMyk7XG59KTtcblxuLy8gR2VuZXJhdGUgaW4vb3V0L2luT3V0IHZhcmlhdGlvbnNcbigwLCBfdWlVdGlscy5lYWNoKShiYXNlRWFzaW5nLCBmdW5jdGlvbiAoYmFzZUVhc2UsIGtleSkge1xuICAgIHZhciBlYXNpbmdGdW5jdGlvbiA9ICgwLCBfY3JlYXRlRWFzaW5nMi5kZWZhdWx0KShiYXNlRWFzZSk7XG4gICAgYmFzZUVhc2luZ1trZXkgKyAnSW4nXSA9IGVhc2luZ0Z1bmN0aW9uLmluO1xuICAgIGJhc2VFYXNpbmdba2V5ICsgJ091dCddID0gZWFzaW5nRnVuY3Rpb24ub3V0O1xuICAgIGJhc2VFYXNpbmdba2V5ICsgJ0luT3V0J10gPSBlYXNpbmdGdW5jdGlvbi5pbk91dDtcbn0pO1xuXG5iYXNlRWFzaW5nLmxpbmVhciA9IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgIHJldHVybiBwcm9ncmVzcztcbn07XG5iYXNlRWFzaW5nLmFudGljaXBhdGUgPSBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICB2YXIgc3RyZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBERUZBVUxUX0JBQ0tfU1RSRU5HVEggOiBhcmd1bWVudHNbMV07XG4gICAgcmV0dXJuIChwcm9ncmVzcyAqPSAyKSA8IDEgPyAwLjUgKiBiYXNlRWFzaW5nLmJhY2tJbihwcm9ncmVzcywgc3RyZW5ndGgpIDogMC41ICogKDIgLSBNYXRoLnBvdygyLCAtMTAgKiAocHJvZ3Jlc3MgLSAxKSkpO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gYmFzZUVhc2luZztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbkJ5WlhObGRDMWxZWE5wYm1jdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPMEZCT0VKQkxFbEJRVTBzY1VKQlFYRkNMRWRCUVVjc1MwRkJTeXhEUVVGRE8wRkJRM0JETEVsQlFVMHNiMEpCUVc5Q0xFZEJRVWNzUTBGQlF6czdPMEZCUVVNc1FVRkhMMElzU1VGQlRTeHRRa0ZCYlVJc1IwRkJSeXhWUVVGQkxGRkJRVkU3VjBGQlNTeFZRVUZETEZGQlFWRXNSVUZCUlN4UlFVRlJPMlZCUVVzc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVWQlFVVXNVVUZCVVN4RFFVRkRPMHRCUVVFN1EwRkJRVHM3T3pzN096czdRVUZCUXl4QlFWRndSeXhKUVVGSkxGVkJRVlVzUjBGQlJ6dEJRVU5pTEZGQlFVa3NSVUZCUlN4VlFVRkRMRkZCUVZFN1dVRkJSU3hSUVVGUkxIbEVRVUZITEc5Q1FVRnZRanQzUWtGQlN5eFJRVUZSTEVWQlFVa3NVVUZCVVR0TFFVRkJPMEZCUTNwRkxGRkJRVWtzUlVGQlJTeFZRVUZCTEZGQlFWRTdaVUZCU1N4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRE8wdEJRVUU3UVVGRGJrUXNVVUZCU1N4RlFVRkZMRlZCUVVNc1VVRkJVVHRaUVVGRkxGRkJRVkVzZVVSQlFVY3NjVUpCUVhGQ08yVkJRVXNzUVVGQlF5eFJRVUZSTEVkQlFVY3NVVUZCVVN4SlFVRkxMRU5CUVVNc1VVRkJVU3hIUVVGSExFTkJRVU1zUTBGQlFTeEhRVUZKTEZGQlFWRXNSMEZCUnl4UlFVRlJMRU5CUVVFc1FVRkJRenRMUVVGQk8wTkJRM1pJTEVOQlFVTTdPMEZCUlVZc1EwRkJReXhQUVVGUExFVkJRVVVzVDBGQlR5eEZRVUZGTEU5QlFVOHNRMEZCUXl4RFFVRkRMRTlCUVU4c1EwRkJReXhWUVVGVkxGVkJRVlVzUlVGQlJTeERRVUZETEVWQlFVVTdRVUZEZWtRc1kwRkJWU3hEUVVGRExGVkJRVlVzUTBGQlF5eEhRVUZITEcxQ1FVRnRRaXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0RFFVTjJSQ3hEUVVGRE96czdRVUZCUXl4QlFVZElMR0ZCTVVKVExFbEJRVWtzUlVFd1FsSXNWVUZCVlN4RlFVRkZMRlZCUVVNc1VVRkJVU3hGUVVGRkxFZEJRVWNzUlVGQlN6dEJRVU5vUXl4UlFVRkpMR05CUVdNc1IwRkJSeXcwUWtGQllTeFJRVUZSTEVOQlFVTXNRMEZCUXp0QlFVTTFReXhqUVVGVkxFTkJRVWtzUjBGQlJ5eFJRVUZMTEVkQlFVY3NZMEZCWXl4RFFVRkRMRVZCUVVVc1EwRkJRenRCUVVNelF5eGpRVUZWTEVOQlFVa3NSMEZCUnl4VFFVRk5MRWRCUVVjc1kwRkJZeXhEUVVGRExFZEJRVWNzUTBGQlF6dEJRVU0zUXl4alFVRlZMRU5CUVVrc1IwRkJSeXhYUVVGUkxFZEJRVWNzWTBGQll5eERRVUZETEV0QlFVc3NRMEZCUXp0RFFVTndSQ3hEUVVGRExFTkJRVU03TzBGQlJVZ3NWVUZCVlN4RFFVRkRMRTFCUVUwc1IwRkJSeXhWUVVGQkxGRkJRVkU3VjBGQlNTeFJRVUZSTzBOQlFVRXNRMEZCUXp0QlFVTjZReXhWUVVGVkxFTkJRVU1zVlVGQlZTeEhRVUZITEZWQlFVTXNVVUZCVVR0UlFVRkZMRkZCUVZFc2VVUkJRVWNzY1VKQlFYRkNPMWRCUXk5RUxFRkJRVU1zUTBGQlF5eFJRVUZSTEVsQlFVVXNRMEZCUXl4RFFVRkJMRWRCUVVrc1EwRkJReXhIUVVGSkxFZEJRVWNzUjBGQlJ5eFZRVUZWTEVOQlFVTXNUVUZCVFN4RFFVRkRMRkZCUVZFc1JVRkJSU3hSUVVGUkxFTkJRVU1zUjBGQlNTeEhRVUZITEVsQlFVa3NRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4SlFVRkpMRkZCUVZFc1IwRkJSeXhEUVVGRExFTkJRVUVzUVVGQlF5eERRVUZETEVOQlFVRXNRVUZCUXp0RFFVRkJMRU5CUVVNN08ydENRVVY0Unl4VlFVRlZJaXdpWm1sc1pTSTZJbkJ5WlhObGRDMWxZWE5wYm1jdWFuTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUl2S2x4dUlDQWdJRVZoYzJsdVp5Qm1kVzVqZEdsdmJuTmNiaUFnSUNBdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRYRzRnSUNBZ1hHNGdJQ0FnUjJWdVpYSmhkR1Z6SUdGdVpDQndjbTkyYVdSbGN5QmxZWE5wYm1jZ1puVnVZM1JwYjI1eklHSmhjMlZrSUc5dUlHSmhjMlZHZFc1amRHbHZiaUJrWldacGJtbDBhVzl1YzF4dUlDQWdJRnh1SUNBZ0lFRWdZMkZzYkNCMGJ5QmxZWE5wYm1kR2RXNWpkR2x2Ymk1blpYUW9KMloxYm1OMGFXOXVUbUZ0WlNjcElISmxkSFZ5Ym5NZ1lTQm1kVzVqZEdsdmJpQjBhR0YwSUdOaGJpQmlaU0J3WVhOelpXUTZYRzRnSUNBZ0lDQWdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dVSEp2WjNKbGMzTWdNQzB4WEc0Z0lDQWdJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYU0FvYjNCMGFXOXVZV3dwT2lCQmJYQWdiVzlrYVdacFpYSXNJRzl1YkhrZ1lXTmpaWEIwWldRZ2FXNGdjMjl0WlNCbFlYTnBibWNnWm5WdVkzUnBiMjV6WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCaGJtUWdhWE1nZFhObFpDQjBieUJoWkdwMWMzUWdiM1psY21Gc2JDQnpkSEpsYm1kMGFGeHVJQ0FnSUNBZ0lDQkFjbVYwZFhKdUlGdHVkVzFpWlhKZE9pQkZZWE5sWkNCd2NtOW5jbVZ6YzF4dUlDQWdJQ0FnSUNCY2JpQWdJQ0JYWlNCallXNGdaMlZ1WlhKaGRHVWdibVYzSUdaMWJtTjBhVzl1Y3lCaWVTQnpaVzVrYVc1bklHRnVJR1ZoYzJsdVp5Qm1kVzVqZEdsdmJpQjBhSEp2ZFdkb0lHVmhjMmx1WjBaMWJtTjBhVzl1TG1WNGRHVnVaQ2h1WVcxbExDQnRaWFJvYjJRcExseHVJQ0FnSUZkb2FXTm9JSGRwYkd3Z2JXRnJaU0J1WVcxbFNXNHNJRzVoYldWUGRYUWdZVzVrSUc1aGJXVkpiazkxZENCbWRXNWpkR2x2Ym5NZ1lYWmhhV3hoWW14bElIUnZJSFZ6WlM1Y2JpQWdJQ0FnSUNBZ1hHNGdJQ0FnUldGemFXNW5JR1oxYm1OMGFXOXVjeUJtY205dElGSnZZbVZ5ZENCUVpXNXVaWEpjYmlBZ0lDQm9kSFJ3T2k4dmQzZDNMbkp2WW1WeWRIQmxibTVsY2k1amIyMHZaV0Z6YVc1bkwxeHVJQ0FnSUNBZ0lDQmNiaUFnSUNCQ1pYcHBaWElnWTNWeWRtVWdhVzUwWlhKd2NtVjBiM0lnWTNKbFlYUmxaQ0JtY205dElFZGh3NnQwWVc0Z1VtVnVZWFZrWldGMUozTWdiM0pwWjJsdVlXd2dRbVY2YVdWeVJXRnphVzVuSUNCY2JpQWdJQ0JvZEhSd2N6b3ZMMmRwZEdoMVlpNWpiMjB2WjNKbEwySmxlbWxsY2kxbFlYTnBibWN2WW14dllpOXRZWE4wWlhJdmFXNWtaWGd1YW5NZ0lGeHVJQ0FnSUdoMGRIQnpPaTh2WjJsMGFIVmlMbU52YlM5bmNtVXZZbVY2YVdWeUxXVmhjMmx1Wnk5aWJHOWlMMjFoYzNSbGNpOU1TVU5GVGxORlhHNWNiaUFnSUNCQmJuUnBZMmx3WVhSbElHVmhjMmx1WnlCamNtVmhkR1ZrSUdKNUlFVnNiR2x2ZENCSGFXNXZYRzRnSUNBZ2FIUjBjSE02THk5MGQybDBkR1Z5TG1OdmJTOUZiR3hwYjNSSFpXNXZYRzRxTDF4dUx5OGdTVzF3YjNKMGMxeHVhVzF3YjNKMElHTnlaV0YwWlVWaGMybHVaeUJtY205dElDY3VMMk55WldGMFpTMWxZWE5wYm1jbk8xeHVhVzF3YjNKMElIc2daV0ZqYUNCOUlHWnliMjBnSjNWcExYVjBhV3h6Snp0Y2JseHVMeThnVm1Gc2RXVnpYRzVqYjI1emRDQkVSVVpCVlV4VVgwSkJRMHRmVTFSU1JVNUhWRWdnUFNBeExqVXlOVHRjYm1OdmJuTjBJRVJGUmtGVlRGUmZVRTlYWDFOVVVrVk9SMVJJSUQwZ01qdGNibHh1THk4Z1ZYUnBiR2wwZVNCbWRXNWpkR2x2Ym5OY2JtTnZibk4wSUdkbGJtVnlZWFJsVUc5M1pYSkZZWE5wYm1jZ1BTQnpkSEpsYm1kMGFDQTlQaUFvY0hKdlozSmxjM01zSUhOMGNtVnVaM1JvS1NBOVBpQmlZWE5sUldGemFXNW5MbVZoYzJVb2NISnZaM0psYzNNc0lITjBjbVZ1WjNSb0tUdGNibHh1THlwY2JpQWdJQ0JGWVdOb0lHOW1JSFJvWlhObElHSmhjMlVnWm5WdVkzUnBiMjV6SUdseklHRnVJR1ZoYzJWSmJseHVJQ0FnSUZ4dUlDQWdJRTl1SUdsdWFYUXNJSGRsSUhWelpTQXViV2x5Y205eUlHRnVaQ0F1Y21WMlpYSnpaU0IwYnlCblpXNWxjbUYwWlNCbFlYTmxTVzVQZFhRZ1lXNWtYRzRnSUNBZ1pXRnpaVTkxZENCbWRXNWpkR2x2Ym5NZ2NtVnpjR1ZqZEdsMlpXeDVMbHh1S2k5Y2JteGxkQ0JpWVhObFJXRnphVzVuSUQwZ2UxeHVJQ0FnSUdWaGMyVTZJQ2h3Y205bmNtVnpjeXdnYzNSeVpXNW5kR2dnUFNCRVJVWkJWVXhVWDFCUFYxOVRWRkpGVGtkVVNDa2dQVDRnY0hKdlozSmxjM01nS2lvZ2MzUnlaVzVuZEdnc1hHNGdJQ0FnWTJseVl6b2djSEp2WjNKbGMzTWdQVDRnTVNBdElFMWhkR2d1YzJsdUtFMWhkR2d1WVdOdmN5aHdjbTluY21WemN5a3BMRnh1SUNBZ0lHSmhZMnM2SUNod2NtOW5jbVZ6Y3l3Z2MzUnlaVzVuZEdnZ1BTQkVSVVpCVlV4VVgwSkJRMHRmVTFSU1JVNUhWRWdwSUQwK0lDaHdjbTluY21WemN5QXFJSEJ5YjJkeVpYTnpLU0FxSUNnb2MzUnlaVzVuZEdnZ0t5QXhLU0FxSUhCeWIyZHlaWE56SUMwZ2MzUnlaVzVuZEdncFhHNTlPMXh1WEc1YkoyTjFZbWxqSnl3Z0ozRjFZWEowSnl3Z0ozRjFhVzUwSjEwdVptOXlSV0ZqYUNobWRXNWpkR2x2YmlBb1pXRnphVzVuVG1GdFpTd2dhU2tnZTF4dUlDQWdJR0poYzJWRllYTnBibWRiWldGemFXNW5UbUZ0WlYwZ1BTQm5aVzVsY21GMFpWQnZkMlZ5UldGemFXNW5LR2tnS3lBektUdGNibjBwTzF4dVhHNHZMeUJIWlc1bGNtRjBaU0JwYmk5dmRYUXZhVzVQZFhRZ2RtRnlhV0YwYVc5dWMxeHVaV0ZqYUNoaVlYTmxSV0Z6YVc1bkxDQW9ZbUZ6WlVWaGMyVXNJR3RsZVNrZ1BUNGdlMXh1SUNBZ0lHeGxkQ0JsWVhOcGJtZEdkVzVqZEdsdmJpQTlJR055WldGMFpVVmhjMmx1WnloaVlYTmxSV0Z6WlNrN1hHNGdJQ0FnWW1GelpVVmhjMmx1WjF0Z0pIdHJaWGw5U1c1Z1hTQTlJR1ZoYzJsdVowWjFibU4wYVc5dUxtbHVPMXh1SUNBZ0lHSmhjMlZGWVhOcGJtZGJZQ1I3YTJWNWZVOTFkR0JkSUQwZ1pXRnphVzVuUm5WdVkzUnBiMjR1YjNWME8xeHVJQ0FnSUdKaGMyVkZZWE5wYm1kYllDUjdhMlY1ZlVsdVQzVjBZRjBnUFNCbFlYTnBibWRHZFc1amRHbHZiaTVwYms5MWREdGNibjBwTzF4dVhHNWlZWE5sUldGemFXNW5MbXhwYm1WaGNpQTlJSEJ5YjJkeVpYTnpJRDArSUhCeWIyZHlaWE56TzF4dVltRnpaVVZoYzJsdVp5NWhiblJwWTJsd1lYUmxJRDBnS0hCeWIyZHlaWE56TENCemRISmxibWQwYUNBOUlFUkZSa0ZWVEZSZlFrRkRTMTlUVkZKRlRrZFVTQ2tnUFQ1Y2JpQWdJQ0FvS0hCeWIyZHlaWE56S2oweUtTQThJREVwSUQ4Z01DNDFJQ29nWW1GelpVVmhjMmx1Wnk1aVlXTnJTVzRvY0hKdlozSmxjM01zSUhOMGNtVnVaM1JvS1NBNklDQXdMalVnS2lBb01pQXRJRTFoZEdndWNHOTNLRElzSUMweE1DQXFJQ2h3Y205bmNtVnpjeUF0SURFcEtTazdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJR0poYzJWRllYTnBibWM3SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy90d2Vlbi9wcmVzZXQtZWFzaW5nLmpzXG4gKiogbW9kdWxlIGlkID0gN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy50b0RlY2ltYWwgPSBleHBvcnRzLnNwbGl0VmFsdWVVbml0ID0gZXhwb3J0cy5pc1N0cmluZyA9IGV4cG9ydHMuaXNSZWxhdGl2ZVZhbHVlID0gZXhwb3J0cy5pc09iaiA9IGV4cG9ydHMuaXNOdW0gPSBleHBvcnRzLmlzRnVuYyA9IGV4cG9ydHMuaXNBcnJheSA9IGV4cG9ydHMuaGFzUHJvcGVydHkgPSBleHBvcnRzLmhhc0NoYW5nZWQgPSBleHBvcnRzLmVhY2ggPSBleHBvcnRzLmN1cnJlbnRUaW1lID0gZXhwb3J0cy5jcmVhdGVCdWZmZXIgPSBleHBvcnRzLmNhbWVsVG9EYXNoID0gdW5kZWZpbmVkO1xuXG52YXIgX2J1ZmZlck1ldGhvZHMgPSByZXF1aXJlKCcuL2luYy9idWZmZXItbWV0aG9kcycpO1xuXG52YXIgQ0FNRUxfQ0FTRV9QQVRURVJOID0gLyhbYS16XSkoW0EtWl0pL2c7XG52YXIgUkVQTEFDRV9URU1QTEFURSA9ICckMS0kMic7XG52YXIgSEFTX1BFUkZPUk1BTkNFX05PVyA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCcgJiYgcGVyZm9ybWFuY2Uubm93O1xuXG4vKlxuICAgIEdldCB2YXIgdHlwZSBhcyBzdHJpbmdcbiAgICBcbiAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtzdHJpbmddOiBSZXR1cm5zLCBmb3IgaW5zdGFuY2UgJ09iamVjdCcgaWYgW29iamVjdCBPYmplY3RdXG4qL1xudmFyIHZhclR5cGUgPSBmdW5jdGlvbiAodmFyaWFibGUpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhcmlhYmxlKS5zbGljZSg4LCAtMSk7XG59O1xuXG4vKlxuICAgIENvbnZlcnQgY2FtZWxDYXNlIHRvIGRhc2gtY2FzZVxuXG4gICAgQHBhcmFtIFtzdHJpbmddXG4gICAgQHJldHVybiBbc3RyaW5nXVxuKi9cbnZhciBjYW1lbFRvRGFzaCA9IGV4cG9ydHMuY2FtZWxUb0Rhc2ggPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKENBTUVMX0NBU0VfUEFUVEVSTiwgUkVQTEFDRV9URU1QTEFURSkudG9Mb3dlckNhc2UoKTtcbn07XG5cbi8qXG4gICAgQ3JlYXRlIGFuIGF1dG8tY3VsbGluZyBidWZmZXIgYXJyYXlcblxuICAgIEBwYXJhbSBbYXJyYXldXG4gICAgQHBhcmFtIFtpbnRdXG4gICAgQHJldHVybiBbYXJyYXldXG4qL1xudmFyIGNyZWF0ZUJ1ZmZlciA9IGV4cG9ydHMuY3JlYXRlQnVmZmVyID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBtYXhTaXplID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8gMyA6IGFyZ3VtZW50c1swXTtcbiAgICB2YXIgYXJyYXkgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBbXSA6IGFyZ3VtZW50c1sxXTtcblxuICAgIGFycmF5LnB1c2ggPSBfYnVmZmVyTWV0aG9kcy5wdXNoO1xuICAgIGFycmF5Ll9tYXhTaXplID0gbWF4U2l6ZSB8fCAwO1xuXG4gICAgcmV0dXJuIGFycmF5O1xufTtcblxuLypcbiAgICBHZW5lcmF0ZSBjdXJyZW50IHRpbWVzdGFtcFxuICAgIFxuICAgIEByZXR1cm4gW3RpbWVzdGFtcF06IEN1cnJlbnQgVU5JWCB0aW1lc3RhbXBcbiovXG52YXIgY3VycmVudFRpbWUgPSBleHBvcnRzLmN1cnJlbnRUaW1lID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBIQVNfUEVSRk9STUFOQ0VfTk9XID8gcGVyZm9ybWFuY2Uubm93KCkgOiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbn07XG5cbi8qXG4gICAgSXRlcmF0ZSBvdmVyIGFuIG9iamVjdCBhbmQgZmlyZSBhIGNhbGxiYWNrIGZvciBldmVyeSBpdGVtIGluIGl0XG5cbiAgICBAcGFyYW0gW29iamVjdF06IE9iamVjdCB0byBpdGVyYXRlIG92ZXJcbiAgICBAcGFyYW0gW2Z1bmN0aW9uXTogQ2FsbGJhY2sgdG8gZmlyZVxuKi9cbnZhciBlYWNoID0gZXhwb3J0cy5lYWNoID0gZnVuY3Rpb24gKG9iamVjdCwgY2FsbGJhY2spIHtcbiAgICB2YXIga2V5cyA9IG9iamVjdCA/IE9iamVjdC5rZXlzKG9iamVjdCkgOiBbXTtcbiAgICB2YXIgbnVtS2V5cyA9IGtleXMubGVuZ3RoO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1LZXlzOyBpKyspIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgICAgIHZhciBwcm9wID0gb2JqZWN0W2tleV07XG5cbiAgICAgICAgY2FsbGJhY2socHJvcCwga2V5LCBvYmplY3QpO1xuICAgIH1cbn07XG5cbi8qXG4gICAgQ2hlY2sgaWYgdHdvIG9iamVjdHMgaGF2ZSBjaGFuZ2VkIGZyb20gZWFjaCBvdGhlclxuICAgIFxuICAgIEBwYXJhbSBbb2JqZWN0XTogSW5wdXQgQVxuICAgIEBwYXJhbSBbb2JqZWN0XTogSW5wdXQgQlxuICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBUcnVlIGlmIGRpZmZlcmVudFxuKi9cbnZhciBoYXNDaGFuZ2VkID0gZXhwb3J0cy5oYXNDaGFuZ2VkID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICB2YXIgY2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgZWFjaChhLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICBpZiAoaGFzUHJvcGVydHkoYiwga2V5KSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSBiW2tleV0pIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY2hhbmdlZDtcbn07XG5cbi8qXG4gICAgQ2hlY2sgaWYgb2JqZWN0IGhhcyBwcm9wZXJ0eSBhbmQgaXQgaXNuJ3QgdW5kZWZpbmVkXG5cbiAgICBAcGFyYW0gW29iamVjdF1cbiAgICBAcGFyYW0gW3N0cmluZ11cbiAgICBAcmV0dXJuIFtib29sZWFuXVxuKi9cbnZhciBoYXNQcm9wZXJ0eSA9IGV4cG9ydHMuaGFzUHJvcGVydHkgPSBmdW5jdGlvbiAob2JqZWN0LCBwcm9wZXJ0eU5hbWUpIHtcbiAgICByZXR1cm4gb2JqZWN0Lmhhc093blByb3BlcnR5KHByb3BlcnR5TmFtZSkgJiYgb2JqZWN0W3Byb3BlcnR5TmFtZV0gIT09IHVuZGVmaW5lZDtcbn07XG5cbi8qXG4gICAgSXMgdXRpbHMgdmFyIGFuIGFycmF5ID8gXG4gICAgXG4gICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB1dGlscy52YXJUeXBlID09PSAnQXJyYXknXG4qL1xudmFyIGlzQXJyYXkgPSBleHBvcnRzLmlzQXJyYXkgPSBmdW5jdGlvbiAoYXJyKSB7XG4gICAgcmV0dXJuIHZhclR5cGUoYXJyKSA9PT0gJ0FycmF5Jztcbn07XG5cbi8qXG4gICAgSXMgdXRpbHMgdmFyIGEgZnVuY3Rpb24gPyBcbiAgICBcbiAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHV0aWxzLnZhclR5cGUgPT09ICdGdW5jdGlvbidcbiovXG52YXIgaXNGdW5jID0gZXhwb3J0cy5pc0Z1bmMgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIHZhclR5cGUob2JqKSA9PT0gJ0Z1bmN0aW9uJztcbn07XG5cbi8qXG4gICAgSXMgdXRpbHMgdmFyIGEgbnVtYmVyP1xuICAgIFxuICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mID09PSAnbnVtYmVyJ1xuKi9cbnZhciBpc051bSA9IGV4cG9ydHMuaXNOdW0gPSBmdW5jdGlvbiAobnVtKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBudW0gPT09ICdudW1iZXInO1xufTtcblxuLypcbiAgICBJcyB1dGlscyB2YXIgYW4gb2JqZWN0P1xuICAgIFxuICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mID09PSAnb2JqZWN0J1xuKi9cbnZhciBpc09iaiA9IGV4cG9ydHMuaXNPYmogPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdvYmplY3QnO1xufTtcblxuLypcbiAgICBJcyB1dGlscyBhIHJlbGF0aXZlIHZhbHVlIGFzc2lnbm1lbnQ/XG4gICAgXG4gICAgQHBhcmFtIFtzdHJpbmddOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgQHJldHVybiBbYm9vbGVhbl06IElmIHV0aWxzIGxvb2tzIGxpa2UgYSByZWxhdGl2ZSB2YWx1ZSBhc3NpZ25tZW50XG4qL1xudmFyIGlzUmVsYXRpdmVWYWx1ZSA9IGV4cG9ydHMuaXNSZWxhdGl2ZVZhbHVlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICYmIHZhbHVlLmluZGV4T2YgJiYgdmFsdWUuaW5kZXhPZignPScpID4gMCA/IHRydWUgOiBmYWxzZTtcbn07XG5cbi8qXG4gICAgSXMgdXRpbHMgdmFyIGEgc3RyaW5nID8gXG4gICAgXG4gICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJ1xuKi9cbnZhciBpc1N0cmluZyA9IGV4cG9ydHMuaXNTdHJpbmcgPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnO1xufTtcblxuLypcbiAgICBTcGxpdCBhIHZhbHVlIGludG8gYSB2YWx1ZS91bml0IG9iamVjdFxuICAgIFxuICAgICAgICBcIjIwMHB4XCIgLT4geyB2YWx1ZTogMjAwLCB1bml0OiBcInB4XCIgfVxuICAgICAgICBcbiAgICBAcGFyYW0gW3N0cmluZ106IFZhbHVlIHRvIHNwbGl0XG4gICAgQHJldHVybiBbb2JqZWN0XTogT2JqZWN0IHdpdGggdmFsdWUgYW5kIHVuaXQgcHJvcHNcbiovXG52YXIgc3BsaXRWYWx1ZVVuaXQgPSBleHBvcnRzLnNwbGl0VmFsdWVVbml0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgdmFyIHNwbGl0VmFsID0gdmFsdWUubWF0Y2goLygtP1xcZCpcXC4/XFxkKikoLiopLyk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB2YWx1ZTogcGFyc2VGbG9hdChzcGxpdFZhbFsxXSksXG4gICAgICAgIHVuaXQ6IHNwbGl0VmFsWzJdXG4gICAgfTtcbn07XG5cbnZhciB0b0RlY2ltYWwgPSBleHBvcnRzLnRvRGVjaW1hbCA9IGZ1bmN0aW9uIChudW0pIHtcbiAgICB2YXIgcHJlY2lzaW9uID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gMiA6IGFyZ3VtZW50c1sxXTtcblxuICAgIHByZWNpc2lvbiA9IE1hdGgucG93KDEwLCBwcmVjaXNpb24pO1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG51bSAqIHByZWNpc2lvbikgLyBwcmVjaXNpb247XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMM055WXk5bGJuUnllUzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPMEZCUlVFc1NVRkJUU3hyUWtGQmEwSXNSMEZCUnl4cFFrRkJhVUlzUTBGQlF6dEJRVU0zUXl4SlFVRk5MR2RDUVVGblFpeEhRVUZITEU5QlFVOHNRMEZCUXp0QlFVTnFReXhKUVVGTkxHMUNRVUZ0UWl4SFFVRkpMRTlCUVU4c1YwRkJWeXhMUVVGTExGZEJRVmNzU1VGQlNTeFhRVUZYTEVOQlFVTXNSMEZCUnl4QlFVRkRPenM3T3pzN096dEJRVUZETEVGQlVYQkdMRWxCUVUwc1QwRkJUeXhIUVVGSExGVkJRVUVzVVVGQlVUdFhRVUZKTEUxQlFVMHNRMEZCUXl4VFFVRlRMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzBOQlFVRTdPenM3T3pzN08wRkJRVU1zUVVGUk0wVXNTVUZCVFN4WFFVRlhMRmRCUVZnc1YwRkJWeXhIUVVGSExGVkJRVU1zVFVGQlRUdFhRVUZMTEUxQlFVMHNRMEZCUXl4UFFVRlBMRU5CUVVNc2EwSkJRV3RDTEVWQlFVVXNaMEpCUVdkQ0xFTkJRVU1zUTBGQlF5eFhRVUZYTEVWQlFVVTdRMEZCUVRzN096czdPenM3TzBGQlFVTXNRVUZUYmtjc1NVRkJUU3haUVVGWkxGZEJRVm9zV1VGQldTeEhRVUZITEZsQlFUWkNPMUZCUVRWQ0xFOUJRVThzZVVSQlFVY3NRMEZCUXp0UlFVRkZMRXRCUVVzc2VVUkJRVWNzUlVGQlJUczdRVUZEYUVRc1UwRkJTeXhEUVVGRExFbEJRVWtzYTBKQk9VSk1MRWxCUVVrc1FVRTRRbEVzUTBGQlF6dEJRVU5zUWl4VFFVRkxMRU5CUVVNc1VVRkJVU3hIUVVGSExFOUJRVThzU1VGQlNTeERRVUZETEVOQlFVTTdPMEZCUlRsQ0xGZEJRVThzUzBGQlN5eERRVUZETzBOQlEyaENPenM3T3pzN08wRkJRVUVzUVVGUFRTeEpRVUZOTEZkQlFWY3NWMEZCV0N4WFFVRlhMRWRCUVVjN1YwRkJUU3h0UWtGQmJVSXNSMEZCUnl4WFFVRlhMRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzU1VGQlNTeEpRVUZKTEVWQlFVVXNRMEZCUXl4UFFVRlBMRVZCUVVVN1EwRkJRVHM3T3pzN096czdRVUZCUXl4QlFWRjZSaXhKUVVGTkxFbEJRVWtzVjBGQlNpeEpRVUZKTEVkQlFVY3NWVUZCUXl4TlFVRk5MRVZCUVVVc1VVRkJVU3hGUVVGTE8wRkJRM1JETEZGQlFVMHNTVUZCU1N4SFFVRkhMRTFCUVUwc1IwRkJSeXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJRenRCUVVNdlF5eFJRVUZOTEU5QlFVOHNSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRE96dEJRVVUxUWl4VFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NUMEZCVHl4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8wRkJRemxDTEZsQlFVMHNSMEZCUnl4SFFVRkhMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dEJRVU53UWl4WlFVRk5MRWxCUVVrc1IwRkJSeXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdPMEZCUlhwQ0xHZENRVUZSTEVOQlFVTXNTVUZCU1N4RlFVRkZMRWRCUVVjc1JVRkJSU3hOUVVGTkxFTkJRVU1zUTBGQlF6dExRVU12UWp0RFFVTktPenM3T3pzN096czdRVUZCUXl4QlFWTkxMRWxCUVUwc1ZVRkJWU3hYUVVGV0xGVkJRVlVzUjBGQlJ5eFZRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVzN1FVRkRhRU1zVVVGQlNTeFBRVUZQTEVkQlFVY3NTMEZCU3l4RFFVRkRPenRCUVVWd1FpeFJRVUZKTEVOQlFVTXNRMEZCUXl4RlFVRkZMRlZCUVVNc1MwRkJTeXhGUVVGRkxFZEJRVWNzUlVGQlN6dEJRVU53UWl4WlFVRkpMRmRCUVZjc1EwRkJReXhEUVVGRExFVkJRVVVzUjBGQlJ5eERRVUZETEVWQlFVVTdRVUZEY2tJc1owSkJRVWtzUzBGQlN5eExRVUZMTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSVHRCUVVOc1FpeDFRa0ZCVHl4SFFVRkhMRWxCUVVrc1EwRkJRenRoUVVOc1FqdFRRVU5LTEUxQlFVMDdRVUZEU0N4dFFrRkJUeXhIUVVGSExFbEJRVWtzUTBGQlF6dFRRVU5zUWp0TFFVTktMRU5CUVVNc1EwRkJRenM3UVVGRlNDeFhRVUZQTEU5QlFVOHNRMEZCUXp0RFFVTnNRanM3T3pzN096czdPMEZCUVVNc1FVRlRTeXhKUVVGTkxGZEJRVmNzVjBGQldDeFhRVUZYTEVkQlFVY3NWVUZCUXl4TlFVRk5MRVZCUVVVc1dVRkJXVHRYUVVGTExFMUJRVTBzUTBGQlF5eGpRVUZqTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWxCUVVrc1RVRkJUU3hEUVVGRExGbEJRVmtzUTBGQlF5eExRVUZMTEZOQlFWTTdRMEZCUVRzN096czdPenM3UVVGQlF5eEJRVkY0U0N4SlFVRk5MRTlCUVU4c1YwRkJVQ3hQUVVGUExFZEJRVWNzVlVGQlF5eEhRVUZITzFkQlFVc3NUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFOUJRVTg3UTBGQlFUczdPenM3T3pzN1FVRkJReXhCUVZGc1JDeEpRVUZOTEUxQlFVMHNWMEZCVGl4TlFVRk5MRWRCUVVjc1ZVRkJReXhIUVVGSE8xZEJRVXNzVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRlZCUVZVN1EwRkJRVHM3T3pzN096czdRVUZCUXl4QlFWRndSQ3hKUVVGTkxFdEJRVXNzVjBGQlRDeExRVUZMTEVkQlFVY3NWVUZCUXl4SFFVRkhPMWRCUVVzc1QwRkJUeXhIUVVGSExFdEJRVXNzVVVGQlVUdERRVUZCT3pzN096czdPenRCUVVGRExFRkJVUzlETEVsQlFVMHNTMEZCU3l4WFFVRk1MRXRCUVVzc1IwRkJSeXhWUVVGRExFZEJRVWM3VjBGQlN5eFBRVUZQTEVkQlFVY3NTMEZCU3l4UlFVRlJPME5CUVVFN096czdPenM3TzBGQlFVTXNRVUZSTDBNc1NVRkJUU3hsUVVGbExGZEJRV1lzWlVGQlpTeEhRVUZITEZWQlFVTXNTMEZCU3p0WFFVRkxMRUZCUVVNc1MwRkJTeXhKUVVGSkxFdEJRVXNzUTBGQlF5eFBRVUZQTEVsQlFVa3NTMEZCU3l4RFFVRkRMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVa3NTVUZCU1N4SFFVRkhMRXRCUVVzN1EwRkJRVHM3T3pzN096czdRVUZCUXl4QlFWRnlSeXhKUVVGTkxGRkJRVkVzVjBGQlVpeFJRVUZSTEVkQlFVY3NWVUZCUXl4SFFVRkhPMWRCUVVzc1QwRkJUeXhIUVVGSExFdEJRVXNzVVVGQlVUdERRVUZCT3pzN096czdPenM3TzBGQlFVTXNRVUZWYkVRc1NVRkJUU3hqUVVGakxGZEJRV1FzWTBGQll5eEhRVUZITEZWQlFVTXNTMEZCU3l4RlFVRkxPMEZCUTNKRExGRkJRVTBzVVVGQlVTeEhRVUZITEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVNc2JVSkJRVzFDTEVOQlFVTXNRMEZCUXpzN1FVRkZiRVFzVjBGQlR6dEJRVU5JTEdGQlFVc3NSVUZCUlN4VlFVRlZMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBGQlF6bENMRmxCUVVrc1JVRkJSeXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETzB0QlEzSkNMRU5CUVVNN1EwRkRUQ3hEUVVGRE96dEJRVVZMTEVsQlFVMHNVMEZCVXl4WFFVRlVMRk5CUVZNc1IwRkJSeXhWUVVGRExFZEJRVWNzUlVGQmIwSTdVVUZCYkVJc1UwRkJVeXg1UkVGQlJ5eERRVUZET3p0QlFVTjRReXhoUVVGVExGbEJRVWNzUlVGQlJTeEZRVUZKTEZOQlFWTXNRMEZCUVN4RFFVRkRPMEZCUXpWQ0xGZEJRVThzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRWRCUVVjc1UwRkJVeXhEUVVGRExFZEJRVWNzVTBGQlV5eERRVUZETzBOQlEyeEVMRU5CUVVNaUxDSm1hV3hsSWpvaVpXNTBjbmt1YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2V5QndkWE5vSUgwZ1puSnZiU0FuTGk5cGJtTXZZblZtWm1WeUxXMWxkR2h2WkhNbk8xeHVYRzVqYjI1emRDQkRRVTFGVEY5RFFWTkZYMUJCVkZSRlVrNGdQU0F2S0Z0aExYcGRLU2hiUVMxYVhTa3ZaenRjYm1OdmJuTjBJRkpGVUV4QlEwVmZWRVZOVUV4QlZFVWdQU0FuSkRFdEpESW5PMXh1WTI5dWMzUWdTRUZUWDFCRlVrWlBVazFCVGtORlgwNVBWeUE5SUNoMGVYQmxiMllnY0dWeVptOXliV0Z1WTJVZ0lUMDlJQ2QxYm1SbFptbHVaV1FuSUNZbUlIQmxjbVp2Y20xaGJtTmxMbTV2ZHlrN1hHNWNiaThxWEc0Z0lDQWdSMlYwSUhaaGNpQjBlWEJsSUdGeklITjBjbWx1WjF4dUlDQWdJRnh1SUNBZ0lFQndZWEpoYlRvZ1ZtRnlhV0ZpYkdVZ2RHOGdkR1Z6ZEZ4dUlDQWdJRUJ5WlhSMWNtNGdXM04wY21sdVoxMDZJRkpsZEhWeWJuTXNJR1p2Y2lCcGJuTjBZVzVqWlNBblQySnFaV04wSnlCcFppQmJiMkpxWldOMElFOWlhbVZqZEYxY2Jpb3ZYRzVqYjI1emRDQjJZWEpVZVhCbElEMGdkbUZ5YVdGaWJHVWdQVDRnVDJKcVpXTjBMbkJ5YjNSdmRIbHdaUzUwYjFOMGNtbHVaeTVqWVd4c0tIWmhjbWxoWW14bEtTNXpiR2xqWlNnNExDQXRNU2s3WEc1Y2JpOHFYRzRnSUNBZ1EyOXVkbVZ5ZENCallXMWxiRU5oYzJVZ2RHOGdaR0Z6YUMxallYTmxYRzVjYmlBZ0lDQkFjR0Z5WVcwZ1czTjBjbWx1WjExY2JpQWdJQ0JBY21WMGRYSnVJRnR6ZEhKcGJtZGRYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJR05oYldWc1ZHOUVZWE5vSUQwZ0tITjBjbWx1WnlrZ1BUNGdjM1J5YVc1bkxuSmxjR3hoWTJVb1EwRk5SVXhmUTBGVFJWOVFRVlJVUlZKT0xDQlNSVkJNUVVORlgxUkZUVkJNUVZSRktTNTBiMHh2ZDJWeVEyRnpaU2dwTzF4dVhHNHZLbHh1SUNBZ0lFTnlaV0YwWlNCaGJpQmhkWFJ2TFdOMWJHeHBibWNnWW5WbVptVnlJR0Z5Y21GNVhHNWNiaUFnSUNCQWNHRnlZVzBnVzJGeWNtRjVYVnh1SUNBZ0lFQndZWEpoYlNCYmFXNTBYVnh1SUNBZ0lFQnlaWFIxY200Z1cyRnljbUY1WFZ4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCamNtVmhkR1ZDZFdabVpYSWdQU0FvYldGNFUybDZaU0E5SURNc0lHRnljbUY1SUQwZ1cxMHBJRDArSUh0Y2JpQWdJQ0JoY25KaGVTNXdkWE5vSUQwZ2NIVnphRHRjYmlBZ0lDQmhjbkpoZVM1ZmJXRjRVMmw2WlNBOUlHMWhlRk5wZW1VZ2ZId2dNRHRjYmx4dUlDQWdJSEpsZEhWeWJpQmhjbkpoZVR0Y2JuMWNibHh1THlwY2JpQWdJQ0JIWlc1bGNtRjBaU0JqZFhKeVpXNTBJSFJwYldWemRHRnRjRnh1SUNBZ0lGeHVJQ0FnSUVCeVpYUjFjbTRnVzNScGJXVnpkR0Z0Y0YwNklFTjFjbkpsYm5RZ1ZVNUpXQ0IwYVcxbGMzUmhiWEJjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnWTNWeWNtVnVkRlJwYldVZ1BTQW9LU0E5UGlCSVFWTmZVRVZTUms5U1RVRk9RMFZmVGs5WElEOGdjR1Z5Wm05eWJXRnVZMlV1Ym05M0tDa2dPaUJ1WlhjZ1JHRjBaU2dwTG1kbGRGUnBiV1VvS1R0Y2JseHVMeXBjYmlBZ0lDQkpkR1Z5WVhSbElHOTJaWElnWVc0Z2IySnFaV04wSUdGdVpDQm1hWEpsSUdFZ1kyRnNiR0poWTJzZ1ptOXlJR1YyWlhKNUlHbDBaVzBnYVc0Z2FYUmNibHh1SUNBZ0lFQndZWEpoYlNCYmIySnFaV04wWFRvZ1QySnFaV04wSUhSdklHbDBaWEpoZEdVZ2IzWmxjbHh1SUNBZ0lFQndZWEpoYlNCYlpuVnVZM1JwYjI1ZE9pQkRZV3hzWW1GamF5QjBieUJtYVhKbFhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHVmhZMmdnUFNBb2IySnFaV04wTENCallXeHNZbUZqYXlrZ1BUNGdlMXh1SUNBZ0lHTnZibk4wSUd0bGVYTWdQU0J2WW1wbFkzUWdQeUJQWW1wbFkzUXVhMlY1Y3lodlltcGxZM1FwSURvZ1cxMDdYRzRnSUNBZ1kyOXVjM1FnYm5WdFMyVjVjeUE5SUd0bGVYTXViR1Z1WjNSb08xeHVYRzRnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQnVkVzFMWlhsek95QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnYTJWNUlEMGdhMlY1YzF0cFhUdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2NISnZjQ0E5SUc5aWFtVmpkRnRyWlhsZE8xeHVYRzRnSUNBZ0lDQWdJR05oYkd4aVlXTnJLSEJ5YjNBc0lHdGxlU3dnYjJKcVpXTjBLVHRjYmlBZ0lDQjlYRzU5TzF4dVhHNHZLbHh1SUNBZ0lFTm9aV05ySUdsbUlIUjNieUJ2WW1wbFkzUnpJR2hoZG1VZ1kyaGhibWRsWkNCbWNtOXRJR1ZoWTJnZ2IzUm9aWEpjYmlBZ0lDQmNiaUFnSUNCQWNHRnlZVzBnVzI5aWFtVmpkRjA2SUVsdWNIVjBJRUZjYmlBZ0lDQkFjR0Z5WVcwZ1cyOWlhbVZqZEYwNklFbHVjSFYwSUVKY2JpQWdJQ0JBY21WMGRYSnVJRnRpYjI5c1pXRnVYVG9nVkhKMVpTQnBaaUJrYVdabVpYSmxiblJjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnYUdGelEyaGhibWRsWkNBOUlDaGhMQ0JpS1NBOVBpQjdYRzRnSUNBZ2JHVjBJR05vWVc1blpXUWdQU0JtWVd4elpUdGNibHh1SUNBZ0lHVmhZMmdvWVN3Z0tIWmhiSFZsTENCclpYa3BJRDArSUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLR2hoYzFCeWIzQmxjblI1S0dJc0lHdGxlU2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoMllXeDFaU0FoUFQwZ1lsdHJaWGxkS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyaGhibWRsWkNBOUlIUnlkV1U3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCamFHRnVaMlZrSUQwZ2RISjFaVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDBwTzF4dVhHNGdJQ0FnY21WMGRYSnVJR05vWVc1blpXUTdYRzU5TzF4dVhHNHZLbHh1SUNBZ0lFTm9aV05ySUdsbUlHOWlhbVZqZENCb1lYTWdjSEp2Y0dWeWRIa2dZVzVrSUdsMElHbHpiaWQwSUhWdVpHVm1hVzVsWkZ4dVhHNGdJQ0FnUUhCaGNtRnRJRnR2WW1wbFkzUmRYRzRnSUNBZ1FIQmhjbUZ0SUZ0emRISnBibWRkWEc0Z0lDQWdRSEpsZEhWeWJpQmJZbTl2YkdWaGJsMWNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdhR0Z6VUhKdmNHVnlkSGtnUFNBb2IySnFaV04wTENCd2NtOXdaWEowZVU1aGJXVXBJRDArSUc5aWFtVmpkQzVvWVhOUGQyNVFjbTl3WlhKMGVTaHdjbTl3WlhKMGVVNWhiV1VwSUNZbUlHOWlhbVZqZEZ0d2NtOXdaWEowZVU1aGJXVmRJQ0U5UFNCMWJtUmxabWx1WldRN1hHNWNiaThxWEc0Z0lDQWdTWE1nZFhScGJITWdkbUZ5SUdGdUlHRnljbUY1SUQ4Z1hHNGdJQ0FnWEc0Z0lDQWdRSEJoY21GdE9pQldZWEpwWVdKc1pTQjBieUIwWlhOMFhHNGdJQ0FnUUhKbGRIVnliaUJiWW05dmJHVmhibDA2SUZKbGRIVnlibk1nZEhKMVpTQnBaaUIxZEdsc2N5NTJZWEpVZVhCbElEMDlQU0FuUVhKeVlYa25YRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJR2x6UVhKeVlYa2dQU0FvWVhKeUtTQTlQaUIyWVhKVWVYQmxLR0Z5Y2lrZ1BUMDlJQ2RCY25KaGVTYzdYRzVjYmk4cVhHNGdJQ0FnU1hNZ2RYUnBiSE1nZG1GeUlHRWdablZ1WTNScGIyNGdQeUJjYmlBZ0lDQmNiaUFnSUNCQWNHRnlZVzA2SUZaaGNtbGhZbXhsSUhSdklIUmxjM1JjYmlBZ0lDQkFjbVYwZFhKdUlGdGliMjlzWldGdVhUb2dVbVYwZFhKdWN5QjBjblZsSUdsbUlIVjBhV3h6TG5aaGNsUjVjR1VnUFQwOUlDZEdkVzVqZEdsdmJpZGNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdhWE5HZFc1aklEMGdLRzlpYWlrZ1BUNGdkbUZ5Vkhsd1pTaHZZbW9wSUQwOVBTQW5SblZ1WTNScGIyNG5PMXh1WEc0dktseHVJQ0FnSUVseklIVjBhV3h6SUhaaGNpQmhJRzUxYldKbGNqOWNiaUFnSUNCY2JpQWdJQ0JBY0dGeVlXMDZJRlpoY21saFlteGxJSFJ2SUhSbGMzUmNiaUFnSUNCQWNtVjBkWEp1SUZ0aWIyOXNaV0Z1WFRvZ1VtVjBkWEp1Y3lCMGNuVmxJR2xtSUhSNWNHVnZaaUE5UFQwZ0oyNTFiV0psY2lkY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2FYTk9kVzBnUFNBb2JuVnRLU0E5UGlCMGVYQmxiMllnYm5WdElEMDlQU0FuYm5WdFltVnlKenRjYmx4dUx5cGNiaUFnSUNCSmN5QjFkR2xzY3lCMllYSWdZVzRnYjJKcVpXTjBQMXh1SUNBZ0lGeHVJQ0FnSUVCd1lYSmhiVG9nVm1GeWFXRmliR1VnZEc4Z2RHVnpkRnh1SUNBZ0lFQnlaWFIxY200Z1cySnZiMnhsWVc1ZE9pQlNaWFIxY201eklIUnlkV1VnYVdZZ2RIbHdaVzltSUQwOVBTQW5iMkpxWldOMEoxeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQnBjMDlpYWlBOUlDaHZZbW9wSUQwK0lIUjVjR1Z2WmlCdlltb2dQVDA5SUNkdlltcGxZM1FuTzF4dVhHNHZLbHh1SUNBZ0lFbHpJSFYwYVd4eklHRWdjbVZzWVhScGRtVWdkbUZzZFdVZ1lYTnphV2R1YldWdWREOWNiaUFnSUNCY2JpQWdJQ0JBY0dGeVlXMGdXM04wY21sdVoxMDZJRlpoY21saFlteGxJSFJ2SUhSbGMzUmNiaUFnSUNCQWNtVjBkWEp1SUZ0aWIyOXNaV0Z1WFRvZ1NXWWdkWFJwYkhNZ2JHOXZhM01nYkdsclpTQmhJSEpsYkdGMGFYWmxJSFpoYkhWbElHRnpjMmxuYm0xbGJuUmNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdhWE5TWld4aGRHbDJaVlpoYkhWbElEMGdLSFpoYkhWbEtTQTlQaUFvZG1Gc2RXVWdKaVlnZG1Gc2RXVXVhVzVrWlhoUFppQW1KaUIyWVd4MVpTNXBibVJsZUU5bUtDYzlKeWtnUGlBd0tTQS9JSFJ5ZFdVZ09pQm1ZV3h6WlR0Y2JseHVMeXBjYmlBZ0lDQkpjeUIxZEdsc2N5QjJZWElnWVNCemRISnBibWNnUHlCY2JpQWdJQ0JjYmlBZ0lDQkFjR0Z5WVcwNklGWmhjbWxoWW14bElIUnZJSFJsYzNSY2JpQWdJQ0JBY21WMGRYSnVJRnRpYjI5c1pXRnVYVG9nVW1WMGRYSnVjeUIwY25WbElHbG1JSFI1Y0dWdlppQnpkSElnUFQwOUlDZHpkSEpwYm1jblhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHbHpVM1J5YVc1bklEMGdLSE4wY2lrZ1BUNGdkSGx3Wlc5bUlITjBjaUE5UFQwZ0ozTjBjbWx1WnljN1hHNWNiaThxWEc0Z0lDQWdVM0JzYVhRZ1lTQjJZV3gxWlNCcGJuUnZJR0VnZG1Gc2RXVXZkVzVwZENCdlltcGxZM1JjYmlBZ0lDQmNiaUFnSUNBZ0lDQWdYQ0l5TURCd2VGd2lJQzArSUhzZ2RtRnNkV1U2SURJd01Dd2dkVzVwZERvZ1hDSndlRndpSUgxY2JpQWdJQ0FnSUNBZ1hHNGdJQ0FnUUhCaGNtRnRJRnR6ZEhKcGJtZGRPaUJXWVd4MVpTQjBieUJ6Y0d4cGRGeHVJQ0FnSUVCeVpYUjFjbTRnVzI5aWFtVmpkRjA2SUU5aWFtVmpkQ0IzYVhSb0lIWmhiSFZsSUdGdVpDQjFibWwwSUhCeWIzQnpYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJSE53YkdsMFZtRnNkV1ZWYm1sMElEMGdLSFpoYkhWbEtTQTlQaUI3WEc0Z0lDQWdZMjl1YzNRZ2MzQnNhWFJXWVd3Z1BTQjJZV3gxWlM1dFlYUmphQ2d2S0MwL1hGeGtLbHhjTGo5Y1hHUXFLU2d1S2lrdktUdGNibHh1SUNBZ0lISmxkSFZ5YmlCN1hHNGdJQ0FnSUNBZ0lIWmhiSFZsT2lCd1lYSnpaVVpzYjJGMEtITndiR2wwVm1Gc1d6RmRLU3hjYmlBZ0lDQWdJQ0FnZFc1cGREb2dJSE53YkdsMFZtRnNXekpkWEc0Z0lDQWdmVHRjYm4wN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCMGIwUmxZMmx0WVd3Z1BTQW9iblZ0TENCd2NtVmphWE5wYjI0Z1BTQXlLU0E5UGlCN1hHNGdJQ0FnY0hKbFkybHphVzl1SUQwZ01UQWdLaW9nY0hKbFkybHphVzl1TzF4dUlDQWdJSEpsZEhWeWJpQk5ZWFJvTG5KdmRXNWtLRzUxYlNBcUlIQnlaV05wYzJsdmJpa2dMeUJ3Y21WamFYTnBiMjQ3WEc1OU8xeHVYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3VpLXV0aWxzL2xpYi9lbnRyeS5qc1xuICoqIG1vZHVsZSBpZCA9IDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuc3RlcFByb2dyZXNzID0gZXhwb3J0cy5zcGVlZFBlclNlY29uZCA9IGV4cG9ydHMuc3BlZWRQZXJGcmFtZSA9IGV4cG9ydHMuc21vb3RoID0gZXhwb3J0cy5yZXN0cmljdCA9IGV4cG9ydHMucmVsYXRpdmVWYWx1ZSA9IGV4cG9ydHMucmFuZG9tID0gZXhwb3J0cy5yYWRpYW5zVG9EZWdyZWVzID0gZXhwb3J0cy5wb2ludEZyb21BbmdsZUFuZERpc3RhbmNlID0gZXhwb3J0cy5vZmZzZXQgPSBleHBvcnRzLmdldFByb2dyZXNzRnJvbVZhbHVlID0gZXhwb3J0cy5nZXRWYWx1ZUZyb21Qcm9ncmVzcyA9IGV4cG9ydHMuaHlwb3RlbnVzZSA9IGV4cG9ydHMuZGlzdGFuY2UgPSBleHBvcnRzLmRpbGF0ZSA9IGV4cG9ydHMuZGVncmVlc1RvUmFkaWFucyA9IGV4cG9ydHMuYW5nbGUgPSB1bmRlZmluZWQ7XG5cbnZhciBfdWlVdGlscyA9IHJlcXVpcmUoJ3VpLXV0aWxzJyk7XG5cbnZhciBaRVJPX1BPSU5UID0ge1xuICAgIHg6IDAsXG4gICAgeTogMCxcbiAgICB6OiAwXG59O1xuXG52YXIgZGlzdGFuY2UxRCA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIE1hdGguYWJzKGEgLSBiKTtcbn07XG5cbi8qXG4gICAgQW5nbGUgYmV0d2VlbiBwb2ludHNcbiAgICBcbiAgICBUcmFuc2xhdGVzIHRoZSBoeXBvdGhldGljYWwgbGluZSBzbyB0aGF0IHRoZSAnZnJvbScgY29vcmRpbmF0ZXNcbiAgICBhcmUgYXQgMCwwLCB0aGVuIHJldHVybiB0aGUgYW5nbGUgdXNpbmcgLmFuZ2xlRnJvbUNlbnRlcigpXG4gICAgXG4gICAgQHBhcmFtIFtvYmplY3RdOiBYIGFuZCBZIGNvb3JkaW5hdGVzIG9mIGZyb20gcG9pbnRcbiAgICBAcGFyYW0gW29iamVjdF06IFggYW5kIFkgY29yZGluYXRlcyBvZiB0byBwb2ludFxuICAgIEByZXR1cm4gW3JhZGlhbl06IEFuZ2xlIGJldHdlZW4gdGhlIHR3byBwb2ludHMgaW4gcmFkaWFuc1xuKi9cbnZhciBhbmdsZSA9IGV4cG9ydHMuYW5nbGUgPSBmdW5jdGlvbiAoYSkge1xuICAgIHZhciBiID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gWkVST19QT0lOVCA6IGFyZ3VtZW50c1sxXTtcbiAgICByZXR1cm4gcmFkaWFuc1RvRGVncmVlcyhNYXRoLmF0YW4yKGEueCAtIGIueCwgYS55IC0gYi55KSk7XG59O1xuXG4vKlxuICAgIENvbnZlcnQgZGVncmVlcyB0byByYWRpYW5zXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBpbiBkZWdyZWVzXG4gICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgaW4gcmFkaWFuc1xuKi9cbnZhciBkZWdyZWVzVG9SYWRpYW5zID0gZXhwb3J0cy5kZWdyZWVzVG9SYWRpYW5zID0gZnVuY3Rpb24gKGRlZ3JlZXMpIHtcbiAgICByZXR1cm4gZGVncmVlcyAqIE1hdGguUEkgLyAxODA7XG59O1xuXG4vKlxuICAgIERpbGF0ZVxuICAgIFxuICAgIENoYW5nZSB0aGUgcHJvZ3Jlc3Npb24gYmV0d2VlbiBhIGFuZCBiIGFjY29yZGluZyB0byBkaWxhdGlvbi5cbiAgICBcbiAgICBTbyBkaWxhdGlvbiA9IDAuNSB3b3VsZCBjaGFuZ2VcbiAgICBcbiAgICBhIC0tLS0tLS0tLSBiXG4gICAgXG4gICAgdG9cbiAgICBcbiAgICBhIC0tLS0gYlxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogUHJldmlvdXMgdmFsdWVcbiAgICBAcGFyYW0gW251bWJlcl06IEN1cnJlbnQgdmFsdWVcbiAgICBAcGFyYW0gW251bWJlcl06IERpbGF0ZSBwcm9ncmVzcyBieSB4XG4gICAgQHJldHVybiBbbnVtYmVyXTogUHJldmlvdXMgdmFsdWUgcGx1cyB0aGUgZGlsYXRlZCBkaWZmZXJlbmNlXG4qL1xudmFyIGRpbGF0ZSA9IGV4cG9ydHMuZGlsYXRlID0gZnVuY3Rpb24gKGEsIGIsIGRpbGF0aW9uKSB7XG4gICAgcmV0dXJuIGEgKyAoYiAtIGEpICogZGlsYXRpb247XG59O1xuXG4vKlxuICAgIERpc3RhbmNlXG4gICAgXG4gICAgUmV0dXJucyB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0d28gbiBkaW1lbnNpb25hbCBwb2ludHMuXG4gICAgXG4gICAgQHBhcmFtIFtvYmplY3QvbnVtYmVyXTogeCBhbmQgeSBvciBqdXN0IHggb2YgcG9pbnQgQVxuICAgIEBwYXJhbSBbb2JqZWN0L251bWJlcl06IChvcHRpb25hbCk6IHggYW5kIHkgb3IganVzdCB4IG9mIHBvaW50IEJcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBUaGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgdHdvIHBvaW50c1xuKi9cbnZhciBkaXN0YW5jZSA9IGV4cG9ydHMuZGlzdGFuY2UgPSBmdW5jdGlvbiAoYSkge1xuICAgIHZhciBiID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gWkVST19QT0lOVCA6IGFyZ3VtZW50c1sxXTtcblxuICAgIC8vIDFEIGRpbWVuc2lvbnNcbiAgICBpZiAoKDAsIF91aVV0aWxzLmlzTnVtKShhKSkge1xuICAgICAgICByZXR1cm4gZGlzdGFuY2UxRChhLCBiKTtcblxuICAgICAgICAvLyBNdWx0aS1kaW1lbnNpb25hbFxuICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgeERlbHRhID0gZGlzdGFuY2UxRChhLngsIGIueCk7XG4gICAgICAgICAgICB2YXIgeURlbHRhID0gZGlzdGFuY2UxRChhLnksIGIueSk7XG4gICAgICAgICAgICB2YXIgekRlbHRhID0gKDAsIF91aVV0aWxzLmlzTnVtKShhLnopID8gZGlzdGFuY2UxRChhLnosIGIueikgOiAwO1xuXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KHhEZWx0YSwgMikgKyBNYXRoLnBvdyh5RGVsdGEsIDIpICsgTWF0aC5wb3coekRlbHRhLCAyKSk7XG4gICAgICAgIH1cbn07XG5cbi8qXG4gICAgSHlwb3RlbnVzZVxuICAgIFxuICAgIFJldHVybnMgdGhlIGh5cG90ZW51c2UsIHNpZGUgQywgZ2l2ZW4gdGhlIGxlbmd0aHMgb2Ygc2lkZXMgQSBhbmQgQi5cbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IExlbmd0aCBvZiBBXG4gICAgQHBhcmFtIFtudW1iZXJdOiBMZW5ndGggb2YgQlxuICAgIEByZXR1cm4gW251bWJlcl06IExlbmd0aCBvZiBDXG4qL1xudmFyIGh5cG90ZW51c2UgPSBleHBvcnRzLmh5cG90ZW51c2UgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBNYXRoLnNxcnQoYSAqIGEgKyBiICogYik7XG59O1xuXG4vKlxuICAgIFZhbHVlIGluIHJhbmdlIGZyb20gcHJvZ3Jlc3NcbiAgICBcbiAgICBHaXZlbiBhIGxvd2VyIGxpbWl0IGFuZCBhbiB1cHBlciBsaW1pdCwgd2UgcmV0dXJuIHRoZSB2YWx1ZSB3aXRoaW5cbiAgICB0aGF0IHJhbmdlIGFzIGV4cHJlc3NlZCBieSBwcm9ncmVzcyAoYSBudW1iZXIgZnJvbSAwLTEpXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBUaGUgcHJvZ3Jlc3MgYmV0d2VlbiBsb3dlciBhbmQgdXBwZXIgbGltaXRzIGV4cHJlc3NlZCAwLTFcbiAgICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IG9mIHJhbmdlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBVcHBlciBsaW1pdCBvZiByYW5nZVxuICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGFzIGNhbGN1bGF0ZWQgZnJvbSBwcm9ncmVzcyB3aXRoaW4gcmFuZ2UgKG5vdCBsaW1pdGVkIHdpdGhpbiByYW5nZSlcbiovXG52YXIgZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MgPSBleHBvcnRzLmdldFZhbHVlRnJvbVByb2dyZXNzID0gZnVuY3Rpb24gKHByb2dyZXNzLCBmcm9tLCB0bykge1xuICAgIHJldHVybiAtcHJvZ3Jlc3MgKiBmcm9tICsgcHJvZ3Jlc3MgKiB0byArIGZyb207XG59O1xuXG4vKlxuICAgIFByb2dyZXNzIHdpdGhpbiBnaXZlbiByYW5nZVxuICAgIFxuICAgIEdpdmVuIGEgbG93ZXIgbGltaXQgYW5kIGFuIHVwcGVyIGxpbWl0LCB3ZSByZXR1cm4gdGhlIHByb2dyZXNzXG4gICAgKGV4cHJlc3NlZCBhcyBhIG51bWJlciAwLTEpIHJlcHJlc2VudGVkIGJ5IHRoZSBnaXZlbiB2YWx1ZSwgYW5kXG4gICAgbGltaXQgdGhhdCBwcm9ncmVzcyB0byB3aXRoaW4gMC0xLlxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgdG8gZmluZCBwcm9ncmVzcyB3aXRoaW4gZ2l2ZW4gcmFuZ2VcbiAgICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVXBwZXIgbGltaXRcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBQcm9ncmVzcyBvZiB2YWx1ZSB3aXRoaW4gcmFuZ2UgYXMgZXhwcmVzc2VkIDAtMVxuKi9cbnZhciBnZXRQcm9ncmVzc0Zyb21WYWx1ZSA9IGV4cG9ydHMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUsIGZyb20sIHRvKSB7XG4gICAgcmV0dXJuICh2YWx1ZSAtIGZyb20pIC8gKHRvIC0gZnJvbSk7XG59O1xuXG4vKlxuICAgIE9mZnNldCBiZXR3ZWVuIHR3byBvYmplY3RzIG9mIG51bWJlcnNcblxuICAgIElmIHByb3BlcnR5IGlzIGZvdW5kIGluIGIgbm90IHByZXNlbnQgaW4gYSwgaXQgd2lsbCByZXR1cm4gYDBgIGZvciB0aGF0IHByb3AuXG4gICAgXG4gICAgQHBhcmFtIFtQb2ludF06IEZpcnN0IG9iamVjdFxuICAgIEBwYXJhbSBbUG9pbnRdOiBTZWNvbmQgb2JqZWN0XG4gICAgQHJldHVybiBbT2Zmc2V0XTogRGlzdGFuY2UgbWV0cmljcyBiZXR3ZWVuIHR3byBwb2ludHNcbiovXG52YXIgb2Zmc2V0ID0gZXhwb3J0cy5vZmZzZXQgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgIHZhciBvZmZzZXQgPSB7fTtcblxuICAgICgwLCBfdWlVdGlscy5lYWNoKShiLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICBvZmZzZXRba2V5XSA9ICgwLCBfdWlVdGlscy5oYXNQcm9wZXJ0eSkoYSwga2V5KSA/IHZhbHVlIC0gYVtrZXldIDogMDtcbiAgICB9KTtcblxuICAgIHJldHVybiBvZmZzZXQ7XG59O1xuXG4vKlxuICAgIFBvaW50IGZyb20gYW5nbGUgYW5kIGRpc3RhbmNlXG4gICAgXG4gICAgQHBhcmFtIFtvYmplY3RdOiAyRCBwb2ludCBvZiBvcmlnaW5cbiAgICBAcGFyYW0gW251bWJlcl06IEFuZ2xlIGZyb20gb3JpZ2luXG4gICAgQHBhcmFtIFtudW1iZXJdOiBEaXN0YW5jZSBmcm9tIG9yaWdpblxuICAgIEByZXR1cm4gW29iamVjdF06IENhbGN1bGF0ZWQgMkQgcG9pbnRcbiovXG52YXIgcG9pbnRGcm9tQW5nbGVBbmREaXN0YW5jZSA9IGV4cG9ydHMucG9pbnRGcm9tQW5nbGVBbmREaXN0YW5jZSA9IGZ1bmN0aW9uIChvcmlnaW4sIGFuZ2xlLCBkaXN0YW5jZSkge1xuICAgIGFuZ2xlID0gZGVncmVlc1RvUmFkaWFucyhhbmdsZSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB4OiBkaXN0YW5jZSAqIE1hdGguY29zKGFuZ2xlKSArIG9yaWdpbi54LFxuICAgICAgICB5OiBkaXN0YW5jZSAqIE1hdGguc2luKGFuZ2xlKSArIG9yaWdpbi55XG4gICAgfTtcbn07XG5cbi8qXG4gICAgQ29udmVydCByYWRpYW5zIHRvIGRlZ3JlZXNcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIGluIHJhZGlhbnNcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBpbiBkZWdyZWVzXG4qL1xudmFyIHJhZGlhbnNUb0RlZ3JlZXMgPSBleHBvcnRzLnJhZGlhbnNUb0RlZ3JlZXMgPSBmdW5jdGlvbiAocmFkaWFucykge1xuICAgIHJldHVybiByYWRpYW5zICogMTgwIC8gTWF0aC5QSTtcbn07XG5cbi8qXG4gICAgUmV0dXJuIHJhbmRvbSBudW1iZXIgYmV0d2VlbiByYW5nZVxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBPdXRwdXQgbWluaW11bVxuICAgIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBPdXRwdXQgbWF4aW11bVxuICAgIEByZXR1cm4gW251bWJlcl06IFJhbmRvbSBudW1iZXIgd2l0aGluIHJhbmdlLCBvciAwIGFuZCAxIGlmIG5vbmUgcHJvdmlkZWRcbiovXG52YXIgcmFuZG9tID0gZXhwb3J0cy5yYW5kb20gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG1pbiA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IDAgOiBhcmd1bWVudHNbMF07XG4gICAgdmFyIG1heCA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IDEgOiBhcmd1bWVudHNbMV07XG4gICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbjtcbn07XG5cbi8qXG4gICAgQ2FsY3VsYXRlIHJlbGF0aXZlIHZhbHVlXG4gICAgXG4gICAgVGFrZXMgdGhlIG9wZXJhdG9yIGFuZCB2YWx1ZSBmcm9tIGEgc3RyaW5nLCBpZSBcIis9NVwiLCBhbmQgYXBwbGllc1xuICAgIHRvIHRoZSBjdXJyZW50IHZhbHVlIHRvIHJlc29sdmUgYSBuZXcgdGFyZ2V0LlxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICAgIEBwYXJhbSBbc3RyaW5nXTogUmVsYXRpdmUgdmFsdWVcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBOZXcgdmFsdWVcbiovXG52YXIgcmVsYXRpdmVWYWx1ZSA9IGV4cG9ydHMucmVsYXRpdmVWYWx1ZSA9IGZ1bmN0aW9uIChjdXJyZW50LCByZWxhdGl2ZSkge1xuICAgIHZhciBuZXdWYWx1ZSA9IGN1cnJlbnQ7XG4gICAgdmFyIGVxdWF0aW9uID0gcmVsYXRpdmUuc3BsaXQoJz0nKTtcbiAgICB2YXIgb3BlcmF0b3IgPSBlcXVhdGlvblswXTtcblxuICAgIHZhciBfc3BsaXRWYWx1ZVVuaXQgPSAoMCwgX3VpVXRpbHMuc3BsaXRWYWx1ZVVuaXQpKGVxdWF0aW9uWzFdKTtcblxuICAgIHZhciB1bml0ID0gX3NwbGl0VmFsdWVVbml0LnVuaXQ7XG4gICAgdmFyIHZhbHVlID0gX3NwbGl0VmFsdWVVbml0LnZhbHVlO1xuXG4gICAgdmFsdWUgPSBwYXJzZUZsb2F0KHZhbHVlKTtcblxuICAgIHN3aXRjaCAob3BlcmF0b3IpIHtcbiAgICAgICAgY2FzZSAnKyc6XG4gICAgICAgICAgICBuZXdWYWx1ZSArPSB2YWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICctJzpcbiAgICAgICAgICAgIG5ld1ZhbHVlIC09IHZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJyonOlxuICAgICAgICAgICAgbmV3VmFsdWUgKj0gdmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnLyc6XG4gICAgICAgICAgICBuZXdWYWx1ZSAvPSB2YWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmICh1bml0KSB7XG4gICAgICAgIG5ld1ZhbHVlICs9IHVuaXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld1ZhbHVlO1xufTtcblxuLypcbiAgICBSZXN0cmljdCB2YWx1ZSB0byByYW5nZVxuICAgIFxuICAgIFJldHVybiB2YWx1ZSB3aXRoaW4gdGhlIHJhbmdlIG9mIGxvd2VyTGltaXQgYW5kIHVwcGVyTGltaXRcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIHRvIGtlZXAgd2l0aGluIHJhbmdlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBMb3dlciBsaW1pdCBvZiByYW5nZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogVXBwZXIgbGltaXQgb2YgcmFuZ2VcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBhcyBsaW1pdGVkIHdpdGhpbiBnaXZlbiByYW5nZVxuKi9cbnZhciByZXN0cmljdCA9IGV4cG9ydHMucmVzdHJpY3QgPSBmdW5jdGlvbiAodmFsdWUsIG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIE1hdGgubWF4KE1hdGgubWluKHZhbHVlLCBtYXgpLCBtaW4pO1xufTtcblxuLypcbiAgICBGcmFtZXJhdGUtaW5kZXBlbmRlbnQgc21vb3RoaW5nXG5cbiAgICBAcGFyYW0gW251bWJlcl06IE5ldyB2YWx1ZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogT2xkIHZhbHVlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvblxuICAgIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBTbW9vdGhpbmcgKDAgaXMgbm9uZSlcbiovXG52YXIgc21vb3RoID0gZXhwb3J0cy5zbW9vdGggPSBmdW5jdGlvbiAobmV3VmFsdWUsIG9sZFZhbHVlLCBkdXJhdGlvbikge1xuICAgIHZhciBzbW9vdGhpbmcgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDMgfHwgYXJndW1lbnRzWzNdID09PSB1bmRlZmluZWQgPyAwIDogYXJndW1lbnRzWzNdO1xuICAgIHJldHVybiAoMCwgX3VpVXRpbHMudG9EZWNpbWFsKShvbGRWYWx1ZSArIGR1cmF0aW9uICogKG5ld1ZhbHVlIC0gb2xkVmFsdWUpIC8gTWF0aC5tYXgoc21vb3RoaW5nLCBkdXJhdGlvbikpO1xufTtcblxuLypcbiAgICBDb252ZXJ0IHggcGVyIHNlY29uZCB0byBwZXIgZnJhbWUgdmVsb2NpdHkgYmFzZWQgb24gZnBzXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBVbml0IHBlciBzZWNvbmRcbiAgICBAcGFyYW0gW251bWJlcl06IEZyYW1lIGR1cmF0aW9uIGluIG1zXG4qL1xudmFyIHNwZWVkUGVyRnJhbWUgPSBleHBvcnRzLnNwZWVkUGVyRnJhbWUgPSBmdW5jdGlvbiAoeHBzLCBmcmFtZUR1cmF0aW9uKSB7XG4gICAgcmV0dXJuICgwLCBfdWlVdGlscy5pc051bSkoeHBzKSA/IHhwcyAvICgxMDAwIC8gZnJhbWVEdXJhdGlvbikgOiAwO1xufTtcblxuLypcbiAgICBDb252ZXJ0IHZlbG9jaXR5IGludG8gdmVsaWNpdHkgcGVyIHNlY29uZFxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVW5pdCBwZXIgZnJhbWVcbiAgICBAcGFyYW0gW251bWJlcl06IEZyYW1lIGR1cmF0aW9uIGluIG1zXG4qL1xudmFyIHNwZWVkUGVyU2Vjb25kID0gZXhwb3J0cy5zcGVlZFBlclNlY29uZCA9IGZ1bmN0aW9uICh2ZWxvY2l0eSwgZnJhbWVEdXJhdGlvbikge1xuICAgIHJldHVybiB2ZWxvY2l0eSAqICgxMDAwIC8gZnJhbWVEdXJhdGlvbik7XG59O1xuXG4vKlxuICAgIENyZWF0ZSBzdGVwcGVkIHZlcnNpb24gb2YgMC0xIHByb2dyZXNzXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBDdXJyZW50IHZhbHVlXG4gICAgQHBhcmFtIFtpbnRdOiBOdW1iZXIgb2Ygc3RlcHNcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBTdGVwcGVkIHZhbHVlXG4qL1xudmFyIHN0ZXBQcm9ncmVzcyA9IGV4cG9ydHMuc3RlcFByb2dyZXNzID0gZnVuY3Rpb24gKHByb2dyZXNzLCBzdGVwcykge1xuICAgIHZhciBzZWdtZW50ID0gMSAvIChzdGVwcyAtIDEpO1xuICAgIHZhciB0YXJnZXQgPSAxIC0gMSAvIHN0ZXBzO1xuICAgIHZhciBwcm9ncmVzc09mVGFyZ2V0ID0gTWF0aC5taW4ocHJvZ3Jlc3MgLyB0YXJnZXQsIDEpO1xuXG4gICAgcmV0dXJuIE1hdGguZmxvb3IocHJvZ3Jlc3NPZlRhcmdldCAvIHNlZ21lbnQpICogc2VnbWVudDtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnlZeTlsYm5SeWVTNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN08wRkJVVUVzU1VGQlRTeFZRVUZWTEVkQlFVYzdRVUZEWml4TFFVRkRMRVZCUVVVc1EwRkJRenRCUVVOS0xFdEJRVU1zUlVGQlJTeERRVUZETzBGQlEwb3NTMEZCUXl4RlFVRkZMRU5CUVVNN1EwRkRVQ3hEUVVGRE96dEJRVVZHTEVsQlFVMHNWVUZCVlN4SFFVRkhMRlZCUVVNc1EwRkJReXhGUVVGRkxFTkJRVU03VjBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03UTBGQlFUczdPenM3T3pzN096czdPMEZCUVVNc1FVRlpkRU1zU1VGQlRTeExRVUZMTEZkQlFVd3NTMEZCU3l4SFFVRkhMRlZCUVVNc1EwRkJRenRSUVVGRkxFTkJRVU1zZVVSQlFVY3NWVUZCVlR0WFFVRkxMR2RDUVVGblFpeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPME5CUVVFN096czdPenM3TzBGQlFVTXNRVUZSZUVZc1NVRkJUU3huUWtGQlowSXNWMEZCYUVJc1owSkJRV2RDTEVkQlFVY3NWVUZCUXl4UFFVRlBPMWRCUVVzc1QwRkJUeXhIUVVGSExFbEJRVWtzUTBGQlF5eEZRVUZGTEVkQlFVY3NSMEZCUnp0RFFVRkJPenM3T3pzN096czdPenM3T3pzN096czdPenRCUVVGRExFRkJiMEk1UkN4SlFVRk5MRTFCUVUwc1YwRkJUaXhOUVVGTkxFZEJRVWNzVlVGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRkZCUVZFN1YwRkJTeXhEUVVGRExFZEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkJMRWRCUVVrc1VVRkJVU3hCUVVGRE8wTkJRVUU3T3pzN096czdPenM3TzBGQlFVTXNRVUZYTlVRc1NVRkJUU3hSUVVGUkxGZEJRVklzVVVGQlVTeEhRVUZITEZWQlFVTXNRMEZCUXl4RlFVRnhRanRSUVVGdVFpeERRVUZETEhsRVFVRkhMRlZCUVZVN096dEJRVVYwUXl4UlFVRkpMR0ZCYUVWS0xFdEJRVXNzUlVGblJVc3NRMEZCUXl4RFFVRkRMRVZCUVVVN1FVRkRWaXhsUVVGUExGVkJRVlVzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPenM3UVVGQlF5eExRVWN6UWl4TlFVRk5PMEZCUTBnc1owSkJRVTBzVFVGQlRTeEhRVUZITEZWQlFWVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0QlFVTndReXhuUWtGQlRTeE5RVUZOTEVkQlFVY3NWVUZCVlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUTNCRExHZENRVUZOTEUxQlFVMHNSMEZCUnl4QlFVRkRMR0ZCZGtWd1FpeExRVUZMTEVWQmRVVnhRaXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVa3NWVUZCVlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenM3UVVGRmRrUXNiVUpCUVU4c1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eFRRVUZETEUxQlFVMHNSVUZCU1N4RFFVRkRMR0ZCUVVzc1RVRkJUU3hGUVVGSkxFTkJRVU1zUTBGQlF5eFpRVUZKTEUxQlFVMHNSVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xTkJRMjVGTzBOQlEwbzdPenM3T3pzN096czdPMEZCUVVNc1FVRlhTeXhKUVVGTkxGVkJRVlVzVjBGQlZpeFZRVUZWTEVkQlFVY3NWVUZCUXl4RFFVRkRMRVZCUVVVc1EwRkJRenRYUVVGTExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRVUZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVGQlFVTXNRMEZCUXp0RFFVRkJPenM3T3pzN096czdPenM3TzBGQlFVTXNRVUZoTVVRc1NVRkJUU3h2UWtGQmIwSXNWMEZCY0VJc2IwSkJRVzlDTEVkQlFVY3NWVUZCUXl4UlFVRlJMRVZCUVVVc1NVRkJTU3hGUVVGRkxFVkJRVVU3VjBGQlN5eEJRVUZETEVOQlFVVXNVVUZCVVN4SFFVRkhMRWxCUVVrc1IwRkJTeXhSUVVGUkxFZEJRVWNzUlVGQlJTeEJRVUZETEVkQlFVY3NTVUZCU1R0RFFVRkJPenM3T3pzN096czdPenM3T3p0QlFVRkRMRUZCWTJ4SExFbEJRVTBzYjBKQlFXOUNMRmRCUVhCQ0xHOUNRVUZ2UWl4SFFVRkhMRlZCUVVNc1MwRkJTeXhGUVVGRkxFbEJRVWtzUlVGQlJTeEZRVUZGTzFkQlFVc3NRMEZCUXl4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGQkxFbEJRVXNzUlVGQlJTeEhRVUZITEVsQlFVa3NRMEZCUVN4QlFVRkRPME5CUVVFN096czdPenM3T3pzN08wRkJRVU1zUVVGWEwwVXNTVUZCVFN4TlFVRk5MRmRCUVU0c1RVRkJUU3hIUVVGSExGVkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCU3p0QlFVTTFRaXhSUVVGTkxFMUJRVTBzUjBGQlJ5eEZRVUZGTEVOQlFVTTdPMEZCUld4Q0xHbENRV3BKUVN4SlFVRkpMRVZCYVVsRExFTkJRVU1zUlVGQlJTeFZRVUZETEV0QlFVc3NSVUZCUlN4SFFVRkhMRVZCUVVzN1FVRkRjRUlzWTBGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMR0ZCYWtsc1FpeFhRVUZYTEVWQmFVbHRRaXhEUVVGRExFVkJRVVVzUjBGQlJ5eERRVUZETEVkQlFVY3NTMEZCU3l4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdTMEZETVVRc1EwRkJReXhEUVVGRE96dEJRVVZJTEZkQlFVOHNUVUZCVFN4RFFVRkRPME5CUTJwQ096czdPenM3T3pzN08wRkJRVU1zUVVGVlN5eEpRVUZOTEhsQ1FVRjVRaXhYUVVGNlFpeDVRa0ZCZVVJc1IwRkJSeXhWUVVGRExFMUJRVTBzUlVGQlJTeExRVUZMTEVWQlFVVXNVVUZCVVN4RlFVRkxPMEZCUTJ4RkxGTkJRVXNzUjBGQlJ5eG5Ra0ZCWjBJc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6czdRVUZGYUVNc1YwRkJUenRCUVVOSUxGTkJRVU1zUlVGQlJTeFJRVUZSTEVkQlFVY3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eE5RVUZOTEVOQlFVTXNRMEZCUXp0QlFVTjRReXhUUVVGRExFVkJRVVVzVVVGQlVTeEhRVUZITEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzVFVGQlRTeERRVUZETEVOQlFVTTdTMEZETTBNc1EwRkJRenREUVVOTU96czdPenM3T3p0QlFVRkRMRUZCVVVzc1NVRkJUU3huUWtGQlowSXNWMEZCYUVJc1owSkJRV2RDTEVkQlFVY3NWVUZCUXl4UFFVRlBPMWRCUVVzc1QwRkJUeXhIUVVGSExFZEJRVWNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNSVUZCUlR0RFFVRkJPenM3T3pzN096czdRVUZCUXl4QlFWTTVSQ3hKUVVGTkxFMUJRVTBzVjBGQlRpeE5RVUZOTEVkQlFVYzdVVUZCUXl4SFFVRkhMSGxFUVVGSExFTkJRVU03VVVGQlJTeEhRVUZITEhsRVFVRkhMRU5CUVVNN1YwRkJTeXhKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVsQlFVa3NSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJRU3hCUVVGRExFZEJRVWNzUjBGQlJ6dERRVUZCT3pzN096czdPenM3T3pzN1FVRkJReXhCUVZsMlJTeEpRVUZOTEdGQlFXRXNWMEZCWWl4aFFVRmhMRWRCUVVjc1ZVRkJReXhQUVVGUExFVkJRVVVzVVVGQlVTeEZRVUZMTzBGQlEyaEVMRkZCUVVrc1VVRkJVU3hIUVVGSExFOUJRVThzUTBGQlF6dEJRVU4yUWl4UlFVRk5MRkZCUVZFc1IwRkJSeXhSUVVGUkxFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMEZCUTNKRExGRkJRVTBzVVVGQlVTeEhRVUZITEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenM3TUVKQlExQXNZVUZ5VEhSQ0xHTkJRV01zUlVGeFRIVkNMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6czdVVUZCTTBNc1NVRkJTU3h0UWtGQlNpeEpRVUZKTzFGQlFVVXNTMEZCU3l4dFFrRkJUQ3hMUVVGTE96dEJRVVZxUWl4VFFVRkxMRWRCUVVjc1ZVRkJWU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZET3p0QlFVVXhRaXhaUVVGUkxGRkJRVkU3UVVGRFdpeGhRVUZMTEVkQlFVYzdRVUZEU2l4dlFrRkJVU3hKUVVGSkxFdEJRVXNzUTBGQlF6dEJRVU5zUWl4clFrRkJUVHRCUVVGQkxFRkJRMVlzWVVGQlN5eEhRVUZITzBGQlEwb3NiMEpCUVZFc1NVRkJTU3hMUVVGTExFTkJRVU03UVVGRGJFSXNhMEpCUVUwN1FVRkJRU3hCUVVOV0xHRkJRVXNzUjBGQlJ6dEJRVU5LTEc5Q1FVRlJMRWxCUVVrc1MwRkJTeXhEUVVGRE8wRkJRMnhDTEd0Q1FVRk5PMEZCUVVFc1FVRkRWaXhoUVVGTExFZEJRVWM3UVVGRFNpeHZRa0ZCVVN4SlFVRkpMRXRCUVVzc1EwRkJRenRCUVVOc1FpeHJRa0ZCVFR0QlFVRkJMRXRCUTJJN08wRkJSVVFzVVVGQlNTeEpRVUZKTEVWQlFVVTdRVUZEVGl4blFrRkJVU3hKUVVGSkxFbEJRVWtzUTBGQlF6dExRVU53UWpzN1FVRkZSQ3hYUVVGUExGRkJRVkVzUTBGQlF6dERRVU51UWpzN096czdPenM3T3pzN08wRkJRVU1zUVVGWlN5eEpRVUZOTEZGQlFWRXNWMEZCVWl4UlFVRlJMRWRCUVVjc1ZVRkJReXhMUVVGTExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVYzdWMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNTMEZCU3l4RlFVRkZMRWRCUVVjc1EwRkJReXhGUVVGRkxFZEJRVWNzUTBGQlF6dERRVUZCT3pzN096czdPenM3TzBGQlFVTXNRVUZWTVVVc1NVRkJUU3hOUVVGTkxGZEJRVTRzVFVGQlRTeEhRVUZITEZWQlFVTXNVVUZCVVN4RlFVRkZMRkZCUVZFc1JVRkJSU3hSUVVGUk8xRkJRVVVzVTBGQlV5eDVSRUZCUnl4RFFVRkRPMWRCUVVzc1lVRnNUMjVGTEZOQlFWTXNSVUZyVDI5RkxGRkJRVkVzUjBGQlNTeFJRVUZSTEVsQlFVa3NVVUZCVVN4SFFVRkhMRkZCUVZFc1EwRkJRU3hCUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4VFFVRlRMRVZCUVVVc1VVRkJVU3hEUVVGRExFRkJRVU1zUTBGQlF6dERRVUZCT3pzN096czdPenRCUVVGRExFRkJVWHBLTEVsQlFVMHNZVUZCWVN4WFFVRmlMR0ZCUVdFc1IwRkJSeXhWUVVGRExFZEJRVWNzUlVGQlJTeGhRVUZoTzFkQlFVc3NRVUZCUXl4aFFUVlBiRVFzUzBGQlN5eEZRVFJQYlVRc1IwRkJSeXhEUVVGRExFZEJRVWtzUjBGQlJ5eEpRVUZKTEVsQlFVa3NSMEZCUnl4aFFVRmhMRU5CUVVFc1FVRkJReXhIUVVGSExFTkJRVU03UTBGQlFUczdPenM3T3pzN1FVRkJReXhCUVZFNVJpeEpRVUZOTEdOQlFXTXNWMEZCWkN4alFVRmpMRWRCUVVjc1ZVRkJReXhSUVVGUkxFVkJRVVVzWVVGQllUdFhRVUZMTEZGQlFWRXNTVUZCU1N4SlFVRkpMRWRCUVVjc1lVRkJZU3hEUVVGQkxFRkJRVU03UTBGQlFUczdPenM3T3pzN08wRkJRVU1zUVVGVGRFWXNTVUZCVFN4WlFVRlpMRmRCUVZvc1dVRkJXU3hIUVVGSExGVkJRVU1zVVVGQlVTeEZRVUZGTEV0QlFVc3NSVUZCU3p0QlFVTTNReXhSUVVGTkxFOUJRVThzUjBGQlJ5eERRVUZETEVsQlFVa3NTMEZCU3l4SFFVRkhMRU5CUVVNc1EwRkJRU3hCUVVGRExFTkJRVU03UVVGRGFFTXNVVUZCVFN4TlFVRk5MRWRCUVVjc1EwRkJReXhIUVVGSkxFTkJRVU1zUjBGQlJ5eExRVUZMTEVGQlFVTXNRMEZCUXp0QlFVTXZRaXhSUVVGTkxHZENRVUZuUWl4SFFVRkhMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zVVVGQlVTeEhRVUZITEUxQlFVMHNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenM3UVVGRmVFUXNWMEZCVHl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExHZENRVUZuUWl4SFFVRkhMRTlCUVU4c1EwRkJReXhIUVVGSExFOUJRVThzUTBGQlF6dERRVU16UkN4RFFVRkRJaXdpWm1sc1pTSTZJbVZ1ZEhKNUxtcHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSHRjYmlBZ0lDQmxZV05vTEZ4dUlDQWdJR2hoYzFCeWIzQmxjblI1TEZ4dUlDQWdJR2x6VG5WdExGeHVJQ0FnSUhOd2JHbDBWbUZzZFdWVmJtbDBMRnh1SUNBZ0lIUnZSR1ZqYVcxaGJGeHVmU0JtY205dElDZDFhUzExZEdsc2N5YzdYRzVjYm1OdmJuTjBJRnBGVWs5ZlVFOUpUbFFnUFNCN1hHNGdJQ0FnZURvZ01DeGNiaUFnSUNCNU9pQXdMRnh1SUNBZ0lIbzZJREJjYm4wN1hHNWNibU52Ym5OMElHUnBjM1JoYm1ObE1VUWdQU0FvWVN3Z1lpa2dQVDRnVFdGMGFDNWhZbk1vWVNBdElHSXBPMXh1WEc0dktseHVJQ0FnSUVGdVoyeGxJR0psZEhkbFpXNGdjRzlwYm5SelhHNGdJQ0FnWEc0Z0lDQWdWSEpoYm5Oc1lYUmxjeUIwYUdVZ2FIbHdiM1JvWlhScFkyRnNJR3hwYm1VZ2MyOGdkR2hoZENCMGFHVWdKMlp5YjIwbklHTnZiM0prYVc1aGRHVnpYRzRnSUNBZ1lYSmxJR0YwSURBc01Dd2dkR2hsYmlCeVpYUjFjbTRnZEdobElHRnVaMnhsSUhWemFXNW5JQzVoYm1kc1pVWnliMjFEWlc1MFpYSW9LVnh1SUNBZ0lGeHVJQ0FnSUVCd1lYSmhiU0JiYjJKcVpXTjBYVG9nV0NCaGJtUWdXU0JqYjI5eVpHbHVZWFJsY3lCdlppQm1jbTl0SUhCdmFXNTBYRzRnSUNBZ1FIQmhjbUZ0SUZ0dlltcGxZM1JkT2lCWUlHRnVaQ0JaSUdOdmNtUnBibUYwWlhNZ2IyWWdkRzhnY0c5cGJuUmNiaUFnSUNCQWNtVjBkWEp1SUZ0eVlXUnBZVzVkT2lCQmJtZHNaU0JpWlhSM1pXVnVJSFJvWlNCMGQyOGdjRzlwYm5SeklHbHVJSEpoWkdsaGJuTmNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdZVzVuYkdVZ1BTQW9ZU3dnWWlBOUlGcEZVazlmVUU5SlRsUXBJRDArSUhKaFpHbGhibk5VYjBSbFozSmxaWE1vVFdGMGFDNWhkR0Z1TWloaExuZ2dMU0JpTG5nc0lHRXVlU0F0SUdJdWVTa3BPMXh1WEc0dktseHVJQ0FnSUVOdmJuWmxjblFnWkdWbmNtVmxjeUIwYnlCeVlXUnBZVzV6WEc0Z0lDQWdYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCV1lXeDFaU0JwYmlCa1pXZHlaV1Z6WEc0Z0lDQWdRSEpsZEhWeWJpQmJiblZ0WW1WeVhUb2dWbUZzZFdVZ2FXNGdjbUZrYVdGdWMxeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQmtaV2R5WldWelZHOVNZV1JwWVc1eklEMGdLR1JsWjNKbFpYTXBJRDArSUdSbFozSmxaWE1nS2lCTllYUm9MbEJKSUM4Z01UZ3dPMXh1WEc0dktseHVJQ0FnSUVScGJHRjBaVnh1SUNBZ0lGeHVJQ0FnSUVOb1lXNW5aU0IwYUdVZ2NISnZaM0psYzNOcGIyNGdZbVYwZDJWbGJpQmhJR0Z1WkNCaUlHRmpZMjl5WkdsdVp5QjBieUJrYVd4aGRHbHZiaTVjYmlBZ0lDQmNiaUFnSUNCVGJ5QmthV3hoZEdsdmJpQTlJREF1TlNCM2IzVnNaQ0JqYUdGdVoyVmNiaUFnSUNCY2JpQWdJQ0JoSUMwdExTMHRMUzB0TFNCaVhHNGdJQ0FnWEc0Z0lDQWdkRzljYmlBZ0lDQmNiaUFnSUNCaElDMHRMUzBnWWx4dUlDQWdJRnh1SUNBZ0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1VISmxkbWx2ZFhNZ2RtRnNkV1ZjYmlBZ0lDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklFTjFjbkpsYm5RZ2RtRnNkV1ZjYmlBZ0lDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklFUnBiR0YwWlNCd2NtOW5jbVZ6Y3lCaWVTQjRYRzRnSUNBZ1FISmxkSFZ5YmlCYmJuVnRZbVZ5WFRvZ1VISmxkbWx2ZFhNZ2RtRnNkV1VnY0d4MWN5QjBhR1VnWkdsc1lYUmxaQ0JrYVdabVpYSmxibU5sWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUdScGJHRjBaU0E5SUNoaExDQmlMQ0JrYVd4aGRHbHZiaWtnUFQ0Z1lTQXJJQ2dvWWlBdElHRXBJQ29nWkdsc1lYUnBiMjRwTzF4dVhHNHZLbHh1SUNBZ0lFUnBjM1JoYm1ObFhHNGdJQ0FnWEc0Z0lDQWdVbVYwZFhKdWN5QjBhR1VnWkdsemRHRnVZMlVnWW1WMGQyVmxiaUIwZDI4Z2JpQmthVzFsYm5OcGIyNWhiQ0J3YjJsdWRITXVYRzRnSUNBZ1hHNGdJQ0FnUUhCaGNtRnRJRnR2WW1wbFkzUXZiblZ0WW1WeVhUb2dlQ0JoYm1RZ2VTQnZjaUJxZFhOMElIZ2diMllnY0c5cGJuUWdRVnh1SUNBZ0lFQndZWEpoYlNCYmIySnFaV04wTDI1MWJXSmxjbDA2SUNodmNIUnBiMjVoYkNrNklIZ2dZVzVrSUhrZ2IzSWdhblZ6ZENCNElHOW1JSEJ2YVc1MElFSmNiaUFnSUNCQWNtVjBkWEp1SUZ0dWRXMWlaWEpkT2lCVWFHVWdaR2x6ZEdGdVkyVWdZbVYwZDJWbGJpQjBhR1VnZEhkdklIQnZhVzUwYzF4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCa2FYTjBZVzVqWlNBOUlDaGhMQ0JpSUQwZ1drVlNUMTlRVDBsT1ZDa2dQVDRnZTF4dUlDQWdJQzh2SURGRUlHUnBiV1Z1YzJsdmJuTmNiaUFnSUNCcFppQW9hWE5PZFcwb1lTa3BJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR1JwYzNSaGJtTmxNVVFvWVN3Z1lpazdYRzVjYmlBZ0lDQXZMeUJOZFd4MGFTMWthVzFsYm5OcGIyNWhiRnh1SUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUhoRVpXeDBZU0E5SUdScGMzUmhibU5sTVVRb1lTNTRMQ0JpTG5ncE8xeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCNVJHVnNkR0VnUFNCa2FYTjBZVzVqWlRGRUtHRXVlU3dnWWk1NUtUdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2VrUmxiSFJoSUQwZ0tHbHpUblZ0S0dFdWVpa3BJRDhnWkdsemRHRnVZMlV4UkNoaExub3NJR0l1ZWlrZ09pQXdPMXh1WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJOWVhSb0xuTnhjblFvS0hoRVpXeDBZU0FxS2lBeUtTQXJJQ2g1UkdWc2RHRWdLaW9nTWlrZ0t5QW9la1JsYkhSaElDb3FJRElwS1R0Y2JpQWdJQ0I5WEc1OU8xeHVJRnh1THlwY2JpQWdJQ0JJZVhCdmRHVnVkWE5sWEc0Z0lDQWdYRzRnSUNBZ1VtVjBkWEp1Y3lCMGFHVWdhSGx3YjNSbGJuVnpaU3dnYzJsa1pTQkRMQ0JuYVhabGJpQjBhR1VnYkdWdVozUm9jeUJ2WmlCemFXUmxjeUJCSUdGdVpDQkNMbHh1SUNBZ0lGeHVJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVEdWdVozUm9JRzltSUVGY2JpQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRXhsYm1kMGFDQnZaaUJDWEc0Z0lDQWdRSEpsZEhWeWJpQmJiblZ0WW1WeVhUb2dUR1Z1WjNSb0lHOW1JRU5jYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnYUhsd2IzUmxiblZ6WlNBOUlDaGhMQ0JpS1NBOVBpQk5ZWFJvTG5OeGNuUW9LR0VnS2lCaEtTQXJJQ2hpSUNvZ1lpa3BPMXh1WEc0dktseHVJQ0FnSUZaaGJIVmxJR2x1SUhKaGJtZGxJR1p5YjIwZ2NISnZaM0psYzNOY2JpQWdJQ0JjYmlBZ0lDQkhhWFpsYmlCaElHeHZkMlZ5SUd4cGJXbDBJR0Z1WkNCaGJpQjFjSEJsY2lCc2FXMXBkQ3dnZDJVZ2NtVjBkWEp1SUhSb1pTQjJZV3gxWlNCM2FYUm9hVzVjYmlBZ0lDQjBhR0YwSUhKaGJtZGxJR0Z6SUdWNGNISmxjM05sWkNCaWVTQndjbTluY21WemN5QW9ZU0J1ZFcxaVpYSWdabkp2YlNBd0xURXBYRzRnSUNBZ1hHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJVYUdVZ2NISnZaM0psYzNNZ1ltVjBkMlZsYmlCc2IzZGxjaUJoYm1RZ2RYQndaWElnYkdsdGFYUnpJR1Y0Y0hKbGMzTmxaQ0F3TFRGY2JpQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRXh2ZDJWeUlHeHBiV2wwSUc5bUlISmhibWRsWEc0Z0lDQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQlZjSEJsY2lCc2FXMXBkQ0J2WmlCeVlXNW5aVnh1SUNBZ0lFQnlaWFIxY200Z1cyNTFiV0psY2wwNklGWmhiSFZsSUdGeklHTmhiR04xYkdGMFpXUWdabkp2YlNCd2NtOW5jbVZ6Y3lCM2FYUm9hVzRnY21GdVoyVWdLRzV2ZENCc2FXMXBkR1ZrSUhkcGRHaHBiaUJ5WVc1blpTbGNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdaMlYwVm1Gc2RXVkdjbTl0VUhKdlozSmxjM01nUFNBb2NISnZaM0psYzNNc0lHWnliMjBzSUhSdktTQTlQaUFvTFNCd2NtOW5jbVZ6Y3lBcUlHWnliMjBwSUNzZ0tIQnliMmR5WlhOeklDb2dkRzhwSUNzZ1puSnZiVHRjYmx4dUx5cGNiaUFnSUNCUWNtOW5jbVZ6Y3lCM2FYUm9hVzRnWjJsMlpXNGdjbUZ1WjJWY2JpQWdJQ0JjYmlBZ0lDQkhhWFpsYmlCaElHeHZkMlZ5SUd4cGJXbDBJR0Z1WkNCaGJpQjFjSEJsY2lCc2FXMXBkQ3dnZDJVZ2NtVjBkWEp1SUhSb1pTQndjbTluY21WemMxeHVJQ0FnSUNobGVIQnlaWE56WldRZ1lYTWdZU0J1ZFcxaVpYSWdNQzB4S1NCeVpYQnlaWE5sYm5SbFpDQmllU0IwYUdVZ1oybDJaVzRnZG1Gc2RXVXNJR0Z1WkZ4dUlDQWdJR3hwYldsMElIUm9ZWFFnY0hKdlozSmxjM01nZEc4Z2QybDBhR2x1SURBdE1TNWNiaUFnSUNCY2JpQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRlpoYkhWbElIUnZJR1pwYm1RZ2NISnZaM0psYzNNZ2QybDBhR2x1SUdkcGRtVnVJSEpoYm1kbFhHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJNYjNkbGNpQnNhVzFwZENCY2JpQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRlZ3Y0dWeUlHeHBiV2wwWEc0Z0lDQWdRSEpsZEhWeWJpQmJiblZ0WW1WeVhUb2dVSEp2WjNKbGMzTWdiMllnZG1Gc2RXVWdkMmwwYUdsdUlISmhibWRsSUdGeklHVjRjSEpsYzNObFpDQXdMVEZjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnWjJWMFVISnZaM0psYzNOR2NtOXRWbUZzZFdVZ1BTQW9kbUZzZFdVc0lHWnliMjBzSUhSdktTQTlQaUFvZG1Gc2RXVWdMU0JtY205dEtTQXZJQ2gwYnlBdElHWnliMjBwTzF4dVhHNHZLbHh1SUNBZ0lFOW1abk5sZENCaVpYUjNaV1Z1SUhSM2J5QnZZbXBsWTNSeklHOW1JRzUxYldKbGNuTmNibHh1SUNBZ0lFbG1JSEJ5YjNCbGNuUjVJR2x6SUdadmRXNWtJR2x1SUdJZ2JtOTBJSEJ5WlhObGJuUWdhVzRnWVN3Z2FYUWdkMmxzYkNCeVpYUjFjbTRnWURCZ0lHWnZjaUIwYUdGMElIQnliM0F1WEc0Z0lDQWdYRzRnSUNBZ1FIQmhjbUZ0SUZ0UWIybHVkRjA2SUVacGNuTjBJRzlpYW1WamRGeHVJQ0FnSUVCd1lYSmhiU0JiVUc5cGJuUmRPaUJUWldOdmJtUWdiMkpxWldOMFhHNGdJQ0FnUUhKbGRIVnliaUJiVDJabWMyVjBYVG9nUkdsemRHRnVZMlVnYldWMGNtbGpjeUJpWlhSM1pXVnVJSFIzYnlCd2IybHVkSE5jYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnYjJabWMyVjBJRDBnS0dFc0lHSXBJRDArSUh0Y2JpQWdJQ0JqYjI1emRDQnZabVp6WlhRZ1BTQjdmVHRjYmx4dUlDQWdJR1ZoWTJnb1lpd2dLSFpoYkhWbExDQnJaWGtwSUQwK0lIdGNiaUFnSUNBZ0lDQWdiMlptYzJWMFcydGxlVjBnUFNCb1lYTlFjbTl3WlhKMGVTaGhMQ0JyWlhrcElEOGdkbUZzZFdVZ0xTQmhXMnRsZVYwZ09pQXdPMXh1SUNBZ0lIMHBPMXh1WEc0Z0lDQWdjbVYwZFhKdUlHOW1abk5sZER0Y2JuMDdYRzVjYmk4cVhHNGdJQ0FnVUc5cGJuUWdabkp2YlNCaGJtZHNaU0JoYm1RZ1pHbHpkR0Z1WTJWY2JpQWdJQ0JjYmlBZ0lDQkFjR0Z5WVcwZ1cyOWlhbVZqZEYwNklESkVJSEJ2YVc1MElHOW1JRzl5YVdkcGJseHVJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nUVc1bmJHVWdabkp2YlNCdmNtbG5hVzVjYmlBZ0lDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklFUnBjM1JoYm1ObElHWnliMjBnYjNKcFoybHVYRzRnSUNBZ1FISmxkSFZ5YmlCYmIySnFaV04wWFRvZ1EyRnNZM1ZzWVhSbFpDQXlSQ0J3YjJsdWRGeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQndiMmx1ZEVaeWIyMUJibWRzWlVGdVpFUnBjM1JoYm1ObElEMGdLRzl5YVdkcGJpd2dZVzVuYkdVc0lHUnBjM1JoYm1ObEtTQTlQaUI3WEc0Z0lDQWdZVzVuYkdVZ1BTQmtaV2R5WldWelZHOVNZV1JwWVc1ektHRnVaMnhsS1R0Y2JseHVJQ0FnSUhKbGRIVnliaUI3WEc0Z0lDQWdJQ0FnSUhnNklHUnBjM1JoYm1ObElDb2dUV0YwYUM1amIzTW9ZVzVuYkdVcElDc2diM0pwWjJsdUxuZ3NYRzRnSUNBZ0lDQWdJSGs2SUdScGMzUmhibU5sSUNvZ1RXRjBhQzV6YVc0b1lXNW5iR1VwSUNzZ2IzSnBaMmx1TG5sY2JpQWdJQ0I5TzF4dWZUdGNibHh1THlwY2JpQWdJQ0JEYjI1MlpYSjBJSEpoWkdsaGJuTWdkRzhnWkdWbmNtVmxjMXh1SUNBZ0lGeHVJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVm1Gc2RXVWdhVzRnY21Ga2FXRnVjMXh1SUNBZ0lFQnlaWFIxY200Z1cyNTFiV0psY2wwNklGWmhiSFZsSUdsdUlHUmxaM0psWlhOY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2NtRmthV0Z1YzFSdlJHVm5jbVZsY3lBOUlDaHlZV1JwWVc1ektTQTlQaUJ5WVdScFlXNXpJQ29nTVRnd0lDOGdUV0YwYUM1UVNUdGNibHh1THlwY2JpQWdJQ0JTWlhSMWNtNGdjbUZ1Wkc5dElHNTFiV0psY2lCaVpYUjNaV1Z1SUhKaGJtZGxYRzRnSUNBZ1hHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRJQ2h2Y0hScGIyNWhiQ2s2SUU5MWRIQjFkQ0J0YVc1cGJYVnRYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkSUNodmNIUnBiMjVoYkNrNklFOTFkSEIxZENCdFlYaHBiWFZ0WEc0Z0lDQWdRSEpsZEhWeWJpQmJiblZ0WW1WeVhUb2dVbUZ1Wkc5dElHNTFiV0psY2lCM2FYUm9hVzRnY21GdVoyVXNJRzl5SURBZ1lXNWtJREVnYVdZZ2JtOXVaU0J3Y205MmFXUmxaRnh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0J5WVc1a2IyMGdQU0FvYldsdUlEMGdNQ3dnYldGNElEMGdNU2tnUFQ0Z1RXRjBhQzV5WVc1a2IyMG9LU0FxSUNodFlYZ2dMU0J0YVc0cElDc2diV2x1TzF4dVhHNHZLbHh1SUNBZ0lFTmhiR04xYkdGMFpTQnlaV3hoZEdsMlpTQjJZV3gxWlZ4dUlDQWdJRnh1SUNBZ0lGUmhhMlZ6SUhSb1pTQnZjR1Z5WVhSdmNpQmhibVFnZG1Gc2RXVWdabkp2YlNCaElITjBjbWx1Wnl3Z2FXVWdYQ0lyUFRWY0lpd2dZVzVrSUdGd2NHeHBaWE5jYmlBZ0lDQjBieUIwYUdVZ1kzVnljbVZ1ZENCMllXeDFaU0IwYnlCeVpYTnZiSFpsSUdFZ2JtVjNJSFJoY21kbGRDNWNiaUFnSUNCY2JpQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRU4xY25KbGJuUWdkbUZzZFdWY2JpQWdJQ0JBY0dGeVlXMGdXM04wY21sdVoxMDZJRkpsYkdGMGFYWmxJSFpoYkhWbFhHNGdJQ0FnUUhKbGRIVnliaUJiYm5WdFltVnlYVG9nVG1WM0lIWmhiSFZsWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUhKbGJHRjBhWFpsVm1Gc2RXVWdQU0FvWTNWeWNtVnVkQ3dnY21Wc1lYUnBkbVVwSUQwK0lIdGNiaUFnSUNCc1pYUWdibVYzVm1Gc2RXVWdQU0JqZFhKeVpXNTBPMXh1SUNBZ0lHTnZibk4wSUdWeGRXRjBhVzl1SUQwZ2NtVnNZWFJwZG1VdWMzQnNhWFFvSnowbktUdGNiaUFnSUNCamIyNXpkQ0J2Y0dWeVlYUnZjaUE5SUdWeGRXRjBhVzl1V3pCZE8xeHVJQ0FnSUd4bGRDQjdJSFZ1YVhRc0lIWmhiSFZsSUgwZ1BTQnpjR3hwZEZaaGJIVmxWVzVwZENobGNYVmhkR2x2YmxzeFhTazdYRzVjYmlBZ0lDQjJZV3gxWlNBOUlIQmhjbk5sUm14dllYUW9kbUZzZFdVcE8xeHVYRzRnSUNBZ2MzZHBkR05vSUNodmNHVnlZWFJ2Y2lrZ2UxeHVJQ0FnSUNBZ0lDQmpZWE5sSUNjckp6cGNiaUFnSUNBZ0lDQWdJQ0FnSUc1bGQxWmhiSFZsSUNzOUlIWmhiSFZsTzF4dUlDQWdJQ0FnSUNBZ0lDQWdZbkpsWVdzN1hHNGdJQ0FnSUNBZ0lHTmhjMlVnSnkwbk9seHVJQ0FnSUNBZ0lDQWdJQ0FnYm1WM1ZtRnNkV1VnTFQwZ2RtRnNkV1U3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmljbVZoYXp0Y2JpQWdJQ0FnSUNBZ1kyRnpaU0FuS2ljNlhHNGdJQ0FnSUNBZ0lDQWdJQ0J1WlhkV1lXeDFaU0FxUFNCMllXeDFaVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHSnlaV0ZyTzF4dUlDQWdJQ0FnSUNCallYTmxJQ2N2SnpwY2JpQWdJQ0FnSUNBZ0lDQWdJRzVsZDFaaGJIVmxJQzg5SUhaaGJIVmxPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1luSmxZV3M3WEc0Z0lDQWdmVnh1SUNBZ0lGeHVJQ0FnSUdsbUlDaDFibWwwS1NCN1hHNGdJQ0FnSUNBZ0lHNWxkMVpoYkhWbElDczlJSFZ1YVhRN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnY21WMGRYSnVJRzVsZDFaaGJIVmxPMXh1ZlR0Y2JseHVMeXBjYmlBZ0lDQlNaWE4wY21samRDQjJZV3gxWlNCMGJ5QnlZVzVuWlZ4dUlDQWdJRnh1SUNBZ0lGSmxkSFZ5YmlCMllXeDFaU0IzYVhSb2FXNGdkR2hsSUhKaGJtZGxJRzltSUd4dmQyVnlUR2x0YVhRZ1lXNWtJSFZ3Y0dWeVRHbHRhWFJjYmlBZ0lDQmNiaUFnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUZaaGJIVmxJSFJ2SUd0bFpYQWdkMmwwYUdsdUlISmhibWRsWEc0Z0lDQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQk1iM2RsY2lCc2FXMXBkQ0J2WmlCeVlXNW5aVnh1SUNBZ0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1ZYQndaWElnYkdsdGFYUWdiMllnY21GdVoyVmNiaUFnSUNCQWNtVjBkWEp1SUZ0dWRXMWlaWEpkT2lCV1lXeDFaU0JoY3lCc2FXMXBkR1ZrSUhkcGRHaHBiaUJuYVhabGJpQnlZVzVuWlZ4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCeVpYTjBjbWxqZENBOUlDaDJZV3gxWlN3Z2JXbHVMQ0J0WVhncElEMCtJRTFoZEdndWJXRjRLRTFoZEdndWJXbHVLSFpoYkhWbExDQnRZWGdwTENCdGFXNHBPMXh1WEc0dktseHVJQ0FnSUVaeVlXMWxjbUYwWlMxcGJtUmxjR1Z1WkdWdWRDQnpiVzl2ZEdocGJtZGNibHh1SUNBZ0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1RtVjNJSFpoYkhWbFhHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJQYkdRZ2RtRnNkV1ZjYmlBZ0lDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklFWnlZVzFsSUdSMWNtRjBhVzl1WEc0Z0lDQWdRSEJoY21GdElGdHVkVzFpWlhKZElDaHZjSFJwYjI1aGJDazZJRk50YjI5MGFHbHVaeUFvTUNCcGN5QnViMjVsS1Z4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCemJXOXZkR2dnUFNBb2JtVjNWbUZzZFdVc0lHOXNaRlpoYkhWbExDQmtkWEpoZEdsdmJpd2djMjF2YjNSb2FXNW5JRDBnTUNrZ1BUNGdkRzlFWldOcGJXRnNLRzlzWkZaaGJIVmxJQ3NnS0dSMWNtRjBhVzl1SUNvZ0tHNWxkMVpoYkhWbElDMGdiMnhrVm1Gc2RXVXBJQzhnVFdGMGFDNXRZWGdvYzIxdmIzUm9hVzVuTENCa2RYSmhkR2x2YmlrcEtUdGNibHh1THlwY2JpQWdJQ0JEYjI1MlpYSjBJSGdnY0dWeUlITmxZMjl1WkNCMGJ5QndaWElnWm5KaGJXVWdkbVZzYjJOcGRIa2dZbUZ6WldRZ2IyNGdabkJ6WEc0Z0lDQWdYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCVmJtbDBJSEJsY2lCelpXTnZibVJjYmlBZ0lDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklFWnlZVzFsSUdSMWNtRjBhVzl1SUdsdUlHMXpYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJSE53WldWa1VHVnlSbkpoYldVZ1BTQW9lSEJ6TENCbWNtRnRaVVIxY21GMGFXOXVLU0E5UGlBb2FYTk9kVzBvZUhCektTa2dQeUI0Y0hNZ0x5QW9NVEF3TUNBdklHWnlZVzFsUkhWeVlYUnBiMjRwSURvZ01EdGNibHh1THlwY2JpQWdJQ0JEYjI1MlpYSjBJSFpsYkc5amFYUjVJR2x1ZEc4Z2RtVnNhV05wZEhrZ2NHVnlJSE5sWTI5dVpGeHVJQ0FnSUZ4dUlDQWdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dWVzVwZENCd1pYSWdabkpoYldWY2JpQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRVp5WVcxbElHUjFjbUYwYVc5dUlHbHVJRzF6WEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUhOd1pXVmtVR1Z5VTJWamIyNWtJRDBnS0habGJHOWphWFI1TENCbWNtRnRaVVIxY21GMGFXOXVLU0E5UGlCMlpXeHZZMmwwZVNBcUlDZ3hNREF3SUM4Z1puSmhiV1ZFZFhKaGRHbHZiaWs3WEc1Y2JpOHFYRzRnSUNBZ1EzSmxZWFJsSUhOMFpYQndaV1FnZG1WeWMybHZiaUJ2WmlBd0xURWdjSEp2WjNKbGMzTmNiaUFnSUNCY2JpQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRU4xY25KbGJuUWdkbUZzZFdWY2JpQWdJQ0JBY0dGeVlXMGdXMmx1ZEYwNklFNTFiV0psY2lCdlppQnpkR1Z3YzF4dUlDQWdJRUJ5WlhSMWNtNGdXMjUxYldKbGNsMDZJRk4wWlhCd1pXUWdkbUZzZFdWY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2MzUmxjRkJ5YjJkeVpYTnpJRDBnS0hCeWIyZHlaWE56TENCemRHVndjeWtnUFQ0Z2UxeHVJQ0FnSUdOdmJuTjBJSE5sWjIxbGJuUWdQU0F4SUM4Z0tITjBaWEJ6SUMwZ01TazdYRzRnSUNBZ1kyOXVjM1FnZEdGeVoyVjBJRDBnTVNBdElDZ3hJQzhnYzNSbGNITXBPMXh1SUNBZ0lHTnZibk4wSUhCeWIyZHlaWE56VDJaVVlYSm5aWFFnUFNCTllYUm9MbTFwYmlod2NtOW5jbVZ6Y3lBdklIUmhjbWRsZEN3Z01TazdYRzVjYmlBZ0lDQnlaWFIxY200Z1RXRjBhQzVtYkc5dmNpaHdjbTluY21WemMwOW1WR0Z5WjJWMElDOGdjMlZuYldWdWRDa2dLaUJ6WldkdFpXNTBPMXh1ZlRzaVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi91aS1jYWxjL2xpYi9lbnRyeS5qc1xuICoqIG1vZHVsZSBpZCA9IDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZUVhc2luZztcblxudmFyIF9CZXppZXIgPSByZXF1aXJlKCcuL0JlemllcicpO1xuXG52YXIgX0JlemllcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9CZXppZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKlxuICAgIE1pcnJvciBlYXNpbmdcbiAgICBcbiAgICBNaXJyb3JzIHRoZSBwcm92aWRlZCBlYXNpbmcgZnVuY3Rpb24sIHVzZWQgaGVyZSBmb3IgbWlycm9yaW5nIGFuXG4gICAgZWFzZUluIGludG8gYW4gZWFzZUluT3V0XG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBQcm9ncmVzcywgZnJvbSAwIC0gMSwgb2YgY3VycmVudCBzaGlmdFxuICAgIEBwYXJhbSBbZnVuY3Rpb25dOiBUaGUgZWFzaW5nIGZ1bmN0aW9uIHRvIG1pcnJvclxuICAgIEByZXR1cm5zIFtudW1iZXJdOiBUaGUgZWFzaW5nLWFkanVzdGVkIGRlbHRhXG4qL1xudmFyIG1pcnJvckVhc2luZyA9IGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHByb2dyZXNzLCBzdHJlbmd0aCkge1xuICAgICAgICByZXR1cm4gcHJvZ3Jlc3MgPD0gMC41ID8gbWV0aG9kKDIgKiBwcm9ncmVzcywgc3RyZW5ndGgpIC8gMiA6ICgyIC0gbWV0aG9kKDIgKiAoMSAtIHByb2dyZXNzKSwgc3RyZW5ndGgpKSAvIDI7XG4gICAgfTtcbn07XG5cbi8qXG4gICAgUmV2ZXJzZSBlYXNpbmdcbiAgICBcbiAgICBSZXZlcnNlcyB0aGUgb3V0cHV0IG9mIHRoZSBwcm92aWRlZCBlYXNpbmcgZnVuY3Rpb24sIHVzZWQgZm9yIGZsaXBwaW5nIGVhc2VJblxuICAgIGN1cnZlIHRvIGFuIGVhc2VPdXQuXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBQcm9ncmVzcywgZnJvbSAwIC0gMSwgb2YgY3VycmVudCBzaGlmdFxuICAgIEBwYXJhbSBbZnVuY3Rpb25dOiBUaGUgZWFzaW5nIGZ1bmN0aW9uIHRvIHJldmVyc2VcbiAgICBAcmV0dXJucyBbbnVtYmVyXTogVGhlIGVhc2luZy1hZGp1c3RlZCBkZWx0YVxuKi9cbnZhciByZXZlcnNlRWFzaW5nID0gZnVuY3Rpb24gKG1ldGhvZCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAocHJvZ3Jlc3MsIHN0cmVuZ3RoKSB7XG4gICAgICAgIHJldHVybiAxIC0gbWV0aG9kKDEgLSBwcm9ncmVzcywgc3RyZW5ndGgpO1xuICAgIH07XG59O1xuXG4vKlxuICAgIEVhc2luZyBjbGFzc1xuXG4gICAgSWYgcHJvdmlkZWQgZWFzaW5nIGZ1bmN0aW9uLCByZXR1cm5zIGVhc2luZyBmdW5jdGlvbiB3aXRoIFxuICAgIGluL291dC9pbk91dCB2YXJpYXRpb25zXG5cbiAgICBJZiBwcm92aWRlZCBmb3VyIGFyZ3VtZW50cywgcmV0dXJucyBuZXcgQmV6aWVyIGNsYXNzIGluc3RlYWQuXG4qL1xuZnVuY3Rpb24gY3JlYXRlRWFzaW5nKHgxLCB5MSwgeDIsIHkyKSB7XG4gICAgdmFyIG1ldGhvZCA9IHgxO1xuICAgIHZhciBlYXNpbmdGdW5jdGlvbiA9IHVuZGVmaW5lZDtcblxuICAgIC8vIElmIHRoaXMgaXMgYSBiZXppZXIgY3VydmUsIHJldHVybiBhIGJlemllciBmdW5jdGlvblxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBlYXNpbmdGdW5jdGlvbiA9IG5ldyBfQmV6aWVyMi5kZWZhdWx0KHgxLCB5MSwgeDIsIHkyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBlYXNpbmdGdW5jdGlvbiA9IGZ1bmN0aW9uIChwcm9ncmVzcywgc3RyZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBtZXRob2QocHJvZ3Jlc3MsIHN0cmVuZ3RoKTtcbiAgICAgICAgfTtcbiAgICAgICAgZWFzaW5nRnVuY3Rpb24uaW4gPSBmdW5jdGlvbiAocHJvZ3Jlc3MsIHN0cmVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gbWV0aG9kKHByb2dyZXNzLCBzdHJlbmd0aCk7XG4gICAgICAgIH07XG4gICAgICAgIGVhc2luZ0Z1bmN0aW9uLm91dCA9IHJldmVyc2VFYXNpbmcobWV0aG9kKTtcbiAgICAgICAgZWFzaW5nRnVuY3Rpb24uaW5PdXQgPSBtaXJyb3JFYXNpbmcobWV0aG9kKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWFzaW5nRnVuY3Rpb247XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW1OeVpXRjBaUzFsWVhOcGJtY3Vhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3TzJ0Q1FXdERkMElzV1VGQldUczdPenM3T3pzN096czdPenM3T3pzN08wRkJkRUp3UXl4SlFVRk5MRmxCUVZrc1IwRkJSeXhWUVVGQkxFMUJRVTA3VjBGQlNTeFZRVUZETEZGQlFWRXNSVUZCUlN4UlFVRlJPMlZCUVVzc1FVRkJReXhSUVVGUkxFbEJRVWtzUjBGQlJ5eEhRVUZKTEUxQlFVMHNRMEZCUXl4RFFVRkRMRWRCUVVjc1VVRkJVU3hGUVVGRkxGRkJRVkVzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhOUVVGTkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4UlFVRlJMRU5CUVVFc1FVRkJReXhGUVVGRkxGRkJRVkVzUTBGQlF5eERRVUZCTEVkQlFVa3NRMEZCUXp0TFFVRkJPME5CUVVFN096czdPenM3T3pzN096dEJRVUZETEVGQldTOUtMRWxCUVUwc1lVRkJZU3hIUVVGSExGVkJRVUVzVFVGQlRUdFhRVUZKTEZWQlFVTXNVVUZCVVN4RlFVRkZMRkZCUVZFN1pVRkJTeXhEUVVGRExFZEJRVWNzVFVGQlRTeERRVUZETEVOQlFVTXNSMEZCUnl4UlFVRlJMRVZCUVVVc1VVRkJVU3hEUVVGRE8wdEJRVUU3UTBGQlFUczdPenM3T3pzN096dEJRVUZETEVGQlZUVkZMRk5CUVZNc1dVRkJXU3hEUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSVHRCUVVOc1JDeFJRVUZOTEUxQlFVMHNSMEZCUnl4RlFVRkZMRU5CUVVNN1FVRkRiRUlzVVVGQlNTeGpRVUZqTEZsQlFVRTdPenRCUVVGRExFRkJSMjVDTEZGQlFVa3NVMEZCVXl4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFVkJRVVU3UVVGRGRFSXNjMEpCUVdNc1IwRkJSeXh4UWtGQlZ5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF6dExRVVV2UXl4TlFVRk5PMEZCUTBnc2MwSkJRV01zUjBGQlJ5eFZRVUZETEZGQlFWRXNSVUZCUlN4UlFVRlJPMjFDUVVGTExFMUJRVTBzUTBGQlF5eFJRVUZSTEVWQlFVVXNVVUZCVVN4RFFVRkRPMU5CUVVFc1EwRkJRenRCUVVOd1JTeHpRa0ZCWXl4RFFVRkRMRVZCUVVVc1IwRkJSeXhWUVVGRExGRkJRVkVzUlVGQlJTeFJRVUZSTzIxQ1FVRkxMRTFCUVUwc1EwRkJReXhSUVVGUkxFVkJRVVVzVVVGQlVTeERRVUZETzFOQlFVRXNRMEZCUXp0QlFVTjJSU3h6UWtGQll5eERRVUZETEVkQlFVY3NSMEZCUnl4aFFVRmhMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03UVVGRE0wTXNjMEpCUVdNc1EwRkJReXhMUVVGTExFZEJRVWNzV1VGQldTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMHRCUXk5RE96dEJRVVZFTEZkQlFVOHNZMEZCWXl4RFFVRkRPME5CUTNwQ0lpd2labWxzWlNJNkltTnlaV0YwWlMxbFlYTnBibWN1YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ1FtVjZhV1Z5SUdaeWIyMGdKeTR2UW1WNmFXVnlKenRjYmx4dUx5cGNiaUFnSUNCTmFYSnliM0lnWldGemFXNW5YRzRnSUNBZ1hHNGdJQ0FnVFdseWNtOXljeUIwYUdVZ2NISnZkbWxrWldRZ1pXRnphVzVuSUdaMWJtTjBhVzl1TENCMWMyVmtJR2hsY21VZ1ptOXlJRzFwY25KdmNtbHVaeUJoYmx4dUlDQWdJR1ZoYzJWSmJpQnBiblJ2SUdGdUlHVmhjMlZKYms5MWRGeHVJQ0FnSUZ4dUlDQWdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dVSEp2WjNKbGMzTXNJR1p5YjIwZ01DQXRJREVzSUc5bUlHTjFjbkpsYm5RZ2MyaHBablJjYmlBZ0lDQkFjR0Z5WVcwZ1cyWjFibU4wYVc5dVhUb2dWR2hsSUdWaGMybHVaeUJtZFc1amRHbHZiaUIwYnlCdGFYSnliM0pjYmlBZ0lDQkFjbVYwZFhKdWN5QmJiblZ0WW1WeVhUb2dWR2hsSUdWaGMybHVaeTFoWkdwMWMzUmxaQ0JrWld4MFlWeHVLaTljYm1OdmJuTjBJRzFwY25KdmNrVmhjMmx1WnlBOUlHMWxkR2h2WkNBOVBpQW9jSEp2WjNKbGMzTXNJSE4wY21WdVozUm9LU0E5UGlBb2NISnZaM0psYzNNZ1BEMGdNQzQxS1NBL0lHMWxkR2h2WkNneUlDb2djSEp2WjNKbGMzTXNJSE4wY21WdVozUm9LU0F2SURJZ09pQW9NaUF0SUcxbGRHaHZaQ2d5SUNvZ0tERWdMU0J3Y205bmNtVnpjeWtzSUhOMGNtVnVaM1JvS1NrZ0x5QXlPMXh1SUNBZ0lDQWdJQ0JjYmk4cVhHNGdJQ0FnVW1WMlpYSnpaU0JsWVhOcGJtZGNiaUFnSUNCY2JpQWdJQ0JTWlhabGNuTmxjeUIwYUdVZ2IzVjBjSFYwSUc5bUlIUm9aU0J3Y205MmFXUmxaQ0JsWVhOcGJtY2dablZ1WTNScGIyNHNJSFZ6WldRZ1ptOXlJR1pzYVhCd2FXNW5JR1ZoYzJWSmJseHVJQ0FnSUdOMWNuWmxJSFJ2SUdGdUlHVmhjMlZQZFhRdVhHNGdJQ0FnWEc0Z0lDQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQlFjbTluY21WemN5d2dabkp2YlNBd0lDMGdNU3dnYjJZZ1kzVnljbVZ1ZENCemFHbG1kRnh1SUNBZ0lFQndZWEpoYlNCYlpuVnVZM1JwYjI1ZE9pQlVhR1VnWldGemFXNW5JR1oxYm1OMGFXOXVJSFJ2SUhKbGRtVnljMlZjYmlBZ0lDQkFjbVYwZFhKdWN5QmJiblZ0WW1WeVhUb2dWR2hsSUdWaGMybHVaeTFoWkdwMWMzUmxaQ0JrWld4MFlWeHVLaTljYm1OdmJuTjBJSEpsZG1WeWMyVkZZWE5wYm1jZ1BTQnRaWFJvYjJRZ1BUNGdLSEJ5YjJkeVpYTnpMQ0J6ZEhKbGJtZDBhQ2tnUFQ0Z01TQXRJRzFsZEdodlpDZ3hJQzBnY0hKdlozSmxjM01zSUhOMGNtVnVaM1JvS1R0Y2JseHVMeXBjYmlBZ0lDQkZZWE5wYm1jZ1kyeGhjM05jYmx4dUlDQWdJRWxtSUhCeWIzWnBaR1ZrSUdWaGMybHVaeUJtZFc1amRHbHZiaXdnY21WMGRYSnVjeUJsWVhOcGJtY2dablZ1WTNScGIyNGdkMmwwYUNCY2JpQWdJQ0JwYmk5dmRYUXZhVzVQZFhRZ2RtRnlhV0YwYVc5dWMxeHVYRzRnSUNBZ1NXWWdjSEp2ZG1sa1pXUWdabTkxY2lCaGNtZDFiV1Z1ZEhNc0lISmxkSFZ5Ym5NZ2JtVjNJRUpsZW1sbGNpQmpiR0Z6Y3lCcGJuTjBaV0ZrTGx4dUtpOWNibVY0Y0c5eWRDQmtaV1poZFd4MElHWjFibU4wYVc5dUlHTnlaV0YwWlVWaGMybHVaeUFvZURFc0lIa3hMQ0I0TWl3Z2VUSXBJSHRjYmlBZ0lDQmpiMjV6ZENCdFpYUm9iMlFnUFNCNE1UdGNiaUFnSUNCc1pYUWdaV0Z6YVc1blJuVnVZM1JwYjI0N1hHNWNiaUFnSUNBdkx5QkpaaUIwYUdseklHbHpJR0VnWW1WNmFXVnlJR04xY25abExDQnlaWFIxY200Z1lTQmlaWHBwWlhJZ1puVnVZM1JwYjI1Y2JpQWdJQ0JwWmlBb1lYSm5kVzFsYm5SekxteGxibWQwYUNBK0lERXBJSHRjYmlBZ0lDQWdJQ0FnWldGemFXNW5SblZ1WTNScGIyNGdQU0J1WlhjZ1FtVjZhV1Z5S0hneExDQjVNU3dnZURJc0lIa3lLVHRjYmx4dUlDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJR1ZoYzJsdVowWjFibU4wYVc5dUlEMGdLSEJ5YjJkeVpYTnpMQ0J6ZEhKbGJtZDBhQ2tnUFQ0Z2JXVjBhRzlrS0hCeWIyZHlaWE56TENCemRISmxibWQwYUNrN1hHNGdJQ0FnSUNBZ0lHVmhjMmx1WjBaMWJtTjBhVzl1TG1sdUlEMGdLSEJ5YjJkeVpYTnpMQ0J6ZEhKbGJtZDBhQ2tnUFQ0Z2JXVjBhRzlrS0hCeWIyZHlaWE56TENCemRISmxibWQwYUNrN1hHNGdJQ0FnSUNBZ0lHVmhjMmx1WjBaMWJtTjBhVzl1TG05MWRDQTlJSEpsZG1WeWMyVkZZWE5wYm1jb2JXVjBhRzlrS1R0Y2JpQWdJQ0FnSUNBZ1pXRnphVzVuUm5WdVkzUnBiMjR1YVc1UGRYUWdQU0J0YVhKeWIzSkZZWE5wYm1jb2JXVjBhRzlrS1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J5WlhSMWNtNGdaV0Z6YVc1blJuVnVZM1JwYjI0N1hHNTlYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy90d2Vlbi9jcmVhdGUtZWFzaW5nLmpzXG4gKiogbW9kdWxlIGlkID0gMTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5wdXNoID0gcHVzaDtcbmZ1bmN0aW9uIHB1c2goKSB7XG4gICAgdmFyIF9BcnJheSRwcm90b3R5cGUkcHVzaDtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgKF9BcnJheSRwcm90b3R5cGUkcHVzaCA9IEFycmF5LnByb3RvdHlwZS5wdXNoKS5jYWxsLmFwcGx5KF9BcnJheSRwcm90b3R5cGUkcHVzaCwgW3RoaXNdLmNvbmNhdChhcmdzKSk7XG5cbiAgICBpZiAodGhpcy5sZW5ndGggPj0gdGhpcy5fbWF4U2l6ZSkge1xuICAgICAgICB0aGlzLnNoaWZ0KCk7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OXBibU12WW5WbVptVnlMVzFsZEdodlpITXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3TzFGQlFXZENMRWxCUVVrc1IwRkJTaXhKUVVGSk8wRkJRV0lzVTBGQlV5eEpRVUZKTEVkQlFWVTdPenR6UTBGQlRpeEpRVUZKTzBGQlFVb3NXVUZCU1RzN08wRkJRM2hDTERaQ1FVRkJMRXRCUVVzc1EwRkJReXhUUVVGVExFTkJRVU1zU1VGQlNTeEZRVUZETEVsQlFVa3NUVUZCUVN4NVFrRkJReXhKUVVGSkxGTkJRVXNzU1VGQlNTeEZRVUZETEVOQlFVTTdPMEZCUlhwRExGRkJRVWtzU1VGQlNTeERRVUZETEUxQlFVMHNTVUZCU1N4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVGRk8wRkJRemxDTEZsQlFVa3NRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJRenRMUVVOb1FqdERRVU5LSWl3aVptbHNaU0k2SW1KMVptWmxjaTF0WlhSb2IyUnpMbXB6SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaVpYaHdiM0owSUdaMWJtTjBhVzl1SUhCMWMyZ29MaTR1WVhKbmN5a2dlMXh1SUNBZ0lFRnljbUY1TG5CeWIzUnZkSGx3WlM1d2RYTm9MbU5oYkd3b2RHaHBjeXdnTGk0dVlYSm5jeWs3WEc1Y2JpQWdJQ0JwWmlBb2RHaHBjeTVzWlc1bmRHZ2dQajBnZEdocGN5NWZiV0Y0VTJsNlpTa2dlMXh1SUNBZ0lDQWdJQ0IwYUdsekxuTm9hV1owS0NrN1hHNGdJQ0FnZlZ4dWZTSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdWktdXRpbHMvbGliL2luYy9idWZmZXItbWV0aG9kcy5qc1xuICoqIG1vZHVsZSBpZCA9IDExXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLnNldERpbGF0aW9uID0gZXhwb3J0cy5zZXRTdGVwcyA9IGV4cG9ydHMuUHJvY2VzcyA9IHVuZGVmaW5lZDtcblxudmFyIF9Qcm9jZXNzID0gcmVxdWlyZSgnLi9Qcm9jZXNzJyk7XG5cbnZhciBfUHJvY2VzczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Qcm9jZXNzKTtcblxudmFyIF9sb29wID0gcmVxdWlyZSgnLi9sb29wJyk7XG5cbnZhciBfdGltZXIgPSByZXF1aXJlKCcuL2luYy90aW1lcicpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLlByb2Nlc3MgPSBfUHJvY2VzczIuZGVmYXVsdDtcbmV4cG9ydHMuc2V0U3RlcHMgPSBfbG9vcC5zZXRTdGVwcztcbmV4cG9ydHMuc2V0RGlsYXRpb24gPSBfdGltZXIuc2V0RGlsYXRpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnlZeTltY21GdFpYTjVibU11YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3T3pzN096czdPMUZCU1ZNc1QwRkJUenRSUVVGRkxGRkJRVkVzVTBGSWFrSXNVVUZCVVR0UlFVZFhMRmRCUVZjc1ZVRkdPVUlzVjBGQlZ5SXNJbVpwYkdVaU9pSm1jbUZ0WlhONWJtTXVhbk1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnVUhKdlkyVnpjeUJtY205dElDY3VMMUJ5YjJObGMzTW5PMXh1YVcxd2IzSjBJSHNnYzJWMFUzUmxjSE1nZlNCbWNtOXRJQ2N1TDJ4dmIzQW5PMXh1YVcxd2IzSjBJSHNnYzJWMFJHbHNZWFJwYjI0Z2ZTQm1jbTl0SUNjdUwybHVZeTkwYVcxbGNpZGNibHh1Wlhod2IzSjBJSHNnVUhKdlkyVnpjeXdnYzJWMFUzUmxjSE1zSUhObGRFUnBiR0YwYVc5dUlIMDdJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZnJhbWVzeW5jL2xpYi9mcmFtZXN5bmMuanNcbiAqKiBtb2R1bGUgaWQgPSAxMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLypcbiAgICBCZXppZXIgZnVuY3Rpb24gZ2VuZXJhdG9yXG4gICAgICAgIFxuICAgIEdhw6t0YW4gUmVuYXVkZWF1J3MgQmV6aWVyRWFzaW5nXG4gICAgaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nL2Jsb2IvbWFzdGVyL2luZGV4LmpzICBcbiAgICBodHRwczovL2dpdGh1Yi5jb20vZ3JlL2Jlemllci1lYXNpbmcvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICAgIFlvdSdyZSBhIGhlcm9cbiAgICBcbiAgICBVc2VcbiAgICBcbiAgICAgICAgdmFyIGVhc2VPdXQgPSBuZXcgQmV6aWVyKC4xNywuNjcsLjgzLC42NyksXG4gICAgICAgICAgICB4ID0gZWFzZU91dCgwLjUpOyAvLyByZXR1cm5zIDAuNjI3Li4uXG4qL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBORVdUT05fSVRFUkFUSU9OUyA9IDgsXG4gICAgTkVXVE9OX01JTl9TTE9QRSA9IDAuMDAxLFxuICAgIFNVQkRJVklTSU9OX1BSRUNJU0lPTiA9IDAuMDAwMDAwMSxcbiAgICBTVUJESVZJU0lPTl9NQVhfSVRFUkFUSU9OUyA9IDEwLFxuICAgIEtfU1BMSU5FX1RBQkxFX1NJWkUgPSAxMSxcbiAgICBLX1NBTVBMRV9TVEVQX1NJWkUgPSAxLjAgLyAoS19TUExJTkVfVEFCTEVfU0laRSAtIDEuMCksXG4gICAgRkxPQVRfMzJfU1VQUE9SVEVEID0gdHlwZW9mIEZsb2F0MzJBcnJheSAhPT0gJ3VuZGVmaW5lZCcsXG4gICAgYSA9IGZ1bmN0aW9uIChhMSwgYTIpIHtcbiAgICByZXR1cm4gMS4wIC0gMy4wICogYTIgKyAzLjAgKiBhMTtcbn0sXG4gICAgYiA9IGZ1bmN0aW9uIChhMSwgYTIpIHtcbiAgICByZXR1cm4gMy4wICogYTIgLSA2LjAgKiBhMTtcbn0sXG4gICAgYyA9IGZ1bmN0aW9uIChhMSkge1xuICAgIHJldHVybiAzLjAgKiBhMTtcbn0sXG4gICAgZ2V0U2xvcGUgPSBmdW5jdGlvbiAodCwgYTEsIGEyKSB7XG4gICAgcmV0dXJuIDMuMCAqIGEoYTEsIGEyKSAqIHQgKiB0ICsgMi4wICogYihhMSwgYTIpICogdCArIGMoYTEpO1xufSxcbiAgICBjYWxjQmV6aWVyID0gZnVuY3Rpb24gKHQsIGExLCBhMikge1xuICAgIHJldHVybiAoKGEoYTEsIGEyKSAqIHQgKyBiKGExLCBhMikpICogdCArIGMoYTEpKSAqIHQ7XG59LFxuXG4vKlxuICAgIEJlemllciBjb25zdHJ1Y3RvclxuKi9cbkJlemllciA9IGZ1bmN0aW9uIChtWDEsIG1ZMSwgbVgyLCBtWTIpIHtcbiAgICB2YXIgc2FtcGxlVmFsdWVzID0gRkxPQVRfMzJfU1VQUE9SVEVEID8gbmV3IEZsb2F0MzJBcnJheShLX1NQTElORV9UQUJMRV9TSVpFKSA6IG5ldyBBcnJheShLX1NQTElORV9UQUJMRV9TSVpFKSxcbiAgICAgICAgX3ByZWNvbXB1dGVkID0gZmFsc2UsXG4gICAgICAgIGJpbmFyeVN1YmRpdmlkZSA9IGZ1bmN0aW9uIChhWCwgYUEsIGFCKSB7XG4gICAgICAgIHZhciBjdXJyZW50WCxcbiAgICAgICAgICAgIGN1cnJlbnRULFxuICAgICAgICAgICAgaSA9IDA7XG5cbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgY3VycmVudFQgPSBhQSArIChhQiAtIGFBKSAvIDIuMDtcbiAgICAgICAgICAgIGN1cnJlbnRYID0gY2FsY0JlemllcihjdXJyZW50VCwgbVgxLCBtWDIpIC0gYVg7XG4gICAgICAgICAgICBpZiAoY3VycmVudFggPiAwLjApIHtcbiAgICAgICAgICAgICAgICBhQiA9IGN1cnJlbnRUO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhQSA9IGN1cnJlbnRUO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IHdoaWxlIChNYXRoLmFicyhjdXJyZW50WCkgPiBTVUJESVZJU0lPTl9QUkVDSVNJT04gJiYgKytpIDwgU1VCRElWSVNJT05fTUFYX0lURVJBVElPTlMpO1xuXG4gICAgICAgIHJldHVybiBjdXJyZW50VDtcbiAgICB9LFxuICAgICAgICBuZXd0b25SYXBoc29uSXRlcmF0ZSA9IGZ1bmN0aW9uIChhWCwgYUd1ZXNzVCkge1xuICAgICAgICB2YXIgaSA9IDAsXG4gICAgICAgICAgICBjdXJyZW50U2xvcGUgPSAwLjAsXG4gICAgICAgICAgICBjdXJyZW50WDtcblxuICAgICAgICBmb3IgKDsgaSA8IE5FV1RPTl9JVEVSQVRJT05TOyArK2kpIHtcbiAgICAgICAgICAgIGN1cnJlbnRTbG9wZSA9IGdldFNsb3BlKGFHdWVzc1QsIG1YMSwgbVgyKTtcblxuICAgICAgICAgICAgaWYgKGN1cnJlbnRTbG9wZSA9PT0gMC4wKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFHdWVzc1Q7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGN1cnJlbnRYID0gY2FsY0JlemllcihhR3Vlc3NULCBtWDEsIG1YMikgLSBhWDtcbiAgICAgICAgICAgIGFHdWVzc1QgLT0gY3VycmVudFggLyBjdXJyZW50U2xvcGU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYUd1ZXNzVDtcbiAgICB9LFxuICAgICAgICBjYWxjU2FtcGxlVmFsdWVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IEtfU1BMSU5FX1RBQkxFX1NJWkU7ICsraSkge1xuICAgICAgICAgICAgc2FtcGxlVmFsdWVzW2ldID0gY2FsY0JlemllcihpICogS19TQU1QTEVfU1RFUF9TSVpFLCBtWDEsIG1YMik7XG4gICAgICAgIH1cbiAgICB9LFxuICAgICAgICBnZXRURm9yWCA9IGZ1bmN0aW9uIChhWCkge1xuICAgICAgICB2YXIgaW50ZXJ2YWxTdGFydCA9IDAuMCxcbiAgICAgICAgICAgIGN1cnJlbnRTYW1wbGUgPSAxLFxuICAgICAgICAgICAgbGFzdFNhbXBsZSA9IEtfU1BMSU5FX1RBQkxFX1NJWkUgLSAxLFxuICAgICAgICAgICAgZGlzdCA9IDAuMCxcbiAgICAgICAgICAgIGd1ZXNzRm9yVCA9IDAuMCxcbiAgICAgICAgICAgIGluaXRpYWxTbG9wZSA9IDAuMDtcblxuICAgICAgICBmb3IgKDsgY3VycmVudFNhbXBsZSAhPSBsYXN0U2FtcGxlICYmIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSA8PSBhWDsgKytjdXJyZW50U2FtcGxlKSB7XG4gICAgICAgICAgICBpbnRlcnZhbFN0YXJ0ICs9IEtfU0FNUExFX1NURVBfU0laRTtcbiAgICAgICAgfVxuXG4gICAgICAgIC0tY3VycmVudFNhbXBsZTtcblxuICAgICAgICBkaXN0ID0gKGFYIC0gc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdKSAvIChzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZSArIDFdIC0gc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdKTtcbiAgICAgICAgZ3Vlc3NGb3JUID0gaW50ZXJ2YWxTdGFydCArIGRpc3QgKiBLX1NBTVBMRV9TVEVQX1NJWkU7XG5cbiAgICAgICAgaW5pdGlhbFNsb3BlID0gZ2V0U2xvcGUoZ3Vlc3NGb3JULCBtWDEsIG1YMik7XG5cbiAgICAgICAgLy8gSWYgc2xvcGUgaXMgZ3JlYXRlciB0aGFuIG1pblxuICAgICAgICBpZiAoaW5pdGlhbFNsb3BlID49IE5FV1RPTl9NSU5fU0xPUEUpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXd0b25SYXBoc29uSXRlcmF0ZShhWCwgZ3Vlc3NGb3JUKTtcbiAgICAgICAgICAgIC8vIFNsb3BlIGlzIGVxdWFsIHRvIG1pblxuICAgICAgICB9IGVsc2UgaWYgKGluaXRpYWxTbG9wZSA9PT0gMC4wKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGd1ZXNzRm9yVDtcbiAgICAgICAgICAgICAgICAvLyBTbG9wZSBpcyBsZXNzIHRoYW4gbWluXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYmluYXJ5U3ViZGl2aWRlKGFYLCBpbnRlcnZhbFN0YXJ0LCBpbnRlcnZhbFN0YXJ0ICsgS19TQU1QTEVfU1RFUF9TSVpFKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgfSxcbiAgICAgICAgcHJlY29tcHV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3ByZWNvbXB1dGVkID0gdHJ1ZTtcbiAgICAgICAgaWYgKG1YMSAhPSBtWTEgfHwgbVgyICE9IG1ZMikge1xuICAgICAgICAgICAgY2FsY1NhbXBsZVZhbHVlcygpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIEdlbmVyYXRlZCBmdW5jdGlvblxuICAgICAgICBcbiAgICAgICAgUmV0dXJucyB2YWx1ZSAwLTEgYmFzZWQgb24gWFxuICAgICovXG4gICAgZiA9IGZ1bmN0aW9uIChhWCkge1xuICAgICAgICB2YXIgcmV0dXJuVmFsdWU7XG5cbiAgICAgICAgaWYgKCFfcHJlY29tcHV0ZWQpIHtcbiAgICAgICAgICAgIHByZWNvbXB1dGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIGxpbmVhciBncmFkaWVudCwgcmV0dXJuIFggYXMgVFxuICAgICAgICBpZiAobVgxID09PSBtWTEgJiYgbVgyID09PSBtWTIpIHtcbiAgICAgICAgICAgIHJldHVyblZhbHVlID0gYVg7XG5cbiAgICAgICAgICAgIC8vIElmIGF0IHN0YXJ0LCByZXR1cm4gMFxuICAgICAgICB9IGVsc2UgaWYgKGFYID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSAwO1xuXG4gICAgICAgICAgICAgICAgLy8gSWYgYXQgZW5kLCByZXR1cm4gMVxuICAgICAgICAgICAgfSBlbHNlIGlmIChhWCA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZSA9IDE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSBjYWxjQmV6aWVyKGdldFRGb3JYKGFYKSwgbVkxLCBtWTIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmV0dXJuVmFsdWU7XG4gICAgfTtcblxuICAgIHJldHVybiBmO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBCZXppZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWtKbGVtbGxjaTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPenM3T3pzN08wRkJZVUVzV1VGQldTeERRVUZET3p0QlFVVmlMRWxCUVVrc2FVSkJRV2xDTEVkQlFVY3NRMEZCUXp0SlFVTnlRaXhuUWtGQlowSXNSMEZCUnl4TFFVRkxPMGxCUTNoQ0xIRkNRVUZ4UWl4SFFVRkhMRk5CUVZNN1NVRkRha01zTUVKQlFUQkNMRWRCUVVjc1JVRkJSVHRKUVVNdlFpeHRRa0ZCYlVJc1IwRkJSeXhGUVVGRk8wbEJRM2hDTEd0Q1FVRnJRaXhIUVVGSExFZEJRVWNzU1VGQlNTeHRRa0ZCYlVJc1IwRkJSeXhIUVVGSExFTkJRVUVzUVVGQlF6dEpRVU4wUkN4clFrRkJhMElzUjBGQlNTeFBRVUZQTEZsQlFWa3NTMEZCU3l4WFFVRlhMRUZCUVVNN1NVRkZNVVFzUTBGQlF5eEhRVUZITEZWQlFWVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSVHRCUVVOc1FpeFhRVUZQTEVkQlFVY3NSMEZCUnl4SFFVRkhMRWRCUVVjc1JVRkJSU3hIUVVGSExFZEJRVWNzUjBGQlJ5eEZRVUZGTEVOQlFVTTdRMEZEY0VNN1NVRkZSQ3hEUVVGRExFZEJRVWNzVlVGQlZTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZPMEZCUTJ4Q0xGZEJRVThzUjBGQlJ5eEhRVUZITEVWQlFVVXNSMEZCUnl4SFFVRkhMRWRCUVVjc1JVRkJSU3hEUVVGRE8wTkJRemxDTzBsQlJVUXNRMEZCUXl4SFFVRkhMRlZCUVZVc1JVRkJSU3hGUVVGRk8wRkJRMlFzVjBGQlR5eEhRVUZITEVkQlFVY3NSVUZCUlN4RFFVRkRPME5CUTI1Q08wbEJSVVFzVVVGQlVTeEhRVUZITEZWQlFWVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVU3UVVGRE5VSXNWMEZCVHl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1EwRkRhRVU3U1VGRlJDeFZRVUZWTEVkQlFVY3NWVUZCVlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJUdEJRVU01UWl4WFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkJMRWRCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUVN4SFFVRkpMRU5CUVVNc1EwRkJRenREUVVONFJEczdPenM3UVVGTFJDeE5RVUZOTEVkQlFVY3NWVUZCVlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVTdRVUZEYmtNc1VVRkJTU3haUVVGWkxFZEJRVWNzYTBKQlFXdENMRWRCUVVjc1NVRkJTU3haUVVGWkxFTkJRVU1zYlVKQlFXMUNMRU5CUVVNc1IwRkJSeXhKUVVGSkxFdEJRVXNzUTBGQlF5eHRRa0ZCYlVJc1EwRkJRenRSUVVNeFJ5eFpRVUZaTEVkQlFVY3NTMEZCU3p0UlFVVndRaXhsUVVGbExFZEJRVWNzVlVGQlZTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSVHRCUVVOd1F5eFpRVUZKTEZGQlFWRTdXVUZCUlN4UlFVRlJPMWxCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6czdRVUZGT1VJc1YwRkJSenRCUVVORExHOUNRVUZSTEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzUTBGQlFTeEhRVUZKTEVkQlFVY3NRMEZCUXp0QlFVTm9ReXh2UWtGQlVTeEhRVUZITEZWQlFWVXNRMEZCUXl4UlFVRlJMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXp0QlFVTXZReXhuUWtGQlNTeFJRVUZSTEVkQlFVY3NSMEZCUnl4RlFVRkZPMEZCUTJoQ0xHdENRVUZGTEVkQlFVY3NVVUZCVVN4RFFVRkRPMkZCUTJwQ0xFMUJRVTA3UVVGRFNDeHJRa0ZCUlN4SFFVRkhMRkZCUVZFc1EwRkJRenRoUVVOcVFqdFRRVU5LTEZGQlFWRXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhSUVVGUkxFTkJRVU1zUjBGQlJ5eHhRa0ZCY1VJc1NVRkJTU3hGUVVGRkxFTkJRVU1zUjBGQlJ5d3dRa0ZCTUVJc1JVRkJSVHM3UVVGRmVrWXNaVUZCVHl4UlFVRlJMRU5CUVVNN1MwRkRia0k3VVVGRlJDeHZRa0ZCYjBJc1IwRkJSeXhWUVVGVkxFVkJRVVVzUlVGQlJTeFBRVUZQTEVWQlFVVTdRVUZETVVNc1dVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF6dFpRVU5NTEZsQlFWa3NSMEZCUnl4SFFVRkhPMWxCUTJ4Q0xGRkJRVkVzUTBGQlF6czdRVUZGWWl4bFFVRlBMRU5CUVVNc1IwRkJSeXhwUWtGQmFVSXNSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSVHRCUVVNdlFpeDNRa0ZCV1N4SFFVRkhMRkZCUVZFc1EwRkJReXhQUVVGUExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRPenRCUVVVelF5eG5Ra0ZCU1N4WlFVRlpMRXRCUVVzc1IwRkJSeXhGUVVGRk8wRkJRM1JDTEhWQ1FVRlBMRTlCUVU4c1EwRkJRenRoUVVOc1FqczdRVUZGUkN4dlFrRkJVU3hIUVVGSExGVkJRVlVzUTBGQlF5eFBRVUZQTEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF6dEJRVU01UXl4dFFrRkJUeXhKUVVGSkxGRkJRVkVzUjBGQlJ5eFpRVUZaTEVOQlFVTTdVMEZEZEVNN08wRkJSVVFzWlVGQlR5eFBRVUZQTEVOQlFVTTdTMEZEYkVJN1VVRkhSQ3huUWtGQlowSXNSMEZCUnl4WlFVRlpPMEZCUXpOQ0xHRkJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXh0UWtGQmJVSXNSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSVHRCUVVNeFF5eDNRa0ZCV1N4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExGVkJRVlVzUTBGQlF5eERRVUZETEVkQlFVY3NhMEpCUVd0Q0xFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRPMU5CUTJ4Rk8wdEJRMG83VVVGSFJDeFJRVUZSTEVkQlFVY3NWVUZCVlN4RlFVRkZMRVZCUVVVN1FVRkRja0lzV1VGQlNTeGhRVUZoTEVkQlFVY3NSMEZCUnp0WlFVTnVRaXhoUVVGaExFZEJRVWNzUTBGQlF6dFpRVU5xUWl4VlFVRlZMRWRCUVVjc2JVSkJRVzFDTEVkQlFVY3NRMEZCUXp0WlFVTndReXhKUVVGSkxFZEJRVWNzUjBGQlJ6dFpRVU5XTEZOQlFWTXNSMEZCUnl4SFFVRkhPMWxCUTJZc1dVRkJXU3hIUVVGSExFZEJRVWNzUTBGQlF6czdRVUZGZGtJc1pVRkJUeXhoUVVGaExFbEJRVWtzVlVGQlZTeEpRVUZKTEZsQlFWa3NRMEZCUXl4aFFVRmhMRU5CUVVNc1NVRkJTU3hGUVVGRkxFVkJRVVVzUlVGQlJTeGhRVUZoTEVWQlFVVTdRVUZEZEVZc2VVSkJRV0VzU1VGQlNTeHJRa0ZCYTBJc1EwRkJRenRUUVVOMlF6czdRVUZGUkN4VlFVRkZMR0ZCUVdFc1EwRkJRenM3UVVGRmFFSXNXVUZCU1N4SFFVRkhMRU5CUVVNc1JVRkJSU3hIUVVGSExGbEJRVmtzUTBGQlF5eGhRVUZoTEVOQlFVTXNRMEZCUVN4SlFVRkxMRmxCUVZrc1EwRkJReXhoUVVGaExFZEJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NXVUZCV1N4RFFVRkRMR0ZCUVdFc1EwRkJReXhEUVVGQkxFRkJRVU1zUTBGQlF6dEJRVU14Unl4cFFrRkJVeXhIUVVGSExHRkJRV0VzUjBGQlJ5eEpRVUZKTEVkQlFVY3NhMEpCUVd0Q0xFTkJRVU03TzBGQlJYUkVMRzlDUVVGWkxFZEJRVWNzVVVGQlVTeERRVUZETEZOQlFWTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRE96czdRVUZCUXl4QlFVYzNReXhaUVVGSkxGbEJRVmtzU1VGQlNTeG5Ra0ZCWjBJc1JVRkJSVHRCUVVOc1F5eHRRa0ZCVHl4dlFrRkJiMElzUTBGQlF5eEZRVUZGTEVWQlFVVXNVMEZCVXl4RFFVRkRPenRCUVVGRExGTkJSVGxETEUxQlFVMHNTVUZCU1N4WlFVRlpMRXRCUVVzc1IwRkJSeXhGUVVGRk8wRkJRemRDTEhWQ1FVRlBMRk5CUVZNN08wRkJRVU1zWVVGRmNFSXNUVUZCVFR0QlFVTklMREpDUVVGUExHVkJRV1VzUTBGQlF5eEZRVUZGTEVWQlFVVXNZVUZCWVN4RlFVRkZMR0ZCUVdFc1IwRkJSeXhyUWtGQmEwSXNRMEZCUXl4RFFVRkRPMmxDUVVOcVJqdExRVU5LTzFGQlJVUXNWVUZCVlN4SFFVRkhMRmxCUVZrN1FVRkRja0lzYjBKQlFWa3NSMEZCUnl4SlFVRkpMRU5CUVVNN1FVRkRjRUlzV1VGQlNTeEhRVUZITEVsQlFVa3NSMEZCUnl4SlFVRkpMRWRCUVVjc1NVRkJTU3hIUVVGSExFVkJRVVU3UVVGRE1VSXNORUpCUVdkQ0xFVkJRVVVzUTBGQlF6dFRRVU4wUWp0TFFVTktPenM3T3pzN08wRkJUMFFzUzBGQlF5eEhRVUZITEZWQlFWVXNSVUZCUlN4RlFVRkZPMEZCUTJRc1dVRkJTU3hYUVVGWExFTkJRVU03TzBGQlJXaENMRmxCUVVrc1EwRkJReXhaUVVGWkxFVkJRVVU3UVVGRFppeHpRa0ZCVlN4RlFVRkZMRU5CUVVNN1UwRkRhRUk3T3p0QlFVRkJMRUZCUjBRc1dVRkJTU3hIUVVGSExFdEJRVXNzUjBGQlJ5eEpRVUZKTEVkQlFVY3NTMEZCU3l4SFFVRkhMRVZCUVVVN1FVRkROVUlzZFVKQlFWY3NSMEZCUnl4RlFVRkZPenM3UVVGQlF5eFRRVWR3UWl4TlFVRk5MRWxCUVVrc1JVRkJSU3hMUVVGTExFTkJRVU1zUlVGQlJUdEJRVU5xUWl3eVFrRkJWeXhIUVVGSExFTkJRVU03T3p0QlFVRkRMR0ZCUjI1Q0xFMUJRVTBzU1VGQlNTeEZRVUZGTEV0QlFVc3NRMEZCUXl4RlFVRkZPMEZCUTJwQ0xDdENRVUZYTEVkQlFVY3NRMEZCUXl4RFFVRkRPMmxDUVVWdVFpeE5RVUZOTzBGQlEwZ3NLMEpCUVZjc1IwRkJSeXhWUVVGVkxFTkJRVU1zVVVGQlVTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF6dHBRa0ZEY0VRN08wRkJSVVFzWlVGQlR5eFhRVUZYTEVOQlFVTTdTMEZEZEVJc1EwRkJRenM3UVVGRlJpeFhRVUZQTEVOQlFVTXNRMEZCUXp0RFFVTm9RaXhEUVVGRE96dEJRVVZPTEUxQlFVMHNRMEZCUXl4UFFVRlBMRWRCUVVjc1RVRkJUU3hEUVVGRElpd2labWxzWlNJNklrSmxlbWxsY2k1cWN5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaThxWEc0Z0lDQWdRbVY2YVdWeUlHWjFibU4wYVc5dUlHZGxibVZ5WVhSdmNseHVJQ0FnSUNBZ0lDQmNiaUFnSUNCSFljT3JkR0Z1SUZKbGJtRjFaR1ZoZFNkeklFSmxlbWxsY2tWaGMybHVaMXh1SUNBZ0lHaDBkSEJ6T2k4dloybDBhSFZpTG1OdmJTOW5jbVV2WW1WNmFXVnlMV1ZoYzJsdVp5OWliRzlpTDIxaGMzUmxjaTlwYm1SbGVDNXFjeUFnWEc0Z0lDQWdhSFIwY0hNNkx5OW5hWFJvZFdJdVkyOXRMMmR5WlM5aVpYcHBaWEl0WldGemFXNW5MMkpzYjJJdmJXRnpkR1Z5TDB4SlEwVk9VMFZjYmlBZ0lDQlpiM1VuY21VZ1lTQm9aWEp2WEc0Z0lDQWdYRzRnSUNBZ1ZYTmxYRzRnSUNBZ1hHNGdJQ0FnSUNBZ0lIWmhjaUJsWVhObFQzVjBJRDBnYm1WM0lFSmxlbWxsY2lndU1UY3NMalkzTEM0NE15d3VOamNwTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdlQ0E5SUdWaGMyVlBkWFFvTUM0MUtUc2dMeThnY21WMGRYSnVjeUF3TGpZeU55NHVMbHh1S2k5Y2Jsd2lkWE5sSUhOMGNtbGpkRndpTzF4dVhHNTJZWElnVGtWWFZFOU9YMGxVUlZKQlZFbFBUbE1nUFNBNExGeHVJQ0FnSUU1RlYxUlBUbDlOU1U1ZlUweFBVRVVnUFNBd0xqQXdNU3hjYmlBZ0lDQlRWVUpFU1ZaSlUwbFBUbDlRVWtWRFNWTkpUMDRnUFNBd0xqQXdNREF3TURFc1hHNGdJQ0FnVTFWQ1JFbFdTVk5KVDA1ZlRVRllYMGxVUlZKQlZFbFBUbE1nUFNBeE1DeGNiaUFnSUNCTFgxTlFURWxPUlY5VVFVSk1SVjlUU1ZwRklEMGdNVEVzWEc0Z0lDQWdTMTlUUVUxUVRFVmZVMVJGVUY5VFNWcEZJRDBnTVM0d0lDOGdLRXRmVTFCTVNVNUZYMVJCUWt4RlgxTkpXa1VnTFNBeExqQXBMRnh1SUNBZ0lFWk1UMEZVWHpNeVgxTlZVRkJQVWxSRlJDQTlJQ2gwZVhCbGIyWWdSbXh2WVhRek1rRnljbUY1SUNFOVBTQW5kVzVrWldacGJtVmtKeWtzWEc0Z0lDQWdYRzRnSUNBZ1lTQTlJR1oxYm1OMGFXOXVJQ2hoTVN3Z1lUSXBJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJREV1TUNBdElETXVNQ0FxSUdFeUlDc2dNeTR3SUNvZ1lURTdYRzRnSUNBZ2ZTeGNiaUFnSUNCY2JpQWdJQ0JpSUQwZ1puVnVZM1JwYjI0Z0tHRXhMQ0JoTWlrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z015NHdJQ29nWVRJZ0xTQTJMakFnS2lCaE1UdGNiaUFnSUNCOUxGeHVJQ0FnSUZ4dUlDQWdJR01nUFNCbWRXNWpkR2x2YmlBb1lURXBJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJRE11TUNBcUlHRXhPMXh1SUNBZ0lIMHNYRzVjYmlBZ0lDQm5aWFJUYkc5d1pTQTlJR1oxYm1OMGFXOXVJQ2gwTENCaE1Td2dZVElwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SURNdU1DQXFJR0VvWVRFc0lHRXlLU0FxSUhRZ0tpQjBJQ3NnTWk0d0lDb2dZaWhoTVN3Z1lUSXBJQ29nZENBcklHTW9ZVEVwTzF4dUlDQWdJSDBzWEc1Y2JpQWdJQ0JqWVd4alFtVjZhV1Z5SUQwZ1puVnVZM1JwYjI0Z0tIUXNJR0V4TENCaE1pa2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdLQ2hoS0dFeExDQmhNaWtnS2lCMElDc2dZaWhoTVN3Z1lUSXBLU0FxSUhRZ0t5QmpLR0V4S1NrZ0tpQjBPMXh1SUNBZ0lIMHNYRzRnSUNBZ1hHNGdJQ0FnTHlwY2JpQWdJQ0FnSUNBZ1FtVjZhV1Z5SUdOdmJuTjBjblZqZEc5eVhHNGdJQ0FnS2k5Y2JpQWdJQ0JDWlhwcFpYSWdQU0JtZFc1amRHbHZiaUFvYlZneExDQnRXVEVzSUcxWU1pd2diVmt5S1NCN1hHNGdJQ0FnSUNBZ0lIWmhjaUJ6WVcxd2JHVldZV3gxWlhNZ1BTQkdURTlCVkY4ek1sOVRWVkJRVDFKVVJVUWdQeUJ1WlhjZ1JteHZZWFF6TWtGeWNtRjVLRXRmVTFCTVNVNUZYMVJCUWt4RlgxTkpXa1VwSURvZ2JtVjNJRUZ5Y21GNUtFdGZVMUJNU1U1RlgxUkJRa3hGWDFOSldrVXBMRnh1SUNBZ0lDQWdJQ0FnSUNBZ1gzQnlaV052YlhCMWRHVmtJRDBnWm1Gc2MyVXNYRzRnSUNBZ1hHNGdJQ0FnSUNBZ0lDQWdJQ0JpYVc1aGNubFRkV0prYVhacFpHVWdQU0JtZFc1amRHbHZiaUFvWVZnc0lHRkJMQ0JoUWlrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIWmhjaUJqZFhKeVpXNTBXQ3dnWTNWeWNtVnVkRlFzSUdrZ1BTQXdPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWkc4Z2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqZFhKeVpXNTBWQ0E5SUdGQklDc2dLR0ZDSUMwZ1lVRXBJQzhnTWk0d08xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqZFhKeVpXNTBXQ0E5SUdOaGJHTkNaWHBwWlhJb1kzVnljbVZ1ZEZRc0lHMVlNU3dnYlZneUtTQXRJR0ZZTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvWTNWeWNtVnVkRmdnUGlBd0xqQXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR0ZDSUQwZ1kzVnljbVZ1ZEZRN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmhRU0E5SUdOMWNuSmxiblJVTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmU0IzYUdsc1pTQW9UV0YwYUM1aFluTW9ZM1Z5Y21WdWRGZ3BJRDRnVTFWQ1JFbFdTVk5KVDA1ZlVGSkZRMGxUU1U5T0lDWW1JQ3NyYVNBOElGTlZRa1JKVmtsVFNVOU9YMDFCV0Y5SlZFVlNRVlJKVDA1VEtUdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQmpkWEp5Wlc1MFZEdGNiaUFnSUNBZ0lDQWdJQ0FnSUgwc1hHNGdJQ0FnSUNBZ0lGeHVJQ0FnSUNBZ0lDQWdJQ0FnYm1WM2RHOXVVbUZ3YUhOdmJrbDBaWEpoZEdVZ1BTQm1kVzVqZEdsdmJpQW9ZVmdzSUdGSGRXVnpjMVFwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMllYSWdhU0E5SURBc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR04xY25KbGJuUlRiRzl3WlNBOUlEQXVNQ3hjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kzVnljbVZ1ZEZnN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1ptOXlJQ2c3SUdrZ1BDQk9SVmRVVDA1ZlNWUkZVa0ZVU1U5T1V6c2dLeXRwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR04xY25KbGJuUlRiRzl3WlNBOUlHZGxkRk5zYjNCbEtHRkhkV1Z6YzFRc0lHMVlNU3dnYlZneUtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2hqZFhKeVpXNTBVMnh2Y0dVZ1BUMDlJREF1TUNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUdGSGRXVnpjMVE3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTjFjbkpsYm5SWUlEMGdZMkZzWTBKbGVtbGxjaWhoUjNWbGMzTlVMQ0J0V0RFc0lHMVlNaWtnTFNCaFdEdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWVVkMVpYTnpWQ0F0UFNCamRYSnlaVzUwV0NBdklHTjFjbkpsYm5SVGJHOXdaVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJR0ZIZFdWemMxUTdYRzRnSUNBZ0lDQWdJQ0FnSUNCOUxGeHVJQ0FnSUNBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdJQ0FnSUdOaGJHTlRZVzF3YkdWV1lXeDFaWE1nUFNCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdabTl5SUNoMllYSWdhU0E5SURBN0lHa2dQQ0JMWDFOUVRFbE9SVjlVUVVKTVJWOVRTVnBGT3lBcksya3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2MyRnRjR3hsVm1Gc2RXVnpXMmxkSUQwZ1kyRnNZMEpsZW1sbGNpaHBJQ29nUzE5VFFVMVFURVZmVTFSRlVGOVRTVnBGTENCdFdERXNJRzFZTWlrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnZlN4Y2JpQWdJQ0FnSUNBZ0lDQWdJRnh1SUNBZ0lDQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lDQWdJQ0JuWlhSVVJtOXlXQ0E5SUdaMWJtTjBhVzl1SUNoaFdDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFpoY2lCcGJuUmxjblpoYkZOMFlYSjBJRDBnTUM0d0xGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqZFhKeVpXNTBVMkZ0Y0d4bElEMGdNU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2JHRnpkRk5oYlhCc1pTQTlJRXRmVTFCTVNVNUZYMVJCUWt4RlgxTkpXa1VnTFNBeExGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JrYVhOMElEMGdNQzR3TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQm5kV1Z6YzBadmNsUWdQU0F3TGpBc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2x1YVhScFlXeFRiRzl3WlNBOUlEQXVNRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1ptOXlJQ2c3SUdOMWNuSmxiblJUWVcxd2JHVWdJVDBnYkdGemRGTmhiWEJzWlNBbUppQnpZVzF3YkdWV1lXeDFaWE5iWTNWeWNtVnVkRk5oYlhCc1pWMGdQRDBnWVZnN0lDc3JZM1Z5Y21WdWRGTmhiWEJzWlNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwYm5SbGNuWmhiRk4wWVhKMElDczlJRXRmVTBGTlVFeEZYMU5VUlZCZlUwbGFSVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTFMxamRYSnlaVzUwVTJGdGNHeGxPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1JwYzNRZ1BTQW9ZVmdnTFNCellXMXdiR1ZXWVd4MVpYTmJZM1Z5Y21WdWRGTmhiWEJzWlYwcElDOGdLSE5oYlhCc1pWWmhiSFZsYzF0amRYSnlaVzUwVTJGdGNHeGxLekZkSUMwZ2MyRnRjR3hsVm1Gc2RXVnpXMk4xY25KbGJuUlRZVzF3YkdWZEtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQm5kV1Z6YzBadmNsUWdQU0JwYm5SbGNuWmhiRk4wWVhKMElDc2daR2x6ZENBcUlFdGZVMEZOVUV4RlgxTlVSVkJmVTBsYVJUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBibWwwYVdGc1UyeHZjR1VnUFNCblpYUlRiRzl3WlNobmRXVnpjMFp2Y2xRc0lHMVlNU3dnYlZneUtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXZMeUJKWmlCemJHOXdaU0JwY3lCbmNtVmhkR1Z5SUhSb1lXNGdiV2x1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tHbHVhWFJwWVd4VGJHOXdaU0ErUFNCT1JWZFVUMDVmVFVsT1gxTk1UMUJGS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQnVaWGQwYjI1U1lYQm9jMjl1U1hSbGNtRjBaU2hoV0N3Z1ozVmxjM05HYjNKVUtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXZMeUJUYkc5d1pTQnBjeUJsY1hWaGJDQjBieUJ0YVc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOUlHVnNjMlVnYVdZZ0tHbHVhWFJwWVd4VGJHOXdaU0E5UFQwZ01DNHdLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCbmRXVnpjMFp2Y2xRN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0x5OGdVMnh2Y0dVZ2FYTWdiR1Z6Y3lCMGFHRnVJRzFwYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCaWFXNWhjbmxUZFdKa2FYWnBaR1VvWVZnc0lHbHVkR1Z5ZG1Gc1UzUmhjblFzSUdsdWRHVnlkbUZzVTNSaGNuUWdLeUJMWDFOQlRWQk1SVjlUVkVWUVgxTkpXa1VwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJSDBzWEc0Z0lDQWdJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdJQ0FnSUhCeVpXTnZiWEIxZEdVZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWDNCeVpXTnZiWEIxZEdWa0lEMGdkSEoxWlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9iVmd4SUNFOUlHMVpNU0I4ZkNCdFdESWdJVDBnYlZreUtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOaGJHTlRZVzF3YkdWV1lXeDFaWE1vS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJQ0FnSUNBdktseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lFZGxibVZ5WVhSbFpDQm1kVzVqZEdsdmJseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lGSmxkSFZ5Ym5NZ2RtRnNkV1VnTUMweElHSmhjMlZrSUc5dUlGaGNiaUFnSUNBZ0lDQWdJQ0FnSUNvdlhHNGdJQ0FnSUNBZ0lDQWdJQ0JtSUQwZ1puVnVZM1JwYjI0Z0tHRllLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZG1GeUlISmxkSFZ5YmxaaGJIVmxPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tDRmZjSEpsWTI5dGNIVjBaV1FwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjSEpsWTI5dGNIVjBaU2dwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBdkx5QkpaaUJzYVc1bFlYSWdaM0poWkdsbGJuUXNJSEpsZEhWeWJpQllJR0Z6SUZSY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9iVmd4SUQwOVBTQnRXVEVnSmlZZ2JWZ3lJRDA5UFNCdFdUSXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1Vm1Gc2RXVWdQU0JoV0R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdMeThnU1dZZ1lYUWdjM1JoY25Rc0lISmxkSFZ5YmlBd1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUdsbUlDaGhXQ0E5UFQwZ01Da2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTVXWVd4MVpTQTlJREE3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDOHZJRWxtSUdGMElHVnVaQ3dnY21WMGRYSnVJREZjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5SUdWc2MyVWdhV1lnS0dGWUlEMDlQU0F4S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJsWmhiSFZsSUQwZ01UdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhKbGRIVnlibFpoYkhWbElEMGdZMkZzWTBKbGVtbGxjaWhuWlhSVVJtOXlXQ2hoV0Nrc0lHMVpNU3dnYlZreUtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlISmxkSFZ5YmxaaGJIVmxPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZUdGNiaUFnSUNBZ0lDQWdJQ0FnSUZ4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlHWTdYRzRnSUNBZ2ZUdGNibHh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0JDWlhwcFpYSTdJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL3R3ZWVuL0Jlemllci5qc1xuICoqIG1vZHVsZSBpZCA9IDEzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfbG9vcCA9IHJlcXVpcmUoJy4vbG9vcCcpO1xuXG52YXIgbG9vcCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9sb29wKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIFByb2Nlc3MgPSAoZnVuY3Rpb24gKCkge1xuICAgIC8qXG4gICAgICAgIFtvYmplY3RdOiBTdGVwIGZ1bmN0aW9uc1xuICAgICAgICBbYm9vbGVhbl0gKG9wdGlvbmFsKTogSXMgUHJvY2VzcyBsYXp5P1xuICAgICovXG5cbiAgICBmdW5jdGlvbiBQcm9jZXNzKHN0ZXBzLCBpc0xhenkpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFByb2Nlc3MpO1xuXG4gICAgICAgIC8vIEFzc2lnbiBlYWNoIHN0ZXAgbWV0aG9kIHRvIHRoaXMgcHJvY2Vzc1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gc3RlcHMpIHtcbiAgICAgICAgICAgIGlmIChzdGVwcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGhpc1trZXldID0gc3RlcHNba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXNMYXp5ID0gaXNMYXp5IHx8IGZhbHNlO1xuICAgICAgICB0aGlzLmlkID0gbG9vcC5nZXRQcm9jZXNzSWQoKTtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIFByb2Nlc3MucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICBsb29wLmFjdGl2YXRlKHRoaXMuaWQsIHRoaXMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgUHJvY2Vzcy5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgbG9vcC5kZWFjdGl2YXRlKHRoaXMuaWQpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgUHJvY2Vzcy5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uIG9uY2UoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5jbGVhbnVwID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuc3RvcCgpO1xuICAgICAgICAgICAgX3RoaXMuY2xlYW51cCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnN0YXJ0KCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIHJldHVybiBQcm9jZXNzO1xufSkoKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gUHJvY2Vzcztcbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOeVl5OVFjbTlqWlhOekxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3p0SlFVRlpMRWxCUVVrN096czdPenRKUVVWTExFOUJRVTg3T3pzN096dEJRVXQ0UWl4aFFVeHBRaXhQUVVGUExFTkJTMW9zUzBGQlN5eEZRVUZGTEUxQlFVMHNSVUZCUlRzNFFrRk1WaXhQUVVGUE96czdRVUZQY0VJc1lVRkJTeXhKUVVGSkxFZEJRVWNzU1VGQlNTeExRVUZMTEVWQlFVVTdRVUZEYmtJc1owSkJRVWtzUzBGQlN5eERRVUZETEdOQlFXTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSVHRCUVVNelFpeHZRa0ZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0aFFVTXhRanRUUVVOS096dEJRVVZFTEZsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1RVRkJUU3hKUVVGSkxFdEJRVXNzUTBGQlF6dEJRVU01UWl4WlFVRkpMRU5CUVVNc1JVRkJSU3hIUVVGSExFbEJRVWtzUTBGQlF5eFpRVUZaTEVWQlFVVXNRMEZCUXp0QlFVTTVRaXhaUVVGSkxFTkJRVU1zVVVGQlVTeEhRVUZITEV0QlFVc3NRMEZCUXp0TFFVTjZRanM3UVVGb1FtZENMRmRCUVU4c1YwRnJRbmhDTEV0QlFVc3NiMEpCUVVjN1FVRkRTaXhaUVVGSkxFTkJRVU1zVVVGQlVTeEhRVUZITEVsQlFVa3NRMEZCUXp0QlFVTnlRaXhaUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU03UVVGRE4wSXNaVUZCVHl4SlFVRkpMRU5CUVVNN1MwRkRaanM3UVVGMFFtZENMRmRCUVU4c1YwRjNRbmhDTEVsQlFVa3NiVUpCUVVjN1FVRkRTQ3haUVVGSkxFTkJRVU1zVVVGQlVTeEhRVUZITEV0QlFVc3NRMEZCUXp0QlFVTjBRaXhaUVVGSkxFTkJRVU1zVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJRenRCUVVONlFpeGxRVUZQTEVsQlFVa3NRMEZCUXp0TFFVTm1PenRCUVRWQ1owSXNWMEZCVHl4WFFUaENlRUlzU1VGQlNTeHRRa0ZCUnpzN08wRkJRMGdzV1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4WlFVRk5PMEZCUTJwQ0xHdENRVUZMTEVsQlFVa3NSVUZCUlN4RFFVRkRPMEZCUTFvc2EwSkJRVXNzVDBGQlR5eEhRVUZITEZOQlFWTXNRMEZCUXp0VFFVTTFRaXhEUVVGRE96dEJRVVZHTEZsQlFVa3NRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJRenM3UVVGRllpeGxRVUZQTEVsQlFVa3NRMEZCUXp0TFFVTm1PenRYUVhaRFowSXNUMEZCVHpzN08ydENRVUZRTEU5QlFVODdRVUYzUXpOQ0xFTkJRVU1pTENKbWFXeGxJam9pVUhKdlkyVnpjeTVxY3lJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENBcUlHRnpJR3h2YjNBZ1puSnZiU0FuTGk5c2IyOXdKenRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnWTJ4aGMzTWdVSEp2WTJWemN5QjdYRzRnSUNBZ0x5cGNiaUFnSUNBZ0lDQWdXMjlpYW1WamRGMDZJRk4wWlhBZ1puVnVZM1JwYjI1elhHNGdJQ0FnSUNBZ0lGdGliMjlzWldGdVhTQW9iM0IwYVc5dVlXd3BPaUJKY3lCUWNtOWpaWE56SUd4aGVuay9YRzRnSUNBZ0tpOWNiaUFnSUNCamIyNXpkSEoxWTNSdmNpaHpkR1Z3Y3l3Z2FYTk1ZWHA1S1NCN1hHNGdJQ0FnSUNBZ0lDOHZJRUZ6YzJsbmJpQmxZV05vSUhOMFpYQWdiV1YwYUc5a0lIUnZJSFJvYVhNZ2NISnZZMlZ6YzF4dUlDQWdJQ0FnSUNCbWIzSWdLR3hsZENCclpYa2dhVzRnYzNSbGNITXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2h6ZEdWd2N5NW9ZWE5QZDI1UWNtOXdaWEowZVNoclpYa3BLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGMxdHJaWGxkSUQwZ2MzUmxjSE5iYTJWNVhUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdWFYTk1ZWHA1SUQwZ2FYTk1ZWHA1SUh4OElHWmhiSE5sTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbWxrSUQwZ2JHOXZjQzVuWlhSUWNtOWpaWE56U1dRb0tUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1cGMwRmpkR2wyWlNBOUlHWmhiSE5sTzF4dUlDQWdJSDFjYmx4dUlDQWdJSE4wWVhKMEtDa2dlMXh1SUNBZ0lDQWdJQ0IwYUdsekxtbHpRV04wYVhabElEMGdkSEoxWlR0Y2JpQWdJQ0FnSUNBZ2JHOXZjQzVoWTNScGRtRjBaU2gwYUdsekxtbGtMQ0IwYUdsektUdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE03WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjM1J2Y0NncElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1cGMwRmpkR2wyWlNBOUlHWmhiSE5sTzF4dUlDQWdJQ0FnSUNCc2IyOXdMbVJsWVdOMGFYWmhkR1VvZEdocGN5NXBaQ2s3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsek8xeHVJQ0FnSUgxY2JseHVJQ0FnSUc5dVkyVW9LU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZMnhsWVc1MWNDQTlJQ2dwSUQwK0lIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVjM1J2Y0NncE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NWpiR1ZoYm5Wd0lEMGdkVzVrWldacGJtVmtPMXh1SUNBZ0lDQWdJQ0I5TzF4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11YzNSaGNuUW9LVHRjYmx4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN6dGNiaUFnSUNCOVhHNTlPMXh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ZyYW1lc3luYy9saWIvUHJvY2Vzcy5qc1xuICoqIG1vZHVsZSBpZCA9IDE0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmdldFByb2Nlc3NJZCA9IGdldFByb2Nlc3NJZDtcbmV4cG9ydHMuYWN0aXZhdGUgPSBhY3RpdmF0ZTtcbmV4cG9ydHMuZGVhY3RpdmF0ZSA9IGRlYWN0aXZhdGU7XG5leHBvcnRzLnNldFN0ZXBzID0gc2V0U3RlcHM7XG5cbnZhciBfdGltZXIgPSByZXF1aXJlKCcuL2luYy90aW1lcicpO1xuXG52YXIgX3RpbWVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RpbWVyKTtcblxudmFyIF90aWNrID0gcmVxdWlyZSgnLi9pbmMvdGljaycpO1xuXG52YXIgX3RpY2syID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdGljayk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBwcm9jZXNzT3JkZXIgPSBbeyBzdGVwOiAnZnJhbWVTdGFydCcgfSwgeyBzdGVwOiAndXBkYXRlJyB9LCB7IHN0ZXA6ICd3aWxsUmVuZGVyJywgZGVjaWRlUmVuZGVyOiB0cnVlIH0sIHsgc3RlcDogJ3ByZVJlbmRlcicsIGlzUmVuZGVyOiB0cnVlIH0sIHsgc3RlcDogJ3JlbmRlcicsIGlzUmVuZGVyOiB0cnVlIH0sIHsgc3RlcDogJ3Bvc3RSZW5kZXInLCBpc1JlbmRlcjogdHJ1ZSB9LCB7IHN0ZXA6ICdmcmFtZUVuZCcgfSwgeyBzdGVwOiAnY2xlYW51cCcgfV07XG52YXIgbnVtUHJvY2Vzc1N0ZXBzID0gcHJvY2Vzc09yZGVyLmxlbmd0aDtcblxuLy8gW2ludF06IFByb2Nlc3MgSUQsIGluY3JlbWVudGVkIGZvciBlYWNoIG5ldyBwcm9jZXNzXG52YXIgY3VycmVudFByb2Nlc3NJZCA9IDA7XG5cbi8vIFtpbnRdOiBOdW1iZXIgb2YgcnVubmluZyBwcm9jZXNzZXNcbnZhciBydW5uaW5nQ291bnQgPSAwO1xuXG4vLyBbaW50XTogTnVtYmVyIG9mIHJ1bm5pbmcgbm9uLWJhY2tncm91bmQgcHJvY2Vzc2VzXG52YXIgYWN0aXZlQ291bnQgPSAwO1xuXG4vLyBbYXJyYXldOiBBcnJheSBvZiBhY3RpdmUgcHJvY2VzcyBJRHNcbnZhciBydW5uaW5nSWRzID0gW107XG5cbi8vIFtvYmplY3RdOiBNYXAgb2YgYWN0aXZlIHByb2Nlc3Nlc1xudmFyIHJ1bm5pbmdQcm9jZXNzZXMgPSB7fTtcblxuLy8gW2FycmF5XTogQXJyYXkgb2YgcHJvY2VzcyBJRHMgcXVldWVkIGZvciBkZWFjdGl2YXRpb25cbnZhciBkZWFjdGl2YXRlUXVldWUgPSBbXTtcblxuLy8gW2Jvb2xlYW5dOiBJcyBsb29wIHJ1bm5pbmc/XG52YXIgaXNSdW5uaW5nID0gZmFsc2U7XG5cbi8qXG4gICAgVXBkYXRlIHJ1bm5pbmdcblxuICAgIFtib29sZWFuXTogYHRydWVgIHRvIGFkZFxuICAgIFtib29sZWFuXTogYHRydWVgIGlmIGxhenlcbiovXG5mdW5jdGlvbiB1cGRhdGVDb3VudChhZGQsIGlzTGF6eSkge1xuICAgIHZhciBtb2RpZnkgPSBhZGQgPyAxIDogLTE7XG5cbiAgICBydW5uaW5nQ291bnQgKz0gbW9kaWZ5O1xuXG4gICAgaWYgKCFpc0xhenkpIHtcbiAgICAgICAgYWN0aXZlQ291bnQgKz0gbW9kaWZ5O1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcHVyZ2UoKSB7XG4gICAgdmFyIHF1ZXVlTGVuZ3RoID0gZGVhY3RpdmF0ZVF1ZXVlLmxlbmd0aDtcblxuICAgIHdoaWxlIChxdWV1ZUxlbmd0aC0tKSB7XG4gICAgICAgIHZhciBpZFRvRGVsZXRlID0gZGVhY3RpdmF0ZVF1ZXVlW3F1ZXVlTGVuZ3RoXTtcbiAgICAgICAgdmFyIGFjdGl2ZUlkSW5kZXggPSBydW5uaW5nSWRzLmluZGV4T2YoaWRUb0RlbGV0ZSk7XG5cbiAgICAgICAgLy8gSWYgcHJvY2VzcyBpcyBhY3RpdmUsIGRlYWN0aXZhdGVcbiAgICAgICAgaWYgKGFjdGl2ZUlkSW5kZXggPiAtMSkge1xuICAgICAgICAgICAgcnVubmluZ0lkcy5zcGxpY2UoYWN0aXZlSWRJbmRleCwgMSk7XG5cbiAgICAgICAgICAgIHVwZGF0ZUNvdW50KGZhbHNlLCBydW5uaW5nUHJvY2Vzc2VzW2lkVG9EZWxldGVdLmlzTGF6eSk7XG5cbiAgICAgICAgICAgIGRlbGV0ZSBydW5uaW5nUHJvY2Vzc2VzW2lkVG9EZWxldGVdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGVhY3RpdmF0ZVF1ZXVlID0gW107XG59XG5cbi8qXG4gICAgW3RpbWVzdGFtcF06IEZyYW1lIHRpbWVzdGFtcFxuICAgIFtpbnRdOiBUaW1lIHNpbmNlIGxhc3QgZnJhbWVcbiovXG5mdW5jdGlvbiBmaXJlQWxsKGZyYW1lU3RhbXAsIGVsYXBzZWQpIHtcbiAgICB2YXIgbWV0aG9kID0ge307XG4gICAgdmFyIG1ldGhvZE5hbWUgPSAnJztcbiAgICB2YXIgaXNSZW5kZXJTdGVwID0gZmFsc2U7XG4gICAgdmFyIHByb2Nlc3MgPSB1bmRlZmluZWQ7XG4gICAgdmFyIHJlc3VsdCA9IHVuZGVmaW5lZDtcblxuICAgIHB1cmdlKCk7XG5cbiAgICB2YXIgbnVtUnVubmluZyA9IHJ1bm5pbmdDb3VudDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtUHJvY2Vzc1N0ZXBzOyBpKyspIHtcbiAgICAgICAgbWV0aG9kID0gcHJvY2Vzc09yZGVyW2ldO1xuICAgICAgICBtZXRob2ROYW1lID0gbWV0aG9kLnN0ZXA7XG4gICAgICAgIGlzUmVuZGVyU3RlcCA9IG1ldGhvZC5pc1JlbmRlciA/IHRydWUgOiBmYWxzZTtcblxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbnVtUnVubmluZzsgX2krKykge1xuICAgICAgICAgICAgcHJvY2VzcyA9IHJ1bm5pbmdQcm9jZXNzZXNbcnVubmluZ0lkc1tfaV1dO1xuXG4gICAgICAgICAgICBpZiAocHJvY2VzcyAmJiBwcm9jZXNzW21ldGhvZE5hbWVdICYmICghaXNSZW5kZXJTdGVwIHx8IGlzUmVuZGVyU3RlcCAmJiBwcm9jZXNzLl9yZW5kZXIgPT09IHRydWUpKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gcHJvY2Vzc1ttZXRob2ROYW1lXS5jYWxsKHByb2Nlc3MsIHByb2Nlc3MsIGZyYW1lU3RhbXAsIGVsYXBzZWQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobWV0aG9kLmRlY2lkZVJlbmRlcikge1xuICAgICAgICAgICAgICAgIHByb2Nlc3MuX3JlbmRlciA9IHByb2Nlc3NbbWV0aG9kTmFtZV0gJiYgcmVzdWx0ID09PSBmYWxzZSA/IGZhbHNlIDogdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1cmdlKCk7XG5cbiAgICByZXR1cm4gYWN0aXZlQ291bnQgPyB0cnVlIDogZmFsc2U7XG59XG5cbi8vIEZ1bmN0aW9uIHRvIGZpcmUgZXZlcnkgZnJhbWVcbmZ1bmN0aW9uIGZyYW1lKCkge1xuICAgICgwLCBfdGljazIuZGVmYXVsdCkoZnVuY3Rpb24gKGZyYW1lU3RhbXApIHtcbiAgICAgICAgaWYgKGlzUnVubmluZykge1xuICAgICAgICAgICAgZnJhbWUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF90aW1lcjIuZGVmYXVsdC51cGRhdGUoZnJhbWVTdGFtcCk7XG4gICAgICAgIGlzUnVubmluZyA9IGZpcmVBbGwoZnJhbWVTdGFtcCwgX3RpbWVyMi5kZWZhdWx0LmdldEVsYXBzZWQoKSk7XG4gICAgfSk7XG59XG5cbi8vIFN0YXJ0IGxvb3BcbmZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgIGlmICghaXNSdW5uaW5nKSB7XG4gICAgICAgIF90aW1lcjIuZGVmYXVsdC5zdGFydCgpO1xuICAgICAgICBpc1J1bm5pbmcgPSB0cnVlO1xuICAgICAgICBmcmFtZSgpO1xuICAgIH1cbn1cblxuLy8gU3RvcCBsb29wXG5mdW5jdGlvbiBzdG9wKCkge1xuICAgIGlzUnVubmluZyA9IGZhbHNlO1xufVxuXG4vLyBFeHBvcnRzXG5mdW5jdGlvbiBnZXRQcm9jZXNzSWQoKSB7XG4gICAgcmV0dXJuIGN1cnJlbnRQcm9jZXNzSWQrKztcbn1cblxuLypcbiAgICBbaW50XTogUHJvY2VzcyBJRCB0byBhY3RpdmF0ZVxuICAgIFtQcm9jZXNzXTogUHJvY2VzcyB0byBhY3RpdmF0ZVxuKi9cbmZ1bmN0aW9uIGFjdGl2YXRlKGlkLCBwcm9jZXNzKSB7XG4gICAgdmFyIHF1ZXVlSW5kZXggPSBkZWFjdGl2YXRlUXVldWUuaW5kZXhPZihpZCk7XG4gICAgdmFyIGlzUXVldWVkID0gcXVldWVJbmRleCA+IC0xO1xuICAgIHZhciBpc1J1bm5pbmcgPSBydW5uaW5nSWRzLmluZGV4T2YoaWQpID4gLTE7XG5cbiAgICAvLyBSZW1vdmUgZnJvbSBkZWFjdGl2YXRlUXVldWUgaWYgcXVldWVkXG4gICAgaWYgKGlzUXVldWVkKSB7XG4gICAgICAgIGRlYWN0aXZhdGVRdWV1ZS5zcGxpY2UocXVldWVJbmRleCwgMSk7XG4gICAgfVxuXG4gICAgLy8gQWRkIHRvIHJ1bm5pbmcgcHJvY2Vzc2VzIGFycmF5IGlmIG5vdCB0aGVyZVxuICAgIGlmICghaXNSdW5uaW5nKSB7XG4gICAgICAgIHJ1bm5pbmdJZHMucHVzaChpZCk7XG4gICAgICAgIHJ1bm5pbmdQcm9jZXNzZXNbaWRdID0gcHJvY2VzcztcblxuICAgICAgICB1cGRhdGVDb3VudCh0cnVlLCBwcm9jZXNzLmlzTGF6eSk7XG4gICAgICAgIHN0YXJ0KCk7XG4gICAgfVxufVxuXG4vKlxuICAgIFtpbnRdOiBQcm9jZXNzIElEIHRvIGRlYWN0aXZhdGVcbiovXG5mdW5jdGlvbiBkZWFjdGl2YXRlKGlkKSB7XG4gICAgaWYgKGRlYWN0aXZhdGVRdWV1ZS5pbmRleE9mKGlkKSA9PT0gLTEpIHtcbiAgICAgICAgZGVhY3RpdmF0ZVF1ZXVlLnB1c2goaWQpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gc2V0U3RlcHMobmV3UHJvY2Vzc09yZGVyKSB7XG4gICAgcHJvY2Vzc09yZGVyID0gbmV3UHJvY2Vzc09yZGVyO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMM055WXk5c2IyOXdMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3p0UlFYbEpaMElzV1VGQldTeEhRVUZhTEZsQlFWazdVVUZSV2l4UlFVRlJMRWRCUVZJc1VVRkJVVHRSUVhWQ1VpeFZRVUZWTEVkQlFWWXNWVUZCVlR0UlFVMVdMRkZCUVZFc1IwRkJVaXhSUVVGUk96czdPenM3T3pzN096czdRVUV6UzNoQ0xFbEJRVWtzV1VGQldTeEhRVUZITEVOQlEyWXNSVUZCUlN4SlFVRkpMRVZCUVVVc1dVRkJXU3hGUVVGRkxFVkJRM1JDTEVWQlFVVXNTVUZCU1N4RlFVRkZMRkZCUVZFc1JVRkJSU3hGUVVOc1FpeEZRVUZGTEVsQlFVa3NSVUZCUlN4WlFVRlpMRVZCUVVVc1dVRkJXU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEZRVU14UXl4RlFVRkZMRWxCUVVrc1JVRkJSU3hYUVVGWExFVkJRVVVzVVVGQlVTeEZRVUZGTEVsQlFVa3NSVUZCUlN4RlFVTnlReXhGUVVGRkxFbEJRVWtzUlVGQlJTeFJRVUZSTEVWQlFVVXNVVUZCVVN4RlFVRkZMRWxCUVVrc1JVRkJSU3hGUVVOc1F5eEZRVUZGTEVsQlFVa3NSVUZCUlN4WlFVRlpMRVZCUVVVc1VVRkJVU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEZRVU4wUXl4RlFVRkZMRWxCUVVrc1JVRkJSU3hWUVVGVkxFVkJRVVVzUlVGRGNFSXNSVUZCUlN4SlFVRkpMRVZCUVVVc1UwRkJVeXhGUVVGRkxFTkJRM1JDTEVOQlFVTTdRVUZEUml4SlFVRk5MR1ZCUVdVc1IwRkJSeXhaUVVGWkxFTkJRVU1zVFVGQlRUczdPMEZCUVVNc1FVRkhOVU1zU1VGQlNTeG5Ra0ZCWjBJc1IwRkJSeXhEUVVGRE96czdRVUZCUXl4QlFVZDZRaXhKUVVGSkxGbEJRVmtzUjBGQlJ5eERRVUZET3pzN1FVRkJReXhCUVVkeVFpeEpRVUZKTEZkQlFWY3NSMEZCUnl4RFFVRkRPenM3UVVGQlF5eEJRVWR3UWl4SlFVRkpMRlZCUVZVc1IwRkJSeXhGUVVGRk96czdRVUZCUXl4QlFVZHdRaXhKUVVGSkxHZENRVUZuUWl4SFFVRkhMRVZCUVVVN096dEJRVUZETEVGQlJ6RkNMRWxCUVVrc1pVRkJaU3hIUVVGSExFVkJRVVU3T3p0QlFVRkRMRUZCUjNwQ0xFbEJRVWtzVTBGQlV5eEhRVUZITEV0QlFVczdPenM3T3pzN08wRkJRVU1zUVVGUmRFSXNVMEZCVXl4WFFVRlhMRU5CUVVNc1IwRkJSeXhGUVVGRkxFMUJRVTBzUlVGQlJUdEJRVU01UWl4UlFVRk5MRTFCUVUwc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPenRCUVVVMVFpeG5Ra0ZCV1N4SlFVRkpMRTFCUVUwc1EwRkJRenM3UVVGRmRrSXNVVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSVHRCUVVOVUxHMUNRVUZYTEVsQlFVa3NUVUZCVFN4RFFVRkRPMHRCUTNwQ08wTkJRMG83TzBGQlJVUXNVMEZCVXl4TFFVRkxMRWRCUVVjN1FVRkRZaXhSUVVGSkxGZEJRVmNzUjBGQlJ5eGxRVUZsTEVOQlFVTXNUVUZCVFN4RFFVRkRPenRCUVVWNlF5eFhRVUZQTEZkQlFWY3NSVUZCUlN4RlFVRkZPMEZCUTJ4Q0xGbEJRVTBzVlVGQlZTeEhRVUZITEdWQlFXVXNRMEZCUXl4WFFVRlhMRU5CUVVNc1EwRkJRenRCUVVOb1JDeFpRVUZOTEdGQlFXRXNSMEZCUnl4VlFVRlZMRU5CUVVNc1QwRkJUeXhEUVVGRExGVkJRVlVzUTBGQlF6czdPMEZCUVVNc1FVRkhja1FzV1VGQlNTeGhRVUZoTEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVN1FVRkRjRUlzYzBKQlFWVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1lVRkJZU3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZET3p0QlFVVndReXgxUWtGQlZ5eERRVUZETEV0QlFVc3NSVUZCUlN4blFrRkJaMElzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenM3UVVGRmVFUXNiVUpCUVU4c1owSkJRV2RDTEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNN1UwRkRka003UzBGRFNqczdRVUZGUkN4dFFrRkJaU3hIUVVGSExFVkJRVVVzUTBGQlF6dERRVU40UWpzN096czdPMEZCUVVFc1FVRk5SQ3hUUVVGVExFOUJRVThzUTBGQlF5eFZRVUZWTEVWQlFVVXNUMEZCVHl4RlFVRkZPMEZCUTJ4RExGRkJRVWtzVFVGQlRTeEhRVUZITEVWQlFVVXNRMEZCUXp0QlFVTm9RaXhSUVVGSkxGVkJRVlVzUjBGQlJ5eEZRVUZGTEVOQlFVTTdRVUZEY0VJc1VVRkJTU3haUVVGWkxFZEJRVWNzUzBGQlN5eERRVUZETzBGQlEzcENMRkZCUVVrc1QwRkJUeXhaUVVGQkxFTkJRVU03UVVGRFdpeFJRVUZKTEUxQlFVMHNXVUZCUVN4RFFVRkRPenRCUVVWWUxGTkJRVXNzUlVGQlJTeERRVUZET3p0QlFVVlNMRkZCUVUwc1ZVRkJWU3hIUVVGSExGbEJRVmtzUTBGQlF6czdRVUZGYUVNc1UwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMR1ZCUVdVc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdEJRVU4wUXl4alFVRk5MRWRCUVVjc1dVRkJXU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBGQlEzcENMR3RDUVVGVkxFZEJRVWNzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXp0QlFVTjZRaXh2UWtGQldTeEhRVUZITEUxQlFVMHNRMEZCUXl4UlFVRlJMRWRCUVVjc1NVRkJTU3hIUVVGSExFdEJRVXNzUTBGQlF6czdRVUZGT1VNc1lVRkJTeXhKUVVGSkxFVkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNSVUZCUXl4SFFVRkhMRlZCUVZVc1JVRkJSU3hGUVVGRExFVkJRVVVzUlVGQlJUdEJRVU5xUXl4dFFrRkJUeXhIUVVGSExHZENRVUZuUWl4RFFVRkRMRlZCUVZVc1EwRkJReXhGUVVGRExFTkJRVU1zUTBGQlF5eERRVUZET3p0QlFVVXhReXhuUWtGQlNTeFBRVUZQTEVsQlFVa3NUMEZCVHl4RFFVRkRMRlZCUVZVc1EwRkJReXhMUVVGTExFTkJRVU1zV1VGQldTeEpRVUZMTEZsQlFWa3NTVUZCU1N4UFFVRlBMRU5CUVVNc1QwRkJUeXhMUVVGTExFbEJRVWtzUTBGQlF5eEJRVUZETEVWQlFVVTdRVUZEYWtjc2MwSkJRVTBzUjBGQlJ5eFBRVUZQTEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUlVGQlJTeFBRVUZQTEVWQlFVVXNWVUZCVlN4RlFVRkZMRTlCUVU4c1EwRkJReXhEUVVGRE8yRkJRelZGT3p0QlFVVkVMR2RDUVVGSkxFMUJRVTBzUTBGQlF5eFpRVUZaTEVWQlFVVTdRVUZEY2tJc2RVSkJRVThzUTBGQlF5eFBRVUZQTEVkQlFVY3NRVUZCUXl4UFFVRlBMRU5CUVVNc1ZVRkJWU3hEUVVGRExFbEJRVWtzVFVGQlRTeExRVUZMTEV0QlFVc3NSMEZCU1N4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGRE8yRkJRemxGTzFOQlEwbzdTMEZEU2pzN1FVRkZSQ3hUUVVGTExFVkJRVVVzUTBGQlF6czdRVUZGVWl4WFFVRlBMRmRCUVZjc1IwRkJSeXhKUVVGSkxFZEJRVWNzUzBGQlN5eERRVUZETzBOQlEzSkRPenM3UVVGQlFTeEJRVWRFTEZOQlFWTXNTMEZCU3l4SFFVRkhPMEZCUTJJc2QwSkJRVXNzVlVGQlF5eFZRVUZWTEVWQlFVczdRVUZEYWtJc1dVRkJTU3hUUVVGVExFVkJRVVU3UVVGRFdDeHBRa0ZCU3l4RlFVRkZMRU5CUVVNN1UwRkRXRHM3UVVGRlJDeDNRa0ZCVFN4TlFVRk5MRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU03UVVGRGVrSXNhVUpCUVZNc1IwRkJSeXhQUVVGUExFTkJRVU1zVlVGQlZTeEZRVUZGTEdkQ1FVRk5MRlZCUVZVc1JVRkJSU3hEUVVGRExFTkJRVU03UzBGRGRrUXNRMEZCUXl4RFFVRkRPME5CUTA0N096dEJRVUZCTEVGQlIwUXNVMEZCVXl4TFFVRkxMRWRCUVVjN1FVRkRZaXhSUVVGSkxFTkJRVU1zVTBGQlV5eEZRVUZGTzBGQlExb3NkMEpCUVUwc1MwRkJTeXhGUVVGRkxFTkJRVU03UVVGRFpDeHBRa0ZCVXl4SFFVRkhMRWxCUVVrc1EwRkJRenRCUVVOcVFpeGhRVUZMTEVWQlFVVXNRMEZCUXp0TFFVTllPME5CUTBvN096dEJRVUZCTEVGQlIwUXNVMEZCVXl4SlFVRkpMRWRCUVVjN1FVRkRXaXhoUVVGVExFZEJRVWNzUzBGQlN5eERRVUZETzBOQlEzSkNPenM3UVVGQlFTeEJRVWROTEZOQlFWTXNXVUZCV1N4SFFVRkhPMEZCUXpOQ0xGZEJRVThzWjBKQlFXZENMRVZCUVVVc1EwRkJRenREUVVNM1FqczdPenM3TzBGQlFVRXNRVUZOVFN4VFFVRlRMRkZCUVZFc1EwRkJReXhGUVVGRkxFVkJRVVVzVDBGQlR5eEZRVUZGTzBGQlEyeERMRkZCUVUwc1ZVRkJWU3hIUVVGSExHVkJRV1VzUTBGQlF5eFBRVUZQTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1FVRkRMME1zVVVGQlRTeFJRVUZSTEVkQlFVa3NWVUZCVlN4SFFVRkhMRU5CUVVNc1EwRkJReXhCUVVGRExFTkJRVU03UVVGRGJrTXNVVUZCVFN4VFFVRlRMRWRCUVVrc1ZVRkJWU3hEUVVGRExFOUJRVThzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1FVRkJRenM3TzBGQlFVTXNRVUZIYUVRc1VVRkJTU3hSUVVGUkxFVkJRVVU3UVVGRFZpeDFRa0ZCWlN4RFFVRkRMRTFCUVUwc1EwRkJReXhWUVVGVkxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdTMEZEZWtNN096dEJRVUZCTEVGQlIwUXNVVUZCU1N4RFFVRkRMRk5CUVZNc1JVRkJSVHRCUVVOYUxHdENRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE8wRkJRM0JDTEhkQ1FVRm5RaXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEU5QlFVOHNRMEZCUXpzN1FVRkZMMElzYlVKQlFWY3NRMEZCUXl4SlFVRkpMRVZCUVVVc1QwRkJUeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzBGQlEyeERMR0ZCUVVzc1JVRkJSU3hEUVVGRE8wdEJRMWc3UTBGRFNqczdPenM3UVVGQlFTeEJRVXROTEZOQlFWTXNWVUZCVlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRCUVVNelFpeFJRVUZKTEdWQlFXVXNRMEZCUXl4UFFVRlBMRU5CUVVNc1JVRkJSU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVWQlFVVTdRVUZEY0VNc2RVSkJRV1VzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1MwRkROVUk3UTBGRFNqczdRVUZGVFN4VFFVRlRMRkZCUVZFc1EwRkJReXhsUVVGbExFVkJRVVU3UVVGRGRFTXNaMEpCUVZrc1IwRkJSeXhsUVVGbExFTkJRVU03UTBGRGJFTWlMQ0ptYVd4bElqb2liRzl2Y0M1cWN5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQjBhVzFsY2lCbWNtOXRJQ2N1TDJsdVl5OTBhVzFsY2ljN1hHNXBiWEJ2Y25RZ2RHbGpheUJtY205dElDY3VMMmx1WXk5MGFXTnJKenRjYmx4dWJHVjBJSEJ5YjJObGMzTlBjbVJsY2lBOUlGdGNiaUFnSUNCN0lITjBaWEE2SUNkbWNtRnRaVk4wWVhKMEp5QjlMRnh1SUNBZ0lIc2djM1JsY0RvZ0ozVndaR0YwWlNjZ2ZTeGNiaUFnSUNCN0lITjBaWEE2SUNkM2FXeHNVbVZ1WkdWeUp5d2daR1ZqYVdSbFVtVnVaR1Z5T2lCMGNuVmxJSDBzWEc0Z0lDQWdleUJ6ZEdWd09pQW5jSEpsVW1WdVpHVnlKeXdnYVhOU1pXNWtaWEk2SUhSeWRXVWdmU3hjYmlBZ0lDQjdJSE4wWlhBNklDZHlaVzVrWlhJbkxDQnBjMUpsYm1SbGNqb2dkSEoxWlNCOUxGeHVJQ0FnSUhzZ2MzUmxjRG9nSjNCdmMzUlNaVzVrWlhJbkxDQnBjMUpsYm1SbGNqb2dkSEoxWlNCOUxGeHVJQ0FnSUhzZ2MzUmxjRG9nSjJaeVlXMWxSVzVrSnlCOUxGeHVJQ0FnSUhzZ2MzUmxjRG9nSjJOc1pXRnVkWEFuSUgxY2JsMDdYRzVqYjI1emRDQnVkVzFRY205alpYTnpVM1JsY0hNZ1BTQndjbTlqWlhOelQzSmtaWEl1YkdWdVozUm9PMXh1WEc0dkx5QmJhVzUwWFRvZ1VISnZZMlZ6Y3lCSlJDd2dhVzVqY21WdFpXNTBaV1FnWm05eUlHVmhZMmdnYm1WM0lIQnliMk5sYzNOY2JteGxkQ0JqZFhKeVpXNTBVSEp2WTJWemMwbGtJRDBnTUR0Y2JseHVMeThnVzJsdWRGMDZJRTUxYldKbGNpQnZaaUJ5ZFc1dWFXNW5JSEJ5YjJObGMzTmxjMXh1YkdWMElISjFibTVwYm1kRGIzVnVkQ0E5SURBN1hHNWNiaTh2SUZ0cGJuUmRPaUJPZFcxaVpYSWdiMllnY25WdWJtbHVaeUJ1YjI0dFltRmphMmR5YjNWdVpDQndjbTlqWlhOelpYTmNibXhsZENCaFkzUnBkbVZEYjNWdWRDQTlJREE3WEc1Y2JpOHZJRnRoY25KaGVWMDZJRUZ5Y21GNUlHOW1JR0ZqZEdsMlpTQndjbTlqWlhOeklFbEVjMXh1YkdWMElISjFibTVwYm1kSlpITWdQU0JiWFR0Y2JseHVMeThnVzI5aWFtVmpkRjA2SUUxaGNDQnZaaUJoWTNScGRtVWdjSEp2WTJWemMyVnpYRzVzWlhRZ2NuVnVibWx1WjFCeWIyTmxjM05sY3lBOUlIdDlPMXh1WEc0dkx5QmJZWEp5WVhsZE9pQkJjbkpoZVNCdlppQndjbTlqWlhOeklFbEVjeUJ4ZFdWMVpXUWdabTl5SUdSbFlXTjBhWFpoZEdsdmJseHViR1YwSUdSbFlXTjBhWFpoZEdWUmRXVjFaU0E5SUZ0ZE8xeHVYRzR2THlCYlltOXZiR1ZoYmwwNklFbHpJR3h2YjNBZ2NuVnVibWx1Wno5Y2JteGxkQ0JwYzFKMWJtNXBibWNnUFNCbVlXeHpaVHRjYmx4dUx5cGNiaUFnSUNCVmNHUmhkR1VnY25WdWJtbHVaMXh1WEc0Z0lDQWdXMkp2YjJ4bFlXNWRPaUJnZEhKMVpXQWdkRzhnWVdSa1hHNGdJQ0FnVzJKdmIyeGxZVzVkT2lCZ2RISjFaV0FnYVdZZ2JHRjZlVnh1S2k5Y2JtWjFibU4wYVc5dUlIVndaR0YwWlVOdmRXNTBLR0ZrWkN3Z2FYTk1ZWHA1S1NCN1hHNGdJQ0FnWTI5dWMzUWdiVzlrYVdaNUlEMGdZV1JrSUQ4Z01TQTZJQzB4TzF4dVhHNGdJQ0FnY25WdWJtbHVaME52ZFc1MElDczlJRzF2WkdsbWVUdGNibHh1SUNBZ0lHbG1JQ2doYVhOTVlYcDVLU0I3WEc0Z0lDQWdJQ0FnSUdGamRHbDJaVU52ZFc1MElDczlJRzF2WkdsbWVUdGNiaUFnSUNCOVhHNTlYRzVjYm1aMWJtTjBhVzl1SUhCMWNtZGxLQ2tnZTF4dUlDQWdJR3hsZENCeGRXVjFaVXhsYm1kMGFDQTlJR1JsWVdOMGFYWmhkR1ZSZFdWMVpTNXNaVzVuZEdnN1hHNWNiaUFnSUNCM2FHbHNaU0FvY1hWbGRXVk1aVzVuZEdndExTa2dlMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQnBaRlJ2UkdWc1pYUmxJRDBnWkdWaFkzUnBkbUYwWlZGMVpYVmxXM0YxWlhWbFRHVnVaM1JvWFR0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnWVdOMGFYWmxTV1JKYm1SbGVDQTlJSEoxYm01cGJtZEpaSE11YVc1a1pYaFBaaWhwWkZSdlJHVnNaWFJsS1R0Y2JseHVJQ0FnSUNBZ0lDQXZMeUJKWmlCd2NtOWpaWE56SUdseklHRmpkR2wyWlN3Z1pHVmhZM1JwZG1GMFpWeHVJQ0FnSUNBZ0lDQnBaaUFvWVdOMGFYWmxTV1JKYm1SbGVDQStJQzB4S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5ZFc1dWFXNW5TV1J6TG5Od2JHbGpaU2hoWTNScGRtVkpaRWx1WkdWNExDQXhLVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdkWEJrWVhSbFEyOTFiblFvWm1Gc2MyVXNJSEoxYm01cGJtZFFjbTlqWlhOelpYTmJhV1JVYjBSbGJHVjBaVjB1YVhOTVlYcDVLVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdaR1ZzWlhSbElISjFibTVwYm1kUWNtOWpaWE56WlhOYmFXUlViMFJsYkdWMFpWMDdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlYRzVjYmlBZ0lDQmtaV0ZqZEdsMllYUmxVWFZsZFdVZ1BTQmJYVHRjYm4xY2JseHVMeXBjYmlBZ0lDQmJkR2x0WlhOMFlXMXdYVG9nUm5KaGJXVWdkR2x0WlhOMFlXMXdYRzRnSUNBZ1cybHVkRjA2SUZScGJXVWdjMmx1WTJVZ2JHRnpkQ0JtY21GdFpWeHVLaTljYm1aMWJtTjBhVzl1SUdacGNtVkJiR3dvWm5KaGJXVlRkR0Z0Y0N3Z1pXeGhjSE5sWkNrZ2UxeHVJQ0FnSUd4bGRDQnRaWFJvYjJRZ1BTQjdmVHRjYmlBZ0lDQnNaWFFnYldWMGFHOWtUbUZ0WlNBOUlDY25PMXh1SUNBZ0lHeGxkQ0JwYzFKbGJtUmxjbE4wWlhBZ1BTQm1ZV3h6WlR0Y2JpQWdJQ0JzWlhRZ2NISnZZMlZ6Y3p0Y2JpQWdJQ0JzWlhRZ2NtVnpkV3gwTzF4dVhHNGdJQ0FnY0hWeVoyVW9LVHRjYmx4dUlDQWdJR052Ym5OMElHNTFiVkoxYm01cGJtY2dQU0J5ZFc1dWFXNW5RMjkxYm5RN1hHNWNiaUFnSUNCbWIzSWdLR3hsZENCcElEMGdNRHNnYVNBOElHNTFiVkJ5YjJObGMzTlRkR1Z3Y3pzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0FnSUcxbGRHaHZaQ0E5SUhCeWIyTmxjM05QY21SbGNsdHBYVHRjYmlBZ0lDQWdJQ0FnYldWMGFHOWtUbUZ0WlNBOUlHMWxkR2h2WkM1emRHVndPMXh1SUNBZ0lDQWdJQ0JwYzFKbGJtUmxjbE4wWlhBZ1BTQnRaWFJvYjJRdWFYTlNaVzVrWlhJZ1B5QjBjblZsSURvZ1ptRnNjMlU3WEc1Y2JpQWdJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQnVkVzFTZFc1dWFXNW5PeUJwS3lzcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhCeWIyTmxjM01nUFNCeWRXNXVhVzVuVUhKdlkyVnpjMlZ6VzNKMWJtNXBibWRKWkhOYmFWMWRPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvY0hKdlkyVnpjeUFtSmlCd2NtOWpaWE56VzIxbGRHaHZaRTVoYldWZElDWW1JQ2doYVhOU1pXNWtaWEpUZEdWd0lIeDhJQ2hwYzFKbGJtUmxjbE4wWlhBZ0ppWWdjSEp2WTJWemN5NWZjbVZ1WkdWeUlEMDlQU0IwY25WbEtTa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J5WlhOMWJIUWdQU0J3Y205alpYTnpXMjFsZEdodlpFNWhiV1ZkTG1OaGJHd29jSEp2WTJWemN5d2djSEp2WTJWemN5d2dabkpoYldWVGRHRnRjQ3dnWld4aGNITmxaQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2h0WlhSb2IyUXVaR1ZqYVdSbFVtVnVaR1Z5S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NISnZZMlZ6Y3k1ZmNtVnVaR1Z5SUQwZ0tIQnliMk5sYzNOYmJXVjBhRzlrVG1GdFpWMGdKaVlnY21WemRXeDBJRDA5UFNCbVlXeHpaU2tnUHlCbVlXeHpaU0E2SUhSeWRXVTdJRnh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2NIVnlaMlVvS1R0Y2JseHVJQ0FnSUhKbGRIVnliaUJoWTNScGRtVkRiM1Z1ZENBL0lIUnlkV1VnT2lCbVlXeHpaVHRjYm4xY2JseHVMeThnUm5WdVkzUnBiMjRnZEc4Z1ptbHlaU0JsZG1WeWVTQm1jbUZ0WlZ4dVpuVnVZM1JwYjI0Z1puSmhiV1VvS1NCN1hHNGdJQ0FnZEdsamF5Z29abkpoYldWVGRHRnRjQ2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQnBaaUFvYVhOU2RXNXVhVzVuS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JtY21GdFpTZ3BPMXh1SUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ2RHbHRaWEl1ZFhCa1lYUmxLR1p5WVcxbFUzUmhiWEFwTzF4dUlDQWdJQ0FnSUNCcGMxSjFibTVwYm1jZ1BTQm1hWEpsUVd4c0tHWnlZVzFsVTNSaGJYQXNJSFJwYldWeUxtZGxkRVZzWVhCelpXUW9LU2s3WEc0Z0lDQWdmU2s3WEc1OVhHNWNiaTh2SUZOMFlYSjBJR3h2YjNCY2JtWjFibU4wYVc5dUlITjBZWEowS0NrZ2UxeHVJQ0FnSUdsbUlDZ2hhWE5TZFc1dWFXNW5LU0I3WEc0Z0lDQWdJQ0FnSUhScGJXVnlMbk4wWVhKMEtDazdYRzRnSUNBZ0lDQWdJR2x6VW5WdWJtbHVaeUE5SUhSeWRXVTdYRzRnSUNBZ0lDQWdJR1p5WVcxbEtDazdYRzRnSUNBZ2ZWeHVmVnh1WEc0dkx5QlRkRzl3SUd4dmIzQmNibVoxYm1OMGFXOXVJSE4wYjNBb0tTQjdYRzRnSUNBZ2FYTlNkVzV1YVc1bklEMGdabUZzYzJVN1hHNTlYRzVjYmk4dklFVjRjRzl5ZEhOY2JtVjRjRzl5ZENCbWRXNWpkR2x2YmlCblpYUlFjbTlqWlhOelNXUW9LU0I3WEc0Z0lDQWdjbVYwZFhKdUlHTjFjbkpsYm5SUWNtOWpaWE56U1dRckt6dGNibjFjYmx4dUx5cGNiaUFnSUNCYmFXNTBYVG9nVUhKdlkyVnpjeUJKUkNCMGJ5QmhZM1JwZG1GMFpWeHVJQ0FnSUZ0UWNtOWpaWE56WFRvZ1VISnZZMlZ6Y3lCMGJ5QmhZM1JwZG1GMFpWeHVLaTljYm1WNGNHOXlkQ0JtZFc1amRHbHZiaUJoWTNScGRtRjBaU2hwWkN3Z2NISnZZMlZ6Y3lrZ2UxeHVJQ0FnSUdOdmJuTjBJSEYxWlhWbFNXNWtaWGdnUFNCa1pXRmpkR2wyWVhSbFVYVmxkV1V1YVc1a1pYaFBaaWhwWkNrN1hHNGdJQ0FnWTI5dWMzUWdhWE5SZFdWMVpXUWdQU0FvY1hWbGRXVkpibVJsZUNBK0lDMHhLVHRjYmlBZ0lDQmpiMjV6ZENCcGMxSjFibTVwYm1jZ1BTQW9jblZ1Ym1sdVowbGtjeTVwYm1SbGVFOW1LR2xrS1NBK0lDMHhLVHRjYmx4dUlDQWdJQzh2SUZKbGJXOTJaU0JtY205dElHUmxZV04wYVhaaGRHVlJkV1YxWlNCcFppQnhkV1YxWldSY2JpQWdJQ0JwWmlBb2FYTlJkV1YxWldRcElIdGNiaUFnSUNBZ0lDQWdaR1ZoWTNScGRtRjBaVkYxWlhWbExuTndiR2xqWlNoeGRXVjFaVWx1WkdWNExDQXhLVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQXZMeUJCWkdRZ2RHOGdjblZ1Ym1sdVp5QndjbTlqWlhOelpYTWdZWEp5WVhrZ2FXWWdibTkwSUhSb1pYSmxYRzRnSUNBZ2FXWWdLQ0ZwYzFKMWJtNXBibWNwSUh0Y2JpQWdJQ0FnSUNBZ2NuVnVibWx1WjBsa2N5NXdkWE5vS0dsa0tUdGNiaUFnSUNBZ0lDQWdjblZ1Ym1sdVoxQnliMk5sYzNObGMxdHBaRjBnUFNCd2NtOWpaWE56TzF4dVhHNGdJQ0FnSUNBZ0lIVndaR0YwWlVOdmRXNTBLSFJ5ZFdVc0lIQnliMk5sYzNNdWFYTk1ZWHA1S1R0Y2JpQWdJQ0FnSUNBZ2MzUmhjblFvS1R0Y2JpQWdJQ0I5WEc1OVhHNWNiaThxWEc0Z0lDQWdXMmx1ZEYwNklGQnliMk5sYzNNZ1NVUWdkRzhnWkdWaFkzUnBkbUYwWlZ4dUtpOWNibVY0Y0c5eWRDQm1kVzVqZEdsdmJpQmtaV0ZqZEdsMllYUmxLR2xrS1NCN1hHNGdJQ0FnYVdZZ0tHUmxZV04wYVhaaGRHVlJkV1YxWlM1cGJtUmxlRTltS0dsa0tTQTlQVDBnTFRFcElIdGNiaUFnSUNBZ0lDQWdaR1ZoWTNScGRtRjBaVkYxWlhWbExuQjFjMmdvYVdRcE8xeHVJQ0FnSUgxY2JuMWNibHh1Wlhod2IzSjBJR1oxYm1OMGFXOXVJSE5sZEZOMFpYQnpLRzVsZDFCeWIyTmxjM05QY21SbGNpa2dlMXh1SUNBZ0lIQnliMk5sYzNOUGNtUmxjaUE5SUc1bGQxQnliMk5sYzNOUGNtUmxjanRjYm4waVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9mcmFtZXN5bmMvbGliL2xvb3AuanNcbiAqKiBtb2R1bGUgaWQgPSAxNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5zZXREaWxhdGlvbiA9IHNldERpbGF0aW9uO1xudmFyIGhhc1BlcmZvcm1hbmNlTm93ID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJyAmJiBwZXJmb3JtYW5jZS5ub3c7XG52YXIgY3VycmVudFRpbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGhhc1BlcmZvcm1hbmNlTm93ID8gcGVyZm9ybWFuY2Uubm93KCkgOiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbn07XG5cbnZhciBNQVhfRUxBUFNFRCA9IDMzO1xuXG52YXIgYmFzZSA9IDA7XG52YXIgY3VycmVudCA9IDA7XG52YXIgZWxhcHNlZCA9IDE2Ljc7XG52YXIgZGlsYXRpb24gPSAxO1xudmFyIGxvc3RUaW1lID0gMDtcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gKGZyYW1lc3RhbXApIHtcbiAgICAgICAgaWYgKGJhc2UgPT09IDApIHtcbiAgICAgICAgICAgIGN1cnJlbnQgPSBiYXNlID0gZnJhbWVzdGFtcDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBwcmV2ID0gY3VycmVudDtcbiAgICAgICAgdmFyIGxvc3NBZGp1c3RlZCA9IGZyYW1lc3RhbXAgLSBsb3N0VGltZTtcbiAgICAgICAgdmFyIG5vbkRpbGF0ZWRFbGFwc2VkID0gTWF0aC5taW4obG9zc0FkanVzdGVkIC0gcHJldiwgTUFYX0VMQVBTRUQpO1xuICAgICAgICBlbGFwc2VkID0gbm9uRGlsYXRlZEVsYXBzZWQgKiBkaWxhdGlvbjtcbiAgICAgICAgY3VycmVudCArPSBlbGFwc2VkO1xuICAgICAgICBsb3N0VGltZSArPSBub25EaWxhdGVkRWxhcHNlZCAtIGVsYXBzZWQ7XG4gICAgfSxcblxuICAgIHN0YXJ0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBjdXJyZW50ID0gY3VycmVudFRpbWUoKTtcbiAgICB9LFxuXG4gICAgZ2V0RWxhcHNlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZWxhcHNlZDtcbiAgICB9XG59O1xuZnVuY3Rpb24gc2V0RGlsYXRpb24obmV3RGlsYXRpb24pIHtcbiAgICBkaWxhdGlvbiA9IG5ld0RpbGF0aW9uO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OXBibU12ZEdsdFpYSXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3TzFGQk9FSm5RaXhYUVVGWExFZEJRVmdzVjBGQlZ6dEJRVGxDTTBJc1NVRkJUU3hwUWtGQmFVSXNSMEZCU1N4UFFVRlBMRmRCUVZjc1MwRkJTeXhYUVVGWExFbEJRVWtzVjBGQlZ5eERRVUZETEVkQlFVY3NRVUZCUXl4RFFVRkRPMEZCUTJ4R0xFbEJRVTBzVjBGQlZ5eEhRVUZITzFkQlFVMHNhVUpCUVdsQ0xFZEJRVWNzVjBGQlZ5eERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRWxCUVVrc1NVRkJTU3hGUVVGRkxFTkJRVU1zVDBGQlR5eEZRVUZGTzBOQlFVRXNRMEZCUXpzN1FVRkZka1lzU1VGQlRTeFhRVUZYTEVkQlFVY3NSVUZCUlN4RFFVRkRPenRCUVVWMlFpeEpRVUZKTEVsQlFVa3NSMEZCUnl4RFFVRkRMRU5CUVVNN1FVRkRZaXhKUVVGSkxFOUJRVThzUjBGQlJ5eERRVUZETEVOQlFVTTdRVUZEYUVJc1NVRkJTU3hQUVVGUExFZEJRVWNzU1VGQlNTeERRVUZETzBGQlEyNUNMRWxCUVVrc1VVRkJVU3hIUVVGSExFTkJRVU1zUTBGQlF6dEJRVU5xUWl4SlFVRkpMRkZCUVZFc1IwRkJSeXhEUVVGRExFTkJRVU03TzJ0Q1FVVkdPMEZCUTFnc1ZVRkJUU3hGUVVGRkxGVkJRVU1zVlVGQlZTeEZRVUZMTzBGQlEzQkNMRmxCUVVrc1NVRkJTU3hMUVVGTExFTkJRVU1zUlVGQlJUdEJRVU5hTEcxQ1FVRlBMRWRCUVVjc1NVRkJTU3hIUVVGSExGVkJRVlVzUTBGQlF6dFRRVU12UWpzN1FVRkZSQ3haUVVGTkxFbEJRVWtzUjBGQlJ5eFBRVUZQTEVOQlFVTTdRVUZEY2tJc1dVRkJUU3haUVVGWkxFZEJRVWNzVlVGQlZTeEhRVUZITEZGQlFWRXNRMEZCUXp0QlFVTXpReXhaUVVGTkxHbENRVUZwUWl4SFFVRkhMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zV1VGQldTeEhRVUZITEVsQlFVa3NSVUZCUlN4WFFVRlhMRU5CUVVNc1EwRkJRenRCUVVOeVJTeGxRVUZQTEVkQlFVY3NhVUpCUVdsQ0xFZEJRVWNzVVVGQlVTeERRVUZETzBGQlEzWkRMR1ZCUVU4c1NVRkJTU3hQUVVGUExFTkJRVU03UVVGRGJrSXNaMEpCUVZFc1NVRkJTU3hwUWtGQmFVSXNSMEZCUnl4UFFVRlBMRU5CUVVNN1MwRkRNME03TzBGQlJVUXNVMEZCU3l4RlFVRkZPMlZCUVUwc1QwRkJUeXhIUVVGSExGZEJRVmNzUlVGQlJUdExRVUZCT3p0QlFVVndReXhqUVVGVkxFVkJRVVU3WlVGQlRTeFBRVUZQTzB0QlFVRTdRMEZETlVJN1FVRkZUU3hUUVVGVExGZEJRVmNzUTBGQlF5eFhRVUZYTEVWQlFVVTdRVUZEY2tNc1dVRkJVU3hIUVVGSExGZEJRVmNzUTBGQlF6dERRVU14UWlJc0ltWnBiR1VpT2lKMGFXMWxjaTVxY3lJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltTnZibk4wSUdoaGMxQmxjbVp2Y20xaGJtTmxUbTkzSUQwZ0tIUjVjR1Z2WmlCd1pYSm1iM0p0WVc1alpTQWhQVDBnSjNWdVpHVm1hVzVsWkNjZ0ppWWdjR1Z5Wm05eWJXRnVZMlV1Ym05M0tUdGNibU52Ym5OMElHTjFjbkpsYm5SVWFXMWxJRDBnS0NrZ1BUNGdhR0Z6VUdWeVptOXliV0Z1WTJWT2IzY2dQeUJ3WlhKbWIzSnRZVzVqWlM1dWIzY29LU0E2SUc1bGR5QkVZWFJsS0NrdVoyVjBWR2x0WlNncE8xeHVYRzVqYjI1emRDQk5RVmhmUlV4QlVGTkZSQ0E5SURNek8xeHVYRzVzWlhRZ1ltRnpaU0E5SURBN1hHNXNaWFFnWTNWeWNtVnVkQ0E5SURBN1hHNXNaWFFnWld4aGNITmxaQ0E5SURFMkxqYzdYRzVzWlhRZ1pHbHNZWFJwYjI0Z1BTQXhPMXh1YkdWMElHeHZjM1JVYVcxbElEMGdNRHRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnZTF4dUlDQWdJSFZ3WkdGMFpUb2dLR1p5WVcxbGMzUmhiWEFwSUQwK0lIdGNiaUFnSUNBZ0lDQWdhV1lnS0dKaGMyVWdQVDA5SURBcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOMWNuSmxiblFnUFNCaVlYTmxJRDBnWm5KaGJXVnpkR0Z0Y0R0Y2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJR052Ym5OMElIQnlaWFlnUFNCamRYSnlaVzUwTzF4dUlDQWdJQ0FnSUNCamIyNXpkQ0JzYjNOelFXUnFkWE4wWldRZ1BTQm1jbUZ0WlhOMFlXMXdJQzBnYkc5emRGUnBiV1U3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJRzV2YmtScGJHRjBaV1JGYkdGd2MyVmtJRDBnVFdGMGFDNXRhVzRvYkc5emMwRmthblZ6ZEdWa0lDMGdjSEpsZGl3Z1RVRllYMFZNUVZCVFJVUXBPMXh1SUNBZ0lDQWdJQ0JsYkdGd2MyVmtJRDBnYm05dVJHbHNZWFJsWkVWc1lYQnpaV1FnS2lCa2FXeGhkR2x2Ymp0Y2JpQWdJQ0FnSUNBZ1kzVnljbVZ1ZENBclBTQmxiR0Z3YzJWa08xeHVJQ0FnSUNBZ0lDQnNiM04wVkdsdFpTQXJQU0J1YjI1RWFXeGhkR1ZrUld4aGNITmxaQ0F0SUdWc1lYQnpaV1E3WEc0Z0lDQWdmU3hjYmx4dUlDQWdJSE4wWVhKME9pQW9LU0E5UGlCamRYSnlaVzUwSUQwZ1kzVnljbVZ1ZEZScGJXVW9LU3hjYmx4dUlDQWdJR2RsZEVWc1lYQnpaV1E2SUNncElEMCtJR1ZzWVhCelpXUmNibjA3WEc1Y2JtVjRjRzl5ZENCbWRXNWpkR2x2YmlCelpYUkVhV3hoZEdsdmJpaHVaWGRFYVd4aGRHbHZiaWtnZTF4dUlDQWdJR1JwYkdGMGFXOXVJRDBnYm1WM1JHbHNZWFJwYjI0N1hHNTlJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZnJhbWVzeW5jL2xpYi9pbmMvdGltZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuLypcbiAgICBEZXRlY3QgYW5kIGxvYWQgYW4gYXBwcm9wcmlhdGUgY2xvY2sgc2V0dGluZyBmb3IgdGhlIGVudmlyb25tZW50XG4qL1xuXG52YXIgaGFzUkFGID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA/IHRydWUgOiBmYWxzZTtcblxudmFyIHRpY2sgPSB1bmRlZmluZWQ7XG5cbmlmIChoYXNSQUYpIHtcbiAgICB0aWNrID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZTtcbn0gZWxzZSB7XG4gICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLypcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBGb3IgSUU4LzkgRmxpbnN0b25lcyBhbmQgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRzXG4gICAgICAgICAgICAgVGFrZW4gZnJvbSBQYXVsIElyaXNoLiBXZSd2ZSBzdHJpcHBlZCBvdXQgY2FuY2VsQW5pbWF0aW9uRnJhbWUgY2hlY2tzIGJlY2F1c2Ugd2UgZG9uJ3QgZm94IHdpdGggdGhhdFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBodHRwOi8vcGF1bGlyaXNoLmNvbS8yMDExL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtYW5pbWF0aW5nL1xuICAgICAgICAgICAgaHR0cDovL215Lm9wZXJhLmNvbS9lbW9sbGVyL2Jsb2cvMjAxMS8xMi8yMC9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWVyLWFuaW1hdGluZ1xuICAgICAgICAgICAgIFxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHBvbHlmaWxsIGJ5IEVyaWsgTcO2bGxlci4gZml4ZXMgZnJvbSBQYXVsIElyaXNoIGFuZCBUaW5vIFppamRlbFxuICAgICAgICAgICAgIFxuICAgICAgICAgICAgTUlUIGxpY2Vuc2VcbiAgICAgICAgKi9cbiAgICAgICAgdmFyIGxhc3RUaW1lID0gMDtcblxuICAgICAgICB0aWNrID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB2YXIgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgIHZhciB0aW1lVG9DYWxsID0gTWF0aC5tYXgoMCwgMTYgLSAoY3VycmVudFRpbWUgLSBsYXN0VGltZSkpO1xuXG4gICAgICAgICAgICBsYXN0VGltZSA9IGN1cnJlbnRUaW1lICsgdGltZVRvQ2FsbDtcblxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGxhc3RUaW1lKTtcbiAgICAgICAgICAgIH0sIHRpbWVUb0NhbGwpO1xuICAgICAgICB9O1xuICAgIH0pKCk7XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHRpY2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5cGJtTXZkR2xqYXk1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3TzBGQlNVRXNTVUZCVFN4TlFVRk5MRWRCUVVjc1FVRkJReXhQUVVGUExFMUJRVTBzUzBGQlN5eFhRVUZYTEVsQlFVa3NUVUZCVFN4RFFVRkRMSEZDUVVGeFFpeEhRVUZKTEVsQlFVa3NSMEZCUnl4TFFVRkxMRU5CUVVNN08wRkJSVGxHTEVsQlFVa3NTVUZCU1N4WlFVRkJMRU5CUVVNN08wRkJSVlFzU1VGQlNTeE5RVUZOTEVWQlFVVTdRVUZEVWl4UlFVRkpMRWRCUVVjc1RVRkJUU3hEUVVGRExIRkNRVUZ4UWl4RFFVRkRPME5CUlhaRExFMUJRVTA3T3pzN096czdPenM3T3pzN096dEJRV1ZJTEZsQlFVa3NVVUZCVVN4SFFVRkhMRU5CUVVNc1EwRkJRenM3UVVGRmFrSXNXVUZCU1N4SFFVRkhMRlZCUVVNc1VVRkJVU3hGUVVGTE8wRkJRMnBDTEdkQ1FVRk5MRmRCUVZjc1IwRkJSeXhKUVVGSkxFbEJRVWtzUlVGQlJTeERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRPMEZCUTNwRExHZENRVUZOTEZWQlFWVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVsQlFVa3NWMEZCVnl4SFFVRkhMRkZCUVZFc1EwRkJRU3hCUVVGRExFTkJRVU1zUTBGQlF6czdRVUZGT1VRc2IwSkJRVkVzUjBGQlJ5eFhRVUZYTEVkQlFVY3NWVUZCVlN4RFFVRkRPenRCUVVWd1F5eHpRa0ZCVlN4RFFVRkRPM1ZDUVVGTkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTTdZVUZCUVN4RlFVRkZMRlZCUVZVc1EwRkJReXhEUVVGRE8xTkJRM0JFTEVOQlFVRTdPME5CUTBvN08ydENRVVZqTEVsQlFVa2lMQ0ptYVd4bElqb2lkR2xqYXk1cWN5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaThxWEc0Z0lDQWdSR1YwWldOMElHRnVaQ0JzYjJGa0lHRnVJR0Z3Y0hKdmNISnBZWFJsSUdOc2IyTnJJSE5sZEhScGJtY2dabTl5SUhSb1pTQmxiblpwY205dWJXVnVkRnh1S2k5Y2JseHVZMjl1YzNRZ2FHRnpVa0ZHSUQwZ0tIUjVjR1Z2WmlCM2FXNWtiM2NnSVQwOUlDZDFibVJsWm1sdVpXUW5JQ1ltSUhkcGJtUnZkeTV5WlhGMVpYTjBRVzVwYldGMGFXOXVSbkpoYldVcElEOGdkSEoxWlNBNklHWmhiSE5sTzF4dVhHNXNaWFFnZEdsamF6dGNibHh1YVdZZ0tHaGhjMUpCUmlrZ2UxeHVJQ0FnSUhScFkyc2dQU0IzYVc1a2IzY3VjbVZ4ZFdWemRFRnVhVzFoZEdsdmJrWnlZVzFsTzF4dVhHNTlJR1ZzYzJVZ2UxeHVJQ0FnSUM4cVhHNGdJQ0FnSUNBZ0lISmxjWFZsYzNSQmJtbHRZWFJwYjI1R2NtRnRaU0J3YjJ4NVptbHNiRnh1SUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnUm05eUlFbEZPQzg1SUVac2FXNXpkRzl1WlhNZ1lXNWtJRzV2YmkxaWNtOTNjMlZ5SUdWdWRtbHliMjV0Wlc1MGMxeHVYRzRnSUNBZ0lDQWdJRlJoYTJWdUlHWnliMjBnVUdGMWJDQkpjbWx6YUM0Z1YyVW5kbVVnYzNSeWFYQndaV1FnYjNWMElHTmhibU5sYkVGdWFXMWhkR2x2YmtaeVlXMWxJR05vWldOcmN5QmlaV05oZFhObElIZGxJR1J2YmlkMElHWnZlQ0IzYVhSb0lIUm9ZWFJjYmlBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUdoMGRIQTZMeTl3WVhWc2FYSnBjMmd1WTI5dEx6SXdNVEV2Y21WeGRXVnpkR0Z1YVcxaGRHbHZibVp5WVcxbExXWnZjaTF6YldGeWRDMWhibWx0WVhScGJtY3ZYRzRnSUNBZ0lDQWdJR2gwZEhBNkx5OXRlUzV2Y0dWeVlTNWpiMjB2WlcxdmJHeGxjaTlpYkc5bkx6SXdNVEV2TVRJdk1qQXZjbVZ4ZFdWemRHRnVhVzFoZEdsdmJtWnlZVzFsTFdadmNpMXpiV0Z5ZEMxbGNpMWhibWx0WVhScGJtZGNiaUFnSUNBZ0lDQWdJRnh1SUNBZ0lDQWdJQ0J5WlhGMVpYTjBRVzVwYldGMGFXOXVSbkpoYldVZ2NHOXNlV1pwYkd3Z1lua2dSWEpwYXlCTnc3WnNiR1Z5TGlCbWFYaGxjeUJtY205dElGQmhkV3dnU1hKcGMyZ2dZVzVrSUZScGJtOGdXbWxxWkdWc1hHNGdJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdUVWxVSUd4cFkyVnVjMlZjYmlBZ0lDQXFMMXh1SUNBZ0lHeGxkQ0JzWVhOMFZHbHRaU0E5SURBN1hHNWNiaUFnSUNCMGFXTnJJRDBnS0dOaGJHeGlZV05yS1NBOVBpQjdYRzRnSUNBZ0lDQWdJR052Ym5OMElHTjFjbkpsYm5SVWFXMWxJRDBnYm1WM0lFUmhkR1VvS1M1blpYUlVhVzFsS0NrN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUhScGJXVlViME5oYkd3Z1BTQk5ZWFJvTG0xaGVDZ3dMQ0F4TmlBdElDaGpkWEp5Wlc1MFZHbHRaU0F0SUd4aGMzUlVhVzFsS1NrN1hHNWNiaUFnSUNBZ0lDQWdiR0Z6ZEZScGJXVWdQU0JqZFhKeVpXNTBWR2x0WlNBcklIUnBiV1ZVYjBOaGJHdzdYRzVjYmlBZ0lDQWdJQ0FnYzJWMFZHbHRaVzkxZENnb0tTQTlQaUJqWVd4c1ltRmpheWhzWVhOMFZHbHRaU2tzSUhScGJXVlViME5oYkd3cE8xeHVJQ0FnSUgxY2JuMWNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdkR2xqYXpzaVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9mcmFtZXN5bmMvbGliL2luYy90aWNrLmpzXG4gKiogbW9kdWxlIGlkID0gMTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIiwiZmlsZSI6InBvcG1vdGlvbi5nbG9iYWwuanMifQ==