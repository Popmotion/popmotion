'use strict';

exports.__esModule = true;

var _Action2 = require('./Action');

var _Action3 = _interopRequireDefault(_Action2);

var _Mouse = require('../input/Mouse');

var _Mouse2 = _interopRequireDefault(_Mouse);

var _Touch = require('../input/Touch');

var _Touch2 = _interopRequireDefault(_Touch);

var _calc = require('../inc/calc');

var _utils = require('../inc/utils');

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

    Track.prototype.update = function update(track, frameDuration, elapsed) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL1RyYWNrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNQSxJQUFNLGFBQWEsR0FBRyxVQUFDLENBQUM7V0FBSyxDQUFDLENBQUMsT0FBTyxHQUFHLG9CQUFVLENBQUMsQ0FBQyxHQUFHLG9CQUFVLENBQUMsQ0FBQztDQUFBLENBQUM7QUFDckUsSUFBTSxjQUFjLEdBQUcsVUFBQyxDQUFDO1dBQUssQ0FBQyxDQUFDLGFBQWEsSUFBSSxDQUFDO0NBQUEsQ0FBQzs7SUFFOUIsS0FBSztjQUFMLEtBQUs7O0FBQ3RCLGFBRGlCLEtBQUssQ0FDVixLQUFLLEVBQUUsS0FBSyxFQUFFOzhCQURULEtBQUs7O3FEQUVsQixtQkFBTSxLQUFLLENBQUM7O0FBQ1osY0FBSyxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLEdBQUcsYUFBYSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOztLQUMzRTs7QUFKZ0IsU0FBSyxXQU10QixLQUFLLG9CQUFHO0FBQ0osMEJBQU0sS0FBSyxLQUFBLE1BQUUsQ0FBQztBQUNkLFlBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO0tBQ3pCOztBQVRnQixTQUFLLFdBV3RCLE1BQU0sbUJBQUMsS0FBSyxFQUFFLGFBQWEsRUFBRSxPQUFPLEVBQUU7OztBQUNsQyxZQUFJLENBQUMsV0FBVyxHQUFHLFVBbEJsQixNQUFNLEVBa0JtQixJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7O0FBRTlELG1CQW5CQyxJQUFJLEVBbUJBLElBQUksQ0FBQyxNQUFNLEVBQUUsVUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFLO0FBQzlCLGdCQUFJLE9BQUssV0FBVyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtBQUN0QyxvQkFBSSxLQUFLLENBQUMsTUFBTSxFQUFFO0FBQ2QseUJBQUssQ0FBQyxPQUFPLEdBQUcsT0FBSyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUN6QyxNQUFNO0FBQ0gseUJBQUssQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sR0FBRyxPQUFLLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDeEQ7YUFDSjtTQUNKLENBQUMsQ0FBQztLQUNOOztBQXZCZ0IsU0FBSyxXQXlCdEIsZUFBZSw4QkFBRztBQUNkLGVBQU87QUFDSCxlQUFHLEVBQUUsQ0FBQztBQUNOLHFCQUFTLEVBQUUsQ0FBQztBQUNaLGtCQUFNLEVBQUUsS0FBSztBQUNiLGtCQUFNLEVBQUUsQ0FBQztTQUNaLENBQUM7S0FDTDs7V0FoQ2dCLEtBQUs7OztrQkFBTCxLQUFLIiwiZmlsZSI6IlRyYWNrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFjdGlvbiBmcm9tICcuL0FjdGlvbic7XG5pbXBvcnQgTW91c2UgZnJvbSAnLi4vaW5wdXQvTW91c2UnO1xuaW1wb3J0IFRvdWNoIGZyb20gJy4uL2lucHV0L1RvdWNoJztcbmltcG9ydCB7IG9mZnNldCB9IGZyb20gJy4uL2luYy9jYWxjJztcbmltcG9ydCB7IGVhY2ggfSBmcm9tICcuLi9pbmMvdXRpbHMnO1xuXG5jb25zdCBjcmVhdGVQb2ludGVyID0gKGUpID0+IGUudG91Y2hlcyA/IG5ldyBUb3VjaChlKSA6IG5ldyBNb3VzZShlKTtcbmNvbnN0IGdldEFjdHVhbEV2ZW50ID0gKGUpID0+IGUub3JpZ2luYWxFdmVudCB8fCBlO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmFjayBleHRlbmRzIEFjdGlvbiB7XG4gICAgY29uc3RydWN0b3IocHJvcHMsIGlucHV0KSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5pbnB1dCA9IGlucHV0LnN0YXRlID8gaW5wdXQgOiBjcmVhdGVQb2ludGVyKGdldEFjdHVhbEV2ZW50KGlucHV0KSk7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHN1cGVyLnN0YXJ0KCk7XG4gICAgICAgIHRoaXMuaW5wdXRPcmlnaW4gPSB7fTtcbiAgICB9XG5cbiAgICB1cGRhdGUodHJhY2ssIGZyYW1lRHVyYXRpb24sIGVsYXBzZWQpIHtcbiAgICAgICAgdGhpcy5pbnB1dE9mZnNldCA9IG9mZnNldCh0aGlzLmlucHV0T3JpZ2luLCB0aGlzLmlucHV0LnN0YXRlKTtcblxuICAgICAgICBlYWNoKHRoaXMudmFsdWVzLCAodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuaW5wdXRPZmZzZXQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5kaXJlY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IHRoaXMuaW5wdXQuc3RhdGVba2V5XTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gdmFsdWUub3JpZ2luICsgdGhpcy5pbnB1dE9mZnNldFtrZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0RGVmYXVsdFZhbHVlKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYW1wOiAxLFxuICAgICAgICAgICAgZXNjYXBlQW1wOiAwLFxuICAgICAgICAgICAgZGlyZWN0OiBmYWxzZSxcbiAgICAgICAgICAgIHNtb290aDogMFxuICAgICAgICB9O1xuICAgIH1cbn1cbiJdfQ==