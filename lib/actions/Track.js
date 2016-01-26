'use strict';

exports.__esModule = true;

var _Action2 = require('./Action');

var _Action3 = _interopRequireDefault(_Action2);

var _Pointer = require('../input/Pointer');

var _Pointer2 = _interopRequireDefault(_Pointer);

var _calc = require('../inc/calc');

var _utils = require('../inc/utils');

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
    return e.touches ? new Pointer(mouseEventToPoint(e), 'mousemove', mouseEventToPoint) : new Pointer(touchEventToPoint(e), 'touchmove', touchEventToPoint);
};

var getActualEvent = function (e) {
    return e.originalEvent || e;
};

var Track = function (_Action) {
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

    Track.prototype.onUpdate = function onUpdate(track, frameDuration, elapsed) {
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
}(_Action3.default);

exports.default = Track;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL1RyYWNrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVdBLElBQU0sb0JBQW9CLFVBQUMsQ0FBRDtXQUFRO0FBQzlCLFdBQUcsRUFBRSxLQUFGO0FBQ0gsV0FBRyxFQUFFLEtBQUY7O0NBRm1COztBQUsxQixJQUFNLG9CQUFvQjtRQUFHO1dBQXNCO0FBQy9DLFdBQUcsZUFBZSxDQUFmLEVBQWtCLE9BQWxCO0FBQ0gsV0FBRyxlQUFlLENBQWYsRUFBa0IsT0FBbEI7O0NBRm1COztBQUsxQixJQUFNLGdCQUFnQixVQUFDLENBQUQ7V0FBTyxFQUFFLE9BQUYsR0FDekIsSUFBSSxPQUFKLENBQVksa0JBQWtCLENBQWxCLENBQVosRUFBa0MsV0FBbEMsRUFBK0MsaUJBQS9DLENBRHlCLEdBRXpCLElBQUksT0FBSixDQUFZLGtCQUFrQixDQUFsQixDQUFaLEVBQWtDLFdBQWxDLEVBQStDLGlCQUEvQyxDQUZ5QjtDQUFQOztBQUl0QixJQUFNLGlCQUFpQixVQUFDLENBQUQ7V0FBTyxFQUFFLGFBQUYsSUFBbUIsQ0FBbkI7Q0FBUDs7SUFFRjs7O0FBQ2pCLGFBRGlCLEtBQ2pCLENBQVksS0FBWixFQUFtQixLQUFuQixFQUEwQjs4QkFEVCxPQUNTOztxREFDdEIsbUJBQU0sS0FBTixHQURzQjs7QUFFdEIsY0FBSyxLQUFMLEdBQWEsTUFBTSxLQUFOLEdBQWMsS0FBZCxHQUFzQixjQUFjLGVBQWUsS0FBZixDQUFkLENBQXRCLENBRlM7O0tBQTFCOztBQURpQixvQkFNakIseUJBQVE7QUFDSiwwQkFBTSxLQUFOLFlBREk7QUFFSixhQUFLLFdBQUwsR0FBbUIsRUFBbkIsQ0FGSTs7O0FBTlMsb0JBV2pCLDZCQUFTLE9BQU8sZUFBZSxTQUFTOzs7QUFDcEMsYUFBSyxXQUFMLEdBQW1CLFVBckNsQixPQXFDa0IsQ0FBTyxLQUFLLFdBQUwsRUFBa0IsS0FBSyxLQUFMLENBQVcsS0FBWCxDQUE1QyxDQURvQzs7QUFHcEMsbUJBdENDLEtBc0NELENBQUssS0FBSyxNQUFMLEVBQWEsVUFBQyxLQUFELEVBQVEsR0FBUixFQUFnQjtBQUM5QixnQkFBSSxPQUFLLFdBQUwsQ0FBaUIsY0FBakIsQ0FBZ0MsR0FBaEMsQ0FBSixFQUEwQztBQUN0QyxvQkFBSSxNQUFNLE1BQU4sRUFBYztBQUNkLDBCQUFNLE9BQU4sR0FBZ0IsT0FBSyxLQUFMLENBQVcsS0FBWCxDQUFpQixHQUFqQixDQUFoQixDQURjO2lCQUFsQixNQUVPO0FBQ0gsMEJBQU0sT0FBTixHQUFnQixNQUFNLE1BQU4sR0FBZSxPQUFLLFdBQUwsQ0FBaUIsR0FBakIsQ0FBZixDQURiO2lCQUZQO2FBREo7U0FEYyxDQUFsQixDQUhvQzs7O0FBWHZCLG9CQXlCakIsNkNBQWtCO0FBQ2QsZUFBTztBQUNILGlCQUFLLENBQUw7QUFDQSx1QkFBVyxDQUFYO0FBQ0Esb0JBQVEsS0FBUjtBQUNBLG9CQUFRLENBQVI7U0FKSixDQURjOzs7V0F6QkQiLCJmaWxlIjoiVHJhY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWN0aW9uIGZyb20gJy4vQWN0aW9uJztcbmltcG9ydCBNb3VzZSBmcm9tICcuLi9pbnB1dC9Qb2ludGVyJztcbmltcG9ydCB7IG9mZnNldCB9IGZyb20gJy4uL2luYy9jYWxjJztcbmltcG9ydCB7IGVhY2ggfSBmcm9tICcuLi9pbmMvdXRpbHMnO1xuXG4vKlxuICAgIFNjcmFwZSB4L3kgY29vcmRpbmF0ZXMgZnJvbSBwcm92aWRlZCBldmVudFxuXG4gICAgQHBhcmFtIFtldmVudF1cbiAgICBAcmV0dXJuIFtvYmplY3RdXG4qL1xuY29uc3QgbW91c2VFdmVudFRvUG9pbnQgPSAoZSkgPT4gKHtcbiAgICB4OiBlLnBhZ2VYLFxuICAgIHk6IGUucGFnZVlcbn0pO1xuXG5jb25zdCB0b3VjaEV2ZW50VG9Qb2ludCA9ICh7IGNoYW5nZWRUb3VjaGVzIH0pID0+ICh7XG4gICAgeDogY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCxcbiAgICB5OiBjaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZXG59KTtcblxuY29uc3QgY3JlYXRlUG9pbnRlciA9IChlKSA9PiBlLnRvdWNoZXMgP1xuICAgIG5ldyBQb2ludGVyKG1vdXNlRXZlbnRUb1BvaW50KGUpLCAnbW91c2Vtb3ZlJywgbW91c2VFdmVudFRvUG9pbnQpIDpcbiAgICBuZXcgUG9pbnRlcih0b3VjaEV2ZW50VG9Qb2ludChlKSwgJ3RvdWNobW92ZScsIHRvdWNoRXZlbnRUb1BvaW50KTtcblxuY29uc3QgZ2V0QWN0dWFsRXZlbnQgPSAoZSkgPT4gZS5vcmlnaW5hbEV2ZW50IHx8IGU7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyYWNrIGV4dGVuZHMgQWN0aW9uIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcywgaW5wdXQpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLmlucHV0ID0gaW5wdXQuc3RhdGUgPyBpbnB1dCA6IGNyZWF0ZVBvaW50ZXIoZ2V0QWN0dWFsRXZlbnQoaW5wdXQpKTtcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgc3VwZXIuc3RhcnQoKTtcbiAgICAgICAgdGhpcy5pbnB1dE9yaWdpbiA9IHt9O1xuICAgIH1cblxuICAgIG9uVXBkYXRlKHRyYWNrLCBmcmFtZUR1cmF0aW9uLCBlbGFwc2VkKSB7XG4gICAgICAgIHRoaXMuaW5wdXRPZmZzZXQgPSBvZmZzZXQodGhpcy5pbnB1dE9yaWdpbiwgdGhpcy5pbnB1dC5zdGF0ZSk7XG5cbiAgICAgICAgZWFjaCh0aGlzLnZhbHVlcywgKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlucHV0T2Zmc2V0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUuZGlyZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSB0aGlzLmlucHV0LnN0YXRlW2tleV07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IHZhbHVlLm9yaWdpbiArIHRoaXMuaW5wdXRPZmZzZXRba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldERlZmF1bHRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFtcDogMSxcbiAgICAgICAgICAgIGVzY2FwZUFtcDogMCxcbiAgICAgICAgICAgIGRpcmVjdDogZmFsc2UsXG4gICAgICAgICAgICBzbW9vdGg6IDBcbiAgICAgICAgfTtcbiAgICB9XG59XG4iXX0=