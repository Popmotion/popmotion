'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.__esModule = true;

var _framesync = require('framesync');

var _uiUtils = require('ui-utils');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Input = (function (_Process) {
    _inherits(Input, _Process);

    function Input(initialValues, poll) {
        _classCallCheck(this, Input);

        var _this = _possibleConstructorReturn(this, _Process.call(this));

        _this.state = {};
        _this.offset = {};

        if ((0, _uiUtils.isFunc)(poll)) {
            _this.frameStart = function () {
                return _this.latest(_this.poll());
            };
        }
        return _this;
    }

    /*
        Manually add latest values
         @param [object]
    */

    Input.prototype.latest = function latest(props) {
        this.state = _extends({}, this.state, { props: props });
    };

    return Input;
})(_framesync.Process);

exports.default = Input;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbnB1dC9JbnB1dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0lBR3FCLEtBQUs7Y0FBTCxLQUFLOztBQUN0QixhQURpQixLQUFLLENBQ1YsYUFBYSxFQUFFLElBQUksRUFBRTs4QkFEaEIsS0FBSzs7cURBRWxCLG1CQUFPOztBQUNQLGNBQUssS0FBSyxHQUFHLEVBQUUsQ0FBQztBQUNoQixjQUFLLE1BQU0sR0FBRyxFQUFFLENBQUM7O0FBRWpCLFlBQUksYUFSSCxNQUFNLEVBUUksSUFBSSxDQUFDLEVBQUU7QUFDZCxrQkFBSyxVQUFVLEdBQUc7dUJBQU0sTUFBSyxNQUFNLENBQUMsTUFBSyxJQUFJLEVBQUUsQ0FBQzthQUFBLENBQUM7U0FDcEQ7O0tBQ0o7Ozs7OztBQUFBO0FBVGdCLFNBQUssV0FnQnRCLE1BQU0sbUJBQUMsS0FBSyxFQUFFO0FBQ1YsWUFBSSxDQUFDLEtBQUssZ0JBQVEsSUFBSSxDQUFDLEtBQUssSUFBRSxLQUFLLEVBQUwsS0FBSyxHQUFFLENBQUM7S0FDekM7O1dBbEJnQixLQUFLO2NBSGpCLE9BQU87O2tCQUdLLEtBQUsiLCJmaWxlIjoiSW5wdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm9jZXNzIH0gZnJvbSAnZnJhbWVzeW5jJztcbmltcG9ydCB7IGlzRnVuYyB9IGZyb20gJ3VpLXV0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXQgZXh0ZW5kcyBQcm9jZXNzIHtcbiAgICBjb25zdHJ1Y3Rvcihpbml0aWFsVmFsdWVzLCBwb2xsKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgICAgICAgdGhpcy5vZmZzZXQgPSB7fTtcblxuICAgICAgICBpZiAoaXNGdW5jKHBvbGwpKSB7XG4gICAgICAgICAgICB0aGlzLmZyYW1lU3RhcnQgPSAoKSA9PiB0aGlzLmxhdGVzdCh0aGlzLnBvbGwoKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBNYW51YWxseSBhZGQgbGF0ZXN0IHZhbHVlc1xuXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XVxuICAgICovXG4gICAgbGF0ZXN0KHByb3BzKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IC4uLnRoaXMuc3RhdGUsIHByb3BzIH07XG4gICAgfVxufVxuIl19