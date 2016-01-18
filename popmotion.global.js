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
	
	var _module = __webpack_require__(1);
	
	var _module2 = _interopRequireDefault(_module);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var UIref = window.ui;
	
	_module2.default.noConflict = function () {
	    window.ui = UIref;
	};
	
	window.ui = window.popmotion = _module2.default;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdsb2JhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUVBLElBQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUM7O0FBRXhCLGlCQUFVLFVBQVUsR0FBRyxZQUFZO0FBQy9CLFVBQU0sQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDO0NBQ3JCLENBQUM7O0FBRUYsTUFBTSxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsU0FBUyxtQkFBWSxDQUFDIiwiZmlsZSI6Imdsb2JhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwb3Btb3Rpb24gZnJvbSAnLi9tb2R1bGUnO1xuXG5jb25zdCBVSXJlZiA9IHdpbmRvdy51aTtcblxucG9wbW90aW9uLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgd2luZG93LnVpID0gVUlyZWY7XG59O1xuXG53aW5kb3cudWkgPSB3aW5kb3cucG9wbW90aW9uID0gcG9wbW90aW9uOyJdfQ==

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _popmotion = __webpack_require__(2);
	
	var _popmotion2 = _interopRequireDefault(_popmotion);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _popmotion2.default;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6W119

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Tween = __webpack_require__(3);
	
	var _Tween2 = _interopRequireDefault(_Tween);
	
	var _Physics = __webpack_require__(4);
	
	var _Physics2 = _interopRequireDefault(_Physics);
	
	var _Track = __webpack_require__(5);
	
	var _Track2 = _interopRequireDefault(_Track);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var popmotion = { Tween: _Tween2.default, Physics: _Physics2.default, Track: _Track2.default };
	
	module.exports = popmotion;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcG1vdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBSUEsSUFBTSxTQUFTLEdBQUcsRUFBRSxLQUFLLGlCQUFBLEVBQUUsT0FBTyxtQkFBQSxFQUFFLEtBQUssaUJBQUEsRUFBRSxDQUFDOztBQUU1QyxNQUFNLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyIsImZpbGUiOiJwb3Btb3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHdlZW4gZnJvbSAnLi9hY3Rpb25zL1R3ZWVuJztcbmltcG9ydCBQaHlzaWNzIGZyb20gJy4vYWN0aW9ucy9QaHlzaWNzJztcbmltcG9ydCBUcmFjayBmcm9tICcuL2FjdGlvbnMvVHJhY2snO1xuXG5jb25zdCBwb3Btb3Rpb24gPSB7IFR3ZWVuLCBQaHlzaWNzLCBUcmFjayB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBvcG1vdGlvbjsiXX0=

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
	        this.elapsed += elapsed * this.dilate * this.playDirection;
	        this.ended = true;
	
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
	        this.elapsed = this.duration * progress;
	        this.once();
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
	//# sourceMappingURL=data:application/json;base64,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LENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztBQUN4QyxZQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDZjs7QUF0RWdCLFNBQUssV0F3RXRCLGVBQWUsOEJBQUc7QUFDZCw0QkFDTyxrQkFBTSxlQUFlLEtBQUEsTUFBRTtBQUMxQixpQkFBSyxFQUFFLENBQUM7QUFDUixrQkFBTSxFQUFFLENBQUM7QUFDVCxvQkFBUSxFQUFFLEdBQUc7QUFDYixnQkFBSSxFQUFFLEtBQUs7QUFDWCxnQkFBSSxFQUFFLEtBQUs7QUFDWCxnQkFBSSxFQUFFLEtBQUs7QUFDWCx5QkFBYSxFQUFFLENBQUM7QUFDaEIsaUJBQUssRUFBRSxLQUFLO0FBQ1osbUJBQU8sRUFBRSxDQUFDO1dBQ1o7S0FDTDs7QUFyRmdCLFNBQUssV0F1RnRCLGVBQWUsOEJBQUc7QUFDZCw0QkFDTyxrQkFBTSxlQUFlLEtBQUEsTUFBRTtBQUMxQixpQkFBSyxFQUFFLENBQUM7QUFDUixvQkFBUSxFQUFFLEdBQUc7QUFDYixnQkFBSSxFQUFFLFNBQVM7QUFDZixtQkFBTyxFQUFFLENBQUM7QUFDVixtQkFBTyxFQUFFLENBQUM7QUFDVixpQkFBSyxFQUFFLENBQUM7QUFDUixnQkFBSSxFQUFFLENBQUM7QUFDUCxjQUFFLEVBQUUsQ0FBQztBQUNMLGlCQUFLLEVBQUUsS0FBSztXQUNkO0tBQ0w7O0FBcEdnQixTQUFLLFdBc0d0QixtQkFBbUIsa0NBQUc7QUFDbEIsZUFBTyxJQUFJLENBQUM7S0FDZjs7V0F4R2dCLEtBQUs7OztrQkFBTCxLQUFLIiwiZmlsZSI6IlR3ZWVuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFjdGlvbiBmcm9tICcuL0FjdGlvbic7XG5pbXBvcnQgcHJlc2V0RWFzaW5nIGZyb20gJy4vdHdlZW4vcHJlc2V0LWVhc2luZyc7XG5pbXBvcnQge1xuICAgIGN1cnJlbnRUaW1lLFxuICAgIGVhY2gsXG4gICAgaXNOdW0sXG4gICAgaXNTdHJpbmdcbn0gZnJvbSAndWktdXRpbHMnO1xuaW1wb3J0IHtcbiAgICByZXN0cmljdCxcbiAgICBnZXRQcm9ncmVzc0Zyb21WYWx1ZSxcbiAgICBnZXRWYWx1ZUZyb21Qcm9ncmVzcyxcbiAgICBzdGVwUHJvZ3Jlc3Ncbn0gZnJvbSAndWktY2FsYyc7XG5cbmNvbnN0IENPVU5UID0gJ0NvdW50JztcbmNvbnN0IE5FWFRfU1RFUFMgPSB7XG4gICAgbG9vcDogJ3Jlc3RhcnQnLFxuICAgIHlveW86ICdyZXZlcnNlJyxcbiAgICBmbGlwOiAnZmxpcFZhbHVlcydcbn07XG5cbi8qXG4gICAgRWFzZSB2YWx1ZSB3aXRoaW4gcmFuZ2VkIHBhcmFtZXRlcnNcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFByb2dyZXNzIGJldHdlZW4gMCBhbmQgMVxuICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgb2YgMCBwcm9ncmVzc1xuICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgb2YgMSBwcm9ncmVzc1xuICAgIEBwYXJhbSBbc3RyaW5nIHx8IGZ1bmN0aW9uXTogTmFtZSBvZiBwcmVzZXQgZWFzaW5nXG4gICAgICAgIHRvIHVzZSBvciBnZW5lcmF0ZWQgZWFzaW5nIGZ1bmN0aW9uXG4gICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgb2YgZWFzZWQgcHJvZ3Jlc3MgaW4gcmFuZ2VcbiovIFxuZnVuY3Rpb24gZWFzZShwcm9ncmVzcywgZnJvbSwgdG8sIGVhc2UpIHtcbiAgICBjb25zdCBwcm9ncmVzc0xpbWl0ZWQgPSByZXN0cmljdChwcm9ncmVzcywgMCwgMSk7XG4gICAgY29uc3QgZWFzaW5nRnVuY3Rpb24gPSBpc1N0cmluZyhlYXNlKSA/IHByZXNldEVhc2luZ1tlYXNlXSA6IGVhc2U7XG4gICAgY29uc3QgZWFzZWRQcm9ncmVzcyA9IGVhc2luZ0Z1bmN0aW9uKHByb2dyZXNzTGltaXRlZCk7XG5cbiAgICByZXR1cm4gZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MoZWFzZWRQcm9ncmVzcywgZnJvbSwgdG8pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHdlZW4gZXh0ZW5kcyBBY3Rpb24ge1xuICAgIHN0YXJ0KCkge1xuICAgICAgICBzdXBlci5zdGFydCgpO1xuICAgICAgICB0aGlzLmVsYXBzZWQgPSAwO1xuICAgICAgICB0aGlzLmZsaXBDb3VudCA9IHRoaXMueW95b0NvdW50ID0gdGhpcy5sb29wQ291bnQgPSAwO1xuICAgIH1cblxuICAgIHVwZGF0ZSh0d2VlbiwgZnJhbWVTdGFtcCwgZWxhcHNlZCkge1xuICAgICAgICBjb25zdCBwcm9ncmVzc1RhcmdldCA9ICh0aGlzLnBsYXlEaXJlY3Rpb24gPT09IDEpID8gMSA6IDA7XG4gICAgICAgIHRoaXMuZWxhcHNlZCArPSAoZWxhcHNlZCAqIHRoaXMuZGlsYXRlKSAqIHRoaXMucGxheURpcmVjdGlvbjtcbiAgICAgICAgdGhpcy5lbmRlZCA9IHRydWU7XG5cbiAgICAgICAgZWFjaCh0aGlzLnZhbHVlcywgKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgICAgIGxldCBwcm9ncmVzcyA9IHJlc3RyaWN0KGdldFByb2dyZXNzRnJvbVZhbHVlKHRoaXMuZWxhcHNlZCAtIHZhbHVlLmRlbGF5LCAwLCB2YWx1ZS5kdXJhdGlvbiksIDAsIDEpO1xuXG4gICAgICAgICAgICAvLyBNYXJrIFR3ZWVuIGFzIE5PVCBlbmRlZCBpZiBzdGlsbCBpbiBwcm9ncmVzc1xuICAgICAgICAgICAgaWYgKHByb2dyZXNzICE9PSBwcm9ncmVzc1RhcmdldCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW5kZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU3RlcCBwcm9ncmVzcyBpZiB3ZSdyZSBzdGVwcGluZ1xuICAgICAgICAgICAgaWYgKHZhbHVlLnN0ZXBzKSB7XG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3MgPSBzdGVwUHJvZ3Jlc3MocHJvZ3Jlc3MsIHZhbHVlLnN0ZXBzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRWFzZSBwcm9ncmVzc1xuICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IGVhc2UocHJvZ3Jlc3MsIHZhbHVlLmZyb20sIHZhbHVlLnRvLCB2YWx1ZS5lYXNlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnJhbWVFbmQoKSB7XG4gICAgICAgIGlmICh0aGlzLmVuZGVkKSB7XG4gICAgICAgICAgICBsZXQgc3RlcFRha2VuID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGVhY2goTkVYVF9TVEVQUywgKG1ldGhvZCwgc3RlcCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1heFN0ZXBzID0gdGhpc1tzdGVwXTtcblxuICAgICAgICAgICAgICAgIGlmIChtYXhTdGVwcyA9PT0gdHJ1ZSB8fCAoaXNOdW0obWF4U3RlcHMpICYmIG1heFN0ZXBzID4gdGhpc1tzdGVwICsgQ09VTlRdKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzW3N0ZXAgKyBDT1VOVF0rKztcbiAgICAgICAgICAgICAgICAgICAgc3RlcFRha2VuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpc1ttZXRob2RdKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICghc3RlcFRha2VuKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmbGlwVmFsdWVzKCkge1xuICAgICAgICB0aGlzLmVsYXBzZWQgPSB0aGlzLmR1cmF0aW9uIC0gdGhpcy5lbGFwc2VkO1xuXG4gICAgICAgIGVhY2godGhpcy52YWx1ZXMsICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgICAgICBbdmFsdWUudG8sIHZhbHVlLmZyb21dID0gW3ZhbHVlLmZyb20sIHZhbHVlLnRvXTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV2ZXJzZSgpIHtcbiAgICAgICAgdGhpcy5wbGF5RGlyZWN0aW9uICo9IC0xO1xuICAgIH1cblxuICAgIHJlc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuZWxhcHNlZCA9ICh0aGlzLnBsYXlEaXJlY3Rpb24gPT09IDEpID8gMCA6IHRoaXMuZHVyYXRpb247XG4gICAgICAgIHRoaXMuc3RhcnRlZCA9IGN1cnJlbnRUaW1lKCk7XG4gICAgfVxuXG4gICAgc2Vlayhwcm9ncmVzcykge1xuICAgICAgICB0aGlzLmVsYXBzZWQgPSB0aGlzLmR1cmF0aW9uICogcHJvZ3Jlc3M7XG4gICAgICAgIHRoaXMub25jZSgpO1xuICAgIH1cbiAgICBcbiAgICBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdXBlci5nZXREZWZhdWx0UHJvcHMoKSxcbiAgICAgICAgICAgIGRlbGF5OiAwLFxuICAgICAgICAgICAgZGlsYXRlOiAxLFxuICAgICAgICAgICAgZHVyYXRpb246IDMwMCxcbiAgICAgICAgICAgIGxvb3A6IGZhbHNlLFxuICAgICAgICAgICAgeW95bzogZmFsc2UsXG4gICAgICAgICAgICBmbGlwOiBmYWxzZSxcbiAgICAgICAgICAgIHBsYXlEaXJlY3Rpb246IDEsXG4gICAgICAgICAgICBlbmRlZDogZmFsc2UsXG4gICAgICAgICAgICBlbGFwc2VkOiAwXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZ2V0RGVmYXVsdFZhbHVlKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3VwZXIuZ2V0RGVmYXVsdFZhbHVlKCksXG4gICAgICAgICAgICBkZWxheTogMCxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAzMDAsXG4gICAgICAgICAgICBlYXNlOiAnZWFzZU91dCcsXG4gICAgICAgICAgICBlbGFwc2VkOiAwLFxuICAgICAgICAgICAgc3RhZ2dlcjogMCxcbiAgICAgICAgICAgIHN0ZXBzOiAwLFxuICAgICAgICAgICAgZnJvbTogMCxcbiAgICAgICAgICAgIHRvOiAwLFxuICAgICAgICAgICAgcm91bmQ6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZ2V0RGVmYXVsdFZhbHVlUHJvcCgpIHtcbiAgICAgICAgcmV0dXJuICd0byc7XG4gICAgfVxufVxuIl19

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
	        _this.inputOrigin = {};
	        return _this;
	    }
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRyYWNrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSXFCLEtBQUs7Y0FBTCxLQUFLOztBQUN0QixhQURpQixLQUFLLENBQ1YsS0FBSyxFQUFFLEtBQUssRUFBRTs4QkFEVCxLQUFLOztxREFFbEIsbUJBQU0sS0FBSyxDQUFDOztBQUNaLGNBQUssS0FBSyxHQUFHLEtBQUssQ0FBQztBQUNuQixjQUFLLFdBQVcsR0FBRyxFQUFFLENBQUM7O0tBQ3pCOztBQUxnQixTQUFLLFdBT3RCLE1BQU0sbUJBQUMsS0FBSyxFQUFFLGFBQWEsRUFBRSxPQUFPLEVBQUU7OztBQUNsQyxZQUFJLENBQUMsV0FBVyxHQUFHLFlBWGxCLE1BQU0sRUFXbUIsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDOztBQUVoRSxxQkFaQyxJQUFJLEVBWUEsSUFBSSxDQUFDLE1BQU0sRUFBRSxVQUFDLEtBQUssRUFBRSxHQUFHLEVBQUs7QUFDOUIsZ0JBQUksT0FBSyxXQUFXLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO0FBQ3RDLG9CQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUU7QUFDZCx5QkFBSyxDQUFDLE9BQU8sR0FBRyxPQUFLLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQzNDLE1BQU07QUFDSCx5QkFBSyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsTUFBTSxHQUFHLE9BQUssV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUN4RDthQUNKO1NBQ0osQ0FBQyxDQUFDO0tBQ047O0FBbkJnQixTQUFLLFdBcUJ0QixlQUFlLDhCQUFHO0FBQ2QsZUFBTztBQUNILGVBQUcsRUFBRSxDQUFDO0FBQ04scUJBQVMsRUFBRSxDQUFDO0FBQ1osa0JBQU0sRUFBRSxLQUFLO0FBQ2Isa0JBQU0sRUFBRSxDQUFDO1NBQ1osQ0FBQztLQUNMOztXQTVCZ0IsS0FBSzs7O2tCQUFMLEtBQUsiLCJmaWxlIjoiVHJhY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWN0aW9uIGZyb20gJy4vQWN0aW9uJztcbmltcG9ydCB7IG9mZnNldCB9IGZyb20gJ3VpLWNhbGMnO1xuaW1wb3J0IHsgZWFjaCB9IGZyb20gJ3VpLXV0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhY2sgZXh0ZW5kcyBBY3Rpb24ge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzLCBpbnB1dCkge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuaW5wdXQgPSBpbnB1dDtcbiAgICAgICAgdGhpcy5pbnB1dE9yaWdpbiA9IHt9O1xuICAgIH1cblxuICAgIHVwZGF0ZSh0cmFjaywgZnJhbWVEdXJhdGlvbiwgZWxhcHNlZCkge1xuICAgICAgICB0aGlzLmlucHV0T2Zmc2V0ID0gb2Zmc2V0KHRoaXMuaW5wdXRPcmlnaW4sIHRoaXMuaW5wdXQuY3VycmVudCk7XG5cbiAgICAgICAgZWFjaCh0aGlzLnZhbHVlcywgKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlucHV0T2Zmc2V0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUuZGlyZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSB0aGlzLmlucHV0LmN1cnJlbnRba2V5XTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gdmFsdWUub3JpZ2luICsgdGhpcy5pbnB1dE9mZnNldFtrZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0RGVmYXVsdFZhbHVlKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYW1wOiAxLFxuICAgICAgICAgICAgZXNjYXBlQW1wOiAwLFxuICAgICAgICAgICAgZGlyZWN0OiBmYWxzZSxcbiAgICAgICAgICAgIHNtb290aDogMFxuICAgICAgICB9O1xuICAgIH1cbn1cbiJdfQ==

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
	//# sourceMappingURL=data:application/json;base64,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dGVudCI6WyJpbXBvcnQgeyBQcm9jZXNzIH0gZnJvbSAnZnJhbWVzeW5jJztcbmltcG9ydCB7IGVhY2gsIGlzT2JqIH0gZnJvbSAndWktdXRpbHMnO1xuXG5jb25zdCBERUZBVUxUX1BST1AgPSAnY3VycmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjdGlvbiBleHRlbmRzIFByb2Nlc3Mge1xuICAgIC8qXG4gICAgICAgICMgQWN0aW9uIGNsYXNzIGNvbnN0cnVjdG9yXG4gICAgICAgICMjIEFzc2lnbiBkZWZhdWx0IHByb3BlcnRpZXMgb2YgQWN0aW9uIG9yIGV4dGVuZGVkIGNsYXNzIGFuZCBzZXQgdXNlci1kZWZpbmVkIHByb3BzXG5cbiAgICAgICAgQHBhcmFtIFtvYmplY3RdXG4gICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIC8vIExvYWQgZGVmYXVsdCBwcm9wc1xuICAgICAgICBlYWNoKHRoaXMuZ2V0RGVmYXVsdFByb3BzKCksICh2YWx1ZSwga2V5KSA9PiB0aGlzW2tleV0gPSB2YWx1ZSk7XG5cbiAgICAgICAgdGhpcy52YWx1ZXMgPSB7fTtcbiAgICAgICAgdGhpcy5zZXQocHJvcHMsIHRoaXMuZ2V0RGVmYXVsdFZhbHVlUHJvcCgpKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICAjIFNldCBBY3Rpb24gcHJvcGVydGllc1xuICAgICAgICAjIyBTZXQgdXNlci1kZWZpbmVkIEFjdGlvbiBwcm9wZXJ0aWVzXG5cbiAgICAgICAgQHBhcmFtIFtvYmplY3RdXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXTogTmFtZSBvZiBkZWZhdWx0IHZhbHVlIHByb3BlcnR5IChzZXQgd2hlbiBgdmFsdWVgIGlzICoqbm90KiogcHJvdmlkZWQgYXMgb2JqZWN0KVxuICAgICAgICBAcmV0dXJuIFtBY3Rpb25dXG4gICAgKi9cbiAgICBzZXQocHJvcHMsIGRlZmF1bHRWYWx1ZVByb3AgPSBERUZBVUxUX1BST1ApIHtcbiAgICAgICAgY29uc3QgeyB2YWx1ZXMsIC4uLnByb3BzVG9TZXQgfSA9IHByb3BzO1xuXG4gICAgICAgIC8vIExvb3AgdGhyb3VnaCBub24tYHZhbHVlYCBwcm9wcyBhbmQgc2V0XG4gICAgICAgIGVhY2gocHJvcHNUb1NldCwgKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgICAgIHRoaXNba2V5XSA9IHZhbHVlO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBNZXJnZSBgdmFsdWVgIHByb3BlcnRpZXMgd2l0aCBleGlzdGluZ1xuICAgICAgICBpZiAodmFsdWVzKSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50VmFsdWVzID0gdGhpcy52YWx1ZXM7XG4gICAgICAgICAgICBjb25zdCBkZWZhdWx0VmFsdWUgPSB0aGlzLmdldERlZmF1bHRWYWx1ZSgpO1xuXG4gICAgICAgICAgICBlYWNoKHZhbHVlcywgKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBleGlzdGluZ1ZhbHVlID0gY3VycmVudFZhbHVlc1trZXldO1xuICAgICAgICAgICAgICAgIGxldCBuZXdWYWx1ZSA9IHsgLi4uZGVmYXVsdFZhbHVlIH07XG5cbiAgICAgICAgICAgICAgICBpZiAoaXNPYmoodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0geyAuLi5uZXdWYWx1ZSwgLi4udmFsdWUgfTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZVtkZWZhdWx0VmFsdWVQcm9wXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGN1cnJlbnRWYWx1ZXNba2V5XSA9IGV4aXN0aW5nVmFsdWUgPyB7IC4uLmV4aXN0aW5nVmFsdWUsIC4uLm5ld1ZhbHVlIH0gOiBuZXdWYWx1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcGF1c2UoKSB7XG4gICAgICAgIHN1cGVyLnN0b3AoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmVzdW1lKCkge1xuICAgICAgICBzdXBlci5zdGFydCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICAjIEdldCBkZWZhdWx0IEFjdGlvbiBwcm9wZXJ0aWVzXG5cbiAgICAgICAgQHJldHVybiBbb2JqZWN0XVxuICAgICovXG4gICAgZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgIyBHZXQgZGVmYXVsdCBBY3Rpb24gdmFsdWUgcHJvcGVydGllc1xuXG4gICAgICAgIEByZXR1cm4gW29iamVjdF1cbiAgICAqL1xuICAgIGdldERlZmF1bHRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICAgICAgICB2ZWxvY2l0eTogMFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgICMgR2V0IGRlZmF1bHQgQWN0aW9uIHZhbHVlIHByb3BlcnR5IG5hbWVcbiAgICAgICAgIyMgU2V0IHRoaXMgYHZhbHVlYCBwcm9wZXJ0eSB3aGVuIHNldCBhcyB2YWx1ZSBpbnN0ZWFkIG9mIG9iamVjdFxuXG4gICAgICAgIEByZXR1cm4gW3N0cmluZ11cbiAgICAqL1xuICAgIGdldERlZmF1bHRWYWx1ZVByb3AoKSB7XG4gICAgICAgIHJldHVybiBERUZBVUxUX1BST1A7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgIyBFeHRlbmQgdGhpcyBBY3Rpb24gd2l0aCBuZXcgcHJvcGVydGllc1xuICAgICAgICAjIyBSZXR1cm5zIG5ldyBpbnN0YW5jZSBvZiB0aGlzIEFjdGlvbidzIGBwcm90b3R5cGVgIHdpdGggZXhpc3RpbmcgYW5kIG5ldyBwcm9wZXJ0aWVzXG5cbiAgICAgICAgQHBhcmFtIFtvYmplY3RdIChvcHRpb25hbClcbiAgICAgICAgQHJldHVybiBbQWN0aW9uXVxuICAgICovXG4gICAgZXh0ZW5kKHByb3BzKSB7XG4gICAgICAgIHJldHVybiBuZXcgdGhpcy5jb25zdHJ1Y3Rvcih7IC4uLnRoaXMsIHByb3BzIH0sIHRoaXMuZ2V0RGVmYXVsdFZhbHVlUHJvcCgpKTtcbiAgICB9XG59O1xuIl19

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgM2MwNmVlNzA2NTVjN2YzMDEyZTgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvYWQvZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9sb2FkL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcG9wbW90aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL1R3ZWVuLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL1BoeXNpY3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvVHJhY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvQWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3R3ZWVuL3ByZXNldC1lYXNpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi91aS11dGlscy9saWIvZW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi91aS1jYWxjL2xpYi9lbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy90d2Vlbi9jcmVhdGUtZWFzaW5nLmpzIiwid2VicGFjazovLy8uL34vdWktdXRpbHMvbGliL2luYy9idWZmZXItbWV0aG9kcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2ZyYW1lc3luYy9saWIvZnJhbWVzeW5jLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3R3ZWVuL0Jlemllci5qcyIsIndlYnBhY2s6Ly8vLi9+L2ZyYW1lc3luYy9saWIvUHJvY2Vzcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2ZyYW1lc3luYy9saWIvbG9vcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2ZyYW1lc3luYy9saWIvaW5jL3RpbWVyLmpzIiwid2VicGFjazovLy8uL34vZnJhbWVzeW5jL2xpYi9pbmMvdGljay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx3Qzs7Ozs7OztBQ3RDQTs7QUFFQTs7QUFFQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTJDLG1tQjs7Ozs7O0FDZjNDOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHVDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBLDRDQUEyQywrSDs7Ozs7O0FDWDNDOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHVDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RixrQkFBaUI7O0FBRWpCO0FBQ0EsNENBQTJDLDJrQjs7Ozs7O0FDbkIzQzs7QUFFQSxvREFBbUQsZ0JBQWdCLHNCQUFzQixPQUFPLDJCQUEyQiwwQkFBMEIseURBQXlELDJCQUEyQixFQUFFLEVBQUUsRUFBRSxlQUFlOztBQUU5UDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Ysa0RBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdkosa0RBQWlELGFBQWEsdUZBQXVGLEVBQUUsdUZBQXVGOztBQUU5TywyQ0FBMEMsK0RBQStELHFHQUFxRyxFQUFFLHlFQUF5RSxlQUFlLHlFQUF5RSxFQUFFLEVBQUUsdUhBQXVIOztBQUU1ZTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7O0FBRUE7QUFDQSwyQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQSw0Q0FBMkMsMjdTOzs7Ozs7QUM3SzNDOztBQUVBLG9EQUFtRCxnQkFBZ0Isc0JBQXNCLE9BQU8sMkJBQTJCLDBCQUEwQix5REFBeUQsMkJBQTJCLEVBQUUsRUFBRSxFQUFFLGVBQWU7O0FBRTlQOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHVDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RixrREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SixrREFBaUQsYUFBYSx1RkFBdUYsRUFBRSx1RkFBdUY7O0FBRTlPLDJDQUEwQywrREFBK0QscUdBQXFHLEVBQUUseUVBQXlFLGVBQWUseUVBQXlFLEVBQUUsRUFBRSx1SEFBdUg7O0FBRTVlO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx3RUFBdUUsYUFBYTtBQUNwRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEwQjtBQUMxQjtBQUNBO0FBQ0EsVUFBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFDOztBQUVEO0FBQ0EsNENBQTJDLHV0TDs7Ozs7O0FDdkgzQzs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Ysa0RBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdkosa0RBQWlELGFBQWEsdUZBQXVGLEVBQUUsdUZBQXVGOztBQUU5TywyQ0FBMEMsK0RBQStELHFHQUFxRyxFQUFFLHlFQUF5RSxlQUFlLHlFQUF5RSxFQUFFLEVBQUUsdUhBQXVIOztBQUU1ZTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQSw0Q0FBMkMsbThFOzs7Ozs7QUM5RDNDOztBQUVBLG9EQUFtRCxnQkFBZ0Isc0JBQXNCLE9BQU8sMkJBQTJCLDBCQUEwQix5REFBeUQsMkJBQTJCLEVBQUUsRUFBRSxFQUFFLGVBQWU7O0FBRTlQOztBQUVBOztBQUVBOztBQUVBLCtDQUE4QyxpQkFBaUIscUJBQXFCLG9DQUFvQyw2REFBNkQsb0JBQW9CLEVBQUUsZUFBZTs7QUFFMU4sa0RBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdkosa0RBQWlELGFBQWEsdUZBQXVGLEVBQUUsdUZBQXVGOztBQUU5TywyQ0FBMEMsK0RBQStELHFHQUFxRyxFQUFFLHlFQUF5RSxlQUFlLHlFQUF5RSxFQUFFLEVBQUUsdUhBQXVIOztBQUU1ZTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFVBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0NBQThDOztBQUU5QztBQUNBLCtDQUE4QztBQUM5QyxzQkFBcUI7QUFDckI7QUFDQTs7QUFFQSxxRUFBb0U7QUFDcEUsa0JBQWlCO0FBQ2pCLGNBQWE7QUFDYjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0RBQStDLFNBQVMsZUFBZTtBQUN2RTs7QUFFQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBLDRDQUEyQyxta007Ozs7OztBQ3BKM0M7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBMkMsbXZLOzs7Ozs7QUMxRjNDOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBbUIsYUFBYTtBQUNoQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHFCQUFvQjs7QUFFcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNENBQTJDLG1nUzs7Ozs7O0FDaE0zQzs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUEyQyx1MmU7Ozs7OztBQzFTM0M7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1B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QSxFQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQSw0Q0FBMkMsdTNFIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgM2MwNmVlNzA2NTVjN2YzMDEyZThcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfbW9kdWxlID0gcmVxdWlyZSgnLi9tb2R1bGUnKTtcblxudmFyIF9tb2R1bGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbW9kdWxlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIFVJcmVmID0gd2luZG93LnVpO1xuXG5fbW9kdWxlMi5kZWZhdWx0Lm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgd2luZG93LnVpID0gVUlyZWY7XG59O1xuXG53aW5kb3cudWkgPSB3aW5kb3cucG9wbW90aW9uID0gX21vZHVsZTIuZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbWRzYjJKaGJDNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN096dEJRVVZCTEVsQlFVMHNTMEZCU3l4SFFVRkhMRTFCUVUwc1EwRkJReXhGUVVGRkxFTkJRVU03TzBGQlJYaENMR2xDUVVGVkxGVkJRVlVzUjBGQlJ5eFpRVUZaTzBGQlF5OUNMRlZCUVUwc1EwRkJReXhGUVVGRkxFZEJRVWNzUzBGQlN5eERRVUZETzBOQlEzSkNMRU5CUVVNN08wRkJSVVlzVFVGQlRTeERRVUZETEVWQlFVVXNSMEZCUnl4TlFVRk5MRU5CUVVNc1UwRkJVeXh0UWtGQldTeERRVUZESWl3aVptbHNaU0k2SW1kc2IySmhiQzVxY3lJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCd2IzQnRiM1JwYjI0Z1puSnZiU0FuTGk5dGIyUjFiR1VuTzF4dVhHNWpiMjV6ZENCVlNYSmxaaUE5SUhkcGJtUnZkeTUxYVR0Y2JseHVjRzl3Ylc5MGFXOXVMbTV2UTI5dVpteHBZM1FnUFNCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ2QybHVaRzkzTG5WcElEMGdWVWx5WldZN1hHNTlPMXh1WEc1M2FXNWtiM2N1ZFdrZ1BTQjNhVzVrYjNjdWNHOXdiVzkwYVc5dUlEMGdjRzl3Ylc5MGFXOXVPeUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvbG9hZC9nbG9iYWwuanNcbiAqKiBtb2R1bGUgaWQgPSAwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfcG9wbW90aW9uID0gcmVxdWlyZSgnLi4vcG9wbW90aW9uJyk7XG5cbnZhciBfcG9wbW90aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BvcG1vdGlvbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9wb3Btb3Rpb24yLmRlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJaUlzSW1acGJHVWlPaUp0YjJSMWJHVXVhbk1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2VzExOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvbG9hZC9tb2R1bGUuanNcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfVHdlZW4gPSByZXF1aXJlKCcuL2FjdGlvbnMvVHdlZW4nKTtcblxudmFyIF9Ud2VlbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Ud2Vlbik7XG5cbnZhciBfUGh5c2ljcyA9IHJlcXVpcmUoJy4vYWN0aW9ucy9QaHlzaWNzJyk7XG5cbnZhciBfUGh5c2ljczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9QaHlzaWNzKTtcblxudmFyIF9UcmFjayA9IHJlcXVpcmUoJy4vYWN0aW9ucy9UcmFjaycpO1xuXG52YXIgX1RyYWNrMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RyYWNrKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHBvcG1vdGlvbiA9IHsgVHdlZW46IF9Ud2VlbjIuZGVmYXVsdCwgUGh5c2ljczogX1BoeXNpY3MyLmRlZmF1bHQsIFRyYWNrOiBfVHJhY2syLmRlZmF1bHQgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBwb3Btb3Rpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5CdmNHMXZkR2x2Ymk1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3T3pzN096czdPenM3TzBGQlNVRXNTVUZCVFN4VFFVRlRMRWRCUVVjc1JVRkJSU3hMUVVGTExHbENRVUZCTEVWQlFVVXNUMEZCVHl4dFFrRkJRU3hGUVVGRkxFdEJRVXNzYVVKQlFVRXNSVUZCUlN4RFFVRkRPenRCUVVVMVF5eE5RVUZOTEVOQlFVTXNUMEZCVHl4SFFVRkhMRk5CUVZNc1EwRkJReUlzSW1acGJHVWlPaUp3YjNCdGIzUnBiMjR1YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ1ZIZGxaVzRnWm5KdmJTQW5MaTloWTNScGIyNXpMMVIzWldWdUp6dGNibWx0Y0c5eWRDQlFhSGx6YVdOeklHWnliMjBnSnk0dllXTjBhVzl1Y3k5UWFIbHphV056Snp0Y2JtbHRjRzl5ZENCVWNtRmpheUJtY205dElDY3VMMkZqZEdsdmJuTXZWSEpoWTJzbk8xeHVYRzVqYjI1emRDQndiM0J0YjNScGIyNGdQU0I3SUZSM1pXVnVMQ0JRYUhsemFXTnpMQ0JVY21GamF5QjlPMXh1WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUhCdmNHMXZkR2x2YmpzaVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3BvcG1vdGlvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9BY3Rpb24yID0gcmVxdWlyZSgnLi9BY3Rpb24nKTtcblxudmFyIF9BY3Rpb24zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQWN0aW9uMik7XG5cbnZhciBfcHJlc2V0RWFzaW5nID0gcmVxdWlyZSgnLi90d2Vlbi9wcmVzZXQtZWFzaW5nJyk7XG5cbnZhciBfcHJlc2V0RWFzaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ByZXNldEVhc2luZyk7XG5cbnZhciBfdWlVdGlscyA9IHJlcXVpcmUoJ3VpLXV0aWxzJyk7XG5cbnZhciBfdWlDYWxjID0gcmVxdWlyZSgndWktY2FsYycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBDT1VOVCA9ICdDb3VudCc7XG52YXIgTkVYVF9TVEVQUyA9IHtcbiAgICBsb29wOiAncmVzdGFydCcsXG4gICAgeW95bzogJ3JldmVyc2UnLFxuICAgIGZsaXA6ICdmbGlwVmFsdWVzJ1xufTtcblxuLypcbiAgICBFYXNlIHZhbHVlIHdpdGhpbiByYW5nZWQgcGFyYW1ldGVyc1xuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogUHJvZ3Jlc3MgYmV0d2VlbiAwIGFuZCAxXG4gICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBvZiAwIHByb2dyZXNzXG4gICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBvZiAxIHByb2dyZXNzXG4gICAgQHBhcmFtIFtzdHJpbmcgfHwgZnVuY3Rpb25dOiBOYW1lIG9mIHByZXNldCBlYXNpbmdcbiAgICAgICAgdG8gdXNlIG9yIGdlbmVyYXRlZCBlYXNpbmcgZnVuY3Rpb25cbiAgICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBvZiBlYXNlZCBwcm9ncmVzcyBpbiByYW5nZVxuKi9cbmZ1bmN0aW9uIGVhc2UocHJvZ3Jlc3MsIGZyb20sIHRvLCBlYXNlKSB7XG4gICAgdmFyIHByb2dyZXNzTGltaXRlZCA9ICgwLCBfdWlDYWxjLnJlc3RyaWN0KShwcm9ncmVzcywgMCwgMSk7XG4gICAgdmFyIGVhc2luZ0Z1bmN0aW9uID0gKDAsIF91aVV0aWxzLmlzU3RyaW5nKShlYXNlKSA/IF9wcmVzZXRFYXNpbmcyLmRlZmF1bHRbZWFzZV0gOiBlYXNlO1xuICAgIHZhciBlYXNlZFByb2dyZXNzID0gZWFzaW5nRnVuY3Rpb24ocHJvZ3Jlc3NMaW1pdGVkKTtcblxuICAgIHJldHVybiAoMCwgX3VpQ2FsYy5nZXRWYWx1ZUZyb21Qcm9ncmVzcykoZWFzZWRQcm9ncmVzcywgZnJvbSwgdG8pO1xufTtcblxudmFyIFR3ZWVuID0gKGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gICAgX2luaGVyaXRzKFR3ZWVuLCBfQWN0aW9uKTtcblxuICAgIGZ1bmN0aW9uIFR3ZWVuKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVHdlZW4pO1xuXG4gICAgICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQWN0aW9uLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgIH1cblxuICAgIFR3ZWVuLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgICAgICBfQWN0aW9uLnByb3RvdHlwZS5zdGFydC5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLmVsYXBzZWQgPSAwO1xuICAgICAgICB0aGlzLmZsaXBDb3VudCA9IHRoaXMueW95b0NvdW50ID0gdGhpcy5sb29wQ291bnQgPSAwO1xuICAgIH07XG5cbiAgICBUd2Vlbi5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKHR3ZWVuLCBmcmFtZVN0YW1wLCBlbGFwc2VkKSB7XG4gICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgIHZhciBwcm9ncmVzc1RhcmdldCA9IHRoaXMucGxheURpcmVjdGlvbiA9PT0gMSA/IDEgOiAwO1xuICAgICAgICB0aGlzLmVsYXBzZWQgKz0gZWxhcHNlZCAqIHRoaXMuZGlsYXRlICogdGhpcy5wbGF5RGlyZWN0aW9uO1xuICAgICAgICB0aGlzLmVuZGVkID0gdHJ1ZTtcblxuICAgICAgICAoMCwgX3VpVXRpbHMuZWFjaCkodGhpcy52YWx1ZXMsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgICAgICB2YXIgcHJvZ3Jlc3MgPSAoMCwgX3VpQ2FsYy5yZXN0cmljdCkoKDAsIF91aUNhbGMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUpKF90aGlzMi5lbGFwc2VkIC0gdmFsdWUuZGVsYXksIDAsIHZhbHVlLmR1cmF0aW9uKSwgMCwgMSk7XG5cbiAgICAgICAgICAgIC8vIE1hcmsgVHdlZW4gYXMgTk9UIGVuZGVkIGlmIHN0aWxsIGluIHByb2dyZXNzXG4gICAgICAgICAgICBpZiAocHJvZ3Jlc3MgIT09IHByb2dyZXNzVGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgX3RoaXMyLmVuZGVkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFN0ZXAgcHJvZ3Jlc3MgaWYgd2UncmUgc3RlcHBpbmdcbiAgICAgICAgICAgIGlmICh2YWx1ZS5zdGVwcykge1xuICAgICAgICAgICAgICAgIHByb2dyZXNzID0gKDAsIF91aUNhbGMuc3RlcFByb2dyZXNzKShwcm9ncmVzcywgdmFsdWUuc3RlcHMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBFYXNlIHByb2dyZXNzXG4gICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gZWFzZShwcm9ncmVzcywgdmFsdWUuZnJvbSwgdmFsdWUudG8sIHZhbHVlLmVhc2UpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgVHdlZW4ucHJvdG90eXBlLmZyYW1lRW5kID0gZnVuY3Rpb24gZnJhbWVFbmQoKSB7XG4gICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAgIGlmICh0aGlzLmVuZGVkKSB7XG4gICAgICAgICAgICB2YXIgc3RlcFRha2VuID0gZmFsc2U7XG5cbiAgICAgICAgICAgICgwLCBfdWlVdGlscy5lYWNoKShORVhUX1NURVBTLCBmdW5jdGlvbiAobWV0aG9kLCBzdGVwKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1heFN0ZXBzID0gX3RoaXMzW3N0ZXBdO1xuXG4gICAgICAgICAgICAgICAgaWYgKG1heFN0ZXBzID09PSB0cnVlIHx8ICgwLCBfdWlVdGlscy5pc051bSkobWF4U3RlcHMpICYmIG1heFN0ZXBzID4gX3RoaXMzW3N0ZXAgKyBDT1VOVF0pIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMzW3N0ZXAgKyBDT1VOVF0rKztcbiAgICAgICAgICAgICAgICAgICAgc3RlcFRha2VuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMzW21ldGhvZF0oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKCFzdGVwVGFrZW4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBUd2Vlbi5wcm90b3R5cGUuZmxpcFZhbHVlcyA9IGZ1bmN0aW9uIGZsaXBWYWx1ZXMoKSB7XG4gICAgICAgIHRoaXMuZWxhcHNlZCA9IHRoaXMuZHVyYXRpb24gLSB0aGlzLmVsYXBzZWQ7XG5cbiAgICAgICAgKDAsIF91aVV0aWxzLmVhY2gpKHRoaXMudmFsdWVzLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICAgICAgdmFyIF9yZWYgPSBbdmFsdWUuZnJvbSwgdmFsdWUudG9dO1xuICAgICAgICAgICAgdmFsdWUudG8gPSBfcmVmWzBdO1xuICAgICAgICAgICAgdmFsdWUuZnJvbSA9IF9yZWZbMV07XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBUd2Vlbi5wcm90b3R5cGUucmV2ZXJzZSA9IGZ1bmN0aW9uIHJldmVyc2UoKSB7XG4gICAgICAgIHRoaXMucGxheURpcmVjdGlvbiAqPSAtMTtcbiAgICB9O1xuXG4gICAgVHdlZW4ucHJvdG90eXBlLnJlc3RhcnQgPSBmdW5jdGlvbiByZXN0YXJ0KCkge1xuICAgICAgICB0aGlzLmVsYXBzZWQgPSB0aGlzLnBsYXlEaXJlY3Rpb24gPT09IDEgPyAwIDogdGhpcy5kdXJhdGlvbjtcbiAgICAgICAgdGhpcy5zdGFydGVkID0gKDAsIF91aVV0aWxzLmN1cnJlbnRUaW1lKSgpO1xuICAgIH07XG5cbiAgICBUd2Vlbi5wcm90b3R5cGUuc2VlayA9IGZ1bmN0aW9uIHNlZWsocHJvZ3Jlc3MpIHtcbiAgICAgICAgdGhpcy5lbGFwc2VkID0gdGhpcy5kdXJhdGlvbiAqIHByb2dyZXNzO1xuICAgICAgICB0aGlzLm9uY2UoKTtcbiAgICB9O1xuXG4gICAgVHdlZW4ucHJvdG90eXBlLmdldERlZmF1bHRQcm9wcyA9IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBfQWN0aW9uLnByb3RvdHlwZS5nZXREZWZhdWx0UHJvcHMuY2FsbCh0aGlzKSwge1xuICAgICAgICAgICAgZGVsYXk6IDAsXG4gICAgICAgICAgICBkaWxhdGU6IDEsXG4gICAgICAgICAgICBkdXJhdGlvbjogMzAwLFxuICAgICAgICAgICAgbG9vcDogZmFsc2UsXG4gICAgICAgICAgICB5b3lvOiBmYWxzZSxcbiAgICAgICAgICAgIGZsaXA6IGZhbHNlLFxuICAgICAgICAgICAgcGxheURpcmVjdGlvbjogMSxcbiAgICAgICAgICAgIGVuZGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGVsYXBzZWQ6IDBcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIFR3ZWVuLnByb3RvdHlwZS5nZXREZWZhdWx0VmFsdWUgPSBmdW5jdGlvbiBnZXREZWZhdWx0VmFsdWUoKSB7XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgX0FjdGlvbi5wcm90b3R5cGUuZ2V0RGVmYXVsdFZhbHVlLmNhbGwodGhpcyksIHtcbiAgICAgICAgICAgIGRlbGF5OiAwLFxuICAgICAgICAgICAgZHVyYXRpb246IDMwMCxcbiAgICAgICAgICAgIGVhc2U6ICdlYXNlT3V0JyxcbiAgICAgICAgICAgIGVsYXBzZWQ6IDAsXG4gICAgICAgICAgICBzdGFnZ2VyOiAwLFxuICAgICAgICAgICAgc3RlcHM6IDAsXG4gICAgICAgICAgICBmcm9tOiAwLFxuICAgICAgICAgICAgdG86IDAsXG4gICAgICAgICAgICByb3VuZDogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIFR3ZWVuLnByb3RvdHlwZS5nZXREZWZhdWx0VmFsdWVQcm9wID0gZnVuY3Rpb24gZ2V0RGVmYXVsdFZhbHVlUHJvcCgpIHtcbiAgICAgICAgcmV0dXJuICd0byc7XG4gICAgfTtcblxuICAgIHJldHVybiBUd2Vlbjtcbn0pKF9BY3Rpb24zLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBUd2Vlbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbFIzWldWdUxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN08wRkJaVUVzU1VGQlRTeExRVUZMTEVkQlFVY3NUMEZCVHl4RFFVRkRPMEZCUTNSQ0xFbEJRVTBzVlVGQlZTeEhRVUZITzBGQlEyWXNVVUZCU1N4RlFVRkZMRk5CUVZNN1FVRkRaaXhSUVVGSkxFVkJRVVVzVTBGQlV6dEJRVU5tTEZGQlFVa3NSVUZCUlN4WlFVRlpPME5CUTNKQ096czdPenM3T3pzN096czdRVUZCUXl4QlFWbEdMRk5CUVZNc1NVRkJTU3hEUVVGRExGRkJRVkVzUlVGQlJTeEpRVUZKTEVWQlFVVXNSVUZCUlN4RlFVRkZMRWxCUVVrc1JVRkJSVHRCUVVOd1F5eFJRVUZOTEdWQlFXVXNSMEZCUnl4WlFYaENlRUlzVVVGQlVTeEZRWGRDZVVJc1VVRkJVU3hGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0QlFVTnFSQ3hSUVVGTkxHTkJRV01zUjBGQlJ5eGhRVFZDZGtJc1VVRkJVU3hGUVRSQ2QwSXNTVUZCU1N4RFFVRkRMRWRCUVVjc2RVSkJRV0VzU1VGQlNTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRPMEZCUTJ4RkxGRkJRVTBzWVVGQllTeEhRVUZITEdOQlFXTXNRMEZCUXl4bFFVRmxMRU5CUVVNc1EwRkJRenM3UVVGRmRFUXNWMEZCVHl4WlFURkNVQ3h2UWtGQmIwSXNSVUV3UWxFc1lVRkJZU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXp0RFFVTjRSQ3hEUVVGRE96dEpRVVZ0UWl4TFFVRkxPMk5CUVV3c1MwRkJTenM3WVVGQlRDeExRVUZMT3poQ1FVRk1MRXRCUVVzN096czdPMEZCUVV3c1UwRkJTeXhYUVVOMFFpeExRVUZMTEc5Q1FVRkhPMEZCUTBvc01FSkJRVTBzUzBGQlN5eExRVUZCTEUxQlFVVXNRMEZCUXp0QlFVTmtMRmxCUVVrc1EwRkJReXhQUVVGUExFZEJRVWNzUTBGQlF5eERRVUZETzBGQlEycENMRmxCUVVrc1EwRkJReXhUUVVGVExFZEJRVWNzU1VGQlNTeERRVUZETEZOQlFWTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1UwRkJVeXhIUVVGSExFTkJRVU1zUTBGQlF6dExRVU40UkRzN1FVRk1aMElzVTBGQlN5eFhRVTkwUWl4TlFVRk5MRzFDUVVGRExFdEJRVXNzUlVGQlJTeFZRVUZWTEVWQlFVVXNUMEZCVHl4RlFVRkZPenM3UVVGREwwSXNXVUZCVFN4alFVRmpMRWRCUVVjc1FVRkJReXhKUVVGSkxFTkJRVU1zWVVGQllTeExRVUZMTEVOQlFVTXNSMEZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8wRkJRekZFTEZsQlFVa3NRMEZCUXl4UFFVRlBMRWxCUVVrc1FVRkJReXhQUVVGUExFZEJRVWNzU1VGQlNTeERRVUZETEUxQlFVMHNSMEZCU1N4SlFVRkpMRU5CUVVNc1lVRkJZU3hEUVVGRE8wRkJRemRFTEZsQlFVa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGRE96dEJRVVZzUWl4eFFrRm9SRW9zU1VGQlNTeEZRV2RFU3l4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRkxGVkJRVU1zUzBGQlN5eEZRVUZGTEVkQlFVY3NSVUZCU3p0QlFVTTVRaXhuUWtGQlNTeFJRVUZSTEVkQlFVY3NXVUUxUTNaQ0xGRkJRVkVzUlVFMFEzZENMRmxCTTBOb1F5eHZRa0ZCYjBJc1JVRXlRMmxETEU5QlFVc3NUMEZCVHl4SFFVRkhMRXRCUVVzc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF5eEZRVUZGTEV0QlFVc3NRMEZCUXl4UlFVRlJMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZET3pzN1FVRkJReXhCUVVkdVJ5eG5Ra0ZCU1N4UlFVRlJMRXRCUVVzc1kwRkJZeXhGUVVGRk8wRkJRemRDTEhWQ1FVRkxMRXRCUVVzc1IwRkJSeXhMUVVGTExFTkJRVU03WVVGRGRFSTdPenRCUVVGQkxFRkJSMFFzWjBKQlFVa3NTMEZCU3l4RFFVRkRMRXRCUVVzc1JVRkJSVHRCUVVOaUxIZENRVUZSTEVkQlFVY3NXVUZzUkhaQ0xGbEJRVmtzUlVGclJIZENMRkZCUVZFc1JVRkJSU3hMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdZVUZEYkVRN096dEJRVUZCTEVGQlIwUXNhVUpCUVVzc1EwRkJReXhQUVVGUExFZEJRVWNzU1VGQlNTeERRVUZETEZGQlFWRXNSVUZCUlN4TFFVRkxMRU5CUVVNc1NVRkJTU3hGUVVGRkxFdEJRVXNzUTBGQlF5eEZRVUZGTEVWQlFVVXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xTkJRM0JGTEVOQlFVTXNRMEZCUXp0TFFVTk9PenRCUVRWQ1owSXNVMEZCU3l4WFFUaENkRUlzVVVGQlVTeDFRa0ZCUnpzN08wRkJRMUFzV1VGQlNTeEpRVUZKTEVOQlFVTXNTMEZCU3l4RlFVRkZPMEZCUTFvc1owSkJRVWtzVTBGQlV5eEhRVUZITEV0QlFVc3NRMEZCUXpzN1FVRkZkRUlzZVVKQmRFVlNMRWxCUVVrc1JVRnpSVk1zVlVGQlZTeEZRVUZGTEZWQlFVTXNUVUZCVFN4RlFVRkZMRWxCUVVrc1JVRkJTenRCUVVNdlFpeHZRa0ZCVFN4UlFVRlJMRWRCUVVjc1QwRkJTeXhKUVVGSkxFTkJRVU1zUTBGQlF6czdRVUZGTlVJc2IwSkJRVWtzVVVGQlVTeExRVUZMTEVsQlFVa3NTVUZCU3l4aFFYaEZkRU1zUzBGQlN5eEZRWGRGZFVNc1VVRkJVU3hEUVVGRExFbEJRVWtzVVVGQlVTeEhRVUZITEU5QlFVc3NTVUZCU1N4SFFVRkhMRXRCUVVzc1EwRkJReXhCUVVGRExFVkJRVVU3UVVGRGVrVXNNa0pCUVVzc1NVRkJTU3hIUVVGSExFdEJRVXNzUTBGQlF5eEZRVUZGTEVOQlFVTTdRVUZEY2tJc05rSkJRVk1zUjBGQlJ5eEpRVUZKTEVOQlFVTTdRVUZEYWtJc01rSkJRVXNzVFVGQlRTeERRVUZETEVWQlFVVXNRMEZCUXp0cFFrRkRiRUk3WVVGRFNpeERRVUZETEVOQlFVTTdPMEZCUlVnc1owSkJRVWtzUTBGQlF5eFRRVUZUTEVWQlFVVTdRVUZEV2l4dlFrRkJTU3hEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETzJGQlEyWTdVMEZEU2p0TFFVTktPenRCUVdoRVowSXNVMEZCU3l4WFFXdEVkRUlzVlVGQlZTeDVRa0ZCUnp0QlFVTlVMRmxCUVVrc1EwRkJReXhQUVVGUExFZEJRVWNzU1VGQlNTeERRVUZETEZGQlFWRXNSMEZCUnl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRE96dEJRVVUxUXl4eFFrRjZSa29zU1VGQlNTeEZRWGxHU3l4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRkxGVkJRVU1zUzBGQlN5eEZRVUZGTEVkQlFVY3NSVUZCU3p0MVFrRkRUQ3hEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVWQlFVVXNTMEZCU3l4RFFVRkRMRVZCUVVVc1EwRkJRenRCUVVFNVF5eHBRa0ZCU3l4RFFVRkRMRVZCUVVVN1FVRkJSU3hwUWtGQlN5eERRVUZETEVsQlFVazdVMEZEZUVJc1EwRkJReXhEUVVGRE8wdEJRMDQ3TzBGQmVFUm5RaXhUUVVGTExGZEJNRVIwUWl4UFFVRlBMSE5DUVVGSE8wRkJRMDRzV1VGQlNTeERRVUZETEdGQlFXRXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJRenRMUVVNMVFqczdRVUUxUkdkQ0xGTkJRVXNzVjBFNFJIUkNMRTlCUVU4c2MwSkJRVWM3UVVGRFRpeFpRVUZKTEVOQlFVTXNUMEZCVHl4SFFVRkhMRUZCUVVNc1NVRkJTU3hEUVVGRExHRkJRV0VzUzBGQlN5eERRVUZETEVkQlFVa3NRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU03UVVGRE9VUXNXVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhoUVhKSGJrSXNWMEZCVnl4SFFYRkhjVUlzUTBGQlF6dExRVU5vUXpzN1FVRnFSV2RDTEZOQlFVc3NWMEZ0UlhSQ0xFbEJRVWtzYVVKQlFVTXNVVUZCVVN4RlFVRkZPMEZCUTFnc1dVRkJTU3hEUVVGRExFOUJRVThzUjBGQlJ5eEpRVUZKTEVOQlFVTXNVVUZCVVN4SFFVRkhMRkZCUVZFc1EwRkJRenRCUVVONFF5eFpRVUZKTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNN1MwRkRaanM3UVVGMFJXZENMRk5CUVVzc1YwRjNSWFJDTEdWQlFXVXNPRUpCUVVjN1FVRkRaQ3cwUWtGRFR5eHJRa0ZCVFN4bFFVRmxMRXRCUVVFc1RVRkJSVHRCUVVNeFFpeHBRa0ZCU3l4RlFVRkZMRU5CUVVNN1FVRkRVaXhyUWtGQlRTeEZRVUZGTEVOQlFVTTdRVUZEVkN4dlFrRkJVU3hGUVVGRkxFZEJRVWM3UVVGRFlpeG5Ra0ZCU1N4RlFVRkZMRXRCUVVzN1FVRkRXQ3huUWtGQlNTeEZRVUZGTEV0QlFVczdRVUZEV0N4blFrRkJTU3hGUVVGRkxFdEJRVXM3UVVGRFdDeDVRa0ZCWVN4RlFVRkZMRU5CUVVNN1FVRkRhRUlzYVVKQlFVc3NSVUZCUlN4TFFVRkxPMEZCUTFvc2JVSkJRVThzUlVGQlJTeERRVUZETzFkQlExbzdTMEZEVERzN1FVRnlSbWRDTEZOQlFVc3NWMEYxUm5SQ0xHVkJRV1VzT0VKQlFVYzdRVUZEWkN3MFFrRkRUeXhyUWtGQlRTeGxRVUZsTEV0QlFVRXNUVUZCUlR0QlFVTXhRaXhwUWtGQlN5eEZRVUZGTEVOQlFVTTdRVUZEVWl4dlFrRkJVU3hGUVVGRkxFZEJRVWM3UVVGRFlpeG5Ra0ZCU1N4RlFVRkZMRk5CUVZNN1FVRkRaaXh0UWtGQlR5eEZRVUZGTEVOQlFVTTdRVUZEVml4dFFrRkJUeXhGUVVGRkxFTkJRVU03UVVGRFZpeHBRa0ZCU3l4RlFVRkZMRU5CUVVNN1FVRkRVaXhuUWtGQlNTeEZRVUZGTEVOQlFVTTdRVUZEVUN4alFVRkZMRVZCUVVVc1EwRkJRenRCUVVOTUxHbENRVUZMTEVWQlFVVXNTMEZCU3p0WFFVTmtPMHRCUTB3N08wRkJjRWRuUWl4VFFVRkxMRmRCYzBkMFFpeHRRa0ZCYlVJc2EwTkJRVWM3UVVGRGJFSXNaVUZCVHl4SlFVRkpMRU5CUVVNN1MwRkRaanM3VjBGNFIyZENMRXRCUVVzN096dHJRa0ZCVEN4TFFVRkxJaXdpWm1sc1pTSTZJbFIzWldWdUxtcHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJRUZqZEdsdmJpQm1jbTl0SUNjdUwwRmpkR2x2YmljN1hHNXBiWEJ2Y25RZ2NISmxjMlYwUldGemFXNW5JR1p5YjIwZ0p5NHZkSGRsWlc0dmNISmxjMlYwTFdWaGMybHVaeWM3WEc1cGJYQnZjblFnZTF4dUlDQWdJR04xY25KbGJuUlVhVzFsTEZ4dUlDQWdJR1ZoWTJnc1hHNGdJQ0FnYVhOT2RXMHNYRzRnSUNBZ2FYTlRkSEpwYm1kY2JuMGdabkp2YlNBbmRXa3RkWFJwYkhNbk8xeHVhVzF3YjNKMElIdGNiaUFnSUNCeVpYTjBjbWxqZEN4Y2JpQWdJQ0JuWlhSUWNtOW5jbVZ6YzBaeWIyMVdZV3gxWlN4Y2JpQWdJQ0JuWlhSV1lXeDFaVVp5YjIxUWNtOW5jbVZ6Y3l4Y2JpQWdJQ0J6ZEdWd1VISnZaM0psYzNOY2JuMGdabkp2YlNBbmRXa3RZMkZzWXljN1hHNWNibU52Ym5OMElFTlBWVTVVSUQwZ0owTnZkVzUwSnp0Y2JtTnZibk4wSUU1RldGUmZVMVJGVUZNZ1BTQjdYRzRnSUNBZ2JHOXZjRG9nSjNKbGMzUmhjblFuTEZ4dUlDQWdJSGx2ZVc4NklDZHlaWFpsY25ObEp5eGNiaUFnSUNCbWJHbHdPaUFuWm14cGNGWmhiSFZsY3lkY2JuMDdYRzVjYmk4cVhHNGdJQ0FnUldGelpTQjJZV3gxWlNCM2FYUm9hVzRnY21GdVoyVmtJSEJoY21GdFpYUmxjbk5jYmlBZ0lDQmNiaUFnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUZCeWIyZHlaWE56SUdKbGRIZGxaVzRnTUNCaGJtUWdNVnh1SUNBZ0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1ZtRnNkV1VnYjJZZ01DQndjbTluY21WemMxeHVJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVm1Gc2RXVWdiMllnTVNCd2NtOW5jbVZ6YzF4dUlDQWdJRUJ3WVhKaGJTQmJjM1J5YVc1bklIeDhJR1oxYm1OMGFXOXVYVG9nVG1GdFpTQnZaaUJ3Y21WelpYUWdaV0Z6YVc1blhHNGdJQ0FnSUNBZ0lIUnZJSFZ6WlNCdmNpQm5aVzVsY21GMFpXUWdaV0Z6YVc1bklHWjFibU4wYVc5dVhHNGdJQ0FnUUhKbGRIVnliaUJiYm5WdFltVnlYVG9nVm1Gc2RXVWdiMllnWldGelpXUWdjSEp2WjNKbGMzTWdhVzRnY21GdVoyVmNiaW92SUZ4dVpuVnVZM1JwYjI0Z1pXRnpaU2h3Y205bmNtVnpjeXdnWm5KdmJTd2dkRzhzSUdWaGMyVXBJSHRjYmlBZ0lDQmpiMjV6ZENCd2NtOW5jbVZ6YzB4cGJXbDBaV1FnUFNCeVpYTjBjbWxqZENod2NtOW5jbVZ6Y3l3Z01Dd2dNU2s3WEc0Z0lDQWdZMjl1YzNRZ1pXRnphVzVuUm5WdVkzUnBiMjRnUFNCcGMxTjBjbWx1WnlobFlYTmxLU0EvSUhCeVpYTmxkRVZoYzJsdVoxdGxZWE5sWFNBNklHVmhjMlU3WEc0Z0lDQWdZMjl1YzNRZ1pXRnpaV1JRY205bmNtVnpjeUE5SUdWaGMybHVaMFoxYm1OMGFXOXVLSEJ5YjJkeVpYTnpUR2x0YVhSbFpDazdYRzVjYmlBZ0lDQnlaWFIxY200Z1oyVjBWbUZzZFdWR2NtOXRVSEp2WjNKbGMzTW9aV0Z6WldSUWNtOW5jbVZ6Y3l3Z1puSnZiU3dnZEc4cE8xeHVmVHRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnWTJ4aGMzTWdWSGRsWlc0Z1pYaDBaVzVrY3lCQlkzUnBiMjRnZTF4dUlDQWdJSE4wWVhKMEtDa2dlMXh1SUNBZ0lDQWdJQ0J6ZFhCbGNpNXpkR0Z5ZENncE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1Wc1lYQnpaV1FnUFNBd08xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1ac2FYQkRiM1Z1ZENBOUlIUm9hWE11ZVc5NWIwTnZkVzUwSUQwZ2RHaHBjeTVzYjI5d1EyOTFiblFnUFNBd08xeHVJQ0FnSUgxY2JseHVJQ0FnSUhWd1pHRjBaU2gwZDJWbGJpd2dabkpoYldWVGRHRnRjQ3dnWld4aGNITmxaQ2tnZTF4dUlDQWdJQ0FnSUNCamIyNXpkQ0J3Y205bmNtVnpjMVJoY21kbGRDQTlJQ2gwYUdsekxuQnNZWGxFYVhKbFkzUnBiMjRnUFQwOUlERXBJRDhnTVNBNklEQTdYRzRnSUNBZ0lDQWdJSFJvYVhNdVpXeGhjSE5sWkNBclBTQW9aV3hoY0hObFpDQXFJSFJvYVhNdVpHbHNZWFJsS1NBcUlIUm9hWE11Y0d4aGVVUnBjbVZqZEdsdmJqdGNiaUFnSUNBZ0lDQWdkR2hwY3k1bGJtUmxaQ0E5SUhSeWRXVTdYRzVjYmlBZ0lDQWdJQ0FnWldGamFDaDBhR2x6TG5aaGJIVmxjeXdnS0haaGJIVmxMQ0JyWlhrcElEMCtJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHeGxkQ0J3Y205bmNtVnpjeUE5SUhKbGMzUnlhV04wS0dkbGRGQnliMmR5WlhOelJuSnZiVlpoYkhWbEtIUm9hWE11Wld4aGNITmxaQ0F0SUhaaGJIVmxMbVJsYkdGNUxDQXdMQ0IyWVd4MVpTNWtkWEpoZEdsdmJpa3NJREFzSURFcE8xeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBdkx5Qk5ZWEpySUZSM1pXVnVJR0Z6SUU1UFZDQmxibVJsWkNCcFppQnpkR2xzYkNCcGJpQndjbTluY21WemMxeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIQnliMmR5WlhOeklDRTlQU0J3Y205bmNtVnpjMVJoY21kbGRDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdVpXNWtaV1FnUFNCbVlXeHpaVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdVM1JsY0NCd2NtOW5jbVZ6Y3lCcFppQjNaU2R5WlNCemRHVndjR2x1WjF4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0haaGJIVmxMbk4wWlhCektTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjSEp2WjNKbGMzTWdQU0J6ZEdWd1VISnZaM0psYzNNb2NISnZaM0psYzNNc0lIWmhiSFZsTG5OMFpYQnpLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdSV0Z6WlNCd2NtOW5jbVZ6YzF4dUlDQWdJQ0FnSUNBZ0lDQWdkbUZzZFdVdVkzVnljbVZ1ZENBOUlHVmhjMlVvY0hKdlozSmxjM01zSUhaaGJIVmxMbVp5YjIwc0lIWmhiSFZsTG5SdkxDQjJZV3gxWlM1bFlYTmxLVHRjYmlBZ0lDQWdJQ0FnZlNrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnWm5KaGJXVkZibVFvS1NCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2gwYUdsekxtVnVaR1ZrS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JzWlhRZ2MzUmxjRlJoYTJWdUlEMGdabUZzYzJVN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUdWaFkyZ29Ua1ZZVkY5VFZFVlFVeXdnS0cxbGRHaHZaQ3dnYzNSbGNDa2dQVDRnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJRzFoZUZOMFpYQnpJRDBnZEdocGMxdHpkR1Z3WFR0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2h0WVhoVGRHVndjeUE5UFQwZ2RISjFaU0I4ZkNBb2FYTk9kVzBvYldGNFUzUmxjSE1wSUNZbUlHMWhlRk4wWlhCeklENGdkR2hwYzF0emRHVndJQ3NnUTA5VlRsUmRLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhR2x6VzNOMFpYQWdLeUJEVDFWT1ZGMHJLenRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2MzUmxjRlJoYTJWdUlEMGdkSEoxWlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkR2hwYzF0dFpYUm9iMlJkS0NrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnZlNrN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDZ2hjM1JsY0ZSaGEyVnVLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXpkRzl3S0NrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JpQWdJQ0JtYkdsd1ZtRnNkV1Z6S0NrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG1Wc1lYQnpaV1FnUFNCMGFHbHpMbVIxY21GMGFXOXVJQzBnZEdocGN5NWxiR0Z3YzJWa08xeHVYRzRnSUNBZ0lDQWdJR1ZoWTJnb2RHaHBjeTUyWVd4MVpYTXNJQ2gyWVd4MVpTd2dhMlY1S1NBOVBpQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCYmRtRnNkV1V1ZEc4c0lIWmhiSFZsTG1aeWIyMWRJRDBnVzNaaGJIVmxMbVp5YjIwc0lIWmhiSFZsTG5SdlhUdGNiaUFnSUNBZ0lDQWdmU2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjbVYyWlhKelpTZ3BJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXdiR0Y1UkdseVpXTjBhVzl1SUNvOUlDMHhPMXh1SUNBZ0lIMWNibHh1SUNBZ0lISmxjM1JoY25Rb0tTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdVpXeGhjSE5sWkNBOUlDaDBhR2x6TG5Cc1lYbEVhWEpsWTNScGIyNGdQVDA5SURFcElEOGdNQ0E2SUhSb2FYTXVaSFZ5WVhScGIyNDdYRzRnSUNBZ0lDQWdJSFJvYVhNdWMzUmhjblJsWkNBOUlHTjFjbkpsYm5SVWFXMWxLQ2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjMlZsYXlod2NtOW5jbVZ6Y3lrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG1Wc1lYQnpaV1FnUFNCMGFHbHpMbVIxY21GMGFXOXVJQ29nY0hKdlozSmxjM003WEc0Z0lDQWdJQ0FnSUhSb2FYTXViMjVqWlNncE8xeHVJQ0FnSUgxY2JpQWdJQ0JjYmlBZ0lDQm5aWFJFWldaaGRXeDBVSEp2Y0hNb0tTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBdUxpNXpkWEJsY2k1blpYUkVaV1poZFd4MFVISnZjSE1vS1N4Y2JpQWdJQ0FnSUNBZ0lDQWdJR1JsYkdGNU9pQXdMRnh1SUNBZ0lDQWdJQ0FnSUNBZ1pHbHNZWFJsT2lBeExGeHVJQ0FnSUNBZ0lDQWdJQ0FnWkhWeVlYUnBiMjQ2SURNd01DeGNiaUFnSUNBZ0lDQWdJQ0FnSUd4dmIzQTZJR1poYkhObExGeHVJQ0FnSUNBZ0lDQWdJQ0FnZVc5NWJ6b2dabUZzYzJVc1hHNGdJQ0FnSUNBZ0lDQWdJQ0JtYkdsd09pQm1ZV3h6WlN4Y2JpQWdJQ0FnSUNBZ0lDQWdJSEJzWVhsRWFYSmxZM1JwYjI0NklERXNYRzRnSUNBZ0lDQWdJQ0FnSUNCbGJtUmxaRG9nWm1Gc2MyVXNYRzRnSUNBZ0lDQWdJQ0FnSUNCbGJHRndjMlZrT2lBd1hHNGdJQ0FnSUNBZ0lIMDdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ1oyVjBSR1ZtWVhWc2RGWmhiSFZsS0NrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnTGk0dWMzVndaWEl1WjJWMFJHVm1ZWFZzZEZaaGJIVmxLQ2tzWEc0Z0lDQWdJQ0FnSUNBZ0lDQmtaV3hoZVRvZ01DeGNiaUFnSUNBZ0lDQWdJQ0FnSUdSMWNtRjBhVzl1T2lBek1EQXNYRzRnSUNBZ0lDQWdJQ0FnSUNCbFlYTmxPaUFuWldGelpVOTFkQ2NzWEc0Z0lDQWdJQ0FnSUNBZ0lDQmxiR0Z3YzJWa09pQXdMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2MzUmhaMmRsY2pvZ01DeGNiaUFnSUNBZ0lDQWdJQ0FnSUhOMFpYQnpPaUF3TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdabkp2YlRvZ01DeGNiaUFnSUNBZ0lDQWdJQ0FnSUhSdk9pQXdMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2NtOTFibVE2SUdaaGJITmxYRzRnSUNBZ0lDQWdJSDA3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdaMlYwUkdWbVlYVnNkRlpoYkhWbFVISnZjQ2dwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUNkMGJ5YzdYRzRnSUNBZ2ZWeHVmVnh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9Ud2Vlbi5qc1xuICoqIG1vZHVsZSBpZCA9IDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9BY3Rpb24yID0gcmVxdWlyZSgnLi9BY3Rpb24nKTtcblxudmFyIF9BY3Rpb24zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQWN0aW9uMik7XG5cbnZhciBfdWlDYWxjID0gcmVxdWlyZSgndWktY2FsYycpO1xuXG52YXIgX3VpVXRpbHMgPSByZXF1aXJlKCd1aS11dGlscycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBQaHlzaWNzID0gKGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gICAgX2luaGVyaXRzKFBoeXNpY3MsIF9BY3Rpb24pO1xuXG4gICAgZnVuY3Rpb24gUGh5c2ljcygpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBoeXNpY3MpO1xuXG4gICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0FjdGlvbi5jYWxsLmFwcGx5KF9BY3Rpb24sIFt0aGlzXS5jb25jYXQoYXJncykpKTtcblxuICAgICAgICBfdGhpcy5pbmFjdGl2ZUZyYW1lcyA9IDA7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBQaHlzaWNzLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUocGh5c2ljcywgZnJhbWVTdGFtcCwgZWxhcHNlZCkge1xuICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICB0aGlzLmhhc0NoYW5nZWQgPSBmYWxzZTtcblxuICAgICAgICAoMCwgX3VpVXRpbHMuZWFjaCkodGhpcy52YWx1ZXMsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgICAgICB2YXIgcHJldmlvdXNWYWx1ZSA9IHZhbHVlLmN1cnJlbnQ7XG5cbiAgICAgICAgICAgIC8vIEFwcGx5IGFjY2VsZXJhdGlvblxuICAgICAgICAgICAgdmFsdWUudmVsb2NpdHkgKz0gKDAsIF91aUNhbGMuc3BlZWRQZXJGcmFtZSkodmFsdWUuZm9yY2UsIGVsYXBzZWQpO1xuXG4gICAgICAgICAgICAvLyBBcHBseSBmcmljdGlvblxuICAgICAgICAgICAgdmFsdWUudmVsb2NpdHkgKj0gTWF0aC5wb3coMSAtIHZhbHVlLmZyaWN0aW9uLCBlbGFwc2VkIC8gMTApO1xuXG4gICAgICAgICAgICAvLyBBcHBseSBzcHJpbmdcbiAgICAgICAgICAgIGlmICh2YWx1ZS5zcHJpbmcgJiYgKDAsIF91aVV0aWxzLmlzTnVtKSh2YWx1ZS50bykpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGlzdGFuY2VUb1RhcmdldCA9IHZhbHVlLnRvIC0gdmFsdWUuY3VycmVudDtcbiAgICAgICAgICAgICAgICB2YWx1ZS52ZWxvY2l0eSArPSBkaXN0YW5jZVRvVGFyZ2V0ICogKDAsIF91aUNhbGMuc3BlZWRQZXJGcmFtZSkodmFsdWUuc3ByaW5nLCBlbGFwc2VkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQXBwbHkgbGF0ZXN0IHZlbG9jaXR5XG4gICAgICAgICAgICB2YWx1ZS5jdXJyZW50ICs9ICgwLCBfdWlDYWxjLnNwZWVkUGVyRnJhbWUpKHZhbHVlLnZlbG9jaXR5LCBlbGFwc2VkKTtcblxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdmFsdWUgaGFzIGNoYW5nZWRcbiAgICAgICAgICAgIGlmICh2YWx1ZS5jdXJyZW50ICE9PSBwcmV2aW91c1ZhbHVlIHx8IE1hdGguYWJzKHZhbHVlLnZlbG9jaXR5KSA+PSB2YWx1ZS5zdG9wU3BlZWQpIHtcbiAgICAgICAgICAgICAgICBfdGhpczIuaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBQaHlzaWNzLnByb3RvdHlwZS5mcmFtZUVuZCA9IGZ1bmN0aW9uIGZyYW1lRW5kKCkge1xuICAgICAgICBpZiAodGhpcy5hdXRvRW5kKSB7XG4gICAgICAgICAgICB0aGlzLmluYWN0aXZlRnJhbWVzID0gdGhpcy5oYXNDaGFuZ2VkID8gMSA6IHRoaXMuaW5hY3RpdmVGcmFtZXMgKyAxO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5pbmFjdGl2ZUZyYW1lcyA+PSB0aGlzLm1heEluYWN0aXZlRnJhbWVzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgIyBHZXQgZGVmYXVsdCBTaW11bGF0ZSBwcm9wc1xuICAgICAgICAgQHJldHVybiBbb2JqZWN0XVxuICAgICovXG5cbiAgICBQaHlzaWNzLnByb3RvdHlwZS5nZXREZWZhdWx0UHJvcHMgPSBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgX0FjdGlvbi5wcm90b3R5cGUuZ2V0RGVmYXVsdFByb3BzLmNhbGwodGhpcyksIHtcbiAgICAgICAgICAgIGF1dG9FbmQ6IHRydWUsXG4gICAgICAgICAgICBtYXhJbmFjdGl2ZUZyYW1lczogM1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgIyBHZXQgZGVmYXVsdCBTaW11bGF0ZSB2YWx1ZSBwcm9wc1xuICAgICAgICAgQHJldHVybiBbb2JqZWN0XVxuICAgICovXG5cbiAgICBQaHlzaWNzLnByb3RvdHlwZS5nZXREZWZhdWx0VmFsdWUgPSBmdW5jdGlvbiBnZXREZWZhdWx0VmFsdWUoKSB7XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgX0FjdGlvbi5wcm90b3R5cGUuZ2V0RGVmYXVsdFZhbHVlLmNhbGwodGhpcyksIHtcbiAgICAgICAgICAgIGZvcmNlOiAwLCAvLyBbbnVtYmVyXTogQWNjZWxlcmF0aW9uIHRvIGFwcGx5IHRvIHZhbHVlLCBpbiB1bml0cyBwZXIgc2Vjb25kXG4gICAgICAgICAgICBib3VuY2U6IDAsIC8vIFtudW1iZXJdOiBGYWN0b3IgdG8gbXVsdGlwbHkgdmVsb2NpdHkgYnkgb24gYm91bmNlXG4gICAgICAgICAgICBzcHJpbmc6IDAsIC8vIFtudW1iZXJdOiBTcHJpbmcgc3RyZW5ndGggZHVyaW5nICdzdHJpbmcnXG4gICAgICAgICAgICBzdG9wU3BlZWQ6IDAuMDAwMSwgLy8gW251bWJlcl06IFN0b3Agc2ltdWxhdGlvbiB1bmRlciB0aGlzIHNwZWVkXG4gICAgICAgICAgICBmcmljdGlvbjogMCAvLyBbbnVtYmVyXTogRnJpY3Rpb24gdG8gYXBwbHkgcGVyIGZyYW1lLCAwLTFcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8qXG4gICAgICAgICMgR2V0IGRlZmF1bHQgU2ltdWxhdGUgdmFsdWUgcHJvcGVydHkgbmFtZVxuICAgICAgICAjIyBTZXQgdmFsdWVzIHRvIHRoaXMgd2hlbiBhIGB2YWx1ZWAgaXMgbm90IHByb3ZpZGVkIGFzIGFuIG9iamVjdFxuICAgICAgICAgQHJldHVybiBbc3RyaW5nXVxuICAgICovXG5cbiAgICBQaHlzaWNzLnByb3RvdHlwZS5nZXREZWZhdWx0VmFsdWVQcm9wID0gZnVuY3Rpb24gZ2V0RGVmYXVsdFZhbHVlUHJvcCgpIHtcbiAgICAgICAgcmV0dXJuICd2ZWxvY2l0eSc7XG4gICAgfTtcblxuICAgIHJldHVybiBQaHlzaWNzO1xufSkoX0FjdGlvbjMuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFBoeXNpY3M7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWxCb2VYTnBZM011YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3T3pzN096czdPenM3T3pzN096dEpRVWx4UWl4UFFVRlBPMk5CUVZBc1QwRkJUenM3UVVGRmVFSXNZVUZHYVVJc1QwRkJUeXhIUVVWSU96aENRVVpLTEU5QlFVODdPekJEUVVWVUxFbEJRVWs3UVVGQlNpeG5Ra0ZCU1RzN08zRkVRVU5tTERCRFFVRlRMRWxCUVVrc1JVRkJRenM3UVVGRFpDeGpRVUZMTEdOQlFXTXNSMEZCUnl4RFFVRkRMRU5CUVVNN08wdEJRek5DT3p0QlFVeG5RaXhYUVVGUExGZEJUM2hDTEUxQlFVMHNiVUpCUVVNc1QwRkJUeXhGUVVGRkxGVkJRVlVzUlVGQlJTeFBRVUZQTEVWQlFVVTdPenRCUVVOcVF5eFpRVUZKTEVOQlFVTXNWVUZCVlN4SFFVRkhMRXRCUVVzc1EwRkJRenM3UVVGRmVFSXNjVUpCV2tNc1NVRkJTU3hGUVZsQkxFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVXNWVUZCUXl4TFFVRkxMRVZCUVVVc1IwRkJSeXhGUVVGTE8wRkJRemxDTEdkQ1FVRk5MR0ZCUVdFc1IwRkJSeXhMUVVGTExFTkJRVU1zVDBGQlR6czdPMEZCUVVNc1FVRkhjRU1zYVVKQlFVc3NRMEZCUXl4UlFVRlJMRWxCUVVrc1dVRnFRbkpDTEdGQlFXRXNSVUZwUW5OQ0xFdEJRVXNzUTBGQlF5eExRVUZMTEVWQlFVVXNUMEZCVHl4RFFVRkRPenM3UVVGQlF5eEJRVWQwUkN4cFFrRkJTeXhEUVVGRExGRkJRVkVzWVVGQlN5eERRVUZETEVkQlFVY3NTMEZCU3l4RFFVRkRMRkZCUVZFc1JVRkJUU3hQUVVGUExFZEJRVWNzUlVGQlJTeERRVUZET3pzN1FVRkJReXhCUVVkNlJDeG5Ra0ZCU1N4TFFVRkxMRU5CUVVNc1RVRkJUU3hKUVVGSkxHRkJkRUpxUWl4TFFVRkxMRVZCYzBKclFpeExRVUZMTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVN1FVRkRha01zYjBKQlFVMHNaMEpCUVdkQ0xFZEJRVWNzUzBGQlN5eERRVUZETEVWQlFVVXNSMEZCUnl4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRE8wRkJRMnhFTEhGQ1FVRkxMRU5CUVVNc1VVRkJVU3hKUVVGSkxHZENRVUZuUWl4SFFVRkhMRmxCZWtJMVF5eGhRVUZoTEVWQmVVSTJReXhMUVVGTExFTkJRVU1zVFVGQlRTeEZRVUZGTEU5QlFVOHNRMEZCUXl4RFFVRkRPMkZCUXpkRk96czdRVUZCUVN4QlFVZEVMR2xDUVVGTExFTkJRVU1zVDBGQlR5eEpRVUZKTEZsQk4wSndRaXhoUVVGaExFVkJOa0p4UWl4TFFVRkxMRU5CUVVNc1VVRkJVU3hGUVVGRkxFOUJRVThzUTBGQlF6czdPMEZCUVVNc1FVRkhlRVFzWjBKQlFVa3NTMEZCU3l4RFFVRkRMRTlCUVU4c1MwRkJTeXhoUVVGaExFbEJRVWtzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUzBGQlN5eERRVUZETEZOQlFWTXNSVUZCUlR0QlFVTm9SaXgxUWtGQlN5eFZRVUZWTEVkQlFVY3NTVUZCU1N4RFFVRkRPMkZCUXpGQ08xTkJRMG9zUTBGQlF5eERRVUZETzB0QlEwNDdPMEZCYWtOblFpeFhRVUZQTEZkQmJVTjRRaXhSUVVGUkxIVkNRVUZITzBGQlExQXNXVUZCU1N4SlFVRkpMRU5CUVVNc1QwRkJUeXhGUVVGRk8wRkJRMlFzWjBKQlFVa3NRMEZCUXl4alFVRmpMRWRCUVVjc1NVRkJTU3hEUVVGRExGVkJRVlVzUjBGQlJ5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMR05CUVdNc1IwRkJSeXhEUVVGRExFTkJRVU03TzBGQlJYQkZMR2RDUVVGSkxFbEJRVWtzUTBGQlF5eGpRVUZqTEVsQlFVa3NTVUZCU1N4RFFVRkRMR2xDUVVGcFFpeEZRVUZGTzBGQlF5OURMRzlDUVVGSkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTTdZVUZEWmp0VFFVTktPMHRCUTBvN096czdPenM3UVVFelEyZENMRmRCUVU4c1YwRnJSSGhDTEdWQlFXVXNPRUpCUVVjN1FVRkRaQ3cwUWtGRFR5eHJRa0ZCVFN4bFFVRmxMRXRCUVVFc1RVRkJSVHRCUVVNeFFpeHRRa0ZCVHl4RlFVRkZMRWxCUVVrN1FVRkRZaXcyUWtGQmFVSXNSVUZCUlN4RFFVRkRPMWRCUTNSQ08wdEJRMHc3T3pzN096czdRVUY0UkdkQ0xGZEJRVThzVjBFclJIaENMR1ZCUVdVc09FSkJRVWM3UVVGRFpDdzBRa0ZEVHl4clFrRkJUU3hsUVVGbExFdEJRVUVzVFVGQlJUdEJRVU14UWl4cFFrRkJTeXhGUVVGRkxFTkJRVU03UVVGRFVpeHJRa0ZCVFN4RlFVRkZMRU5CUVVNN1FVRkRWQ3hyUWtGQlRTeEZRVUZGTEVOQlFVTTdRVUZEVkN4eFFrRkJVeXhGUVVGRkxFMUJRVTA3UVVGRGFrSXNiMEpCUVZFc1JVRkJSU3hEUVVGRE8wRkJRVUVzVjBGRFlqdExRVU5NT3pzN096czdPenRCUVhoRlowSXNWMEZCVHl4WFFXZEdlRUlzYlVKQlFXMUNMR3REUVVGSE8wRkJRMnhDTEdWQlFVOHNWVUZCVlN4RFFVRkRPMHRCUTNKQ096dFhRV3hHWjBJc1QwRkJUenM3TzJ0Q1FVRlFMRTlCUVU4aUxDSm1hV3hsSWpvaVVHaDVjMmxqY3k1cWN5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQkJZM1JwYjI0Z1puSnZiU0FuTGk5QlkzUnBiMjRuTzF4dWFXMXdiM0owSUhzZ2MzQmxaV1JRWlhKR2NtRnRaU3dnYzNCbFpXUlFaWEpUWldOdmJtUWdmU0JtY205dElDZDFhUzFqWVd4akp6dGNibWx0Y0c5eWRDQjdJR1ZoWTJnc0lHbHpUblZ0SUgwZ1puSnZiU0FuZFdrdGRYUnBiSE1uTzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCamJHRnpjeUJRYUhsemFXTnpJR1Y0ZEdWdVpITWdRV04wYVc5dUlIdGNibHh1SUNBZ0lHTnZibk4wY25WamRHOXlLQzR1TG1GeVozTXBJSHRjYmlBZ0lDQWdJQ0FnYzNWd1pYSW9MaTR1WVhKbmN5azdYRzRnSUNBZ0lDQWdJSFJvYVhNdWFXNWhZM1JwZG1WR2NtRnRaWE1nUFNBd08xeHVJQ0FnSUgxY2JseHVJQ0FnSUhWd1pHRjBaU2h3YUhsemFXTnpMQ0JtY21GdFpWTjBZVzF3TENCbGJHRndjMlZrS1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YUdGelEyaGhibWRsWkNBOUlHWmhiSE5sTzF4dVhHNGdJQ0FnSUNBZ0lHVmhZMmdvZEdocGN5NTJZV3gxWlhNc0lDaDJZV3gxWlN3Z2EyVjVLU0E5UGlCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQndjbVYyYVc5MWMxWmhiSFZsSUQwZ2RtRnNkV1V1WTNWeWNtVnVkRHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdMeThnUVhCd2JIa2dZV05qWld4bGNtRjBhVzl1WEc0Z0lDQWdJQ0FnSUNBZ0lDQjJZV3gxWlM1MlpXeHZZMmwwZVNBclBTQnpjR1ZsWkZCbGNrWnlZVzFsS0haaGJIVmxMbVp2Y21ObExDQmxiR0Z3YzJWa0tUdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdRWEJ3YkhrZ1puSnBZM1JwYjI1Y2JpQWdJQ0FnSUNBZ0lDQWdJSFpoYkhWbExuWmxiRzlqYVhSNUlDbzlJQ2d4SUMwZ2RtRnNkV1V1Wm5KcFkzUnBiMjRwSUNvcUlDaGxiR0Z3YzJWa0lDOGdNVEFwTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0F2THlCQmNIQnNlU0J6Y0hKcGJtZGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaDJZV3gxWlM1emNISnBibWNnSmlZZ2FYTk9kVzBvZG1Gc2RXVXVkRzhwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnWkdsemRHRnVZMlZVYjFSaGNtZGxkQ0E5SUhaaGJIVmxMblJ2SUMwZ2RtRnNkV1V1WTNWeWNtVnVkRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IyWVd4MVpTNTJaV3h2WTJsMGVTQXJQU0JrYVhOMFlXNWpaVlJ2VkdGeVoyVjBJQ29nYzNCbFpXUlFaWEpHY21GdFpTaDJZV3gxWlM1emNISnBibWNzSUdWc1lYQnpaV1FwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMeUJCY0hCc2VTQnNZWFJsYzNRZ2RtVnNiMk5wZEhsY2JpQWdJQ0FnSUNBZ0lDQWdJSFpoYkhWbExtTjFjbkpsYm5RZ0t6MGdjM0JsWldSUVpYSkdjbUZ0WlNoMllXeDFaUzUyWld4dlkybDBlU3dnWld4aGNITmxaQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdJQ0FnSUM4dklFTm9aV05ySUdsbUlIWmhiSFZsSUdoaGN5QmphR0Z1WjJWa1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RtRnNkV1V1WTNWeWNtVnVkQ0FoUFQwZ2NISmxkbWx2ZFhOV1lXeDFaU0I4ZkNCTllYUm9MbUZpY3loMllXeDFaUzUyWld4dlkybDBlU2tnUGowZ2RtRnNkV1V1YzNSdmNGTndaV1ZrS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVvWVhORGFHRnVaMlZrSUQwZ2RISjFaVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmU2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdabkpoYldWRmJtUW9LU0I3WEc0Z0lDQWdJQ0FnSUdsbUlDaDBhR2x6TG1GMWRHOUZibVFwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWFXNWhZM1JwZG1WR2NtRnRaWE1nUFNCMGFHbHpMbWhoYzBOb1lXNW5aV1FnUHlBeElEb2dkR2hwY3k1cGJtRmpkR2wyWlVaeVlXMWxjeUFySURFN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaDBhR2x6TG1sdVlXTjBhWFpsUm5KaGJXVnpJRDQ5SUhSb2FYTXViV0Y0U1c1aFkzUnBkbVZHY21GdFpYTXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxuTjBiM0FvS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYmx4dUlDQWdJQzhxWEc0Z0lDQWdJQ0FnSUNNZ1IyVjBJR1JsWm1GMWJIUWdVMmx0ZFd4aGRHVWdjSEp2Y0hOY2JseHVJQ0FnSUNBZ0lDQkFjbVYwZFhKdUlGdHZZbXBsWTNSZFhHNGdJQ0FnS2k5Y2JpQWdJQ0JuWlhSRVpXWmhkV3gwVUhKdmNITW9LU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUI3WEc0Z0lDQWdJQ0FnSUNBZ0lDQXVMaTV6ZFhCbGNpNW5aWFJFWldaaGRXeDBVSEp2Y0hNb0tTeGNiaUFnSUNBZ0lDQWdJQ0FnSUdGMWRHOUZibVE2SUhSeWRXVXNYRzRnSUNBZ0lDQWdJQ0FnSUNCdFlYaEpibUZqZEdsMlpVWnlZVzFsY3pvZ00xeHVJQ0FnSUNBZ0lDQjlPMXh1SUNBZ0lIMWNibHh1SUNBZ0lDOHFYRzRnSUNBZ0lDQWdJQ01nUjJWMElHUmxabUYxYkhRZ1UybHRkV3hoZEdVZ2RtRnNkV1VnY0hKdmNITmNibHh1SUNBZ0lDQWdJQ0JBY21WMGRYSnVJRnR2WW1wbFkzUmRYRzRnSUNBZ0tpOWNiaUFnSUNCblpYUkVaV1poZFd4MFZtRnNkV1VvS1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0F1TGk1emRYQmxjaTVuWlhSRVpXWmhkV3gwVm1Gc2RXVW9LU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lHWnZjbU5sT2lBd0xDQXZMeUJiYm5WdFltVnlYVG9nUVdOalpXeGxjbUYwYVc5dUlIUnZJR0Z3Y0d4NUlIUnZJSFpoYkhWbExDQnBiaUIxYm1sMGN5QndaWElnYzJWamIyNWtYRzRnSUNBZ0lDQWdJQ0FnSUNCaWIzVnVZMlU2SURBc0lDOHZJRnR1ZFcxaVpYSmRPaUJHWVdOMGIzSWdkRzhnYlhWc2RHbHdiSGtnZG1Wc2IyTnBkSGtnWW5rZ2IyNGdZbTkxYm1ObFhHNGdJQ0FnSUNBZ0lDQWdJQ0J6Y0hKcGJtYzZJREFzSUM4dklGdHVkVzFpWlhKZE9pQlRjSEpwYm1jZ2MzUnlaVzVuZEdnZ1pIVnlhVzVuSUNkemRISnBibWNuWEc0Z0lDQWdJQ0FnSUNBZ0lDQnpkRzl3VTNCbFpXUTZJREF1TURBd01Td2dMeThnVzI1MWJXSmxjbDA2SUZOMGIzQWdjMmx0ZFd4aGRHbHZiaUIxYm1SbGNpQjBhR2x6SUhOd1pXVmtYRzRnSUNBZ0lDQWdJQ0FnSUNCbWNtbGpkR2x2YmpvZ01DQXZMeUJiYm5WdFltVnlYVG9nUm5KcFkzUnBiMjRnZEc4Z1lYQndiSGtnY0dWeUlHWnlZVzFsTENBd0xURmNiaUFnSUNBZ0lDQWdmVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQXZLbHh1SUNBZ0lDQWdJQ0FqSUVkbGRDQmtaV1poZFd4MElGTnBiWFZzWVhSbElIWmhiSFZsSUhCeWIzQmxjblI1SUc1aGJXVmNiaUFnSUNBZ0lDQWdJeU1nVTJWMElIWmhiSFZsY3lCMGJ5QjBhR2x6SUhkb1pXNGdZU0JnZG1Gc2RXVmdJR2x6SUc1dmRDQndjbTkyYVdSbFpDQmhjeUJoYmlCdlltcGxZM1JjYmx4dUlDQWdJQ0FnSUNCQWNtVjBkWEp1SUZ0emRISnBibWRkWEc0Z0lDQWdLaTljYmlBZ0lDQm5aWFJFWldaaGRXeDBWbUZzZFdWUWNtOXdLQ2tnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnSjNabGJHOWphWFI1Snp0Y2JpQWdJQ0I5WEc1OVhHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL1BoeXNpY3MuanNcbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfQWN0aW9uMiA9IHJlcXVpcmUoJy4vQWN0aW9uJyk7XG5cbnZhciBfQWN0aW9uMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0FjdGlvbjIpO1xuXG52YXIgX3VpQ2FsYyA9IHJlcXVpcmUoJ3VpLWNhbGMnKTtcblxudmFyIF91aVV0aWxzID0gcmVxdWlyZSgndWktdXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgVHJhY2sgPSAoZnVuY3Rpb24gKF9BY3Rpb24pIHtcbiAgICBfaW5oZXJpdHMoVHJhY2ssIF9BY3Rpb24pO1xuXG4gICAgZnVuY3Rpb24gVHJhY2socHJvcHMsIGlucHV0KSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUcmFjayk7XG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0FjdGlvbi5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICAgICAgX3RoaXMuaW5wdXQgPSBpbnB1dDtcbiAgICAgICAgX3RoaXMuaW5wdXRPcmlnaW4gPSB7fTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIFRyYWNrLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUodHJhY2ssIGZyYW1lRHVyYXRpb24sIGVsYXBzZWQpIHtcbiAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5pbnB1dE9mZnNldCA9ICgwLCBfdWlDYWxjLm9mZnNldCkodGhpcy5pbnB1dE9yaWdpbiwgdGhpcy5pbnB1dC5jdXJyZW50KTtcblxuICAgICAgICAoMCwgX3VpVXRpbHMuZWFjaCkodGhpcy52YWx1ZXMsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMyLmlucHV0T2Zmc2V0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUuZGlyZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSBfdGhpczIuaW5wdXQuY3VycmVudFtrZXldO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSB2YWx1ZS5vcmlnaW4gKyBfdGhpczIuaW5wdXRPZmZzZXRba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBUcmFjay5wcm90b3R5cGUuZ2V0RGVmYXVsdFZhbHVlID0gZnVuY3Rpb24gZ2V0RGVmYXVsdFZhbHVlKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYW1wOiAxLFxuICAgICAgICAgICAgZXNjYXBlQW1wOiAwLFxuICAgICAgICAgICAgZGlyZWN0OiBmYWxzZSxcbiAgICAgICAgICAgIHNtb290aDogMFxuICAgICAgICB9O1xuICAgIH07XG5cbiAgICByZXR1cm4gVHJhY2s7XG59KShfQWN0aW9uMy5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gVHJhY2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWxSeVlXTnJMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096czdPenM3T3pzN096czdPenM3TzBsQlNYRkNMRXRCUVVzN1kwRkJUQ3hMUVVGTE96dEJRVU4wUWl4aFFVUnBRaXhMUVVGTExFTkJRMVlzUzBGQlN5eEZRVUZGTEV0QlFVc3NSVUZCUlRzNFFrRkVWQ3hMUVVGTE96dHhSRUZGYkVJc2JVSkJRVTBzUzBGQlN5eERRVUZET3p0QlFVTmFMR05CUVVzc1MwRkJTeXhIUVVGSExFdEJRVXNzUTBGQlF6dEJRVU51UWl4alFVRkxMRmRCUVZjc1IwRkJSeXhGUVVGRkxFTkJRVU03TzB0QlEzcENPenRCUVV4blFpeFRRVUZMTEZkQlQzUkNMRTFCUVUwc2JVSkJRVU1zUzBGQlN5eEZRVUZGTEdGQlFXRXNSVUZCUlN4UFFVRlBMRVZCUVVVN096dEJRVU5zUXl4WlFVRkpMRU5CUVVNc1YwRkJWeXhIUVVGSExGbEJXR3hDTEUxQlFVMHNSVUZYYlVJc1NVRkJTU3hEUVVGRExGZEJRVmNzUlVGQlJTeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRE96dEJRVVZvUlN4eFFrRmFReXhKUVVGSkxFVkJXVUVzU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlN4VlFVRkRMRXRCUVVzc1JVRkJSU3hIUVVGSExFVkJRVXM3UVVGRE9VSXNaMEpCUVVrc1QwRkJTeXhYUVVGWExFTkJRVU1zWTBGQll5eERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZPMEZCUTNSRExHOUNRVUZKTEV0QlFVc3NRMEZCUXl4TlFVRk5MRVZCUVVVN1FVRkRaQ3g1UWtGQlN5eERRVUZETEU5QlFVOHNSMEZCUnl4UFFVRkxMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdhVUpCUXpORExFMUJRVTA3UVVGRFNDeDVRa0ZCU3l4RFFVRkRMRTlCUVU4c1IwRkJSeXhMUVVGTExFTkJRVU1zVFVGQlRTeEhRVUZITEU5QlFVc3NWMEZCVnl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8ybENRVU40UkR0aFFVTktPMU5CUTBvc1EwRkJReXhEUVVGRE8wdEJRMDQ3TzBGQmJrSm5RaXhUUVVGTExGZEJjVUowUWl4bFFVRmxMRGhDUVVGSE8wRkJRMlFzWlVGQlR6dEJRVU5JTEdWQlFVY3NSVUZCUlN4RFFVRkRPMEZCUTA0c2NVSkJRVk1zUlVGQlJTeERRVUZETzBGQlExb3NhMEpCUVUwc1JVRkJSU3hMUVVGTE8wRkJRMklzYTBKQlFVMHNSVUZCUlN4RFFVRkRPMU5CUTFvc1EwRkJRenRMUVVOTU96dFhRVFZDWjBJc1MwRkJTenM3TzJ0Q1FVRk1MRXRCUVVzaUxDSm1hV3hsSWpvaVZISmhZMnN1YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ1FXTjBhVzl1SUdaeWIyMGdKeTR2UVdOMGFXOXVKenRjYm1sdGNHOXlkQ0I3SUc5bVpuTmxkQ0I5SUdaeWIyMGdKM1ZwTFdOaGJHTW5PMXh1YVcxd2IzSjBJSHNnWldGamFDQjlJR1p5YjIwZ0ozVnBMWFYwYVd4ekp6dGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdZMnhoYzNNZ1ZISmhZMnNnWlhoMFpXNWtjeUJCWTNScGIyNGdlMXh1SUNBZ0lHTnZibk4wY25WamRHOXlLSEJ5YjNCekxDQnBibkIxZENrZ2UxeHVJQ0FnSUNBZ0lDQnpkWEJsY2lod2NtOXdjeWs3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVhVzV3ZFhRZ1BTQnBibkIxZER0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVwYm5CMWRFOXlhV2RwYmlBOUlIdDlPMXh1SUNBZ0lIMWNibHh1SUNBZ0lIVndaR0YwWlNoMGNtRmpheXdnWm5KaGJXVkVkWEpoZEdsdmJpd2daV3hoY0hObFpDa2dlMXh1SUNBZ0lDQWdJQ0IwYUdsekxtbHVjSFYwVDJabWMyVjBJRDBnYjJabWMyVjBLSFJvYVhNdWFXNXdkWFJQY21sbmFXNHNJSFJvYVhNdWFXNXdkWFF1WTNWeWNtVnVkQ2s3WEc1Y2JpQWdJQ0FnSUNBZ1pXRmphQ2gwYUdsekxuWmhiSFZsY3l3Z0tIWmhiSFZsTENCclpYa3BJRDArSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoMGFHbHpMbWx1Y0hWMFQyWm1jMlYwTG1oaGMwOTNibEJ5YjNCbGNuUjVLR3RsZVNrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvZG1Gc2RXVXVaR2x5WldOMEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhaaGJIVmxMbU4xY25KbGJuUWdQU0IwYUdsekxtbHVjSFYwTG1OMWNuSmxiblJiYTJWNVhUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IyWVd4MVpTNWpkWEp5Wlc1MElEMGdkbUZzZFdVdWIzSnBaMmx1SUNzZ2RHaHBjeTVwYm5CMWRFOW1abk5sZEZ0clpYbGRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmU2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdaMlYwUkdWbVlYVnNkRlpoYkhWbEtDa2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1lXMXdPaUF4TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdaWE5qWVhCbFFXMXdPaUF3TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdaR2x5WldOME9pQm1ZV3h6WlN4Y2JpQWdJQ0FnSUNBZ0lDQWdJSE50YjI5MGFEb2dNRnh1SUNBZ0lDQWdJQ0I5TzF4dUlDQWdJSDFjYm4xY2JpSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL1RyYWNrLmpzXG4gKiogbW9kdWxlIGlkID0gNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2ZyYW1lc3luYyA9IHJlcXVpcmUoJ2ZyYW1lc3luYycpO1xuXG52YXIgX3VpVXRpbHMgPSByZXF1aXJlKCd1aS11dGlscycpO1xuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIERFRkFVTFRfUFJPUCA9ICdjdXJyZW50JztcblxudmFyIEFjdGlvbiA9IChmdW5jdGlvbiAoX1Byb2Nlc3MpIHtcbiAgICBfaW5oZXJpdHMoQWN0aW9uLCBfUHJvY2Vzcyk7XG5cbiAgICAvKlxuICAgICAgICAjIEFjdGlvbiBjbGFzcyBjb25zdHJ1Y3RvclxuICAgICAgICAjIyBBc3NpZ24gZGVmYXVsdCBwcm9wZXJ0aWVzIG9mIEFjdGlvbiBvciBleHRlbmRlZCBjbGFzcyBhbmQgc2V0IHVzZXItZGVmaW5lZCBwcm9wc1xuICAgICAgICAgQHBhcmFtIFtvYmplY3RdXG4gICAgKi9cblxuICAgIGZ1bmN0aW9uIEFjdGlvbihwcm9wcykge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQWN0aW9uKTtcblxuICAgICAgICAvLyBMb2FkIGRlZmF1bHQgcHJvcHNcblxuICAgICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUHJvY2Vzcy5jYWxsKHRoaXMpKTtcblxuICAgICAgICAoMCwgX3VpVXRpbHMuZWFjaCkoX3RoaXMuZ2V0RGVmYXVsdFByb3BzKCksIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXNba2V5XSA9IHZhbHVlO1xuICAgICAgICB9KTtcblxuICAgICAgICBfdGhpcy52YWx1ZXMgPSB7fTtcbiAgICAgICAgX3RoaXMuc2V0KHByb3BzLCBfdGhpcy5nZXREZWZhdWx0VmFsdWVQcm9wKCkpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgIyBTZXQgQWN0aW9uIHByb3BlcnRpZXNcbiAgICAgICAgIyMgU2V0IHVzZXItZGVmaW5lZCBBY3Rpb24gcHJvcGVydGllc1xuICAgICAgICAgQHBhcmFtIFtvYmplY3RdXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXTogTmFtZSBvZiBkZWZhdWx0IHZhbHVlIHByb3BlcnR5IChzZXQgd2hlbiBgdmFsdWVgIGlzICoqbm90KiogcHJvdmlkZWQgYXMgb2JqZWN0KVxuICAgICAgICBAcmV0dXJuIFtBY3Rpb25dXG4gICAgKi9cblxuICAgIEFjdGlvbi5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gc2V0KHByb3BzKSB7XG4gICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgIHZhciBkZWZhdWx0VmFsdWVQcm9wID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gREVGQVVMVF9QUk9QIDogYXJndW1lbnRzWzFdO1xuICAgICAgICB2YXIgdmFsdWVzID0gcHJvcHMudmFsdWVzO1xuXG4gICAgICAgIHZhciBwcm9wc1RvU2V0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbJ3ZhbHVlcyddKTtcblxuICAgICAgICAvLyBMb29wIHRocm91Z2ggbm9uLWB2YWx1ZWAgcHJvcHMgYW5kIHNldFxuXG4gICAgICAgICgwLCBfdWlVdGlscy5lYWNoKShwcm9wc1RvU2V0LCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICAgICAgX3RoaXMyW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gTWVyZ2UgYHZhbHVlYCBwcm9wZXJ0aWVzIHdpdGggZXhpc3RpbmdcbiAgICAgICAgaWYgKHZhbHVlcykge1xuICAgICAgICAgICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudFZhbHVlcyA9IF90aGlzMi52YWx1ZXM7XG4gICAgICAgICAgICAgICAgdmFyIGRlZmF1bHRWYWx1ZSA9IF90aGlzMi5nZXREZWZhdWx0VmFsdWUoKTtcblxuICAgICAgICAgICAgICAgICgwLCBfdWlVdGlscy5lYWNoKSh2YWx1ZXMsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBleGlzdGluZ1ZhbHVlID0gY3VycmVudFZhbHVlc1trZXldO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3VmFsdWUgPSBfZXh0ZW5kcyh7fSwgZGVmYXVsdFZhbHVlKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoKDAsIF91aVV0aWxzLmlzT2JqKSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gX2V4dGVuZHMoe30sIG5ld1ZhbHVlLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZVtkZWZhdWx0VmFsdWVQcm9wXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFZhbHVlc1trZXldID0gZXhpc3RpbmdWYWx1ZSA/IF9leHRlbmRzKHt9LCBleGlzdGluZ1ZhbHVlLCBuZXdWYWx1ZSkgOiBuZXdWYWx1ZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgQWN0aW9uLnByb3RvdHlwZS5wYXVzZSA9IGZ1bmN0aW9uIHBhdXNlKCkge1xuICAgICAgICBfUHJvY2Vzcy5wcm90b3R5cGUuc3RvcC5jYWxsKHRoaXMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgQWN0aW9uLnByb3RvdHlwZS5yZXN1bWUgPSBmdW5jdGlvbiByZXN1bWUoKSB7XG4gICAgICAgIF9Qcm9jZXNzLnByb3RvdHlwZS5zdGFydC5jYWxsKHRoaXMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgIyBHZXQgZGVmYXVsdCBBY3Rpb24gcHJvcGVydGllc1xuICAgICAgICAgQHJldHVybiBbb2JqZWN0XVxuICAgICovXG5cbiAgICBBY3Rpb24ucHJvdG90eXBlLmdldERlZmF1bHRQcm9wcyA9IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH07XG5cbiAgICAvKlxuICAgICAgICAjIEdldCBkZWZhdWx0IEFjdGlvbiB2YWx1ZSBwcm9wZXJ0aWVzXG4gICAgICAgICBAcmV0dXJuIFtvYmplY3RdXG4gICAgKi9cblxuICAgIEFjdGlvbi5wcm90b3R5cGUuZ2V0RGVmYXVsdFZhbHVlID0gZnVuY3Rpb24gZ2V0RGVmYXVsdFZhbHVlKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY3VycmVudDogMCxcbiAgICAgICAgICAgIHZlbG9jaXR5OiAwXG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIC8qXG4gICAgICAgICMgR2V0IGRlZmF1bHQgQWN0aW9uIHZhbHVlIHByb3BlcnR5IG5hbWVcbiAgICAgICAgIyMgU2V0IHRoaXMgYHZhbHVlYCBwcm9wZXJ0eSB3aGVuIHNldCBhcyB2YWx1ZSBpbnN0ZWFkIG9mIG9iamVjdFxuICAgICAgICAgQHJldHVybiBbc3RyaW5nXVxuICAgICovXG5cbiAgICBBY3Rpb24ucHJvdG90eXBlLmdldERlZmF1bHRWYWx1ZVByb3AgPSBmdW5jdGlvbiBnZXREZWZhdWx0VmFsdWVQcm9wKCkge1xuICAgICAgICByZXR1cm4gREVGQVVMVF9QUk9QO1xuICAgIH07XG5cbiAgICAvKlxuICAgICAgICAjIEV4dGVuZCB0aGlzIEFjdGlvbiB3aXRoIG5ldyBwcm9wZXJ0aWVzXG4gICAgICAgICMjIFJldHVybnMgbmV3IGluc3RhbmNlIG9mIHRoaXMgQWN0aW9uJ3MgYHByb3RvdHlwZWAgd2l0aCBleGlzdGluZyBhbmQgbmV3IHByb3BlcnRpZXNcbiAgICAgICAgIEBwYXJhbSBbb2JqZWN0XSAob3B0aW9uYWwpXG4gICAgICAgIEByZXR1cm4gW0FjdGlvbl1cbiAgICAqL1xuXG4gICAgQWN0aW9uLnByb3RvdHlwZS5leHRlbmQgPSBmdW5jdGlvbiBleHRlbmQocHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyB0aGlzLmNvbnN0cnVjdG9yKF9leHRlbmRzKHt9LCB0aGlzLCB7IHByb3BzOiBwcm9wcyB9KSwgdGhpcy5nZXREZWZhdWx0VmFsdWVQcm9wKCkpO1xuICAgIH07XG5cbiAgICByZXR1cm4gQWN0aW9uO1xufSkoX2ZyYW1lc3luYy5Qcm9jZXNzKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQWN0aW9uO1xuO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklrRmpkR2x2Ymk1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3T3pzN096czdPenM3T3pzN1FVRkhRU3hKUVVGTkxGbEJRVmtzUjBGQlJ5eFRRVUZUTEVOQlFVTTdPMGxCUlZZc1RVRkJUVHRqUVVGT0xFMUJRVTA3T3pzN096czdPMEZCVDNaQ0xHRkJVR2xDTEUxQlFVMHNRMEZQV0N4TFFVRkxMRVZCUVVVN09FSkJVRVlzVFVGQlRUczdPenR4UkVGUmJrSXNiVUpCUVU4N08wRkJSMUFzY1VKQlprTXNTVUZCU1N4RlFXVkJMRTFCUVVzc1pVRkJaU3hGUVVGRkxFVkJRVVVzVlVGQlF5eExRVUZMTEVWQlFVVXNSMEZCUnp0dFFrRkJTeXhOUVVGTExFZEJRVWNzUTBGQlF5eEhRVUZITEV0QlFVczdVMEZCUVN4RFFVRkRMRU5CUVVNN08wRkJSV2hGTEdOQlFVc3NUVUZCVFN4SFFVRkhMRVZCUVVVc1EwRkJRenRCUVVOcVFpeGpRVUZMTEVkQlFVY3NRMEZCUXl4TFFVRkxMRVZCUVVVc1RVRkJTeXh0UWtGQmJVSXNSVUZCUlN4RFFVRkRMRU5CUVVNN08wdEJReTlET3pzN096czdPenM3UVVGQlFUdEJRV1puUWl4VlFVRk5MRmRCZVVKMlFpeEhRVUZITEdkQ1FVRkRMRXRCUVVzc1JVRkJiVU03T3p0WlFVRnFReXhuUWtGQlowSXNlVVJCUVVjc1dVRkJXVHRaUVVNNVFpeE5RVUZOTEVkQlFXOUNMRXRCUVVzc1EwRkJMMElzVFVGQlRUczdXVUZCU3l4VlFVRlZMRFJDUVVGTExFdEJRVXM3T3pzN1FVRkhka01zY1VKQmFrTkRMRWxCUVVrc1JVRnBRMEVzVlVGQlZTeEZRVUZGTEZWQlFVTXNTMEZCU3l4RlFVRkZMRWRCUVVjc1JVRkJTenRCUVVNM1FpeHRRa0ZCU3l4SFFVRkhMRU5CUVVNc1IwRkJSeXhMUVVGTExFTkJRVU03VTBGRGNrSXNRMEZCUXpzN08wRkJRVU1zUVVGSFNDeFpRVUZKTEUxQlFVMHNSVUZCUlRzN1FVRkRVaXh2UWtGQlRTeGhRVUZoTEVkQlFVY3NUMEZCU3l4TlFVRk5MRU5CUVVNN1FVRkRiRU1zYjBKQlFVMHNXVUZCV1N4SFFVRkhMRTlCUVVzc1pVRkJaU3hGUVVGRkxFTkJRVU03TzBGQlJUVkRMRFpDUVRGRFNDeEpRVUZKTEVWQk1FTkpMRTFCUVUwc1JVRkJSU3hWUVVGRExFdEJRVXNzUlVGQlJTeEhRVUZITEVWQlFVczdRVUZEZWtJc2QwSkJRVTBzWVVGQllTeEhRVUZITEdGQlFXRXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRCUVVONlF5eDNRa0ZCU1N4UlFVRlJMR2RDUVVGUkxGbEJRVmtzUTBGQlJTeERRVUZET3p0QlFVVnVReXgzUWtGQlNTeGhRVGxEVEN4TFFVRkxMRVZCT0VOTkxFdEJRVXNzUTBGQlF5eEZRVUZGTzBGQlEyUXNaME5CUVZFc1owSkJRVkVzVVVGQlVTeEZRVUZMTEV0QlFVc3NRMEZCUlN4RFFVRkRPM0ZDUVVONFF5eE5RVUZOTzBGQlEwZ3NaME5CUVZFc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4SFFVRkhMRXRCUVVzc1EwRkJRenR4UWtGRGRFTTdPMEZCUlVRc2FVTkJRV0VzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4aFFVRmhMR2RDUVVGUkxHRkJRV0VzUlVGQlN5eFJRVUZSTEVsQlFVc3NVVUZCVVN4RFFVRkRPMmxDUVVOeVJpeERRVUZETEVOQlFVTTdPMU5CUTA0N08wRkJSVVFzWlVGQlR5eEpRVUZKTEVOQlFVTTdTMEZEWmpzN1FVRnlSR2RDTEZWQlFVMHNWMEYxUkhaQ0xFdEJRVXNzYjBKQlFVYzdRVUZEU2l3eVFrRkJUU3hKUVVGSkxFdEJRVUVzVFVGQlJTeERRVUZETzBGQlEySXNaVUZCVHl4SlFVRkpMRU5CUVVNN1MwRkRaanM3UVVFeFJHZENMRlZCUVUwc1YwRTBSSFpDTEUxQlFVMHNjVUpCUVVjN1FVRkRUQ3d5UWtGQlRTeExRVUZMTEV0QlFVRXNUVUZCUlN4RFFVRkRPMEZCUTJRc1pVRkJUeXhKUVVGSkxFTkJRVU03UzBGRFpqczdPenM3T3p0QlFTOUVaMElzVlVGQlRTeFhRWE5GZGtJc1pVRkJaU3c0UWtGQlJ6dEJRVU5rTEdWQlFVOHNSVUZCUlN4RFFVRkRPMHRCUTJJN096czdPenM3UVVGNFJXZENMRlZCUVUwc1YwRXJSWFpDTEdWQlFXVXNPRUpCUVVjN1FVRkRaQ3hsUVVGUE8wRkJRMGdzYlVKQlFVOHNSVUZCUlN4RFFVRkRPMEZCUTFZc2IwSkJRVkVzUlVGQlJTeERRVUZETzFOQlEyUXNRMEZCUXp0TFFVTk1PenM3T3pzN096dEJRWEJHWjBJc1ZVRkJUU3hYUVRSR2RrSXNiVUpCUVcxQ0xHdERRVUZITzBGQlEyeENMR1ZCUVU4c1dVRkJXU3hEUVVGRE8wdEJRM1pDT3pzN096czdPenM3UVVFNVJtZENMRlZCUVUwc1YwRjFSM1pDTEUxQlFVMHNiVUpCUVVNc1MwRkJTeXhGUVVGRk8wRkJRMVlzWlVGQlR5eEpRVUZKTEVsQlFVa3NRMEZCUXl4WFFVRlhMR05CUVUwc1NVRkJTU3hKUVVGRkxFdEJRVXNzUlVGQlRDeExRVUZMTEV0QlFVa3NTVUZCU1N4RFFVRkRMRzFDUVVGdFFpeEZRVUZGTEVOQlFVTXNRMEZCUXp0TFFVTXZSVHM3VjBGNlIyZENMRTFCUVUwN1kwRk1iRUlzVDBGQlR6czdhMEpCUzBzc1RVRkJUVHRCUVRCSE1VSXNRMEZCUXlJc0ltWnBiR1VpT2lKQlkzUnBiMjR1YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2V5QlFjbTlqWlhOeklIMGdabkp2YlNBblpuSmhiV1Z6ZVc1akp6dGNibWx0Y0c5eWRDQjdJR1ZoWTJnc0lHbHpUMkpxSUgwZ1puSnZiU0FuZFdrdGRYUnBiSE1uTzF4dVhHNWpiMjV6ZENCRVJVWkJWVXhVWDFCU1QxQWdQU0FuWTNWeWNtVnVkQ2M3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUdOc1lYTnpJRUZqZEdsdmJpQmxlSFJsYm1SeklGQnliMk5sYzNNZ2UxeHVJQ0FnSUM4cVhHNGdJQ0FnSUNBZ0lDTWdRV04wYVc5dUlHTnNZWE56SUdOdmJuTjBjblZqZEc5eVhHNGdJQ0FnSUNBZ0lDTWpJRUZ6YzJsbmJpQmtaV1poZFd4MElIQnliM0JsY25ScFpYTWdiMllnUVdOMGFXOXVJRzl5SUdWNGRHVnVaR1ZrSUdOc1lYTnpJR0Z1WkNCelpYUWdkWE5sY2kxa1pXWnBibVZrSUhCeWIzQnpYRzVjYmlBZ0lDQWdJQ0FnUUhCaGNtRnRJRnR2WW1wbFkzUmRYRzRnSUNBZ0tpOWNiaUFnSUNCamIyNXpkSEoxWTNSdmNpaHdjbTl3Y3lrZ2UxeHVJQ0FnSUNBZ0lDQnpkWEJsY2lncE8xeHVYRzRnSUNBZ0lDQWdJQzh2SUV4dllXUWdaR1ZtWVhWc2RDQndjbTl3YzF4dUlDQWdJQ0FnSUNCbFlXTm9LSFJvYVhNdVoyVjBSR1ZtWVhWc2RGQnliM0J6S0Nrc0lDaDJZV3gxWlN3Z2EyVjVLU0E5UGlCMGFHbHpXMnRsZVYwZ1BTQjJZV3gxWlNrN1hHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1MllXeDFaWE1nUFNCN2ZUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1elpYUW9jSEp2Y0hNc0lIUm9hWE11WjJWMFJHVm1ZWFZzZEZaaGJIVmxVSEp2Y0NncEtUdGNiaUFnSUNCOVhHNWNiaUFnSUNBdktseHVJQ0FnSUNBZ0lDQWpJRk5sZENCQlkzUnBiMjRnY0hKdmNHVnlkR2xsYzF4dUlDQWdJQ0FnSUNBakl5QlRaWFFnZFhObGNpMWtaV1pwYm1Wa0lFRmpkR2x2YmlCd2NtOXdaWEowYVdWelhHNWNiaUFnSUNBZ0lDQWdRSEJoY21GdElGdHZZbXBsWTNSZFhHNGdJQ0FnSUNBZ0lFQndZWEpoYlNCYmMzUnlhVzVuWFRvZ1RtRnRaU0J2WmlCa1pXWmhkV3gwSUhaaGJIVmxJSEJ5YjNCbGNuUjVJQ2h6WlhRZ2QyaGxiaUJnZG1Gc2RXVmdJR2x6SUNvcWJtOTBLaW9nY0hKdmRtbGtaV1FnWVhNZ2IySnFaV04wS1Z4dUlDQWdJQ0FnSUNCQWNtVjBkWEp1SUZ0QlkzUnBiMjVkWEc0Z0lDQWdLaTljYmlBZ0lDQnpaWFFvY0hKdmNITXNJR1JsWm1GMWJIUldZV3gxWlZCeWIzQWdQU0JFUlVaQlZVeFVYMUJTVDFBcElIdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2V5QjJZV3gxWlhNc0lDNHVMbkJ5YjNCelZHOVRaWFFnZlNBOUlIQnliM0J6TzF4dVhHNGdJQ0FnSUNBZ0lDOHZJRXh2YjNBZ2RHaHliM1ZuYUNCdWIyNHRZSFpoYkhWbFlDQndjbTl3Y3lCaGJtUWdjMlYwWEc0Z0lDQWdJQ0FnSUdWaFkyZ29jSEp2Y0hOVWIxTmxkQ3dnS0haaGJIVmxMQ0JyWlhrcElEMCtJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE5iYTJWNVhTQTlJSFpoYkhWbE8xeHVJQ0FnSUNBZ0lDQjlLVHRjYmx4dUlDQWdJQ0FnSUNBdkx5Qk5aWEpuWlNCZ2RtRnNkV1ZnSUhCeWIzQmxjblJwWlhNZ2QybDBhQ0JsZUdsemRHbHVaMXh1SUNBZ0lDQWdJQ0JwWmlBb2RtRnNkV1Z6S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQmpkWEp5Wlc1MFZtRnNkV1Z6SUQwZ2RHaHBjeTUyWVd4MVpYTTdYRzRnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0JrWldaaGRXeDBWbUZzZFdVZ1BTQjBhR2x6TG1kbGRFUmxabUYxYkhSV1lXeDFaU2dwTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0JsWVdOb0tIWmhiSFZsY3l3Z0tIWmhiSFZsTENCclpYa3BJRDArSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0JsZUdsemRHbHVaMVpoYkhWbElEMGdZM1Z5Y21WdWRGWmhiSFZsYzF0clpYbGRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR3hsZENCdVpYZFdZV3gxWlNBOUlIc2dMaTR1WkdWbVlYVnNkRlpoYkhWbElIMDdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2FYTlBZbW9vZG1Gc2RXVXBLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHNWxkMVpoYkhWbElEMGdleUF1TGk1dVpYZFdZV3gxWlN3Z0xpNHVkbUZzZFdVZ2ZUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J1WlhkV1lXeDFaVnRrWldaaGRXeDBWbUZzZFdWUWNtOXdYU0E5SUhaaGJIVmxPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOMWNuSmxiblJXWVd4MVpYTmJhMlY1WFNBOUlHVjRhWE4wYVc1blZtRnNkV1VnUHlCN0lDNHVMbVY0YVhOMGFXNW5WbUZzZFdVc0lDNHVMbTVsZDFaaGJIVmxJSDBnT2lCdVpYZFdZV3gxWlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDBwTzF4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE03WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjR0YxYzJVb0tTQjdYRzRnSUNBZ0lDQWdJSE4xY0dWeUxuTjBiM0FvS1R0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2NtVnpkVzFsS0NrZ2UxeHVJQ0FnSUNBZ0lDQnpkWEJsY2k1emRHRnlkQ2dwTzF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN6dGNiaUFnSUNCOVhHNWNiaUFnSUNBdktseHVJQ0FnSUNBZ0lDQWpJRWRsZENCa1pXWmhkV3gwSUVGamRHbHZiaUJ3Y205d1pYSjBhV1Z6WEc1Y2JpQWdJQ0FnSUNBZ1FISmxkSFZ5YmlCYmIySnFaV04wWFZ4dUlDQWdJQ292WEc0Z0lDQWdaMlYwUkdWbVlYVnNkRkJ5YjNCektDa2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdlMzA3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdMeXBjYmlBZ0lDQWdJQ0FnSXlCSFpYUWdaR1ZtWVhWc2RDQkJZM1JwYjI0Z2RtRnNkV1VnY0hKdmNHVnlkR2xsYzF4dVhHNGdJQ0FnSUNBZ0lFQnlaWFIxY200Z1cyOWlhbVZqZEYxY2JpQWdJQ0FxTDF4dUlDQWdJR2RsZEVSbFptRjFiSFJXWVd4MVpTZ3BJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTjFjbkpsYm5RNklEQXNYRzRnSUNBZ0lDQWdJQ0FnSUNCMlpXeHZZMmwwZVRvZ01GeHVJQ0FnSUNBZ0lDQjlPMXh1SUNBZ0lIMWNibHh1SUNBZ0lDOHFYRzRnSUNBZ0lDQWdJQ01nUjJWMElHUmxabUYxYkhRZ1FXTjBhVzl1SUhaaGJIVmxJSEJ5YjNCbGNuUjVJRzVoYldWY2JpQWdJQ0FnSUNBZ0l5TWdVMlYwSUhSb2FYTWdZSFpoYkhWbFlDQndjbTl3WlhKMGVTQjNhR1Z1SUhObGRDQmhjeUIyWVd4MVpTQnBibk4wWldGa0lHOW1JRzlpYW1WamRGeHVYRzRnSUNBZ0lDQWdJRUJ5WlhSMWNtNGdXM04wY21sdVoxMWNiaUFnSUNBcUwxeHVJQ0FnSUdkbGRFUmxabUYxYkhSV1lXeDFaVkJ5YjNBb0tTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQkVSVVpCVlV4VVgxQlNUMUE3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdMeXBjYmlBZ0lDQWdJQ0FnSXlCRmVIUmxibVFnZEdocGN5QkJZM1JwYjI0Z2QybDBhQ0J1WlhjZ2NISnZjR1Z5ZEdsbGMxeHVJQ0FnSUNBZ0lDQWpJeUJTWlhSMWNtNXpJRzVsZHlCcGJuTjBZVzVqWlNCdlppQjBhR2x6SUVGamRHbHZiaWR6SUdCd2NtOTBiM1I1Y0dWZ0lIZHBkR2dnWlhocGMzUnBibWNnWVc1a0lHNWxkeUJ3Y205d1pYSjBhV1Z6WEc1Y2JpQWdJQ0FnSUNBZ1FIQmhjbUZ0SUZ0dlltcGxZM1JkSUNodmNIUnBiMjVoYkNsY2JpQWdJQ0FnSUNBZ1FISmxkSFZ5YmlCYlFXTjBhVzl1WFZ4dUlDQWdJQ292WEc0Z0lDQWdaWGgwWlc1a0tIQnliM0J6S1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCdVpYY2dkR2hwY3k1amIyNXpkSEoxWTNSdmNpaDdJQzR1TG5Sb2FYTXNJSEJ5YjNCeklIMHNJSFJvYVhNdVoyVjBSR1ZtWVhWc2RGWmhiSFZsVUhKdmNDZ3BLVHRjYmlBZ0lDQjlYRzU5TzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvQWN0aW9uLmpzXG4gKiogbW9kdWxlIGlkID0gNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2NyZWF0ZUVhc2luZyA9IHJlcXVpcmUoJy4vY3JlYXRlLWVhc2luZycpO1xuXG52YXIgX2NyZWF0ZUVhc2luZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVFYXNpbmcpO1xuXG52YXIgX3VpVXRpbHMgPSByZXF1aXJlKCd1aS11dGlscycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vLyBWYWx1ZXNcbi8qXG4gICAgRWFzaW5nIGZ1bmN0aW9uc1xuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBcbiAgICBHZW5lcmF0ZXMgYW5kIHByb3ZpZGVzIGVhc2luZyBmdW5jdGlvbnMgYmFzZWQgb24gYmFzZUZ1bmN0aW9uIGRlZmluaXRpb25zXG4gICAgXG4gICAgQSBjYWxsIHRvIGVhc2luZ0Z1bmN0aW9uLmdldCgnZnVuY3Rpb25OYW1lJykgcmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIHBhc3NlZDpcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBQcm9ncmVzcyAwLTFcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IEFtcCBtb2RpZmllciwgb25seSBhY2NlcHRlZCBpbiBzb21lIGVhc2luZyBmdW5jdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZCBpcyB1c2VkIHRvIGFkanVzdCBvdmVyYWxsIHN0cmVuZ3RoXG4gICAgICAgIEByZXR1cm4gW251bWJlcl06IEVhc2VkIHByb2dyZXNzXG4gICAgICAgIFxuICAgIFdlIGNhbiBnZW5lcmF0ZSBuZXcgZnVuY3Rpb25zIGJ5IHNlbmRpbmcgYW4gZWFzaW5nIGZ1bmN0aW9uIHRocm91Z2ggZWFzaW5nRnVuY3Rpb24uZXh0ZW5kKG5hbWUsIG1ldGhvZCkuXG4gICAgV2hpY2ggd2lsbCBtYWtlIG5hbWVJbiwgbmFtZU91dCBhbmQgbmFtZUluT3V0IGZ1bmN0aW9ucyBhdmFpbGFibGUgdG8gdXNlLlxuICAgICAgICBcbiAgICBFYXNpbmcgZnVuY3Rpb25zIGZyb20gUm9iZXJ0IFBlbm5lclxuICAgIGh0dHA6Ly93d3cucm9iZXJ0cGVubmVyLmNvbS9lYXNpbmcvXG4gICAgICAgIFxuICAgIEJlemllciBjdXJ2ZSBpbnRlcnByZXRvciBjcmVhdGVkIGZyb20gR2HDq3RhbiBSZW5hdWRlYXUncyBvcmlnaW5hbCBCZXppZXJFYXNpbmcgIFxuICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZy9ibG9iL21hc3Rlci9pbmRleC5qcyAgXG4gICAgaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcblxuICAgIEFudGljaXBhdGUgZWFzaW5nIGNyZWF0ZWQgYnkgRWxsaW90IEdpbm9cbiAgICBodHRwczovL3R3aXR0ZXIuY29tL0VsbGlvdEdlbm9cbiovXG4vLyBJbXBvcnRzXG52YXIgREVGQVVMVF9CQUNLX1NUUkVOR1RIID0gMS41MjU7XG52YXIgREVGQVVMVF9QT1dfU1RSRU5HVEggPSAyO1xuXG4vLyBVdGlsaXR5IGZ1bmN0aW9uc1xudmFyIGdlbmVyYXRlUG93ZXJFYXNpbmcgPSBmdW5jdGlvbiAoc3RyZW5ndGgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHByb2dyZXNzLCBzdHJlbmd0aCkge1xuICAgICAgICByZXR1cm4gYmFzZUVhc2luZy5lYXNlKHByb2dyZXNzLCBzdHJlbmd0aCk7XG4gICAgfTtcbn07XG5cbi8qXG4gICAgRWFjaCBvZiB0aGVzZSBiYXNlIGZ1bmN0aW9ucyBpcyBhbiBlYXNlSW5cbiAgICBcbiAgICBPbiBpbml0LCB3ZSB1c2UgLm1pcnJvciBhbmQgLnJldmVyc2UgdG8gZ2VuZXJhdGUgZWFzZUluT3V0IGFuZFxuICAgIGVhc2VPdXQgZnVuY3Rpb25zIHJlc3BlY3RpdmVseS5cbiovXG52YXIgYmFzZUVhc2luZyA9IHtcbiAgICBlYXNlOiBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgdmFyIHN0cmVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gREVGQVVMVF9QT1dfU1RSRU5HVEggOiBhcmd1bWVudHNbMV07XG4gICAgICAgIHJldHVybiBNYXRoLnBvdyhwcm9ncmVzcywgc3RyZW5ndGgpO1xuICAgIH0sXG4gICAgY2lyYzogZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgICAgIHJldHVybiAxIC0gTWF0aC5zaW4oTWF0aC5hY29zKHByb2dyZXNzKSk7XG4gICAgfSxcbiAgICBiYWNrOiBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgdmFyIHN0cmVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gREVGQVVMVF9CQUNLX1NUUkVOR1RIIDogYXJndW1lbnRzWzFdO1xuICAgICAgICByZXR1cm4gcHJvZ3Jlc3MgKiBwcm9ncmVzcyAqICgoc3RyZW5ndGggKyAxKSAqIHByb2dyZXNzIC0gc3RyZW5ndGgpO1xuICAgIH1cbn07XG5cblsnY3ViaWMnLCAncXVhcnQnLCAncXVpbnQnXS5mb3JFYWNoKGZ1bmN0aW9uIChlYXNpbmdOYW1lLCBpKSB7XG4gICAgYmFzZUVhc2luZ1tlYXNpbmdOYW1lXSA9IGdlbmVyYXRlUG93ZXJFYXNpbmcoaSArIDMpO1xufSk7XG5cbi8vIEdlbmVyYXRlIGluL291dC9pbk91dCB2YXJpYXRpb25zXG4oMCwgX3VpVXRpbHMuZWFjaCkoYmFzZUVhc2luZywgZnVuY3Rpb24gKGJhc2VFYXNlLCBrZXkpIHtcbiAgICB2YXIgZWFzaW5nRnVuY3Rpb24gPSAoMCwgX2NyZWF0ZUVhc2luZzIuZGVmYXVsdCkoYmFzZUVhc2UpO1xuICAgIGJhc2VFYXNpbmdba2V5ICsgJ0luJ10gPSBlYXNpbmdGdW5jdGlvbi5pbjtcbiAgICBiYXNlRWFzaW5nW2tleSArICdPdXQnXSA9IGVhc2luZ0Z1bmN0aW9uLm91dDtcbiAgICBiYXNlRWFzaW5nW2tleSArICdJbk91dCddID0gZWFzaW5nRnVuY3Rpb24uaW5PdXQ7XG59KTtcblxuYmFzZUVhc2luZy5saW5lYXIgPSBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICByZXR1cm4gcHJvZ3Jlc3M7XG59O1xuYmFzZUVhc2luZy5hbnRpY2lwYXRlID0gZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgdmFyIHN0cmVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gREVGQVVMVF9CQUNLX1NUUkVOR1RIIDogYXJndW1lbnRzWzFdO1xuICAgIHJldHVybiAocHJvZ3Jlc3MgKj0gMikgPCAxID8gMC41ICogYmFzZUVhc2luZy5iYWNrSW4ocHJvZ3Jlc3MsIHN0cmVuZ3RoKSA6IDAuNSAqICgyIC0gTWF0aC5wb3coMiwgLTEwICogKHByb2dyZXNzIC0gMSkpKTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGJhc2VFYXNpbmc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5CeVpYTmxkQzFsWVhOcGJtY3Vhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3TzBGQk9FSkJMRWxCUVUwc2NVSkJRWEZDTEVkQlFVY3NTMEZCU3l4RFFVRkRPMEZCUTNCRExFbEJRVTBzYjBKQlFXOUNMRWRCUVVjc1EwRkJRenM3TzBGQlFVTXNRVUZITDBJc1NVRkJUU3h0UWtGQmJVSXNSMEZCUnl4VlFVRkJMRkZCUVZFN1YwRkJTU3hWUVVGRExGRkJRVkVzUlVGQlJTeFJRVUZSTzJWQlFVc3NWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFVkJRVVVzVVVGQlVTeERRVUZETzB0QlFVRTdRMEZCUVRzN096czdPenM3UVVGQlF5eEJRVkZ3Unl4SlFVRkpMRlZCUVZVc1IwRkJSenRCUVVOaUxGRkJRVWtzUlVGQlJTeFZRVUZETEZGQlFWRTdXVUZCUlN4UlFVRlJMSGxFUVVGSExHOUNRVUZ2UWp0M1FrRkJTeXhSUVVGUkxFVkJRVWtzVVVGQlVUdExRVUZCTzBGQlEzcEZMRkZCUVVrc1JVRkJSU3hWUVVGQkxGRkJRVkU3WlVGQlNTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRPMHRCUVVFN1FVRkRia1FzVVVGQlNTeEZRVUZGTEZWQlFVTXNVVUZCVVR0WlFVRkZMRkZCUVZFc2VVUkJRVWNzY1VKQlFYRkNPMlZCUVVzc1FVRkJReXhSUVVGUkxFZEJRVWNzVVVGQlVTeEpRVUZMTEVOQlFVTXNVVUZCVVN4SFFVRkhMRU5CUVVNc1EwRkJRU3hIUVVGSkxGRkJRVkVzUjBGQlJ5eFJRVUZSTEVOQlFVRXNRVUZCUXp0TFFVRkJPME5CUTNaSUxFTkJRVU03TzBGQlJVWXNRMEZCUXl4UFFVRlBMRVZCUVVVc1QwRkJUeXhGUVVGRkxFOUJRVThzUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4VlFVRlZMRlZCUVZVc1JVRkJSU3hEUVVGRExFVkJRVVU3UVVGRGVrUXNZMEZCVlN4RFFVRkRMRlZCUVZVc1EwRkJReXhIUVVGSExHMUNRVUZ0UWl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dERRVU4yUkN4RFFVRkRPenM3UVVGQlF5eEJRVWRJTEdGQk1VSlRMRWxCUVVrc1JVRXdRbElzVlVGQlZTeEZRVUZGTEZWQlFVTXNVVUZCVVN4RlFVRkZMRWRCUVVjc1JVRkJTenRCUVVOb1F5eFJRVUZKTEdOQlFXTXNSMEZCUnl3MFFrRkJZU3hSUVVGUkxFTkJRVU1zUTBGQlF6dEJRVU0xUXl4alFVRlZMRU5CUVVrc1IwRkJSeXhSUVVGTExFZEJRVWNzWTBGQll5eERRVUZETEVWQlFVVXNRMEZCUXp0QlFVTXpReXhqUVVGVkxFTkJRVWtzUjBGQlJ5eFRRVUZOTEVkQlFVY3NZMEZCWXl4RFFVRkRMRWRCUVVjc1EwRkJRenRCUVVNM1F5eGpRVUZWTEVOQlFVa3NSMEZCUnl4WFFVRlJMRWRCUVVjc1kwRkJZeXhEUVVGRExFdEJRVXNzUTBGQlF6dERRVU53UkN4RFFVRkRMRU5CUVVNN08wRkJSVWdzVlVGQlZTeERRVUZETEUxQlFVMHNSMEZCUnl4VlFVRkJMRkZCUVZFN1YwRkJTU3hSUVVGUk8wTkJRVUVzUTBGQlF6dEJRVU42UXl4VlFVRlZMRU5CUVVNc1ZVRkJWU3hIUVVGSExGVkJRVU1zVVVGQlVUdFJRVUZGTEZGQlFWRXNlVVJCUVVjc2NVSkJRWEZDTzFkQlF5OUVMRUZCUVVNc1EwRkJReXhSUVVGUkxFbEJRVVVzUTBGQlF5eERRVUZCTEVkQlFVa3NRMEZCUXl4SFFVRkpMRWRCUVVjc1IwRkJSeXhWUVVGVkxFTkJRVU1zVFVGQlRTeERRVUZETEZGQlFWRXNSVUZCUlN4UlFVRlJMRU5CUVVNc1IwRkJTU3hIUVVGSExFbEJRVWtzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeEpRVUZKTEZGQlFWRXNSMEZCUnl4RFFVRkRMRU5CUVVFc1FVRkJReXhEUVVGRExFTkJRVUVzUVVGQlF6dERRVUZCTEVOQlFVTTdPMnRDUVVWNFJ5eFZRVUZWSWl3aVptbHNaU0k2SW5CeVpYTmxkQzFsWVhOcGJtY3Vhbk1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJdktseHVJQ0FnSUVWaGMybHVaeUJtZFc1amRHbHZibk5jYmlBZ0lDQXRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0WEc0Z0lDQWdYRzRnSUNBZ1IyVnVaWEpoZEdWeklHRnVaQ0J3Y205MmFXUmxjeUJsWVhOcGJtY2dablZ1WTNScGIyNXpJR0poYzJWa0lHOXVJR0poYzJWR2RXNWpkR2x2YmlCa1pXWnBibWwwYVc5dWMxeHVJQ0FnSUZ4dUlDQWdJRUVnWTJGc2JDQjBieUJsWVhOcGJtZEdkVzVqZEdsdmJpNW5aWFFvSjJaMWJtTjBhVzl1VG1GdFpTY3BJSEpsZEhWeWJuTWdZU0JtZFc1amRHbHZiaUIwYUdGMElHTmhiaUJpWlNCd1lYTnpaV1E2WEc0Z0lDQWdJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVUhKdlozSmxjM01nTUMweFhHNGdJQ0FnSUNBZ0lFQndZWEpoYlNCYmJuVnRZbVZ5WFNBb2IzQjBhVzl1WVd3cE9pQkJiWEFnYlc5a2FXWnBaWElzSUc5dWJIa2dZV05qWlhCMFpXUWdhVzRnYzI5dFpTQmxZWE5wYm1jZ1puVnVZM1JwYjI1elhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmhibVFnYVhNZ2RYTmxaQ0IwYnlCaFpHcDFjM1FnYjNabGNtRnNiQ0J6ZEhKbGJtZDBhRnh1SUNBZ0lDQWdJQ0JBY21WMGRYSnVJRnR1ZFcxaVpYSmRPaUJGWVhObFpDQndjbTluY21WemMxeHVJQ0FnSUNBZ0lDQmNiaUFnSUNCWFpTQmpZVzRnWjJWdVpYSmhkR1VnYm1WM0lHWjFibU4wYVc5dWN5QmllU0J6Wlc1a2FXNW5JR0Z1SUdWaGMybHVaeUJtZFc1amRHbHZiaUIwYUhKdmRXZG9JR1ZoYzJsdVowWjFibU4wYVc5dUxtVjRkR1Z1WkNodVlXMWxMQ0J0WlhSb2IyUXBMbHh1SUNBZ0lGZG9hV05vSUhkcGJHd2diV0ZyWlNCdVlXMWxTVzRzSUc1aGJXVlBkWFFnWVc1a0lHNWhiV1ZKYms5MWRDQm1kVzVqZEdsdmJuTWdZWFpoYVd4aFlteGxJSFJ2SUhWelpTNWNiaUFnSUNBZ0lDQWdYRzRnSUNBZ1JXRnphVzVuSUdaMWJtTjBhVzl1Y3lCbWNtOXRJRkp2WW1WeWRDQlFaVzV1WlhKY2JpQWdJQ0JvZEhSd09pOHZkM2QzTG5KdlltVnlkSEJsYm01bGNpNWpiMjB2WldGemFXNW5MMXh1SUNBZ0lDQWdJQ0JjYmlBZ0lDQkNaWHBwWlhJZ1kzVnlkbVVnYVc1MFpYSndjbVYwYjNJZ1kzSmxZWFJsWkNCbWNtOXRJRWRodzZ0MFlXNGdVbVZ1WVhWa1pXRjFKM01nYjNKcFoybHVZV3dnUW1WNmFXVnlSV0Z6YVc1bklDQmNiaUFnSUNCb2RIUndjem92TDJkcGRHaDFZaTVqYjIwdlozSmxMMkpsZW1sbGNpMWxZWE5wYm1jdllteHZZaTl0WVhOMFpYSXZhVzVrWlhndWFuTWdJRnh1SUNBZ0lHaDBkSEJ6T2k4dloybDBhSFZpTG1OdmJTOW5jbVV2WW1WNmFXVnlMV1ZoYzJsdVp5OWliRzlpTDIxaGMzUmxjaTlNU1VORlRsTkZYRzVjYmlBZ0lDQkJiblJwWTJsd1lYUmxJR1ZoYzJsdVp5QmpjbVZoZEdWa0lHSjVJRVZzYkdsdmRDQkhhVzV2WEc0Z0lDQWdhSFIwY0hNNkx5OTBkMmwwZEdWeUxtTnZiUzlGYkd4cGIzUkhaVzV2WEc0cUwxeHVMeThnU1cxd2IzSjBjMXh1YVcxd2IzSjBJR055WldGMFpVVmhjMmx1WnlCbWNtOXRJQ2N1TDJOeVpXRjBaUzFsWVhOcGJtY25PMXh1YVcxd2IzSjBJSHNnWldGamFDQjlJR1p5YjIwZ0ozVnBMWFYwYVd4ekp6dGNibHh1THk4Z1ZtRnNkV1Z6WEc1amIyNXpkQ0JFUlVaQlZVeFVYMEpCUTB0ZlUxUlNSVTVIVkVnZ1BTQXhMalV5TlR0Y2JtTnZibk4wSUVSRlJrRlZURlJmVUU5WFgxTlVVa1ZPUjFSSUlEMGdNanRjYmx4dUx5OGdWWFJwYkdsMGVTQm1kVzVqZEdsdmJuTmNibU52Ym5OMElHZGxibVZ5WVhSbFVHOTNaWEpGWVhOcGJtY2dQU0J6ZEhKbGJtZDBhQ0E5UGlBb2NISnZaM0psYzNNc0lITjBjbVZ1WjNSb0tTQTlQaUJpWVhObFJXRnphVzVuTG1WaGMyVW9jSEp2WjNKbGMzTXNJSE4wY21WdVozUm9LVHRjYmx4dUx5cGNiaUFnSUNCRllXTm9JRzltSUhSb1pYTmxJR0poYzJVZ1puVnVZM1JwYjI1eklHbHpJR0Z1SUdWaGMyVkpibHh1SUNBZ0lGeHVJQ0FnSUU5dUlHbHVhWFFzSUhkbElIVnpaU0F1YldseWNtOXlJR0Z1WkNBdWNtVjJaWEp6WlNCMGJ5Qm5aVzVsY21GMFpTQmxZWE5sU1c1UGRYUWdZVzVrWEc0Z0lDQWdaV0Z6WlU5MWRDQm1kVzVqZEdsdmJuTWdjbVZ6Y0dWamRHbDJaV3g1TGx4dUtpOWNibXhsZENCaVlYTmxSV0Z6YVc1bklEMGdlMXh1SUNBZ0lHVmhjMlU2SUNod2NtOW5jbVZ6Y3l3Z2MzUnlaVzVuZEdnZ1BTQkVSVVpCVlV4VVgxQlBWMTlUVkZKRlRrZFVTQ2tnUFQ0Z2NISnZaM0psYzNNZ0tpb2djM1J5Wlc1bmRHZ3NYRzRnSUNBZ1kybHlZem9nY0hKdlozSmxjM01nUFQ0Z01TQXRJRTFoZEdndWMybHVLRTFoZEdndVlXTnZjeWh3Y205bmNtVnpjeWtwTEZ4dUlDQWdJR0poWTJzNklDaHdjbTluY21WemN5d2djM1J5Wlc1bmRHZ2dQU0JFUlVaQlZVeFVYMEpCUTB0ZlUxUlNSVTVIVkVncElEMCtJQ2h3Y205bmNtVnpjeUFxSUhCeWIyZHlaWE56S1NBcUlDZ29jM1J5Wlc1bmRHZ2dLeUF4S1NBcUlIQnliMmR5WlhOeklDMGdjM1J5Wlc1bmRHZ3BYRzU5TzF4dVhHNWJKMk4xWW1sakp5d2dKM0YxWVhKMEp5d2dKM0YxYVc1MEoxMHVabTl5UldGamFDaG1kVzVqZEdsdmJpQW9aV0Z6YVc1blRtRnRaU3dnYVNrZ2UxeHVJQ0FnSUdKaGMyVkZZWE5wYm1kYlpXRnphVzVuVG1GdFpWMGdQU0JuWlc1bGNtRjBaVkJ2ZDJWeVJXRnphVzVuS0drZ0t5QXpLVHRjYm4wcE8xeHVYRzR2THlCSFpXNWxjbUYwWlNCcGJpOXZkWFF2YVc1UGRYUWdkbUZ5YVdGMGFXOXVjMXh1WldGamFDaGlZWE5sUldGemFXNW5MQ0FvWW1GelpVVmhjMlVzSUd0bGVTa2dQVDRnZTF4dUlDQWdJR3hsZENCbFlYTnBibWRHZFc1amRHbHZiaUE5SUdOeVpXRjBaVVZoYzJsdVp5aGlZWE5sUldGelpTazdYRzRnSUNBZ1ltRnpaVVZoYzJsdVoxdGdKSHRyWlhsOVNXNWdYU0E5SUdWaGMybHVaMFoxYm1OMGFXOXVMbWx1TzF4dUlDQWdJR0poYzJWRllYTnBibWRiWUNSN2EyVjVmVTkxZEdCZElEMGdaV0Z6YVc1blJuVnVZM1JwYjI0dWIzVjBPMXh1SUNBZ0lHSmhjMlZGWVhOcGJtZGJZQ1I3YTJWNWZVbHVUM1YwWUYwZ1BTQmxZWE5wYm1kR2RXNWpkR2x2Ymk1cGJrOTFkRHRjYm4wcE8xeHVYRzVpWVhObFJXRnphVzVuTG14cGJtVmhjaUE5SUhCeWIyZHlaWE56SUQwK0lIQnliMmR5WlhOek8xeHVZbUZ6WlVWaGMybHVaeTVoYm5ScFkybHdZWFJsSUQwZ0tIQnliMmR5WlhOekxDQnpkSEpsYm1kMGFDQTlJRVJGUmtGVlRGUmZRa0ZEUzE5VFZGSkZUa2RVU0NrZ1BUNWNiaUFnSUNBb0tIQnliMmR5WlhOektqMHlLU0E4SURFcElEOGdNQzQxSUNvZ1ltRnpaVVZoYzJsdVp5NWlZV05yU1c0b2NISnZaM0psYzNNc0lITjBjbVZ1WjNSb0tTQTZJQ0F3TGpVZ0tpQW9NaUF0SUUxaGRHZ3VjRzkzS0RJc0lDMHhNQ0FxSUNod2NtOW5jbVZ6Y3lBdElERXBLU2s3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUdKaGMyVkZZWE5wYm1jN0lsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvdHdlZW4vcHJlc2V0LWVhc2luZy5qc1xuICoqIG1vZHVsZSBpZCA9IDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMudG9EZWNpbWFsID0gZXhwb3J0cy5zcGxpdFZhbHVlVW5pdCA9IGV4cG9ydHMuaXNTdHJpbmcgPSBleHBvcnRzLmlzUmVsYXRpdmVWYWx1ZSA9IGV4cG9ydHMuaXNPYmogPSBleHBvcnRzLmlzTnVtID0gZXhwb3J0cy5pc0Z1bmMgPSBleHBvcnRzLmlzQXJyYXkgPSBleHBvcnRzLmhhc1Byb3BlcnR5ID0gZXhwb3J0cy5oYXNDaGFuZ2VkID0gZXhwb3J0cy5lYWNoID0gZXhwb3J0cy5jdXJyZW50VGltZSA9IGV4cG9ydHMuY3JlYXRlQnVmZmVyID0gZXhwb3J0cy5jYW1lbFRvRGFzaCA9IHVuZGVmaW5lZDtcblxudmFyIF9idWZmZXJNZXRob2RzID0gcmVxdWlyZSgnLi9pbmMvYnVmZmVyLW1ldGhvZHMnKTtcblxudmFyIENBTUVMX0NBU0VfUEFUVEVSTiA9IC8oW2Etel0pKFtBLVpdKS9nO1xudmFyIFJFUExBQ0VfVEVNUExBVEUgPSAnJDEtJDInO1xudmFyIEhBU19QRVJGT1JNQU5DRV9OT1cgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnICYmIHBlcmZvcm1hbmNlLm5vdztcblxuLypcbiAgICBHZXQgdmFyIHR5cGUgYXMgc3RyaW5nXG4gICAgXG4gICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgQHJldHVybiBbc3RyaW5nXTogUmV0dXJucywgZm9yIGluc3RhbmNlICdPYmplY3QnIGlmIFtvYmplY3QgT2JqZWN0XVxuKi9cbnZhciB2YXJUeXBlID0gZnVuY3Rpb24gKHZhcmlhYmxlKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YXJpYWJsZSkuc2xpY2UoOCwgLTEpO1xufTtcblxuLypcbiAgICBDb252ZXJ0IGNhbWVsQ2FzZSB0byBkYXNoLWNhc2VcblxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEByZXR1cm4gW3N0cmluZ11cbiovXG52YXIgY2FtZWxUb0Rhc2ggPSBleHBvcnRzLmNhbWVsVG9EYXNoID0gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIHJldHVybiBzdHJpbmcucmVwbGFjZShDQU1FTF9DQVNFX1BBVFRFUk4sIFJFUExBQ0VfVEVNUExBVEUpLnRvTG93ZXJDYXNlKCk7XG59O1xuXG4vKlxuICAgIENyZWF0ZSBhbiBhdXRvLWN1bGxpbmcgYnVmZmVyIGFycmF5XG5cbiAgICBAcGFyYW0gW2FycmF5XVxuICAgIEBwYXJhbSBbaW50XVxuICAgIEByZXR1cm4gW2FycmF5XVxuKi9cbnZhciBjcmVhdGVCdWZmZXIgPSBleHBvcnRzLmNyZWF0ZUJ1ZmZlciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbWF4U2l6ZSA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IDMgOiBhcmd1bWVudHNbMF07XG4gICAgdmFyIGFycmF5ID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gW10gOiBhcmd1bWVudHNbMV07XG5cbiAgICBhcnJheS5wdXNoID0gX2J1ZmZlck1ldGhvZHMucHVzaDtcbiAgICBhcnJheS5fbWF4U2l6ZSA9IG1heFNpemUgfHwgMDtcblxuICAgIHJldHVybiBhcnJheTtcbn07XG5cbi8qXG4gICAgR2VuZXJhdGUgY3VycmVudCB0aW1lc3RhbXBcbiAgICBcbiAgICBAcmV0dXJuIFt0aW1lc3RhbXBdOiBDdXJyZW50IFVOSVggdGltZXN0YW1wXG4qL1xudmFyIGN1cnJlbnRUaW1lID0gZXhwb3J0cy5jdXJyZW50VGltZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gSEFTX1BFUkZPUk1BTkNFX05PVyA/IHBlcmZvcm1hbmNlLm5vdygpIDogbmV3IERhdGUoKS5nZXRUaW1lKCk7XG59O1xuXG4vKlxuICAgIEl0ZXJhdGUgb3ZlciBhbiBvYmplY3QgYW5kIGZpcmUgYSBjYWxsYmFjayBmb3IgZXZlcnkgaXRlbSBpbiBpdFxuXG4gICAgQHBhcmFtIFtvYmplY3RdOiBPYmplY3QgdG8gaXRlcmF0ZSBvdmVyXG4gICAgQHBhcmFtIFtmdW5jdGlvbl06IENhbGxiYWNrIHRvIGZpcmVcbiovXG52YXIgZWFjaCA9IGV4cG9ydHMuZWFjaCA9IGZ1bmN0aW9uIChvYmplY3QsIGNhbGxiYWNrKSB7XG4gICAgdmFyIGtleXMgPSBvYmplY3QgPyBPYmplY3Qua2V5cyhvYmplY3QpIDogW107XG4gICAgdmFyIG51bUtleXMgPSBrZXlzLmxlbmd0aDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtS2V5czsgaSsrKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgICAgICB2YXIgcHJvcCA9IG9iamVjdFtrZXldO1xuXG4gICAgICAgIGNhbGxiYWNrKHByb3AsIGtleSwgb2JqZWN0KTtcbiAgICB9XG59O1xuXG4vKlxuICAgIENoZWNrIGlmIHR3byBvYmplY3RzIGhhdmUgY2hhbmdlZCBmcm9tIGVhY2ggb3RoZXJcbiAgICBcbiAgICBAcGFyYW0gW29iamVjdF06IElucHV0IEFcbiAgICBAcGFyYW0gW29iamVjdF06IElucHV0IEJcbiAgICBAcmV0dXJuIFtib29sZWFuXTogVHJ1ZSBpZiBkaWZmZXJlbnRcbiovXG52YXIgaGFzQ2hhbmdlZCA9IGV4cG9ydHMuaGFzQ2hhbmdlZCA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgdmFyIGNoYW5nZWQgPSBmYWxzZTtcblxuICAgIGVhY2goYSwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgaWYgKGhhc1Byb3BlcnR5KGIsIGtleSkpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gYltrZXldKSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNoYW5nZWQ7XG59O1xuXG4vKlxuICAgIENoZWNrIGlmIG9iamVjdCBoYXMgcHJvcGVydHkgYW5kIGl0IGlzbid0IHVuZGVmaW5lZFxuXG4gICAgQHBhcmFtIFtvYmplY3RdXG4gICAgQHBhcmFtIFtzdHJpbmddXG4gICAgQHJldHVybiBbYm9vbGVhbl1cbiovXG52YXIgaGFzUHJvcGVydHkgPSBleHBvcnRzLmhhc1Byb3BlcnR5ID0gZnVuY3Rpb24gKG9iamVjdCwgcHJvcGVydHlOYW1lKSB7XG4gICAgcmV0dXJuIG9iamVjdC5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eU5hbWUpICYmIG9iamVjdFtwcm9wZXJ0eU5hbWVdICE9PSB1bmRlZmluZWQ7XG59O1xuXG4vKlxuICAgIElzIHV0aWxzIHZhciBhbiBhcnJheSA/IFxuICAgIFxuICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdXRpbHMudmFyVHlwZSA9PT0gJ0FycmF5J1xuKi9cbnZhciBpc0FycmF5ID0gZXhwb3J0cy5pc0FycmF5ID0gZnVuY3Rpb24gKGFycikge1xuICAgIHJldHVybiB2YXJUeXBlKGFycikgPT09ICdBcnJheSc7XG59O1xuXG4vKlxuICAgIElzIHV0aWxzIHZhciBhIGZ1bmN0aW9uID8gXG4gICAgXG4gICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB1dGlscy52YXJUeXBlID09PSAnRnVuY3Rpb24nXG4qL1xudmFyIGlzRnVuYyA9IGV4cG9ydHMuaXNGdW5jID0gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB2YXJUeXBlKG9iaikgPT09ICdGdW5jdGlvbic7XG59O1xuXG4vKlxuICAgIElzIHV0aWxzIHZhciBhIG51bWJlcj9cbiAgICBcbiAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiA9PT0gJ251bWJlcidcbiovXG52YXIgaXNOdW0gPSBleHBvcnRzLmlzTnVtID0gZnVuY3Rpb24gKG51bSkge1xuICAgIHJldHVybiB0eXBlb2YgbnVtID09PSAnbnVtYmVyJztcbn07XG5cbi8qXG4gICAgSXMgdXRpbHMgdmFyIGFuIG9iamVjdD9cbiAgICBcbiAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiA9PT0gJ29iamVjdCdcbiovXG52YXIgaXNPYmogPSBleHBvcnRzLmlzT2JqID0gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jztcbn07XG5cbi8qXG4gICAgSXMgdXRpbHMgYSByZWxhdGl2ZSB2YWx1ZSBhc3NpZ25tZW50P1xuICAgIFxuICAgIEBwYXJhbSBbc3RyaW5nXTogVmFyaWFibGUgdG8gdGVzdFxuICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBJZiB1dGlscyBsb29rcyBsaWtlIGEgcmVsYXRpdmUgdmFsdWUgYXNzaWdubWVudFxuKi9cbnZhciBpc1JlbGF0aXZlVmFsdWUgPSBleHBvcnRzLmlzUmVsYXRpdmVWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAmJiB2YWx1ZS5pbmRleE9mICYmIHZhbHVlLmluZGV4T2YoJz0nKSA+IDAgPyB0cnVlIDogZmFsc2U7XG59O1xuXG4vKlxuICAgIElzIHV0aWxzIHZhciBhIHN0cmluZyA/IFxuICAgIFxuICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mIHN0ciA9PT0gJ3N0cmluZydcbiovXG52YXIgaXNTdHJpbmcgPSBleHBvcnRzLmlzU3RyaW5nID0gZnVuY3Rpb24gKHN0cikge1xuICAgIHJldHVybiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJztcbn07XG5cbi8qXG4gICAgU3BsaXQgYSB2YWx1ZSBpbnRvIGEgdmFsdWUvdW5pdCBvYmplY3RcbiAgICBcbiAgICAgICAgXCIyMDBweFwiIC0+IHsgdmFsdWU6IDIwMCwgdW5pdDogXCJweFwiIH1cbiAgICAgICAgXG4gICAgQHBhcmFtIFtzdHJpbmddOiBWYWx1ZSB0byBzcGxpdFxuICAgIEByZXR1cm4gW29iamVjdF06IE9iamVjdCB3aXRoIHZhbHVlIGFuZCB1bml0IHByb3BzXG4qL1xudmFyIHNwbGl0VmFsdWVVbml0ID0gZXhwb3J0cy5zcGxpdFZhbHVlVW5pdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHZhciBzcGxpdFZhbCA9IHZhbHVlLm1hdGNoKC8oLT9cXGQqXFwuP1xcZCopKC4qKS8pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdmFsdWU6IHBhcnNlRmxvYXQoc3BsaXRWYWxbMV0pLFxuICAgICAgICB1bml0OiBzcGxpdFZhbFsyXVxuICAgIH07XG59O1xuXG52YXIgdG9EZWNpbWFsID0gZXhwb3J0cy50b0RlY2ltYWwgPSBmdW5jdGlvbiAobnVtKSB7XG4gICAgdmFyIHByZWNpc2lvbiA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IDIgOiBhcmd1bWVudHNbMV07XG5cbiAgICBwcmVjaXNpb24gPSBNYXRoLnBvdygxMCwgcHJlY2lzaW9uKTtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChudW0gKiBwcmVjaXNpb24pIC8gcHJlY2lzaW9uO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOeVl5OWxiblJ5ZVM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3TzBGQlJVRXNTVUZCVFN4clFrRkJhMElzUjBGQlJ5eHBRa0ZCYVVJc1EwRkJRenRCUVVNM1F5eEpRVUZOTEdkQ1FVRm5RaXhIUVVGSExFOUJRVThzUTBGQlF6dEJRVU5xUXl4SlFVRk5MRzFDUVVGdFFpeEhRVUZKTEU5QlFVOHNWMEZCVnl4TFFVRkxMRmRCUVZjc1NVRkJTU3hYUVVGWExFTkJRVU1zUjBGQlJ5eEJRVUZET3pzN096czdPenRCUVVGRExFRkJVWEJHTEVsQlFVMHNUMEZCVHl4SFFVRkhMRlZCUVVFc1VVRkJVVHRYUVVGSkxFMUJRVTBzUTBGQlF5eFRRVUZUTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8wTkJRVUU3T3pzN096czdPMEZCUVVNc1FVRlJNMFVzU1VGQlRTeFhRVUZYTEZkQlFWZ3NWMEZCVnl4SFFVRkhMRlZCUVVNc1RVRkJUVHRYUVVGTExFMUJRVTBzUTBGQlF5eFBRVUZQTEVOQlFVTXNhMEpCUVd0Q0xFVkJRVVVzWjBKQlFXZENMRU5CUVVNc1EwRkJReXhYUVVGWExFVkJRVVU3UTBGQlFUczdPenM3T3pzN08wRkJRVU1zUVVGVGJrY3NTVUZCVFN4WlFVRlpMRmRCUVZvc1dVRkJXU3hIUVVGSExGbEJRVFpDTzFGQlFUVkNMRTlCUVU4c2VVUkJRVWNzUTBGQlF6dFJRVUZGTEV0QlFVc3NlVVJCUVVjc1JVRkJSVHM3UVVGRGFFUXNVMEZCU3l4RFFVRkRMRWxCUVVrc2EwSkJPVUpNTEVsQlFVa3NRVUU0UWxFc1EwRkJRenRCUVVOc1FpeFRRVUZMTEVOQlFVTXNVVUZCVVN4SFFVRkhMRTlCUVU4c1NVRkJTU3hEUVVGRExFTkJRVU03TzBGQlJUbENMRmRCUVU4c1MwRkJTeXhEUVVGRE8wTkJRMmhDT3pzN096czdPMEZCUVVFc1FVRlBUU3hKUVVGTkxGZEJRVmNzVjBGQldDeFhRVUZYTEVkQlFVYzdWMEZCVFN4dFFrRkJiVUlzUjBGQlJ5eFhRVUZYTEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1NVRkJTU3hKUVVGSkxFVkJRVVVzUTBGQlF5eFBRVUZQTEVWQlFVVTdRMEZCUVRzN096czdPenM3UVVGQlF5eEJRVkY2Uml4SlFVRk5MRWxCUVVrc1YwRkJTaXhKUVVGSkxFZEJRVWNzVlVGQlF5eE5RVUZOTEVWQlFVVXNVVUZCVVN4RlFVRkxPMEZCUTNSRExGRkJRVTBzU1VGQlNTeEhRVUZITEUxQlFVMHNSMEZCUnl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXp0QlFVTXZReXhSUVVGTkxFOUJRVThzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRPenRCUVVVMVFpeFRRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzVDBGQlR5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMEZCUXpsQ0xGbEJRVTBzUjBGQlJ5eEhRVUZITEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRCUVVOd1FpeFpRVUZOTEVsQlFVa3NSMEZCUnl4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03TzBGQlJYcENMR2RDUVVGUkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVkQlFVY3NSVUZCUlN4TlFVRk5MRU5CUVVNc1EwRkJRenRMUVVNdlFqdERRVU5LT3pzN096czdPenM3UVVGQlF5eEJRVk5MTEVsQlFVMHNWVUZCVlN4WFFVRldMRlZCUVZVc1IwRkJSeXhWUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVczdRVUZEYUVNc1VVRkJTU3hQUVVGUExFZEJRVWNzUzBGQlN5eERRVUZET3p0QlFVVndRaXhSUVVGSkxFTkJRVU1zUTBGQlF5eEZRVUZGTEZWQlFVTXNTMEZCU3l4RlFVRkZMRWRCUVVjc1JVRkJTenRCUVVOd1FpeFpRVUZKTEZkQlFWY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1IwRkJSeXhEUVVGRExFVkJRVVU3UVVGRGNrSXNaMEpCUVVrc1MwRkJTeXhMUVVGTExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlR0QlFVTnNRaXgxUWtGQlR5eEhRVUZITEVsQlFVa3NRMEZCUXp0aFFVTnNRanRUUVVOS0xFMUJRVTA3UVVGRFNDeHRRa0ZCVHl4SFFVRkhMRWxCUVVrc1EwRkJRenRUUVVOc1FqdExRVU5LTEVOQlFVTXNRMEZCUXpzN1FVRkZTQ3hYUVVGUExFOUJRVThzUTBGQlF6dERRVU5zUWpzN096czdPenM3TzBGQlFVTXNRVUZUU3l4SlFVRk5MRmRCUVZjc1YwRkJXQ3hYUVVGWExFZEJRVWNzVlVGQlF5eE5RVUZOTEVWQlFVVXNXVUZCV1R0WFFVRkxMRTFCUVUwc1EwRkJReXhqUVVGakxFTkJRVU1zV1VGQldTeERRVUZETEVsQlFVa3NUVUZCVFN4RFFVRkRMRmxCUVZrc1EwRkJReXhMUVVGTExGTkJRVk03UTBGQlFUczdPenM3T3pzN1FVRkJReXhCUVZGNFNDeEpRVUZOTEU5QlFVOHNWMEZCVUN4UFFVRlBMRWRCUVVjc1ZVRkJReXhIUVVGSE8xZEJRVXNzVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRTlCUVU4N1EwRkJRVHM3T3pzN096czdRVUZCUXl4QlFWRnNSQ3hKUVVGTkxFMUJRVTBzVjBGQlRpeE5RVUZOTEVkQlFVY3NWVUZCUXl4SFFVRkhPMWRCUVVzc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eExRVUZMTEZWQlFWVTdRMEZCUVRzN096czdPenM3UVVGQlF5eEJRVkZ3UkN4SlFVRk5MRXRCUVVzc1YwRkJUQ3hMUVVGTExFZEJRVWNzVlVGQlF5eEhRVUZITzFkQlFVc3NUMEZCVHl4SFFVRkhMRXRCUVVzc1VVRkJVVHREUVVGQk96czdPenM3T3p0QlFVRkRMRUZCVVM5RExFbEJRVTBzUzBGQlN5eFhRVUZNTEV0QlFVc3NSMEZCUnl4VlFVRkRMRWRCUVVjN1YwRkJTeXhQUVVGUExFZEJRVWNzUzBGQlN5eFJRVUZSTzBOQlFVRTdPenM3T3pzN08wRkJRVU1zUVVGUkwwTXNTVUZCVFN4bFFVRmxMRmRCUVdZc1pVRkJaU3hIUVVGSExGVkJRVU1zUzBGQlN6dFhRVUZMTEVGQlFVTXNTMEZCU3l4SlFVRkpMRXRCUVVzc1EwRkJReXhQUVVGUExFbEJRVWtzUzBGQlN5eERRVUZETEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWtzU1VGQlNTeEhRVUZITEV0QlFVczdRMEZCUVRzN096czdPenM3UVVGQlF5eEJRVkZ5Unl4SlFVRk5MRkZCUVZFc1YwRkJVaXhSUVVGUkxFZEJRVWNzVlVGQlF5eEhRVUZITzFkQlFVc3NUMEZCVHl4SFFVRkhMRXRCUVVzc1VVRkJVVHREUVVGQk96czdPenM3T3pzN08wRkJRVU1zUVVGVmJFUXNTVUZCVFN4alFVRmpMRmRCUVdRc1kwRkJZeXhIUVVGSExGVkJRVU1zUzBGQlN5eEZRVUZMTzBGQlEzSkRMRkZCUVUwc1VVRkJVU3hIUVVGSExFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTXNiVUpCUVcxQ0xFTkJRVU1zUTBGQlF6czdRVUZGYkVRc1YwRkJUenRCUVVOSUxHRkJRVXNzUlVGQlJTeFZRVUZWTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJRemxDTEZsQlFVa3NSVUZCUnl4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRE8wdEJRM0pDTEVOQlFVTTdRMEZEVEN4RFFVRkRPenRCUVVWTExFbEJRVTBzVTBGQlV5eFhRVUZVTEZOQlFWTXNSMEZCUnl4VlFVRkRMRWRCUVVjc1JVRkJiMEk3VVVGQmJFSXNVMEZCVXl4NVJFRkJSeXhEUVVGRE96dEJRVU40UXl4aFFVRlRMRmxCUVVjc1JVRkJSU3hGUVVGSkxGTkJRVk1zUTBGQlFTeERRVUZETzBGQlF6VkNMRmRCUVU4c1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVkQlFVY3NVMEZCVXl4RFFVRkRMRWRCUVVjc1UwRkJVeXhEUVVGRE8wTkJRMnhFTEVOQlFVTWlMQ0ptYVd4bElqb2laVzUwY25rdWFuTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdleUJ3ZFhOb0lIMGdabkp2YlNBbkxpOXBibU12WW5WbVptVnlMVzFsZEdodlpITW5PMXh1WEc1amIyNXpkQ0JEUVUxRlRGOURRVk5GWDFCQlZGUkZVazRnUFNBdktGdGhMWHBkS1NoYlFTMWFYU2t2Wnp0Y2JtTnZibk4wSUZKRlVFeEJRMFZmVkVWTlVFeEJWRVVnUFNBbkpERXRKREluTzF4dVkyOXVjM1FnU0VGVFgxQkZVa1pQVWsxQlRrTkZYMDVQVnlBOUlDaDBlWEJsYjJZZ2NHVnlabTl5YldGdVkyVWdJVDA5SUNkMWJtUmxabWx1WldRbklDWW1JSEJsY21admNtMWhibU5sTG01dmR5azdYRzVjYmk4cVhHNGdJQ0FnUjJWMElIWmhjaUIwZVhCbElHRnpJSE4wY21sdVoxeHVJQ0FnSUZ4dUlDQWdJRUJ3WVhKaGJUb2dWbUZ5YVdGaWJHVWdkRzhnZEdWemRGeHVJQ0FnSUVCeVpYUjFjbTRnVzNOMGNtbHVaMTA2SUZKbGRIVnlibk1zSUdadmNpQnBibk4wWVc1alpTQW5UMkpxWldOMEp5QnBaaUJiYjJKcVpXTjBJRTlpYW1WamRGMWNiaW92WEc1amIyNXpkQ0IyWVhKVWVYQmxJRDBnZG1GeWFXRmliR1VnUFQ0Z1QySnFaV04wTG5CeWIzUnZkSGx3WlM1MGIxTjBjbWx1Wnk1allXeHNLSFpoY21saFlteGxLUzV6YkdsalpTZzRMQ0F0TVNrN1hHNWNiaThxWEc0Z0lDQWdRMjl1ZG1WeWRDQmpZVzFsYkVOaGMyVWdkRzhnWkdGemFDMWpZWE5sWEc1Y2JpQWdJQ0JBY0dGeVlXMGdXM04wY21sdVoxMWNiaUFnSUNCQWNtVjBkWEp1SUZ0emRISnBibWRkWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUdOaGJXVnNWRzlFWVhOb0lEMGdLSE4wY21sdVp5a2dQVDRnYzNSeWFXNW5MbkpsY0d4aFkyVW9RMEZOUlV4ZlEwRlRSVjlRUVZSVVJWSk9MQ0JTUlZCTVFVTkZYMVJGVFZCTVFWUkZLUzUwYjB4dmQyVnlRMkZ6WlNncE8xeHVYRzR2S2x4dUlDQWdJRU55WldGMFpTQmhiaUJoZFhSdkxXTjFiR3hwYm1jZ1luVm1abVZ5SUdGeWNtRjVYRzVjYmlBZ0lDQkFjR0Z5WVcwZ1cyRnljbUY1WFZ4dUlDQWdJRUJ3WVhKaGJTQmJhVzUwWFZ4dUlDQWdJRUJ5WlhSMWNtNGdXMkZ5Y21GNVhWeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQmpjbVZoZEdWQ2RXWm1aWElnUFNBb2JXRjRVMmw2WlNBOUlETXNJR0Z5Y21GNUlEMGdXMTBwSUQwK0lIdGNiaUFnSUNCaGNuSmhlUzV3ZFhOb0lEMGdjSFZ6YUR0Y2JpQWdJQ0JoY25KaGVTNWZiV0Y0VTJsNlpTQTlJRzFoZUZOcGVtVWdmSHdnTUR0Y2JseHVJQ0FnSUhKbGRIVnliaUJoY25KaGVUdGNibjFjYmx4dUx5cGNiaUFnSUNCSFpXNWxjbUYwWlNCamRYSnlaVzUwSUhScGJXVnpkR0Z0Y0Z4dUlDQWdJRnh1SUNBZ0lFQnlaWFIxY200Z1czUnBiV1Z6ZEdGdGNGMDZJRU4xY25KbGJuUWdWVTVKV0NCMGFXMWxjM1JoYlhCY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ1kzVnljbVZ1ZEZScGJXVWdQU0FvS1NBOVBpQklRVk5mVUVWU1JrOVNUVUZPUTBWZlRrOVhJRDhnY0dWeVptOXliV0Z1WTJVdWJtOTNLQ2tnT2lCdVpYY2dSR0YwWlNncExtZGxkRlJwYldVb0tUdGNibHh1THlwY2JpQWdJQ0JKZEdWeVlYUmxJRzkyWlhJZ1lXNGdiMkpxWldOMElHRnVaQ0JtYVhKbElHRWdZMkZzYkdKaFkyc2dabTl5SUdWMlpYSjVJR2wwWlcwZ2FXNGdhWFJjYmx4dUlDQWdJRUJ3WVhKaGJTQmJiMkpxWldOMFhUb2dUMkpxWldOMElIUnZJR2wwWlhKaGRHVWdiM1psY2x4dUlDQWdJRUJ3WVhKaGJTQmJablZ1WTNScGIyNWRPaUJEWVd4c1ltRmpheUIwYnlCbWFYSmxYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJR1ZoWTJnZ1BTQW9iMkpxWldOMExDQmpZV3hzWW1GamF5a2dQVDRnZTF4dUlDQWdJR052Ym5OMElHdGxlWE1nUFNCdlltcGxZM1FnUHlCUFltcGxZM1F1YTJWNWN5aHZZbXBsWTNRcElEb2dXMTA3WEc0Z0lDQWdZMjl1YzNRZ2JuVnRTMlY1Y3lBOUlHdGxlWE11YkdWdVozUm9PMXh1WEc0Z0lDQWdabTl5SUNoc1pYUWdhU0E5SURBN0lHa2dQQ0J1ZFcxTFpYbHpPeUJwS3lzcElIdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2EyVjVJRDBnYTJWNWMxdHBYVHRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdjSEp2Y0NBOUlHOWlhbVZqZEZ0clpYbGRPMXh1WEc0Z0lDQWdJQ0FnSUdOaGJHeGlZV05yS0hCeWIzQXNJR3RsZVN3Z2IySnFaV04wS1R0Y2JpQWdJQ0I5WEc1OU8xeHVYRzR2S2x4dUlDQWdJRU5vWldOcklHbG1JSFIzYnlCdlltcGxZM1J6SUdoaGRtVWdZMmhoYm1kbFpDQm1jbTl0SUdWaFkyZ2diM1JvWlhKY2JpQWdJQ0JjYmlBZ0lDQkFjR0Z5WVcwZ1cyOWlhbVZqZEYwNklFbHVjSFYwSUVGY2JpQWdJQ0JBY0dGeVlXMGdXMjlpYW1WamRGMDZJRWx1Y0hWMElFSmNiaUFnSUNCQWNtVjBkWEp1SUZ0aWIyOXNaV0Z1WFRvZ1ZISjFaU0JwWmlCa2FXWm1aWEpsYm5SY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2FHRnpRMmhoYm1kbFpDQTlJQ2hoTENCaUtTQTlQaUI3WEc0Z0lDQWdiR1YwSUdOb1lXNW5aV1FnUFNCbVlXeHpaVHRjYmx4dUlDQWdJR1ZoWTJnb1lTd2dLSFpoYkhWbExDQnJaWGtwSUQwK0lIdGNiaUFnSUNBZ0lDQWdhV1lnS0doaGMxQnliM0JsY25SNUtHSXNJR3RsZVNrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaDJZV3gxWlNBaFBUMGdZbHRyWlhsZEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMmhoYm1kbFpDQTlJSFJ5ZFdVN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmphR0Z1WjJWa0lEMGdkSEoxWlR0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgwcE8xeHVYRzRnSUNBZ2NtVjBkWEp1SUdOb1lXNW5aV1E3WEc1OU8xeHVYRzR2S2x4dUlDQWdJRU5vWldOcklHbG1JRzlpYW1WamRDQm9ZWE1nY0hKdmNHVnlkSGtnWVc1a0lHbDBJR2x6YmlkMElIVnVaR1ZtYVc1bFpGeHVYRzRnSUNBZ1FIQmhjbUZ0SUZ0dlltcGxZM1JkWEc0Z0lDQWdRSEJoY21GdElGdHpkSEpwYm1kZFhHNGdJQ0FnUUhKbGRIVnliaUJiWW05dmJHVmhibDFjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnYUdGelVISnZjR1Z5ZEhrZ1BTQW9iMkpxWldOMExDQndjbTl3WlhKMGVVNWhiV1VwSUQwK0lHOWlhbVZqZEM1b1lYTlBkMjVRY205d1pYSjBlU2h3Y205d1pYSjBlVTVoYldVcElDWW1JRzlpYW1WamRGdHdjbTl3WlhKMGVVNWhiV1ZkSUNFOVBTQjFibVJsWm1sdVpXUTdYRzVjYmk4cVhHNGdJQ0FnU1hNZ2RYUnBiSE1nZG1GeUlHRnVJR0Z5Y21GNUlEOGdYRzRnSUNBZ1hHNGdJQ0FnUUhCaGNtRnRPaUJXWVhKcFlXSnNaU0IwYnlCMFpYTjBYRzRnSUNBZ1FISmxkSFZ5YmlCYlltOXZiR1ZoYmwwNklGSmxkSFZ5Ym5NZ2RISjFaU0JwWmlCMWRHbHNjeTUyWVhKVWVYQmxJRDA5UFNBblFYSnlZWGtuWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUdselFYSnlZWGtnUFNBb1lYSnlLU0E5UGlCMllYSlVlWEJsS0dGeWNpa2dQVDA5SUNkQmNuSmhlU2M3WEc1Y2JpOHFYRzRnSUNBZ1NYTWdkWFJwYkhNZ2RtRnlJR0VnWm5WdVkzUnBiMjRnUHlCY2JpQWdJQ0JjYmlBZ0lDQkFjR0Z5WVcwNklGWmhjbWxoWW14bElIUnZJSFJsYzNSY2JpQWdJQ0JBY21WMGRYSnVJRnRpYjI5c1pXRnVYVG9nVW1WMGRYSnVjeUIwY25WbElHbG1JSFYwYVd4ekxuWmhjbFI1Y0dVZ1BUMDlJQ2RHZFc1amRHbHZiaWRjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnYVhOR2RXNWpJRDBnS0c5aWFpa2dQVDRnZG1GeVZIbHdaU2h2WW1vcElEMDlQU0FuUm5WdVkzUnBiMjRuTzF4dVhHNHZLbHh1SUNBZ0lFbHpJSFYwYVd4eklIWmhjaUJoSUc1MWJXSmxjajljYmlBZ0lDQmNiaUFnSUNCQWNHRnlZVzA2SUZaaGNtbGhZbXhsSUhSdklIUmxjM1JjYmlBZ0lDQkFjbVYwZFhKdUlGdGliMjlzWldGdVhUb2dVbVYwZFhKdWN5QjBjblZsSUdsbUlIUjVjR1Z2WmlBOVBUMGdKMjUxYldKbGNpZGNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdhWE5PZFcwZ1BTQW9iblZ0S1NBOVBpQjBlWEJsYjJZZ2JuVnRJRDA5UFNBbmJuVnRZbVZ5Snp0Y2JseHVMeXBjYmlBZ0lDQkpjeUIxZEdsc2N5QjJZWElnWVc0Z2IySnFaV04wUDF4dUlDQWdJRnh1SUNBZ0lFQndZWEpoYlRvZ1ZtRnlhV0ZpYkdVZ2RHOGdkR1Z6ZEZ4dUlDQWdJRUJ5WlhSMWNtNGdXMkp2YjJ4bFlXNWRPaUJTWlhSMWNtNXpJSFJ5ZFdVZ2FXWWdkSGx3Wlc5bUlEMDlQU0FuYjJKcVpXTjBKMXh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JwYzA5aWFpQTlJQ2h2WW1vcElEMCtJSFI1Y0dWdlppQnZZbW9nUFQwOUlDZHZZbXBsWTNRbk8xeHVYRzR2S2x4dUlDQWdJRWx6SUhWMGFXeHpJR0VnY21Wc1lYUnBkbVVnZG1Gc2RXVWdZWE56YVdkdWJXVnVkRDljYmlBZ0lDQmNiaUFnSUNCQWNHRnlZVzBnVzNOMGNtbHVaMTA2SUZaaGNtbGhZbXhsSUhSdklIUmxjM1JjYmlBZ0lDQkFjbVYwZFhKdUlGdGliMjlzWldGdVhUb2dTV1lnZFhScGJITWdiRzl2YTNNZ2JHbHJaU0JoSUhKbGJHRjBhWFpsSUhaaGJIVmxJR0Z6YzJsbmJtMWxiblJjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnYVhOU1pXeGhkR2wyWlZaaGJIVmxJRDBnS0haaGJIVmxLU0E5UGlBb2RtRnNkV1VnSmlZZ2RtRnNkV1V1YVc1a1pYaFBaaUFtSmlCMllXeDFaUzVwYm1SbGVFOW1LQ2M5SnlrZ1BpQXdLU0EvSUhSeWRXVWdPaUJtWVd4elpUdGNibHh1THlwY2JpQWdJQ0JKY3lCMWRHbHNjeUIyWVhJZ1lTQnpkSEpwYm1jZ1B5QmNiaUFnSUNCY2JpQWdJQ0JBY0dGeVlXMDZJRlpoY21saFlteGxJSFJ2SUhSbGMzUmNiaUFnSUNCQWNtVjBkWEp1SUZ0aWIyOXNaV0Z1WFRvZ1VtVjBkWEp1Y3lCMGNuVmxJR2xtSUhSNWNHVnZaaUJ6ZEhJZ1BUMDlJQ2R6ZEhKcGJtY25YRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJR2x6VTNSeWFXNW5JRDBnS0hOMGNpa2dQVDRnZEhsd1pXOW1JSE4wY2lBOVBUMGdKM04wY21sdVp5YzdYRzVjYmk4cVhHNGdJQ0FnVTNCc2FYUWdZU0IyWVd4MVpTQnBiblJ2SUdFZ2RtRnNkV1V2ZFc1cGRDQnZZbXBsWTNSY2JpQWdJQ0JjYmlBZ0lDQWdJQ0FnWENJeU1EQndlRndpSUMwK0lIc2dkbUZzZFdVNklESXdNQ3dnZFc1cGREb2dYQ0p3ZUZ3aUlIMWNiaUFnSUNBZ0lDQWdYRzRnSUNBZ1FIQmhjbUZ0SUZ0emRISnBibWRkT2lCV1lXeDFaU0IwYnlCemNHeHBkRnh1SUNBZ0lFQnlaWFIxY200Z1cyOWlhbVZqZEYwNklFOWlhbVZqZENCM2FYUm9JSFpoYkhWbElHRnVaQ0IxYm1sMElIQnliM0J6WEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUhOd2JHbDBWbUZzZFdWVmJtbDBJRDBnS0haaGJIVmxLU0E5UGlCN1hHNGdJQ0FnWTI5dWMzUWdjM0JzYVhSV1lXd2dQU0IyWVd4MVpTNXRZWFJqYUNndktDMC9YRnhrS2x4Y0xqOWNYR1FxS1NndUtpa3ZLVHRjYmx4dUlDQWdJSEpsZEhWeWJpQjdYRzRnSUNBZ0lDQWdJSFpoYkhWbE9pQndZWEp6WlVac2IyRjBLSE53YkdsMFZtRnNXekZkS1N4Y2JpQWdJQ0FnSUNBZ2RXNXBkRG9nSUhOd2JHbDBWbUZzV3pKZFhHNGdJQ0FnZlR0Y2JuMDdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQjBiMFJsWTJsdFlXd2dQU0FvYm5WdExDQndjbVZqYVhOcGIyNGdQU0F5S1NBOVBpQjdYRzRnSUNBZ2NISmxZMmx6YVc5dUlEMGdNVEFnS2lvZ2NISmxZMmx6YVc5dU8xeHVJQ0FnSUhKbGRIVnliaUJOWVhSb0xuSnZkVzVrS0c1MWJTQXFJSEJ5WldOcGMybHZiaWtnTHlCd2NtVmphWE5wYjI0N1hHNTlPMXh1WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi91aS11dGlscy9saWIvZW50cnkuanNcbiAqKiBtb2R1bGUgaWQgPSA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLnN0ZXBQcm9ncmVzcyA9IGV4cG9ydHMuc3BlZWRQZXJTZWNvbmQgPSBleHBvcnRzLnNwZWVkUGVyRnJhbWUgPSBleHBvcnRzLnNtb290aCA9IGV4cG9ydHMucmVzdHJpY3QgPSBleHBvcnRzLnJlbGF0aXZlVmFsdWUgPSBleHBvcnRzLnJhbmRvbSA9IGV4cG9ydHMucmFkaWFuc1RvRGVncmVlcyA9IGV4cG9ydHMucG9pbnRGcm9tQW5nbGVBbmREaXN0YW5jZSA9IGV4cG9ydHMub2Zmc2V0ID0gZXhwb3J0cy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSA9IGV4cG9ydHMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MgPSBleHBvcnRzLmh5cG90ZW51c2UgPSBleHBvcnRzLmRpc3RhbmNlID0gZXhwb3J0cy5kaWxhdGUgPSBleHBvcnRzLmRlZ3JlZXNUb1JhZGlhbnMgPSBleHBvcnRzLmFuZ2xlID0gdW5kZWZpbmVkO1xuXG52YXIgX3VpVXRpbHMgPSByZXF1aXJlKCd1aS11dGlscycpO1xuXG52YXIgWkVST19QT0lOVCA9IHtcbiAgICB4OiAwLFxuICAgIHk6IDAsXG4gICAgejogMFxufTtcblxudmFyIGRpc3RhbmNlMUQgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBNYXRoLmFicyhhIC0gYik7XG59O1xuXG4vKlxuICAgIEFuZ2xlIGJldHdlZW4gcG9pbnRzXG4gICAgXG4gICAgVHJhbnNsYXRlcyB0aGUgaHlwb3RoZXRpY2FsIGxpbmUgc28gdGhhdCB0aGUgJ2Zyb20nIGNvb3JkaW5hdGVzXG4gICAgYXJlIGF0IDAsMCwgdGhlbiByZXR1cm4gdGhlIGFuZ2xlIHVzaW5nIC5hbmdsZUZyb21DZW50ZXIoKVxuICAgIFxuICAgIEBwYXJhbSBbb2JqZWN0XTogWCBhbmQgWSBjb29yZGluYXRlcyBvZiBmcm9tIHBvaW50XG4gICAgQHBhcmFtIFtvYmplY3RdOiBYIGFuZCBZIGNvcmRpbmF0ZXMgb2YgdG8gcG9pbnRcbiAgICBAcmV0dXJuIFtyYWRpYW5dOiBBbmdsZSBiZXR3ZWVuIHRoZSB0d28gcG9pbnRzIGluIHJhZGlhbnNcbiovXG52YXIgYW5nbGUgPSBleHBvcnRzLmFuZ2xlID0gZnVuY3Rpb24gKGEpIHtcbiAgICB2YXIgYiA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IFpFUk9fUE9JTlQgOiBhcmd1bWVudHNbMV07XG4gICAgcmV0dXJuIHJhZGlhbnNUb0RlZ3JlZXMoTWF0aC5hdGFuMihhLnggLSBiLngsIGEueSAtIGIueSkpO1xufTtcblxuLypcbiAgICBDb252ZXJ0IGRlZ3JlZXMgdG8gcmFkaWFuc1xuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgaW4gZGVncmVlc1xuICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGluIHJhZGlhbnNcbiovXG52YXIgZGVncmVlc1RvUmFkaWFucyA9IGV4cG9ydHMuZGVncmVlc1RvUmFkaWFucyA9IGZ1bmN0aW9uIChkZWdyZWVzKSB7XG4gICAgcmV0dXJuIGRlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwO1xufTtcblxuLypcbiAgICBEaWxhdGVcbiAgICBcbiAgICBDaGFuZ2UgdGhlIHByb2dyZXNzaW9uIGJldHdlZW4gYSBhbmQgYiBhY2NvcmRpbmcgdG8gZGlsYXRpb24uXG4gICAgXG4gICAgU28gZGlsYXRpb24gPSAwLjUgd291bGQgY2hhbmdlXG4gICAgXG4gICAgYSAtLS0tLS0tLS0gYlxuICAgIFxuICAgIHRvXG4gICAgXG4gICAgYSAtLS0tIGJcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFByZXZpb3VzIHZhbHVlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBDdXJyZW50IHZhbHVlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBEaWxhdGUgcHJvZ3Jlc3MgYnkgeFxuICAgIEByZXR1cm4gW251bWJlcl06IFByZXZpb3VzIHZhbHVlIHBsdXMgdGhlIGRpbGF0ZWQgZGlmZmVyZW5jZVxuKi9cbnZhciBkaWxhdGUgPSBleHBvcnRzLmRpbGF0ZSA9IGZ1bmN0aW9uIChhLCBiLCBkaWxhdGlvbikge1xuICAgIHJldHVybiBhICsgKGIgLSBhKSAqIGRpbGF0aW9uO1xufTtcblxuLypcbiAgICBEaXN0YW5jZVxuICAgIFxuICAgIFJldHVybnMgdGhlIGRpc3RhbmNlIGJldHdlZW4gdHdvIG4gZGltZW5zaW9uYWwgcG9pbnRzLlxuICAgIFxuICAgIEBwYXJhbSBbb2JqZWN0L251bWJlcl06IHggYW5kIHkgb3IganVzdCB4IG9mIHBvaW50IEFcbiAgICBAcGFyYW0gW29iamVjdC9udW1iZXJdOiAob3B0aW9uYWwpOiB4IGFuZCB5IG9yIGp1c3QgeCBvZiBwb2ludCBCXG4gICAgQHJldHVybiBbbnVtYmVyXTogVGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIHR3byBwb2ludHNcbiovXG52YXIgZGlzdGFuY2UgPSBleHBvcnRzLmRpc3RhbmNlID0gZnVuY3Rpb24gKGEpIHtcbiAgICB2YXIgYiA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IFpFUk9fUE9JTlQgOiBhcmd1bWVudHNbMV07XG5cbiAgICAvLyAxRCBkaW1lbnNpb25zXG4gICAgaWYgKCgwLCBfdWlVdGlscy5pc051bSkoYSkpIHtcbiAgICAgICAgcmV0dXJuIGRpc3RhbmNlMUQoYSwgYik7XG5cbiAgICAgICAgLy8gTXVsdGktZGltZW5zaW9uYWxcbiAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHhEZWx0YSA9IGRpc3RhbmNlMUQoYS54LCBiLngpO1xuICAgICAgICAgICAgdmFyIHlEZWx0YSA9IGRpc3RhbmNlMUQoYS55LCBiLnkpO1xuICAgICAgICAgICAgdmFyIHpEZWx0YSA9ICgwLCBfdWlVdGlscy5pc051bSkoYS56KSA/IGRpc3RhbmNlMUQoYS56LCBiLnopIDogMDtcblxuICAgICAgICAgICAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyh4RGVsdGEsIDIpICsgTWF0aC5wb3coeURlbHRhLCAyKSArIE1hdGgucG93KHpEZWx0YSwgMikpO1xuICAgICAgICB9XG59O1xuXG4vKlxuICAgIEh5cG90ZW51c2VcbiAgICBcbiAgICBSZXR1cm5zIHRoZSBoeXBvdGVudXNlLCBzaWRlIEMsIGdpdmVuIHRoZSBsZW5ndGhzIG9mIHNpZGVzIEEgYW5kIEIuXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBMZW5ndGggb2YgQVxuICAgIEBwYXJhbSBbbnVtYmVyXTogTGVuZ3RoIG9mIEJcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBMZW5ndGggb2YgQ1xuKi9cbnZhciBoeXBvdGVudXNlID0gZXhwb3J0cy5oeXBvdGVudXNlID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KGEgKiBhICsgYiAqIGIpO1xufTtcblxuLypcbiAgICBWYWx1ZSBpbiByYW5nZSBmcm9tIHByb2dyZXNzXG4gICAgXG4gICAgR2l2ZW4gYSBsb3dlciBsaW1pdCBhbmQgYW4gdXBwZXIgbGltaXQsIHdlIHJldHVybiB0aGUgdmFsdWUgd2l0aGluXG4gICAgdGhhdCByYW5nZSBhcyBleHByZXNzZWQgYnkgcHJvZ3Jlc3MgKGEgbnVtYmVyIGZyb20gMC0xKVxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVGhlIHByb2dyZXNzIGJldHdlZW4gbG93ZXIgYW5kIHVwcGVyIGxpbWl0cyBleHByZXNzZWQgMC0xXG4gICAgQHBhcmFtIFtudW1iZXJdOiBMb3dlciBsaW1pdCBvZiByYW5nZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogVXBwZXIgbGltaXQgb2YgcmFuZ2VcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBhcyBjYWxjdWxhdGVkIGZyb20gcHJvZ3Jlc3Mgd2l0aGluIHJhbmdlIChub3QgbGltaXRlZCB3aXRoaW4gcmFuZ2UpXG4qL1xudmFyIGdldFZhbHVlRnJvbVByb2dyZXNzID0gZXhwb3J0cy5nZXRWYWx1ZUZyb21Qcm9ncmVzcyA9IGZ1bmN0aW9uIChwcm9ncmVzcywgZnJvbSwgdG8pIHtcbiAgICByZXR1cm4gLXByb2dyZXNzICogZnJvbSArIHByb2dyZXNzICogdG8gKyBmcm9tO1xufTtcblxuLypcbiAgICBQcm9ncmVzcyB3aXRoaW4gZ2l2ZW4gcmFuZ2VcbiAgICBcbiAgICBHaXZlbiBhIGxvd2VyIGxpbWl0IGFuZCBhbiB1cHBlciBsaW1pdCwgd2UgcmV0dXJuIHRoZSBwcm9ncmVzc1xuICAgIChleHByZXNzZWQgYXMgYSBudW1iZXIgMC0xKSByZXByZXNlbnRlZCBieSB0aGUgZ2l2ZW4gdmFsdWUsIGFuZFxuICAgIGxpbWl0IHRoYXQgcHJvZ3Jlc3MgdG8gd2l0aGluIDAtMS5cbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIHRvIGZpbmQgcHJvZ3Jlc3Mgd2l0aGluIGdpdmVuIHJhbmdlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBMb3dlciBsaW1pdCBcbiAgICBAcGFyYW0gW251bWJlcl06IFVwcGVyIGxpbWl0XG4gICAgQHJldHVybiBbbnVtYmVyXTogUHJvZ3Jlc3Mgb2YgdmFsdWUgd2l0aGluIHJhbmdlIGFzIGV4cHJlc3NlZCAwLTFcbiovXG52YXIgZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUgPSBleHBvcnRzLmdldFByb2dyZXNzRnJvbVZhbHVlID0gZnVuY3Rpb24gKHZhbHVlLCBmcm9tLCB0bykge1xuICAgIHJldHVybiAodmFsdWUgLSBmcm9tKSAvICh0byAtIGZyb20pO1xufTtcblxuLypcbiAgICBPZmZzZXQgYmV0d2VlbiB0d28gb2JqZWN0cyBvZiBudW1iZXJzXG5cbiAgICBJZiBwcm9wZXJ0eSBpcyBmb3VuZCBpbiBiIG5vdCBwcmVzZW50IGluIGEsIGl0IHdpbGwgcmV0dXJuIGAwYCBmb3IgdGhhdCBwcm9wLlxuICAgIFxuICAgIEBwYXJhbSBbUG9pbnRdOiBGaXJzdCBvYmplY3RcbiAgICBAcGFyYW0gW1BvaW50XTogU2Vjb25kIG9iamVjdFxuICAgIEByZXR1cm4gW09mZnNldF06IERpc3RhbmNlIG1ldHJpY3MgYmV0d2VlbiB0d28gcG9pbnRzXG4qL1xudmFyIG9mZnNldCA9IGV4cG9ydHMub2Zmc2V0ID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICB2YXIgb2Zmc2V0ID0ge307XG5cbiAgICAoMCwgX3VpVXRpbHMuZWFjaCkoYiwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgb2Zmc2V0W2tleV0gPSAoMCwgX3VpVXRpbHMuaGFzUHJvcGVydHkpKGEsIGtleSkgPyB2YWx1ZSAtIGFba2V5XSA6IDA7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gb2Zmc2V0O1xufTtcblxuLypcbiAgICBQb2ludCBmcm9tIGFuZ2xlIGFuZCBkaXN0YW5jZVxuICAgIFxuICAgIEBwYXJhbSBbb2JqZWN0XTogMkQgcG9pbnQgb2Ygb3JpZ2luXG4gICAgQHBhcmFtIFtudW1iZXJdOiBBbmdsZSBmcm9tIG9yaWdpblxuICAgIEBwYXJhbSBbbnVtYmVyXTogRGlzdGFuY2UgZnJvbSBvcmlnaW5cbiAgICBAcmV0dXJuIFtvYmplY3RdOiBDYWxjdWxhdGVkIDJEIHBvaW50XG4qL1xudmFyIHBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2UgPSBleHBvcnRzLnBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2UgPSBmdW5jdGlvbiAob3JpZ2luLCBhbmdsZSwgZGlzdGFuY2UpIHtcbiAgICBhbmdsZSA9IGRlZ3JlZXNUb1JhZGlhbnMoYW5nbGUpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgeDogZGlzdGFuY2UgKiBNYXRoLmNvcyhhbmdsZSkgKyBvcmlnaW4ueCxcbiAgICAgICAgeTogZGlzdGFuY2UgKiBNYXRoLnNpbihhbmdsZSkgKyBvcmlnaW4ueVxuICAgIH07XG59O1xuXG4vKlxuICAgIENvbnZlcnQgcmFkaWFucyB0byBkZWdyZWVzXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBpbiByYWRpYW5zXG4gICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgaW4gZGVncmVlc1xuKi9cbnZhciByYWRpYW5zVG9EZWdyZWVzID0gZXhwb3J0cy5yYWRpYW5zVG9EZWdyZWVzID0gZnVuY3Rpb24gKHJhZGlhbnMpIHtcbiAgICByZXR1cm4gcmFkaWFucyAqIDE4MCAvIE1hdGguUEk7XG59O1xuXG4vKlxuICAgIFJldHVybiByYW5kb20gbnVtYmVyIGJldHdlZW4gcmFuZ2VcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogT3V0cHV0IG1pbmltdW1cbiAgICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogT3V0cHV0IG1heGltdW1cbiAgICBAcmV0dXJuIFtudW1iZXJdOiBSYW5kb20gbnVtYmVyIHdpdGhpbiByYW5nZSwgb3IgMCBhbmQgMSBpZiBub25lIHByb3ZpZGVkXG4qL1xudmFyIHJhbmRvbSA9IGV4cG9ydHMucmFuZG9tID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBtaW4gPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyAwIDogYXJndW1lbnRzWzBdO1xuICAgIHZhciBtYXggPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyAxIDogYXJndW1lbnRzWzFdO1xuICAgIHJldHVybiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XG59O1xuXG4vKlxuICAgIENhbGN1bGF0ZSByZWxhdGl2ZSB2YWx1ZVxuICAgIFxuICAgIFRha2VzIHRoZSBvcGVyYXRvciBhbmQgdmFsdWUgZnJvbSBhIHN0cmluZywgaWUgXCIrPTVcIiwgYW5kIGFwcGxpZXNcbiAgICB0byB0aGUgY3VycmVudCB2YWx1ZSB0byByZXNvbHZlIGEgbmV3IHRhcmdldC5cbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IEN1cnJlbnQgdmFsdWVcbiAgICBAcGFyYW0gW3N0cmluZ106IFJlbGF0aXZlIHZhbHVlXG4gICAgQHJldHVybiBbbnVtYmVyXTogTmV3IHZhbHVlXG4qL1xudmFyIHJlbGF0aXZlVmFsdWUgPSBleHBvcnRzLnJlbGF0aXZlVmFsdWUgPSBmdW5jdGlvbiAoY3VycmVudCwgcmVsYXRpdmUpIHtcbiAgICB2YXIgbmV3VmFsdWUgPSBjdXJyZW50O1xuICAgIHZhciBlcXVhdGlvbiA9IHJlbGF0aXZlLnNwbGl0KCc9Jyk7XG4gICAgdmFyIG9wZXJhdG9yID0gZXF1YXRpb25bMF07XG5cbiAgICB2YXIgX3NwbGl0VmFsdWVVbml0ID0gKDAsIF91aVV0aWxzLnNwbGl0VmFsdWVVbml0KShlcXVhdGlvblsxXSk7XG5cbiAgICB2YXIgdW5pdCA9IF9zcGxpdFZhbHVlVW5pdC51bml0O1xuICAgIHZhciB2YWx1ZSA9IF9zcGxpdFZhbHVlVW5pdC52YWx1ZTtcblxuICAgIHZhbHVlID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG5cbiAgICBzd2l0Y2ggKG9wZXJhdG9yKSB7XG4gICAgICAgIGNhc2UgJysnOlxuICAgICAgICAgICAgbmV3VmFsdWUgKz0gdmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnLSc6XG4gICAgICAgICAgICBuZXdWYWx1ZSAtPSB2YWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICcqJzpcbiAgICAgICAgICAgIG5ld1ZhbHVlICo9IHZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJy8nOlxuICAgICAgICAgICAgbmV3VmFsdWUgLz0gdmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAodW5pdCkge1xuICAgICAgICBuZXdWYWx1ZSArPSB1bml0O1xuICAgIH1cblxuICAgIHJldHVybiBuZXdWYWx1ZTtcbn07XG5cbi8qXG4gICAgUmVzdHJpY3QgdmFsdWUgdG8gcmFuZ2VcbiAgICBcbiAgICBSZXR1cm4gdmFsdWUgd2l0aGluIHRoZSByYW5nZSBvZiBsb3dlckxpbWl0IGFuZCB1cHBlckxpbWl0XG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSB0byBrZWVwIHdpdGhpbiByYW5nZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogTG93ZXIgbGltaXQgb2YgcmFuZ2VcbiAgICBAcGFyYW0gW251bWJlcl06IFVwcGVyIGxpbWl0IG9mIHJhbmdlXG4gICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgYXMgbGltaXRlZCB3aXRoaW4gZ2l2ZW4gcmFuZ2VcbiovXG52YXIgcmVzdHJpY3QgPSBleHBvcnRzLnJlc3RyaWN0ID0gZnVuY3Rpb24gKHZhbHVlLCBtaW4sIG1heCkge1xuICAgIHJldHVybiBNYXRoLm1heChNYXRoLm1pbih2YWx1ZSwgbWF4KSwgbWluKTtcbn07XG5cbi8qXG4gICAgRnJhbWVyYXRlLWluZGVwZW5kZW50IHNtb290aGluZ1xuXG4gICAgQHBhcmFtIFtudW1iZXJdOiBOZXcgdmFsdWVcbiAgICBAcGFyYW0gW251bWJlcl06IE9sZCB2YWx1ZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb25cbiAgICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogU21vb3RoaW5nICgwIGlzIG5vbmUpXG4qL1xudmFyIHNtb290aCA9IGV4cG9ydHMuc21vb3RoID0gZnVuY3Rpb24gKG5ld1ZhbHVlLCBvbGRWYWx1ZSwgZHVyYXRpb24pIHtcbiAgICB2YXIgc21vb3RoaW5nID0gYXJndW1lbnRzLmxlbmd0aCA8PSAzIHx8IGFyZ3VtZW50c1szXSA9PT0gdW5kZWZpbmVkID8gMCA6IGFyZ3VtZW50c1szXTtcbiAgICByZXR1cm4gKDAsIF91aVV0aWxzLnRvRGVjaW1hbCkob2xkVmFsdWUgKyBkdXJhdGlvbiAqIChuZXdWYWx1ZSAtIG9sZFZhbHVlKSAvIE1hdGgubWF4KHNtb290aGluZywgZHVyYXRpb24pKTtcbn07XG5cbi8qXG4gICAgQ29udmVydCB4IHBlciBzZWNvbmQgdG8gcGVyIGZyYW1lIHZlbG9jaXR5IGJhc2VkIG9uIGZwc1xuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVW5pdCBwZXIgc2Vjb25kXG4gICAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvbiBpbiBtc1xuKi9cbnZhciBzcGVlZFBlckZyYW1lID0gZXhwb3J0cy5zcGVlZFBlckZyYW1lID0gZnVuY3Rpb24gKHhwcywgZnJhbWVEdXJhdGlvbikge1xuICAgIHJldHVybiAoMCwgX3VpVXRpbHMuaXNOdW0pKHhwcykgPyB4cHMgLyAoMTAwMCAvIGZyYW1lRHVyYXRpb24pIDogMDtcbn07XG5cbi8qXG4gICAgQ29udmVydCB2ZWxvY2l0eSBpbnRvIHZlbGljaXR5IHBlciBzZWNvbmRcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFVuaXQgcGVyIGZyYW1lXG4gICAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvbiBpbiBtc1xuKi9cbnZhciBzcGVlZFBlclNlY29uZCA9IGV4cG9ydHMuc3BlZWRQZXJTZWNvbmQgPSBmdW5jdGlvbiAodmVsb2NpdHksIGZyYW1lRHVyYXRpb24pIHtcbiAgICByZXR1cm4gdmVsb2NpdHkgKiAoMTAwMCAvIGZyYW1lRHVyYXRpb24pO1xufTtcblxuLypcbiAgICBDcmVhdGUgc3RlcHBlZCB2ZXJzaW9uIG9mIDAtMSBwcm9ncmVzc1xuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICAgIEBwYXJhbSBbaW50XTogTnVtYmVyIG9mIHN0ZXBzXG4gICAgQHJldHVybiBbbnVtYmVyXTogU3RlcHBlZCB2YWx1ZVxuKi9cbnZhciBzdGVwUHJvZ3Jlc3MgPSBleHBvcnRzLnN0ZXBQcm9ncmVzcyA9IGZ1bmN0aW9uIChwcm9ncmVzcywgc3RlcHMpIHtcbiAgICB2YXIgc2VnbWVudCA9IDEgLyAoc3RlcHMgLSAxKTtcbiAgICB2YXIgdGFyZ2V0ID0gMSAtIDEgLyBzdGVwcztcbiAgICB2YXIgcHJvZ3Jlc3NPZlRhcmdldCA9IE1hdGgubWluKHByb2dyZXNzIC8gdGFyZ2V0LCAxKTtcblxuICAgIHJldHVybiBNYXRoLmZsb29yKHByb2dyZXNzT2ZUYXJnZXQgLyBzZWdtZW50KSAqIHNlZ21lbnQ7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMM055WXk5bGJuUnllUzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPMEZCVVVFc1NVRkJUU3hWUVVGVkxFZEJRVWM3UVVGRFppeExRVUZETEVWQlFVVXNRMEZCUXp0QlFVTktMRXRCUVVNc1JVRkJSU3hEUVVGRE8wRkJRMG9zUzBGQlF5eEZRVUZGTEVOQlFVTTdRMEZEVUN4RFFVRkRPenRCUVVWR0xFbEJRVTBzVlVGQlZTeEhRVUZITEZWQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNN1YwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1EwRkJRVHM3T3pzN096czdPenM3TzBGQlFVTXNRVUZaZEVNc1NVRkJUU3hMUVVGTExGZEJRVXdzUzBGQlN5eEhRVUZITEZWQlFVTXNRMEZCUXp0UlFVRkZMRU5CUVVNc2VVUkJRVWNzVlVGQlZUdFhRVUZMTEdkQ1FVRm5RaXhEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBOQlFVRTdPenM3T3pzN08wRkJRVU1zUVVGUmVFWXNTVUZCVFN4blFrRkJaMElzVjBGQmFFSXNaMEpCUVdkQ0xFZEJRVWNzVlVGQlF5eFBRVUZQTzFkQlFVc3NUMEZCVHl4SFFVRkhMRWxCUVVrc1EwRkJReXhGUVVGRkxFZEJRVWNzUjBGQlJ6dERRVUZCT3pzN096czdPenM3T3pzN096czdPenM3T3p0QlFVRkRMRUZCYjBJNVJDeEpRVUZOTEUxQlFVMHNWMEZCVGl4TlFVRk5MRWRCUVVjc1ZVRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEZGQlFWRTdWMEZCU3l4RFFVRkRMRWRCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZCTEVkQlFVa3NVVUZCVVN4QlFVRkRPME5CUVVFN096czdPenM3T3pzN08wRkJRVU1zUVVGWE5VUXNTVUZCVFN4UlFVRlJMRmRCUVZJc1VVRkJVU3hIUVVGSExGVkJRVU1zUTBGQlF5eEZRVUZ4UWp0UlFVRnVRaXhEUVVGRExIbEVRVUZITEZWQlFWVTdPenRCUVVWMFF5eFJRVUZKTEdGQmFFVktMRXRCUVVzc1JVRm5SVXNzUTBGQlF5eERRVUZETEVWQlFVVTdRVUZEVml4bFFVRlBMRlZCUVZVc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZET3pzN1FVRkJReXhMUVVjelFpeE5RVUZOTzBGQlEwZ3NaMEpCUVUwc1RVRkJUU3hIUVVGSExGVkJRVlVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dEJRVU53UXl4blFrRkJUU3hOUVVGTkxFZEJRVWNzVlVGQlZTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBGQlEzQkRMR2RDUVVGTkxFMUJRVTBzUjBGQlJ5eEJRVUZETEdGQmRrVndRaXhMUVVGTExFVkJkVVZ4UWl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWtzVlVGQlZTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXpzN1FVRkZka1FzYlVKQlFVOHNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhUUVVGRExFMUJRVTBzUlVGQlNTeERRVUZETEdGQlFVc3NUVUZCVFN4RlFVRkpMRU5CUVVNc1EwRkJReXhaUVVGSkxFMUJRVTBzUlVGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMU5CUTI1Rk8wTkJRMG83T3pzN096czdPenM3TzBGQlFVTXNRVUZYU3l4SlFVRk5MRlZCUVZVc1YwRkJWaXhWUVVGVkxFZEJRVWNzVlVGQlF5eERRVUZETEVWQlFVVXNRMEZCUXp0WFFVRkxMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUVVGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFRkJRVU1zUTBGQlF6dERRVUZCT3pzN096czdPenM3T3pzN08wRkJRVU1zUVVGaE1VUXNTVUZCVFN4dlFrRkJiMElzVjBGQmNFSXNiMEpCUVc5Q0xFZEJRVWNzVlVGQlF5eFJRVUZSTEVWQlFVVXNTVUZCU1N4RlFVRkZMRVZCUVVVN1YwRkJTeXhCUVVGRExFTkJRVVVzVVVGQlVTeEhRVUZITEVsQlFVa3NSMEZCU3l4UlFVRlJMRWRCUVVjc1JVRkJSU3hCUVVGRExFZEJRVWNzU1VGQlNUdERRVUZCT3pzN096czdPenM3T3pzN096dEJRVUZETEVGQlkyeEhMRWxCUVUwc2IwSkJRVzlDTEZkQlFYQkNMRzlDUVVGdlFpeEhRVUZITEZWQlFVTXNTMEZCU3l4RlFVRkZMRWxCUVVrc1JVRkJSU3hGUVVGRk8xZEJRVXNzUTBGQlF5eExRVUZMTEVkQlFVY3NTVUZCU1N4RFFVRkJMRWxCUVVzc1JVRkJSU3hIUVVGSExFbEJRVWtzUTBGQlFTeEJRVUZETzBOQlFVRTdPenM3T3pzN096czdPMEZCUVVNc1FVRlhMMFVzU1VGQlRTeE5RVUZOTEZkQlFVNHNUVUZCVFN4SFFVRkhMRlZCUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlN6dEJRVU0xUWl4UlFVRk5MRTFCUVUwc1IwRkJSeXhGUVVGRkxFTkJRVU03TzBGQlJXeENMR2xDUVdwSlFTeEpRVUZKTEVWQmFVbERMRU5CUVVNc1JVRkJSU3hWUVVGRExFdEJRVXNzUlVGQlJTeEhRVUZITEVWQlFVczdRVUZEY0VJc1kwRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEdGQmFrbHNRaXhYUVVGWExFVkJhVWx0UWl4RFFVRkRMRVZCUVVVc1IwRkJSeXhEUVVGRExFZEJRVWNzUzBGQlN5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03UzBGRE1VUXNRMEZCUXl4RFFVRkRPenRCUVVWSUxGZEJRVThzVFVGQlRTeERRVUZETzBOQlEycENPenM3T3pzN096czdPMEZCUVVNc1FVRlZTeXhKUVVGTkxIbENRVUY1UWl4WFFVRjZRaXg1UWtGQmVVSXNSMEZCUnl4VlFVRkRMRTFCUVUwc1JVRkJSU3hMUVVGTExFVkJRVVVzVVVGQlVTeEZRVUZMTzBGQlEyeEZMRk5CUVVzc1IwRkJSeXhuUWtGQlowSXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenM3UVVGRmFFTXNWMEZCVHp0QlFVTklMRk5CUVVNc1JVRkJSU3hSUVVGUkxFZEJRVWNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhOUVVGTkxFTkJRVU1zUTBGQlF6dEJRVU40UXl4VFFVRkRMRVZCUVVVc1VVRkJVU3hIUVVGSExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1RVRkJUU3hEUVVGRExFTkJRVU03UzBGRE0wTXNRMEZCUXp0RFFVTk1PenM3T3pzN096dEJRVUZETEVGQlVVc3NTVUZCVFN4blFrRkJaMElzVjBGQmFFSXNaMEpCUVdkQ0xFZEJRVWNzVlVGQlF5eFBRVUZQTzFkQlFVc3NUMEZCVHl4SFFVRkhMRWRCUVVjc1IwRkJSeXhKUVVGSkxFTkJRVU1zUlVGQlJUdERRVUZCT3pzN096czdPenM3UVVGQlF5eEJRVk01UkN4SlFVRk5MRTFCUVUwc1YwRkJUaXhOUVVGTkxFZEJRVWM3VVVGQlF5eEhRVUZITEhsRVFVRkhMRU5CUVVNN1VVRkJSU3hIUVVGSExIbEVRVUZITEVOQlFVTTdWMEZCU3l4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRkxFbEJRVWtzUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUVN4QlFVRkRMRWRCUVVjc1IwRkJSenREUVVGQk96czdPenM3T3pzN096czdRVUZCUXl4QlFWbDJSU3hKUVVGTkxHRkJRV0VzVjBGQllpeGhRVUZoTEVkQlFVY3NWVUZCUXl4UFFVRlBMRVZCUVVVc1VVRkJVU3hGUVVGTE8wRkJRMmhFTEZGQlFVa3NVVUZCVVN4SFFVRkhMRTlCUVU4c1EwRkJRenRCUVVOMlFpeFJRVUZOTEZGQlFWRXNSMEZCUnl4UlFVRlJMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzBGQlEzSkRMRkZCUVUwc1VVRkJVU3hIUVVGSExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXpzN01FSkJRMUFzWVVGeVRIUkNMR05CUVdNc1JVRnhUSFZDTEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenM3VVVGQk0wTXNTVUZCU1N4dFFrRkJTaXhKUVVGSk8xRkJRVVVzUzBGQlN5eHRRa0ZCVEN4TFFVRkxPenRCUVVWcVFpeFRRVUZMTEVkQlFVY3NWVUZCVlN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE96dEJRVVV4UWl4WlFVRlJMRkZCUVZFN1FVRkRXaXhoUVVGTExFZEJRVWM3UVVGRFNpeHZRa0ZCVVN4SlFVRkpMRXRCUVVzc1EwRkJRenRCUVVOc1FpeHJRa0ZCVFR0QlFVRkJMRUZCUTFZc1lVRkJTeXhIUVVGSE8wRkJRMG9zYjBKQlFWRXNTVUZCU1N4TFFVRkxMRU5CUVVNN1FVRkRiRUlzYTBKQlFVMDdRVUZCUVN4QlFVTldMR0ZCUVVzc1IwRkJSenRCUVVOS0xHOUNRVUZSTEVsQlFVa3NTMEZCU3l4RFFVRkRPMEZCUTJ4Q0xHdENRVUZOTzBGQlFVRXNRVUZEVml4aFFVRkxMRWRCUVVjN1FVRkRTaXh2UWtGQlVTeEpRVUZKTEV0QlFVc3NRMEZCUXp0QlFVTnNRaXhyUWtGQlRUdEJRVUZCTEV0QlEySTdPMEZCUlVRc1VVRkJTU3hKUVVGSkxFVkJRVVU3UVVGRFRpeG5Ra0ZCVVN4SlFVRkpMRWxCUVVrc1EwRkJRenRMUVVOd1FqczdRVUZGUkN4WFFVRlBMRkZCUVZFc1EwRkJRenREUVVOdVFqczdPenM3T3pzN096czdPMEZCUVVNc1FVRlpTeXhKUVVGTkxGRkJRVkVzVjBGQlVpeFJRVUZSTEVkQlFVY3NWVUZCUXl4TFFVRkxMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWM3VjBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUzBGQlN5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RlFVRkZMRWRCUVVjc1EwRkJRenREUVVGQk96czdPenM3T3pzN08wRkJRVU1zUVVGVk1VVXNTVUZCVFN4TlFVRk5MRmRCUVU0c1RVRkJUU3hIUVVGSExGVkJRVU1zVVVGQlVTeEZRVUZGTEZGQlFWRXNSVUZCUlN4UlFVRlJPMUZCUVVVc1UwRkJVeXg1UkVGQlJ5eERRVUZETzFkQlFVc3NZVUZzVDI1RkxGTkJRVk1zUlVGclQyOUZMRkZCUVZFc1IwRkJTU3hSUVVGUkxFbEJRVWtzVVVGQlVTeEhRVUZITEZGQlFWRXNRMEZCUVN4QlFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eFRRVUZUTEVWQlFVVXNVVUZCVVN4RFFVRkRMRUZCUVVNc1EwRkJRenREUVVGQk96czdPenM3T3p0QlFVRkRMRUZCVVhwS0xFbEJRVTBzWVVGQllTeFhRVUZpTEdGQlFXRXNSMEZCUnl4VlFVRkRMRWRCUVVjc1JVRkJSU3hoUVVGaE8xZEJRVXNzUVVGQlF5eGhRVFZQYkVRc1MwRkJTeXhGUVRSUGJVUXNSMEZCUnl4RFFVRkRMRWRCUVVrc1IwRkJSeXhKUVVGSkxFbEJRVWtzUjBGQlJ5eGhRVUZoTEVOQlFVRXNRVUZCUXl4SFFVRkhMRU5CUVVNN1EwRkJRVHM3T3pzN096czdRVUZCUXl4QlFWRTVSaXhKUVVGTkxHTkJRV01zVjBGQlpDeGpRVUZqTEVkQlFVY3NWVUZCUXl4UlFVRlJMRVZCUVVVc1lVRkJZVHRYUVVGTExGRkJRVkVzU1VGQlNTeEpRVUZKTEVkQlFVY3NZVUZCWVN4RFFVRkJMRUZCUVVNN1EwRkJRVHM3T3pzN096czdPMEZCUVVNc1FVRlRkRVlzU1VGQlRTeFpRVUZaTEZkQlFWb3NXVUZCV1N4SFFVRkhMRlZCUVVNc1VVRkJVU3hGUVVGRkxFdEJRVXNzUlVGQlN6dEJRVU0zUXl4UlFVRk5MRTlCUVU4c1IwRkJSeXhEUVVGRExFbEJRVWtzUzBGQlN5eEhRVUZITEVOQlFVTXNRMEZCUVN4QlFVRkRMRU5CUVVNN1FVRkRhRU1zVVVGQlRTeE5RVUZOTEVkQlFVY3NRMEZCUXl4SFFVRkpMRU5CUVVNc1IwRkJSeXhMUVVGTExFRkJRVU1zUTBGQlF6dEJRVU12UWl4UlFVRk5MR2RDUVVGblFpeEhRVUZITEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1VVRkJVU3hIUVVGSExFMUJRVTBzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXpzN1FVRkZlRVFzVjBGQlR5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMR2RDUVVGblFpeEhRVUZITEU5QlFVOHNRMEZCUXl4SFFVRkhMRTlCUVU4c1EwRkJRenREUVVNelJDeERRVUZESWl3aVptbHNaU0k2SW1WdWRISjVMbXB6SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUh0Y2JpQWdJQ0JsWVdOb0xGeHVJQ0FnSUdoaGMxQnliM0JsY25SNUxGeHVJQ0FnSUdselRuVnRMRnh1SUNBZ0lITndiR2wwVm1Gc2RXVlZibWwwTEZ4dUlDQWdJSFJ2UkdWamFXMWhiRnh1ZlNCbWNtOXRJQ2QxYVMxMWRHbHNjeWM3WEc1Y2JtTnZibk4wSUZwRlVrOWZVRTlKVGxRZ1BTQjdYRzRnSUNBZ2VEb2dNQ3hjYmlBZ0lDQjVPaUF3TEZ4dUlDQWdJSG82SURCY2JuMDdYRzVjYm1OdmJuTjBJR1JwYzNSaGJtTmxNVVFnUFNBb1lTd2dZaWtnUFQ0Z1RXRjBhQzVoWW5Nb1lTQXRJR0lwTzF4dVhHNHZLbHh1SUNBZ0lFRnVaMnhsSUdKbGRIZGxaVzRnY0c5cGJuUnpYRzRnSUNBZ1hHNGdJQ0FnVkhKaGJuTnNZWFJsY3lCMGFHVWdhSGx3YjNSb1pYUnBZMkZzSUd4cGJtVWdjMjhnZEdoaGRDQjBhR1VnSjJaeWIyMG5JR052YjNKa2FXNWhkR1Z6WEc0Z0lDQWdZWEpsSUdGMElEQXNNQ3dnZEdobGJpQnlaWFIxY200Z2RHaGxJR0Z1WjJ4bElIVnphVzVuSUM1aGJtZHNaVVp5YjIxRFpXNTBaWElvS1Z4dUlDQWdJRnh1SUNBZ0lFQndZWEpoYlNCYmIySnFaV04wWFRvZ1dDQmhibVFnV1NCamIyOXlaR2x1WVhSbGN5QnZaaUJtY205dElIQnZhVzUwWEc0Z0lDQWdRSEJoY21GdElGdHZZbXBsWTNSZE9pQllJR0Z1WkNCWklHTnZjbVJwYm1GMFpYTWdiMllnZEc4Z2NHOXBiblJjYmlBZ0lDQkFjbVYwZFhKdUlGdHlZV1JwWVc1ZE9pQkJibWRzWlNCaVpYUjNaV1Z1SUhSb1pTQjBkMjhnY0c5cGJuUnpJR2x1SUhKaFpHbGhibk5jYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnWVc1bmJHVWdQU0FvWVN3Z1lpQTlJRnBGVWs5ZlVFOUpUbFFwSUQwK0lISmhaR2xoYm5OVWIwUmxaM0psWlhNb1RXRjBhQzVoZEdGdU1paGhMbmdnTFNCaUxuZ3NJR0V1ZVNBdElHSXVlU2twTzF4dVhHNHZLbHh1SUNBZ0lFTnZiblpsY25RZ1pHVm5jbVZsY3lCMGJ5QnlZV1JwWVc1elhHNGdJQ0FnWEc0Z0lDQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQldZV3gxWlNCcGJpQmtaV2R5WldWelhHNGdJQ0FnUUhKbGRIVnliaUJiYm5WdFltVnlYVG9nVm1Gc2RXVWdhVzRnY21Ga2FXRnVjMXh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JrWldkeVpXVnpWRzlTWVdScFlXNXpJRDBnS0dSbFozSmxaWE1wSUQwK0lHUmxaM0psWlhNZ0tpQk5ZWFJvTGxCSklDOGdNVGd3TzF4dVhHNHZLbHh1SUNBZ0lFUnBiR0YwWlZ4dUlDQWdJRnh1SUNBZ0lFTm9ZVzVuWlNCMGFHVWdjSEp2WjNKbGMzTnBiMjRnWW1WMGQyVmxiaUJoSUdGdVpDQmlJR0ZqWTI5eVpHbHVaeUIwYnlCa2FXeGhkR2x2Ymk1Y2JpQWdJQ0JjYmlBZ0lDQlRieUJrYVd4aGRHbHZiaUE5SURBdU5TQjNiM1ZzWkNCamFHRnVaMlZjYmlBZ0lDQmNiaUFnSUNCaElDMHRMUzB0TFMwdExTQmlYRzRnSUNBZ1hHNGdJQ0FnZEc5Y2JpQWdJQ0JjYmlBZ0lDQmhJQzB0TFMwZ1lseHVJQ0FnSUZ4dUlDQWdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dVSEpsZG1sdmRYTWdkbUZzZFdWY2JpQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRU4xY25KbGJuUWdkbUZzZFdWY2JpQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRVJwYkdGMFpTQndjbTluY21WemN5QmllU0I0WEc0Z0lDQWdRSEpsZEhWeWJpQmJiblZ0WW1WeVhUb2dVSEpsZG1sdmRYTWdkbUZzZFdVZ2NHeDFjeUIwYUdVZ1pHbHNZWFJsWkNCa2FXWm1aWEpsYm1ObFhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHUnBiR0YwWlNBOUlDaGhMQ0JpTENCa2FXeGhkR2x2YmlrZ1BUNGdZU0FySUNnb1lpQXRJR0VwSUNvZ1pHbHNZWFJwYjI0cE8xeHVYRzR2S2x4dUlDQWdJRVJwYzNSaGJtTmxYRzRnSUNBZ1hHNGdJQ0FnVW1WMGRYSnVjeUIwYUdVZ1pHbHpkR0Z1WTJVZ1ltVjBkMlZsYmlCMGQyOGdiaUJrYVcxbGJuTnBiMjVoYkNCd2IybHVkSE11WEc0Z0lDQWdYRzRnSUNBZ1FIQmhjbUZ0SUZ0dlltcGxZM1F2Ym5WdFltVnlYVG9nZUNCaGJtUWdlU0J2Y2lCcWRYTjBJSGdnYjJZZ2NHOXBiblFnUVZ4dUlDQWdJRUJ3WVhKaGJTQmJiMkpxWldOMEwyNTFiV0psY2wwNklDaHZjSFJwYjI1aGJDazZJSGdnWVc1a0lIa2diM0lnYW5WemRDQjRJRzltSUhCdmFXNTBJRUpjYmlBZ0lDQkFjbVYwZFhKdUlGdHVkVzFpWlhKZE9pQlVhR1VnWkdsemRHRnVZMlVnWW1WMGQyVmxiaUIwYUdVZ2RIZHZJSEJ2YVc1MGMxeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQmthWE4wWVc1alpTQTlJQ2hoTENCaUlEMGdXa1ZTVDE5UVQwbE9WQ2tnUFQ0Z2UxeHVJQ0FnSUM4dklERkVJR1JwYldWdWMybHZibk5jYmlBZ0lDQnBaaUFvYVhOT2RXMG9ZU2twSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUdScGMzUmhibU5sTVVRb1lTd2dZaWs3WEc1Y2JpQWdJQ0F2THlCTmRXeDBhUzFrYVcxbGJuTnBiMjVoYkZ4dUlDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJR052Ym5OMElIaEVaV3gwWVNBOUlHUnBjM1JoYm1ObE1VUW9ZUzU0TENCaUxuZ3BPMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQjVSR1ZzZEdFZ1BTQmthWE4wWVc1alpURkVLR0V1ZVN3Z1lpNTVLVHRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdla1JsYkhSaElEMGdLR2x6VG5WdEtHRXVlaWtwSUQ4Z1pHbHpkR0Z1WTJVeFJDaGhMbm9zSUdJdWVpa2dPaUF3TzF4dVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCTllYUm9Mbk54Y25Rb0tIaEVaV3gwWVNBcUtpQXlLU0FySUNoNVJHVnNkR0VnS2lvZ01pa2dLeUFvZWtSbGJIUmhJQ29xSURJcEtUdGNiaUFnSUNCOVhHNTlPMXh1SUZ4dUx5cGNiaUFnSUNCSWVYQnZkR1Z1ZFhObFhHNGdJQ0FnWEc0Z0lDQWdVbVYwZFhKdWN5QjBhR1VnYUhsd2IzUmxiblZ6WlN3Z2MybGtaU0JETENCbmFYWmxiaUIwYUdVZ2JHVnVaM1JvY3lCdlppQnphV1JsY3lCQklHRnVaQ0JDTGx4dUlDQWdJRnh1SUNBZ0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1RHVnVaM1JvSUc5bUlFRmNiaUFnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUV4bGJtZDBhQ0J2WmlCQ1hHNGdJQ0FnUUhKbGRIVnliaUJiYm5WdFltVnlYVG9nVEdWdVozUm9JRzltSUVOY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2FIbHdiM1JsYm5WelpTQTlJQ2hoTENCaUtTQTlQaUJOWVhSb0xuTnhjblFvS0dFZ0tpQmhLU0FySUNoaUlDb2dZaWtwTzF4dVhHNHZLbHh1SUNBZ0lGWmhiSFZsSUdsdUlISmhibWRsSUdaeWIyMGdjSEp2WjNKbGMzTmNiaUFnSUNCY2JpQWdJQ0JIYVhabGJpQmhJR3h2ZDJWeUlHeHBiV2wwSUdGdVpDQmhiaUIxY0hCbGNpQnNhVzFwZEN3Z2QyVWdjbVYwZFhKdUlIUm9aU0IyWVd4MVpTQjNhWFJvYVc1Y2JpQWdJQ0IwYUdGMElISmhibWRsSUdGeklHVjRjSEpsYzNObFpDQmllU0J3Y205bmNtVnpjeUFvWVNCdWRXMWlaWElnWm5KdmJTQXdMVEVwWEc0Z0lDQWdYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCVWFHVWdjSEp2WjNKbGMzTWdZbVYwZDJWbGJpQnNiM2RsY2lCaGJtUWdkWEJ3WlhJZ2JHbHRhWFJ6SUdWNGNISmxjM05sWkNBd0xURmNiaUFnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUV4dmQyVnlJR3hwYldsMElHOW1JSEpoYm1kbFhHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJWY0hCbGNpQnNhVzFwZENCdlppQnlZVzVuWlZ4dUlDQWdJRUJ5WlhSMWNtNGdXMjUxYldKbGNsMDZJRlpoYkhWbElHRnpJR05oYkdOMWJHRjBaV1FnWm5KdmJTQndjbTluY21WemN5QjNhWFJvYVc0Z2NtRnVaMlVnS0c1dmRDQnNhVzFwZEdWa0lIZHBkR2hwYmlCeVlXNW5aU2xjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnWjJWMFZtRnNkV1ZHY205dFVISnZaM0psYzNNZ1BTQW9jSEp2WjNKbGMzTXNJR1p5YjIwc0lIUnZLU0E5UGlBb0xTQndjbTluY21WemN5QXFJR1p5YjIwcElDc2dLSEJ5YjJkeVpYTnpJQ29nZEc4cElDc2dabkp2YlR0Y2JseHVMeXBjYmlBZ0lDQlFjbTluY21WemN5QjNhWFJvYVc0Z1oybDJaVzRnY21GdVoyVmNiaUFnSUNCY2JpQWdJQ0JIYVhabGJpQmhJR3h2ZDJWeUlHeHBiV2wwSUdGdVpDQmhiaUIxY0hCbGNpQnNhVzFwZEN3Z2QyVWdjbVYwZFhKdUlIUm9aU0J3Y205bmNtVnpjMXh1SUNBZ0lDaGxlSEJ5WlhOelpXUWdZWE1nWVNCdWRXMWlaWElnTUMweEtTQnlaWEJ5WlhObGJuUmxaQ0JpZVNCMGFHVWdaMmwyWlc0Z2RtRnNkV1VzSUdGdVpGeHVJQ0FnSUd4cGJXbDBJSFJvWVhRZ2NISnZaM0psYzNNZ2RHOGdkMmwwYUdsdUlEQXRNUzVjYmlBZ0lDQmNiaUFnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUZaaGJIVmxJSFJ2SUdacGJtUWdjSEp2WjNKbGMzTWdkMmwwYUdsdUlHZHBkbVZ1SUhKaGJtZGxYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCTWIzZGxjaUJzYVcxcGRDQmNiaUFnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUZWd2NHVnlJR3hwYldsMFhHNGdJQ0FnUUhKbGRIVnliaUJiYm5WdFltVnlYVG9nVUhKdlozSmxjM01nYjJZZ2RtRnNkV1VnZDJsMGFHbHVJSEpoYm1kbElHRnpJR1Y0Y0hKbGMzTmxaQ0F3TFRGY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ1oyVjBVSEp2WjNKbGMzTkdjbTl0Vm1Gc2RXVWdQU0FvZG1Gc2RXVXNJR1p5YjIwc0lIUnZLU0E5UGlBb2RtRnNkV1VnTFNCbWNtOXRLU0F2SUNoMGJ5QXRJR1p5YjIwcE8xeHVYRzR2S2x4dUlDQWdJRTltWm5ObGRDQmlaWFIzWldWdUlIUjNieUJ2WW1wbFkzUnpJRzltSUc1MWJXSmxjbk5jYmx4dUlDQWdJRWxtSUhCeWIzQmxjblI1SUdseklHWnZkVzVrSUdsdUlHSWdibTkwSUhCeVpYTmxiblFnYVc0Z1lTd2dhWFFnZDJsc2JDQnlaWFIxY200Z1lEQmdJR1p2Y2lCMGFHRjBJSEJ5YjNBdVhHNGdJQ0FnWEc0Z0lDQWdRSEJoY21GdElGdFFiMmx1ZEYwNklFWnBjbk4wSUc5aWFtVmpkRnh1SUNBZ0lFQndZWEpoYlNCYlVHOXBiblJkT2lCVFpXTnZibVFnYjJKcVpXTjBYRzRnSUNBZ1FISmxkSFZ5YmlCYlQyWm1jMlYwWFRvZ1JHbHpkR0Z1WTJVZ2JXVjBjbWxqY3lCaVpYUjNaV1Z1SUhSM2J5QndiMmx1ZEhOY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2IyWm1jMlYwSUQwZ0tHRXNJR0lwSUQwK0lIdGNiaUFnSUNCamIyNXpkQ0J2Wm1aelpYUWdQU0I3ZlR0Y2JseHVJQ0FnSUdWaFkyZ29ZaXdnS0haaGJIVmxMQ0JyWlhrcElEMCtJSHRjYmlBZ0lDQWdJQ0FnYjJabWMyVjBXMnRsZVYwZ1BTQm9ZWE5RY205d1pYSjBlU2hoTENCclpYa3BJRDhnZG1Gc2RXVWdMU0JoVzJ0bGVWMGdPaUF3TzF4dUlDQWdJSDBwTzF4dVhHNGdJQ0FnY21WMGRYSnVJRzltWm5ObGREdGNibjA3WEc1Y2JpOHFYRzRnSUNBZ1VHOXBiblFnWm5KdmJTQmhibWRzWlNCaGJtUWdaR2x6ZEdGdVkyVmNiaUFnSUNCY2JpQWdJQ0JBY0dGeVlXMGdXMjlpYW1WamRGMDZJREpFSUhCdmFXNTBJRzltSUc5eWFXZHBibHh1SUNBZ0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1FXNW5iR1VnWm5KdmJTQnZjbWxuYVc1Y2JpQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRVJwYzNSaGJtTmxJR1p5YjIwZ2IzSnBaMmx1WEc0Z0lDQWdRSEpsZEhWeWJpQmJiMkpxWldOMFhUb2dRMkZzWTNWc1lYUmxaQ0F5UkNCd2IybHVkRnh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0J3YjJsdWRFWnliMjFCYm1kc1pVRnVaRVJwYzNSaGJtTmxJRDBnS0c5eWFXZHBiaXdnWVc1bmJHVXNJR1JwYzNSaGJtTmxLU0E5UGlCN1hHNGdJQ0FnWVc1bmJHVWdQU0JrWldkeVpXVnpWRzlTWVdScFlXNXpLR0Z1WjJ4bEtUdGNibHh1SUNBZ0lISmxkSFZ5YmlCN1hHNGdJQ0FnSUNBZ0lIZzZJR1JwYzNSaGJtTmxJQ29nVFdGMGFDNWpiM01vWVc1bmJHVXBJQ3NnYjNKcFoybHVMbmdzWEc0Z0lDQWdJQ0FnSUhrNklHUnBjM1JoYm1ObElDb2dUV0YwYUM1emFXNG9ZVzVuYkdVcElDc2diM0pwWjJsdUxubGNiaUFnSUNCOU8xeHVmVHRjYmx4dUx5cGNiaUFnSUNCRGIyNTJaWEowSUhKaFpHbGhibk1nZEc4Z1pHVm5jbVZsYzF4dUlDQWdJRnh1SUNBZ0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1ZtRnNkV1VnYVc0Z2NtRmthV0Z1YzF4dUlDQWdJRUJ5WlhSMWNtNGdXMjUxYldKbGNsMDZJRlpoYkhWbElHbHVJR1JsWjNKbFpYTmNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdjbUZrYVdGdWMxUnZSR1ZuY21WbGN5QTlJQ2h5WVdScFlXNXpLU0E5UGlCeVlXUnBZVzV6SUNvZ01UZ3dJQzhnVFdGMGFDNVFTVHRjYmx4dUx5cGNiaUFnSUNCU1pYUjFjbTRnY21GdVpHOXRJRzUxYldKbGNpQmlaWFIzWldWdUlISmhibWRsWEc0Z0lDQWdYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkSUNodmNIUnBiMjVoYkNrNklFOTFkSEIxZENCdGFXNXBiWFZ0WEc0Z0lDQWdRSEJoY21GdElGdHVkVzFpWlhKZElDaHZjSFJwYjI1aGJDazZJRTkxZEhCMWRDQnRZWGhwYlhWdFhHNGdJQ0FnUUhKbGRIVnliaUJiYm5WdFltVnlYVG9nVW1GdVpHOXRJRzUxYldKbGNpQjNhWFJvYVc0Z2NtRnVaMlVzSUc5eUlEQWdZVzVrSURFZ2FXWWdibTl1WlNCd2NtOTJhV1JsWkZ4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCeVlXNWtiMjBnUFNBb2JXbHVJRDBnTUN3Z2JXRjRJRDBnTVNrZ1BUNGdUV0YwYUM1eVlXNWtiMjBvS1NBcUlDaHRZWGdnTFNCdGFXNHBJQ3NnYldsdU8xeHVYRzR2S2x4dUlDQWdJRU5oYkdOMWJHRjBaU0J5Wld4aGRHbDJaU0IyWVd4MVpWeHVJQ0FnSUZ4dUlDQWdJRlJoYTJWeklIUm9aU0J2Y0dWeVlYUnZjaUJoYm1RZ2RtRnNkV1VnWm5KdmJTQmhJSE4wY21sdVp5d2dhV1VnWENJclBUVmNJaXdnWVc1a0lHRndjR3hwWlhOY2JpQWdJQ0IwYnlCMGFHVWdZM1Z5Y21WdWRDQjJZV3gxWlNCMGJ5QnlaWE52YkhabElHRWdibVYzSUhSaGNtZGxkQzVjYmlBZ0lDQmNiaUFnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUVOMWNuSmxiblFnZG1Gc2RXVmNiaUFnSUNCQWNHRnlZVzBnVzNOMGNtbHVaMTA2SUZKbGJHRjBhWFpsSUhaaGJIVmxYRzRnSUNBZ1FISmxkSFZ5YmlCYmJuVnRZbVZ5WFRvZ1RtVjNJSFpoYkhWbFhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElISmxiR0YwYVhabFZtRnNkV1VnUFNBb1kzVnljbVZ1ZEN3Z2NtVnNZWFJwZG1VcElEMCtJSHRjYmlBZ0lDQnNaWFFnYm1WM1ZtRnNkV1VnUFNCamRYSnlaVzUwTzF4dUlDQWdJR052Ym5OMElHVnhkV0YwYVc5dUlEMGdjbVZzWVhScGRtVXVjM0JzYVhRb0p6MG5LVHRjYmlBZ0lDQmpiMjV6ZENCdmNHVnlZWFJ2Y2lBOUlHVnhkV0YwYVc5dVd6QmRPMXh1SUNBZ0lHeGxkQ0I3SUhWdWFYUXNJSFpoYkhWbElIMGdQU0J6Y0d4cGRGWmhiSFZsVlc1cGRDaGxjWFZoZEdsdmJsc3hYU2s3WEc1Y2JpQWdJQ0IyWVd4MVpTQTlJSEJoY25ObFJteHZZWFFvZG1Gc2RXVXBPMXh1WEc0Z0lDQWdjM2RwZEdOb0lDaHZjR1Z5WVhSdmNpa2dlMXh1SUNBZ0lDQWdJQ0JqWVhObElDY3JKenBjYmlBZ0lDQWdJQ0FnSUNBZ0lHNWxkMVpoYkhWbElDczlJSFpoYkhWbE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWW5KbFlXczdYRzRnSUNBZ0lDQWdJR05oYzJVZ0p5MG5PbHh1SUNBZ0lDQWdJQ0FnSUNBZ2JtVjNWbUZzZFdVZ0xUMGdkbUZzZFdVN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JpY21WaGF6dGNiaUFnSUNBZ0lDQWdZMkZ6WlNBbktpYzZYRzRnSUNBZ0lDQWdJQ0FnSUNCdVpYZFdZV3gxWlNBcVBTQjJZV3gxWlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJR0p5WldGck8xeHVJQ0FnSUNBZ0lDQmpZWE5sSUNjdkp6cGNiaUFnSUNBZ0lDQWdJQ0FnSUc1bGQxWmhiSFZsSUM4OUlIWmhiSFZsTzF4dUlDQWdJQ0FnSUNBZ0lDQWdZbkpsWVdzN1hHNGdJQ0FnZlZ4dUlDQWdJRnh1SUNBZ0lHbG1JQ2gxYm1sMEtTQjdYRzRnSUNBZ0lDQWdJRzVsZDFaaGJIVmxJQ3M5SUhWdWFYUTdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2NtVjBkWEp1SUc1bGQxWmhiSFZsTzF4dWZUdGNibHh1THlwY2JpQWdJQ0JTWlhOMGNtbGpkQ0IyWVd4MVpTQjBieUJ5WVc1blpWeHVJQ0FnSUZ4dUlDQWdJRkpsZEhWeWJpQjJZV3gxWlNCM2FYUm9hVzRnZEdobElISmhibWRsSUc5bUlHeHZkMlZ5VEdsdGFYUWdZVzVrSUhWd2NHVnlUR2x0YVhSY2JpQWdJQ0JjYmlBZ0lDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklGWmhiSFZsSUhSdklHdGxaWEFnZDJsMGFHbHVJSEpoYm1kbFhHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJNYjNkbGNpQnNhVzFwZENCdlppQnlZVzVuWlZ4dUlDQWdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dWWEJ3WlhJZ2JHbHRhWFFnYjJZZ2NtRnVaMlZjYmlBZ0lDQkFjbVYwZFhKdUlGdHVkVzFpWlhKZE9pQldZV3gxWlNCaGN5QnNhVzFwZEdWa0lIZHBkR2hwYmlCbmFYWmxiaUJ5WVc1blpWeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQnlaWE4wY21samRDQTlJQ2gyWVd4MVpTd2diV2x1TENCdFlYZ3BJRDArSUUxaGRHZ3ViV0Y0S0UxaGRHZ3ViV2x1S0haaGJIVmxMQ0J0WVhncExDQnRhVzRwTzF4dVhHNHZLbHh1SUNBZ0lFWnlZVzFsY21GMFpTMXBibVJsY0dWdVpHVnVkQ0J6Ylc5dmRHaHBibWRjYmx4dUlDQWdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dUbVYzSUhaaGJIVmxYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCUGJHUWdkbUZzZFdWY2JpQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRVp5WVcxbElHUjFjbUYwYVc5dVhHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRJQ2h2Y0hScGIyNWhiQ2s2SUZOdGIyOTBhR2x1WnlBb01DQnBjeUJ1YjI1bEtWeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQnpiVzl2ZEdnZ1BTQW9ibVYzVm1Gc2RXVXNJRzlzWkZaaGJIVmxMQ0JrZFhKaGRHbHZiaXdnYzIxdmIzUm9hVzVuSUQwZ01Da2dQVDRnZEc5RVpXTnBiV0ZzS0c5c1pGWmhiSFZsSUNzZ0tHUjFjbUYwYVc5dUlDb2dLRzVsZDFaaGJIVmxJQzBnYjJ4a1ZtRnNkV1VwSUM4Z1RXRjBhQzV0WVhnb2MyMXZiM1JvYVc1bkxDQmtkWEpoZEdsdmJpa3BLVHRjYmx4dUx5cGNiaUFnSUNCRGIyNTJaWEowSUhnZ2NHVnlJSE5sWTI5dVpDQjBieUJ3WlhJZ1puSmhiV1VnZG1Wc2IyTnBkSGtnWW1GelpXUWdiMjRnWm5CelhHNGdJQ0FnWEc0Z0lDQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQlZibWwwSUhCbGNpQnpaV052Ym1SY2JpQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRVp5WVcxbElHUjFjbUYwYVc5dUlHbHVJRzF6WEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUhOd1pXVmtVR1Z5Um5KaGJXVWdQU0FvZUhCekxDQm1jbUZ0WlVSMWNtRjBhVzl1S1NBOVBpQW9hWE5PZFcwb2VIQnpLU2tnUHlCNGNITWdMeUFvTVRBd01DQXZJR1p5WVcxbFJIVnlZWFJwYjI0cElEb2dNRHRjYmx4dUx5cGNiaUFnSUNCRGIyNTJaWEowSUhabGJHOWphWFI1SUdsdWRHOGdkbVZzYVdOcGRIa2djR1Z5SUhObFkyOXVaRnh1SUNBZ0lGeHVJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVlc1cGRDQndaWElnWm5KaGJXVmNiaUFnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUVaeVlXMWxJR1IxY21GMGFXOXVJR2x1SUcxelhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElITndaV1ZrVUdWeVUyVmpiMjVrSUQwZ0tIWmxiRzlqYVhSNUxDQm1jbUZ0WlVSMWNtRjBhVzl1S1NBOVBpQjJaV3h2WTJsMGVTQXFJQ2d4TURBd0lDOGdabkpoYldWRWRYSmhkR2x2YmlrN1hHNWNiaThxWEc0Z0lDQWdRM0psWVhSbElITjBaWEJ3WldRZ2RtVnljMmx2YmlCdlppQXdMVEVnY0hKdlozSmxjM05jYmlBZ0lDQmNiaUFnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUVOMWNuSmxiblFnZG1Gc2RXVmNiaUFnSUNCQWNHRnlZVzBnVzJsdWRGMDZJRTUxYldKbGNpQnZaaUJ6ZEdWd2MxeHVJQ0FnSUVCeVpYUjFjbTRnVzI1MWJXSmxjbDA2SUZOMFpYQndaV1FnZG1Gc2RXVmNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdjM1JsY0ZCeWIyZHlaWE56SUQwZ0tIQnliMmR5WlhOekxDQnpkR1Z3Y3lrZ1BUNGdlMXh1SUNBZ0lHTnZibk4wSUhObFoyMWxiblFnUFNBeElDOGdLSE4wWlhCeklDMGdNU2s3WEc0Z0lDQWdZMjl1YzNRZ2RHRnlaMlYwSUQwZ01TQXRJQ2d4SUM4Z2MzUmxjSE1wTzF4dUlDQWdJR052Ym5OMElIQnliMmR5WlhOelQyWlVZWEpuWlhRZ1BTQk5ZWFJvTG0xcGJpaHdjbTluY21WemN5QXZJSFJoY21kbGRDd2dNU2s3WEc1Y2JpQWdJQ0J5WlhSMWNtNGdUV0YwYUM1bWJHOXZjaWh3Y205bmNtVnpjMDltVkdGeVoyVjBJQzhnYzJWbmJXVnVkQ2tnS2lCelpXZHRaVzUwTzF4dWZUc2lYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdWktY2FsYy9saWIvZW50cnkuanNcbiAqKiBtb2R1bGUgaWQgPSA5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVFYXNpbmc7XG5cbnZhciBfQmV6aWVyID0gcmVxdWlyZSgnLi9CZXppZXInKTtcblxudmFyIF9CZXppZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQmV6aWVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLypcbiAgICBNaXJyb3IgZWFzaW5nXG4gICAgXG4gICAgTWlycm9ycyB0aGUgcHJvdmlkZWQgZWFzaW5nIGZ1bmN0aW9uLCB1c2VkIGhlcmUgZm9yIG1pcnJvcmluZyBhblxuICAgIGVhc2VJbiBpbnRvIGFuIGVhc2VJbk91dFxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogUHJvZ3Jlc3MsIGZyb20gMCAtIDEsIG9mIGN1cnJlbnQgc2hpZnRcbiAgICBAcGFyYW0gW2Z1bmN0aW9uXTogVGhlIGVhc2luZyBmdW5jdGlvbiB0byBtaXJyb3JcbiAgICBAcmV0dXJucyBbbnVtYmVyXTogVGhlIGVhc2luZy1hZGp1c3RlZCBkZWx0YVxuKi9cbnZhciBtaXJyb3JFYXNpbmcgPSBmdW5jdGlvbiAobWV0aG9kKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwcm9ncmVzcywgc3RyZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHByb2dyZXNzIDw9IDAuNSA/IG1ldGhvZCgyICogcHJvZ3Jlc3MsIHN0cmVuZ3RoKSAvIDIgOiAoMiAtIG1ldGhvZCgyICogKDEgLSBwcm9ncmVzcyksIHN0cmVuZ3RoKSkgLyAyO1xuICAgIH07XG59O1xuXG4vKlxuICAgIFJldmVyc2UgZWFzaW5nXG4gICAgXG4gICAgUmV2ZXJzZXMgdGhlIG91dHB1dCBvZiB0aGUgcHJvdmlkZWQgZWFzaW5nIGZ1bmN0aW9uLCB1c2VkIGZvciBmbGlwcGluZyBlYXNlSW5cbiAgICBjdXJ2ZSB0byBhbiBlYXNlT3V0LlxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogUHJvZ3Jlc3MsIGZyb20gMCAtIDEsIG9mIGN1cnJlbnQgc2hpZnRcbiAgICBAcGFyYW0gW2Z1bmN0aW9uXTogVGhlIGVhc2luZyBmdW5jdGlvbiB0byByZXZlcnNlXG4gICAgQHJldHVybnMgW251bWJlcl06IFRoZSBlYXNpbmctYWRqdXN0ZWQgZGVsdGFcbiovXG52YXIgcmV2ZXJzZUVhc2luZyA9IGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHByb2dyZXNzLCBzdHJlbmd0aCkge1xuICAgICAgICByZXR1cm4gMSAtIG1ldGhvZCgxIC0gcHJvZ3Jlc3MsIHN0cmVuZ3RoKTtcbiAgICB9O1xufTtcblxuLypcbiAgICBFYXNpbmcgY2xhc3NcblxuICAgIElmIHByb3ZpZGVkIGVhc2luZyBmdW5jdGlvbiwgcmV0dXJucyBlYXNpbmcgZnVuY3Rpb24gd2l0aCBcbiAgICBpbi9vdXQvaW5PdXQgdmFyaWF0aW9uc1xuXG4gICAgSWYgcHJvdmlkZWQgZm91ciBhcmd1bWVudHMsIHJldHVybnMgbmV3IEJlemllciBjbGFzcyBpbnN0ZWFkLlxuKi9cbmZ1bmN0aW9uIGNyZWF0ZUVhc2luZyh4MSwgeTEsIHgyLCB5Mikge1xuICAgIHZhciBtZXRob2QgPSB4MTtcbiAgICB2YXIgZWFzaW5nRnVuY3Rpb24gPSB1bmRlZmluZWQ7XG5cbiAgICAvLyBJZiB0aGlzIGlzIGEgYmV6aWVyIGN1cnZlLCByZXR1cm4gYSBiZXppZXIgZnVuY3Rpb25cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZWFzaW5nRnVuY3Rpb24gPSBuZXcgX0JlemllcjIuZGVmYXVsdCh4MSwgeTEsIHgyLCB5Mik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZWFzaW5nRnVuY3Rpb24gPSBmdW5jdGlvbiAocHJvZ3Jlc3MsIHN0cmVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gbWV0aG9kKHByb2dyZXNzLCBzdHJlbmd0aCk7XG4gICAgICAgIH07XG4gICAgICAgIGVhc2luZ0Z1bmN0aW9uLmluID0gZnVuY3Rpb24gKHByb2dyZXNzLCBzdHJlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIG1ldGhvZChwcm9ncmVzcywgc3RyZW5ndGgpO1xuICAgICAgICB9O1xuICAgICAgICBlYXNpbmdGdW5jdGlvbi5vdXQgPSByZXZlcnNlRWFzaW5nKG1ldGhvZCk7XG4gICAgICAgIGVhc2luZ0Z1bmN0aW9uLmluT3V0ID0gbWlycm9yRWFzaW5nKG1ldGhvZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVhc2luZ0Z1bmN0aW9uO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltTnlaV0YwWlMxbFlYTnBibWN1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN08ydENRV3REZDBJc1dVRkJXVHM3T3pzN096czdPenM3T3pzN096czdPMEZCZEVKd1F5eEpRVUZOTEZsQlFWa3NSMEZCUnl4VlFVRkJMRTFCUVUwN1YwRkJTU3hWUVVGRExGRkJRVkVzUlVGQlJTeFJRVUZSTzJWQlFVc3NRVUZCUXl4UlFVRlJMRWxCUVVrc1IwRkJSeXhIUVVGSkxFMUJRVTBzUTBGQlF5eERRVUZETEVkQlFVY3NVVUZCVVN4RlFVRkZMRkZCUVZFc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4TlFVRk5MRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eFJRVUZSTEVOQlFVRXNRVUZCUXl4RlFVRkZMRkZCUVZFc1EwRkJReXhEUVVGQkxFZEJRVWtzUTBGQlF6dExRVUZCTzBOQlFVRTdPenM3T3pzN096czdPenRCUVVGRExFRkJXUzlLTEVsQlFVMHNZVUZCWVN4SFFVRkhMRlZCUVVFc1RVRkJUVHRYUVVGSkxGVkJRVU1zVVVGQlVTeEZRVUZGTEZGQlFWRTdaVUZCU3l4RFFVRkRMRWRCUVVjc1RVRkJUU3hEUVVGRExFTkJRVU1zUjBGQlJ5eFJRVUZSTEVWQlFVVXNVVUZCVVN4RFFVRkRPMHRCUVVFN1EwRkJRVHM3T3pzN096czdPenRCUVVGRExFRkJWVFZGTEZOQlFWTXNXVUZCV1N4RFFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlR0QlFVTnNSQ3hSUVVGTkxFMUJRVTBzUjBGQlJ5eEZRVUZGTEVOQlFVTTdRVUZEYkVJc1VVRkJTU3hqUVVGakxGbEJRVUU3T3p0QlFVRkRMRUZCUjI1Q0xGRkJRVWtzVTBGQlV5eERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRVZCUVVVN1FVRkRkRUlzYzBKQlFXTXNSMEZCUnl4eFFrRkJWeXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJRenRMUVVVdlF5eE5RVUZOTzBGQlEwZ3NjMEpCUVdNc1IwRkJSeXhWUVVGRExGRkJRVkVzUlVGQlJTeFJRVUZSTzIxQ1FVRkxMRTFCUVUwc1EwRkJReXhSUVVGUkxFVkJRVVVzVVVGQlVTeERRVUZETzFOQlFVRXNRMEZCUXp0QlFVTndSU3h6UWtGQll5eERRVUZETEVWQlFVVXNSMEZCUnl4VlFVRkRMRkZCUVZFc1JVRkJSU3hSUVVGUk8yMUNRVUZMTEUxQlFVMHNRMEZCUXl4UlFVRlJMRVZCUVVVc1VVRkJVU3hEUVVGRE8xTkJRVUVzUTBGQlF6dEJRVU4yUlN4elFrRkJZeXhEUVVGRExFZEJRVWNzUjBGQlJ5eGhRVUZoTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1FVRkRNME1zYzBKQlFXTXNRMEZCUXl4TFFVRkxMRWRCUVVjc1dVRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzB0QlF5OURPenRCUVVWRUxGZEJRVThzWTBGQll5eERRVUZETzBOQlEzcENJaXdpWm1sc1pTSTZJbU55WldGMFpTMWxZWE5wYm1jdWFuTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdRbVY2YVdWeUlHWnliMjBnSnk0dlFtVjZhV1Z5Snp0Y2JseHVMeXBjYmlBZ0lDQk5hWEp5YjNJZ1pXRnphVzVuWEc0Z0lDQWdYRzRnSUNBZ1RXbHljbTl5Y3lCMGFHVWdjSEp2ZG1sa1pXUWdaV0Z6YVc1bklHWjFibU4wYVc5dUxDQjFjMlZrSUdobGNtVWdabTl5SUcxcGNuSnZjbWx1WnlCaGJseHVJQ0FnSUdWaGMyVkpiaUJwYm5SdklHRnVJR1ZoYzJWSmJrOTFkRnh1SUNBZ0lGeHVJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVUhKdlozSmxjM01zSUdaeWIyMGdNQ0F0SURFc0lHOW1JR04xY25KbGJuUWdjMmhwWm5SY2JpQWdJQ0JBY0dGeVlXMGdXMloxYm1OMGFXOXVYVG9nVkdobElHVmhjMmx1WnlCbWRXNWpkR2x2YmlCMGJ5QnRhWEp5YjNKY2JpQWdJQ0JBY21WMGRYSnVjeUJiYm5WdFltVnlYVG9nVkdobElHVmhjMmx1WnkxaFpHcDFjM1JsWkNCa1pXeDBZVnh1S2k5Y2JtTnZibk4wSUcxcGNuSnZja1ZoYzJsdVp5QTlJRzFsZEdodlpDQTlQaUFvY0hKdlozSmxjM01zSUhOMGNtVnVaM1JvS1NBOVBpQW9jSEp2WjNKbGMzTWdQRDBnTUM0MUtTQS9JRzFsZEdodlpDZ3lJQ29nY0hKdlozSmxjM01zSUhOMGNtVnVaM1JvS1NBdklESWdPaUFvTWlBdElHMWxkR2h2WkNneUlDb2dLREVnTFNCd2NtOW5jbVZ6Y3lrc0lITjBjbVZ1WjNSb0tTa2dMeUF5TzF4dUlDQWdJQ0FnSUNCY2JpOHFYRzRnSUNBZ1VtVjJaWEp6WlNCbFlYTnBibWRjYmlBZ0lDQmNiaUFnSUNCU1pYWmxjbk5sY3lCMGFHVWdiM1YwY0hWMElHOW1JSFJvWlNCd2NtOTJhV1JsWkNCbFlYTnBibWNnWm5WdVkzUnBiMjRzSUhWelpXUWdabTl5SUdac2FYQndhVzVuSUdWaGMyVkpibHh1SUNBZ0lHTjFjblpsSUhSdklHRnVJR1ZoYzJWUGRYUXVYRzRnSUNBZ1hHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJRY205bmNtVnpjeXdnWm5KdmJTQXdJQzBnTVN3Z2IyWWdZM1Z5Y21WdWRDQnphR2xtZEZ4dUlDQWdJRUJ3WVhKaGJTQmJablZ1WTNScGIyNWRPaUJVYUdVZ1pXRnphVzVuSUdaMWJtTjBhVzl1SUhSdklISmxkbVZ5YzJWY2JpQWdJQ0JBY21WMGRYSnVjeUJiYm5WdFltVnlYVG9nVkdobElHVmhjMmx1WnkxaFpHcDFjM1JsWkNCa1pXeDBZVnh1S2k5Y2JtTnZibk4wSUhKbGRtVnljMlZGWVhOcGJtY2dQU0J0WlhSb2IyUWdQVDRnS0hCeWIyZHlaWE56TENCemRISmxibWQwYUNrZ1BUNGdNU0F0SUcxbGRHaHZaQ2d4SUMwZ2NISnZaM0psYzNNc0lITjBjbVZ1WjNSb0tUdGNibHh1THlwY2JpQWdJQ0JGWVhOcGJtY2dZMnhoYzNOY2JseHVJQ0FnSUVsbUlIQnliM1pwWkdWa0lHVmhjMmx1WnlCbWRXNWpkR2x2Yml3Z2NtVjBkWEp1Y3lCbFlYTnBibWNnWm5WdVkzUnBiMjRnZDJsMGFDQmNiaUFnSUNCcGJpOXZkWFF2YVc1UGRYUWdkbUZ5YVdGMGFXOXVjMXh1WEc0Z0lDQWdTV1lnY0hKdmRtbGtaV1FnWm05MWNpQmhjbWQxYldWdWRITXNJSEpsZEhWeWJuTWdibVYzSUVKbGVtbGxjaUJqYkdGemN5QnBibk4wWldGa0xseHVLaTljYm1WNGNHOXlkQ0JrWldaaGRXeDBJR1oxYm1OMGFXOXVJR055WldGMFpVVmhjMmx1WnlBb2VERXNJSGt4TENCNE1pd2dlVElwSUh0Y2JpQWdJQ0JqYjI1emRDQnRaWFJvYjJRZ1BTQjRNVHRjYmlBZ0lDQnNaWFFnWldGemFXNW5SblZ1WTNScGIyNDdYRzVjYmlBZ0lDQXZMeUJKWmlCMGFHbHpJR2x6SUdFZ1ltVjZhV1Z5SUdOMWNuWmxMQ0J5WlhSMWNtNGdZU0JpWlhwcFpYSWdablZ1WTNScGIyNWNiaUFnSUNCcFppQW9ZWEpuZFcxbGJuUnpMbXhsYm1kMGFDQStJREVwSUh0Y2JpQWdJQ0FnSUNBZ1pXRnphVzVuUm5WdVkzUnBiMjRnUFNCdVpYY2dRbVY2YVdWeUtIZ3hMQ0I1TVN3Z2VESXNJSGt5S1R0Y2JseHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUdWaGMybHVaMFoxYm1OMGFXOXVJRDBnS0hCeWIyZHlaWE56TENCemRISmxibWQwYUNrZ1BUNGdiV1YwYUc5a0tIQnliMmR5WlhOekxDQnpkSEpsYm1kMGFDazdYRzRnSUNBZ0lDQWdJR1ZoYzJsdVowWjFibU4wYVc5dUxtbHVJRDBnS0hCeWIyZHlaWE56TENCemRISmxibWQwYUNrZ1BUNGdiV1YwYUc5a0tIQnliMmR5WlhOekxDQnpkSEpsYm1kMGFDazdYRzRnSUNBZ0lDQWdJR1ZoYzJsdVowWjFibU4wYVc5dUxtOTFkQ0E5SUhKbGRtVnljMlZGWVhOcGJtY29iV1YwYUc5a0tUdGNiaUFnSUNBZ0lDQWdaV0Z6YVc1blJuVnVZM1JwYjI0dWFXNVBkWFFnUFNCdGFYSnliM0pGWVhOcGJtY29iV1YwYUc5a0tUdGNiaUFnSUNCOVhHNWNiaUFnSUNCeVpYUjFjbTRnWldGemFXNW5SblZ1WTNScGIyNDdYRzU5WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvdHdlZW4vY3JlYXRlLWVhc2luZy5qc1xuICoqIG1vZHVsZSBpZCA9IDEwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMucHVzaCA9IHB1c2g7XG5mdW5jdGlvbiBwdXNoKCkge1xuICAgIHZhciBfQXJyYXkkcHJvdG90eXBlJHB1c2g7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIChfQXJyYXkkcHJvdG90eXBlJHB1c2ggPSBBcnJheS5wcm90b3R5cGUucHVzaCkuY2FsbC5hcHBseShfQXJyYXkkcHJvdG90eXBlJHB1c2gsIFt0aGlzXS5jb25jYXQoYXJncykpO1xuXG4gICAgaWYgKHRoaXMubGVuZ3RoID49IHRoaXMuX21heFNpemUpIHtcbiAgICAgICAgdGhpcy5zaGlmdCgpO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTlwYm1NdlluVm1abVZ5TFcxbGRHaHZaSE11YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN08xRkJRV2RDTEVsQlFVa3NSMEZCU2l4SlFVRkpPMEZCUVdJc1UwRkJVeXhKUVVGSkxFZEJRVlU3T3p0elEwRkJUaXhKUVVGSk8wRkJRVW9zV1VGQlNUczdPMEZCUTNoQ0xEWkNRVUZCTEV0QlFVc3NRMEZCUXl4VFFVRlRMRU5CUVVNc1NVRkJTU3hGUVVGRExFbEJRVWtzVFVGQlFTeDVRa0ZCUXl4SlFVRkpMRk5CUVVzc1NVRkJTU3hGUVVGRExFTkJRVU03TzBGQlJYcERMRkZCUVVrc1NVRkJTU3hEUVVGRExFMUJRVTBzU1VGQlNTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZPMEZCUXpsQ0xGbEJRVWtzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXp0TFFVTm9RanREUVVOS0lpd2labWxzWlNJNkltSjFabVpsY2kxdFpYUm9iMlJ6TG1weklpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2laWGh3YjNKMElHWjFibU4wYVc5dUlIQjFjMmdvTGk0dVlYSm5jeWtnZTF4dUlDQWdJRUZ5Y21GNUxuQnliM1J2ZEhsd1pTNXdkWE5vTG1OaGJHd29kR2hwY3l3Z0xpNHVZWEpuY3lrN1hHNWNiaUFnSUNCcFppQW9kR2hwY3k1c1pXNW5kR2dnUGowZ2RHaHBjeTVmYldGNFUybDZaU2tnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbk5vYVdaMEtDazdYRzRnSUNBZ2ZWeHVmU0pkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3VpLXV0aWxzL2xpYi9pbmMvYnVmZmVyLW1ldGhvZHMuanNcbiAqKiBtb2R1bGUgaWQgPSAxMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5zZXREaWxhdGlvbiA9IGV4cG9ydHMuc2V0U3RlcHMgPSBleHBvcnRzLlByb2Nlc3MgPSB1bmRlZmluZWQ7XG5cbnZhciBfUHJvY2VzcyA9IHJlcXVpcmUoJy4vUHJvY2VzcycpO1xuXG52YXIgX1Byb2Nlc3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUHJvY2Vzcyk7XG5cbnZhciBfbG9vcCA9IHJlcXVpcmUoJy4vbG9vcCcpO1xuXG52YXIgX3RpbWVyID0gcmVxdWlyZSgnLi9pbmMvdGltZXInKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5Qcm9jZXNzID0gX1Byb2Nlc3MyLmRlZmF1bHQ7XG5leHBvcnRzLnNldFN0ZXBzID0gX2xvb3Auc2V0U3RlcHM7XG5leHBvcnRzLnNldERpbGF0aW9uID0gX3RpbWVyLnNldERpbGF0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMM055WXk5bWNtRnRaWE41Ym1NdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN096czdPenM3TzFGQlNWTXNUMEZCVHp0UlFVRkZMRkZCUVZFc1UwRklha0lzVVVGQlVUdFJRVWRYTEZkQlFWY3NWVUZHT1VJc1YwRkJWeUlzSW1acGJHVWlPaUptY21GdFpYTjVibU11YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ1VISnZZMlZ6Y3lCbWNtOXRJQ2N1TDFCeWIyTmxjM01uTzF4dWFXMXdiM0owSUhzZ2MyVjBVM1JsY0hNZ2ZTQm1jbTl0SUNjdUwyeHZiM0FuTzF4dWFXMXdiM0owSUhzZ2MyVjBSR2xzWVhScGIyNGdmU0JtY205dElDY3VMMmx1WXk5MGFXMWxjaWRjYmx4dVpYaHdiM0owSUhzZ1VISnZZMlZ6Y3l3Z2MyVjBVM1JsY0hNc0lITmxkRVJwYkdGMGFXOXVJSDA3SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ZyYW1lc3luYy9saWIvZnJhbWVzeW5jLmpzXG4gKiogbW9kdWxlIGlkID0gMTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qXG4gICAgQmV6aWVyIGZ1bmN0aW9uIGdlbmVyYXRvclxuICAgICAgICBcbiAgICBHYcOrdGFuIFJlbmF1ZGVhdSdzIEJlemllckVhc2luZ1xuICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZy9ibG9iL21hc3Rlci9pbmRleC5qcyAgXG4gICAgaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAgICBZb3UncmUgYSBoZXJvXG4gICAgXG4gICAgVXNlXG4gICAgXG4gICAgICAgIHZhciBlYXNlT3V0ID0gbmV3IEJlemllciguMTcsLjY3LC44MywuNjcpLFxuICAgICAgICAgICAgeCA9IGVhc2VPdXQoMC41KTsgLy8gcmV0dXJucyAwLjYyNy4uLlxuKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgTkVXVE9OX0lURVJBVElPTlMgPSA4LFxuICAgIE5FV1RPTl9NSU5fU0xPUEUgPSAwLjAwMSxcbiAgICBTVUJESVZJU0lPTl9QUkVDSVNJT04gPSAwLjAwMDAwMDEsXG4gICAgU1VCRElWSVNJT05fTUFYX0lURVJBVElPTlMgPSAxMCxcbiAgICBLX1NQTElORV9UQUJMRV9TSVpFID0gMTEsXG4gICAgS19TQU1QTEVfU1RFUF9TSVpFID0gMS4wIC8gKEtfU1BMSU5FX1RBQkxFX1NJWkUgLSAxLjApLFxuICAgIEZMT0FUXzMyX1NVUFBPUlRFRCA9IHR5cGVvZiBGbG9hdDMyQXJyYXkgIT09ICd1bmRlZmluZWQnLFxuICAgIGEgPSBmdW5jdGlvbiAoYTEsIGEyKSB7XG4gICAgcmV0dXJuIDEuMCAtIDMuMCAqIGEyICsgMy4wICogYTE7XG59LFxuICAgIGIgPSBmdW5jdGlvbiAoYTEsIGEyKSB7XG4gICAgcmV0dXJuIDMuMCAqIGEyIC0gNi4wICogYTE7XG59LFxuICAgIGMgPSBmdW5jdGlvbiAoYTEpIHtcbiAgICByZXR1cm4gMy4wICogYTE7XG59LFxuICAgIGdldFNsb3BlID0gZnVuY3Rpb24gKHQsIGExLCBhMikge1xuICAgIHJldHVybiAzLjAgKiBhKGExLCBhMikgKiB0ICogdCArIDIuMCAqIGIoYTEsIGEyKSAqIHQgKyBjKGExKTtcbn0sXG4gICAgY2FsY0JlemllciA9IGZ1bmN0aW9uICh0LCBhMSwgYTIpIHtcbiAgICByZXR1cm4gKChhKGExLCBhMikgKiB0ICsgYihhMSwgYTIpKSAqIHQgKyBjKGExKSkgKiB0O1xufSxcblxuLypcbiAgICBCZXppZXIgY29uc3RydWN0b3JcbiovXG5CZXppZXIgPSBmdW5jdGlvbiAobVgxLCBtWTEsIG1YMiwgbVkyKSB7XG4gICAgdmFyIHNhbXBsZVZhbHVlcyA9IEZMT0FUXzMyX1NVUFBPUlRFRCA/IG5ldyBGbG9hdDMyQXJyYXkoS19TUExJTkVfVEFCTEVfU0laRSkgOiBuZXcgQXJyYXkoS19TUExJTkVfVEFCTEVfU0laRSksXG4gICAgICAgIF9wcmVjb21wdXRlZCA9IGZhbHNlLFxuICAgICAgICBiaW5hcnlTdWJkaXZpZGUgPSBmdW5jdGlvbiAoYVgsIGFBLCBhQikge1xuICAgICAgICB2YXIgY3VycmVudFgsXG4gICAgICAgICAgICBjdXJyZW50VCxcbiAgICAgICAgICAgIGkgPSAwO1xuXG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIGN1cnJlbnRUID0gYUEgKyAoYUIgLSBhQSkgLyAyLjA7XG4gICAgICAgICAgICBjdXJyZW50WCA9IGNhbGNCZXppZXIoY3VycmVudFQsIG1YMSwgbVgyKSAtIGFYO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRYID4gMC4wKSB7XG4gICAgICAgICAgICAgICAgYUIgPSBjdXJyZW50VDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYUEgPSBjdXJyZW50VDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSB3aGlsZSAoTWF0aC5hYnMoY3VycmVudFgpID4gU1VCRElWSVNJT05fUFJFQ0lTSU9OICYmICsraSA8IFNVQkRJVklTSU9OX01BWF9JVEVSQVRJT05TKTtcblxuICAgICAgICByZXR1cm4gY3VycmVudFQ7XG4gICAgfSxcbiAgICAgICAgbmV3dG9uUmFwaHNvbkl0ZXJhdGUgPSBmdW5jdGlvbiAoYVgsIGFHdWVzc1QpIHtcbiAgICAgICAgdmFyIGkgPSAwLFxuICAgICAgICAgICAgY3VycmVudFNsb3BlID0gMC4wLFxuICAgICAgICAgICAgY3VycmVudFg7XG5cbiAgICAgICAgZm9yICg7IGkgPCBORVdUT05fSVRFUkFUSU9OUzsgKytpKSB7XG4gICAgICAgICAgICBjdXJyZW50U2xvcGUgPSBnZXRTbG9wZShhR3Vlc3NULCBtWDEsIG1YMik7XG5cbiAgICAgICAgICAgIGlmIChjdXJyZW50U2xvcGUgPT09IDAuMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhR3Vlc3NUO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjdXJyZW50WCA9IGNhbGNCZXppZXIoYUd1ZXNzVCwgbVgxLCBtWDIpIC0gYVg7XG4gICAgICAgICAgICBhR3Vlc3NUIC09IGN1cnJlbnRYIC8gY3VycmVudFNsb3BlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFHdWVzc1Q7XG4gICAgfSxcbiAgICAgICAgY2FsY1NhbXBsZVZhbHVlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBLX1NQTElORV9UQUJMRV9TSVpFOyArK2kpIHtcbiAgICAgICAgICAgIHNhbXBsZVZhbHVlc1tpXSA9IGNhbGNCZXppZXIoaSAqIEtfU0FNUExFX1NURVBfU0laRSwgbVgxLCBtWDIpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAgICAgZ2V0VEZvclggPSBmdW5jdGlvbiAoYVgpIHtcbiAgICAgICAgdmFyIGludGVydmFsU3RhcnQgPSAwLjAsXG4gICAgICAgICAgICBjdXJyZW50U2FtcGxlID0gMSxcbiAgICAgICAgICAgIGxhc3RTYW1wbGUgPSBLX1NQTElORV9UQUJMRV9TSVpFIC0gMSxcbiAgICAgICAgICAgIGRpc3QgPSAwLjAsXG4gICAgICAgICAgICBndWVzc0ZvclQgPSAwLjAsXG4gICAgICAgICAgICBpbml0aWFsU2xvcGUgPSAwLjA7XG5cbiAgICAgICAgZm9yICg7IGN1cnJlbnRTYW1wbGUgIT0gbGFzdFNhbXBsZSAmJiBzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0gPD0gYVg7ICsrY3VycmVudFNhbXBsZSkge1xuICAgICAgICAgICAgaW50ZXJ2YWxTdGFydCArPSBLX1NBTVBMRV9TVEVQX1NJWkU7XG4gICAgICAgIH1cblxuICAgICAgICAtLWN1cnJlbnRTYW1wbGU7XG5cbiAgICAgICAgZGlzdCA9IChhWCAtIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSkgLyAoc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGUgKyAxXSAtIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSk7XG4gICAgICAgIGd1ZXNzRm9yVCA9IGludGVydmFsU3RhcnQgKyBkaXN0ICogS19TQU1QTEVfU1RFUF9TSVpFO1xuXG4gICAgICAgIGluaXRpYWxTbG9wZSA9IGdldFNsb3BlKGd1ZXNzRm9yVCwgbVgxLCBtWDIpO1xuXG4gICAgICAgIC8vIElmIHNsb3BlIGlzIGdyZWF0ZXIgdGhhbiBtaW5cbiAgICAgICAgaWYgKGluaXRpYWxTbG9wZSA+PSBORVdUT05fTUlOX1NMT1BFKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3dG9uUmFwaHNvbkl0ZXJhdGUoYVgsIGd1ZXNzRm9yVCk7XG4gICAgICAgICAgICAvLyBTbG9wZSBpcyBlcXVhbCB0byBtaW5cbiAgICAgICAgfSBlbHNlIGlmIChpbml0aWFsU2xvcGUgPT09IDAuMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBndWVzc0ZvclQ7XG4gICAgICAgICAgICAgICAgLy8gU2xvcGUgaXMgbGVzcyB0aGFuIG1pblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJpbmFyeVN1YmRpdmlkZShhWCwgaW50ZXJ2YWxTdGFydCwgaW50ZXJ2YWxTdGFydCArIEtfU0FNUExFX1NURVBfU0laRSk7XG4gICAgICAgICAgICAgICAgfVxuICAgIH0sXG4gICAgICAgIHByZWNvbXB1dGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF9wcmVjb21wdXRlZCA9IHRydWU7XG4gICAgICAgIGlmIChtWDEgIT0gbVkxIHx8IG1YMiAhPSBtWTIpIHtcbiAgICAgICAgICAgIGNhbGNTYW1wbGVWYWx1ZXMoKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBHZW5lcmF0ZWQgZnVuY3Rpb25cbiAgICAgICAgXG4gICAgICAgIFJldHVybnMgdmFsdWUgMC0xIGJhc2VkIG9uIFhcbiAgICAqL1xuICAgIGYgPSBmdW5jdGlvbiAoYVgpIHtcbiAgICAgICAgdmFyIHJldHVyblZhbHVlO1xuXG4gICAgICAgIGlmICghX3ByZWNvbXB1dGVkKSB7XG4gICAgICAgICAgICBwcmVjb21wdXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBsaW5lYXIgZ3JhZGllbnQsIHJldHVybiBYIGFzIFRcbiAgICAgICAgaWYgKG1YMSA9PT0gbVkxICYmIG1YMiA9PT0gbVkyKSB7XG4gICAgICAgICAgICByZXR1cm5WYWx1ZSA9IGFYO1xuXG4gICAgICAgICAgICAvLyBJZiBhdCBzdGFydCwgcmV0dXJuIDBcbiAgICAgICAgfSBlbHNlIGlmIChhWCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVyblZhbHVlID0gMDtcblxuICAgICAgICAgICAgICAgIC8vIElmIGF0IGVuZCwgcmV0dXJuIDFcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYVggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSAxO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblZhbHVlID0gY2FsY0JlemllcihnZXRURm9yWChhWCksIG1ZMSwgbVkyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJldHVyblZhbHVlO1xuICAgIH07XG5cbiAgICByZXR1cm4gZjtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQmV6aWVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklrSmxlbWxsY2k1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3T3pzN096czdPMEZCWVVFc1dVRkJXU3hEUVVGRE96dEJRVVZpTEVsQlFVa3NhVUpCUVdsQ0xFZEJRVWNzUTBGQlF6dEpRVU55UWl4blFrRkJaMElzUjBGQlJ5eExRVUZMTzBsQlEzaENMSEZDUVVGeFFpeEhRVUZITEZOQlFWTTdTVUZEYWtNc01FSkJRVEJDTEVkQlFVY3NSVUZCUlR0SlFVTXZRaXh0UWtGQmJVSXNSMEZCUnl4RlFVRkZPMGxCUTNoQ0xHdENRVUZyUWl4SFFVRkhMRWRCUVVjc1NVRkJTU3h0UWtGQmJVSXNSMEZCUnl4SFFVRkhMRU5CUVVFc1FVRkJRenRKUVVOMFJDeHJRa0ZCYTBJc1IwRkJTU3hQUVVGUExGbEJRVmtzUzBGQlN5eFhRVUZYTEVGQlFVTTdTVUZGTVVRc1EwRkJReXhIUVVGSExGVkJRVlVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlR0QlFVTnNRaXhYUVVGUExFZEJRVWNzUjBGQlJ5eEhRVUZITEVkQlFVY3NSVUZCUlN4SFFVRkhMRWRCUVVjc1IwRkJSeXhGUVVGRkxFTkJRVU03UTBGRGNFTTdTVUZGUkN4RFFVRkRMRWRCUVVjc1ZVRkJWU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTzBGQlEyeENMRmRCUVU4c1IwRkJSeXhIUVVGSExFVkJRVVVzUjBGQlJ5eEhRVUZITEVkQlFVY3NSVUZCUlN4RFFVRkRPME5CUXpsQ08wbEJSVVFzUTBGQlF5eEhRVUZITEZWQlFWVXNSVUZCUlN4RlFVRkZPMEZCUTJRc1YwRkJUeXhIUVVGSExFZEJRVWNzUlVGQlJTeERRVUZETzBOQlEyNUNPMGxCUlVRc1VVRkJVU3hIUVVGSExGVkJRVlVzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVN1FVRkROVUlzVjBGQlR5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdRMEZEYUVVN1NVRkZSQ3hWUVVGVkxFZEJRVWNzVlVGQlZTeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSVHRCUVVNNVFpeFhRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZCTEVkQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlFTeEhRVUZKTEVOQlFVTXNRMEZCUXp0RFFVTjRSRHM3T3pzN1FVRkxSQ3hOUVVGTkxFZEJRVWNzVlVGQlZTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVU3UVVGRGJrTXNVVUZCU1N4WlFVRlpMRWRCUVVjc2EwSkJRV3RDTEVkQlFVY3NTVUZCU1N4WlFVRlpMRU5CUVVNc2JVSkJRVzFDTEVOQlFVTXNSMEZCUnl4SlFVRkpMRXRCUVVzc1EwRkJReXh0UWtGQmJVSXNRMEZCUXp0UlFVTXhSeXhaUVVGWkxFZEJRVWNzUzBGQlN6dFJRVVZ3UWl4bFFVRmxMRWRCUVVjc1ZVRkJWU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlR0QlFVTndReXhaUVVGSkxGRkJRVkU3V1VGQlJTeFJRVUZSTzFsQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenM3UVVGRk9VSXNWMEZCUnp0QlFVTkRMRzlDUVVGUkxFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1EwRkJRU3hIUVVGSkxFZEJRVWNzUTBGQlF6dEJRVU5vUXl4dlFrRkJVU3hIUVVGSExGVkJRVlVzUTBGQlF5eFJRVUZSTEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF6dEJRVU12UXl4blFrRkJTU3hSUVVGUkxFZEJRVWNzUjBGQlJ5eEZRVUZGTzBGQlEyaENMR3RDUVVGRkxFZEJRVWNzVVVGQlVTeERRVUZETzJGQlEycENMRTFCUVUwN1FVRkRTQ3hyUWtGQlJTeEhRVUZITEZGQlFWRXNRMEZCUXp0aFFVTnFRanRUUVVOS0xGRkJRVkVzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4UlFVRlJMRU5CUVVNc1IwRkJSeXh4UWtGQmNVSXNTVUZCU1N4RlFVRkZMRU5CUVVNc1IwRkJSeXd3UWtGQk1FSXNSVUZCUlRzN1FVRkZla1lzWlVGQlR5eFJRVUZSTEVOQlFVTTdTMEZEYmtJN1VVRkZSQ3h2UWtGQmIwSXNSMEZCUnl4VlFVRlZMRVZCUVVVc1JVRkJSU3hQUVVGUExFVkJRVVU3UVVGRE1VTXNXVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJRenRaUVVOTUxGbEJRVmtzUjBGQlJ5eEhRVUZITzFsQlEyeENMRkZCUVZFc1EwRkJRenM3UVVGRllpeGxRVUZQTEVOQlFVTXNSMEZCUnl4cFFrRkJhVUlzUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlR0QlFVTXZRaXgzUWtGQldTeEhRVUZITEZGQlFWRXNRMEZCUXl4UFFVRlBMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZET3p0QlFVVXpReXhuUWtGQlNTeFpRVUZaTEV0QlFVc3NSMEZCUnl4RlFVRkZPMEZCUTNSQ0xIVkNRVUZQTEU5QlFVOHNRMEZCUXp0aFFVTnNRanM3UVVGRlJDeHZRa0ZCVVN4SFFVRkhMRlZCUVZVc1EwRkJReXhQUVVGUExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJRenRCUVVNNVF5eHRRa0ZCVHl4SlFVRkpMRkZCUVZFc1IwRkJSeXhaUVVGWkxFTkJRVU03VTBGRGRFTTdPMEZCUlVRc1pVRkJUeXhQUVVGUExFTkJRVU03UzBGRGJFSTdVVUZIUkN4blFrRkJaMElzUjBGQlJ5eFpRVUZaTzBGQlF6TkNMR0ZCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4dFFrRkJiVUlzUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlR0QlFVTXhReXgzUWtGQldTeERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRlZCUVZVc1EwRkJReXhEUVVGRExFZEJRVWNzYTBKQlFXdENMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETzFOQlEyeEZPMHRCUTBvN1VVRkhSQ3hSUVVGUkxFZEJRVWNzVlVGQlZTeEZRVUZGTEVWQlFVVTdRVUZEY2tJc1dVRkJTU3hoUVVGaExFZEJRVWNzUjBGQlJ6dFpRVU51UWl4aFFVRmhMRWRCUVVjc1EwRkJRenRaUVVOcVFpeFZRVUZWTEVkQlFVY3NiVUpCUVcxQ0xFZEJRVWNzUTBGQlF6dFpRVU53UXl4SlFVRkpMRWRCUVVjc1IwRkJSenRaUVVOV0xGTkJRVk1zUjBGQlJ5eEhRVUZITzFsQlEyWXNXVUZCV1N4SFFVRkhMRWRCUVVjc1EwRkJRenM3UVVGRmRrSXNaVUZCVHl4aFFVRmhMRWxCUVVrc1ZVRkJWU3hKUVVGSkxGbEJRVmtzUTBGQlF5eGhRVUZoTEVOQlFVTXNTVUZCU1N4RlFVRkZMRVZCUVVVc1JVRkJSU3hoUVVGaExFVkJRVVU3UVVGRGRFWXNlVUpCUVdFc1NVRkJTU3hyUWtGQmEwSXNRMEZCUXp0VFFVTjJRenM3UVVGRlJDeFZRVUZGTEdGQlFXRXNRMEZCUXpzN1FVRkZhRUlzV1VGQlNTeEhRVUZITEVOQlFVTXNSVUZCUlN4SFFVRkhMRmxCUVZrc1EwRkJReXhoUVVGaExFTkJRVU1zUTBGQlFTeEpRVUZMTEZsQlFWa3NRMEZCUXl4aFFVRmhMRWRCUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzV1VGQldTeERRVUZETEdGQlFXRXNRMEZCUXl4RFFVRkJMRUZCUVVNc1EwRkJRenRCUVVNeFJ5eHBRa0ZCVXl4SFFVRkhMR0ZCUVdFc1IwRkJSeXhKUVVGSkxFZEJRVWNzYTBKQlFXdENMRU5CUVVNN08wRkJSWFJFTEc5Q1FVRlpMRWRCUVVjc1VVRkJVU3hEUVVGRExGTkJRVk1zUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRPenM3UVVGQlF5eEJRVWMzUXl4WlFVRkpMRmxCUVZrc1NVRkJTU3huUWtGQlowSXNSVUZCUlR0QlFVTnNReXh0UWtGQlR5eHZRa0ZCYjBJc1EwRkJReXhGUVVGRkxFVkJRVVVzVTBGQlV5eERRVUZET3p0QlFVRkRMRk5CUlRsRExFMUJRVTBzU1VGQlNTeFpRVUZaTEV0QlFVc3NSMEZCUnl4RlFVRkZPMEZCUXpkQ0xIVkNRVUZQTEZOQlFWTTdPMEZCUVVNc1lVRkZjRUlzVFVGQlRUdEJRVU5JTERKQ1FVRlBMR1ZCUVdVc1EwRkJReXhGUVVGRkxFVkJRVVVzWVVGQllTeEZRVUZGTEdGQlFXRXNSMEZCUnl4clFrRkJhMElzUTBGQlF5eERRVUZETzJsQ1FVTnFSanRMUVVOS08xRkJSVVFzVlVGQlZTeEhRVUZITEZsQlFWazdRVUZEY2tJc2IwSkJRVmtzUjBGQlJ5eEpRVUZKTEVOQlFVTTdRVUZEY0VJc1dVRkJTU3hIUVVGSExFbEJRVWtzUjBGQlJ5eEpRVUZKTEVkQlFVY3NTVUZCU1N4SFFVRkhMRVZCUVVVN1FVRkRNVUlzTkVKQlFXZENMRVZCUVVVc1EwRkJRenRUUVVOMFFqdExRVU5LT3pzN096czdPMEZCVDBRc1MwRkJReXhIUVVGSExGVkJRVlVzUlVGQlJTeEZRVUZGTzBGQlEyUXNXVUZCU1N4WFFVRlhMRU5CUVVNN08wRkJSV2hDTEZsQlFVa3NRMEZCUXl4WlFVRlpMRVZCUVVVN1FVRkRaaXh6UWtGQlZTeEZRVUZGTEVOQlFVTTdVMEZEYUVJN096dEJRVUZCTEVGQlIwUXNXVUZCU1N4SFFVRkhMRXRCUVVzc1IwRkJSeXhKUVVGSkxFZEJRVWNzUzBGQlN5eEhRVUZITEVWQlFVVTdRVUZETlVJc2RVSkJRVmNzUjBGQlJ5eEZRVUZGT3pzN1FVRkJReXhUUVVkd1FpeE5RVUZOTEVsQlFVa3NSVUZCUlN4TFFVRkxMRU5CUVVNc1JVRkJSVHRCUVVOcVFpd3lRa0ZCVnl4SFFVRkhMRU5CUVVNN096dEJRVUZETEdGQlIyNUNMRTFCUVUwc1NVRkJTU3hGUVVGRkxFdEJRVXNzUTBGQlF5eEZRVUZGTzBGQlEycENMQ3RDUVVGWExFZEJRVWNzUTBGQlF5eERRVUZETzJsQ1FVVnVRaXhOUVVGTk8wRkJRMGdzSzBKQlFWY3NSMEZCUnl4VlFVRlZMRU5CUVVNc1VVRkJVU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJRenRwUWtGRGNFUTdPMEZCUlVRc1pVRkJUeXhYUVVGWExFTkJRVU03UzBGRGRFSXNRMEZCUXpzN1FVRkZSaXhYUVVGUExFTkJRVU1zUTBGQlF6dERRVU5vUWl4RFFVRkRPenRCUVVWT0xFMUJRVTBzUTBGQlF5eFBRVUZQTEVkQlFVY3NUVUZCVFN4RFFVRkRJaXdpWm1sc1pTSTZJa0psZW1sbGNpNXFjeUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWk4cVhHNGdJQ0FnUW1WNmFXVnlJR1oxYm1OMGFXOXVJR2RsYm1WeVlYUnZjbHh1SUNBZ0lDQWdJQ0JjYmlBZ0lDQkhZY09yZEdGdUlGSmxibUYxWkdWaGRTZHpJRUpsZW1sbGNrVmhjMmx1WjF4dUlDQWdJR2gwZEhCek9pOHZaMmwwYUhWaUxtTnZiUzluY21VdlltVjZhV1Z5TFdWaGMybHVaeTlpYkc5aUwyMWhjM1JsY2k5cGJtUmxlQzVxY3lBZ1hHNGdJQ0FnYUhSMGNITTZMeTluYVhSb2RXSXVZMjl0TDJkeVpTOWlaWHBwWlhJdFpXRnphVzVuTDJKc2IySXZiV0Z6ZEdWeUwweEpRMFZPVTBWY2JpQWdJQ0JaYjNVbmNtVWdZU0JvWlhKdlhHNGdJQ0FnWEc0Z0lDQWdWWE5sWEc0Z0lDQWdYRzRnSUNBZ0lDQWdJSFpoY2lCbFlYTmxUM1YwSUQwZ2JtVjNJRUpsZW1sbGNpZ3VNVGNzTGpZM0xDNDRNeXd1TmpjcExGeHVJQ0FnSUNBZ0lDQWdJQ0FnZUNBOUlHVmhjMlZQZFhRb01DNDFLVHNnTHk4Z2NtVjBkWEp1Y3lBd0xqWXlOeTR1TGx4dUtpOWNibHdpZFhObElITjBjbWxqZEZ3aU8xeHVYRzUyWVhJZ1RrVlhWRTlPWDBsVVJWSkJWRWxQVGxNZ1BTQTRMRnh1SUNBZ0lFNUZWMVJQVGw5TlNVNWZVMHhQVUVVZ1BTQXdMakF3TVN4Y2JpQWdJQ0JUVlVKRVNWWkpVMGxQVGw5UVVrVkRTVk5KVDA0Z1BTQXdMakF3TURBd01ERXNYRzRnSUNBZ1UxVkNSRWxXU1ZOSlQwNWZUVUZZWDBsVVJWSkJWRWxQVGxNZ1BTQXhNQ3hjYmlBZ0lDQkxYMU5RVEVsT1JWOVVRVUpNUlY5VFNWcEZJRDBnTVRFc1hHNGdJQ0FnUzE5VFFVMVFURVZmVTFSRlVGOVRTVnBGSUQwZ01TNHdJQzhnS0V0ZlUxQk1TVTVGWDFSQlFreEZYMU5KV2tVZ0xTQXhMakFwTEZ4dUlDQWdJRVpNVDBGVVh6TXlYMU5WVUZCUFVsUkZSQ0E5SUNoMGVYQmxiMllnUm14dllYUXpNa0Z5Y21GNUlDRTlQU0FuZFc1a1pXWnBibVZrSnlrc1hHNGdJQ0FnWEc0Z0lDQWdZU0E5SUdaMWJtTjBhVzl1SUNoaE1Td2dZVElwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SURFdU1DQXRJRE11TUNBcUlHRXlJQ3NnTXk0d0lDb2dZVEU3WEc0Z0lDQWdmU3hjYmlBZ0lDQmNiaUFnSUNCaUlEMGdablZ1WTNScGIyNGdLR0V4TENCaE1pa2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdNeTR3SUNvZ1lUSWdMU0EyTGpBZ0tpQmhNVHRjYmlBZ0lDQjlMRnh1SUNBZ0lGeHVJQ0FnSUdNZ1BTQm1kVzVqZEdsdmJpQW9ZVEVwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SURNdU1DQXFJR0V4TzF4dUlDQWdJSDBzWEc1Y2JpQWdJQ0JuWlhSVGJHOXdaU0E5SUdaMWJtTjBhVzl1SUNoMExDQmhNU3dnWVRJcElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlETXVNQ0FxSUdFb1lURXNJR0V5S1NBcUlIUWdLaUIwSUNzZ01pNHdJQ29nWWloaE1Td2dZVElwSUNvZ2RDQXJJR01vWVRFcE8xeHVJQ0FnSUgwc1hHNWNiaUFnSUNCallXeGpRbVY2YVdWeUlEMGdablZ1WTNScGIyNGdLSFFzSUdFeExDQmhNaWtnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnS0NoaEtHRXhMQ0JoTWlrZ0tpQjBJQ3NnWWloaE1Td2dZVElwS1NBcUlIUWdLeUJqS0dFeEtTa2dLaUIwTzF4dUlDQWdJSDBzWEc0Z0lDQWdYRzRnSUNBZ0x5cGNiaUFnSUNBZ0lDQWdRbVY2YVdWeUlHTnZibk4wY25WamRHOXlYRzRnSUNBZ0tpOWNiaUFnSUNCQ1pYcHBaWElnUFNCbWRXNWpkR2x2YmlBb2JWZ3hMQ0J0V1RFc0lHMVlNaXdnYlZreUtTQjdYRzRnSUNBZ0lDQWdJSFpoY2lCellXMXdiR1ZXWVd4MVpYTWdQU0JHVEU5QlZGOHpNbDlUVlZCUVQxSlVSVVFnUHlCdVpYY2dSbXh2WVhRek1rRnljbUY1S0V0ZlUxQk1TVTVGWDFSQlFreEZYMU5KV2tVcElEb2dibVYzSUVGeWNtRjVLRXRmVTFCTVNVNUZYMVJCUWt4RlgxTkpXa1VwTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdYM0J5WldOdmJYQjFkR1ZrSUQwZ1ptRnNjMlVzWEc0Z0lDQWdYRzRnSUNBZ0lDQWdJQ0FnSUNCaWFXNWhjbmxUZFdKa2FYWnBaR1VnUFNCbWRXNWpkR2x2YmlBb1lWZ3NJR0ZCTENCaFFpa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFpoY2lCamRYSnlaVzUwV0N3Z1kzVnljbVZ1ZEZRc0lHa2dQU0F3TzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1pHOGdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamRYSnlaVzUwVkNBOUlHRkJJQ3NnS0dGQ0lDMGdZVUVwSUM4Z01pNHdPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamRYSnlaVzUwV0NBOUlHTmhiR05DWlhwcFpYSW9ZM1Z5Y21WdWRGUXNJRzFZTVN3Z2JWZ3lLU0F0SUdGWU8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb1kzVnljbVZ1ZEZnZ1BpQXdMakFwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdGQ0lEMGdZM1Z5Y21WdWRGUTdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JoUVNBOUlHTjFjbkpsYm5SVU8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlNCM2FHbHNaU0FvVFdGMGFDNWhZbk1vWTNWeWNtVnVkRmdwSUQ0Z1UxVkNSRWxXU1ZOSlQwNWZVRkpGUTBsVFNVOU9JQ1ltSUNzcmFTQThJRk5WUWtSSlZrbFRTVTlPWDAxQldGOUpWRVZTUVZSSlQwNVRLVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJqZFhKeVpXNTBWRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMHNYRzRnSUNBZ0lDQWdJRnh1SUNBZ0lDQWdJQ0FnSUNBZ2JtVjNkRzl1VW1Gd2FITnZia2wwWlhKaGRHVWdQU0JtZFc1amRHbHZiaUFvWVZnc0lHRkhkV1Z6YzFRcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjJZWElnYVNBOUlEQXNYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOMWNuSmxiblJUYkc5d1pTQTlJREF1TUN4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZM1Z5Y21WdWRGZzdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdabTl5SUNnN0lHa2dQQ0JPUlZkVVQwNWZTVlJGVWtGVVNVOU9VenNnS3l0cEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOMWNuSmxiblJUYkc5d1pTQTlJR2RsZEZOc2IzQmxLR0ZIZFdWemMxUXNJRzFZTVN3Z2JWZ3lLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoamRYSnlaVzUwVTJ4dmNHVWdQVDA5SURBdU1Da2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlHRkhkV1Z6YzFRN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR04xY25KbGJuUllJRDBnWTJGc1kwSmxlbWxsY2loaFIzVmxjM05VTENCdFdERXNJRzFZTWlrZ0xTQmhXRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1lVZDFaWE56VkNBdFBTQmpkWEp5Wlc1MFdDQXZJR04xY25KbGJuUlRiRzl3WlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUdGSGRXVnpjMVE3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlMRnh1SUNBZ0lDQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnSUNBZ0lHTmhiR05UWVcxd2JHVldZV3gxWlhNZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWm05eUlDaDJZWElnYVNBOUlEQTdJR2tnUENCTFgxTlFURWxPUlY5VVFVSk1SVjlUU1ZwRk95QXJLMmtwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjMkZ0Y0d4bFZtRnNkV1Z6VzJsZElEMGdZMkZzWTBKbGVtbGxjaWhwSUNvZ1MxOVRRVTFRVEVWZlUxUkZVRjlUU1ZwRkxDQnRXREVzSUcxWU1pazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTeGNiaUFnSUNBZ0lDQWdJQ0FnSUZ4dUlDQWdJQ0FnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJQ0FnSUNCblpYUlVSbTl5V0NBOUlHWjFibU4wYVc5dUlDaGhXQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhaaGNpQnBiblJsY25aaGJGTjBZWEowSUQwZ01DNHdMRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamRYSnlaVzUwVTJGdGNHeGxJRDBnTVN4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdiR0Z6ZEZOaGJYQnNaU0E5SUV0ZlUxQk1TVTVGWDFSQlFreEZYMU5KV2tVZ0xTQXhMRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCa2FYTjBJRDBnTUM0d0xGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JuZFdWemMwWnZjbFFnUFNBd0xqQXNYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsdWFYUnBZV3hUYkc5d1pTQTlJREF1TUR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdabTl5SUNnN0lHTjFjbkpsYm5SVFlXMXdiR1VnSVQwZ2JHRnpkRk5oYlhCc1pTQW1KaUJ6WVcxd2JHVldZV3gxWlhOYlkzVnljbVZ1ZEZOaGJYQnNaVjBnUEQwZ1lWZzdJQ3NyWTNWeWNtVnVkRk5oYlhCc1pTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcGJuUmxjblpoYkZOMFlYSjBJQ3M5SUV0ZlUwRk5VRXhGWDFOVVJWQmZVMGxhUlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0xTMWpkWEp5Wlc1MFUyRnRjR3hsTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdScGMzUWdQU0FvWVZnZ0xTQnpZVzF3YkdWV1lXeDFaWE5iWTNWeWNtVnVkRk5oYlhCc1pWMHBJQzhnS0hOaGJYQnNaVlpoYkhWbGMxdGpkWEp5Wlc1MFUyRnRjR3hsS3pGZElDMGdjMkZ0Y0d4bFZtRnNkV1Z6VzJOMWNuSmxiblJUWVcxd2JHVmRLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JuZFdWemMwWnZjbFFnUFNCcGJuUmxjblpoYkZOMFlYSjBJQ3NnWkdsemRDQXFJRXRmVTBGTlVFeEZYMU5VUlZCZlUwbGFSVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwYm1sMGFXRnNVMnh2Y0dVZ1BTQm5aWFJUYkc5d1pTaG5kV1Z6YzBadmNsUXNJRzFZTVN3Z2JWZ3lLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0F2THlCSlppQnpiRzl3WlNCcGN5Qm5jbVZoZEdWeUlIUm9ZVzRnYldsdVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLR2x1YVhScFlXeFRiRzl3WlNBK1BTQk9SVmRVVDA1ZlRVbE9YMU5NVDFCRktTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJ1WlhkMGIyNVNZWEJvYzI5dVNYUmxjbUYwWlNoaFdDd2daM1ZsYzNOR2IzSlVLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0F2THlCVGJHOXdaU0JwY3lCbGNYVmhiQ0IwYnlCdGFXNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2FXWWdLR2x1YVhScFlXeFRiRzl3WlNBOVBUMGdNQzR3S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQm5kV1Z6YzBadmNsUTdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdMeThnVTJ4dmNHVWdhWE1nYkdWemN5QjBhR0Z1SUcxcGJseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQmlhVzVoY25sVGRXSmthWFpwWkdVb1lWZ3NJR2x1ZEdWeWRtRnNVM1JoY25Rc0lHbHVkR1Z5ZG1Gc1UzUmhjblFnS3lCTFgxTkJUVkJNUlY5VFZFVlFYMU5KV2tVcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUgwc1hHNGdJQ0FnSUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnSUNBZ0lIQnlaV052YlhCMWRHVWdQU0JtZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1gzQnlaV052YlhCMWRHVmtJRDBnZEhKMVpUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvYlZneElDRTlJRzFaTVNCOGZDQnRXRElnSVQwZ2JWa3lLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTmhiR05UWVcxd2JHVldZV3gxWlhNb0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnSUNCOUxGeHVJQ0FnSUNBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUNBZ0lDQXZLbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRWRsYm1WeVlYUmxaQ0JtZFc1amRHbHZibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRkpsZEhWeWJuTWdkbUZzZFdVZ01DMHhJR0poYzJWa0lHOXVJRmhjYmlBZ0lDQWdJQ0FnSUNBZ0lDb3ZYRzRnSUNBZ0lDQWdJQ0FnSUNCbUlEMGdablZ1WTNScGIyNGdLR0ZZS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RtRnlJSEpsZEhWeWJsWmhiSFZsTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLQ0ZmY0hKbFkyOXRjSFYwWldRcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY0hKbFkyOXRjSFYwWlNncE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXZMeUJKWmlCc2FXNWxZWElnWjNKaFpHbGxiblFzSUhKbGRIVnliaUJZSUdGeklGUmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvYlZneElEMDlQU0J0V1RFZ0ppWWdiVmd5SUQwOVBTQnRXVElwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdVZtRnNkV1VnUFNCaFdEdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1NXWWdZWFFnYzNSaGNuUXNJSEpsZEhWeWJpQXdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmU0JsYkhObElHbG1JQ2hoV0NBOVBUMGdNQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY201V1lXeDFaU0E5SURBN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzh2SUVsbUlHRjBJR1Z1WkN3Z2NtVjBkWEp1SURGY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOUlHVnNjMlVnYVdZZ0tHRllJRDA5UFNBeEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhKbGRIVnlibFpoYkhWbElEMGdNVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmxaaGJIVmxJRDBnWTJGc1kwSmxlbWxsY2loblpYUlVSbTl5V0NoaFdDa3NJRzFaTVN3Z2JWa3lLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJSEpsZEhWeWJsWmhiSFZsTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lGeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJR1k3WEc0Z0lDQWdmVHRjYmx4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCQ1pYcHBaWEk3SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy90d2Vlbi9CZXppZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2xvb3AgPSByZXF1aXJlKCcuL2xvb3AnKTtcblxudmFyIGxvb3AgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfbG9vcCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBQcm9jZXNzID0gKGZ1bmN0aW9uICgpIHtcbiAgICAvKlxuICAgICAgICBbb2JqZWN0XTogU3RlcCBmdW5jdGlvbnNcbiAgICAgICAgW2Jvb2xlYW5dIChvcHRpb25hbCk6IElzIFByb2Nlc3MgbGF6eT9cbiAgICAqL1xuXG4gICAgZnVuY3Rpb24gUHJvY2VzcyhzdGVwcywgaXNMYXp5KSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQcm9jZXNzKTtcblxuICAgICAgICAvLyBBc3NpZ24gZWFjaCBzdGVwIG1ldGhvZCB0byB0aGlzIHByb2Nlc3NcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHN0ZXBzKSB7XG4gICAgICAgICAgICBpZiAoc3RlcHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHRoaXNba2V5XSA9IHN0ZXBzW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlzTGF6eSA9IGlzTGF6eSB8fCBmYWxzZTtcbiAgICAgICAgdGhpcy5pZCA9IGxvb3AuZ2V0UHJvY2Vzc0lkKCk7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBQcm9jZXNzLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgbG9vcC5hY3RpdmF0ZSh0aGlzLmlkLCB0aGlzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIFByb2Nlc3MucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGxvb3AuZGVhY3RpdmF0ZSh0aGlzLmlkKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIFByb2Nlc3MucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbiBvbmNlKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMuY2xlYW51cCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLnN0b3AoKTtcbiAgICAgICAgICAgIF90aGlzLmNsZWFudXAgPSB1bmRlZmluZWQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5zdGFydCgpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICByZXR1cm4gUHJvY2Vzcztcbn0pKCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFByb2Nlc3M7XG47XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnlZeTlRY205alpYTnpMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096dEpRVUZaTEVsQlFVazdPenM3T3p0SlFVVkxMRTlCUVU4N096czdPenRCUVV0NFFpeGhRVXhwUWl4UFFVRlBMRU5CUzFvc1MwRkJTeXhGUVVGRkxFMUJRVTBzUlVGQlJUczRRa0ZNVml4UFFVRlBPenM3UVVGUGNFSXNZVUZCU3l4SlFVRkpMRWRCUVVjc1NVRkJTU3hMUVVGTExFVkJRVVU3UVVGRGJrSXNaMEpCUVVrc1MwRkJTeXhEUVVGRExHTkJRV01zUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlR0QlFVTXpRaXh2UWtGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dGhRVU14UWp0VFFVTktPenRCUVVWRUxGbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NUVUZCVFN4SlFVRkpMRXRCUVVzc1EwRkJRenRCUVVNNVFpeFpRVUZKTEVOQlFVTXNSVUZCUlN4SFFVRkhMRWxCUVVrc1EwRkJReXhaUVVGWkxFVkJRVVVzUTBGQlF6dEJRVU01UWl4WlFVRkpMRU5CUVVNc1VVRkJVU3hIUVVGSExFdEJRVXNzUTBGQlF6dExRVU42UWpzN1FVRm9RbWRDTEZkQlFVOHNWMEZyUW5oQ0xFdEJRVXNzYjBKQlFVYzdRVUZEU2l4WlFVRkpMRU5CUVVNc1VVRkJVU3hIUVVGSExFbEJRVWtzUTBGQlF6dEJRVU55UWl4WlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNN1FVRkROMElzWlVGQlR5eEpRVUZKTEVOQlFVTTdTMEZEWmpzN1FVRjBRbWRDTEZkQlFVOHNWMEYzUW5oQ0xFbEJRVWtzYlVKQlFVYzdRVUZEU0N4WlFVRkpMRU5CUVVNc1VVRkJVU3hIUVVGSExFdEJRVXNzUTBGQlF6dEJRVU4wUWl4WlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXp0QlFVTjZRaXhsUVVGUExFbEJRVWtzUTBGQlF6dExRVU5tT3p0QlFUVkNaMElzVjBGQlR5eFhRVGhDZUVJc1NVRkJTU3h0UWtGQlJ6czdPMEZCUTBnc1dVRkJTU3hEUVVGRExFOUJRVThzUjBGQlJ5eFpRVUZOTzBGQlEycENMR3RDUVVGTExFbEJRVWtzUlVGQlJTeERRVUZETzBGQlExb3NhMEpCUVVzc1QwRkJUeXhIUVVGSExGTkJRVk1zUTBGQlF6dFRRVU0xUWl4RFFVRkRPenRCUVVWR0xGbEJRVWtzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXpzN1FVRkZZaXhsUVVGUExFbEJRVWtzUTBGQlF6dExRVU5tT3p0WFFYWkRaMElzVDBGQlR6czdPMnRDUVVGUUxFOUJRVTg3UVVGM1F6TkNMRU5CUVVNaUxDSm1hV3hsSWpvaVVISnZZMlZ6Y3k1cWN5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQXFJR0Z6SUd4dmIzQWdabkp2YlNBbkxpOXNiMjl3Snp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1kyeGhjM01nVUhKdlkyVnpjeUI3WEc0Z0lDQWdMeXBjYmlBZ0lDQWdJQ0FnVzI5aWFtVmpkRjA2SUZOMFpYQWdablZ1WTNScGIyNXpYRzRnSUNBZ0lDQWdJRnRpYjI5c1pXRnVYU0FvYjNCMGFXOXVZV3dwT2lCSmN5QlFjbTlqWlhOeklHeGhlbmsvWEc0Z0lDQWdLaTljYmlBZ0lDQmpiMjV6ZEhKMVkzUnZjaWh6ZEdWd2N5d2dhWE5NWVhwNUtTQjdYRzRnSUNBZ0lDQWdJQzh2SUVGemMybG5iaUJsWVdOb0lITjBaWEFnYldWMGFHOWtJSFJ2SUhSb2FYTWdjSEp2WTJWemMxeHVJQ0FnSUNBZ0lDQm1iM0lnS0d4bGRDQnJaWGtnYVc0Z2MzUmxjSE1wSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoemRHVndjeTVvWVhOUGQyNVFjbTl3WlhKMGVTaHJaWGtwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjMXRyWlhsZElEMGdjM1JsY0hOYmEyVjVYVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXVhWE5NWVhwNUlEMGdhWE5NWVhwNUlIeDhJR1poYkhObE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1sa0lEMGdiRzl2Y0M1blpYUlFjbTlqWlhOelNXUW9LVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXBjMEZqZEdsMlpTQTlJR1poYkhObE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhOMFlYSjBLQ2tnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbWx6UVdOMGFYWmxJRDBnZEhKMVpUdGNiaUFnSUNBZ0lDQWdiRzl2Y0M1aFkzUnBkbUYwWlNoMGFHbHpMbWxrTENCMGFHbHpLVHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYzNSdmNDZ3BJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXBjMEZqZEdsMlpTQTlJR1poYkhObE8xeHVJQ0FnSUNBZ0lDQnNiMjl3TG1SbFlXTjBhWFpoZEdVb2RHaHBjeTVwWkNrN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHOXVZMlVvS1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WTJ4bFlXNTFjQ0E5SUNncElEMCtJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11YzNSdmNDZ3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVqYkdWaGJuVndJRDBnZFc1a1pXWnBibVZrTzF4dUlDQWdJQ0FnSUNCOU8xeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdWMzUmhjblFvS1R0Y2JseHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjenRjYmlBZ0lDQjlYRzU5TzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9mcmFtZXN5bmMvbGliL1Byb2Nlc3MuanNcbiAqKiBtb2R1bGUgaWQgPSAxNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5nZXRQcm9jZXNzSWQgPSBnZXRQcm9jZXNzSWQ7XG5leHBvcnRzLmFjdGl2YXRlID0gYWN0aXZhdGU7XG5leHBvcnRzLmRlYWN0aXZhdGUgPSBkZWFjdGl2YXRlO1xuZXhwb3J0cy5zZXRTdGVwcyA9IHNldFN0ZXBzO1xuXG52YXIgX3RpbWVyID0gcmVxdWlyZSgnLi9pbmMvdGltZXInKTtcblxudmFyIF90aW1lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90aW1lcik7XG5cbnZhciBfdGljayA9IHJlcXVpcmUoJy4vaW5jL3RpY2snKTtcblxudmFyIF90aWNrMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RpY2spO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgcHJvY2Vzc09yZGVyID0gW3sgc3RlcDogJ2ZyYW1lU3RhcnQnIH0sIHsgc3RlcDogJ3VwZGF0ZScgfSwgeyBzdGVwOiAnd2lsbFJlbmRlcicsIGRlY2lkZVJlbmRlcjogdHJ1ZSB9LCB7IHN0ZXA6ICdwcmVSZW5kZXInLCBpc1JlbmRlcjogdHJ1ZSB9LCB7IHN0ZXA6ICdyZW5kZXInLCBpc1JlbmRlcjogdHJ1ZSB9LCB7IHN0ZXA6ICdwb3N0UmVuZGVyJywgaXNSZW5kZXI6IHRydWUgfSwgeyBzdGVwOiAnZnJhbWVFbmQnIH0sIHsgc3RlcDogJ2NsZWFudXAnIH1dO1xudmFyIG51bVByb2Nlc3NTdGVwcyA9IHByb2Nlc3NPcmRlci5sZW5ndGg7XG5cbi8vIFtpbnRdOiBQcm9jZXNzIElELCBpbmNyZW1lbnRlZCBmb3IgZWFjaCBuZXcgcHJvY2Vzc1xudmFyIGN1cnJlbnRQcm9jZXNzSWQgPSAwO1xuXG4vLyBbaW50XTogTnVtYmVyIG9mIHJ1bm5pbmcgcHJvY2Vzc2VzXG52YXIgcnVubmluZ0NvdW50ID0gMDtcblxuLy8gW2ludF06IE51bWJlciBvZiBydW5uaW5nIG5vbi1iYWNrZ3JvdW5kIHByb2Nlc3Nlc1xudmFyIGFjdGl2ZUNvdW50ID0gMDtcblxuLy8gW2FycmF5XTogQXJyYXkgb2YgYWN0aXZlIHByb2Nlc3MgSURzXG52YXIgcnVubmluZ0lkcyA9IFtdO1xuXG4vLyBbb2JqZWN0XTogTWFwIG9mIGFjdGl2ZSBwcm9jZXNzZXNcbnZhciBydW5uaW5nUHJvY2Vzc2VzID0ge307XG5cbi8vIFthcnJheV06IEFycmF5IG9mIHByb2Nlc3MgSURzIHF1ZXVlZCBmb3IgZGVhY3RpdmF0aW9uXG52YXIgZGVhY3RpdmF0ZVF1ZXVlID0gW107XG5cbi8vIFtib29sZWFuXTogSXMgbG9vcCBydW5uaW5nP1xudmFyIGlzUnVubmluZyA9IGZhbHNlO1xuXG4vKlxuICAgIFVwZGF0ZSBydW5uaW5nXG5cbiAgICBbYm9vbGVhbl06IGB0cnVlYCB0byBhZGRcbiAgICBbYm9vbGVhbl06IGB0cnVlYCBpZiBsYXp5XG4qL1xuZnVuY3Rpb24gdXBkYXRlQ291bnQoYWRkLCBpc0xhenkpIHtcbiAgICB2YXIgbW9kaWZ5ID0gYWRkID8gMSA6IC0xO1xuXG4gICAgcnVubmluZ0NvdW50ICs9IG1vZGlmeTtcblxuICAgIGlmICghaXNMYXp5KSB7XG4gICAgICAgIGFjdGl2ZUNvdW50ICs9IG1vZGlmeTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHB1cmdlKCkge1xuICAgIHZhciBxdWV1ZUxlbmd0aCA9IGRlYWN0aXZhdGVRdWV1ZS5sZW5ndGg7XG5cbiAgICB3aGlsZSAocXVldWVMZW5ndGgtLSkge1xuICAgICAgICB2YXIgaWRUb0RlbGV0ZSA9IGRlYWN0aXZhdGVRdWV1ZVtxdWV1ZUxlbmd0aF07XG4gICAgICAgIHZhciBhY3RpdmVJZEluZGV4ID0gcnVubmluZ0lkcy5pbmRleE9mKGlkVG9EZWxldGUpO1xuXG4gICAgICAgIC8vIElmIHByb2Nlc3MgaXMgYWN0aXZlLCBkZWFjdGl2YXRlXG4gICAgICAgIGlmIChhY3RpdmVJZEluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIHJ1bm5pbmdJZHMuc3BsaWNlKGFjdGl2ZUlkSW5kZXgsIDEpO1xuXG4gICAgICAgICAgICB1cGRhdGVDb3VudChmYWxzZSwgcnVubmluZ1Byb2Nlc3Nlc1tpZFRvRGVsZXRlXS5pc0xhenkpO1xuXG4gICAgICAgICAgICBkZWxldGUgcnVubmluZ1Byb2Nlc3Nlc1tpZFRvRGVsZXRlXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRlYWN0aXZhdGVRdWV1ZSA9IFtdO1xufVxuXG4vKlxuICAgIFt0aW1lc3RhbXBdOiBGcmFtZSB0aW1lc3RhbXBcbiAgICBbaW50XTogVGltZSBzaW5jZSBsYXN0IGZyYW1lXG4qL1xuZnVuY3Rpb24gZmlyZUFsbChmcmFtZVN0YW1wLCBlbGFwc2VkKSB7XG4gICAgdmFyIG1ldGhvZCA9IHt9O1xuICAgIHZhciBtZXRob2ROYW1lID0gJyc7XG4gICAgdmFyIGlzUmVuZGVyU3RlcCA9IGZhbHNlO1xuICAgIHZhciBwcm9jZXNzID0gdW5kZWZpbmVkO1xuICAgIHZhciByZXN1bHQgPSB1bmRlZmluZWQ7XG5cbiAgICBwdXJnZSgpO1xuXG4gICAgdmFyIG51bVJ1bm5pbmcgPSBydW5uaW5nQ291bnQ7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bVByb2Nlc3NTdGVwczsgaSsrKSB7XG4gICAgICAgIG1ldGhvZCA9IHByb2Nlc3NPcmRlcltpXTtcbiAgICAgICAgbWV0aG9kTmFtZSA9IG1ldGhvZC5zdGVwO1xuICAgICAgICBpc1JlbmRlclN0ZXAgPSBtZXRob2QuaXNSZW5kZXIgPyB0cnVlIDogZmFsc2U7XG5cbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG51bVJ1bm5pbmc7IF9pKyspIHtcbiAgICAgICAgICAgIHByb2Nlc3MgPSBydW5uaW5nUHJvY2Vzc2VzW3J1bm5pbmdJZHNbX2ldXTtcblxuICAgICAgICAgICAgaWYgKHByb2Nlc3MgJiYgcHJvY2Vzc1ttZXRob2ROYW1lXSAmJiAoIWlzUmVuZGVyU3RlcCB8fCBpc1JlbmRlclN0ZXAgJiYgcHJvY2Vzcy5fcmVuZGVyID09PSB0cnVlKSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHByb2Nlc3NbbWV0aG9kTmFtZV0uY2FsbChwcm9jZXNzLCBwcm9jZXNzLCBmcmFtZVN0YW1wLCBlbGFwc2VkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG1ldGhvZC5kZWNpZGVSZW5kZXIpIHtcbiAgICAgICAgICAgICAgICBwcm9jZXNzLl9yZW5kZXIgPSBwcm9jZXNzW21ldGhvZE5hbWVdICYmIHJlc3VsdCA9PT0gZmFsc2UgPyBmYWxzZSA6IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdXJnZSgpO1xuXG4gICAgcmV0dXJuIGFjdGl2ZUNvdW50ID8gdHJ1ZSA6IGZhbHNlO1xufVxuXG4vLyBGdW5jdGlvbiB0byBmaXJlIGV2ZXJ5IGZyYW1lXG5mdW5jdGlvbiBmcmFtZSgpIHtcbiAgICAoMCwgX3RpY2syLmRlZmF1bHQpKGZ1bmN0aW9uIChmcmFtZVN0YW1wKSB7XG4gICAgICAgIGlmIChpc1J1bm5pbmcpIHtcbiAgICAgICAgICAgIGZyYW1lKCk7XG4gICAgICAgIH1cblxuICAgICAgICBfdGltZXIyLmRlZmF1bHQudXBkYXRlKGZyYW1lU3RhbXApO1xuICAgICAgICBpc1J1bm5pbmcgPSBmaXJlQWxsKGZyYW1lU3RhbXAsIF90aW1lcjIuZGVmYXVsdC5nZXRFbGFwc2VkKCkpO1xuICAgIH0pO1xufVxuXG4vLyBTdGFydCBsb29wXG5mdW5jdGlvbiBzdGFydCgpIHtcbiAgICBpZiAoIWlzUnVubmluZykge1xuICAgICAgICBfdGltZXIyLmRlZmF1bHQuc3RhcnQoKTtcbiAgICAgICAgaXNSdW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgZnJhbWUoKTtcbiAgICB9XG59XG5cbi8vIFN0b3AgbG9vcFxuZnVuY3Rpb24gc3RvcCgpIHtcbiAgICBpc1J1bm5pbmcgPSBmYWxzZTtcbn1cblxuLy8gRXhwb3J0c1xuZnVuY3Rpb24gZ2V0UHJvY2Vzc0lkKCkge1xuICAgIHJldHVybiBjdXJyZW50UHJvY2Vzc0lkKys7XG59XG5cbi8qXG4gICAgW2ludF06IFByb2Nlc3MgSUQgdG8gYWN0aXZhdGVcbiAgICBbUHJvY2Vzc106IFByb2Nlc3MgdG8gYWN0aXZhdGVcbiovXG5mdW5jdGlvbiBhY3RpdmF0ZShpZCwgcHJvY2Vzcykge1xuICAgIHZhciBxdWV1ZUluZGV4ID0gZGVhY3RpdmF0ZVF1ZXVlLmluZGV4T2YoaWQpO1xuICAgIHZhciBpc1F1ZXVlZCA9IHF1ZXVlSW5kZXggPiAtMTtcbiAgICB2YXIgaXNSdW5uaW5nID0gcnVubmluZ0lkcy5pbmRleE9mKGlkKSA+IC0xO1xuXG4gICAgLy8gUmVtb3ZlIGZyb20gZGVhY3RpdmF0ZVF1ZXVlIGlmIHF1ZXVlZFxuICAgIGlmIChpc1F1ZXVlZCkge1xuICAgICAgICBkZWFjdGl2YXRlUXVldWUuc3BsaWNlKHF1ZXVlSW5kZXgsIDEpO1xuICAgIH1cblxuICAgIC8vIEFkZCB0byBydW5uaW5nIHByb2Nlc3NlcyBhcnJheSBpZiBub3QgdGhlcmVcbiAgICBpZiAoIWlzUnVubmluZykge1xuICAgICAgICBydW5uaW5nSWRzLnB1c2goaWQpO1xuICAgICAgICBydW5uaW5nUHJvY2Vzc2VzW2lkXSA9IHByb2Nlc3M7XG5cbiAgICAgICAgdXBkYXRlQ291bnQodHJ1ZSwgcHJvY2Vzcy5pc0xhenkpO1xuICAgICAgICBzdGFydCgpO1xuICAgIH1cbn1cblxuLypcbiAgICBbaW50XTogUHJvY2VzcyBJRCB0byBkZWFjdGl2YXRlXG4qL1xuZnVuY3Rpb24gZGVhY3RpdmF0ZShpZCkge1xuICAgIGlmIChkZWFjdGl2YXRlUXVldWUuaW5kZXhPZihpZCkgPT09IC0xKSB7XG4gICAgICAgIGRlYWN0aXZhdGVRdWV1ZS5wdXNoKGlkKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNldFN0ZXBzKG5ld1Byb2Nlc3NPcmRlcikge1xuICAgIHByb2Nlc3NPcmRlciA9IG5ld1Byb2Nlc3NPcmRlcjtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOeVl5OXNiMjl3TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096dFJRWGxKWjBJc1dVRkJXU3hIUVVGYUxGbEJRVms3VVVGUldpeFJRVUZSTEVkQlFWSXNVVUZCVVR0UlFYVkNVaXhWUVVGVkxFZEJRVllzVlVGQlZUdFJRVTFXTEZGQlFWRXNSMEZCVWl4UlFVRlJPenM3T3pzN096czdPenM3UVVFelMzaENMRWxCUVVrc1dVRkJXU3hIUVVGSExFTkJRMllzUlVGQlJTeEpRVUZKTEVWQlFVVXNXVUZCV1N4RlFVRkZMRVZCUTNSQ0xFVkJRVVVzU1VGQlNTeEZRVUZGTEZGQlFWRXNSVUZCUlN4RlFVTnNRaXhGUVVGRkxFbEJRVWtzUlVGQlJTeFpRVUZaTEVWQlFVVXNXVUZCV1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hGUVVNeFF5eEZRVUZGTEVsQlFVa3NSVUZCUlN4WFFVRlhMRVZCUVVVc1VVRkJVU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEZRVU55UXl4RlFVRkZMRWxCUVVrc1JVRkJSU3hSUVVGUkxFVkJRVVVzVVVGQlVTeEZRVUZGTEVsQlFVa3NSVUZCUlN4RlFVTnNReXhGUVVGRkxFbEJRVWtzUlVGQlJTeFpRVUZaTEVWQlFVVXNVVUZCVVN4RlFVRkZMRWxCUVVrc1JVRkJSU3hGUVVOMFF5eEZRVUZGTEVsQlFVa3NSVUZCUlN4VlFVRlZMRVZCUVVVc1JVRkRjRUlzUlVGQlJTeEpRVUZKTEVWQlFVVXNVMEZCVXl4RlFVRkZMRU5CUTNSQ0xFTkJRVU03UVVGRFJpeEpRVUZOTEdWQlFXVXNSMEZCUnl4WlFVRlpMRU5CUVVNc1RVRkJUVHM3TzBGQlFVTXNRVUZITlVNc1NVRkJTU3huUWtGQlowSXNSMEZCUnl4RFFVRkRPenM3UVVGQlF5eEJRVWQ2UWl4SlFVRkpMRmxCUVZrc1IwRkJSeXhEUVVGRE96czdRVUZCUXl4QlFVZHlRaXhKUVVGSkxGZEJRVmNzUjBGQlJ5eERRVUZET3pzN1FVRkJReXhCUVVkd1FpeEpRVUZKTEZWQlFWVXNSMEZCUnl4RlFVRkZPenM3UVVGQlF5eEJRVWR3UWl4SlFVRkpMR2RDUVVGblFpeEhRVUZITEVWQlFVVTdPenRCUVVGRExFRkJSekZDTEVsQlFVa3NaVUZCWlN4SFFVRkhMRVZCUVVVN096dEJRVUZETEVGQlIzcENMRWxCUVVrc1UwRkJVeXhIUVVGSExFdEJRVXM3T3pzN096czdPMEZCUVVNc1FVRlJkRUlzVTBGQlV5eFhRVUZYTEVOQlFVTXNSMEZCUnl4RlFVRkZMRTFCUVUwc1JVRkJSVHRCUVVNNVFpeFJRVUZOTEUxQlFVMHNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZET3p0QlFVVTFRaXhuUWtGQldTeEpRVUZKTEUxQlFVMHNRMEZCUXpzN1FVRkZka0lzVVVGQlNTeERRVUZETEUxQlFVMHNSVUZCUlR0QlFVTlVMRzFDUVVGWExFbEJRVWtzVFVGQlRTeERRVUZETzB0QlEzcENPME5CUTBvN08wRkJSVVFzVTBGQlV5eExRVUZMTEVkQlFVYzdRVUZEWWl4UlFVRkpMRmRCUVZjc1IwRkJSeXhsUVVGbExFTkJRVU1zVFVGQlRTeERRVUZET3p0QlFVVjZReXhYUVVGUExGZEJRVmNzUlVGQlJTeEZRVUZGTzBGQlEyeENMRmxCUVUwc1ZVRkJWU3hIUVVGSExHVkJRV1VzUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUXp0QlFVTm9SQ3haUVVGTkxHRkJRV0VzUjBGQlJ5eFZRVUZWTEVOQlFVTXNUMEZCVHl4RFFVRkRMRlZCUVZVc1EwRkJRenM3TzBGQlFVTXNRVUZIY2tRc1dVRkJTU3hoUVVGaExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVTdRVUZEY0VJc2MwSkJRVlVzUTBGQlF5eE5RVUZOTEVOQlFVTXNZVUZCWVN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE96dEJRVVZ3UXl4MVFrRkJWeXhEUVVGRExFdEJRVXNzUlVGQlJTeG5Ra0ZCWjBJc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXpzN1FVRkZlRVFzYlVKQlFVOHNaMEpCUVdkQ0xFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTTdVMEZEZGtNN1MwRkRTanM3UVVGRlJDeHRRa0ZCWlN4SFFVRkhMRVZCUVVVc1EwRkJRenREUVVONFFqczdPenM3TzBGQlFVRXNRVUZOUkN4VFFVRlRMRTlCUVU4c1EwRkJReXhWUVVGVkxFVkJRVVVzVDBGQlR5eEZRVUZGTzBGQlEyeERMRkZCUVVrc1RVRkJUU3hIUVVGSExFVkJRVVVzUTBGQlF6dEJRVU5vUWl4UlFVRkpMRlZCUVZVc1IwRkJSeXhGUVVGRkxFTkJRVU03UVVGRGNFSXNVVUZCU1N4WlFVRlpMRWRCUVVjc1MwRkJTeXhEUVVGRE8wRkJRM3BDTEZGQlFVa3NUMEZCVHl4WlFVRkJMRU5CUVVNN1FVRkRXaXhSUVVGSkxFMUJRVTBzV1VGQlFTeERRVUZET3p0QlFVVllMRk5CUVVzc1JVRkJSU3hEUVVGRE96dEJRVVZTTEZGQlFVMHNWVUZCVlN4SFFVRkhMRmxCUVZrc1EwRkJRenM3UVVGRmFFTXNVMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEdWQlFXVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRCUVVOMFF5eGpRVUZOTEVkQlFVY3NXVUZCV1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJRM3BDTEd0Q1FVRlZMRWRCUVVjc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF6dEJRVU42UWl4dlFrRkJXU3hIUVVGSExFMUJRVTBzUTBGQlF5eFJRVUZSTEVkQlFVY3NTVUZCU1N4SFFVRkhMRXRCUVVzc1EwRkJRenM3UVVGRk9VTXNZVUZCU3l4SlFVRkpMRVZCUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUlVGQlF5eEhRVUZITEZWQlFWVXNSVUZCUlN4RlFVRkRMRVZCUVVVc1JVRkJSVHRCUVVOcVF5eHRRa0ZCVHl4SFFVRkhMR2RDUVVGblFpeERRVUZETEZWQlFWVXNRMEZCUXl4RlFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE96dEJRVVV4UXl4blFrRkJTU3hQUVVGUExFbEJRVWtzVDBGQlR5eERRVUZETEZWQlFWVXNRMEZCUXl4TFFVRkxMRU5CUVVNc1dVRkJXU3hKUVVGTExGbEJRVmtzU1VGQlNTeFBRVUZQTEVOQlFVTXNUMEZCVHl4TFFVRkxMRWxCUVVrc1EwRkJReXhCUVVGRExFVkJRVVU3UVVGRGFrY3NjMEpCUVUwc1IwRkJSeXhQUVVGUExFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1JVRkJSU3hQUVVGUExFVkJRVVVzVlVGQlZTeEZRVUZGTEU5QlFVOHNRMEZCUXl4RFFVRkRPMkZCUXpWRk96dEJRVVZFTEdkQ1FVRkpMRTFCUVUwc1EwRkJReXhaUVVGWkxFVkJRVVU3UVVGRGNrSXNkVUpCUVU4c1EwRkJReXhQUVVGUExFZEJRVWNzUVVGQlF5eFBRVUZQTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWxCUVVrc1RVRkJUU3hMUVVGTExFdEJRVXNzUjBGQlNTeExRVUZMTEVkQlFVY3NTVUZCU1N4RFFVRkRPMkZCUXpsRk8xTkJRMG83UzBGRFNqczdRVUZGUkN4VFFVRkxMRVZCUVVVc1EwRkJRenM3UVVGRlVpeFhRVUZQTEZkQlFWY3NSMEZCUnl4SlFVRkpMRWRCUVVjc1MwRkJTeXhEUVVGRE8wTkJRM0pET3pzN1FVRkJRU3hCUVVkRUxGTkJRVk1zUzBGQlN5eEhRVUZITzBGQlEySXNkMEpCUVVzc1ZVRkJReXhWUVVGVkxFVkJRVXM3UVVGRGFrSXNXVUZCU1N4VFFVRlRMRVZCUVVVN1FVRkRXQ3hwUWtGQlN5eEZRVUZGTEVOQlFVTTdVMEZEV0RzN1FVRkZSQ3gzUWtGQlRTeE5RVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNN1FVRkRla0lzYVVKQlFWTXNSMEZCUnl4UFFVRlBMRU5CUVVNc1ZVRkJWU3hGUVVGRkxHZENRVUZOTEZWQlFWVXNSVUZCUlN4RFFVRkRMRU5CUVVNN1MwRkRka1FzUTBGQlF5eERRVUZETzBOQlEwNDdPenRCUVVGQkxFRkJSMFFzVTBGQlV5eExRVUZMTEVkQlFVYzdRVUZEWWl4UlFVRkpMRU5CUVVNc1UwRkJVeXhGUVVGRk8wRkJRMW9zZDBKQlFVMHNTMEZCU3l4RlFVRkZMRU5CUVVNN1FVRkRaQ3hwUWtGQlV5eEhRVUZITEVsQlFVa3NRMEZCUXp0QlFVTnFRaXhoUVVGTExFVkJRVVVzUTBGQlF6dExRVU5ZTzBOQlEwbzdPenRCUVVGQkxFRkJSMFFzVTBGQlV5eEpRVUZKTEVkQlFVYzdRVUZEV2l4aFFVRlRMRWRCUVVjc1MwRkJTeXhEUVVGRE8wTkJRM0pDT3pzN1FVRkJRU3hCUVVkTkxGTkJRVk1zV1VGQldTeEhRVUZITzBGQlF6TkNMRmRCUVU4c1owSkJRV2RDTEVWQlFVVXNRMEZCUXp0RFFVTTNRanM3T3pzN08wRkJRVUVzUVVGTlRTeFRRVUZUTEZGQlFWRXNRMEZCUXl4RlFVRkZMRVZCUVVVc1QwRkJUeXhGUVVGRk8wRkJRMnhETEZGQlFVMHNWVUZCVlN4SFFVRkhMR1ZCUVdVc1EwRkJReXhQUVVGUExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdRVUZETDBNc1VVRkJUU3hSUVVGUkxFZEJRVWtzVlVGQlZTeEhRVUZITEVOQlFVTXNRMEZCUXl4QlFVRkRMRU5CUVVNN1FVRkRia01zVVVGQlRTeFRRVUZUTEVkQlFVa3NWVUZCVlN4RFFVRkRMRTlCUVU4c1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRVUZCUXpzN08wRkJRVU1zUVVGSGFFUXNVVUZCU1N4UlFVRlJMRVZCUVVVN1FVRkRWaXgxUWtGQlpTeERRVUZETEUxQlFVMHNRMEZCUXl4VlFVRlZMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03UzBGRGVrTTdPenRCUVVGQkxFRkJSMFFzVVVGQlNTeERRVUZETEZOQlFWTXNSVUZCUlR0QlFVTmFMR3RDUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPMEZCUTNCQ0xIZENRVUZuUWl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFOUJRVThzUTBGQlF6czdRVUZGTDBJc2JVSkJRVmNzUTBGQlF5eEpRVUZKTEVWQlFVVXNUMEZCVHl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8wRkJRMnhETEdGQlFVc3NSVUZCUlN4RFFVRkRPMHRCUTFnN1EwRkRTanM3T3pzN1FVRkJRU3hCUVV0TkxGTkJRVk1zVlVGQlZTeERRVUZETEVWQlFVVXNSVUZCUlR0QlFVTXpRaXhSUVVGSkxHVkJRV1VzUTBGQlF5eFBRVUZQTEVOQlFVTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFVkJRVVU3UVVGRGNFTXNkVUpCUVdVc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdTMEZETlVJN1EwRkRTanM3UVVGRlRTeFRRVUZUTEZGQlFWRXNRMEZCUXl4bFFVRmxMRVZCUVVVN1FVRkRkRU1zWjBKQlFWa3NSMEZCUnl4bFFVRmxMRU5CUVVNN1EwRkRiRU1pTENKbWFXeGxJam9pYkc5dmNDNXFjeUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0IwYVcxbGNpQm1jbTl0SUNjdUwybHVZeTkwYVcxbGNpYzdYRzVwYlhCdmNuUWdkR2xqYXlCbWNtOXRJQ2N1TDJsdVl5OTBhV05ySnp0Y2JseHViR1YwSUhCeWIyTmxjM05QY21SbGNpQTlJRnRjYmlBZ0lDQjdJSE4wWlhBNklDZG1jbUZ0WlZOMFlYSjBKeUI5TEZ4dUlDQWdJSHNnYzNSbGNEb2dKM1Z3WkdGMFpTY2dmU3hjYmlBZ0lDQjdJSE4wWlhBNklDZDNhV3hzVW1WdVpHVnlKeXdnWkdWamFXUmxVbVZ1WkdWeU9pQjBjblZsSUgwc1hHNGdJQ0FnZXlCemRHVndPaUFuY0hKbFVtVnVaR1Z5Snl3Z2FYTlNaVzVrWlhJNklIUnlkV1VnZlN4Y2JpQWdJQ0I3SUhOMFpYQTZJQ2R5Wlc1a1pYSW5MQ0JwYzFKbGJtUmxjam9nZEhKMVpTQjlMRnh1SUNBZ0lIc2djM1JsY0RvZ0ozQnZjM1JTWlc1a1pYSW5MQ0JwYzFKbGJtUmxjam9nZEhKMVpTQjlMRnh1SUNBZ0lIc2djM1JsY0RvZ0oyWnlZVzFsUlc1a0p5QjlMRnh1SUNBZ0lIc2djM1JsY0RvZ0oyTnNaV0Z1ZFhBbklIMWNibDA3WEc1amIyNXpkQ0J1ZFcxUWNtOWpaWE56VTNSbGNITWdQU0J3Y205alpYTnpUM0prWlhJdWJHVnVaM1JvTzF4dVhHNHZMeUJiYVc1MFhUb2dVSEp2WTJWemN5QkpSQ3dnYVc1amNtVnRaVzUwWldRZ1ptOXlJR1ZoWTJnZ2JtVjNJSEJ5YjJObGMzTmNibXhsZENCamRYSnlaVzUwVUhKdlkyVnpjMGxrSUQwZ01EdGNibHh1THk4Z1cybHVkRjA2SUU1MWJXSmxjaUJ2WmlCeWRXNXVhVzVuSUhCeWIyTmxjM05sYzF4dWJHVjBJSEoxYm01cGJtZERiM1Z1ZENBOUlEQTdYRzVjYmk4dklGdHBiblJkT2lCT2RXMWlaWElnYjJZZ2NuVnVibWx1WnlCdWIyNHRZbUZqYTJkeWIzVnVaQ0J3Y205alpYTnpaWE5jYm14bGRDQmhZM1JwZG1WRGIzVnVkQ0E5SURBN1hHNWNiaTh2SUZ0aGNuSmhlVjA2SUVGeWNtRjVJRzltSUdGamRHbDJaU0J3Y205alpYTnpJRWxFYzF4dWJHVjBJSEoxYm01cGJtZEpaSE1nUFNCYlhUdGNibHh1THk4Z1cyOWlhbVZqZEYwNklFMWhjQ0J2WmlCaFkzUnBkbVVnY0hKdlkyVnpjMlZ6WEc1c1pYUWdjblZ1Ym1sdVoxQnliMk5sYzNObGN5QTlJSHQ5TzF4dVhHNHZMeUJiWVhKeVlYbGRPaUJCY25KaGVTQnZaaUJ3Y205alpYTnpJRWxFY3lCeGRXVjFaV1FnWm05eUlHUmxZV04wYVhaaGRHbHZibHh1YkdWMElHUmxZV04wYVhaaGRHVlJkV1YxWlNBOUlGdGRPMXh1WEc0dkx5QmJZbTl2YkdWaGJsMDZJRWx6SUd4dmIzQWdjblZ1Ym1sdVp6OWNibXhsZENCcGMxSjFibTVwYm1jZ1BTQm1ZV3h6WlR0Y2JseHVMeXBjYmlBZ0lDQlZjR1JoZEdVZ2NuVnVibWx1WjF4dVhHNGdJQ0FnVzJKdmIyeGxZVzVkT2lCZ2RISjFaV0FnZEc4Z1lXUmtYRzRnSUNBZ1cySnZiMnhsWVc1ZE9pQmdkSEoxWldBZ2FXWWdiR0Y2ZVZ4dUtpOWNibVoxYm1OMGFXOXVJSFZ3WkdGMFpVTnZkVzUwS0dGa1pDd2dhWE5NWVhwNUtTQjdYRzRnSUNBZ1kyOXVjM1FnYlc5a2FXWjVJRDBnWVdSa0lEOGdNU0E2SUMweE8xeHVYRzRnSUNBZ2NuVnVibWx1WjBOdmRXNTBJQ3M5SUcxdlpHbG1lVHRjYmx4dUlDQWdJR2xtSUNnaGFYTk1ZWHA1S1NCN1hHNGdJQ0FnSUNBZ0lHRmpkR2wyWlVOdmRXNTBJQ3M5SUcxdlpHbG1lVHRjYmlBZ0lDQjlYRzU5WEc1Y2JtWjFibU4wYVc5dUlIQjFjbWRsS0NrZ2UxeHVJQ0FnSUd4bGRDQnhkV1YxWlV4bGJtZDBhQ0E5SUdSbFlXTjBhWFpoZEdWUmRXVjFaUzVzWlc1bmRHZzdYRzVjYmlBZ0lDQjNhR2xzWlNBb2NYVmxkV1ZNWlc1bmRHZ3RMU2tnZTF4dUlDQWdJQ0FnSUNCamIyNXpkQ0JwWkZSdlJHVnNaWFJsSUQwZ1pHVmhZM1JwZG1GMFpWRjFaWFZsVzNGMVpYVmxUR1Z1WjNSb1hUdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ1lXTjBhWFpsU1dSSmJtUmxlQ0E5SUhKMWJtNXBibWRKWkhNdWFXNWtaWGhQWmlocFpGUnZSR1ZzWlhSbEtUdGNibHh1SUNBZ0lDQWdJQ0F2THlCSlppQndjbTlqWlhOeklHbHpJR0ZqZEdsMlpTd2daR1ZoWTNScGRtRjBaVnh1SUNBZ0lDQWdJQ0JwWmlBb1lXTjBhWFpsU1dSSmJtUmxlQ0ErSUMweEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCeWRXNXVhVzVuU1dSekxuTndiR2xqWlNoaFkzUnBkbVZKWkVsdVpHVjRMQ0F4S1R0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnZFhCa1lYUmxRMjkxYm5Rb1ptRnNjMlVzSUhKMWJtNXBibWRRY205alpYTnpaWE5iYVdSVWIwUmxiR1YwWlYwdWFYTk1ZWHA1S1R0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnWkdWc1pYUmxJSEoxYm01cGJtZFFjbTlqWlhOelpYTmJhV1JVYjBSbGJHVjBaVjA3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JpQWdJQ0JrWldGamRHbDJZWFJsVVhWbGRXVWdQU0JiWFR0Y2JuMWNibHh1THlwY2JpQWdJQ0JiZEdsdFpYTjBZVzF3WFRvZ1JuSmhiV1VnZEdsdFpYTjBZVzF3WEc0Z0lDQWdXMmx1ZEYwNklGUnBiV1VnYzJsdVkyVWdiR0Z6ZENCbWNtRnRaVnh1S2k5Y2JtWjFibU4wYVc5dUlHWnBjbVZCYkd3b1puSmhiV1ZUZEdGdGNDd2daV3hoY0hObFpDa2dlMXh1SUNBZ0lHeGxkQ0J0WlhSb2IyUWdQU0I3ZlR0Y2JpQWdJQ0JzWlhRZ2JXVjBhRzlrVG1GdFpTQTlJQ2NuTzF4dUlDQWdJR3hsZENCcGMxSmxibVJsY2xOMFpYQWdQU0JtWVd4elpUdGNiaUFnSUNCc1pYUWdjSEp2WTJWemN6dGNiaUFnSUNCc1pYUWdjbVZ6ZFd4ME8xeHVYRzRnSUNBZ2NIVnlaMlVvS1R0Y2JseHVJQ0FnSUdOdmJuTjBJRzUxYlZKMWJtNXBibWNnUFNCeWRXNXVhVzVuUTI5MWJuUTdYRzVjYmlBZ0lDQm1iM0lnS0d4bGRDQnBJRDBnTURzZ2FTQThJRzUxYlZCeWIyTmxjM05UZEdWd2N6c2dhU3NyS1NCN1hHNGdJQ0FnSUNBZ0lHMWxkR2h2WkNBOUlIQnliMk5sYzNOUGNtUmxjbHRwWFR0Y2JpQWdJQ0FnSUNBZ2JXVjBhRzlrVG1GdFpTQTlJRzFsZEdodlpDNXpkR1Z3TzF4dUlDQWdJQ0FnSUNCcGMxSmxibVJsY2xOMFpYQWdQU0J0WlhSb2IyUXVhWE5TWlc1a1pYSWdQeUIwY25WbElEb2dabUZzYzJVN1hHNWNiaUFnSUNBZ0lDQWdabTl5SUNoc1pYUWdhU0E5SURBN0lHa2dQQ0J1ZFcxU2RXNXVhVzVuT3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIQnliMk5sYzNNZ1BTQnlkVzV1YVc1blVISnZZMlZ6YzJWelczSjFibTVwYm1kSlpITmJhVjFkTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2NISnZZMlZ6Y3lBbUppQndjbTlqWlhOelcyMWxkR2h2WkU1aGJXVmRJQ1ltSUNnaGFYTlNaVzVrWlhKVGRHVndJSHg4SUNocGMxSmxibVJsY2xOMFpYQWdKaVlnY0hKdlkyVnpjeTVmY21WdVpHVnlJRDA5UFNCMGNuVmxLU2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCeVpYTjFiSFFnUFNCd2NtOWpaWE56VzIxbGRHaHZaRTVoYldWZExtTmhiR3dvY0hKdlkyVnpjeXdnY0hKdlkyVnpjeXdnWm5KaGJXVlRkR0Z0Y0N3Z1pXeGhjSE5sWkNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNodFpYUm9iMlF1WkdWamFXUmxVbVZ1WkdWeUtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjSEp2WTJWemN5NWZjbVZ1WkdWeUlEMGdLSEJ5YjJObGMzTmJiV1YwYUc5a1RtRnRaVjBnSmlZZ2NtVnpkV3gwSUQwOVBTQm1ZV3h6WlNrZ1B5Qm1ZV3h6WlNBNklIUnlkV1U3SUZ4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjSFZ5WjJVb0tUdGNibHh1SUNBZ0lISmxkSFZ5YmlCaFkzUnBkbVZEYjNWdWRDQS9JSFJ5ZFdVZ09pQm1ZV3h6WlR0Y2JuMWNibHh1THk4Z1JuVnVZM1JwYjI0Z2RHOGdabWx5WlNCbGRtVnllU0JtY21GdFpWeHVablZ1WTNScGIyNGdabkpoYldVb0tTQjdYRzRnSUNBZ2RHbGpheWdvWm5KaGJXVlRkR0Z0Y0NrZ1BUNGdlMXh1SUNBZ0lDQWdJQ0JwWmlBb2FYTlNkVzV1YVc1bktTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCbWNtRnRaU2dwTzF4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdkR2x0WlhJdWRYQmtZWFJsS0daeVlXMWxVM1JoYlhBcE8xeHVJQ0FnSUNBZ0lDQnBjMUoxYm01cGJtY2dQU0JtYVhKbFFXeHNLR1p5WVcxbFUzUmhiWEFzSUhScGJXVnlMbWRsZEVWc1lYQnpaV1FvS1NrN1hHNGdJQ0FnZlNrN1hHNTlYRzVjYmk4dklGTjBZWEowSUd4dmIzQmNibVoxYm1OMGFXOXVJSE4wWVhKMEtDa2dlMXh1SUNBZ0lHbG1JQ2doYVhOU2RXNXVhVzVuS1NCN1hHNGdJQ0FnSUNBZ0lIUnBiV1Z5TG5OMFlYSjBLQ2s3WEc0Z0lDQWdJQ0FnSUdselVuVnVibWx1WnlBOUlIUnlkV1U3WEc0Z0lDQWdJQ0FnSUdaeVlXMWxLQ2s3WEc0Z0lDQWdmVnh1ZlZ4dVhHNHZMeUJUZEc5d0lHeHZiM0JjYm1aMWJtTjBhVzl1SUhOMGIzQW9LU0I3WEc0Z0lDQWdhWE5TZFc1dWFXNW5JRDBnWm1Gc2MyVTdYRzU5WEc1Y2JpOHZJRVY0Y0c5eWRITmNibVY0Y0c5eWRDQm1kVzVqZEdsdmJpQm5aWFJRY205alpYTnpTV1FvS1NCN1hHNGdJQ0FnY21WMGRYSnVJR04xY25KbGJuUlFjbTlqWlhOelNXUXJLenRjYm4xY2JseHVMeXBjYmlBZ0lDQmJhVzUwWFRvZ1VISnZZMlZ6Y3lCSlJDQjBieUJoWTNScGRtRjBaVnh1SUNBZ0lGdFFjbTlqWlhOelhUb2dVSEp2WTJWemN5QjBieUJoWTNScGRtRjBaVnh1S2k5Y2JtVjRjRzl5ZENCbWRXNWpkR2x2YmlCaFkzUnBkbUYwWlNocFpDd2djSEp2WTJWemN5a2dlMXh1SUNBZ0lHTnZibk4wSUhGMVpYVmxTVzVrWlhnZ1BTQmtaV0ZqZEdsMllYUmxVWFZsZFdVdWFXNWtaWGhQWmlocFpDazdYRzRnSUNBZ1kyOXVjM1FnYVhOUmRXVjFaV1FnUFNBb2NYVmxkV1ZKYm1SbGVDQStJQzB4S1R0Y2JpQWdJQ0JqYjI1emRDQnBjMUoxYm01cGJtY2dQU0FvY25WdWJtbHVaMGxrY3k1cGJtUmxlRTltS0dsa0tTQStJQzB4S1R0Y2JseHVJQ0FnSUM4dklGSmxiVzkyWlNCbWNtOXRJR1JsWVdOMGFYWmhkR1ZSZFdWMVpTQnBaaUJ4ZFdWMVpXUmNiaUFnSUNCcFppQW9hWE5SZFdWMVpXUXBJSHRjYmlBZ0lDQWdJQ0FnWkdWaFkzUnBkbUYwWlZGMVpYVmxMbk53YkdsalpTaHhkV1YxWlVsdVpHVjRMQ0F4S1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0F2THlCQlpHUWdkRzhnY25WdWJtbHVaeUJ3Y205alpYTnpaWE1nWVhKeVlYa2dhV1lnYm05MElIUm9aWEpsWEc0Z0lDQWdhV1lnS0NGcGMxSjFibTVwYm1jcElIdGNiaUFnSUNBZ0lDQWdjblZ1Ym1sdVowbGtjeTV3ZFhOb0tHbGtLVHRjYmlBZ0lDQWdJQ0FnY25WdWJtbHVaMUJ5YjJObGMzTmxjMXRwWkYwZ1BTQndjbTlqWlhOek8xeHVYRzRnSUNBZ0lDQWdJSFZ3WkdGMFpVTnZkVzUwS0hSeWRXVXNJSEJ5YjJObGMzTXVhWE5NWVhwNUtUdGNiaUFnSUNBZ0lDQWdjM1JoY25Rb0tUdGNiaUFnSUNCOVhHNTlYRzVjYmk4cVhHNGdJQ0FnVzJsdWRGMDZJRkJ5YjJObGMzTWdTVVFnZEc4Z1pHVmhZM1JwZG1GMFpWeHVLaTljYm1WNGNHOXlkQ0JtZFc1amRHbHZiaUJrWldGamRHbDJZWFJsS0dsa0tTQjdYRzRnSUNBZ2FXWWdLR1JsWVdOMGFYWmhkR1ZSZFdWMVpTNXBibVJsZUU5bUtHbGtLU0E5UFQwZ0xURXBJSHRjYmlBZ0lDQWdJQ0FnWkdWaFkzUnBkbUYwWlZGMVpYVmxMbkIxYzJnb2FXUXBPMXh1SUNBZ0lIMWNibjFjYmx4dVpYaHdiM0owSUdaMWJtTjBhVzl1SUhObGRGTjBaWEJ6S0c1bGQxQnliMk5sYzNOUGNtUmxjaWtnZTF4dUlDQWdJSEJ5YjJObGMzTlBjbVJsY2lBOUlHNWxkMUJ5YjJObGMzTlBjbVJsY2p0Y2JuMGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZnJhbWVzeW5jL2xpYi9sb29wLmpzXG4gKiogbW9kdWxlIGlkID0gMTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuc2V0RGlsYXRpb24gPSBzZXREaWxhdGlvbjtcbnZhciBoYXNQZXJmb3JtYW5jZU5vdyA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCcgJiYgcGVyZm9ybWFuY2Uubm93O1xudmFyIGN1cnJlbnRUaW1lID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBoYXNQZXJmb3JtYW5jZU5vdyA/IHBlcmZvcm1hbmNlLm5vdygpIDogbmV3IERhdGUoKS5nZXRUaW1lKCk7XG59O1xuXG52YXIgTUFYX0VMQVBTRUQgPSAzMztcblxudmFyIGJhc2UgPSAwO1xudmFyIGN1cnJlbnQgPSAwO1xudmFyIGVsYXBzZWQgPSAxNi43O1xudmFyIGRpbGF0aW9uID0gMTtcbnZhciBsb3N0VGltZSA9IDA7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChmcmFtZXN0YW1wKSB7XG4gICAgICAgIGlmIChiYXNlID09PSAwKSB7XG4gICAgICAgICAgICBjdXJyZW50ID0gYmFzZSA9IGZyYW1lc3RhbXA7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcHJldiA9IGN1cnJlbnQ7XG4gICAgICAgIHZhciBsb3NzQWRqdXN0ZWQgPSBmcmFtZXN0YW1wIC0gbG9zdFRpbWU7XG4gICAgICAgIHZhciBub25EaWxhdGVkRWxhcHNlZCA9IE1hdGgubWluKGxvc3NBZGp1c3RlZCAtIHByZXYsIE1BWF9FTEFQU0VEKTtcbiAgICAgICAgZWxhcHNlZCA9IG5vbkRpbGF0ZWRFbGFwc2VkICogZGlsYXRpb247XG4gICAgICAgIGN1cnJlbnQgKz0gZWxhcHNlZDtcbiAgICAgICAgbG9zdFRpbWUgKz0gbm9uRGlsYXRlZEVsYXBzZWQgLSBlbGFwc2VkO1xuICAgIH0sXG5cbiAgICBzdGFydDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gY3VycmVudCA9IGN1cnJlbnRUaW1lKCk7XG4gICAgfSxcblxuICAgIGdldEVsYXBzZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGVsYXBzZWQ7XG4gICAgfVxufTtcbmZ1bmN0aW9uIHNldERpbGF0aW9uKG5ld0RpbGF0aW9uKSB7XG4gICAgZGlsYXRpb24gPSBuZXdEaWxhdGlvbjtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTlwYm1NdmRHbHRaWEl1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN08xRkJPRUpuUWl4WFFVRlhMRWRCUVZnc1YwRkJWenRCUVRsQ00wSXNTVUZCVFN4cFFrRkJhVUlzUjBGQlNTeFBRVUZQTEZkQlFWY3NTMEZCU3l4WFFVRlhMRWxCUVVrc1YwRkJWeXhEUVVGRExFZEJRVWNzUVVGQlF5eERRVUZETzBGQlEyeEdMRWxCUVUwc1YwRkJWeXhIUVVGSE8xZEJRVTBzYVVKQlFXbENMRWRCUVVjc1YwRkJWeXhEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVsQlFVa3NTVUZCU1N4RlFVRkZMRU5CUVVNc1QwRkJUeXhGUVVGRk8wTkJRVUVzUTBGQlF6czdRVUZGZGtZc1NVRkJUU3hYUVVGWExFZEJRVWNzUlVGQlJTeERRVUZET3p0QlFVVjJRaXhKUVVGSkxFbEJRVWtzUjBGQlJ5eERRVUZETEVOQlFVTTdRVUZEWWl4SlFVRkpMRTlCUVU4c1IwRkJSeXhEUVVGRExFTkJRVU03UVVGRGFFSXNTVUZCU1N4UFFVRlBMRWRCUVVjc1NVRkJTU3hEUVVGRE8wRkJRMjVDTEVsQlFVa3NVVUZCVVN4SFFVRkhMRU5CUVVNc1EwRkJRenRCUVVOcVFpeEpRVUZKTEZGQlFWRXNSMEZCUnl4RFFVRkRMRU5CUVVNN08ydENRVVZHTzBGQlExZ3NWVUZCVFN4RlFVRkZMRlZCUVVNc1ZVRkJWU3hGUVVGTE8wRkJRM0JDTEZsQlFVa3NTVUZCU1N4TFFVRkxMRU5CUVVNc1JVRkJSVHRCUVVOYUxHMUNRVUZQTEVkQlFVY3NTVUZCU1N4SFFVRkhMRlZCUVZVc1EwRkJRenRUUVVNdlFqczdRVUZGUkN4WlFVRk5MRWxCUVVrc1IwRkJSeXhQUVVGUExFTkJRVU03UVVGRGNrSXNXVUZCVFN4WlFVRlpMRWRCUVVjc1ZVRkJWU3hIUVVGSExGRkJRVkVzUTBGQlF6dEJRVU16UXl4WlFVRk5MR2xDUVVGcFFpeEhRVUZITEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1dVRkJXU3hIUVVGSExFbEJRVWtzUlVGQlJTeFhRVUZYTEVOQlFVTXNRMEZCUXp0QlFVTnlSU3hsUVVGUExFZEJRVWNzYVVKQlFXbENMRWRCUVVjc1VVRkJVU3hEUVVGRE8wRkJRM1pETEdWQlFVOHNTVUZCU1N4UFFVRlBMRU5CUVVNN1FVRkRia0lzWjBKQlFWRXNTVUZCU1N4cFFrRkJhVUlzUjBGQlJ5eFBRVUZQTEVOQlFVTTdTMEZETTBNN08wRkJSVVFzVTBGQlN5eEZRVUZGTzJWQlFVMHNUMEZCVHl4SFFVRkhMRmRCUVZjc1JVRkJSVHRMUVVGQk96dEJRVVZ3UXl4alFVRlZMRVZCUVVVN1pVRkJUU3hQUVVGUE8wdEJRVUU3UTBGRE5VSTdRVUZGVFN4VFFVRlRMRmRCUVZjc1EwRkJReXhYUVVGWExFVkJRVVU3UVVGRGNrTXNXVUZCVVN4SFFVRkhMRmRCUVZjc1EwRkJRenREUVVNeFFpSXNJbVpwYkdVaU9pSjBhVzFsY2k1cWN5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbU52Ym5OMElHaGhjMUJsY21admNtMWhibU5sVG05M0lEMGdLSFI1Y0dWdlppQndaWEptYjNKdFlXNWpaU0FoUFQwZ0ozVnVaR1ZtYVc1bFpDY2dKaVlnY0dWeVptOXliV0Z1WTJVdWJtOTNLVHRjYm1OdmJuTjBJR04xY25KbGJuUlVhVzFsSUQwZ0tDa2dQVDRnYUdGelVHVnlabTl5YldGdVkyVk9iM2NnUHlCd1pYSm1iM0p0WVc1alpTNXViM2NvS1NBNklHNWxkeUJFWVhSbEtDa3VaMlYwVkdsdFpTZ3BPMXh1WEc1amIyNXpkQ0JOUVZoZlJVeEJVRk5GUkNBOUlETXpPMXh1WEc1c1pYUWdZbUZ6WlNBOUlEQTdYRzVzWlhRZ1kzVnljbVZ1ZENBOUlEQTdYRzVzWlhRZ1pXeGhjSE5sWkNBOUlERTJMamM3WEc1c1pYUWdaR2xzWVhScGIyNGdQU0F4TzF4dWJHVjBJR3h2YzNSVWFXMWxJRDBnTUR0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ2UxeHVJQ0FnSUhWd1pHRjBaVG9nS0daeVlXMWxjM1JoYlhBcElEMCtJSHRjYmlBZ0lDQWdJQ0FnYVdZZ0tHSmhjMlVnUFQwOUlEQXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTjFjbkpsYm5RZ1BTQmlZWE5sSUQwZ1puSmhiV1Z6ZEdGdGNEdGNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJSEJ5WlhZZ1BTQmpkWEp5Wlc1ME8xeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCc2IzTnpRV1JxZFhOMFpXUWdQU0JtY21GdFpYTjBZVzF3SUMwZ2JHOXpkRlJwYldVN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUc1dmJrUnBiR0YwWldSRmJHRndjMlZrSUQwZ1RXRjBhQzV0YVc0b2JHOXpjMEZrYW5WemRHVmtJQzBnY0hKbGRpd2dUVUZZWDBWTVFWQlRSVVFwTzF4dUlDQWdJQ0FnSUNCbGJHRndjMlZrSUQwZ2JtOXVSR2xzWVhSbFpFVnNZWEJ6WldRZ0tpQmthV3hoZEdsdmJqdGNiaUFnSUNBZ0lDQWdZM1Z5Y21WdWRDQXJQU0JsYkdGd2MyVmtPMXh1SUNBZ0lDQWdJQ0JzYjNOMFZHbHRaU0FyUFNCdWIyNUVhV3hoZEdWa1JXeGhjSE5sWkNBdElHVnNZWEJ6WldRN1hHNGdJQ0FnZlN4Y2JseHVJQ0FnSUhOMFlYSjBPaUFvS1NBOVBpQmpkWEp5Wlc1MElEMGdZM1Z5Y21WdWRGUnBiV1VvS1N4Y2JseHVJQ0FnSUdkbGRFVnNZWEJ6WldRNklDZ3BJRDArSUdWc1lYQnpaV1JjYm4wN1hHNWNibVY0Y0c5eWRDQm1kVzVqZEdsdmJpQnpaWFJFYVd4aGRHbHZiaWh1WlhkRWFXeGhkR2x2YmlrZ2UxeHVJQ0FnSUdScGJHRjBhVzl1SUQwZ2JtVjNSR2xzWVhScGIyNDdYRzU5SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ZyYW1lc3luYy9saWIvaW5jL3RpbWVyLmpzXG4gKiogbW9kdWxlIGlkID0gMTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8qXG4gICAgRGV0ZWN0IGFuZCBsb2FkIGFuIGFwcHJvcHJpYXRlIGNsb2NrIHNldHRpbmcgZm9yIHRoZSBlbnZpcm9ubWVudFxuKi9cblxudmFyIGhhc1JBRiA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPyB0cnVlIDogZmFsc2U7XG5cbnZhciB0aWNrID0gdW5kZWZpbmVkO1xuXG5pZiAoaGFzUkFGKSB7XG4gICAgdGljayA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XG59IGVsc2Uge1xuICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8qXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGxcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgRm9yIElFOC85IEZsaW5zdG9uZXMgYW5kIG5vbi1icm93c2VyIGVudmlyb25tZW50c1xuICAgICAgICAgICAgIFRha2VuIGZyb20gUGF1bCBJcmlzaC4gV2UndmUgc3RyaXBwZWQgb3V0IGNhbmNlbEFuaW1hdGlvbkZyYW1lIGNoZWNrcyBiZWNhdXNlIHdlIGRvbid0IGZveCB3aXRoIHRoYXRcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaHR0cDovL3BhdWxpcmlzaC5jb20vMjAxMS9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWFuaW1hdGluZy9cbiAgICAgICAgICAgIGh0dHA6Ly9teS5vcGVyYS5jb20vZW1vbGxlci9ibG9nLzIwMTEvMTIvMjAvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1lci1hbmltYXRpbmdcbiAgICAgICAgICAgICBcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbCBieSBFcmlrIE3DtmxsZXIuIGZpeGVzIGZyb20gUGF1bCBJcmlzaCBhbmQgVGlubyBaaWpkZWxcbiAgICAgICAgICAgICBcbiAgICAgICAgICAgIE1JVCBsaWNlbnNlXG4gICAgICAgICovXG4gICAgICAgIHZhciBsYXN0VGltZSA9IDA7XG5cbiAgICAgICAgdGljayA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICB2YXIgdGltZVRvQ2FsbCA9IE1hdGgubWF4KDAsIDE2IC0gKGN1cnJlbnRUaW1lIC0gbGFzdFRpbWUpKTtcblxuICAgICAgICAgICAgbGFzdFRpbWUgPSBjdXJyZW50VGltZSArIHRpbWVUb0NhbGw7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhsYXN0VGltZSk7XG4gICAgICAgICAgICB9LCB0aW1lVG9DYWxsKTtcbiAgICAgICAgfTtcbiAgICB9KSgpO1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSB0aWNrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OXBibU12ZEdsamF5NXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN08wRkJTVUVzU1VGQlRTeE5RVUZOTEVkQlFVY3NRVUZCUXl4UFFVRlBMRTFCUVUwc1MwRkJTeXhYUVVGWExFbEJRVWtzVFVGQlRTeERRVUZETEhGQ1FVRnhRaXhIUVVGSkxFbEJRVWtzUjBGQlJ5eExRVUZMTEVOQlFVTTdPMEZCUlRsR0xFbEJRVWtzU1VGQlNTeFpRVUZCTEVOQlFVTTdPMEZCUlZRc1NVRkJTU3hOUVVGTkxFVkJRVVU3UVVGRFVpeFJRVUZKTEVkQlFVY3NUVUZCVFN4RFFVRkRMSEZDUVVGeFFpeERRVUZETzBOQlJYWkRMRTFCUVUwN096czdPenM3T3pzN096czdPenRCUVdWSUxGbEJRVWtzVVVGQlVTeEhRVUZITEVOQlFVTXNRMEZCUXpzN1FVRkZha0lzV1VGQlNTeEhRVUZITEZWQlFVTXNVVUZCVVN4RlFVRkxPMEZCUTJwQ0xHZENRVUZOTEZkQlFWY3NSMEZCUnl4SlFVRkpMRWxCUVVrc1JVRkJSU3hEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETzBGQlEzcERMR2RDUVVGTkxGVkJRVlVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFbEJRVWtzVjBGQlZ5eEhRVUZITEZGQlFWRXNRMEZCUVN4QlFVRkRMRU5CUVVNc1EwRkJRenM3UVVGRk9VUXNiMEpCUVZFc1IwRkJSeXhYUVVGWExFZEJRVWNzVlVGQlZTeERRVUZET3p0QlFVVndReXh6UWtGQlZTeERRVUZETzNWQ1FVRk5MRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU03WVVGQlFTeEZRVUZGTEZWQlFWVXNRMEZCUXl4RFFVRkRPMU5CUTNCRUxFTkJRVUU3TzBOQlEwbzdPMnRDUVVWakxFbEJRVWtpTENKbWFXeGxJam9pZEdsamF5NXFjeUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWk4cVhHNGdJQ0FnUkdWMFpXTjBJR0Z1WkNCc2IyRmtJR0Z1SUdGd2NISnZjSEpwWVhSbElHTnNiMk5ySUhObGRIUnBibWNnWm05eUlIUm9aU0JsYm5acGNtOXViV1Z1ZEZ4dUtpOWNibHh1WTI5dWMzUWdhR0Z6VWtGR0lEMGdLSFI1Y0dWdlppQjNhVzVrYjNjZ0lUMDlJQ2QxYm1SbFptbHVaV1FuSUNZbUlIZHBibVJ2ZHk1eVpYRjFaWE4wUVc1cGJXRjBhVzl1Um5KaGJXVXBJRDhnZEhKMVpTQTZJR1poYkhObE8xeHVYRzVzWlhRZ2RHbGphenRjYmx4dWFXWWdLR2hoYzFKQlJpa2dlMXh1SUNBZ0lIUnBZMnNnUFNCM2FXNWtiM2N1Y21WeGRXVnpkRUZ1YVcxaGRHbHZia1p5WVcxbE8xeHVYRzU5SUdWc2MyVWdlMXh1SUNBZ0lDOHFYRzRnSUNBZ0lDQWdJSEpsY1hWbGMzUkJibWx0WVhScGIyNUdjbUZ0WlNCd2IyeDVabWxzYkZ4dUlDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ1JtOXlJRWxGT0M4NUlFWnNhVzV6ZEc5dVpYTWdZVzVrSUc1dmJpMWljbTkzYzJWeUlHVnVkbWx5YjI1dFpXNTBjMXh1WEc0Z0lDQWdJQ0FnSUZSaGEyVnVJR1p5YjIwZ1VHRjFiQ0JKY21semFDNGdWMlVuZG1VZ2MzUnlhWEJ3WldRZ2IzVjBJR05oYm1ObGJFRnVhVzFoZEdsdmJrWnlZVzFsSUdOb1pXTnJjeUJpWldOaGRYTmxJSGRsSUdSdmJpZDBJR1p2ZUNCM2FYUm9JSFJvWVhSY2JpQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lHaDBkSEE2THk5d1lYVnNhWEpwYzJndVkyOXRMekl3TVRFdmNtVnhkV1Z6ZEdGdWFXMWhkR2x2Ym1aeVlXMWxMV1p2Y2kxemJXRnlkQzFoYm1sdFlYUnBibWN2WEc0Z0lDQWdJQ0FnSUdoMGRIQTZMeTl0ZVM1dmNHVnlZUzVqYjIwdlpXMXZiR3hsY2k5aWJHOW5Mekl3TVRFdk1USXZNakF2Y21WeGRXVnpkR0Z1YVcxaGRHbHZibVp5WVcxbExXWnZjaTF6YldGeWRDMWxjaTFoYm1sdFlYUnBibWRjYmlBZ0lDQWdJQ0FnSUZ4dUlDQWdJQ0FnSUNCeVpYRjFaWE4wUVc1cGJXRjBhVzl1Um5KaGJXVWdjRzlzZVdacGJHd2dZbmtnUlhKcGF5Qk53N1pzYkdWeUxpQm1hWGhsY3lCbWNtOXRJRkJoZFd3Z1NYSnBjMmdnWVc1a0lGUnBibThnV21scVpHVnNYRzRnSUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnVFVsVUlHeHBZMlZ1YzJWY2JpQWdJQ0FxTDF4dUlDQWdJR3hsZENCc1lYTjBWR2x0WlNBOUlEQTdYRzVjYmlBZ0lDQjBhV05ySUQwZ0tHTmhiR3hpWVdOcktTQTlQaUI3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJR04xY25KbGJuUlVhVzFsSUQwZ2JtVjNJRVJoZEdVb0tTNW5aWFJVYVcxbEtDazdYRzRnSUNBZ0lDQWdJR052Ym5OMElIUnBiV1ZVYjBOaGJHd2dQU0JOWVhSb0xtMWhlQ2d3TENBeE5pQXRJQ2hqZFhKeVpXNTBWR2x0WlNBdElHeGhjM1JVYVcxbEtTazdYRzVjYmlBZ0lDQWdJQ0FnYkdGemRGUnBiV1VnUFNCamRYSnlaVzUwVkdsdFpTQXJJSFJwYldWVWIwTmhiR3c3WEc1Y2JpQWdJQ0FnSUNBZ2MyVjBWR2x0Wlc5MWRDZ29LU0E5UGlCallXeHNZbUZqYXloc1lYTjBWR2x0WlNrc0lIUnBiV1ZVYjBOaGJHd3BPMXh1SUNBZ0lIMWNibjFjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnZEdsamF6c2lYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZnJhbWVzeW5jL2xpYi9pbmMvdGljay5qc1xuICoqIG1vZHVsZSBpZCA9IDE3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwic291cmNlUm9vdCI6IiIsImZpbGUiOiJwb3Btb3Rpb24uZ2xvYmFsLmpzIn0=