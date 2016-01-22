'use strict';

exports.__esModule = true;
exports.default = stagger;

var _tween = require('../actions/tween');

var _tween2 = _interopRequireDefault(_tween);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_INTERVAL = 100;

function stagger(array, props, callback) {
    var arrayLength = array.length;
    var propsIsInterval = (0, _utils.isNum)(props);
    var interval = propsIsInterval ? props : props.interval || DEFAULT_INTERVAL;

    var staggerTween = new _tween2.default();

    return tween;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmMvc3RhZ2dlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7a0JBS3dCOzs7Ozs7Ozs7O0FBRnhCLElBQU0sbUJBQW1CLEdBQW5COztBQUVTLFNBQVMsT0FBVCxDQUFpQixLQUFqQixFQUF3QixLQUF4QixFQUErQixRQUEvQixFQUF5QztBQUNwRCxRQUFNLGNBQWMsTUFBTSxNQUFOLENBRGdDO0FBRXBELFFBQU0sa0JBQWtCLFdBTm5CLE1BTW1CLENBQU0sS0FBTixDQUFsQixDQUY4QztBQUdwRCxRQUFNLFdBQVcsa0JBQWtCLEtBQWxCLEdBQTBCLE1BQU0sUUFBTixJQUFrQixnQkFBbEIsQ0FIUzs7QUFLcEQsUUFBTSxlQUFlLHFCQUFmLENBTDhDOztBQU9wRCxXQUFPLEtBQVAsQ0FQb0Q7Q0FBekMiLCJmaWxlIjoic3RhZ2dlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUd2VlbiBmcm9tICcuLi9hY3Rpb25zL3R3ZWVuJztcbmltcG9ydCB7IGlzTnVtIH0gZnJvbSAnLi91dGlscyc7XG5cbmNvbnN0IERFRkFVTFRfSU5URVJWQUwgPSAxMDA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YWdnZXIoYXJyYXksIHByb3BzLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICAgIGNvbnN0IHByb3BzSXNJbnRlcnZhbCA9IGlzTnVtKHByb3BzKTtcbiAgICBjb25zdCBpbnRlcnZhbCA9IHByb3BzSXNJbnRlcnZhbCA/IHByb3BzIDogcHJvcHMuaW50ZXJ2YWwgfHwgREVGQVVMVF9JTlRFUlZBTDtcblxuICAgIGNvbnN0IHN0YWdnZXJUd2VlbiA9IG5ldyBUd2VlbigpO1xuXG4gICAgcmV0dXJuIHR3ZWVuO1xufSJdfQ==