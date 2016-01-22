'use strict';

var _Actor = require('../actor/Actor');

var _Actor2 = _interopRequireDefault(_Actor);

var _utils = require('../inc/utils');

var _css = require('../render/css');

var _css2 = _interopRequireDefault(_css);

var _svg = require('../render/svg');

var _svg2 = _interopRequireDefault(_svg);

var _svgPath = require('../render/svg-path');

var _svgPath2 = _interopRequireDefault(_svgPath);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SAVE_PROP = '__pm_actor_';

var detectRenderer = function (element) {
    // If HTMLElement load renderCSS
    if (element instanceof HTMLElement || element.tagName === 'svg') {
        return _css2.default;

        // Or SVG
    } else if (element instanceof SVGElement) {
            if (element.tagName === 'path') {
                return _svgPath2.default;
            } else {
                return _svg2.default;
            }
        }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmMvc2VsZWN0LWFjdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPQSxJQUFNLFlBQVksYUFBWjs7QUFFTixJQUFNLGlCQUFpQixVQUFDLE9BQUQsRUFBYTs7QUFFaEMsUUFBSSxtQkFBbUIsV0FBbkIsSUFBa0MsUUFBUSxPQUFSLEtBQW9CLEtBQXBCLEVBQTJCO0FBQzdEOzs7QUFENkQsS0FBakUsTUFJTyxJQUFJLG1CQUFtQixVQUFuQixFQUErQjtBQUN0QyxnQkFBSSxRQUFRLE9BQVIsS0FBb0IsTUFBcEIsRUFBNEI7QUFDNUIseUNBRDRCO2FBQWhDLE1BRU87QUFDSCxxQ0FERzthQUZQO1NBREc7Q0FOWSIsImZpbGUiOiJzZWxlY3QtYWN0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWN0b3IgZnJvbSAnLi4vYWN0b3IvQWN0b3InO1xuaW1wb3J0IHsgc2VsZWN0RG9tIH0gZnJvbSAnLi4vaW5jL3V0aWxzJztcblxuaW1wb3J0IHJlbmRlckNTUyBmcm9tICcuLi9yZW5kZXIvY3NzJztcbmltcG9ydCByZW5kZXJTVkcgZnJvbSAnLi4vcmVuZGVyL3N2Zyc7XG5pbXBvcnQgcmVuZGVyU1ZHUGF0aCBmcm9tICcuLi9yZW5kZXIvc3ZnLXBhdGgnO1xuXG5jb25zdCBTQVZFX1BST1AgPSAnX19wbV9hY3Rvcl8nO1xuXG5jb25zdCBkZXRlY3RSZW5kZXJlciA9IChlbGVtZW50KSA9PiB7XG4gICAgLy8gSWYgSFRNTEVsZW1lbnQgbG9hZCByZW5kZXJDU1NcbiAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8IGVsZW1lbnQudGFnTmFtZSA9PT0gJ3N2ZycpIHtcbiAgICAgICAgcmV0dXJuIHJlbmRlckNTUztcblxuICAgIC8vIE9yIFNWR1xuICAgIH0gZWxzZSBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIFNWR0VsZW1lbnQpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQudGFnTmFtZSA9PT0gJ3BhdGgnKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVuZGVyU1ZHUGF0aDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiByZW5kZXJTVkc7XG4gICAgICAgIH1cbiAgICB9XG59O1xuIl19