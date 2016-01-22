'use strict';

exports.__esModule = true;

var _defaultProps = require('./settings/default-props');

var _dictionary = require('./settings/dictionary');

var _utils = require('../inc/utils');

exports.default = {
    defaultProps: {
        Hue: {
            min: 0,
            max: 360
        },
        Saturation: _defaultProps.percent,
        Lightness: _defaultProps.percent,
        Alpha: _defaultProps.opacity
    },

    test: function (value) {
        return value && value.indexOf('hsl') > -1;
    },

    split: function (value) {
        return (0, _utils.getColorValues)(value, _dictionary.hsl);
    },

    combine: function (values) {
        return (0, _utils.createFunctionString)((0, _utils.createDelimited)(values, _dictionary.hsl, ', ', 2), 'hsla');
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWx1ZS10eXBlcy9oc2wuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztrQkFJZTtBQUNYLGtCQUFjO0FBQ1YsYUFBSztBQUNELGlCQUFLLENBQUw7QUFDQSxpQkFBSyxHQUFMO1NBRko7QUFJQSxrQ0FWQyxPQVVEO0FBQ0EsaUNBWEMsT0FXRDtBQUNBLDZCQVpVLE9BWVY7S0FQSjs7QUFVQSxVQUFNLFVBQUMsS0FBRDtlQUFZLFNBQVMsTUFBTSxPQUFOLENBQWMsS0FBZCxJQUF1QixDQUFDLENBQUQ7S0FBNUM7O0FBRU4sV0FBTyxVQUFDLEtBQUQ7ZUFBVyxXQWYwQixlQWUxQixDQUFlLEtBQWYsY0FoQmIsR0FnQmE7S0FBWDs7QUFFUCxhQUFTLFVBQUMsTUFBRDtlQUFZLFdBakJDLHFCQWlCRCxDQUFxQixXQWpCckMsZ0JBaUJxQyxDQUFnQixNQUFoQixjQWxCckMsR0FrQnFDLEVBQWtDLElBQWxDLEVBQXdDLENBQXhDLENBQXJCLEVBQWlFLE1BQWpFO0tBQVoiLCJmaWxlIjoiaHNsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcGVyY2VudCwgb3BhY2l0eSB9IGZyb20gJy4vc2V0dGluZ3MvZGVmYXVsdC1wcm9wcyc7XG5pbXBvcnQgeyBoc2wgYXMgaHNsVGVybXMgfSBmcm9tICcuL3NldHRpbmdzL2RpY3Rpb25hcnknO1xuaW1wb3J0IHsgY3JlYXRlRGVsaW1pdGVkLCBjcmVhdGVGdW5jdGlvblN0cmluZywgZ2V0Q29sb3JWYWx1ZXMgfSBmcm9tICcuLi9pbmMvdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIEh1ZToge1xuICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgbWF4OiAzNjBcbiAgICAgICAgfSxcbiAgICAgICAgU2F0dXJhdGlvbjogcGVyY2VudCxcbiAgICAgICAgTGlnaHRuZXNzOiBwZXJjZW50LFxuICAgICAgICBBbHBoYTogb3BhY2l0eVxuICAgIH0sXG5cbiAgICB0ZXN0OiAodmFsdWUpID0+ICh2YWx1ZSAmJiB2YWx1ZS5pbmRleE9mKCdoc2wnKSA+IC0xKSxcblxuICAgIHNwbGl0OiAodmFsdWUpID0+IGdldENvbG9yVmFsdWVzKHZhbHVlLCBoc2xUZXJtcyksXG5cbiAgICBjb21iaW5lOiAodmFsdWVzKSA9PiBjcmVhdGVGdW5jdGlvblN0cmluZyhjcmVhdGVEZWxpbWl0ZWQodmFsdWVzLCBoc2xUZXJtcywgJywgJywgMiksICdoc2xhJylcbn07XG4iXX0=