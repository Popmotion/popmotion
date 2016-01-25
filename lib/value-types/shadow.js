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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWx1ZS10eXBlcy9zaGFkb3cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0EsSUFBTSwwQkFBMEIsWUFIdkIsTUFHdUIsQ0FBWSxLQUFaLENBQWtCLENBQWxCLEVBQXFCLENBQXJCLENBQTFCOztrQkFFUztBQUNYLCtCQUNPLGdCQUFNLFlBQU47QUFDSCxlQVRDLFlBU0Q7QUFDQSxlQVZDLFlBVUQ7QUFDQSxvQkFYQyxZQVdEO0FBQ0Esb0JBWkMsWUFZRDtNQUxKOztBQVFBLFdBQU8sVUFBQyxLQUFELEVBQVc7QUFDZCxZQUFNLE9BQU8sV0FkWixvQkFjWSxDQUFvQixLQUFwQixDQUFQLENBRFE7QUFFZCxZQUFJLGtCQUFrQixLQUFsQixDQUZVO0FBR2QsWUFBSSxZQUFZLEVBQVosQ0FIVTtBQUlkLFlBQUksYUFBYSxFQUFiLENBSlU7O0FBTWQsYUFBSyxPQUFMLENBQWEsVUFBQyxHQUFELEVBQU0sQ0FBTixFQUFZOztBQUVyQixnQkFBSSxtQkFBbUIsZ0JBQU0sSUFBTixDQUFXLE9BQVgsQ0FBbkIsRUFBd0M7QUFDeEMsa0NBQWtCLElBQWxCLENBRHdDO0FBRXhDLDZCQUFhLEdBQWI7OztBQUZ3QyxhQUE1QyxNQUtPO0FBQ0gsK0JBQVcsWUE1QmxCLE1BNEJrQixDQUFZLENBQVosQ0FBWCxJQUE2QixHQUE3QixDQURHO2lCQUxQO1NBRlMsQ0FBYixDQU5jOztBQWtCZCxZQUFNLGtCQUFrQixnQkFBTSxLQUFOLENBQVksU0FBWixDQUFsQixDQWxCUTs7QUFvQmQsNEJBQVksY0FBWSxtQ0FBeEIsQ0FwQmM7S0FBWDs7QUF1QlAsYUFBUyxVQUFDLEtBQUQ7ZUFBVyxnQkFBZ0IsTUFBaEIsRUFBd0IsdUJBQXhCLEVBQWlELEdBQWpELElBQXdELGdCQUFNLE9BQU4sQ0FBYyxNQUFkLENBQXhEO0tBQVgiLCJmaWxlIjoic2hhZG93LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbG9yIGZyb20gJy4vY29sb3InO1xuaW1wb3J0IHsgZGVmYXVsdFByb3BzIGFzIHB4RGVmYXVsdFByb3BzIH0gZnJvbSAnLi9weCc7XG5pbXBvcnQgeyBzaGFkb3cgYXMgc2hhZG93VGVybXMgfSBmcm9tICcuL3NldHRpbmdzL2RpY3Rpb25hcnknO1xuaW1wb3J0IHsgc3BsaXRTcGFjZURlbGltaXRlZCB9IGZyb20gJy4uL2luYy91dGlscyc7XG5cbmNvbnN0IHNoYWRvd1dpdGhvdXRDb2xvclRlcm1zID0gc2hhZG93VGVybXMuc2xpY2UoMCwgNCk7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgLi4uY29sb3IuZGVmYXVsdFByb3BzLFxuICAgICAgICBYOiBweERlZmF1bHRQcm9wcyxcbiAgICAgICAgWTogcHhEZWZhdWx0UHJvcHMsXG4gICAgICAgIFJhZGl1czogcHhEZWZhdWx0UHJvcHMsXG4gICAgICAgIFNwcmVhZDogcHhEZWZhdWx0UHJvcHNcbiAgICB9LFxuXG4gICAgc3BsaXQ6ICh2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBiaXRzID0gc3BsaXRTcGFjZURlbGltaXRlZCh2YWx1ZSk7XG4gICAgICAgIGxldCBoYXNSZWFjaGVkQ29sb3IgPSBmYWxzZTtcbiAgICAgICAgbGV0IGNvbG9yUHJvcCA9ICcnO1xuICAgICAgICBsZXQgc3BsaXRWYWx1ZSA9IHt9O1xuXG4gICAgICAgIGJpdHMuZm9yRWFjaCgoYml0LCBpKSA9PiB7XG4gICAgICAgICAgICAvLyBJZiB3ZSd2ZSByZWFjaGVkIHRoZSBjb2xvciBwcm9wcywgYXBwZW5kIHRvIGNvbG9yIHN0cmluZ1xuICAgICAgICAgICAgaWYgKGhhc1JlYWNoZWRDb2xvciB8fCBjb2xvci50ZXN0KHRoaXNCaXQpKSB7XG4gICAgICAgICAgICAgICAgaGFzUmVhY2hlZENvbG9yID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjb2xvclByb3AgKz0gYml0O1xuXG4gICAgICAgICAgICAvLyBFbHNlIHByb2Nlc3Mgc2hhZG93IHZhbHVlXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNwbGl0VmFsdWVbc2hhZG93VGVybXNbaV1dID0gYml0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBzcGxpdENvbG9yUHJvcHMgPSBjb2xvci5zcGxpdChjb2xvclByb3ApO1xuXG4gICAgICAgIHJldHVybiB7IC4uLnNwbGl0VmFsdWUsIHNwbGl0Q29sb3JQcm9wcyB9O1xuICAgIH0sXG5cbiAgICBjb21iaW5lOiAodmFsdWUpID0+IGNyZWF0ZURlbGltaXRlZCh2YWx1ZXMsIHNoYWRvd1dpdGhvdXRDb2xvclRlcm1zLCAnICcpICsgY29sb3IuY29tYmluZSh2YWx1ZXMpXG59O1xuIl19