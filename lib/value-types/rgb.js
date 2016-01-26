'use strict';

exports.__esModule = true;

var _utils = require('../inc/utils');

var _dictionary = require('./settings/dictionary');

var _defaultProps = require('./settings/default-props');

exports.default = {
    defaultProps: {
        Red: _defaultProps.rgb,
        Green: _defaultProps.rgb,
        Blue: _defaultProps.rgb,
        Alpha: _defaultProps.opacity
    },

    test: function (value) {
        return value && value.indexOf('rgb') > -1;
    },

    split: function (value) {
        return (0, _utils.getColorValues)(value, _dictionary.rgb);
    },

    combine: function (value) {
        return (0, _utils.createFunctionString)((0, _utils.createDelimited)(values, _dictionary.rgb, ', ', 2), 'rgba');
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWx1ZS10eXBlcy9yZ2IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztrQkFJZTtBQUNYLGtCQUFjO0FBQ1YsMkJBSkMsR0FJRDtBQUNBLDZCQUxDLEdBS0Q7QUFDQSw0QkFOQyxHQU1EO0FBQ0EsNkJBUG9CLE9BT3BCO0tBSko7O0FBT0EsVUFBTSxVQUFDLEtBQUQ7ZUFBWSxTQUFTLE1BQU0sT0FBTixDQUFjLEtBQWQsSUFBdUIsQ0FBQyxDQUFEO0tBQTVDOztBQUVOLFdBQU8sVUFBQyxLQUFEO2VBQVcsV0FkMEIsZUFjMUIsQ0FBZSxLQUFmLGNBYmIsR0FhYTtLQUFYOztBQUVQLGFBQVMsVUFBQyxLQUFEO2VBQVcsV0FoQkUscUJBZ0JGLENBQXFCLFdBaEJwQyxnQkFnQm9DLENBQWdCLE1BQWhCLGNBZnBDLEdBZW9DLEVBQWtDLElBQWxDLEVBQXdDLENBQXhDLENBQXJCLEVBQWlFLE1BQWpFO0tBQVgiLCJmaWxlIjoicmdiLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlRGVsaW1pdGVkLCBjcmVhdGVGdW5jdGlvblN0cmluZywgZ2V0Q29sb3JWYWx1ZXMgfSBmcm9tICcuLi9pbmMvdXRpbHMnO1xuaW1wb3J0IHsgcmdiIGFzIHJnYlRlcm1zIH0gZnJvbSAnLi9zZXR0aW5ncy9kaWN0aW9uYXJ5JztcbmltcG9ydCB7IHJnYiBhcyBkZWZhdWx0UkdCLCBvcGFjaXR5IGFzIGRlZmF1bHRPcGFjaXR5IH0gZnJvbSAnLi9zZXR0aW5ncy9kZWZhdWx0LXByb3BzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICBSZWQ6IGRlZmF1bHRSR0IsXG4gICAgICAgIEdyZWVuOiBkZWZhdWx0UkdCLFxuICAgICAgICBCbHVlOiBkZWZhdWx0UkdCLFxuICAgICAgICBBbHBoYTogZGVmYXVsdE9wYWNpdHlcbiAgICB9LFxuXG4gICAgdGVzdDogKHZhbHVlKSA9PiAodmFsdWUgJiYgdmFsdWUuaW5kZXhPZigncmdiJykgPiAtMSksXG5cbiAgICBzcGxpdDogKHZhbHVlKSA9PiBnZXRDb2xvclZhbHVlcyh2YWx1ZSwgcmdiVGVybXMpLFxuXG4gICAgY29tYmluZTogKHZhbHVlKSA9PiBjcmVhdGVGdW5jdGlvblN0cmluZyhjcmVhdGVEZWxpbWl0ZWQodmFsdWVzLCByZ2JUZXJtcywgJywgJywgMiksICdyZ2JhJylcbn07Il19