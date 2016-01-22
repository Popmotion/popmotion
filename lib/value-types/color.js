'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.__esModule = true;

var _utils = require('../inc/utils');

var _rgb = require('./rgb');

var _rgb2 = _interopRequireDefault(_rgb);

var _hsl = require('./hsl');

var _hsl2 = _interopRequireDefault(_hsl);

var _hex = require('./hex');

var _hex2 = _interopRequireDefault(_hex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var colorTypes = [_rgb2.default, _hsl2.default, _hex2.default];
var numColorTypes = colorTypes.length;

exports.default = {
    defaultProps: _extends({}, _rgb2.default.defaultProps, _hsl2.default.defaultProps),

    test: function (value) {
        return _rgb2.default.test(value) || _hex2.default.test(value) || _hsl2.default.test(value);
    },

    split: function (value) {
        for (var i = 0; i < numColorTypes; i++) {
            if (colorTypes[i].test(value)) {
                return colorTypes[i].split(value);
            }
        }
    },

    combine: function (value) {
        return values.Red !== undefined ? _rgb2.default.combine(values) : _hsl2.default.combine(values);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWx1ZS10eXBlcy9jb2xvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0EsSUFBTSxhQUFhLDZDQUFiO0FBQ04sSUFBTSxnQkFBZ0IsV0FBVyxNQUFYOztrQkFFUDtBQUNYLCtCQUFtQixjQUFJLFlBQUosRUFBcUIsY0FBSSxZQUFKLENBQXhDOztBQUVBLFVBQU0sVUFBQyxLQUFEO2VBQVcsY0FBSSxJQUFKLENBQVMsS0FBVCxLQUFtQixjQUFJLElBQUosQ0FBUyxLQUFULENBQW5CLElBQXNDLGNBQUksSUFBSixDQUFTLEtBQVQsQ0FBdEM7S0FBWDs7QUFFTixXQUFPLFVBQUMsS0FBRCxFQUFXO0FBQ2QsYUFBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksYUFBSixFQUFtQixHQUFuQyxFQUF3QztBQUNwQyxnQkFBSSxXQUFXLENBQVgsRUFBYyxJQUFkLENBQW1CLEtBQW5CLENBQUosRUFBK0I7QUFDM0IsdUJBQU8sV0FBVyxDQUFYLEVBQWMsS0FBZCxDQUFvQixLQUFwQixDQUFQLENBRDJCO2FBQS9CO1NBREo7S0FERzs7QUFRUCxhQUFTLFVBQUMsS0FBRDtlQUFXLE1BQUMsQ0FBTyxHQUFQLEtBQWUsU0FBZixHQUE0QixjQUFJLE9BQUosQ0FBWSxNQUFaLENBQTdCLEdBQW1ELGNBQUksT0FBSixDQUFZLE1BQVosQ0FBbkQ7S0FBWCIsImZpbGUiOiJjb2xvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGVhY2ggfSBmcm9tICcuLi9pbmMvdXRpbHMnO1xuaW1wb3J0IHJnYiBmcm9tICcuL3JnYic7XG5pbXBvcnQgaHNsIGZyb20gJy4vaHNsJztcbmltcG9ydCBoZXggZnJvbSAnLi9oZXgnO1xuXG5jb25zdCBjb2xvclR5cGVzID0gW3JnYiwgaHNsLCBoZXhdO1xuY29uc3QgbnVtQ29sb3JUeXBlcyA9IGNvbG9yVHlwZXMubGVuZ3RoO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZGVmYXVsdFByb3BzOiB7IC4uLnJnYi5kZWZhdWx0UHJvcHMsIC4uLmhzbC5kZWZhdWx0UHJvcHMgfSxcblxuICAgIHRlc3Q6ICh2YWx1ZSkgPT4gcmdiLnRlc3QodmFsdWUpIHx8IGhleC50ZXN0KHZhbHVlKSB8fCBoc2wudGVzdCh2YWx1ZSksXG5cbiAgICBzcGxpdDogKHZhbHVlKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtQ29sb3JUeXBlczsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoY29sb3JUeXBlc1tpXS50ZXN0KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb2xvclR5cGVzW2ldLnNwbGl0KHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBjb21iaW5lOiAodmFsdWUpID0+ICh2YWx1ZXMuUmVkICE9PSB1bmRlZmluZWQpID8gcmdiLmNvbWJpbmUodmFsdWVzKSA6IGhzbC5jb21iaW5lKHZhbHVlcylcbn07XG4iXX0=