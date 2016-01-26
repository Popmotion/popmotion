'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.__esModule = true;

var _stateMap = require('../css/state-map');

var _stateMap2 = _interopRequireDefault(_stateMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var STROKE = 'stroke-';

exports.default = _extends({}, _stateMap2.default, {
    opacity: STROKE + 'opacity',
    width: STROKE + 'width',
    miterlimit: STROKE + 'miterlimit'
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yZW5kZXIvc3ZnLXBhdGgvc3RhdGUtbWFwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUVBLElBQU0sU0FBUyxTQUFUOzs7QUFJRixhQUFZLGtCQUFaO0FBQ0EsV0FBVSxnQkFBVjtBQUNBLGdCQUFlLHFCQUFmIiwiZmlsZSI6InN0YXRlLW1hcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3NTdGF0ZU1hcCBmcm9tICcuLi9jc3Mvc3RhdGUtbWFwJztcblxuY29uc3QgU1RST0tFID0gJ3N0cm9rZS0nO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgLi4uY3NzU3RhdGVNYXAsXG4gICAgb3BhY2l0eTogYCR7U1RST0tFfW9wYWNpdHlgLFxuICAgIHdpZHRoOiBgJHtTVFJPS0V9d2lkdGhgLFxuICAgIG1pdGVybGltaXQ6IGAke1NUUk9LRX1taXRlcmxpbWl0YFxufTsiXX0=