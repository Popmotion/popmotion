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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hZGFwdGVyL2F0dHItYWRhcHRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7UUFFZ0I7UUFJQTs7Ozs7Ozs7QUFKVCxTQUFTLE1BQVQsQ0FBZ0IsR0FBaEIsRUFBcUI7QUFDeEIsV0FBTyxLQUFLLE9BQUwsQ0FBYSxZQUFiLENBQTBCLEdBQTFCLENBQVAsQ0FEd0I7Q0FBckI7O0FBSUEsU0FBUyxNQUFULENBQWdCLEtBQWhCLEVBQXVCO0FBQzFCLFNBQUssSUFBSSxHQUFKLElBQVcsS0FBaEIsRUFBdUI7QUFDbkIsWUFBSSxNQUFNLGNBQU4sQ0FBcUIsR0FBckIsQ0FBSixFQUErQjtBQUMzQixpQkFBSyxPQUFMLENBQWEsWUFBYixDQUEwQixHQUExQixFQUErQixNQUFNLEdBQU4sQ0FBL0IsRUFEMkI7U0FBL0I7S0FESjtDQURHOztrQkFRUSxVQUFDLE9BQUQ7V0FBYSx1QkFBYyxFQUFFLGdCQUFGLEVBQVcsY0FBWCxFQUFtQixjQUFuQixFQUFkO0NBQWIiLCJmaWxlIjoiYXR0ci1hZGFwdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyZWF0ZUFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldHRlcihrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZShrZXkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0dGVyKHByb3BzKSB7XG4gICAgZm9yIChsZXQga2V5IGluIHByb3BzKSB7XG4gICAgICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgcHJvcHNba2V5XSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IChlbGVtZW50KSA9PiBjcmVhdGVBZGFwdGVyKHsgZWxlbWVudCwgZ2V0dGVyLCBzZXR0ZXIgfSk7Il19