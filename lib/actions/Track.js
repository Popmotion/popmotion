'use strict';

exports.__esModule = true;

var _Action2 = require('./Action');

var _Action3 = _interopRequireDefault(_Action2);

var _uiCalc = require('ui-calc');

var _uiUtils = require('ui-utils');

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL1RyYWNrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSXFCLEtBQUs7Y0FBTCxLQUFLOztBQUN0QixhQURpQixLQUFLLENBQ1YsS0FBSyxFQUFFLEtBQUssRUFBRTs4QkFEVCxLQUFLOztxREFFbEIsbUJBQU0sS0FBSyxDQUFDOztBQUNaLGNBQUssS0FBSyxHQUFHLEtBQUssQ0FBQzs7S0FDdEI7O0FBSmdCLFNBQUssV0FNdEIsS0FBSyxvQkFBRztBQUNKLDBCQUFNLEtBQUssS0FBQSxNQUFFLENBQUM7QUFDZCxZQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztLQUN6Qjs7QUFUZ0IsU0FBSyxXQVd0QixNQUFNLG1CQUFDLEtBQUssRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFOzs7QUFDbEMsWUFBSSxDQUFDLFdBQVcsR0FBRyxZQWZsQixNQUFNLEVBZW1CLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQzs7QUFFaEUscUJBaEJDLElBQUksRUFnQkEsSUFBSSxDQUFDLE1BQU0sRUFBRSxVQUFDLEtBQUssRUFBRSxHQUFHLEVBQUs7QUFDOUIsZ0JBQUksT0FBSyxXQUFXLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO0FBQ3RDLG9CQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUU7QUFDZCx5QkFBSyxDQUFDLE9BQU8sR0FBRyxPQUFLLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQzNDLE1BQU07QUFDSCx5QkFBSyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsTUFBTSxHQUFHLE9BQUssV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUN4RDthQUNKO1NBQ0osQ0FBQyxDQUFDO0tBQ047O0FBdkJnQixTQUFLLFdBeUJ0QixlQUFlLDhCQUFHO0FBQ2QsZUFBTztBQUNILGVBQUcsRUFBRSxDQUFDO0FBQ04scUJBQVMsRUFBRSxDQUFDO0FBQ1osa0JBQU0sRUFBRSxLQUFLO0FBQ2Isa0JBQU0sRUFBRSxDQUFDO1NBQ1osQ0FBQztLQUNMOztXQWhDZ0IsS0FBSzs7O2tCQUFMLEtBQUsiLCJmaWxlIjoiVHJhY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWN0aW9uIGZyb20gJy4vQWN0aW9uJztcbmltcG9ydCB7IG9mZnNldCB9IGZyb20gJ3VpLWNhbGMnO1xuaW1wb3J0IHsgZWFjaCB9IGZyb20gJ3VpLXV0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhY2sgZXh0ZW5kcyBBY3Rpb24ge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzLCBpbnB1dCkge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuaW5wdXQgPSBpbnB1dDtcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgc3VwZXIuc3RhcnQoKTtcbiAgICAgICAgdGhpcy5pbnB1dE9yaWdpbiA9IHt9O1xuICAgIH1cblxuICAgIHVwZGF0ZSh0cmFjaywgZnJhbWVEdXJhdGlvbiwgZWxhcHNlZCkge1xuICAgICAgICB0aGlzLmlucHV0T2Zmc2V0ID0gb2Zmc2V0KHRoaXMuaW5wdXRPcmlnaW4sIHRoaXMuaW5wdXQuY3VycmVudCk7XG5cbiAgICAgICAgZWFjaCh0aGlzLnZhbHVlcywgKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlucHV0T2Zmc2V0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUuZGlyZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSB0aGlzLmlucHV0LmN1cnJlbnRba2V5XTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gdmFsdWUub3JpZ2luICsgdGhpcy5pbnB1dE9mZnNldFtrZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0RGVmYXVsdFZhbHVlKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYW1wOiAxLFxuICAgICAgICAgICAgZXNjYXBlQW1wOiAwLFxuICAgICAgICAgICAgZGlyZWN0OiBmYWxzZSxcbiAgICAgICAgICAgIHNtb290aDogMFxuICAgICAgICB9O1xuICAgIH1cbn1cbiJdfQ==