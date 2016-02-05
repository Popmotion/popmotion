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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderSVGPath = function (actor) {
    var props = (0, _build2.default)(actor.state, actor.pathLength);

    (0, _svg2.default)(actor);

    for (var key in props) {
        if (props.hasOwnProperty(key)) {
            actor.element.setAttribute(key, props[key]);
        }
    }
};

renderSVGPath.init = function (actor) {
    actor.pathLength = actor.element.getTotalLength();
    _svg2.default.init(actor);
};

renderSVGPath.stateMap = _stateMap2.default;
renderSVGPath.valueTypeMap = _valueTypeMap2.default;

exports.default = renderSVGPath;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZW5kZXIvc3ZnLXBhdGguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtBLElBQU0sZ0JBQWdCLFVBQUMsS0FBRCxFQUFXO0FBQzdCLFFBQU0sUUFBUSxxQkFBTSxNQUFNLEtBQU4sRUFBYSxNQUFNLFVBQU4sQ0FBM0IsQ0FEdUI7O0FBRzdCLHVCQUFVLEtBQVYsRUFINkI7O0FBSzdCLFNBQUssSUFBSSxHQUFKLElBQVcsS0FBaEIsRUFBdUI7QUFDbkIsWUFBSSxNQUFNLGNBQU4sQ0FBcUIsR0FBckIsQ0FBSixFQUErQjtBQUMzQixrQkFBTSxPQUFOLENBQWMsWUFBZCxDQUEyQixHQUEzQixFQUFnQyxNQUFNLEdBQU4sQ0FBaEMsRUFEMkI7U0FBL0I7S0FESjtDQUxrQjs7QUFZdEIsY0FBYyxJQUFkLEdBQXFCLFVBQUMsS0FBRCxFQUFXO0FBQzVCLFVBQU0sVUFBTixHQUFtQixNQUFNLE9BQU4sQ0FBYyxjQUFkLEVBQW5CLENBRDRCO0FBRTVCLGtCQUFVLElBQVYsQ0FBZSxLQUFmLEVBRjRCO0NBQVg7O0FBS3JCLGNBQWMsUUFBZDtBQUNBLGNBQWMsWUFBZDs7a0JBRWUiLCJmaWxlIjoic3ZnLXBhdGguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYnVpbGQgZnJvbSAnLi9zdmctcGF0aC9idWlsZCc7XG5pbXBvcnQgc3RhdGVNYXAgZnJvbSAnLi9zdmctcGF0aC9zdGF0ZS1tYXAnO1xuaW1wb3J0IHZhbHVlVHlwZU1hcCBmcm9tICcuL3N2Zy92YWx1ZS10eXBlLW1hcCc7XG5pbXBvcnQgcmVuZGVyU1ZHIGZyb20gJy4vc3ZnJztcblxuY29uc3QgcmVuZGVyU1ZHUGF0aCA9IChhY3RvcikgPT4ge1xuICAgIGNvbnN0IHByb3BzID0gYnVpbGQoYWN0b3Iuc3RhdGUsIGFjdG9yLnBhdGhMZW5ndGgpO1xuXG4gICAgcmVuZGVyU1ZHKGFjdG9yKTtcblxuICAgIGZvciAobGV0IGtleSBpbiBwcm9wcykge1xuICAgICAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgYWN0b3IuZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCBwcm9wc1trZXldKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbnJlbmRlclNWR1BhdGguaW5pdCA9IChhY3RvcikgPT4ge1xuICAgIGFjdG9yLnBhdGhMZW5ndGggPSBhY3Rvci5lbGVtZW50LmdldFRvdGFsTGVuZ3RoKCk7XG4gICAgcmVuZGVyU1ZHLmluaXQoYWN0b3IpO1xufTtcblxucmVuZGVyU1ZHUGF0aC5zdGF0ZU1hcCA9IHN0YXRlTWFwO1xucmVuZGVyU1ZHUGF0aC52YWx1ZVR5cGVNYXAgPSB2YWx1ZVR5cGVNYXA7XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlclNWR1BhdGg7Il19