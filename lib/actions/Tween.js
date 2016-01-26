'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.__esModule = true;

var _Action2 = require('./Action');

var _Action3 = _interopRequireDefault(_Action2);

var _presetEasing = require('./easing/preset-easing');

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL1R3ZWVuLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVBLElBQU0sUUFBUSxPQUFSO0FBQ04sSUFBTSxhQUFhO0FBQ2YsVUFBTSxTQUFOO0FBQ0EsVUFBTSxTQUFOO0FBQ0EsVUFBTSxZQUFOO0NBSEU7Ozs7Ozs7Ozs7OztBQWdCTixTQUFTLElBQVQsQ0FBYyxRQUFkLEVBQXdCLElBQXhCLEVBQThCLEVBQTlCLEVBQWtDLElBQWxDLEVBQXdDO0FBQ3BDLFFBQU0sa0JBQWtCLFVBeEJ4QixTQXdCd0IsQ0FBUyxRQUFULEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLENBQWxCLENBRDhCO0FBRXBDLFFBQU0sZ0JBQWdCLEtBQUssZUFBTCxDQUFoQixDQUY4Qjs7QUFJcEMsV0FBTyxVQXpCUCxxQkF5Qk8sQ0FBcUIsYUFBckIsRUFBb0MsSUFBcEMsRUFBMEMsRUFBMUMsQ0FBUCxDQUpvQztDQUF4Qzs7SUFPcUI7Ozs7Ozs7OztvQkFDakIseUJBQVE7QUFDSiwwQkFBTSxLQUFOLFlBREk7QUFFSixhQUFLLE9BQUwsR0FBZSxDQUFmLENBRkk7QUFHSixhQUFLLFNBQUwsR0FBaUIsS0FBSyxTQUFMLEdBQWlCLEtBQUssU0FBTCxHQUFpQixDQUFqQixDQUg5Qjs7O0FBRFMsb0JBT2pCLDZCQUFTLE9BQU8sWUFBWSxTQUFTOzs7QUFDakMsWUFBTSxpQkFBaUIsSUFBQyxDQUFLLGFBQUwsS0FBdUIsQ0FBdkIsR0FBNEIsQ0FBN0IsR0FBaUMsQ0FBakMsQ0FEVTs7QUFHakMsYUFBSyxLQUFMLEdBQWEsSUFBYixDQUhpQztBQUlqQyxhQUFLLE9BQUwsSUFBZ0IsT0FBQyxHQUFVLEtBQUssTUFBTCxHQUFlLEtBQUssYUFBTCxDQUpUOztBQU1qQyxtQkFoREosS0FnREksQ0FBSyxLQUFLLE1BQUwsRUFBYSxVQUFDLEtBQUQsRUFBUSxHQUFSLEVBQWdCO0FBQzlCLGdCQUFJLFdBQVcsVUE1Q3ZCLFNBNEN1QixDQUFTLFVBM0NoQyxxQkEyQ2dDLENBQXFCLE9BQUssT0FBTCxHQUFlLE1BQU0sS0FBTixFQUFhLENBQWpELEVBQW9ELE1BQU0sUUFBTixDQUE3RCxFQUE4RSxDQUE5RSxFQUFpRixDQUFqRixDQUFYOzs7QUFEMEIsZ0JBSTFCLGFBQWEsY0FBYixFQUE2QjtBQUM3Qix1QkFBSyxLQUFMLEdBQWEsS0FBYixDQUQ2QjthQUFqQzs7O0FBSjhCLGdCQVMxQixNQUFNLEtBQU4sRUFBYTtBQUNiLDJCQUFXLFVBbER2QixhQWtEdUIsQ0FBYSxRQUFiLEVBQXVCLE1BQU0sS0FBTixDQUFsQyxDQURhO2FBQWpCOzs7QUFUOEIsaUJBYzlCLENBQU0sT0FBTixHQUFnQixLQUFLLFFBQUwsRUFBZSxNQUFNLElBQU4sRUFBWSxNQUFNLEVBQU4sRUFBVSxNQUFNLElBQU4sQ0FBckQsQ0FkOEI7U0FBaEIsQ0FBbEIsQ0FOaUM7OztBQVBwQixvQkErQmpCLG1DQUFhOzs7QUFDVCxZQUFJLEtBQUssS0FBTCxFQUFZO0FBQ1osZ0JBQUksWUFBWSxLQUFaLENBRFE7O0FBR1osdUJBdEVSLEtBc0VRLENBQUssVUFBTCxFQUFpQixVQUFDLE1BQUQsRUFBUyxJQUFULEVBQWtCO0FBQy9CLG9CQUFNLFdBQVcsT0FBSyxJQUFMLENBQVgsQ0FEeUI7O0FBRy9CLG9CQUFJLGFBQWEsSUFBYixJQUFzQixXQXhFdEMsTUF3RXNDLENBQU0sUUFBTixLQUFtQixXQUFXLE9BQUssT0FBTyxLQUFQLENBQWhCLEVBQWdDO0FBQ3pFLDJCQUFLLE9BQU8sS0FBUCxDQUFMLEdBRHlFO0FBRXpFLGdDQUFZLElBQVosQ0FGeUU7QUFHekUsMkJBQUssTUFBTCxJQUh5RTtpQkFBN0U7YUFIYSxDQUFqQixDQUhZOztBQWFaLGdCQUFJLENBQUMsU0FBRCxFQUFZO0FBQ1oscUJBQUssSUFBTCxHQURZO2FBQWhCO1NBYko7OztBQWhDYSxvQkFtRGpCLG1DQUFhO0FBQ1QsYUFBSyxPQUFMLEdBQWUsS0FBSyxRQUFMLEdBQWdCLEtBQUssT0FBTCxDQUR0Qjs7QUFHVCxtQkF6RkosS0F5RkksQ0FBSyxLQUFLLE1BQUwsRUFBYSxVQUFDLEtBQUQsRUFBUSxHQUFSLEVBQWdCO3VCQUNMLENBQUMsTUFBTSxJQUFOLEVBQVksTUFBTSxFQUFOLEVBRFI7QUFDN0Isa0JBQU0sRUFBTixXQUQ2QjtBQUNuQixrQkFBTSxJQUFOLFdBRG1CO1NBQWhCLENBQWxCLENBSFM7OztBQW5ESSxvQkEyRGpCLDZCQUFVO0FBQ04sYUFBSyxhQUFMLElBQXNCLENBQUMsQ0FBRCxDQURoQjs7O0FBM0RPLG9CQStEakIsNkJBQVU7QUFDTixhQUFLLE9BQUwsR0FBZSxJQUFDLENBQUssYUFBTCxLQUF1QixDQUF2QixHQUE0QixDQUE3QixHQUFpQyxLQUFLLFFBQUwsQ0FEMUM7QUFFTixhQUFLLE9BQUwsR0FBZSxXQXJHbkIsWUFxR21CLEVBQWYsQ0FGTTs7O0FBL0RPLG9CQW9FakIscUJBQUssVUFBVTtBQUNYLGFBQUssUUFBTCxDQUFjLEtBQUssUUFBTCxHQUFnQixRQUFoQixDQUFkLENBRFc7OztBQXBFRSxvQkF3RWpCLDZCQUFTLFNBQVM7QUFDZCxhQUFLLElBQUwsR0FEYztBQUVkLGFBQUssT0FBTCxHQUFlLE9BQWYsQ0FGYzs7O0FBeEVELG9CQTZFakIsNkNBQWtCO0FBQ2QsNEJBQ08sa0JBQU0sZUFBTjtBQUNILG1CQUFPLENBQVA7QUFDQSxvQkFBUSxDQUFSO0FBQ0Esc0JBQVUsR0FBVjtBQUNBLGtCQUFNLEtBQU47QUFDQSxrQkFBTSxLQUFOO0FBQ0Esa0JBQU0sS0FBTjtBQUNBLDJCQUFlLENBQWY7QUFDQSxtQkFBTyxLQUFQO0FBQ0EscUJBQVMsQ0FBVDtVQVZKLENBRGM7OztBQTdFRCxvQkE0RmpCLDZDQUFrQjtBQUNkLDRCQUNPLGtCQUFNLGVBQU47QUFDSCxtQkFBTyxDQUFQO0FBQ0Esc0JBQVUsR0FBVjtBQUNBLGdDQXZJSCxPQXVJRztBQUNBLHFCQUFTLENBQVQ7QUFDQSxxQkFBUyxDQUFUO0FBQ0EsbUJBQU8sQ0FBUDtBQUNBLGtCQUFNLENBQU47QUFDQSxnQkFBSSxDQUFKO0FBQ0EsbUJBQU8sS0FBUDtVQVZKLENBRGM7OztBQTVGRCxvQkEyR2pCLHFEQUFzQjtBQUNsQixlQUFPLElBQVAsQ0FEa0I7OztXQTNHTCIsImZpbGUiOiJUd2Vlbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBY3Rpb24gZnJvbSAnLi9BY3Rpb24nO1xuaW1wb3J0IHsgZWFzZU91dCB9IGZyb20gJy4vZWFzaW5nL3ByZXNldC1lYXNpbmcnO1xuaW1wb3J0IHtcbiAgICBjdXJyZW50VGltZSxcbiAgICBlYWNoLFxuICAgIGlzTnVtLFxuICAgIGlzU3RyaW5nXG59IGZyb20gJy4uL2luYy91dGlscyc7XG5pbXBvcnQge1xuICAgIHJlc3RyaWN0LFxuICAgIGdldFByb2dyZXNzRnJvbVZhbHVlLFxuICAgIGdldFZhbHVlRnJvbVByb2dyZXNzLFxuICAgIHN0ZXBQcm9ncmVzc1xufSBmcm9tICcuLi9pbmMvY2FsYyc7XG5cbmNvbnN0IENPVU5UID0gJ0NvdW50JztcbmNvbnN0IE5FWFRfU1RFUFMgPSB7XG4gICAgbG9vcDogJ3Jlc3RhcnQnLFxuICAgIHlveW86ICdyZXZlcnNlJyxcbiAgICBmbGlwOiAnZmxpcFZhbHVlcydcbn07XG5cbi8qXG4gICAgRWFzZSB2YWx1ZSB3aXRoaW4gcmFuZ2VkIHBhcmFtZXRlcnNcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFByb2dyZXNzIGJldHdlZW4gMCBhbmQgMVxuICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgb2YgMCBwcm9ncmVzc1xuICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgb2YgMSBwcm9ncmVzc1xuICAgIEBwYXJhbSBbc3RyaW5nIHx8IGZ1bmN0aW9uXTogTmFtZSBvZiBwcmVzZXQgZWFzaW5nXG4gICAgICAgIHRvIHVzZSBvciBnZW5lcmF0ZWQgZWFzaW5nIGZ1bmN0aW9uXG4gICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgb2YgZWFzZWQgcHJvZ3Jlc3MgaW4gcmFuZ2VcbiovIFxuZnVuY3Rpb24gZWFzZShwcm9ncmVzcywgZnJvbSwgdG8sIGVhc2UpIHtcbiAgICBjb25zdCBwcm9ncmVzc0xpbWl0ZWQgPSByZXN0cmljdChwcm9ncmVzcywgMCwgMSk7XG4gICAgY29uc3QgZWFzZWRQcm9ncmVzcyA9IGVhc2UocHJvZ3Jlc3NMaW1pdGVkKTtcblxuICAgIHJldHVybiBnZXRWYWx1ZUZyb21Qcm9ncmVzcyhlYXNlZFByb2dyZXNzLCBmcm9tLCB0byk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUd2VlbiBleHRlbmRzIEFjdGlvbiB7XG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHN1cGVyLnN0YXJ0KCk7XG4gICAgICAgIHRoaXMuZWxhcHNlZCA9IDA7XG4gICAgICAgIHRoaXMuZmxpcENvdW50ID0gdGhpcy55b3lvQ291bnQgPSB0aGlzLmxvb3BDb3VudCA9IDA7XG4gICAgfVxuXG4gICAgb25VcGRhdGUodHdlZW4sIGZyYW1lU3RhbXAsIGVsYXBzZWQpIHtcbiAgICAgICAgY29uc3QgcHJvZ3Jlc3NUYXJnZXQgPSAodGhpcy5wbGF5RGlyZWN0aW9uID09PSAxKSA/IDEgOiAwO1xuXG4gICAgICAgIHRoaXMuZW5kZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmVsYXBzZWQgKz0gKGVsYXBzZWQgKiB0aGlzLmRpbGF0ZSkgKiB0aGlzLnBsYXlEaXJlY3Rpb247XG5cbiAgICAgICAgZWFjaCh0aGlzLnZhbHVlcywgKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgICAgIGxldCBwcm9ncmVzcyA9IHJlc3RyaWN0KGdldFByb2dyZXNzRnJvbVZhbHVlKHRoaXMuZWxhcHNlZCAtIHZhbHVlLmRlbGF5LCAwLCB2YWx1ZS5kdXJhdGlvbiksIDAsIDEpO1xuXG4gICAgICAgICAgICAvLyBNYXJrIFR3ZWVuIGFzIE5PVCBlbmRlZCBpZiBzdGlsbCBpbiBwcm9ncmVzc1xuICAgICAgICAgICAgaWYgKHByb2dyZXNzICE9PSBwcm9ncmVzc1RhcmdldCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW5kZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU3RlcCBwcm9ncmVzcyBpZiB3ZSdyZSBzdGVwcGluZ1xuICAgICAgICAgICAgaWYgKHZhbHVlLnN0ZXBzKSB7XG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3MgPSBzdGVwUHJvZ3Jlc3MocHJvZ3Jlc3MsIHZhbHVlLnN0ZXBzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRWFzZSBwcm9ncmVzc1xuICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IGVhc2UocHJvZ3Jlc3MsIHZhbHVlLmZyb20sIHZhbHVlLnRvLCB2YWx1ZS5lYXNlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25GcmFtZUVuZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZW5kZWQpIHtcbiAgICAgICAgICAgIGxldCBzdGVwVGFrZW4gPSBmYWxzZTtcblxuICAgICAgICAgICAgZWFjaChORVhUX1NURVBTLCAobWV0aG9kLCBzdGVwKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWF4U3RlcHMgPSB0aGlzW3N0ZXBdO1xuXG4gICAgICAgICAgICAgICAgaWYgKG1heFN0ZXBzID09PSB0cnVlIHx8IChpc051bShtYXhTdGVwcykgJiYgbWF4U3RlcHMgPiB0aGlzW3N0ZXAgKyBDT1VOVF0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXNbc3RlcCArIENPVU5UXSsrO1xuICAgICAgICAgICAgICAgICAgICBzdGVwVGFrZW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzW21ldGhvZF0oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKCFzdGVwVGFrZW4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZsaXBWYWx1ZXMoKSB7XG4gICAgICAgIHRoaXMuZWxhcHNlZCA9IHRoaXMuZHVyYXRpb24gLSB0aGlzLmVsYXBzZWQ7XG5cbiAgICAgICAgZWFjaCh0aGlzLnZhbHVlcywgKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgICAgIFt2YWx1ZS50bywgdmFsdWUuZnJvbV0gPSBbdmFsdWUuZnJvbSwgdmFsdWUudG9dO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXZlcnNlKCkge1xuICAgICAgICB0aGlzLnBsYXlEaXJlY3Rpb24gKj0gLTE7XG4gICAgfVxuXG4gICAgcmVzdGFydCgpIHtcbiAgICAgICAgdGhpcy5lbGFwc2VkID0gKHRoaXMucGxheURpcmVjdGlvbiA9PT0gMSkgPyAwIDogdGhpcy5kdXJhdGlvbjtcbiAgICAgICAgdGhpcy5zdGFydGVkID0gY3VycmVudFRpbWUoKTtcbiAgICB9XG5cbiAgICBzZWVrKHByb2dyZXNzKSB7XG4gICAgICAgIHRoaXMuc2Vla1RpbWUodGhpcy5kdXJhdGlvbiAqIHByb2dyZXNzKTtcbiAgICB9XG5cbiAgICBzZWVrVGltZShlbGFwc2VkKSB7XG4gICAgICAgIHRoaXMub25jZSgpO1xuICAgICAgICB0aGlzLmVsYXBzZWQgPSBlbGFwc2VkO1xuICAgIH1cbiAgICBcbiAgICBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdXBlci5nZXREZWZhdWx0UHJvcHMoKSxcbiAgICAgICAgICAgIGRlbGF5OiAwLFxuICAgICAgICAgICAgZGlsYXRlOiAxLFxuICAgICAgICAgICAgZHVyYXRpb246IDMwMCxcbiAgICAgICAgICAgIGxvb3A6IGZhbHNlLFxuICAgICAgICAgICAgeW95bzogZmFsc2UsXG4gICAgICAgICAgICBmbGlwOiBmYWxzZSxcbiAgICAgICAgICAgIHBsYXlEaXJlY3Rpb246IDEsXG4gICAgICAgICAgICBlbmRlZDogZmFsc2UsXG4gICAgICAgICAgICBlbGFwc2VkOiAwXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZ2V0RGVmYXVsdFZhbHVlKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3VwZXIuZ2V0RGVmYXVsdFZhbHVlKCksXG4gICAgICAgICAgICBkZWxheTogMCxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAzMDAsXG4gICAgICAgICAgICBlYXNlOiBlYXNlT3V0LFxuICAgICAgICAgICAgZWxhcHNlZDogMCxcbiAgICAgICAgICAgIHN0YWdnZXI6IDAsXG4gICAgICAgICAgICBzdGVwczogMCxcbiAgICAgICAgICAgIGZyb206IDAsXG4gICAgICAgICAgICB0bzogMCxcbiAgICAgICAgICAgIHJvdW5kOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdldERlZmF1bHRWYWx1ZVByb3AoKSB7XG4gICAgICAgIHJldHVybiAndG8nO1xuICAgIH1cbn1cbiJdfQ==