'use strict';

exports.__esModule = true;

var _adapter = require('../adapter/adapter');

var _adapter2 = _interopRequireDefault(_adapter);

var _cssAdapter = require('../adapter/css-adapter');

var _cssAdapter2 = _interopRequireDefault(_cssAdapter);

var _svgAdapter = require('../adapter/svg-adapter');

var _svgAdapter2 = _interopRequireDefault(_svgAdapter);

var _svgPathAdapter = require('../adapter/svg-path-adapter');

var _svgPathAdapter2 = _interopRequireDefault(_svgPathAdapter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SAVE_PROP = '__pm_adapter';

exports.default = function (element) {
    // Return bound adapter if present
    if (element[SAVE_PROP]) {
        return element[SAVE_PROP];

        // Or detect and bind adapter
    } else {
            var detectedAdapter = _adapter2.default;

            // If HTMLElement load CSS
            if (element instanceof HTMLElement || element.tagName === 'svg') {
                detectedAdapter = _cssAdapter2.default;

                // Or SVG
            } else if (element instanceof SVGElement) {
                    if (element.tagName === 'path') {
                        detectedAdapter = _svgPathAdapter2.default;
                    } else {
                        detectedAdapter = _svgAdapter2.default;
                    }
                }

            // Bind adapter to element
            Object.defineProperty(element, SAVE_PROP, {
                enumerable: false,
                value: detectedAdapter
            });

            return detectedAdapter(element);
        }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmMvYmluZC1hZGFwdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQSxJQUFNLFNBQVMsR0FBRyxjQUFjLENBQUM7O2tCQUVsQixVQUFDLE9BQU8sRUFBSzs7QUFFeEIsUUFBSSxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUU7QUFDcEIsZUFBTyxPQUFPLENBQUMsU0FBUyxDQUFDOzs7QUFBQyxLQUc3QixNQUFNO0FBQ0gsZ0JBQUksZUFBZSxvQkFBVTs7O0FBQUMsQUFHOUIsZ0JBQUksT0FBTyxZQUFZLFdBQVcsSUFBSSxPQUFPLENBQUMsT0FBTyxLQUFLLEtBQUssRUFBRTtBQUM3RCwrQkFBZSx1QkFBYTs7O0FBQUMsYUFHaEMsTUFBTSxJQUFJLE9BQU8sWUFBWSxVQUFVLEVBQUU7QUFDdEMsd0JBQUksT0FBTyxDQUFDLE9BQU8sS0FBSyxNQUFNLEVBQUU7QUFDNUIsdUNBQWUsMkJBQWlCLENBQUM7cUJBQ3BDLE1BQU07QUFDSCx1Q0FBZSx1QkFBYSxDQUFDO3FCQUNoQztpQkFDSjs7O0FBQUEsQUFHRCxrQkFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFO0FBQ3RDLDBCQUFVLEVBQUUsS0FBSztBQUNqQixxQkFBSyxFQUFFLGVBQWU7YUFDekIsQ0FBQyxDQUFDOztBQUVILG1CQUFPLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNuQztDQUNKIiwiZmlsZSI6ImJpbmQtYWRhcHRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhZGFwdGVyIGZyb20gJy4uL2FkYXB0ZXIvYWRhcHRlcic7XG5pbXBvcnQgY3NzQWRhcHRlciBmcm9tICcuLi9hZGFwdGVyL2Nzcy1hZGFwdGVyJztcbmltcG9ydCBzdmdBZGFwdGVyIGZyb20gJy4uL2FkYXB0ZXIvc3ZnLWFkYXB0ZXInO1xuaW1wb3J0IHN2Z1BhdGhBZGFwdGVyIGZyb20gJy4uL2FkYXB0ZXIvc3ZnLXBhdGgtYWRhcHRlcic7XG5cbmNvbnN0IFNBVkVfUFJPUCA9ICdfX3BtX2FkYXB0ZXInO1xuXG5leHBvcnQgZGVmYXVsdCAoZWxlbWVudCkgPT4ge1xuICAgIC8vIFJldHVybiBib3VuZCBhZGFwdGVyIGlmIHByZXNlbnRcbiAgICBpZiAoZWxlbWVudFtTQVZFX1BST1BdKSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50W1NBVkVfUFJPUF07XG5cbiAgICAvLyBPciBkZXRlY3QgYW5kIGJpbmQgYWRhcHRlclxuICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBkZXRlY3RlZEFkYXB0ZXIgPSBhZGFwdGVyO1xuXG4gICAgICAgIC8vIElmIEhUTUxFbGVtZW50IGxvYWQgQ1NTXG4gICAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgZWxlbWVudC50YWdOYW1lID09PSAnc3ZnJykge1xuICAgICAgICAgICAgZGV0ZWN0ZWRBZGFwdGVyID0gY3NzQWRhcHRlcjtcblxuICAgICAgICAvLyBPciBTVkdcbiAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50IGluc3RhbmNlb2YgU1ZHRWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQudGFnTmFtZSA9PT0gJ3BhdGgnKSB7XG4gICAgICAgICAgICAgICAgZGV0ZWN0ZWRBZGFwdGVyID0gc3ZnUGF0aEFkYXB0ZXI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRldGVjdGVkQWRhcHRlciA9IHN2Z0FkYXB0ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCaW5kIGFkYXB0ZXIgdG8gZWxlbWVudFxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgU0FWRV9QUk9QLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHZhbHVlOiBkZXRlY3RlZEFkYXB0ZXJcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGRldGVjdGVkQWRhcHRlcihlbGVtZW50KTtcbiAgICB9XG59O1xuIl19