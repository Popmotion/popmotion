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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZW5kZXIvc3ZnLXBhdGguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTUEsSUFBTSxnQkFBZ0IsVUFBQyxLQUFELEVBQVc7QUFDN0IsdUJBQVUsS0FBVixFQUQ2QjtBQUU3QixlQUpLLEtBSUwsQ0FBSyxxQkFBTSxNQUFNLEtBQU4sRUFBYSxNQUFNLFVBQU4sQ0FBeEIsRUFBMkMsVUFBQyxLQUFELEVBQVEsR0FBUjtlQUFnQixNQUFNLE9BQU4sQ0FBYyxZQUFkLENBQTJCLEdBQTNCLEVBQWdDLEtBQWhDO0tBQWhCLENBQTNDLENBRjZCO0NBQVg7O0FBS3RCLGNBQWMsSUFBZCxHQUFxQixVQUFDLEtBQUQsRUFBVztBQUM1QixVQUFNLFVBQU4sR0FBbUIsTUFBTSxPQUFOLENBQWMsY0FBZCxFQUFuQixDQUQ0QjtBQUU1QixrQkFBVSxJQUFWLENBQWUsS0FBZixFQUY0QjtDQUFYOztBQUtyQixjQUFjLFFBQWQ7QUFDQSxjQUFjLFlBQWQ7O2tCQUVlIiwiZmlsZSI6InN2Zy1wYXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJ1aWxkIGZyb20gJy4vc3ZnLXBhdGgvYnVpbGQnO1xuaW1wb3J0IHN0YXRlTWFwIGZyb20gJy4vc3ZnLXBhdGgvc3RhdGUtbWFwJztcbmltcG9ydCB2YWx1ZVR5cGVNYXAgZnJvbSAnLi9zdmcvdmFsdWUtdHlwZS1tYXAnO1xuaW1wb3J0IHJlbmRlclNWRyBmcm9tICcuL3N2Zyc7XG5pbXBvcnQgeyBlYWNoIH0gZnJvbSAnLi4vaW5jL3V0aWxzJztcblxuY29uc3QgcmVuZGVyU1ZHUGF0aCA9IChhY3RvcikgPT4ge1xuICAgIHJlbmRlclNWRyhhY3Rvcik7XG4gICAgZWFjaChidWlsZChhY3Rvci5zdGF0ZSwgYWN0b3IucGF0aExlbmd0aCksICh2YWx1ZSwga2V5KSA9PiBhY3Rvci5lbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKSk7XG59O1xuXG5yZW5kZXJTVkdQYXRoLmluaXQgPSAoYWN0b3IpID0+IHtcbiAgICBhY3Rvci5wYXRoTGVuZ3RoID0gYWN0b3IuZWxlbWVudC5nZXRUb3RhbExlbmd0aCgpO1xuICAgIHJlbmRlclNWRy5pbml0KGFjdG9yKTtcbn07XG5cbnJlbmRlclNWR1BhdGguc3RhdGVNYXAgPSBzdGF0ZU1hcDtcbnJlbmRlclNWR1BhdGgudmFsdWVUeXBlTWFwID0gdmFsdWVUeXBlTWFwO1xuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJTVkdQYXRoOyJdfQ==