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
            if (hasReachedColor || _color2.default.test(thisBit)) {
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

    combine: function (value) {
        return createDelimited(values, shadowWithoutColorTerms, ' ') + _color2.default.combine(values);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWx1ZS10eXBlcy9zaGFkb3cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0EsSUFBTSx1QkFBdUIsR0FBRyxtQkFBWSxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDOztrQkFFekM7QUFDWCxnQkFBWSxlQUNMLGdCQUFNLFlBQVk7QUFDckIsU0FBQyxrQkFBZ0I7QUFDakIsU0FBQyxrQkFBZ0I7QUFDakIsY0FBTSxrQkFBZ0I7QUFDdEIsY0FBTSxrQkFBZ0I7TUFDekI7O0FBRUQsU0FBSyxFQUFFLFVBQUMsS0FBSyxFQUFLO0FBQ2QsWUFBTSxJQUFJLEdBQUcsZ0NBQW9CLEtBQUssQ0FBQyxDQUFDO0FBQ3hDLFlBQUksZUFBZSxHQUFHLEtBQUssQ0FBQztBQUM1QixZQUFJLFNBQVMsR0FBRyxFQUFFLENBQUM7QUFDbkIsWUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDOztBQUVwQixZQUFJLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBRyxFQUFFLENBQUMsRUFBSzs7QUFFckIsZ0JBQUksZUFBZSxJQUFJLGdCQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRTtBQUN4QywrQkFBZSxHQUFHLElBQUksQ0FBQztBQUN2Qix5QkFBUyxJQUFJLEdBQUc7OztBQUFDLGFBR3BCLE1BQU07QUFDSCw4QkFBVSxDQUFDLG1CQUFZLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO2lCQUNwQztTQUNKLENBQUMsQ0FBQzs7QUFFSCxZQUFNLGVBQWUsR0FBRyxnQkFBTSxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7O0FBRS9DLDRCQUFZLFVBQVUsSUFBRSxlQUFlLEVBQWYsZUFBZSxJQUFHO0tBQzdDOztBQUVELFdBQU8sRUFBRSxVQUFDLEtBQUs7ZUFBSyxlQUFlLENBQUMsTUFBTSxFQUFFLHVCQUF1QixFQUFFLEdBQUcsQ0FBQyxHQUFHLGdCQUFNLE9BQU8sQ0FBQyxNQUFNLENBQUM7S0FBQTtDQUNwRyIsImZpbGUiOiJzaGFkb3cuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29sb3IgZnJvbSAnLi9jb2xvcic7XG5pbXBvcnQgeyBkZWZhdWx0UHJvcHMgYXMgcHhEZWZhdWx0UHJvcHMgfSBmcm9tICcuL3B4JztcbmltcG9ydCB7IHNoYWRvdyBhcyBzaGFkb3dUZXJtcyB9IGZyb20gJy4vc2V0dGluZ3MvZGljdGlvbmFyeSc7XG5pbXBvcnQgeyBzcGxpdFNwYWNlRGVsaW1pdGVkIH0gZnJvbSAnLi4vaW5jL3V0aWxzJztcblxuY29uc3Qgc2hhZG93V2l0aG91dENvbG9yVGVybXMgPSBzaGFkb3dUZXJtcy5zbGljZSgwLCA0KTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICAuLi5jb2xvci5kZWZhdWx0UHJvcHMsXG4gICAgICAgIFg6IHB4RGVmYXVsdFByb3BzLFxuICAgICAgICBZOiBweERlZmF1bHRQcm9wcyxcbiAgICAgICAgUmFkaXVzOiBweERlZmF1bHRQcm9wcyxcbiAgICAgICAgU3ByZWFkOiBweERlZmF1bHRQcm9wc1xuICAgIH0sXG5cbiAgICBzcGxpdDogKHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IGJpdHMgPSBzcGxpdFNwYWNlRGVsaW1pdGVkKHZhbHVlKTtcbiAgICAgICAgbGV0IGhhc1JlYWNoZWRDb2xvciA9IGZhbHNlO1xuICAgICAgICBsZXQgY29sb3JQcm9wID0gJyc7XG4gICAgICAgIGxldCBzcGxpdFZhbHVlID0ge307XG5cbiAgICAgICAgYml0cy5mb3JFYWNoKChiaXQsIGkpID0+IHtcbiAgICAgICAgICAgIC8vIElmIHdlJ3ZlIHJlYWNoZWQgdGhlIGNvbG9yIHByb3BzLCBhcHBlbmQgdG8gY29sb3Igc3RyaW5nXG4gICAgICAgICAgICBpZiAoaGFzUmVhY2hlZENvbG9yIHx8IGNvbG9yLnRlc3QodGhpc0JpdCkpIHtcbiAgICAgICAgICAgICAgICBoYXNSZWFjaGVkQ29sb3IgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNvbG9yUHJvcCArPSBiaXQ7XG5cbiAgICAgICAgICAgIC8vIEVsc2UgcHJvY2VzcyBzaGFkb3cgdmFsdWVcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3BsaXRWYWx1ZVtzaGFkb3dUZXJtc1tpXV0gPSBiaXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHNwbGl0Q29sb3JQcm9wcyA9IGNvbG9yLnNwbGl0KGNvbG9yUHJvcCk7XG5cbiAgICAgICAgcmV0dXJuIHsgLi4uc3BsaXRWYWx1ZSwgc3BsaXRDb2xvclByb3BzIH07XG4gICAgfSxcblxuICAgIGNvbWJpbmU6ICh2YWx1ZSkgPT4gY3JlYXRlRGVsaW1pdGVkKHZhbHVlcywgc2hhZG93V2l0aG91dENvbG9yVGVybXMsICcgJykgKyBjb2xvci5jb21iaW5lKHZhbHVlcylcbn07XG4iXX0=