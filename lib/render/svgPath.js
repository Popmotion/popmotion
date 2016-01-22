'use strict';

exports.__esModule = true;

var _build = require('./svg-path/build');

var _build2 = _interopRequireDefault(_build);

var _stateMap = require('./svg-path/state-map');

var _stateMap2 = _interopRequireDefault(_stateMap);

var _valueTypeMap = require('./svg/value-type-map');

var _valueTypeMap2 = _interopRequireDefault(_valueTypeMap);

var _svg = require('./svg');

var _svg2 = _interopRequireDefault(_svg);

var _utils = require('../inc/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderSVGPath = function (actor) {
    (0, _svg2.default)(actor);
    (0, _utils.each)((0, _build2.default)(actor.state, actor.pathLength), function (value, key) {
        return actor.element.setAttribute(key, value);
    });
};

renderSVGPath.init = function (actor) {
    actor.pathLength = actor.element.getTotalLength();
    _svg2.default.init(actor);
};

renderSVGPath.stateMap = _stateMap2.default;
renderSVGPath.valueTypeMap = _valueTypeMap2.default;

exports.default = renderSVGPath;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZW5kZXIvc3ZnUGF0aC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNQSxJQUFNLGdCQUFnQixVQUFDLEtBQUQsRUFBVztBQUM3Qix1QkFBVSxLQUFWLEVBRDZCO0FBRTdCLGVBSkssS0FJTCxDQUFLLHFCQUFNLE1BQU0sS0FBTixFQUFhLE1BQU0sVUFBTixDQUF4QixFQUEyQyxVQUFDLEtBQUQsRUFBUSxHQUFSO2VBQWdCLE1BQU0sT0FBTixDQUFjLFlBQWQsQ0FBMkIsR0FBM0IsRUFBZ0MsS0FBaEM7S0FBaEIsQ0FBM0MsQ0FGNkI7Q0FBWDs7QUFLdEIsY0FBYyxJQUFkLEdBQXFCLFVBQUMsS0FBRCxFQUFXO0FBQzVCLFVBQU0sVUFBTixHQUFtQixNQUFNLE9BQU4sQ0FBYyxjQUFkLEVBQW5CLENBRDRCO0FBRTVCLGtCQUFVLElBQVYsQ0FBZSxLQUFmLEVBRjRCO0NBQVg7O0FBS3JCLGNBQWMsUUFBZDtBQUNBLGNBQWMsWUFBZDs7a0JBRWUiLCJmaWxlIjoic3ZnUGF0aC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBidWlsZCBmcm9tICcuL3N2Zy1wYXRoL2J1aWxkJztcbmltcG9ydCBzdGF0ZU1hcCBmcm9tICcuL3N2Zy1wYXRoL3N0YXRlLW1hcCc7XG5pbXBvcnQgdmFsdWVUeXBlTWFwIGZyb20gJy4vc3ZnL3ZhbHVlLXR5cGUtbWFwJztcbmltcG9ydCByZW5kZXJTVkcgZnJvbSAnLi9zdmcnO1xuaW1wb3J0IHsgZWFjaCB9IGZyb20gJy4uL2luYy91dGlscyc7XG5cbmNvbnN0IHJlbmRlclNWR1BhdGggPSAoYWN0b3IpID0+IHtcbiAgICByZW5kZXJTVkcoYWN0b3IpO1xuICAgIGVhY2goYnVpbGQoYWN0b3Iuc3RhdGUsIGFjdG9yLnBhdGhMZW5ndGgpLCAodmFsdWUsIGtleSkgPT4gYWN0b3IuZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSkpO1xufTtcblxucmVuZGVyU1ZHUGF0aC5pbml0ID0gKGFjdG9yKSA9PiB7XG4gICAgYWN0b3IucGF0aExlbmd0aCA9IGFjdG9yLmVsZW1lbnQuZ2V0VG90YWxMZW5ndGgoKTtcbiAgICByZW5kZXJTVkcuaW5pdChhY3Rvcik7XG59O1xuXG5yZW5kZXJTVkdQYXRoLnN0YXRlTWFwID0gc3RhdGVNYXA7XG5yZW5kZXJTVkdQYXRoLnZhbHVlVHlwZU1hcCA9IHZhbHVlVHlwZU1hcDtcblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyU1ZHUGF0aDsiXX0=