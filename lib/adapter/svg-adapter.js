'use strict';

exports.__esModule = true;
exports.setter = setter;

var _stateMap = require('./css/state-map');

var _stateMap2 = _interopRequireDefault(_stateMap);

var _valueTypeMap = require('./svg/value-type-map');

var _valueTypeMap2 = _interopRequireDefault(_valueTypeMap);

var _build = require('./svg/build');

var _build2 = _interopRequireDefault(_build);

var _attrAdapter = require('./attr-adapter');

var _adapter = require('./adapter');

var _adapter2 = _interopRequireDefault(_adapter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setter(props) {
    (0, _attrAdapter.setter)((0, _build2.default)(props, this.origin));
}

exports.default = function (element) {
    var adapter = (0, _adapter2.default)({ element: element, stateMap: _stateMap2.default, valueTypeMap: _valueTypeMap2.default, getter: _attrAdapter.getter, setter: setter });
    var bBox = element.getBBox();
    var transformOriginY = 0;
    var transformOriginX = 0;

    adapter.origin = {
        x: bBox.width * (transformOriginX / 100) + bBox.x,
        y: bBox.height * (transformOriginY / 100) + bBox.y
    };

    return adapter;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hZGFwdGVyL3N2Zy1hZGFwdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztRQU1nQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFULFNBQVMsTUFBVCxDQUFnQixLQUFoQixFQUF1QjtBQUMxQixxQkFKYSxPQUliLENBQVcscUJBQU0sS0FBTixFQUFhLEtBQUssTUFBTCxDQUF4QixFQUQwQjtDQUF2Qjs7a0JBSVEsVUFBQyxPQUFELEVBQWE7QUFDeEIsUUFBTSxVQUFVLHVCQUFjLEVBQUUsZ0JBQUYsRUFBVyw0QkFBWCxFQUFxQixvQ0FBckIsRUFBbUMscUJBUjVELE1BUTRELEVBQVEsY0FBM0MsRUFBZCxDQUFWLENBRGtCO0FBRXhCLFFBQU0sT0FBTyxRQUFRLE9BQVIsRUFBUCxDQUZrQjtBQUd4QixRQUFNLG1CQUFtQixDQUFuQixDQUhrQjtBQUl4QixRQUFNLG1CQUFtQixDQUFuQixDQUprQjs7QUFNeEIsWUFBUSxNQUFSLEdBQWlCO0FBQ2IsV0FBRyxLQUFLLEtBQUwsSUFBYyxtQkFBbUIsR0FBbkIsQ0FBZCxHQUF3QyxLQUFLLENBQUw7QUFDM0MsV0FBRyxLQUFLLE1BQUwsSUFBZSxtQkFBbUIsR0FBbkIsQ0FBZixHQUF5QyxLQUFLLENBQUw7S0FGaEQsQ0FOd0I7O0FBV3hCLFdBQU8sT0FBUCxDQVh3QjtDQUFiIiwiZmlsZSI6InN2Zy1hZGFwdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0YXRlTWFwIGZyb20gJy4vY3NzL3N0YXRlLW1hcCc7XG5pbXBvcnQgdmFsdWVUeXBlTWFwIGZyb20gJy4vc3ZnL3ZhbHVlLXR5cGUtbWFwJztcbmltcG9ydCBidWlsZCBmcm9tICcuL3N2Zy9idWlsZCc7XG5pbXBvcnQgeyBnZXR0ZXIsIHNldHRlciBhcyBhdHRyU2V0dGVyIH0gZnJvbSAnLi9hdHRyLWFkYXB0ZXInO1xuaW1wb3J0IGNyZWF0ZUFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyJztcblxuZXhwb3J0IGZ1bmN0aW9uIHNldHRlcihwcm9wcykge1xuICAgIGF0dHJTZXR0ZXIoYnVpbGQocHJvcHMsIHRoaXMub3JpZ2luKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgYWRhcHRlciA9IGNyZWF0ZUFkYXB0ZXIoeyBlbGVtZW50LCBzdGF0ZU1hcCwgdmFsdWVUeXBlTWFwLCBnZXR0ZXIsIHNldHRlciB9KTtcbiAgICBjb25zdCBiQm94ID0gZWxlbWVudC5nZXRCQm94KCk7XG4gICAgY29uc3QgdHJhbnNmb3JtT3JpZ2luWSA9IDA7XG4gICAgY29uc3QgdHJhbnNmb3JtT3JpZ2luWCA9IDA7XG5cbiAgICBhZGFwdGVyLm9yaWdpbiA9IHtcbiAgICAgICAgeDogYkJveC53aWR0aCAqICh0cmFuc2Zvcm1PcmlnaW5YIC8gMTAwKSArIGJCb3gueCxcbiAgICAgICAgeTogYkJveC5oZWlnaHQgKiAodHJhbnNmb3JtT3JpZ2luWSAvIDEwMCkgKyBiQm94LnlcbiAgICB9O1xuXG4gICAgcmV0dXJuIGFkYXB0ZXI7XG59O1xuXG4iXX0=