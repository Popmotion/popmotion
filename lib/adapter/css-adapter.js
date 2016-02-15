'use strict';

exports.__esModule = true;

var _stateMap = require('./css/state-map');

var _stateMap2 = _interopRequireDefault(_stateMap);

var _valueTypeMap = require('./css/value-type-map');

var _valueTypeMap2 = _interopRequireDefault(_valueTypeMap);

var _build = require('./css/build');

var _build2 = _interopRequireDefault(_build);

var _prefixer = require('./css/prefixer');

var _prefixer2 = _interopRequireDefault(_prefixer);

var _transformProps = require('./css/transform-props');

var _transformProps2 = _interopRequireDefault(_transformProps);

var _adapter = require('./adapter');

var _adapter2 = _interopRequireDefault(_adapter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getter(key) {
    return !_transformProps2.default[key] ? window.getComputedStyle(this.element, null)[(0, _prefixer2.default)(key)] : _valueTypeMap2.default[key].defaultProps.current || 0;
}

function setter(props) {
    this.element.style.cssText += (0, _build2.default)(props);
}

exports.default = function (element) {
    return (0, _adapter2.default)({ element: element, stateMap: _stateMap2.default, valueTypeMap: _valueTypeMap2.default, getter: getter, setter: setter });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hZGFwdGVyL2Nzcy1hZGFwdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9BLFNBQVMsTUFBVCxDQUFpQixHQUFqQixFQUFzQjtBQUNsQixXQUFPLENBQUUseUJBQWUsR0FBZixDQUFELEdBQ0osT0FBTyxnQkFBUCxDQUF3QixLQUFLLE9BQUwsRUFBYyxJQUF0QyxFQUE0Qyx3QkFBUyxHQUFULENBQTVDLENBREcsR0FFSCx1QkFBYSxHQUFiLEVBQWtCLFlBQWxCLENBQStCLE9BQS9CLElBQTBDLENBQTFDLENBSGM7Q0FBdEI7O0FBTUEsU0FBUyxNQUFULENBQWdCLEtBQWhCLEVBQXVCO0FBQ25CLFNBQUssT0FBTCxDQUFhLEtBQWIsQ0FBbUIsT0FBbkIsSUFBOEIscUJBQW9CLEtBQXBCLENBQTlCLENBRG1CO0NBQXZCOztrQkFJZSxVQUFDLE9BQUQ7V0FBYSx1QkFBYyxFQUFFLGdCQUFGLEVBQVcsNEJBQVgsRUFBcUIsb0NBQXJCLEVBQW1DLGNBQW5DLEVBQTJDLGNBQTNDLEVBQWQ7Q0FBYiIsImZpbGUiOiJjc3MtYWRhcHRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdGF0ZU1hcCBmcm9tICcuL2Nzcy9zdGF0ZS1tYXAnO1xuaW1wb3J0IHZhbHVlVHlwZU1hcCBmcm9tICcuL2Nzcy92YWx1ZS10eXBlLW1hcCc7XG5pbXBvcnQgYnVpbGRQcm9wZXJ0eVN0cmluZyBmcm9tICcuL2Nzcy9idWlsZCc7XG5pbXBvcnQgcHJlZml4ZXIgZnJvbSAnLi9jc3MvcHJlZml4ZXInO1xuaW1wb3J0IHRyYW5zZm9ybVByb3BzIGZyb20gJy4vY3NzL3RyYW5zZm9ybS1wcm9wcyc7XG5pbXBvcnQgY3JlYXRlQWRhcHRlciBmcm9tICcuL2FkYXB0ZXInO1xuXG5mdW5jdGlvbiBnZXR0ZXIgKGtleSkge1xuICAgIHJldHVybiAoIXRyYW5zZm9ybVByb3BzW2tleV0pID9cbiAgICAgICAgd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5lbGVtZW50LCBudWxsKVtwcmVmaXhlcihrZXkpXSA6XG4gICAgICAgIHZhbHVlVHlwZU1hcFtrZXldLmRlZmF1bHRQcm9wcy5jdXJyZW50IHx8IDA7XG59XG5cbmZ1bmN0aW9uIHNldHRlcihwcm9wcykge1xuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5jc3NUZXh0ICs9IGJ1aWxkUHJvcGVydHlTdHJpbmcocHJvcHMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCAoZWxlbWVudCkgPT4gY3JlYXRlQWRhcHRlcih7IGVsZW1lbnQsIHN0YXRlTWFwLCB2YWx1ZVR5cGVNYXAsIGdldHRlciwgc2V0dGVyIH0pOyJdfQ==