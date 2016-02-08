'use strict';

exports.__esModule = true;
exports.default = selectActor;

var _Actor = require('../actor/Actor');

var _Actor2 = _interopRequireDefault(_Actor);

var _utils = require('../inc/utils');

var _cssAdapter = require('../adapter/css-adapter');

var _cssAdapter2 = _interopRequireDefault(_cssAdapter);

var _svgAdapter = require('../adapter/svg-adapter');

var _svgAdapter2 = _interopRequireDefault(_svgAdapter);

var _svgPathAdapter = require('../adapter/svg-path-adapter');

var _svgPathAdapter2 = _interopRequireDefault(_svgPathAdapter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SAVE_PROP = '__pm_actor_';

var detectAdapter = function (element) {
    // If HTMLElement load renderCSS
    if (element instanceof HTMLElement || element.tagName === 'svg') {
        return _cssAdapter2.default;

        // Or SVG
    } else if (element instanceof SVGElement) {
            if (element.tagName === 'path') {
                return _svgPathAdapter2.default;
            } else {
                return _svgAdapter2.default;
            }
        }
};

function selectActor(selector) {
    var props = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var elements = (0, _utils.selectDom)(selector);

    var actors = elements.map(function (element) {
        var actor = element[SAVE_PROP];

        if (!actor) {
            props.element = detectAdapter(element);
            actor = element[SAVE_PROP] = new _Actor2.default(props);
        }

        return actor;
    });

    return actors.length > 1 ? actors : actors[0];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmMvc2VsZWN0LWFjdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztrQkF3QndCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBakJ4QixJQUFNLFlBQVksYUFBWjs7QUFFTixJQUFNLGdCQUFnQixVQUFDLE9BQUQsRUFBYTs7QUFFL0IsUUFBSSxtQkFBbUIsV0FBbkIsSUFBa0MsUUFBUSxPQUFSLEtBQW9CLEtBQXBCLEVBQTJCO0FBQzdEOzs7QUFENkQsS0FBakUsTUFJTyxJQUFJLG1CQUFtQixVQUFuQixFQUErQjtBQUN0QyxnQkFBSSxRQUFRLE9BQVIsS0FBb0IsTUFBcEIsRUFBNEI7QUFDNUIsZ0RBRDRCO2FBQWhDLE1BRU87QUFDSCw0Q0FERzthQUZQO1NBREc7Q0FOVzs7QUFlUCxTQUFTLFdBQVQsQ0FBcUIsUUFBckIsRUFBMkM7UUFBWiw4REFBUSxrQkFBSTs7QUFDdEQsUUFBTSxXQUFXLFdBeEJaLFVBd0JZLENBQVUsUUFBVixDQUFYLENBRGdEOztBQUd0RCxRQUFNLFNBQVMsU0FBUyxHQUFULENBQWEsVUFBQyxPQUFELEVBQWE7QUFDckMsWUFBSSxRQUFRLFFBQVEsU0FBUixDQUFSLENBRGlDOztBQUdyQyxZQUFJLENBQUMsS0FBRCxFQUFRO0FBQ1Isa0JBQU0sT0FBTixHQUFnQixjQUFjLE9BQWQsQ0FBaEIsQ0FEUTtBQUVSLG9CQUFRLFFBQVEsU0FBUixJQUFxQixvQkFBVSxLQUFWLENBQXJCLENBRkE7U0FBWjs7QUFLQSxlQUFPLEtBQVAsQ0FScUM7S0FBYixDQUF0QixDQUhnRDs7QUFjdEQsV0FBTyxNQUFDLENBQU8sTUFBUCxHQUFnQixDQUFoQixHQUFxQixNQUF0QixHQUErQixPQUFPLENBQVAsQ0FBL0IsQ0FkK0M7Q0FBM0MiLCJmaWxlIjoic2VsZWN0LWFjdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFjdG9yIGZyb20gJy4uL2FjdG9yL0FjdG9yJztcbmltcG9ydCB7IHNlbGVjdERvbSB9IGZyb20gJy4uL2luYy91dGlscyc7XG5cbmltcG9ydCBjc3NBZGFwdGVyIGZyb20gJy4uL2FkYXB0ZXIvY3NzLWFkYXB0ZXInO1xuaW1wb3J0IHN2Z0FkYXB0ZXIgZnJvbSAnLi4vYWRhcHRlci9zdmctYWRhcHRlcic7XG5pbXBvcnQgc3ZnUGF0aEFkYXB0ZXIgZnJvbSAnLi4vYWRhcHRlci9zdmctcGF0aC1hZGFwdGVyJztcblxuY29uc3QgU0FWRV9QUk9QID0gJ19fcG1fYWN0b3JfJztcblxuY29uc3QgZGV0ZWN0QWRhcHRlciA9IChlbGVtZW50KSA9PiB7XG4gICAgLy8gSWYgSFRNTEVsZW1lbnQgbG9hZCByZW5kZXJDU1NcbiAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8IGVsZW1lbnQudGFnTmFtZSA9PT0gJ3N2ZycpIHtcbiAgICAgICAgcmV0dXJuIGNzc0FkYXB0ZXI7XG5cbiAgICAvLyBPciBTVkdcbiAgICB9IGVsc2UgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBTVkdFbGVtZW50KSB7XG4gICAgICAgIGlmIChlbGVtZW50LnRhZ05hbWUgPT09ICdwYXRoJykge1xuICAgICAgICAgICAgcmV0dXJuIHN2Z1BhdGhBZGFwdGVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHN2Z0FkYXB0ZXI7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZWxlY3RBY3RvcihzZWxlY3RvciwgcHJvcHMgPSB7fSkge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gc2VsZWN0RG9tKHNlbGVjdG9yKTtcblxuICAgIGNvbnN0IGFjdG9ycyA9IGVsZW1lbnRzLm1hcCgoZWxlbWVudCkgPT4ge1xuICAgICAgICBsZXQgYWN0b3IgPSBlbGVtZW50W1NBVkVfUFJPUF07XG5cbiAgICAgICAgaWYgKCFhY3Rvcikge1xuICAgICAgICAgICAgcHJvcHMuZWxlbWVudCA9IGRldGVjdEFkYXB0ZXIoZWxlbWVudCk7XG4gICAgICAgICAgICBhY3RvciA9IGVsZW1lbnRbU0FWRV9QUk9QXSA9IG5ldyBBY3Rvcihwcm9wcyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYWN0b3I7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gKGFjdG9ycy5sZW5ndGggPiAxKSA/IGFjdG9ycyA6IGFjdG9yc1swXTtcbn1cbiJdfQ==