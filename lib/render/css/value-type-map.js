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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yZW5kZXIvY3NzL3ZhbHVlLXR5cGUtbWFwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQVNlOztBQUVYLDBCQUZXO0FBR1gsb0NBSFc7QUFJWCxpQ0FKVztBQUtYLHlCQUxXO0FBTVgsMkJBTlc7OztBQVNYLGdDQVRXO0FBVVgsbUNBVlc7QUFXWCxxQ0FYVztBQVlYLHNDQVpXO0FBYVgsb0NBYlc7QUFjWCw4QkFkVzs7O0FBaUJYLCtCQWpCVztBQWtCWCxnQ0FsQlc7QUFtQlgsdUJBbkJXO0FBb0JYLHdCQXBCVzs7O0FBdUJYLHNDQXZCVztBQXdCWCxxQ0F4Qlc7QUF5QlgsbUNBekJXOzs7QUE0QlgsZ0NBNUJXO0FBNkJYLCtCQTdCVzs7O0FBZ0NYLDJCQWhDVztBQWlDWCw0QkFqQ1c7QUFrQ1gsNEJBbENXO0FBbUNYLDRCQW5DVztBQW9DWCwwQkFwQ1c7QUFxQ1gsMkJBckNXO0FBc0NYLDJCQXRDVztBQXVDWCwyQkF2Q1c7QUF3Q1gsMEJBeENXO0FBeUNYLDBCQXpDVztBQTBDWCwwQkExQ1c7QUEyQ1gsNEJBM0NXO0FBNENYLDRCQTVDVztBQTZDWCw0QkE3Q1c7QUE4Q1gsNkJBOUNXO0FBK0NYLDRCQS9DVyIsImZpbGUiOiJ2YWx1ZS10eXBlLW1hcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhbmdsZSBmcm9tICcuLi8uLi92YWx1ZS10eXBlcy9hbmdsZSc7XG5pbXBvcnQgYWxwaGEgZnJvbSAnLi4vLi4vdmFsdWUtdHlwZXMvYWxwaGEnO1xuaW1wb3J0IGF4ZXMgZnJvbSAnLi4vLi4vdmFsdWUtdHlwZXMvYXhlcyc7XG5pbXBvcnQgY29sb3IgZnJvbSAnLi4vLi4vdmFsdWUtdHlwZXMvY29sb3InO1xuaW1wb3J0IHNjYWxlIGZyb20gJy4uLy4uL3ZhbHVlLXR5cGVzL3NjYWxlJztcbmltcG9ydCBzaGFkb3cgZnJvbSAnLi4vLi4vdmFsdWUtdHlwZXMvc2hhZG93JztcbmltcG9ydCBwb3NpdGlvbnMgZnJvbSAnLi4vLi4vdmFsdWUtdHlwZXMvcG9zaXRpb25zJztcbmltcG9ydCBweCBmcm9tICcuLi8uLi92YWx1ZS10eXBlcy9weCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICAvLyBDb2xvciBwcm9wc1xuICAgIGNvbG9yOiBjb2xvcixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yLFxuICAgIG91dGxpbmVDb2xvcjogY29sb3IsXG4gICAgZmlsbDogY29sb3IsXG4gICAgc3Ryb2tlOiBjb2xvcixcblxuICAgIC8vIEJvcmRlciBwcm9wc1xuICAgIGJvcmRlckNvbG9yOiBjb2xvcixcbiAgICBib3JkZXJUb3BDb2xvcjogY29sb3IsXG4gICAgYm9yZGVyUmlnaHRDb2xvcjogY29sb3IsXG4gICAgYm9yZGVyQm90dG9tQ29sb3I6IGNvbG9yLFxuICAgIGJvcmRlckxlZnRDb2xvcjogY29sb3IsXG4gICAgYm9yZGVyUmFkaXVzOiBweCxcblxuICAgIC8vIFBvc2l0aW9uaW5nXG4gICAgbWFyZ2luOiBwb3NpdGlvbnMsXG4gICAgcGFkZGluZzogcG9zaXRpb25zLFxuICAgIHdpZHRoOiBweCxcbiAgICBoZWlnaHQ6IHB4LFxuXG4gICAgLy8gQXhlc1xuICAgIGJhY2tncm91bmRQb3NpdGlvbjogYXhlcyxcbiAgICBwZXJzcGVjdGl2ZU9yaWdpbjogYXhlcyxcbiAgICB0cmFuc2Zvcm1PcmlnaW46IGF4ZXMsXG5cbiAgICAvLyBTaGFkb3dzXG4gICAgdGV4dFNoYWRvdzogc2hhZG93LFxuICAgIGJveFNoYWRvdzogc2hhZG93LCAgIFxuXG4gICAgLy8gVHJhbnNmb3JtIHByb3BlcnRpZXNcbiAgICByb3RhdGU6IGFuZ2xlLFxuICAgIHJvdGF0ZVg6IGFuZ2xlLFxuICAgIHJvdGF0ZVk6IGFuZ2xlLFxuICAgIHJvdGF0ZVo6IGFuZ2xlLFxuICAgIHNjYWxlOiBzY2FsZSxcbiAgICBzY2FsZVg6IHNjYWxlLFxuICAgIHNjYWxlWTogc2NhbGUsXG4gICAgc2NhbGVaOiBzY2FsZSxcbiAgICBza2V3WDogYW5nbGUsXG4gICAgc2tld1k6IGFuZ2xlLFxuICAgIGRpc3RhbmNlOiBweCxcbiAgICB0cmFuc2xhdGVYOiBweCxcbiAgICB0cmFuc2xhdGVZOiBweCxcbiAgICB0cmFuc2xhdGVaOiBweCxcbiAgICBwZXJzcGVjdGl2ZTogcHgsXG4gICAgb3BhY2l0eTogYWxwaGFcbn07Il19