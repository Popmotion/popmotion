'use strict';

exports.__esModule = true;

var _utils = require('../inc/utils');

var _stateMap = require('./css/state-map');

var _stateMap2 = _interopRequireDefault(_stateMap);

var _valueTypeMap = require('./svg/value-type-map');

var _valueTypeMap2 = _interopRequireDefault(_valueTypeMap);

var _build = require('./svg/build');

var _build2 = _interopRequireDefault(_build);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function renderSVG(_ref) {
    var state = _ref.state;
    var element = _ref.element;
    var svgOrigin = _ref.svgOrigin;

    (0, _utils.each)((0, _build2.default)(state, svgOrigin), function (value, key) {
        return element.setAttribute(key, value);
    });
}

renderSVG.init = function (actor) {
    var bBox = actor.element.getBBox();
    var transformOriginX = actor.values.transformOriginX ? actor.values.transformOriginX.current : 50;
    var transformOriginY = actor.values.transformOriginY ? actor.values.transformOriginY.current : 50;

    actor.svgOrigin = {
        x: bBox.width * (transformOriginX / 100) + bBox.x,
        y: bBox.height * (transformOriginY / 100) + bBox.y
    };
};

renderSVG.stateMap = _stateMap2.default;
renderSVG.valueTypeMap = _valueTypeMap2.default;

exports.default = renderSVG;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZW5kZXIvc3ZnLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0EsU0FBUyxTQUFULE9BQWtEO1FBQTdCLG1CQUE2QjtRQUF0Qix1QkFBc0I7UUFBYiwyQkFBYTs7QUFDOUMsZUFOSyxLQU1MLENBQUsscUJBQU0sS0FBTixFQUFhLFNBQWIsQ0FBTCxFQUE4QixVQUFDLEtBQUQsRUFBUSxHQUFSO2VBQWdCLFFBQVEsWUFBUixDQUFxQixHQUFyQixFQUEwQixLQUExQjtLQUFoQixDQUE5QixDQUQ4QztDQUFsRDs7QUFJQSxVQUFVLElBQVYsR0FBaUIsVUFBQyxLQUFELEVBQVc7QUFDeEIsUUFBTSxPQUFPLE1BQU0sT0FBTixDQUFjLE9BQWQsRUFBUCxDQURrQjtBQUV4QixRQUFNLG1CQUFtQixNQUFNLE1BQU4sQ0FBYSxnQkFBYixHQUFnQyxNQUFNLE1BQU4sQ0FBYSxnQkFBYixDQUE4QixPQUE5QixHQUF3QyxFQUF4RSxDQUZEO0FBR3hCLFFBQU0sbUJBQW1CLE1BQU0sTUFBTixDQUFhLGdCQUFiLEdBQWdDLE1BQU0sTUFBTixDQUFhLGdCQUFiLENBQThCLE9BQTlCLEdBQXdDLEVBQXhFLENBSEQ7O0FBS3hCLFVBQU0sU0FBTixHQUFrQjtBQUNkLFdBQUcsS0FBSyxLQUFMLElBQWMsbUJBQW1CLEdBQW5CLENBQWQsR0FBd0MsS0FBSyxDQUFMO0FBQzNDLFdBQUcsS0FBSyxNQUFMLElBQWUsbUJBQW1CLEdBQW5CLENBQWYsR0FBeUMsS0FBSyxDQUFMO0tBRmhELENBTHdCO0NBQVg7O0FBV2pCLFVBQVUsUUFBVjtBQUNBLFVBQVUsWUFBVjs7a0JBRWUiLCJmaWxlIjoic3ZnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZWFjaCB9IGZyb20gJy4uL2luYy91dGlscyc7XG5pbXBvcnQgc3RhdGVNYXAgZnJvbSAnLi9jc3Mvc3RhdGUtbWFwJztcbmltcG9ydCB2YWx1ZVR5cGVNYXAgZnJvbSAnLi9zdmcvdmFsdWUtdHlwZS1tYXAnO1xuaW1wb3J0IGJ1aWxkIGZyb20gJy4vc3ZnL2J1aWxkJztcblxuZnVuY3Rpb24gcmVuZGVyU1ZHKHsgc3RhdGUsIGVsZW1lbnQsIHN2Z09yaWdpbiB9KSB7XG4gICAgZWFjaChidWlsZChzdGF0ZSwgc3ZnT3JpZ2luKSwgKHZhbHVlLCBrZXkpID0+IGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpKTtcbn1cblxucmVuZGVyU1ZHLmluaXQgPSAoYWN0b3IpID0+IHtcbiAgICBjb25zdCBiQm94ID0gYWN0b3IuZWxlbWVudC5nZXRCQm94KCk7XG4gICAgY29uc3QgdHJhbnNmb3JtT3JpZ2luWCA9IGFjdG9yLnZhbHVlcy50cmFuc2Zvcm1PcmlnaW5YID8gYWN0b3IudmFsdWVzLnRyYW5zZm9ybU9yaWdpblguY3VycmVudCA6IDUwO1xuICAgIGNvbnN0IHRyYW5zZm9ybU9yaWdpblkgPSBhY3Rvci52YWx1ZXMudHJhbnNmb3JtT3JpZ2luWSA/IGFjdG9yLnZhbHVlcy50cmFuc2Zvcm1PcmlnaW5ZLmN1cnJlbnQgOiA1MDtcblxuICAgIGFjdG9yLnN2Z09yaWdpbiA9IHtcbiAgICAgICAgeDogYkJveC53aWR0aCAqICh0cmFuc2Zvcm1PcmlnaW5YIC8gMTAwKSArIGJCb3gueCxcbiAgICAgICAgeTogYkJveC5oZWlnaHQgKiAodHJhbnNmb3JtT3JpZ2luWSAvIDEwMCkgKyBiQm94LnlcbiAgICB9O1xufVxuXG5yZW5kZXJTVkcuc3RhdGVNYXAgPSBzdGF0ZU1hcDtcbnJlbmRlclNWRy52YWx1ZVR5cGVNYXAgPSB2YWx1ZVR5cGVNYXA7XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlclNWRzsiXX0=