'use strict';

exports.__esModule = true;

var _Input2 = require('./Input');

var _Input3 = _interopRequireDefault(_Input2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pointer = function (_Input) {
    _inherits(Pointer, _Input);

    function Pointer(initialState, moveEvent, eventToPoint) {
        _classCallCheck(this, Pointer);

        var _this = _possibleConstructorReturn(this, _Input.call(this, initialState));

        _this.eventToPoint = eventToPoint;
        _this.moveEvent = moveEvent;
        return _this;
    }

    Pointer.prototype.latest = function latest(e) {
        _Input.prototype.latest.call(this, this.eventToPoint(e));
        e.preventDefault();
    };

    Pointer.prototype.start = function start() {
        _Input.prototype.start.call(this);
        document.documentElement.addEventListener(this.moveEvent, this.latest);
    };

    Pointer.prototype.stop = function stop() {
        _Input.prototype.stop.call(this);
        document.documentElement.removeEventListener(this.moveEvent, this.latest);
    };

    return Pointer;
}(_Input3.default);

exports.default = Pointer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbnB1dC9Qb2ludGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUI7OztBQUNqQixhQURpQixPQUNqQixDQUFZLFlBQVosRUFBMEIsU0FBMUIsRUFBcUMsWUFBckMsRUFBbUQ7OEJBRGxDLFNBQ2tDOztxREFDL0Msa0JBQU0sWUFBTixHQUQrQzs7QUFFL0MsY0FBSyxZQUFMLEdBQW9CLFlBQXBCLENBRitDO0FBRy9DLGNBQUssU0FBTCxHQUFpQixTQUFqQixDQUgrQzs7S0FBbkQ7O0FBRGlCLHNCQU9qQix5QkFBTyxHQUFHO0FBQ04seUJBQU0sTUFBTixZQUFhLEtBQUssWUFBTCxDQUFrQixDQUFsQixDQUFiLEVBRE07QUFFTixVQUFFLGNBQUYsR0FGTTs7O0FBUE8sc0JBWWpCLHlCQUFRO0FBQ0oseUJBQU0sS0FBTixZQURJO0FBRUosaUJBQVMsZUFBVCxDQUF5QixnQkFBekIsQ0FBMEMsS0FBSyxTQUFMLEVBQWdCLEtBQUssTUFBTCxDQUExRCxDQUZJOzs7QUFaUyxzQkFpQmpCLHVCQUFPO0FBQ0gseUJBQU0sSUFBTixZQURHO0FBRUgsaUJBQVMsZUFBVCxDQUF5QixtQkFBekIsQ0FBNkMsS0FBSyxTQUFMLEVBQWdCLEtBQUssTUFBTCxDQUE3RCxDQUZHOzs7V0FqQlUiLCJmaWxlIjoiUG9pbnRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbnB1dCBmcm9tICcuL0lucHV0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9pbnRlciBleHRlbmRzIElucHV0IHtcbiAgICBjb25zdHJ1Y3Rvcihpbml0aWFsU3RhdGUsIG1vdmVFdmVudCwgZXZlbnRUb1BvaW50KSB7XG4gICAgICAgIHN1cGVyKGluaXRpYWxTdGF0ZSk7XG4gICAgICAgIHRoaXMuZXZlbnRUb1BvaW50ID0gZXZlbnRUb1BvaW50O1xuICAgICAgICB0aGlzLm1vdmVFdmVudCA9IG1vdmVFdmVudDtcbiAgICB9XG5cbiAgICBsYXRlc3QoZSkge1xuICAgICAgICBzdXBlci5sYXRlc3QodGhpcy5ldmVudFRvUG9pbnQoZSkpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHN1cGVyLnN0YXJ0KCk7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHRoaXMubW92ZUV2ZW50LCB0aGlzLmxhdGVzdCk7XG4gICAgfVxuXG4gICAgc3RvcCgpIHtcbiAgICAgICAgc3VwZXIuc3RvcCgpO1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLm1vdmVFdmVudCwgdGhpcy5sYXRlc3QpO1xuICAgIH1cbn1cbiJdfQ==