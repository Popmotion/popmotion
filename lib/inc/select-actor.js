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

function selectActor(selector) {
    var props = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var elements = (0, _utils.selectDom)(selector);

    var actors = elements.map(function (element) {
        var actor = element[SAVE_PROP];

        if (!actor) {
            props.element = element;
            props.onRender = detectRenderer(element);
            actor = element[SAVE_PROP] = new _Actor2.default(props);
        }

        return actor;
    });

    return actors.length > 1 ? actors : actors[0];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmMvc2VsZWN0LWFjdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztrQkF3QndCLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFqQm5DLElBQU0sU0FBUyxHQUFHLGFBQWEsQ0FBQzs7QUFFaEMsSUFBTSxjQUFjLEdBQUcsVUFBQyxPQUFPLEVBQUs7O0FBRWhDLFFBQUksT0FBTyxZQUFZLFdBQVcsSUFBSSxPQUFPLENBQUMsT0FBTyxLQUFLLEtBQUssRUFBRTtBQUM3RDs7O0FBQWlCLEtBR3BCLE1BQU0sSUFBSSxPQUFPLFlBQVksVUFBVSxFQUFFO0FBQ3RDLGdCQUFJLE9BQU8sQ0FBQyxPQUFPLEtBQUssTUFBTSxFQUFFO0FBQzVCLHlDQUFxQjthQUN4QixNQUFNO0FBQ0gscUNBQWlCO2FBQ3BCO1NBQ0o7Q0FDSixDQUFBOztBQUVjLFNBQVMsV0FBVyxDQUFDLFFBQVEsRUFBYztRQUFaLEtBQUsseURBQUcsRUFBRTs7QUFDcEQsUUFBTSxRQUFRLEdBQUcsc0JBQVUsUUFBUSxDQUFDLENBQUM7O0FBRXJDLFFBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBQyxPQUFPLEVBQUs7QUFDckMsWUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDOztBQUUvQixZQUFJLENBQUMsS0FBSyxFQUFFO0FBQ1IsaUJBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBQ3hCLGlCQUFLLENBQUMsUUFBUSxHQUFHLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN6QyxpQkFBSyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxvQkFBVSxLQUFLLENBQUMsQ0FBQztTQUNqRDs7QUFFRCxlQUFPLEtBQUssQ0FBQztLQUNoQixDQUFDLENBQUM7O0FBRUgsV0FBTyxBQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7Q0FDbkQiLCJmaWxlIjoic2VsZWN0LWFjdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFjdG9yIGZyb20gJy4uL2FjdG9yL0FjdG9yJztcbmltcG9ydCB7IHNlbGVjdERvbSB9IGZyb20gJy4uL2luYy91dGlscyc7XG5cbmltcG9ydCByZW5kZXJDU1MgZnJvbSAnLi4vcmVuZGVyL2Nzcyc7XG5pbXBvcnQgcmVuZGVyU1ZHIGZyb20gJy4uL3JlbmRlci9zdmcnO1xuaW1wb3J0IHJlbmRlclNWR1BhdGggZnJvbSAnLi4vcmVuZGVyL3N2Zy1wYXRoJztcblxuY29uc3QgU0FWRV9QUk9QID0gJ19fcG1fYWN0b3JfJztcblxuY29uc3QgZGV0ZWN0UmVuZGVyZXIgPSAoZWxlbWVudCkgPT4ge1xuICAgIC8vIElmIEhUTUxFbGVtZW50IGxvYWQgcmVuZGVyQ1NTXG4gICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCBlbGVtZW50LnRhZ05hbWUgPT09ICdzdmcnKSB7XG4gICAgICAgIHJldHVybiByZW5kZXJDU1M7XG5cbiAgICAvLyBPciBTVkdcbiAgICB9IGVsc2UgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBTVkdFbGVtZW50KSB7XG4gICAgICAgIGlmIChlbGVtZW50LnRhZ05hbWUgPT09ICdwYXRoJykge1xuICAgICAgICAgICAgcmV0dXJuIHJlbmRlclNWR1BhdGg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gcmVuZGVyU1ZHO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZWxlY3RBY3RvcihzZWxlY3RvciwgcHJvcHMgPSB7fSkge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gc2VsZWN0RG9tKHNlbGVjdG9yKTtcblxuICAgIGNvbnN0IGFjdG9ycyA9IGVsZW1lbnRzLm1hcCgoZWxlbWVudCkgPT4ge1xuICAgICAgICBsZXQgYWN0b3IgPSBlbGVtZW50W1NBVkVfUFJPUF07XG5cbiAgICAgICAgaWYgKCFhY3Rvcikge1xuICAgICAgICAgICAgcHJvcHMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgICAgICBwcm9wcy5vblJlbmRlciA9IGRldGVjdFJlbmRlcmVyKGVsZW1lbnQpO1xuICAgICAgICAgICAgYWN0b3IgPSBlbGVtZW50W1NBVkVfUFJPUF0gPSBuZXcgQWN0b3IocHJvcHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFjdG9yO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIChhY3RvcnMubGVuZ3RoID4gMSkgPyBhY3RvcnMgOiBhY3RvcnNbMF07XG59XG4iXX0=