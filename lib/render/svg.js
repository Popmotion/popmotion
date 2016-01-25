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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZW5kZXIvc3ZnLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0EsU0FBUyxTQUFTLE9BQWdDO1FBQTdCLEtBQUssUUFBTCxLQUFLO1FBQUUsT0FBTyxRQUFQLE9BQU87UUFBRSxTQUFTLFFBQVQsU0FBUzs7QUFDMUMscUJBQUsscUJBQU0sS0FBSyxFQUFFLFNBQVMsQ0FBQyxFQUFFLFVBQUMsS0FBSyxFQUFFLEdBQUc7ZUFBSyxPQUFPLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUM7S0FBQSxDQUFDLENBQUM7Q0FDbkY7O0FBRUQsU0FBUyxDQUFDLElBQUksR0FBRyxVQUFDLEtBQUssRUFBSztBQUN4QixRQUFNLElBQUksR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQ3JDLFFBQU0sZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7QUFDcEcsUUFBTSxnQkFBZ0IsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQzs7QUFFcEcsU0FBSyxDQUFDLFNBQVMsR0FBRztBQUNkLFNBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxJQUFJLGdCQUFnQixHQUFHLEdBQUcsQ0FBQSxBQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7QUFDakQsU0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLElBQUksZ0JBQWdCLEdBQUcsR0FBRyxDQUFBLEFBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztLQUNyRCxDQUFDO0NBQ0wsQ0FBQTs7QUFFRCxTQUFTLENBQUMsUUFBUSxxQkFBVyxDQUFDO0FBQzlCLFNBQVMsQ0FBQyxZQUFZLHlCQUFlLENBQUM7O2tCQUV2QixTQUFTIiwiZmlsZSI6InN2Zy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGVhY2ggfSBmcm9tICcuLi9pbmMvdXRpbHMnO1xuaW1wb3J0IHN0YXRlTWFwIGZyb20gJy4vY3NzL3N0YXRlLW1hcCc7XG5pbXBvcnQgdmFsdWVUeXBlTWFwIGZyb20gJy4vc3ZnL3ZhbHVlLXR5cGUtbWFwJztcbmltcG9ydCBidWlsZCBmcm9tICcuL3N2Zy9idWlsZCc7XG5cbmZ1bmN0aW9uIHJlbmRlclNWRyh7IHN0YXRlLCBlbGVtZW50LCBzdmdPcmlnaW4gfSkge1xuICAgIGVhY2goYnVpbGQoc3RhdGUsIHN2Z09yaWdpbiksICh2YWx1ZSwga2V5KSA9PiBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKSk7XG59XG5cbnJlbmRlclNWRy5pbml0ID0gKGFjdG9yKSA9PiB7XG4gICAgY29uc3QgYkJveCA9IGFjdG9yLmVsZW1lbnQuZ2V0QkJveCgpO1xuICAgIGNvbnN0IHRyYW5zZm9ybU9yaWdpblggPSBhY3Rvci52YWx1ZXMudHJhbnNmb3JtT3JpZ2luWCA/IGFjdG9yLnZhbHVlcy50cmFuc2Zvcm1PcmlnaW5YLmN1cnJlbnQgOiA1MDtcbiAgICBjb25zdCB0cmFuc2Zvcm1PcmlnaW5ZID0gYWN0b3IudmFsdWVzLnRyYW5zZm9ybU9yaWdpblkgPyBhY3Rvci52YWx1ZXMudHJhbnNmb3JtT3JpZ2luWS5jdXJyZW50IDogNTA7XG5cbiAgICBhY3Rvci5zdmdPcmlnaW4gPSB7XG4gICAgICAgIHg6IGJCb3gud2lkdGggKiAodHJhbnNmb3JtT3JpZ2luWCAvIDEwMCkgKyBiQm94LngsXG4gICAgICAgIHk6IGJCb3guaGVpZ2h0ICogKHRyYW5zZm9ybU9yaWdpblkgLyAxMDApICsgYkJveC55XG4gICAgfTtcbn1cblxucmVuZGVyU1ZHLnN0YXRlTWFwID0gc3RhdGVNYXA7XG5yZW5kZXJTVkcudmFsdWVUeXBlTWFwID0gdmFsdWVUeXBlTWFwO1xuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJTVkc7Il19