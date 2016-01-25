'use strict';

exports.__esModule = true;
exports.default = build;

var _utils = require('../../inc/utils');

var _transformProps = require('../css/transform-props');

var _transformProps2 = _interopRequireDefault(_transformProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZERO_NOT_ZERO = 0.0001;

function build(state, origin) {
    var props = {},
        hasTransform = false,
        scale = state.scale !== undefined ? state.scale || ZERO_NOT_ZERO : state.scaleX || 1,
        scaleY = state.scaleY !== undefined ? state.scaleY || ZERO_NOT_ZERO : scale || 1,
        transformOriginX = origin.x,
        transformOriginY = origin.y,
        scaleTransformX = -transformOriginX * (scale * 1),
        scaleTransformY = -transformOriginY * (scaleY * 1),
        scaleReplaceX = transformOriginX / scale,
        scaleReplaceY = transformOriginY / scaleY,
        transform = {
        translate: 'translate(' + state.translateX + ', ' + state.translateY + ') ',
        scale: 'translate(' + scaleTransformX + ', ' + scaleTransformY + ') scale(' + scale + ', ' + scaleY + ') translate(' + scaleReplaceX + ', ' + scaleReplaceY + ') ',
        rotate: 'rotate(' + state.rotate + ', ' + transformOriginX + ', ' + transformOriginY + ') ',
        skewX: 'skewX(' + state.skewX + ') ',
        skewY: 'skewY(' + state.skewY + ') '
    };

    (0, _utils.each)(state, function (key, value) {
        if (_transformProps2.default[key]) {
            hasTransform = true;
        } else {
            props[(0, _utils.camelToDash)(key)] = value;
        }
    });

    if (hasTransform) {
        props.transform = '';

        (0, _utils.each)(transform, function (key, value) {
            var defaultValue = key === 'scale' ? '1' : '0';
            props.transform += value.replace(/undefined/g, defaultValue);
        });
    }

    return props;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yZW5kZXIvc3ZnL2J1aWxkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztrQkFLd0I7Ozs7Ozs7Ozs7QUFGeEIsSUFBTSxnQkFBZ0IsTUFBaEI7O0FBRVMsU0FBUyxLQUFULENBQWUsS0FBZixFQUFzQixNQUF0QixFQUE4QjtBQUN6QyxRQUFJLFFBQVEsRUFBUjtRQUNBLGVBQWUsS0FBZjtRQUNBLFFBQVEsTUFBTSxLQUFOLEtBQWdCLFNBQWhCLEdBQTRCLE1BQU0sS0FBTixJQUFlLGFBQWYsR0FBK0IsTUFBTSxNQUFOLElBQWdCLENBQWhCO1FBQ25FLFNBQVMsTUFBTSxNQUFOLEtBQWlCLFNBQWpCLEdBQTZCLE1BQU0sTUFBTixJQUFnQixhQUFoQixHQUFnQyxTQUFTLENBQVQ7UUFDdEUsbUJBQW1CLE9BQU8sQ0FBUDtRQUNuQixtQkFBbUIsT0FBTyxDQUFQO1FBQ25CLGtCQUFrQixDQUFFLGdCQUFGLElBQXNCLFFBQVEsQ0FBUixDQUF0QjtRQUNsQixrQkFBa0IsQ0FBRSxnQkFBRixJQUFzQixTQUFTLENBQVQsQ0FBdEI7UUFDbEIsZ0JBQWdCLG1CQUFtQixLQUFuQjtRQUNoQixnQkFBZ0IsbUJBQW1CLE1BQW5CO1FBQ2hCLFlBQVk7QUFDUixrQ0FBd0IsTUFBTSxVQUFOLFVBQXFCLE1BQU0sVUFBTixPQUE3QztBQUNBLDhCQUFvQix5QkFBb0IsK0JBQTBCLGVBQVUsMEJBQXFCLHVCQUFrQixvQkFBbkg7QUFDQSw0QkFBa0IsTUFBTSxNQUFOLFVBQWlCLDBCQUFxQix1QkFBeEQ7QUFDQSwwQkFBZ0IsTUFBTSxLQUFOLE9BQWhCO0FBQ0EsMEJBQWdCLE1BQU0sS0FBTixPQUFoQjtLQUxKLENBWHFDOztBQW1CekMsZUF4QkssS0F3QkwsQ0FBSyxLQUFMLEVBQVksVUFBQyxHQUFELEVBQU0sS0FBTixFQUFnQjtBQUN4QixZQUFJLHlCQUFlLEdBQWYsQ0FBSixFQUF5QjtBQUNyQiwyQkFBZSxJQUFmLENBRHFCO1NBQXpCLE1BRU87QUFDSCxrQkFBTSxXQTVCSCxZQTRCRyxDQUFZLEdBQVosQ0FBTixJQUEwQixLQUExQixDQURHO1NBRlA7S0FEUSxDQUFaLENBbkJ5Qzs7QUEyQnpDLFFBQUksWUFBSixFQUFrQjtBQUNkLGNBQU0sU0FBTixHQUFrQixFQUFsQixDQURjOztBQUdkLG1CQW5DQyxLQW1DRCxDQUFLLFNBQUwsRUFBZ0IsVUFBQyxHQUFELEVBQU0sS0FBTixFQUFnQjtBQUM1QixnQkFBSSxlQUFlLEdBQUMsS0FBUSxPQUFSLEdBQW1CLEdBQXBCLEdBQTBCLEdBQTFCLENBRFM7QUFFNUIsa0JBQU0sU0FBTixJQUFtQixNQUFNLE9BQU4sQ0FBYyxZQUFkLEVBQTRCLFlBQTVCLENBQW5CLENBRjRCO1NBQWhCLENBQWhCLENBSGM7S0FBbEI7O0FBU0EsV0FBTyxLQUFQLENBcEN5QztDQUE5QiIsImZpbGUiOiJidWlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGVhY2gsIGNhbWVsVG9EYXNoIH0gZnJvbSAnLi4vLi4vaW5jL3V0aWxzJztcbmltcG9ydCB0cmFuc2Zvcm1Qcm9wcyBmcm9tICcuLi9jc3MvdHJhbnNmb3JtLXByb3BzJztcblxuY29uc3QgWkVST19OT1RfWkVSTyA9IDAuMDAwMTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGQoc3RhdGUsIG9yaWdpbikge1xuICAgIGxldCBwcm9wcyA9IHt9LFxuICAgICAgICBoYXNUcmFuc2Zvcm0gPSBmYWxzZSxcbiAgICAgICAgc2NhbGUgPSBzdGF0ZS5zY2FsZSAhPT0gdW5kZWZpbmVkID8gc3RhdGUuc2NhbGUgfHwgWkVST19OT1RfWkVSTyA6IHN0YXRlLnNjYWxlWCB8fCAxLFxuICAgICAgICBzY2FsZVkgPSBzdGF0ZS5zY2FsZVkgIT09IHVuZGVmaW5lZCA/IHN0YXRlLnNjYWxlWSB8fCBaRVJPX05PVF9aRVJPIDogc2NhbGUgfHwgMSxcbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luWCA9IG9yaWdpbi54LFxuICAgICAgICB0cmFuc2Zvcm1PcmlnaW5ZID0gb3JpZ2luLnksXG4gICAgICAgIHNjYWxlVHJhbnNmb3JtWCA9IC0gdHJhbnNmb3JtT3JpZ2luWCAqIChzY2FsZSAqIDEpLFxuICAgICAgICBzY2FsZVRyYW5zZm9ybVkgPSAtIHRyYW5zZm9ybU9yaWdpblkgKiAoc2NhbGVZICogMSksXG4gICAgICAgIHNjYWxlUmVwbGFjZVggPSB0cmFuc2Zvcm1PcmlnaW5YIC8gc2NhbGUsXG4gICAgICAgIHNjYWxlUmVwbGFjZVkgPSB0cmFuc2Zvcm1PcmlnaW5ZIC8gc2NhbGVZLFxuICAgICAgICB0cmFuc2Zvcm0gPSB7XG4gICAgICAgICAgICB0cmFuc2xhdGU6IGB0cmFuc2xhdGUoJHtzdGF0ZS50cmFuc2xhdGVYfSwgJHtzdGF0ZS50cmFuc2xhdGVZfSkgYCxcbiAgICAgICAgICAgIHNjYWxlOiBgdHJhbnNsYXRlKCR7c2NhbGVUcmFuc2Zvcm1YfSwgJHtzY2FsZVRyYW5zZm9ybVl9KSBzY2FsZSgke3NjYWxlfSwgJHtzY2FsZVl9KSB0cmFuc2xhdGUoJHtzY2FsZVJlcGxhY2VYfSwgJHtzY2FsZVJlcGxhY2VZfSkgYCxcbiAgICAgICAgICAgIHJvdGF0ZTogYHJvdGF0ZSgke3N0YXRlLnJvdGF0ZX0sICR7dHJhbnNmb3JtT3JpZ2luWH0sICR7dHJhbnNmb3JtT3JpZ2luWX0pIGAsXG4gICAgICAgICAgICBza2V3WDogYHNrZXdYKCR7c3RhdGUuc2tld1h9KSBgLFxuICAgICAgICAgICAgc2tld1k6IGBza2V3WSgke3N0YXRlLnNrZXdZfSkgYFxuICAgICAgICB9O1xuXG4gICAgZWFjaChzdGF0ZSwgKGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHRyYW5zZm9ybVByb3BzW2tleV0pIHtcbiAgICAgICAgICAgIGhhc1RyYW5zZm9ybSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9wc1tjYW1lbFRvRGFzaChrZXkpXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoaGFzVHJhbnNmb3JtKSB7XG4gICAgICAgIHByb3BzLnRyYW5zZm9ybSA9ICcnO1xuXG4gICAgICAgIGVhY2godHJhbnNmb3JtLCAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdmFyIGRlZmF1bHRWYWx1ZSA9IChrZXkgPT09ICdzY2FsZScpID8gJzEnIDogJzAnO1xuICAgICAgICAgICAgcHJvcHMudHJhbnNmb3JtICs9IHZhbHVlLnJlcGxhY2UoL3VuZGVmaW5lZC9nLCBkZWZhdWx0VmFsdWUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcHM7XG59Il19