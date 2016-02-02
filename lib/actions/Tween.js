'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.__esModule = true;

var _Action2 = require('./Action');

var _Action3 = _interopRequireDefault(_Action2);

var _presetEasing = require('./easing/preset-easing');

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
            var _ref;

            return _ref = [value.from, value.to], value.to = _ref[0], value.from = _ref[1], _ref;
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL1R3ZWVuLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBY0EsSUFBTSxRQUFRLE9BQVI7QUFDTixJQUFNLGFBQWE7QUFDZixVQUFNLFNBQU47QUFDQSxVQUFNLFNBQU47QUFDQSxVQUFNLFlBQU47Q0FIRTs7Ozs7Ozs7Ozs7O0FBZ0JOLElBQU0sT0FBTyxVQUFDLFFBQUQsRUFBVyxJQUFYLEVBQWlCLEVBQWpCLEVBQXFCLElBQXJCLEVBQThCO0FBQ3ZDLFFBQU0sa0JBQWtCLFVBeEJ4QixTQXdCd0IsQ0FBUyxRQUFULEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLENBQWxCLENBRGlDO0FBRXZDLFFBQU0sZ0JBQWdCLEtBQUssZUFBTCxDQUFoQixDQUZpQzs7QUFJdkMsV0FBTyxVQXpCUCxxQkF5Qk8sQ0FBcUIsYUFBckIsRUFBb0MsSUFBcEMsRUFBMEMsRUFBMUMsQ0FBUCxDQUp1QztDQUE5Qjs7SUFPUTs7Ozs7Ozs7O29CQUNqQix5QkFBUTtBQUNKLDBCQUFNLEtBQU4sWUFESTtBQUVKLGFBQUssT0FBTCxHQUFlLENBQWYsQ0FGSTtBQUdKLGFBQUssU0FBTCxHQUFpQixLQUFLLFNBQUwsR0FBaUIsS0FBSyxTQUFMLEdBQWlCLENBQWpCLENBSDlCOztBQUtKLGVBQU8sSUFBUCxDQUxJOzs7QUFEUyxvQkFTakIsNkJBQVMsT0FBTyxZQUFZLFNBQVM7QUFDakMsWUFBTSxpQkFBaUIsSUFBQyxDQUFLLGFBQUwsS0FBdUIsQ0FBdkIsR0FBNEIsQ0FBN0IsR0FBaUMsQ0FBakMsQ0FEVTs7QUFHakMsYUFBSyxLQUFMLEdBQWEsSUFBYixDQUhpQztBQUlqQyxhQUFLLE9BQUwsSUFBZ0IsT0FBQyxHQUFVLEtBQUssTUFBTCxHQUFlLEtBQUssYUFBTCxDQUpUOztBQU1qQyxhQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxLQUFLLFlBQUwsRUFBbUIsR0FBdkMsRUFBNEM7QUFDeEMs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Q0FEYzs7O0FBckZELG9CQW9HakIsNkNBQWtCO0FBQ2QsNEJBQ08sa0JBQU0sZUFBTjtBQUNILG1CQUFPLENBQVA7QUFDQSxzQkFBVSxHQUFWO0FBQ0Esa0JBQU0sdUJBQU8sT0FBUDtBQUNOLHFCQUFTLENBQVQ7QUFDQSxxQkFBUyxDQUFUO0FBQ0EsbUJBQU8sQ0FBUDtBQUNBLGtCQUFNLENBQU47QUFDQSxnQkFBSSxDQUFKO0FBQ0EsbUJBQU8sS0FBUDtVQVZKLENBRGM7OztBQXBHRCxvQkFtSGpCLHFEQUFzQjtBQUNsQixlQUFPLElBQVAsQ0FEa0I7OztXQW5ITCIsImZpbGUiOiJUd2Vlbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBY3Rpb24gZnJvbSAnLi9BY3Rpb24nO1xuaW1wb3J0IGVhc2luZyBmcm9tICcuL2Vhc2luZy9wcmVzZXQtZWFzaW5nJztcbmltcG9ydCB7XG4gICAgY3VycmVudFRpbWUsXG4gICAgZWFjaCxcbiAgICBpc051bVxufSBmcm9tICcuLi9pbmMvdXRpbHMnO1xuaW1wb3J0IHtcbiAgICByZXN0cmljdCxcbiAgICBnZXRQcm9ncmVzc0Zyb21WYWx1ZSxcbiAgICBnZXRWYWx1ZUZyb21Qcm9ncmVzcyxcbiAgICBzdGVwUHJvZ3Jlc3Ncbn0gZnJvbSAnLi4vaW5jL2NhbGMnO1xuXG5jb25zdCBDT1VOVCA9ICdDb3VudCc7XG5jb25zdCBORVhUX1NURVBTID0ge1xuICAgIGxvb3A6ICdyZXN0YXJ0JyxcbiAgICB5b3lvOiAncmV2ZXJzZScsXG4gICAgZmxpcDogJ2ZsaXBWYWx1ZXMnXG59O1xuXG4vKlxuICAgIEVhc2UgdmFsdWUgd2l0aGluIHJhbmdlZCBwYXJhbWV0ZXJzXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBQcm9ncmVzcyBiZXR3ZWVuIDAgYW5kIDFcbiAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIG9mIDAgcHJvZ3Jlc3NcbiAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIG9mIDEgcHJvZ3Jlc3NcbiAgICBAcGFyYW0gW3N0cmluZyB8fCBmdW5jdGlvbl06IE5hbWUgb2YgcHJlc2V0IGVhc2luZ1xuICAgICAgICB0byB1c2Ugb3IgZ2VuZXJhdGVkIGVhc2luZyBmdW5jdGlvblxuICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIG9mIGVhc2VkIHByb2dyZXNzIGluIHJhbmdlXG4qLyBcbmNvbnN0IGVhc2UgPSAocHJvZ3Jlc3MsIGZyb20sIHRvLCBlYXNlKSA9PiB7XG4gICAgY29uc3QgcHJvZ3Jlc3NMaW1pdGVkID0gcmVzdHJpY3QocHJvZ3Jlc3MsIDAsIDEpO1xuICAgIGNvbnN0IGVhc2VkUHJvZ3Jlc3MgPSBlYXNlKHByb2dyZXNzTGltaXRlZCk7XG5cbiAgICByZXR1cm4gZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MoZWFzZWRQcm9ncmVzcywgZnJvbSwgdG8pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHdlZW4gZXh0ZW5kcyBBY3Rpb24ge1xuICAgIHN0YXJ0KCkge1xuICAgICAgICBzdXBlci5zdGFydCgpO1xuICAgICAgICB0aGlzLmVsYXBzZWQgPSAwO1xuICAgICAgICB0aGlzLmZsaXBDb3VudCA9IHRoaXMueW95b0NvdW50ID0gdGhpcy5sb29wQ291bnQgPSAwO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG9uVXBkYXRlKHR3ZWVuLCBmcmFtZVN0YW1wLCBlbGFwc2VkKSB7XG4gICAgICAgIGNvbnN0IHByb2dyZXNzVGFyZ2V0ID0gKHRoaXMucGxheURpcmVjdGlvbiA9PT0gMSkgPyAxIDogMDtcblxuICAgICAgICB0aGlzLmVuZGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5lbGFwc2VkICs9IChlbGFwc2VkICogdGhpcy5kaWxhdGUpICogdGhpcy5wbGF5RGlyZWN0aW9uO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1WYWx1ZUtleXM7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gdGhpcy52YWx1ZUtleXNbaV07XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG5cbiAgICAgICAgICAgIGxldCBwcm9ncmVzcyA9IHJlc3RyaWN0KGdldFByb2dyZXNzRnJvbVZhbHVlKHRoaXMuZWxhcHNlZCAtIHZhbHVlLmRlbGF5LCAwLCB2YWx1ZS5kdXJhdGlvbiksIDAsIDEpO1xuXG4gICAgICAgICAgICAvLyBNYXJrIFR3ZWVuIGFzIE5PVCBlbmRlZCBpZiBzdGlsbCBpbiBwcm9ncmVzc1xuICAgICAgICAgICAgaWYgKHByb2dyZXNzICE9PSBwcm9ncmVzc1RhcmdldCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW5kZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU3RlcCBwcm9ncmVzcyBpZiB3ZSdyZSBzdGVwcGluZ1xuICAgICAgICAgICAgaWYgKHZhbHVlLnN0ZXBzKSB7XG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3MgPSBzdGVwUHJvZ3Jlc3MocHJvZ3Jlc3MsIHZhbHVlLnN0ZXBzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRWFzZSBwcm9ncmVzc1xuICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IGVhc2UocHJvZ3Jlc3MsIHZhbHVlLmZyb20sIHZhbHVlLnRvLCB2YWx1ZS5lYXNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uRnJhbWVFbmQoKSB7XG4gICAgICAgIGlmICh0aGlzLmVuZGVkKSB7XG4gICAgICAgICAgICBsZXQgc3RlcFRha2VuID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGVhY2goTkVYVF9TVEVQUywgKG1ldGhvZCwgc3RlcCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1heFN0ZXBzID0gdGhpc1tzdGVwXTtcblxuICAgICAgICAgICAgICAgIGlmIChtYXhTdGVwcyA9PT0gdHJ1ZSB8fCAoaXNOdW0obWF4U3RlcHMpICYmIG1heFN0ZXBzID4gdGhpc1tzdGVwICsgQ09VTlRdKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzW3N0ZXAgKyBDT1VOVF0rKztcbiAgICAgICAgICAgICAgICAgICAgc3RlcFRha2VuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpc1ttZXRob2RdKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICghc3RlcFRha2VuKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmbGlwVmFsdWVzKCkge1xuICAgICAgICB0aGlzLmVsYXBzZWQgPSB0aGlzLmR1cmF0aW9uIC0gdGhpcy5lbGFwc2VkO1xuXG4gICAgICAgIGVhY2godGhpcy52YWx1ZXMsICh2YWx1ZSkgPT4gW3ZhbHVlLnRvLCB2YWx1ZS5mcm9tXSA9IFt2YWx1ZS5mcm9tLCB2YWx1ZS50b10pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZXZlcnNlKCkge1xuICAgICAgICB0aGlzLnBsYXlEaXJlY3Rpb24gKj0gLTE7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJlc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuZWxhcHNlZCA9ICh0aGlzLnBsYXlEaXJlY3Rpb24gPT09IDEpID8gMCA6IHRoaXMuZHVyYXRpb247XG4gICAgICAgIHRoaXMuc3RhcnRlZCA9IGN1cnJlbnRUaW1lKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNlZWsocHJvZ3Jlc3MpIHtcbiAgICAgICAgdGhpcy5zZWVrVGltZSh0aGlzLmR1cmF0aW9uICogcHJvZ3Jlc3MpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZWVrVGltZShlbGFwc2VkKSB7XG4gICAgICAgIHRoaXMub25jZSgpO1xuICAgICAgICB0aGlzLmVsYXBzZWQgPSBlbGFwc2VkO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgXG4gICAgZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3VwZXIuZ2V0RGVmYXVsdFByb3BzKCksXG4gICAgICAgICAgICBkZWxheTogMCxcbiAgICAgICAgICAgIGRpbGF0ZTogMSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAzMDAsXG4gICAgICAgICAgICBsb29wOiBmYWxzZSxcbiAgICAgICAgICAgIHlveW86IGZhbHNlLFxuICAgICAgICAgICAgZmxpcDogZmFsc2UsXG4gICAgICAgICAgICBwbGF5RGlyZWN0aW9uOiAxLFxuICAgICAgICAgICAgZW5kZWQ6IGZhbHNlLFxuICAgICAgICAgICAgZWxhcHNlZDogMFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdldERlZmF1bHRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN1cGVyLmdldERlZmF1bHRWYWx1ZSgpLFxuICAgICAgICAgICAgZGVsYXk6IDAsXG4gICAgICAgICAgICBkdXJhdGlvbjogMzAwLFxuICAgICAgICAgICAgZWFzZTogZWFzaW5nLmVhc2VPdXQsXG4gICAgICAgICAgICBlbGFwc2VkOiAwLFxuICAgICAgICAgICAgc3RhZ2dlcjogMCxcbiAgICAgICAgICAgIHN0ZXBzOiAwLFxuICAgICAgICAgICAgZnJvbTogMCxcbiAgICAgICAgICAgIHRvOiAwLFxuICAgICAgICAgICAgcm91bmQ6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZ2V0RGVmYXVsdFZhbHVlUHJvcCgpIHtcbiAgICAgICAgcmV0dXJuICd0byc7XG4gICAgfVxufVxuIl19