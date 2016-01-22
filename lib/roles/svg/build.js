'use strict';

var utils = require('../../inc/utils');
var transformDictionary = require('../css/transform-dictionary');

var each = utils.each;
var camelToDash = utils.camelToDash;
var transformProps = transformDictionary.props;
var zeroNotZero = 0.0001;

module.exports = function (output, origin) {
    var props = {},
        hasTransform = false,
        scale = output.scale !== undefined ? output.scale || zeroNotZero : output.scaleX || 1,
        scaleY = output.scaleY !== undefined ? output.scaleY || zeroNotZero : scale || 1,
        transformOriginX = origin.x,
        transformOriginY = origin.y,
        scaleTransformX = -transformOriginX * (scale * 1),
        scaleTransformY = -transformOriginY * (scaleY * 1),
        scaleReplaceX = transformOriginX / scale,
        scaleReplaceY = transformOriginY / scaleY,
        transform = {
        translate: 'translate(' + output.translateX + ', ' + output.translateY + ') ',
        scale: 'translate(' + scaleTransformX + ', ' + scaleTransformY + ') scale(' + scale + ', ' + scaleY + ') translate(' + scaleReplaceX + ', ' + scaleReplaceY + ') ',
        rotate: 'rotate(' + output.rotate + ', ' + transformOriginX + ', ' + transformOriginY + ') ',
        skewX: 'skewX(' + output.skewX + ') ',
        skewY: 'skewY(' + output.skewY + ') '
    };

    each(output, function (key, value) {
        if (transformProps[key]) {
            hasTransform = true;
        } else {
            props[camelToDash(key)] = value;
        }
    });

    if (hasTransform) {
        props.transform = '';

        each(transform, function (key, value) {
            var defaultValue = key === 'scale' ? '1' : '0';
            props.transform += value.replace(/undefined/g, defaultValue);
        });
    }

    return props;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb2xlcy9zdmcvYnVpbGQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFFBQVEsUUFBUSxpQkFBUixDQUFSO0FBQ04sSUFBTSxzQkFBc0IsUUFBUSw2QkFBUixDQUF0Qjs7QUFFTixJQUFNLE9BQU8sTUFBTSxJQUFOO0FBQ2IsSUFBTSxjQUFjLE1BQU0sV0FBTjtBQUNwQixJQUFNLGlCQUFpQixvQkFBb0IsS0FBcEI7QUFDdkIsSUFBTSxjQUFjLE1BQWQ7O0FBRU4sT0FBTyxPQUFQLEdBQWlCLFVBQVUsTUFBVixFQUFrQixNQUFsQixFQUEwQjtBQUN2QyxRQUFJLFFBQVEsRUFBUjtRQUNBLGVBQWUsS0FBZjtRQUNBLFFBQVEsT0FBTyxLQUFQLEtBQWlCLFNBQWpCLEdBQTZCLE9BQU8sS0FBUCxJQUFnQixXQUFoQixHQUE4QixPQUFPLE1BQVAsSUFBaUIsQ0FBakI7UUFDbkUsU0FBUyxPQUFPLE1BQVAsS0FBa0IsU0FBbEIsR0FBOEIsT0FBTyxNQUFQLElBQWlCLFdBQWpCLEdBQStCLFNBQVMsQ0FBVDtRQUN0RSxtQkFBbUIsT0FBTyxDQUFQO1FBQ25CLG1CQUFtQixPQUFPLENBQVA7UUFDbkIsa0JBQWtCLENBQUUsZ0JBQUYsSUFBc0IsUUFBUSxDQUFSLENBQXRCO1FBQ2xCLGtCQUFrQixDQUFFLGdCQUFGLElBQXNCLFNBQVMsQ0FBVCxDQUF0QjtRQUNsQixnQkFBZ0IsbUJBQW1CLEtBQW5CO1FBQ2hCLGdCQUFnQixtQkFBbUIsTUFBbkI7UUFDaEIsWUFBWTtBQUNSLGtDQUF3QixPQUFPLFVBQVAsVUFBc0IsT0FBTyxVQUFQLE9BQTlDO0FBQ0EsOEJBQW9CLHlCQUFvQiwrQkFBMEIsZUFBVSwwQkFBcUIsdUJBQWtCLG9CQUFuSDtBQUNBLDRCQUFrQixPQUFPLE1BQVAsVUFBa0IsMEJBQXFCLHVCQUF6RDtBQUNBLDBCQUFnQixPQUFPLEtBQVAsT0FBaEI7QUFDQSwwQkFBZ0IsT0FBTyxLQUFQLE9BQWhCO0tBTEosQ0FYbUM7O0FBbUJ2QyxTQUFLLE1BQUwsRUFBYSxVQUFVLEdBQVYsRUFBZSxLQUFmLEVBQXNCO0FBQy9CLFlBQUksZUFBZSxHQUFmLENBQUosRUFBeUI7QUFDckIsMkJBQWUsSUFBZixDQURxQjtTQUF6QixNQUVPO0FBQ0gsa0JBQU0sWUFBWSxHQUFaLENBQU4sSUFBMEIsS0FBMUIsQ0FERztTQUZQO0tBRFMsQ0FBYixDQW5CdUM7O0FBMkJ2QyxRQUFJLFlBQUosRUFBa0I7QUFDZCxjQUFNLFNBQU4sR0FBa0IsRUFBbEIsQ0FEYzs7QUFHZCxhQUFLLFNBQUwsRUFBZ0IsVUFBVSxHQUFWLEVBQWUsS0FBZixFQUFzQjtBQUNsQyxnQkFBSSxlQUFlLEdBQUMsS0FBUSxPQUFSLEdBQW1CLEdBQXBCLEdBQTBCLEdBQTFCLENBRGU7QUFFbEMsa0JBQU0sU0FBTixJQUFtQixNQUFNLE9BQU4sQ0FBYyxZQUFkLEVBQTRCLFlBQTVCLENBQW5CLENBRmtDO1NBQXRCLENBQWhCLENBSGM7S0FBbEI7O0FBU0EsV0FBTyxLQUFQLENBcEN1QztDQUExQiIsImZpbGUiOiJidWlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHV0aWxzID0gcmVxdWlyZSgnLi4vLi4vaW5jL3V0aWxzJyk7XG5jb25zdCB0cmFuc2Zvcm1EaWN0aW9uYXJ5ID0gcmVxdWlyZSgnLi4vY3NzL3RyYW5zZm9ybS1kaWN0aW9uYXJ5Jyk7XG5cbmNvbnN0IGVhY2ggPSB1dGlscy5lYWNoO1xuY29uc3QgY2FtZWxUb0Rhc2ggPSB1dGlscy5jYW1lbFRvRGFzaDtcbmNvbnN0IHRyYW5zZm9ybVByb3BzID0gdHJhbnNmb3JtRGljdGlvbmFyeS5wcm9wcztcbmNvbnN0IHplcm9Ob3RaZXJvID0gMC4wMDAxO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvdXRwdXQsIG9yaWdpbikge1xuICAgIGxldCBwcm9wcyA9IHt9LFxuICAgICAgICBoYXNUcmFuc2Zvcm0gPSBmYWxzZSxcbiAgICAgICAgc2NhbGUgPSBvdXRwdXQuc2NhbGUgIT09IHVuZGVmaW5lZCA/IG91dHB1dC5zY2FsZSB8fCB6ZXJvTm90WmVybyA6IG91dHB1dC5zY2FsZVggfHwgMSxcbiAgICAgICAgc2NhbGVZID0gb3V0cHV0LnNjYWxlWSAhPT0gdW5kZWZpbmVkID8gb3V0cHV0LnNjYWxlWSB8fCB6ZXJvTm90WmVybyA6IHNjYWxlIHx8IDEsXG4gICAgICAgIHRyYW5zZm9ybU9yaWdpblggPSBvcmlnaW4ueCxcbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luWSA9IG9yaWdpbi55LFxuICAgICAgICBzY2FsZVRyYW5zZm9ybVggPSAtIHRyYW5zZm9ybU9yaWdpblggKiAoc2NhbGUgKiAxKSxcbiAgICAgICAgc2NhbGVUcmFuc2Zvcm1ZID0gLSB0cmFuc2Zvcm1PcmlnaW5ZICogKHNjYWxlWSAqIDEpLFxuICAgICAgICBzY2FsZVJlcGxhY2VYID0gdHJhbnNmb3JtT3JpZ2luWCAvIHNjYWxlLFxuICAgICAgICBzY2FsZVJlcGxhY2VZID0gdHJhbnNmb3JtT3JpZ2luWSAvIHNjYWxlWSxcbiAgICAgICAgdHJhbnNmb3JtID0ge1xuICAgICAgICAgICAgdHJhbnNsYXRlOiBgdHJhbnNsYXRlKCR7b3V0cHV0LnRyYW5zbGF0ZVh9LCAke291dHB1dC50cmFuc2xhdGVZfSkgYCxcbiAgICAgICAgICAgIHNjYWxlOiBgdHJhbnNsYXRlKCR7c2NhbGVUcmFuc2Zvcm1YfSwgJHtzY2FsZVRyYW5zZm9ybVl9KSBzY2FsZSgke3NjYWxlfSwgJHtzY2FsZVl9KSB0cmFuc2xhdGUoJHtzY2FsZVJlcGxhY2VYfSwgJHtzY2FsZVJlcGxhY2VZfSkgYCxcbiAgICAgICAgICAgIHJvdGF0ZTogYHJvdGF0ZSgke291dHB1dC5yb3RhdGV9LCAke3RyYW5zZm9ybU9yaWdpblh9LCAke3RyYW5zZm9ybU9yaWdpbll9KSBgLFxuICAgICAgICAgICAgc2tld1g6IGBza2V3WCgke291dHB1dC5za2V3WH0pIGAsXG4gICAgICAgICAgICBza2V3WTogYHNrZXdZKCR7b3V0cHV0LnNrZXdZfSkgYFxuICAgICAgICB9O1xuXG4gICAgZWFjaChvdXRwdXQsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgIGlmICh0cmFuc2Zvcm1Qcm9wc1trZXldKSB7XG4gICAgICAgICAgICBoYXNUcmFuc2Zvcm0gPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvcHNbY2FtZWxUb0Rhc2goa2V5KV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGhhc1RyYW5zZm9ybSkge1xuICAgICAgICBwcm9wcy50cmFuc2Zvcm0gPSAnJztcblxuICAgICAgICBlYWNoKHRyYW5zZm9ybSwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBkZWZhdWx0VmFsdWUgPSAoa2V5ID09PSAnc2NhbGUnKSA/ICcxJyA6ICcwJztcbiAgICAgICAgICAgIHByb3BzLnRyYW5zZm9ybSArPSB2YWx1ZS5yZXBsYWNlKC91bmRlZmluZWQvZywgZGVmYXVsdFZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BzO1xufTsiXX0=