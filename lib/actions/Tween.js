'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.__esModule = true;

var _Action2 = require('./Action');

var _Action3 = _interopRequireDefault(_Action2);

var _presetEasing = require('./tween/preset-easing');

var _presetEasing2 = _interopRequireDefault(_presetEasing);

var _utils = require('../inc/utils');

var _calc = require('../inc/calc');

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

    Tween.prototype.update = function update(tween, frameStamp, elapsed) {
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

    Tween.prototype.frameEnd = function frameEnd() {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL1R3ZWVuLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZUEsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDO0FBQ3RCLElBQU0sVUFBVSxHQUFHO0FBQ2YsUUFBSSxFQUFFLFNBQVM7QUFDZixRQUFJLEVBQUUsU0FBUztBQUNmLFFBQUksRUFBRSxZQUFZO0NBQ3JCOzs7Ozs7Ozs7Ozs7QUFBQyxBQVlGLFNBQVMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRTtBQUNwQyxRQUFNLGVBQWUsR0FBRyxVQXhCeEIsUUFBUSxFQXdCeUIsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNqRCxRQUFNLGNBQWMsR0FBRyxXQTVCdkIsUUFBUSxFQTRCd0IsSUFBSSxDQUFDLEdBQUcsdUJBQWEsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQ2xFLFFBQU0sYUFBYSxHQUFHLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQzs7QUFFdEQsV0FBTyxVQTFCUCxvQkFBb0IsRUEwQlEsYUFBYSxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztDQUN4RCxDQUFDOztJQUVtQixLQUFLO2NBQUwsS0FBSzs7YUFBTCxLQUFLOzhCQUFMLEtBQUs7Ozs7O0FBQUwsU0FBSyxXQUN0QixLQUFLLG9CQUFHO0FBQ0osMEJBQU0sS0FBSyxLQUFBLE1BQUUsQ0FBQztBQUNkLFlBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO0FBQ2pCLFlBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztLQUN4RDs7QUFMZ0IsU0FBSyxXQU90QixNQUFNLG1CQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFOzs7QUFDL0IsWUFBTSxjQUFjLEdBQUcsQUFBQyxJQUFJLENBQUMs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Q0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNaLFlBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7S0FDM0M7O0FBdkVnQixTQUFLLFdBeUV0QixlQUFlLDhCQUFHO0FBQ2QsNEJBQ08sa0JBQU0sZUFBZSxLQUFBLE1BQUU7QUFDMUIsaUJBQUssRUFBRSxDQUFDO0FBQ1Isa0JBQU0sRUFBRSxDQUFDO0FBQ1Qsb0JBQVEsRUFBRSxHQUFHO0FBQ2IsZ0JBQUksRUFBRSxLQUFLO0FBQ1gsZ0JBQUksRUFBRSxLQUFLO0FBQ1gsZ0JBQUksRUFBRSxLQUFLO0FBQ1gseUJBQWEsRUFBRSxDQUFDO0FBQ2hCLGlCQUFLLEVBQUUsS0FBSztBQUNaLG1CQUFPLEVBQUUsQ0FBQztXQUNaO0tBQ0w7O0FBdEZnQixTQUFLLFdBd0Z0QixlQUFlLDhCQUFHO0FBQ2QsNEJBQ08sa0JBQU0sZUFBZSxLQUFBLE1BQUU7QUFDMUIsaUJBQUssRUFBRSxDQUFDO0FBQ1Isb0JBQVEsRUFBRSxHQUFHO0FBQ2IsZ0JBQUksRUFBRSxTQUFTO0FBQ2YsbUJBQU8sRUFBRSxDQUFDO0FBQ1YsbUJBQU8sRUFBRSxDQUFDO0FBQ1YsaUJBQUssRUFBRSxDQUFDO0FBQ1IsZ0JBQUksRUFBRSxDQUFDO0FBQ1AsY0FBRSxFQUFFLENBQUM7QUFDTCxpQkFBSyxFQUFFLEtBQUs7V0FDZDtLQUNMOztBQXJHZ0IsU0FBSyxXQXVHdEIsbUJBQW1CLGtDQUFHO0FBQ2xCLGVBQU8sSUFBSSxDQUFDO0tBQ2Y7O1dBekdnQixLQUFLOzs7a0JBQUwsS0FBSyIsImZpbGUiOiJUd2Vlbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBY3Rpb24gZnJvbSAnLi9BY3Rpb24nO1xuaW1wb3J0IHByZXNldEVhc2luZyBmcm9tICcuL3R3ZWVuL3ByZXNldC1lYXNpbmcnO1xuaW1wb3J0IHtcbiAgICBjdXJyZW50VGltZSxcbiAgICBlYWNoLFxuICAgIGlzTnVtLFxuICAgIGlzU3RyaW5nXG59IGZyb20gJy4uL2luYy91dGlscyc7XG5pbXBvcnQge1xuICAgIHJlc3RyaWN0LFxuICAgIGdldFByb2dyZXNzRnJvbVZhbHVlLFxuICAgIGdldFZhbHVlRnJvbVByb2dyZXNzLFxuICAgIHN0ZXBQcm9ncmVzc1xufSBmcm9tICcuLi9pbmMvY2FsYyc7XG5cbmNvbnN0IENPVU5UID0gJ0NvdW50JztcbmNvbnN0IE5FWFRfU1RFUFMgPSB7XG4gICAgbG9vcDogJ3Jlc3RhcnQnLFxuICAgIHlveW86ICdyZXZlcnNlJyxcbiAgICBmbGlwOiAnZmxpcFZhbHVlcydcbn07XG5cbi8qXG4gICAgRWFzZSB2YWx1ZSB3aXRoaW4gcmFuZ2VkIHBhcmFtZXRlcnNcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFByb2dyZXNzIGJldHdlZW4gMCBhbmQgMVxuICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgb2YgMCBwcm9ncmVzc1xuICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgb2YgMSBwcm9ncmVzc1xuICAgIEBwYXJhbSBbc3RyaW5nIHx8IGZ1bmN0aW9uXTogTmFtZSBvZiBwcmVzZXQgZWFzaW5nXG4gICAgICAgIHRvIHVzZSBvciBnZW5lcmF0ZWQgZWFzaW5nIGZ1bmN0aW9uXG4gICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgb2YgZWFzZWQgcHJvZ3Jlc3MgaW4gcmFuZ2VcbiovIFxuZnVuY3Rpb24gZWFzZShwcm9ncmVzcywgZnJvbSwgdG8sIGVhc2UpIHtcbiAgICBjb25zdCBwcm9ncmVzc0xpbWl0ZWQgPSByZXN0cmljdChwcm9ncmVzcywgMCwgMSk7XG4gICAgY29uc3QgZWFzaW5nRnVuY3Rpb24gPSBpc1N0cmluZyhlYXNlKSA/IHByZXNldEVhc2luZ1tlYXNlXSA6IGVhc2U7XG4gICAgY29uc3QgZWFzZWRQcm9ncmVzcyA9IGVhc2luZ0Z1bmN0aW9uKHByb2dyZXNzTGltaXRlZCk7XG5cbiAgICByZXR1cm4gZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MoZWFzZWRQcm9ncmVzcywgZnJvbSwgdG8pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHdlZW4gZXh0ZW5kcyBBY3Rpb24ge1xuICAgIHN0YXJ0KCkge1xuICAgICAgICBzdXBlci5zdGFydCgpO1xuICAgICAgICB0aGlzLmVsYXBzZWQgPSAwO1xuICAgICAgICB0aGlzLmZsaXBDb3VudCA9IHRoaXMueW95b0NvdW50ID0gdGhpcy5sb29wQ291bnQgPSAwO1xuICAgIH1cblxuICAgIHVwZGF0ZSh0d2VlbiwgZnJhbWVTdGFtcCwgZWxhcHNlZCkge1xuICAgICAgICBjb25zdCBwcm9ncmVzc1RhcmdldCA9ICh0aGlzLnBsYXlEaXJlY3Rpb24gPT09IDEpID8gMSA6IDA7XG5cbiAgICAgICAgdGhpcy5lbmRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuZWxhcHNlZCArPSAoZWxhcHNlZCAqIHRoaXMuZGlsYXRlKSAqIHRoaXMucGxheURpcmVjdGlvbjtcblxuICAgICAgICBlYWNoKHRoaXMudmFsdWVzLCAodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICAgICAgbGV0IHByb2dyZXNzID0gcmVzdHJpY3QoZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUodGhpcy5lbGFwc2VkIC0gdmFsdWUuZGVsYXksIDAsIHZhbHVlLmR1cmF0aW9uKSwgMCwgMSk7XG5cbiAgICAgICAgICAgIC8vIE1hcmsgVHdlZW4gYXMgTk9UIGVuZGVkIGlmIHN0aWxsIGluIHByb2dyZXNzXG4gICAgICAgICAgICBpZiAocHJvZ3Jlc3MgIT09IHByb2dyZXNzVGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBTdGVwIHByb2dyZXNzIGlmIHdlJ3JlIHN0ZXBwaW5nXG4gICAgICAgICAgICBpZiAodmFsdWUuc3RlcHMpIHtcbiAgICAgICAgICAgICAgICBwcm9ncmVzcyA9IHN0ZXBQcm9ncmVzcyhwcm9ncmVzcywgdmFsdWUuc3RlcHMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBFYXNlIHByb2dyZXNzXG4gICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gZWFzZShwcm9ncmVzcywgdmFsdWUuZnJvbSwgdmFsdWUudG8sIHZhbHVlLmVhc2UpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmcmFtZUVuZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZW5kZWQpIHtcbiAgICAgICAgICAgIGxldCBzdGVwVGFrZW4gPSBmYWxzZTtcblxuICAgICAgICAgICAgZWFjaChORVhUX1NURVBTLCAobWV0aG9kLCBzdGVwKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWF4U3RlcHMgPSB0aGlzW3N0ZXBdO1xuXG4gICAgICAgICAgICAgICAgaWYgKG1heFN0ZXBzID09PSB0cnVlIHx8IChpc051bShtYXhTdGVwcykgJiYgbWF4U3RlcHMgPiB0aGlzW3N0ZXAgKyBDT1VOVF0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXNbc3RlcCArIENPVU5UXSsrO1xuICAgICAgICAgICAgICAgICAgICBzdGVwVGFrZW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzW21ldGhvZF0oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKCFzdGVwVGFrZW4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZsaXBWYWx1ZXMoKSB7XG4gICAgICAgIHRoaXMuZWxhcHNlZCA9IHRoaXMuZHVyYXRpb24gLSB0aGlzLmVsYXBzZWQ7XG5cbiAgICAgICAgZWFjaCh0aGlzLnZhbHVlcywgKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgICAgIFt2YWx1ZS50bywgdmFsdWUuZnJvbV0gPSBbdmFsdWUuZnJvbSwgdmFsdWUudG9dO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXZlcnNlKCkge1xuICAgICAgICB0aGlzLnBsYXlEaXJlY3Rpb24gKj0gLTE7XG4gICAgfVxuXG4gICAgcmVzdGFydCgpIHtcbiAgICAgICAgdGhpcy5lbGFwc2VkID0gKHRoaXMucGxheURpcmVjdGlvbiA9PT0gMSkgPyAwIDogdGhpcy5kdXJhdGlvbjtcbiAgICAgICAgdGhpcy5zdGFydGVkID0gY3VycmVudFRpbWUoKTtcbiAgICB9XG5cbiAgICBzZWVrKHByb2dyZXNzKSB7XG4gICAgICAgIHRoaXMub25jZSgpO1xuICAgICAgICB0aGlzLmVsYXBzZWQgPSB0aGlzLmR1cmF0aW9uICogcHJvZ3Jlc3M7XG4gICAgfVxuICAgIFxuICAgIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN1cGVyLmdldERlZmF1bHRQcm9wcygpLFxuICAgICAgICAgICAgZGVsYXk6IDAsXG4gICAgICAgICAgICBkaWxhdGU6IDEsXG4gICAgICAgICAgICBkdXJhdGlvbjogMzAwLFxuICAgICAgICAgICAgbG9vcDogZmFsc2UsXG4gICAgICAgICAgICB5b3lvOiBmYWxzZSxcbiAgICAgICAgICAgIGZsaXA6IGZhbHNlLFxuICAgICAgICAgICAgcGxheURpcmVjdGlvbjogMSxcbiAgICAgICAgICAgIGVuZGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGVsYXBzZWQ6IDBcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBnZXREZWZhdWx0VmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdXBlci5nZXREZWZhdWx0VmFsdWUoKSxcbiAgICAgICAgICAgIGRlbGF5OiAwLFxuICAgICAgICAgICAgZHVyYXRpb246IDMwMCxcbiAgICAgICAgICAgIGVhc2U6ICdlYXNlT3V0JyxcbiAgICAgICAgICAgIGVsYXBzZWQ6IDAsXG4gICAgICAgICAgICBzdGFnZ2VyOiAwLFxuICAgICAgICAgICAgc3RlcHM6IDAsXG4gICAgICAgICAgICBmcm9tOiAwLFxuICAgICAgICAgICAgdG86IDAsXG4gICAgICAgICAgICByb3VuZDogZmFsc2VcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBnZXREZWZhdWx0VmFsdWVQcm9wKCkge1xuICAgICAgICByZXR1cm4gJ3RvJztcbiAgICB9XG59XG4iXX0=