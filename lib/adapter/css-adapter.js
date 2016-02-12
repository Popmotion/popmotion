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

var _adapter = require('./adapter');

var _adapter2 = _interopRequireDefault(_adapter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getter(key) {
    return window.getComputedStyle(this.element, null)[(0, _prefixer2.default)(key)];
}

function setter(props) {
    this.element.style.cssText += (0, _build2.default)(props);
}

exports.default = function (element) {
    return (0, _adapter2.default)({ element: element, stateMap: _stateMap2.default, valueTypeMap: _valueTypeMap2.default, getter: getter, setter: setter });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hZGFwdGVyL2Nzcy1hZGFwdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTUEsU0FBUyxNQUFULENBQWlCLEdBQWpCLEVBQXNCO0FBQ2xCLFdBQU8sT0FBTyxnQkFBUCxDQUF3QixLQUFLLE9BQUwsRUFBYyxJQUF0QyxFQUE0Qyx3QkFBUyxHQUFULENBQTVDLENBQVAsQ0FEa0I7Q0FBdEI7O0FBSUEsU0FBUyxNQUFULENBQWdCLEtBQWhCLEVBQXVCO0FBQ25CLFNBQUssT0FBTCxDQUFhLEtBQWIsQ0FBbUIsT0FBbkIsSUFBOEIscUJBQW9CLEtBQXBCLENBQTlCLENBRG1CO0NBQXZCOztrQkFJZSxVQUFDLE9BQUQ7V0FBYSx1QkFBYyxFQUFFLGdCQUFGLEVBQVcsNEJBQVgsRUFBcUIsb0NBQXJCLEVBQW1DLGNBQW5DLEVBQTJDLGNBQTNDLEVBQWQ7Q0FBYiIsImZpbGUiOiJjc3MtYWRhcHRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdGF0ZU1hcCBmcm9tICcuL2Nzcy9zdGF0ZS1tYXAnO1xuaW1wb3J0IHZhbHVlVHlwZU1hcCBmcm9tICcuL2Nzcy92YWx1ZS10eXBlLW1hcCc7XG5pbXBvcnQgYnVpbGRQcm9wZXJ0eVN0cmluZyBmcm9tICcuL2Nzcy9idWlsZCc7XG5pbXBvcnQgcHJlZml4ZXIgZnJvbSAnLi9jc3MvcHJlZml4ZXInO1xuaW1wb3J0IGNyZWF0ZUFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyJztcblxuZnVuY3Rpb24gZ2V0dGVyIChrZXkpIHtcbiAgICByZXR1cm4gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5lbGVtZW50LCBudWxsKVtwcmVmaXhlcihrZXkpXTtcbn1cblxuZnVuY3Rpb24gc2V0dGVyKHByb3BzKSB7XG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLmNzc1RleHQgKz0gYnVpbGRQcm9wZXJ0eVN0cmluZyhwcm9wcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IChlbGVtZW50KSA9PiBjcmVhdGVBZGFwdGVyKHsgZWxlbWVudCwgc3RhdGVNYXAsIHZhbHVlVHlwZU1hcCwgZ2V0dGVyLCBzZXR0ZXIgfSk7Il19