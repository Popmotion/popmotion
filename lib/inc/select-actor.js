'use strict';

exports.__esModule = true;
exports.default = selectActor;

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

var createActor = function (element) {
    var actor = element[SAVE_PROP];

    if (!actor) {
        props.element = element;
        props.onRender = detectRenderer(element);
        actor = element[SAVE_PROP] = new _Actor2.default(props);
    }

    return actor;
};

function selectActor(selector, props) {
    var elements = (0, _utils.selectDom)(selector);
    var actors = elements.map(createActor);

    return actors.length > 1 ? actors : actors[0];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmMvc2VsZWN0LWFjdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztrQkFvQ3dCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBN0J4QixJQUFNLFlBQVksYUFBWjs7QUFFTixJQUFNLGlCQUFpQixVQUFDLE9BQUQsRUFBYTs7QUFFaEMsUUFBSSxtQkFBbUIsV0FBbkIsSUFBa0MsUUFBUSxPQUFSLEtBQW9CLEtBQXBCLEVBQTJCO0FBQzdEOzs7QUFENkQsS0FBakUsTUFJTyxJQUFJLG1CQUFtQixVQUFuQixFQUErQjtBQUN0QyxnQkFBSSxRQUFRLE9BQVIsS0FBb0IsTUFBcEIsRUFBNEI7QUFDNUIseUNBRDRCO2FBQWhDLE1BRU87QUFDSCxxQ0FERzthQUZQO1NBREc7Q0FOWTs7QUFldkIsSUFBTSxjQUFjLFVBQUMsT0FBRCxFQUFhO0FBQzdCLFFBQUksUUFBUSxRQUFRLFNBQVIsQ0FBUixDQUR5Qjs7QUFHN0IsUUFBSSxDQUFDLEtBQUQsRUFBUTtBQUNSLGNBQU0sT0FBTixHQUFnQixPQUFoQixDQURRO0FBRVIsY0FBTSxRQUFOLEdBQWlCLGVBQWUsT0FBZixDQUFqQixDQUZRO0FBR1IsZ0JBQVEsUUFBUSxTQUFSLElBQXFCLG9CQUFVLEtBQVYsQ0FBckIsQ0FIQTtLQUFaOztBQU1BLFdBQU8sS0FBUCxDQVQ2QjtDQUFiOztBQVlMLFNBQVMsV0FBVCxDQUFxQixRQUFyQixFQUErQixLQUEvQixFQUFzQztBQUNqRCxRQUFNLFdBQVcsV0FwQ1osVUFvQ1ksQ0FBVSxRQUFWLENBQVgsQ0FEMkM7QUFFakQsUUFBTSxTQUFTLFNBQVMsR0FBVCxDQUFhLFdBQWIsQ0FBVCxDQUYyQzs7QUFJakQsV0FBTyxNQUFDLENBQU8sTUFBUCxHQUFnQixDQUFoQixHQUFxQixNQUF0QixHQUErQixPQUFPLENBQVAsQ0FBL0IsQ0FKMEM7Q0FBdEMiLCJmaWxlIjoic2VsZWN0LWFjdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFjdG9yIGZyb20gJy4uL2FjdG9yL0FjdG9yJztcbmltcG9ydCB7IHNlbGVjdERvbSB9IGZyb20gJy4uL2luYy91dGlscyc7XG5cbmltcG9ydCByZW5kZXJDU1MgZnJvbSAnLi4vcmVuZGVyL2Nzcyc7XG5pbXBvcnQgcmVuZGVyU1ZHIGZyb20gJy4uL3JlbmRlci9zdmcnO1xuaW1wb3J0IHJlbmRlclNWR1BhdGggZnJvbSAnLi4vcmVuZGVyL3N2Zy1wYXRoJztcblxuY29uc3QgU0FWRV9QUk9QID0gJ19fcG1fYWN0b3JfJztcblxuY29uc3QgZGV0ZWN0UmVuZGVyZXIgPSAoZWxlbWVudCkgPT4ge1xuICAgIC8vIElmIEhUTUxFbGVtZW50IGxvYWQgcmVuZGVyQ1NTXG4gICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCBlbGVtZW50LnRhZ05hbWUgPT09ICdzdmcnKSB7XG4gICAgICAgIHJldHVybiByZW5kZXJDU1M7XG5cbiAgICAvLyBPciBTVkdcbiAgICB9IGVsc2UgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBTVkdFbGVtZW50KSB7XG4gICAgICAgIGlmIChlbGVtZW50LnRhZ05hbWUgPT09ICdwYXRoJykge1xuICAgICAgICAgICAgcmV0dXJuIHJlbmRlclNWR1BhdGg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gcmVuZGVyU1ZHO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jb25zdCBjcmVhdGVBY3RvciA9IChlbGVtZW50KSA9PiB7XG4gICAgbGV0IGFjdG9yID0gZWxlbWVudFtTQVZFX1BST1BdO1xuXG4gICAgaWYgKCFhY3Rvcikge1xuICAgICAgICBwcm9wcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgcHJvcHMub25SZW5kZXIgPSBkZXRlY3RSZW5kZXJlcihlbGVtZW50KTtcbiAgICAgICAgYWN0b3IgPSBlbGVtZW50W1NBVkVfUFJPUF0gPSBuZXcgQWN0b3IocHJvcHMpO1xuICAgIH1cblxuICAgIHJldHVybiBhY3Rvcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2VsZWN0QWN0b3Ioc2VsZWN0b3IsIHByb3BzKSB7XG4gICAgY29uc3QgZWxlbWVudHMgPSBzZWxlY3REb20oc2VsZWN0b3IpO1xuICAgIGNvbnN0IGFjdG9ycyA9IGVsZW1lbnRzLm1hcChjcmVhdGVBY3Rvcik7XG5cbiAgICByZXR1cm4gKGFjdG9ycy5sZW5ndGggPiAxKSA/IGFjdG9ycyA6IGFjdG9yc1swXTtcbn1cbiJdfQ==