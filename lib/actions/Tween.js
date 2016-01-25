'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.__esModule = true;

var _Action2 = require('./Action');

var _Action3 = _interopRequireDefault(_Action2);

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
}(_Action3.default);

exports.default = Tween;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL1R3ZWVuLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjQSxJQUFNLFFBQVEsT0FBUjtBQUNOLElBQU0sYUFBYTtBQUNmLFVBQU0sU0FBTjtBQUNBLFVBQU0sU0FBTjtBQUNBLFVBQU0sWUFBTjtDQUhFOzs7Ozs7Ozs7Ozs7QUFnQk4sU0FBUyxJQUFULENBQWMsUUFBZCxFQUF3QixJQUF4QixFQUE4QixFQUE5QixFQUFrQyxJQUFsQyxFQUF3QztBQUNwQyxRQUFNLGtCQUFrQixVQXhCeEIsU0F3QndCLENBQVMsUUFBVCxFQUFtQixDQUFuQixFQUFzQixDQUF0QixDQUFsQixDQUQ4QjtBQUVwQyxRQUFNLGdCQUFnQixLQUFLLGVBQUwsQ0FBaEIsQ0FGOEI7O0FBSXBDLFdBQU8sVUF6QlAscUJBeUJPLENBQXFCLGFBQXJCLEVBQW9DLElBQXBDLEVBQTBDLEVBQTFDLENBQVAsQ0FKb0M7Q0FBeEM7O0lBT3FCOzs7Ozs7Ozs7b0JBQ2pCLHlCQUFRO0FBQ0osMEJBQU0sS0FBTixZQURJO0FBRUosYUFBSyxPQUFMLEdBQWUsQ0FBZixDQUZJO0FBR0osYUFBSyxTQUFMLEdBQWlCLEtBQUssU0FBTCxHQUFpQixLQUFLLFNBQUwsR0FBaUIsQ0FBakIsQ0FIOUI7OztBQURTLG9CQU9qQiw2QkFBUyxPQUFPLFlBQVksU0FBUzs7O0FBQ2pDLFlBQU0saUJBQWlCLElBQUMsQ0FBSyxhQUFMLEtBQXVCLENBQXZCLEdBQTRCLENBQTdCLEdBQWlDLENBQWpDLENBRFU7O0FBR2pDLGFBQUssS0FBTCxHQUFhLElBQWIsQ0FIaUM7QUFJakMsYUFBSyxPQUFMLElBQWdCLE9BQUMsR0FBVSxLQUFLLE1BQUwsR0FBZSxLQUFLLGFBQUwsQ0FKVDs7QUFNakMsbUJBaERKLEtBZ0RJLENBQUssS0FBSyxNQUFMLEVBQWEsVUFBQyxLQUFELEVBQVEsR0FBUixFQUFnQjtBQUM5QixnQkFBSSxXQUFXLFVBNUN2QixT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LENBQUo7QUFDQSxtQkFBTyxLQUFQO1VBVkosQ0FEYzs7O0FBNUZELG9CQTJHakIscURBQXNCO0FBQ2xCLGVBQU8sSUFBUCxDQURrQjs7O1dBM0dMIiwiZmlsZSI6IlR3ZWVuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFjdGlvbiBmcm9tICcuL0FjdGlvbic7XG5pbXBvcnQge1xuICAgIGN1cnJlbnRUaW1lLFxuICAgIGVhY2gsXG4gICAgaXNOdW0sXG4gICAgaXNTdHJpbmdcbn0gZnJvbSAnLi4vaW5jL3V0aWxzJztcbmltcG9ydCB7XG4gICAgcmVzdHJpY3QsXG4gICAgZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUsXG4gICAgZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MsXG4gICAgc3RlcFByb2dyZXNzXG59IGZyb20gJy4uL2luYy9jYWxjJztcblxuY29uc3QgQ09VTlQgPSAnQ291bnQnO1xuY29uc3QgTkVYVF9TVEVQUyA9IHtcbiAgICBsb29wOiAncmVzdGFydCcsXG4gICAgeW95bzogJ3JldmVyc2UnLFxuICAgIGZsaXA6ICdmbGlwVmFsdWVzJ1xufTtcblxuLypcbiAgICBFYXNlIHZhbHVlIHdpdGhpbiByYW5nZWQgcGFyYW1ldGVyc1xuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogUHJvZ3Jlc3MgYmV0d2VlbiAwIGFuZCAxXG4gICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBvZiAwIHByb2dyZXNzXG4gICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBvZiAxIHByb2dyZXNzXG4gICAgQHBhcmFtIFtzdHJpbmcgfHwgZnVuY3Rpb25dOiBOYW1lIG9mIHByZXNldCBlYXNpbmdcbiAgICAgICAgdG8gdXNlIG9yIGdlbmVyYXRlZCBlYXNpbmcgZnVuY3Rpb25cbiAgICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBvZiBlYXNlZCBwcm9ncmVzcyBpbiByYW5nZVxuKi8gXG5mdW5jdGlvbiBlYXNlKHByb2dyZXNzLCBmcm9tLCB0bywgZWFzZSkge1xuICAgIGNvbnN0IHByb2dyZXNzTGltaXRlZCA9IHJlc3RyaWN0KHByb2dyZXNzLCAwLCAxKTtcbiAgICBjb25zdCBlYXNlZFByb2dyZXNzID0gZWFzZShwcm9ncmVzc0xpbWl0ZWQpO1xuXG4gICAgcmV0dXJuIGdldFZhbHVlRnJvbVByb2dyZXNzKGVhc2VkUHJvZ3Jlc3MsIGZyb20sIHRvKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFR3ZWVuIGV4dGVuZHMgQWN0aW9uIHtcbiAgICBzdGFydCgpIHtcbiAgICAgICAgc3VwZXIuc3RhcnQoKTtcbiAgICAgICAgdGhpcy5lbGFwc2VkID0gMDtcbiAgICAgICAgdGhpcy5mbGlwQ291bnQgPSB0aGlzLnlveW9Db3VudCA9IHRoaXMubG9vcENvdW50ID0gMDtcbiAgICB9XG5cbiAgICBvblVwZGF0ZSh0d2VlbiwgZnJhbWVTdGFtcCwgZWxhcHNlZCkge1xuICAgICAgICBjb25zdCBwcm9ncmVzc1RhcmdldCA9ICh0aGlzLnBsYXlEaXJlY3Rpb24gPT09IDEpID8gMSA6IDA7XG5cbiAgICAgICAgdGhpcy5lbmRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuZWxhcHNlZCArPSAoZWxhcHNlZCAqIHRoaXMuZGlsYXRlKSAqIHRoaXMucGxheURpcmVjdGlvbjtcblxuICAgICAgICBlYWNoKHRoaXMudmFsdWVzLCAodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICAgICAgbGV0IHByb2dyZXNzID0gcmVzdHJpY3QoZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUodGhpcy5lbGFwc2VkIC0gdmFsdWUuZGVsYXksIDAsIHZhbHVlLmR1cmF0aW9uKSwgMCwgMSk7XG5cbiAgICAgICAgICAgIC8vIE1hcmsgVHdlZW4gYXMgTk9UIGVuZGVkIGlmIHN0aWxsIGluIHByb2dyZXNzXG4gICAgICAgICAgICBpZiAocHJvZ3Jlc3MgIT09IHByb2dyZXNzVGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBTdGVwIHByb2dyZXNzIGlmIHdlJ3JlIHN0ZXBwaW5nXG4gICAgICAgICAgICBpZiAodmFsdWUuc3RlcHMpIHtcbiAgICAgICAgICAgICAgICBwcm9ncmVzcyA9IHN0ZXBQcm9ncmVzcyhwcm9ncmVzcywgdmFsdWUuc3RlcHMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBFYXNlIHByb2dyZXNzXG4gICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gZWFzZShwcm9ncmVzcywgdmFsdWUuZnJvbSwgdmFsdWUudG8sIHZhbHVlLmVhc2UpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkZyYW1lRW5kKCkge1xuICAgICAgICBpZiAodGhpcy5lbmRlZCkge1xuICAgICAgICAgICAgbGV0IHN0ZXBUYWtlbiA9IGZhbHNlO1xuXG4gICAgICAgICAgICBlYWNoKE5FWFRfU1RFUFMsIChtZXRob2QsIHN0ZXApID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBtYXhTdGVwcyA9IHRoaXNbc3RlcF07XG5cbiAgICAgICAgICAgICAgICBpZiAobWF4U3RlcHMgPT09IHRydWUgfHwgKGlzTnVtKG1heFN0ZXBzKSAmJiBtYXhTdGVwcyA+IHRoaXNbc3RlcCArIENPVU5UXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpc1tzdGVwICsgQ09VTlRdKys7XG4gICAgICAgICAgICAgICAgICAgIHN0ZXBUYWtlbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXNbbWV0aG9kXSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoIXN0ZXBUYWtlbikge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmxpcFZhbHVlcygpIHtcbiAgICAgICAgdGhpcy5lbGFwc2VkID0gdGhpcy5kdXJhdGlvbiAtIHRoaXMuZWxhcHNlZDtcblxuICAgICAgICBlYWNoKHRoaXMudmFsdWVzLCAodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICAgICAgW3ZhbHVlLnRvLCB2YWx1ZS5mcm9tXSA9IFt2YWx1ZS5mcm9tLCB2YWx1ZS50b107XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldmVyc2UoKSB7XG4gICAgICAgIHRoaXMucGxheURpcmVjdGlvbiAqPSAtMTtcbiAgICB9XG5cbiAgICByZXN0YXJ0KCkge1xuICAgICAgICB0aGlzLmVsYXBzZWQgPSAodGhpcy5wbGF5RGlyZWN0aW9uID09PSAxKSA/IDAgOiB0aGlzLmR1cmF0aW9uO1xuICAgICAgICB0aGlzLnN0YXJ0ZWQgPSBjdXJyZW50VGltZSgpO1xuICAgIH1cblxuICAgIHNlZWsocHJvZ3Jlc3MpIHtcbiAgICAgICAgdGhpcy5zZWVrVGltZSh0aGlzLmR1cmF0aW9uICogcHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIHNlZWtUaW1lKGVsYXBzZWQpIHtcbiAgICAgICAgdGhpcy5vbmNlKCk7XG4gICAgICAgIHRoaXMuZWxhcHNlZCA9IGVsYXBzZWQ7XG4gICAgfVxuICAgIFxuICAgIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN1cGVyLmdldERlZmF1bHRQcm9wcygpLFxuICAgICAgICAgICAgZGVsYXk6IDAsXG4gICAgICAgICAgICBkaWxhdGU6IDEsXG4gICAgICAgICAgICBkdXJhdGlvbjogMzAwLFxuICAgICAgICAgICAgbG9vcDogZmFsc2UsXG4gICAgICAgICAgICB5b3lvOiBmYWxzZSxcbiAgICAgICAgICAgIGZsaXA6IGZhbHNlLFxuICAgICAgICAgICAgcGxheURpcmVjdGlvbjogMSxcbiAgICAgICAgICAgIGVuZGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGVsYXBzZWQ6IDBcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBnZXREZWZhdWx0VmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdXBlci5nZXREZWZhdWx0VmFsdWUoKSxcbiAgICAgICAgICAgIGRlbGF5OiAwLFxuICAgICAgICAgICAgZHVyYXRpb246IDMwMCxcbiAgICAgICAgICAgIGVhc2U6ICdlYXNlT3V0JyxcbiAgICAgICAgICAgIGVsYXBzZWQ6IDAsXG4gICAgICAgICAgICBzdGFnZ2VyOiAwLFxuICAgICAgICAgICAgc3RlcHM6IDAsXG4gICAgICAgICAgICBmcm9tOiAwLFxuICAgICAgICAgICAgdG86IDAsXG4gICAgICAgICAgICByb3VuZDogZmFsc2VcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBnZXREZWZhdWx0VmFsdWVQcm9wKCkge1xuICAgICAgICByZXR1cm4gJ3RvJztcbiAgICB9XG59XG4iXX0=