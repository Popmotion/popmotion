'use strict';

exports.__esModule = true;
exports.getter = getter;
exports.setter = setter;

var _adapter = require('./adapter');

var _adapter2 = _interopRequireDefault(_adapter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getter(key) {
    return this.element.getAttribute(key);
}

function setter(props) {
    for (var key in props) {
        if (props.hasOwnProperty(key)) {
            this.element.setAttribute(key, props[key]);
        }
    }
}

exports.default = function (element) {
    return (0, _adapter2.default)({ element: element, getter: getter, setter: setter });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hZGFwdGVyL2F0dHItYWRhcHRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7UUFFZ0IsTUFBTSxHQUFOLE1BQU07UUFJTixNQUFNLEdBQU4sTUFBTTs7Ozs7Ozs7QUFKZixTQUFTLE1BQU0sQ0FBQyxHQUFHLEVBQUU7QUFDeEIsV0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztDQUN6Qzs7QUFFTSxTQUFTLE1BQU0sQ0FBQyxLQUFLLEVBQUU7QUFDMUIsU0FBSyxJQUFJLEdBQUcsSUFBSSxLQUFLLEVBQUU7QUFDbkIsWUFBSSxLQUFLLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO0FBQzNCLGdCQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDOUM7S0FDSjtDQUNKOztrQkFFYyxVQUFDLE9BQU87V0FBSyx1QkFBYyxFQUFFLE9BQU8sRUFBUCxPQUFPLEVBQUUsTUFBTSxFQUFOLE1BQU0sRUFBRSxNQUFNLEVBQU4sTUFBTSxFQUFFLENBQUM7Q0FBQSIsImZpbGUiOiJhdHRyLWFkYXB0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3JlYXRlQWRhcHRlciBmcm9tICcuL2FkYXB0ZXInO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0dGVyKGtleSkge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKGtleSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXR0ZXIocHJvcHMpIHtcbiAgICBmb3IgKGxldCBrZXkgaW4gcHJvcHMpIHtcbiAgICAgICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCBwcm9wc1trZXldKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKGVsZW1lbnQpID0+IGNyZWF0ZUFkYXB0ZXIoeyBlbGVtZW50LCBnZXR0ZXIsIHNldHRlciB9KTsiXX0=