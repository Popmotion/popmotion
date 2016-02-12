'use strict';

exports.__esModule = true;

var _transformProps = require('./transform-props');

var _transformProps2 = _interopRequireDefault(_transformProps);

var _prefixer = require('./prefixer');

var _prefixer2 = _interopRequireDefault(_prefixer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TRANSLATE_Z = 'translateZ';

exports.default = function (state, disableHardwareAcceleration) {
    var propertyString = '';
    var transformString = '';
    var transformHasZ = false;

    for (var key in state) {
        if (state.hasOwnProperty(key)) {
            var value = state[key];

            if (_transformProps2.default[key]) {
                transformString += key + '(' + value + ') ';
                transformHasZ = key === TRANSLATE_Z ? true : transformHasZ;
            } else {
                propertyString += ';' + (0, _prefixer2.default)(key) + ':' + value;
            }
        }
    }

    if (transformString !== '') {
        if (!transformHasZ && !disableHardwareAcceleration) {
            transformString += TRANSLATE_Z + '(0px)';
        }

        propertyString += ';' + (0, _prefixer2.default)('transform') + ':' + transformString;
    }

    return propertyString;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZGFwdGVyL2Nzcy9idWlsZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUdBLElBQU0sY0FBYyxZQUFkOztrQkFFUyxVQUFDLEtBQUQsRUFBUSwyQkFBUixFQUF3QztBQUNuRCxRQUFJLGlCQUFpQixFQUFqQixDQUQrQztBQUVuRCxRQUFJLGtCQUFrQixFQUFsQixDQUYrQztBQUduRCxRQUFJLGdCQUFnQixLQUFoQixDQUgrQzs7QUFLbkQsU0FBSyxJQUFJLEdBQUosSUFBVyxLQUFoQixFQUF1QjtBQUNuQixZQUFJLE1BQU0sY0FBTixDQUFxQixHQUFyQixDQUFKLEVBQStCO0FBQzNCLGdCQUFNLFFBQVEsTUFBTSxHQUFOLENBQVIsQ0FEcUI7O0FBRzNCLGdCQUFJLHlCQUFlLEdBQWYsQ0FBSixFQUF5QjtBQUNyQixtQ0FBbUIsTUFBTSxHQUFOLEdBQVksS0FBWixHQUFvQixJQUFwQixDQURFO0FBRXJCLGdDQUFnQixHQUFDLEtBQVEsV0FBUixHQUF1QixJQUF4QixHQUErQixhQUEvQixDQUZLO2FBQXpCLE1BSU87QUFDSCxrQ0FBa0IsTUFBTSx3QkFBUyxHQUFULENBQU4sR0FBc0IsR0FBdEIsR0FBNEIsS0FBNUIsQ0FEZjthQUpQO1NBSEo7S0FESjs7QUFjQSxRQUFJLG9CQUFvQixFQUFwQixFQUF3QjtBQUN4QixZQUFJLENBQUMsYUFBRCxJQUFrQixDQUFDLDJCQUFELEVBQThCO0FBQ2hELCtCQUFtQixjQUFjLE9BQWQsQ0FENkI7U0FBcEQ7O0FBSUEsMEJBQWtCLE1BQU0sd0JBQVMsV0FBVCxDQUFOLEdBQThCLEdBQTlCLEdBQW9DLGVBQXBDLENBTE07S0FBNUI7O0FBUUEsV0FBTyxjQUFQLENBM0JtRDtDQUF4QyIsImZpbGUiOiJidWlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0cmFuc2Zvcm1Qcm9wcyBmcm9tICcuL3RyYW5zZm9ybS1wcm9wcyc7XG5pbXBvcnQgcHJlZml4ZXIgZnJvbSAnLi9wcmVmaXhlcic7XG5cbmNvbnN0IFRSQU5TTEFURV9aID0gJ3RyYW5zbGF0ZVonO1xuXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUsIGRpc2FibGVIYXJkd2FyZUFjY2VsZXJhdGlvbikgPT4ge1xuICAgIGxldCBwcm9wZXJ0eVN0cmluZyA9ICcnO1xuICAgIGxldCB0cmFuc2Zvcm1TdHJpbmcgPSAnJztcbiAgICBsZXQgdHJhbnNmb3JtSGFzWiA9IGZhbHNlO1xuXG4gICAgZm9yIChsZXQga2V5IGluIHN0YXRlKSB7XG4gICAgICAgIGlmIChzdGF0ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHN0YXRlW2tleV07XG5cbiAgICAgICAgICAgIGlmICh0cmFuc2Zvcm1Qcm9wc1trZXldKSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtU3RyaW5nICs9IGtleSArICcoJyArIHZhbHVlICsgJykgJztcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1IYXNaID0gKGtleSA9PT0gVFJBTlNMQVRFX1opID8gdHJ1ZSA6IHRyYW5zZm9ybUhhc1o7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcHJvcGVydHlTdHJpbmcgKz0gJzsnICsgcHJlZml4ZXIoa2V5KSArICc6JyArIHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRyYW5zZm9ybVN0cmluZyAhPT0gJycpIHtcbiAgICAgICAgaWYgKCF0cmFuc2Zvcm1IYXNaICYmICFkaXNhYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24pIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybVN0cmluZyArPSBUUkFOU0xBVEVfWiArICcoMHB4KSc7XG4gICAgICAgIH1cblxuICAgICAgICBwcm9wZXJ0eVN0cmluZyArPSAnOycgKyBwcmVmaXhlcigndHJhbnNmb3JtJykgKyAnOicgKyB0cmFuc2Zvcm1TdHJpbmc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnR5U3RyaW5nO1xufTsiXX0=