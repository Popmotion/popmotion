'use strict';

exports.__esModule = true;

var _utils = require('../../inc/utils');

var _transformProps = require('./transform-props');

var _transformProps2 = _interopRequireDefault(_transformProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TRANSLATE_Z = 'translateZ';

exports.default = function (state, disableHardwareAcceleration) {
    var propertyString = '';
    var transformString = '';
    var transformHasZ = false;

    (0, _utils.each)(state, function (value, key) {
        if (_transformProps2.default[key]) {
            transformString += key + '(' + value + ') ';
            transformHasZ = key === TRANSLATE_Z ? true : transformHasZ;
        } else {
            propertyString += ';' + key + ':' + value;
        }
    });

    if (transformString !== '') {
        if (!transformHasZ && !disableHardwareAcceleration) {
            transformString += TRANSLATE_Z + '(0px)';
        }

        propertyString += ';transform:' + transformString;
    }

    return propertyString;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yZW5kZXIvY3NzL2J1aWxkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUdBLElBQU0sY0FBYyxZQUFkOztrQkFFUyxVQUFDLEtBQUQsRUFBUSwyQkFBUixFQUF3QztBQUNuRCxRQUFJLGlCQUFpQixFQUFqQixDQUQrQztBQUVuRCxRQUFJLGtCQUFrQixFQUFsQixDQUYrQztBQUduRCxRQUFJLGdCQUFnQixLQUFoQixDQUgrQzs7QUFLbkQsZUFWSyxLQVVMLENBQUssS0FBTCxFQUFZLFVBQUMsS0FBRCxFQUFRLEdBQVIsRUFBZ0I7QUFDeEIsWUFBSSx5QkFBZSxHQUFmLENBQUosRUFBeUI7QUFDckIsK0JBQW1CLE1BQU0sR0FBTixHQUFZLEtBQVosR0FBb0IsSUFBcEIsQ0FERTtBQUVyQiw0QkFBZ0IsR0FBQyxLQUFRLFdBQVIsR0FBdUIsSUFBeEIsR0FBK0IsYUFBL0IsQ0FGSztTQUF6QixNQUlPO0FBQ0gsOEJBQWtCLE1BQU0sR0FBTixHQUFZLEdBQVosR0FBa0IsS0FBbEIsQ0FEZjtTQUpQO0tBRFEsQ0FBWixDQUxtRDs7QUFlbkQsUUFBSSxvQkFBb0IsRUFBcEIsRUFBd0I7QUFDeEIsWUFBSSxDQUFDLGFBQUQsSUFBa0IsQ0FBQywyQkFBRCxFQUE4QjtBQUNoRCwrQkFBbUIsY0FBYyxPQUFkLENBRDZCO1NBQXBEOztBQUlBLDBCQUFrQixnQkFBZ0IsZUFBaEIsQ0FMTTtLQUE1Qjs7QUFRQSxXQUFPLGNBQVAsQ0F2Qm1EO0NBQXhDIiwiZmlsZSI6ImJ1aWxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZWFjaCB9IGZyb20gJy4uLy4uL2luYy91dGlscyc7XG5pbXBvcnQgdHJhbnNmb3JtUHJvcHMgZnJvbSAnLi90cmFuc2Zvcm0tcHJvcHMnO1xuXG5jb25zdCBUUkFOU0xBVEVfWiA9ICd0cmFuc2xhdGVaJztcblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlLCBkaXNhYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24pID0+IHtcbiAgICBsZXQgcHJvcGVydHlTdHJpbmcgPSAnJztcbiAgICBsZXQgdHJhbnNmb3JtU3RyaW5nID0gJyc7XG4gICAgbGV0IHRyYW5zZm9ybUhhc1ogPSBmYWxzZTtcblxuICAgIGVhY2goc3RhdGUsICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgIGlmICh0cmFuc2Zvcm1Qcm9wc1trZXldKSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm1TdHJpbmcgKz0ga2V5ICsgJygnICsgdmFsdWUgKyAnKSAnO1xuICAgICAgICAgICAgdHJhbnNmb3JtSGFzWiA9IChrZXkgPT09IFRSQU5TTEFURV9aKSA/IHRydWUgOiB0cmFuc2Zvcm1IYXNaO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9wZXJ0eVN0cmluZyArPSAnOycgKyBrZXkgKyAnOicgKyB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHRyYW5zZm9ybVN0cmluZyAhPT0gJycpIHtcbiAgICAgICAgaWYgKCF0cmFuc2Zvcm1IYXNaICYmICFkaXNhYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24pIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybVN0cmluZyArPSBUUkFOU0xBVEVfWiArICcoMHB4KSc7XG4gICAgICAgIH1cblxuICAgICAgICBwcm9wZXJ0eVN0cmluZyArPSAnO3RyYW5zZm9ybTonICsgdHJhbnNmb3JtU3RyaW5nO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wZXJ0eVN0cmluZztcbn07Il19