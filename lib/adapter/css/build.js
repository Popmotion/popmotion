'use strict';

exports.__esModule = true;

var _transformProps = require('./transform-props');

var _transformProps2 = _interopRequireDefault(_transformProps);

var _prefixer = require('./prefixer');

var _prefixer2 = _interopRequireDefault(_prefixer);

var _utils = require('../../inc/utils');

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
                propertyString += ';' + (0, _prefixer2.default)((0, _utils.camelToDash)(key)) + ':' + value;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZGFwdGVyL2Nzcy9idWlsZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBSUEsSUFBTSxjQUFjLFlBQWQ7O2tCQUVTLFVBQUMsS0FBRCxFQUFRLDJCQUFSLEVBQXdDO0FBQ25ELFFBQUksaUJBQWlCLEVBQWpCLENBRCtDO0FBRW5ELFFBQUksa0JBQWtCLEVBQWxCLENBRitDO0FBR25ELFFBQUksZ0JBQWdCLEtBQWhCLENBSCtDOztBQUtuRCxTQUFLLElBQUksR0FBSixJQUFXLEtBQWhCLEVBQXVCO0FBQ25CLFlBQUksTUFBTSxjQUFOLENBQXFCLEdBQXJCLENBQUosRUFBK0I7QUFDM0IsZ0JBQU0sUUFBUSxNQUFNLEdBQU4sQ0FBUixDQURxQjs7QUFHM0IsZ0JBQUkseUJBQWUsR0FBZixDQUFKLEVBQXlCO0FBQ3JCLG1DQUFtQixNQUFNLEdBQU4sR0FBWSxLQUFaLEdBQW9CLElBQXBCLENBREU7QUFFckIsZ0NBQWdCLEdBQUMsS0FBUSxXQUFSLEdBQXVCLElBQXhCLEdBQStCLGFBQS9CLENBRks7YUFBekIsTUFJTztBQUNILGtDQUFrQixNQUFNLHdCQUFTLFdBbEJ4QyxZQWtCd0MsQ0FBWSxHQUFaLENBQVQsQ0FBTixHQUFtQyxHQUFuQyxHQUF5QyxLQUF6QyxDQURmO2FBSlA7U0FISjtLQURKOztBQWNBLFFBQUksb0JBQW9CLEVBQXBCLEVBQXdCO0FBQ3hCLFlBQUksQ0FBQyxhQUFELElBQWtCLENBQUMsMkJBQUQsRUFBOEI7QUFDaEQsK0JBQW1CLGNBQWMsT0FBZCxDQUQ2QjtTQUFwRDs7QUFJQSwwQkFBa0IsTUFBTSx3QkFBUyxXQUFULENBQU4sR0FBOEIsR0FBOUIsR0FBb0MsZUFBcEMsQ0FMTTtLQUE1Qjs7QUFRQSxXQUFPLGNBQVAsQ0EzQm1EO0NBQXhDIiwiZmlsZSI6ImJ1aWxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRyYW5zZm9ybVByb3BzIGZyb20gJy4vdHJhbnNmb3JtLXByb3BzJztcbmltcG9ydCBwcmVmaXhlciBmcm9tICcuL3ByZWZpeGVyJztcbmltcG9ydCB7IGNhbWVsVG9EYXNoIH0gZnJvbSAnLi4vLi4vaW5jL3V0aWxzJztcblxuY29uc3QgVFJBTlNMQVRFX1ogPSAndHJhbnNsYXRlWic7XG5cbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSwgZGlzYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uKSA9PiB7XG4gICAgbGV0IHByb3BlcnR5U3RyaW5nID0gJyc7XG4gICAgbGV0IHRyYW5zZm9ybVN0cmluZyA9ICcnO1xuICAgIGxldCB0cmFuc2Zvcm1IYXNaID0gZmFsc2U7XG5cbiAgICBmb3IgKGxldCBrZXkgaW4gc3RhdGUpIHtcbiAgICAgICAgaWYgKHN0YXRlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gc3RhdGVba2V5XTtcblxuICAgICAgICAgICAgaWYgKHRyYW5zZm9ybVByb3BzW2tleV0pIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1TdHJpbmcgKz0ga2V5ICsgJygnICsgdmFsdWUgKyAnKSAnO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybUhhc1ogPSAoa2V5ID09PSBUUkFOU0xBVEVfWikgPyB0cnVlIDogdHJhbnNmb3JtSGFzWjtcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eVN0cmluZyArPSAnOycgKyBwcmVmaXhlcihjYW1lbFRvRGFzaChrZXkpKSArICc6JyArIHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRyYW5zZm9ybVN0cmluZyAhPT0gJycpIHtcbiAgICAgICAgaWYgKCF0cmFuc2Zvcm1IYXNaICYmICFkaXNhYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24pIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybVN0cmluZyArPSBUUkFOU0xBVEVfWiArICcoMHB4KSc7XG4gICAgICAgIH1cblxuICAgICAgICBwcm9wZXJ0eVN0cmluZyArPSAnOycgKyBwcmVmaXhlcigndHJhbnNmb3JtJykgKyAnOicgKyB0cmFuc2Zvcm1TdHJpbmc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnR5U3RyaW5nO1xufTsiXX0=