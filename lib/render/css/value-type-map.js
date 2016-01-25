'use strict';

exports.__esModule = true;

var _angle = require('../../value-types/angle');

var _angle2 = _interopRequireDefault(_angle);

var _alpha = require('../../value-types/alpha');

var _alpha2 = _interopRequireDefault(_alpha);

var _axes = require('../../value-types/axes');

var _axes2 = _interopRequireDefault(_axes);

var _color = require('../../value-types/color');

var _color2 = _interopRequireDefault(_color);

var _scale = require('../../value-types/scale');

var _scale2 = _interopRequireDefault(_scale);

var _shadow = require('../../value-types/shadow');

var _shadow2 = _interopRequireDefault(_shadow);

var _positions = require('../../value-types/positions');

var _positions2 = _interopRequireDefault(_positions);

var _px = require('../../value-types/px');

var _px2 = _interopRequireDefault(_px);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    // Color props
    color: _color2.default,
    backgroundColor: _color2.default,
    outlineColor: _color2.default,
    fill: _color2.default,
    stroke: _color2.default,

    // Border props
    borderColor: _color2.default,
    borderTopColor: _color2.default,
    borderRightColor: _color2.default,
    borderBottomColor: _color2.default,
    borderLeftColor: _color2.default,
    borderRadius: _px2.default,

    // Positioning
    margin: _positions2.default,
    padding: _positions2.default,
    width: _px2.default,
    height: _px2.default,

    // Axes
    backgroundPosition: _axes2.default,
    perspectiveOrigin: _axes2.default,
    transformOrigin: _axes2.default,

    // Shadows
    textShadow: _shadow2.default,
    boxShadow: _shadow2.default,

    // Transform properties
    rotate: _angle2.default,
    rotateX: _angle2.default,
    rotateY: _angle2.default,
    rotateZ: _angle2.default,
    scale: _scale2.default,
    scaleX: _scale2.default,
    scaleY: _scale2.default,
    scaleZ: _scale2.default,
    skewX: _angle2.default,
    skewY: _angle2.default,
    distance: _px2.default,
    translateX: _px2.default,
    translateY: _px2.default,
    translateZ: _px2.default,
    perspective: _px2.default,
    opacity: _alpha2.default
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yZW5kZXIvY3NzL3ZhbHVlLXR5cGUtbWFwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQVNlOztBQUVYLFNBQUssaUJBQU87QUFDWixtQkFBZSxpQkFBTztBQUN0QixnQkFBWSxpQkFBTztBQUNuQixRQUFJLGlCQUFPO0FBQ1gsVUFBTSxpQkFBTzs7O0FBR2IsZUFBVyxpQkFBTztBQUNsQixrQkFBYyxpQkFBTztBQUNyQixvQkFBZ0IsaUJBQU87QUFDdkIscUJBQWlCLGlCQUFPO0FBQ3hCLG1CQUFlLGlCQUFPO0FBQ3RCLGdCQUFZLGNBQUk7OztBQUdoQixVQUFNLHFCQUFXO0FBQ2pCLFdBQU8scUJBQVc7QUFDbEIsU0FBSyxjQUFJO0FBQ1QsVUFBTSxjQUFJOzs7QUFHVixzQkFBa0IsZ0JBQU07QUFDeEIscUJBQWlCLGdCQUFNO0FBQ3ZCLG1CQUFlLGdCQUFNOzs7QUFHckIsY0FBVSxrQkFBUTtBQUNsQixhQUFTLGtCQUFROzs7QUFHakIsVUFBTSxpQkFBTztBQUNiLFdBQU8saUJBQU87QUFDZCxXQUFPLGlCQUFPO0FBQ2QsV0FBTyxpQkFBTztBQUNkLFNBQUssaUJBQU87QUFDWixVQUFNLGlCQUFPO0FBQ2IsVUFBTSxpQkFBTztBQUNiLFVBQU0saUJBQU87QUFDYixTQUFLLGlCQUFPO0FBQ1osU0FBSyxpQkFBTztBQUNaLFlBQVEsY0FBSTtBQUNaLGNBQVUsY0FBSTtBQUNkLGNBQVUsY0FBSTtBQUNkLGNBQVUsY0FBSTtBQUNkLGVBQVcsY0FBSTtBQUNmLFdBQU8saUJBQU87Q0FDakIiLCJmaWxlIjoidmFsdWUtdHlwZS1tYXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYW5nbGUgZnJvbSAnLi4vLi4vdmFsdWUtdHlwZXMvYW5nbGUnO1xuaW1wb3J0IGFscGhhIGZyb20gJy4uLy4uL3ZhbHVlLXR5cGVzL2FscGhhJztcbmltcG9ydCBheGVzIGZyb20gJy4uLy4uL3ZhbHVlLXR5cGVzL2F4ZXMnO1xuaW1wb3J0IGNvbG9yIGZyb20gJy4uLy4uL3ZhbHVlLXR5cGVzL2NvbG9yJztcbmltcG9ydCBzY2FsZSBmcm9tICcuLi8uLi92YWx1ZS10eXBlcy9zY2FsZSc7XG5pbXBvcnQgc2hhZG93IGZyb20gJy4uLy4uL3ZhbHVlLXR5cGVzL3NoYWRvdyc7XG5pbXBvcnQgcG9zaXRpb25zIGZyb20gJy4uLy4uL3ZhbHVlLXR5cGVzL3Bvc2l0aW9ucyc7XG5pbXBvcnQgcHggZnJvbSAnLi4vLi4vdmFsdWUtdHlwZXMvcHgnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgLy8gQ29sb3IgcHJvcHNcbiAgICBjb2xvcjogY29sb3IsXG4gICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcixcbiAgICBvdXRsaW5lQ29sb3I6IGNvbG9yLFxuICAgIGZpbGw6IGNvbG9yLFxuICAgIHN0cm9rZTogY29sb3IsXG5cbiAgICAvLyBCb3JkZXIgcHJvcHNcbiAgICBib3JkZXJDb2xvcjogY29sb3IsXG4gICAgYm9yZGVyVG9wQ29sb3I6IGNvbG9yLFxuICAgIGJvcmRlclJpZ2h0Q29sb3I6IGNvbG9yLFxuICAgIGJvcmRlckJvdHRvbUNvbG9yOiBjb2xvcixcbiAgICBib3JkZXJMZWZ0Q29sb3I6IGNvbG9yLFxuICAgIGJvcmRlclJhZGl1czogcHgsXG5cbiAgICAvLyBQb3NpdGlvbmluZ1xuICAgIG1hcmdpbjogcG9zaXRpb25zLFxuICAgIHBhZGRpbmc6IHBvc2l0aW9ucyxcbiAgICB3aWR0aDogcHgsXG4gICAgaGVpZ2h0OiBweCxcblxuICAgIC8vIEF4ZXNcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246IGF4ZXMsXG4gICAgcGVyc3BlY3RpdmVPcmlnaW46IGF4ZXMsXG4gICAgdHJhbnNmb3JtT3JpZ2luOiBheGVzLFxuXG4gICAgLy8gU2hhZG93c1xuICAgIHRleHRTaGFkb3c6IHNoYWRvdyxcbiAgICBib3hTaGFkb3c6IHNoYWRvdywgICBcblxuICAgIC8vIFRyYW5zZm9ybSBwcm9wZXJ0aWVzXG4gICAgcm90YXRlOiBhbmdsZSxcbiAgICByb3RhdGVYOiBhbmdsZSxcbiAgICByb3RhdGVZOiBhbmdsZSxcbiAgICByb3RhdGVaOiBhbmdsZSxcbiAgICBzY2FsZTogc2NhbGUsXG4gICAgc2NhbGVYOiBzY2FsZSxcbiAgICBzY2FsZVk6IHNjYWxlLFxuICAgIHNjYWxlWjogc2NhbGUsXG4gICAgc2tld1g6IGFuZ2xlLFxuICAgIHNrZXdZOiBhbmdsZSxcbiAgICBkaXN0YW5jZTogcHgsXG4gICAgdHJhbnNsYXRlWDogcHgsXG4gICAgdHJhbnNsYXRlWTogcHgsXG4gICAgdHJhbnNsYXRlWjogcHgsXG4gICAgcGVyc3BlY3RpdmU6IHB4LFxuICAgIG9wYWNpdHk6IGFscGhhXG59OyJdfQ==