'use strict';

exports.__esModule = true;

var _utils = require('../../inc/utils');

var _transformProps = require('./transform-props');

var _transformProps2 = _interopRequireDefault(_transformProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TRANSLATE_Z = 'translateZ';

exports.default = buildPropertyString = function (state, disableHardwareAcceleration) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yZW5kZXIvY3NzL2J1aWxkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUdBLElBQU0sY0FBYyxZQUFkOztrQkFFUyxzQkFBc0IsVUFBQyxLQUFELEVBQVEsMkJBQVIsRUFBd0M7QUFDekUsUUFBSSxpQkFBaUIsRUFBakIsQ0FEcUU7QUFFekUsUUFBSSxrQkFBa0IsRUFBbEIsQ0FGcUU7QUFHekUsUUFBSSxnQkFBZ0IsS0FBaEIsQ0FIcUU7O0FBS3pFLGVBVkssS0FVTCxDQUFLLEtBQUwsRUFBWSxVQUFDLEtBQUQsRUFBUSxHQUFSLEVBQWdCO0FBQ3hCLFlBQUkseUJBQWUsR0FBZixDQUFKLEVBQXlCO0FBQ3JCLCtCQUFtQixNQUFNLEdBQU4sR0FBWSxLQUFaLEdBQW9CLElBQXBCLENBREU7QUFFckIsNEJBQWdCLEdBQUMsS0FBUSxXQUFSLEdBQXVCLElBQXhCLEdBQStCLGFBQS9CLENBRks7U0FBekIsTUFJTztBQUNILDhCQUFrQixNQUFNLEdBQU4sR0FBWSxHQUFaLEdBQWtCLEtBQWxCLENBRGY7U0FKUDtLQURRLENBQVosQ0FMeUU7O0FBZXpFLFFBQUksb0JBQW9CLEVBQXBCLEVBQXdCO0FBQ3hCLFlBQUksQ0FBQyxhQUFELElBQWtCLENBQUMsMkJBQUQsRUFBOEI7QUFDaEQsK0JBQW1CLGNBQWMsT0FBZCxDQUQ2QjtTQUFwRDs7QUFJQSwwQkFBa0IsZ0JBQWdCLGVBQWhCLENBTE07S0FBNUI7O0FBUUEsV0FBTyxjQUFQLENBdkJ5RTtDQUF4QyIsImZpbGUiOiJidWlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGVhY2ggfSBmcm9tICcuLi8uLi9pbmMvdXRpbHMnO1xuaW1wb3J0IHRyYW5zZm9ybVByb3BzIGZyb20gJy4vdHJhbnNmb3JtLXByb3BzJztcblxuY29uc3QgVFJBTlNMQVRFX1ogPSAndHJhbnNsYXRlWic7XG5cbmV4cG9ydCBkZWZhdWx0IGJ1aWxkUHJvcGVydHlTdHJpbmcgPSAoc3RhdGUsIGRpc2FibGVIYXJkd2FyZUFjY2VsZXJhdGlvbikgPT4ge1xuICAgIGxldCBwcm9wZXJ0eVN0cmluZyA9ICcnO1xuICAgIGxldCB0cmFuc2Zvcm1TdHJpbmcgPSAnJztcbiAgICBsZXQgdHJhbnNmb3JtSGFzWiA9IGZhbHNlO1xuXG4gICAgZWFjaChzdGF0ZSwgKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgaWYgKHRyYW5zZm9ybVByb3BzW2tleV0pIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybVN0cmluZyArPSBrZXkgKyAnKCcgKyB2YWx1ZSArICcpICc7XG4gICAgICAgICAgICB0cmFuc2Zvcm1IYXNaID0gKGtleSA9PT0gVFJBTlNMQVRFX1opID8gdHJ1ZSA6IHRyYW5zZm9ybUhhc1o7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb3BlcnR5U3RyaW5nICs9ICc7JyArIGtleSArICc6JyArIHZhbHVlO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAodHJhbnNmb3JtU3RyaW5nICE9PSAnJykge1xuICAgICAgICBpZiAoIXRyYW5zZm9ybUhhc1ogJiYgIWRpc2FibGVIYXJkd2FyZUFjY2VsZXJhdGlvbikge1xuICAgICAgICAgICAgdHJhbnNmb3JtU3RyaW5nICs9IFRSQU5TTEFURV9aICsgJygwcHgpJztcbiAgICAgICAgfVxuXG4gICAgICAgIHByb3BlcnR5U3RyaW5nICs9ICc7dHJhbnNmb3JtOicgKyB0cmFuc2Zvcm1TdHJpbmc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnR5U3RyaW5nO1xufSAiXX0=