'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.__esModule = true;

var _Action2 = require('./Action');

var _Action3 = _interopRequireDefault(_Action2);

var _Pointer = require('../input/Pointer');

var _Pointer2 = _interopRequireDefault(_Pointer);

var _calc = require('../inc/calc');

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
    };

    Track.prototype.stop = function stop() {
        _Action.prototype.stop.call(this);
        this.input.stop();
    };

    Track.prototype.onUpdate = function onUpdate(track, frameStamp, elapsed) {
        this.inputOffset = (0, _calc.offset)(this.inputOrigin, this.input.state);

        for (var i = 0; i < this.numValueKeys; i++) {
            var key = this.valueKeys[i];

            if (this.inputOffset.hasOwnProperty(key)) {
                var value = this.values[key];
                if (value.direct) {
                    value.current = this.input.state[key];
                } else {
                    value.current = value.origin + this.inputOffset[key];
                }

                // Smooth value if we have smoothing
                if (value.smooth) {
                    value.current = (0, _calc.smooth)(value.current, value.prev, elapsed, value.smooth);
                }
            }
        }
    };

    Track.prototype.getDefaultValue = function getDefaultValue() {
        return _extends({}, _Action.prototype.getDefaultValue.call(this), {
            amp: 1,
            escapeAmp: 0,
            direct: false
        });
    };

    return Track;
}(_Action3.default);

exports.default = Track;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL1RyYWNrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLElBQU0sb0JBQW9CLFVBQUMsQ0FBRDtXQUFRO0FBQzlCLFdBQUcsRUFBRSxLQUFGO0FBQ0gsV0FBRyxFQUFFLEtBQUY7O0NBRm1COztBQUsxQixJQUFNLG9CQUFvQjtRQUFHO1dBQXNCO0FBQy9DLFdBQUcsZUFBZSxDQUFmLEVBQWtCLE9BQWxCO0FBQ0gsV0FBRyxlQUFlLENBQWYsRUFBa0IsT0FBbEI7O0NBRm1COztBQUsxQixJQUFNLGdCQUFnQixVQUFDLENBQUQ7V0FBTyxFQUFFLE9BQUYsR0FDekIsc0JBQVksa0JBQWtCLENBQWxCLENBQVosRUFBa0MsV0FBbEMsRUFBK0MsaUJBQS9DLENBRHlCLEdBRXpCLHNCQUFZLGtCQUFrQixDQUFsQixDQUFaLEVBQWtDLFdBQWxDLEVBQStDLGlCQUEvQyxDQUZ5QjtDQUFQOztBQUl0QixJQUFNLGlCQUFpQixVQUFDLENBQUQ7V0FBTyxFQUFFLGFBQUYsSUFBbUIsQ0FBbkI7Q0FBUDs7SUFFRjs7Ozs7Ozs7O29CQUNqQix1QkFBTSxPQUFPO0FBQ1QsMEJBQU0sS0FBTixZQURTOztBQUdULFlBQUksS0FBSixFQUFXO0FBQ1AsaUJBQUssS0FBTCxHQUFhLE1BQU0sS0FBTixHQUFjLEtBQWQsR0FBc0IsY0FBYyxlQUFlLEtBQWYsQ0FBZCxDQUF0QixDQUROO1NBQVg7O0FBSUEsYUFBSyxXQUFMLEdBQW1CLEVBQW5CLENBUFM7QUFRVCxhQUFLLFdBQUwsZ0JBQXdCLEtBQUssS0FBTCxDQUFXLEtBQVgsQ0FBeEIsQ0FSUztBQVNULGFBQUssS0FBTCxDQUFXLEtBQVgsR0FUUzs7O0FBREksb0JBYWpCLHVCQUFPO0FBQ0gsMEJBQU0sSUFBTixZQURHO0FBRUgsYUFBSyxLQUFMLENBQVcsSUFBWCxHQUZHOzs7QUFiVSxvQkFrQmpCLDZCQUFTLE9BQU8sWUFBWSxTQUFTO0FBQ2pDLGFBQUssV0FBTCxHQUFtQixVQTNDVixPQTJDVSxDQUFPLEtBQUssV0FBTCxFQUFrQixLQUFLLEtBQUwsQ0FBVyxLQUFYLENBQTVDLENBRGlDOztBQUdqQyxhQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxLQUFLLFlBQUwsRUFBbUIsR0FBdkMsRUFBNEM7QUFDeEMsZ0JBQU0sTUFBTSxLQUFLLFNBQUwsQ0FBZSxDQUFmLENBQU4sQ0FEa0M7O0FBR3hDLGdCQUFJLEtBQUssV0FBTCxDQUFpQixjQUFqQixDQUFnQyxHQUFoQyxDQUFKLEVBQTBDO0FBQ3RDLG9CQUFNLFFBQVEsS0FBSyxNQUFMLENBQVksR0FBWixDQUFSLENBRGdDO0FBRXRDLG9CQUFJLE1BQU0sTUFBTixFQUFjO0FBQ2QsMEJBQU0sT0FBTixHQUFnQixLQUFLLEtBQUwsQ0FBVyxLQUFYLENBQWlCLEdBQWpCLENBQWhCLENBRGM7aUJBQWxCLE1BRU87QUFDSCwwQkFBTSxPQUFOLEdBQWdCLE1BQU0sTUFBTixHQUFlLEtBQUssV0FBTCxDQUFpQixHQUFqQixDQUFmLENBRGI7aUJBRlA7OztBQUZzQyxvQkFTbEMsTUFBTSxNQUFOLEVBQWM7QUFDZCwwQkFBTSxPQUFOLEdBQWdCLFVBMUQzQixPQTBEMkIsQ0FBTyxNQUFNLE9BQU4sRUFBZSxNQUFNLElBQU4sRUFBWSxPQUFsQyxFQUEyQyxNQUFNLE1BQU4sQ0FBM0QsQ0FEYztpQkFBbEI7YUFUSjtTQUhKOzs7QUFyQmEsb0JBd0NqQiw2Q0FBa0I7QUFDZCw0QkFDTyxrQkFBTSxlQUFOO0FBQ0gsaUJBQUssQ0FBTDtBQUNBLHVCQUFXLENBQVg7QUFDQSxvQkFBUSxLQUFSO1VBSkosQ0FEYzs7O1dBeENEIiwiZmlsZSI6IlRyYWNrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFjdGlvbiBmcm9tICcuL0FjdGlvbic7XG5pbXBvcnQgUG9pbnRlciBmcm9tICcuLi9pbnB1dC9Qb2ludGVyJztcbmltcG9ydCB7IHNtb290aCwgb2Zmc2V0IH0gZnJvbSAnLi4vaW5jL2NhbGMnO1xuXG4vKlxuICAgIFNjcmFwZSB4L3kgY29vcmRpbmF0ZXMgZnJvbSBwcm92aWRlZCBldmVudFxuXG4gICAgQHBhcmFtIFtldmVudF1cbiAgICBAcmV0dXJuIFtvYmplY3RdXG4qL1xuY29uc3QgbW91c2VFdmVudFRvUG9pbnQgPSAoZSkgPT4gKHtcbiAgICB4OiBlLnBhZ2VYLFxuICAgIHk6IGUucGFnZVlcbn0pO1xuXG5jb25zdCB0b3VjaEV2ZW50VG9Qb2ludCA9ICh7IGNoYW5nZWRUb3VjaGVzIH0pID0+ICh7XG4gICAgeDogY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCxcbiAgICB5OiBjaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZXG59KTtcblxuY29uc3QgY3JlYXRlUG9pbnRlciA9IChlKSA9PiBlLnRvdWNoZXMgP1xuICAgIG5ldyBQb2ludGVyKHRvdWNoRXZlbnRUb1BvaW50KGUpLCAndG91Y2htb3ZlJywgdG91Y2hFdmVudFRvUG9pbnQpIDogXG4gICAgbmV3IFBvaW50ZXIobW91c2VFdmVudFRvUG9pbnQoZSksICdtb3VzZW1vdmUnLCBtb3VzZUV2ZW50VG9Qb2ludCk7XG5cbmNvbnN0IGdldEFjdHVhbEV2ZW50ID0gKGUpID0+IGUub3JpZ2luYWxFdmVudCB8fCBlO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmFjayBleHRlbmRzIEFjdGlvbiB7XG4gICAgc3RhcnQoaW5wdXQpIHtcbiAgICAgICAgc3VwZXIuc3RhcnQoKTtcblxuICAgICAgICBpZiAoaW5wdXQpIHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXQgPSBpbnB1dC5zdGF0ZSA/IGlucHV0IDogY3JlYXRlUG9pbnRlcihnZXRBY3R1YWxFdmVudChpbnB1dCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pbnB1dE9mZnNldCA9IHt9O1xuICAgICAgICB0aGlzLmlucHV0T3JpZ2luID0geyAuLi50aGlzLmlucHV0LnN0YXRlIH07XG4gICAgICAgIHRoaXMuaW5wdXQuc3RhcnQoKTtcbiAgICB9XG5cbiAgICBzdG9wKCkge1xuICAgICAgICBzdXBlci5zdG9wKCk7XG4gICAgICAgIHRoaXMuaW5wdXQuc3RvcCgpO1xuICAgIH1cblxuICAgIG9uVXBkYXRlKHRyYWNrLCBmcmFtZVN0YW1wLCBlbGFwc2VkKSB7XG4gICAgICAgIHRoaXMuaW5wdXRPZmZzZXQgPSBvZmZzZXQodGhpcy5pbnB1dE9yaWdpbiwgdGhpcy5pbnB1dC5zdGF0ZSk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bVZhbHVlS2V5czsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSB0aGlzLnZhbHVlS2V5c1tpXTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuaW5wdXRPZmZzZXQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUuZGlyZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSB0aGlzLmlucHV0LnN0YXRlW2tleV07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IHZhbHVlLm9yaWdpbiArIHRoaXMuaW5wdXRPZmZzZXRba2V5XTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBTbW9vdGggdmFsdWUgaWYgd2UgaGF2ZSBzbW9vdGhpbmdcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUuc21vb3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSBzbW9vdGgodmFsdWUuY3VycmVudCwgdmFsdWUucHJldiwgZWxhcHNlZCwgdmFsdWUuc21vb3RoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXREZWZhdWx0VmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdXBlci5nZXREZWZhdWx0VmFsdWUoKSxcbiAgICAgICAgICAgIGFtcDogMSxcbiAgICAgICAgICAgIGVzY2FwZUFtcDogMCxcbiAgICAgICAgICAgIGRpcmVjdDogZmFsc2VcbiAgICAgICAgfTtcbiAgICB9XG59XG4iXX0=