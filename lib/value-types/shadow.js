'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.__esModule = true;

var _color = require('./color');

var _color2 = _interopRequireDefault(_color);

var _px = require('./px');

var _dictionary = require('./settings/dictionary');

var _utils = require('../inc/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var shadowWithoutColorTerms = _dictionary.shadow.slice(0, 4);

exports.default = {
    defaultProps: _extends({}, _color2.default.defaultProps, {
        X: _px.defaultProps,
        Y: _px.defaultProps,
        Radius: _px.defaultProps,
        Spread: _px.defaultProps
    }),

    split: function (value) {
        var bits = (0, _utils.splitSpaceDelimited)(value);
        var hasReachedColor = false;
        var colorProp = '';
        var splitValue = {};

        bits.forEach(function (bit, i) {
            // If we've reached the color props, append to color string
            if (hasReachedColor || _color2.default.test(bit)) {
                hasReachedColor = true;
                colorProp += bit;

                // Else process shadow value
            } else {
                    splitValue[_dictionary.shadow[i]] = bit;
                }
        });

        var splitColorProps = _color2.default.split(colorProp);

        return _extends({}, splitValue, { splitColorProps: splitColorProps });
    },

    combine: function (values) {
        return (0, _utils.createDelimited)(values, shadowWithoutColorTerms, ' ') + _color2.default.combine(values);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWx1ZS10eXBlcy9zaGFkb3cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0EsSUFBTSx1QkFBdUIsR0FBRyxtQkFBWSxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDOztrQkFFekM7QUFDWCxnQkFBWSxlQUNMLGdCQUFNLFlBQVk7QUFDckIsU0FBQyxrQkFBZ0I7QUFDakIsU0FBQyxrQkFBZ0I7QUFDakIsY0FBTSxrQkFBZ0I7QUFDdEIsY0FBTSxrQkFBZ0I7TUFDekI7O0FBRUQsU0FBSyxFQUFFLFVBQUMsS0FBSyxFQUFLO0FBQ2QsWUFBTSxJQUFJLEdBQUcsZ0NBQW9CLEtBQUssQ0FBQyxDQUFDO0FBQ3hDLFlBQUksZUFBZSxHQUFHLEtBQUssQ0FBQztBQUM1QixZQUFJLFNBQVMsR0FBRyxFQUFFLENBQUM7QUFDbkIsWUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDOztBQUVwQixZQUFJLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBRyxFQUFFLENBQUMsRUFBSzs7QUFFckIsZ0JBQUksZUFBZSxJQUFJLGdCQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtBQUNwQywrQkFBZSxHQUFHLElBQUksQ0FBQztBQUN2Qix5QkFBUyxJQUFJLEdBQUc7OztBQUFDLGFBR3BCLE1BQU07QUFDSCw4QkFBVSxDQUFDLG1CQUFZLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO2lCQUNwQztTQUNKLENBQUMsQ0FBQzs7QUFFSCxZQUFNLGVBQWUsR0FBRyxnQkFBTSxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7O0FBRS9DLDRCQUFZLFVBQVUsSUFBRSxlQUFlLEVBQWYsZUFBZSxJQUFHO0tBQzdDOztBQUVELFdBQU8sRUFBRSxVQUFDLE1BQU07ZUFBSyw0QkFBZ0IsTUFBTSxFQUFFLHVCQUF1QixFQUFFLEdBQUcsQ0FBQyxHQUFHLGdCQUFNLE9BQU8sQ0FBQyxNQUFNLENBQUM7S0FBQTtDQUNyRyIsImZpbGUiOiJzaGFkb3cuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29sb3IgZnJvbSAnLi9jb2xvcic7XG5pbXBvcnQgeyBkZWZhdWx0UHJvcHMgYXMgcHhEZWZhdWx0UHJvcHMgfSBmcm9tICcuL3B4JztcbmltcG9ydCB7IHNoYWRvdyBhcyBzaGFkb3dUZXJtcyB9IGZyb20gJy4vc2V0dGluZ3MvZGljdGlvbmFyeSc7XG5pbXBvcnQgeyBzcGxpdFNwYWNlRGVsaW1pdGVkLCBjcmVhdGVEZWxpbWl0ZWQgfSBmcm9tICcuLi9pbmMvdXRpbHMnO1xuXG5jb25zdCBzaGFkb3dXaXRob3V0Q29sb3JUZXJtcyA9IHNoYWRvd1Rlcm1zLnNsaWNlKDAsIDQpO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIC4uLmNvbG9yLmRlZmF1bHRQcm9wcyxcbiAgICAgICAgWDogcHhEZWZhdWx0UHJvcHMsXG4gICAgICAgIFk6IHB4RGVmYXVsdFByb3BzLFxuICAgICAgICBSYWRpdXM6IHB4RGVmYXVsdFByb3BzLFxuICAgICAgICBTcHJlYWQ6IHB4RGVmYXVsdFByb3BzXG4gICAgfSxcblxuICAgIHNwbGl0OiAodmFsdWUpID0+IHtcbiAgICAgICAgY29uc3QgYml0cyA9IHNwbGl0U3BhY2VEZWxpbWl0ZWQodmFsdWUpO1xuICAgICAgICBsZXQgaGFzUmVhY2hlZENvbG9yID0gZmFsc2U7XG4gICAgICAgIGxldCBjb2xvclByb3AgPSAnJztcbiAgICAgICAgbGV0IHNwbGl0VmFsdWUgPSB7fTtcblxuICAgICAgICBiaXRzLmZvckVhY2goKGJpdCwgaSkgPT4ge1xuICAgICAgICAgICAgLy8gSWYgd2UndmUgcmVhY2hlZCB0aGUgY29sb3IgcHJvcHMsIGFwcGVuZCB0byBjb2xvciBzdHJpbmdcbiAgICAgICAgICAgIGlmIChoYXNSZWFjaGVkQ29sb3IgfHwgY29sb3IudGVzdChiaXQpKSB7XG4gICAgICAgICAgICAgICAgaGFzUmVhY2hlZENvbG9yID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjb2xvclByb3AgKz0gYml0O1xuXG4gICAgICAgICAgICAvLyBFbHNlIHByb2Nlc3Mgc2hhZG93IHZhbHVlXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNwbGl0VmFsdWVbc2hhZG93VGVybXNbaV1dID0gYml0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBzcGxpdENvbG9yUHJvcHMgPSBjb2xvci5zcGxpdChjb2xvclByb3ApO1xuXG4gICAgICAgIHJldHVybiB7IC4uLnNwbGl0VmFsdWUsIHNwbGl0Q29sb3JQcm9wcyB9O1xuICAgIH0sXG5cbiAgICBjb21iaW5lOiAodmFsdWVzKSA9PiBjcmVhdGVEZWxpbWl0ZWQodmFsdWVzLCBzaGFkb3dXaXRob3V0Q29sb3JUZXJtcywgJyAnKSArIGNvbG9yLmNvbWJpbmUodmFsdWVzKVxufTtcbiJdfQ==