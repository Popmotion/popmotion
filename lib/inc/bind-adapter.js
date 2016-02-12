'use strict';

exports.__esModule = true;

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
            var adapter = undefined;

            // If HTMLElement load CSS
            if (element instanceof HTMLElement || element.tagName === 'svg') {
                adapter = _cssAdapter2.default;

                // Or SVG
            } else if (element instanceof SVGElement) {
                    if (element.tagName === 'path') {
                        adapter = _svgPathAdapter2.default;
                    } else {
                        adapter = _svgAdapter2.default;
                    }
                }

            // Bind adapter to element
            Object.defineProperty(element, SAVE_PROP, {
                enumerable: false,
                value: adapter
            });

            return adapter(element);
        }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmMvYmluZC1hZGFwdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBLElBQU0sWUFBWSxjQUFaOztrQkFFUyxVQUFDLE9BQUQsRUFBYTs7QUFFeEIsUUFBSSxRQUFRLFNBQVIsQ0FBSixFQUF3QjtBQUNwQixlQUFPLFFBQVEsU0FBUixDQUFQOzs7QUFEb0IsS0FBeEIsTUFJTztBQUNILGdCQUFJLG1CQUFKOzs7QUFERyxnQkFJQyxtQkFBbUIsV0FBbkIsSUFBa0MsUUFBUSxPQUFSLEtBQW9CLEtBQXBCLEVBQTJCO0FBQzdEOzs7QUFENkQsYUFBakUsTUFJTyxJQUFJLG1CQUFtQixVQUFuQixFQUErQjtBQUN0Qyx3QkFBSSxRQUFRLE9BQVIsS0FBb0IsTUFBcEIsRUFBNEI7QUFDNUIsMkRBRDRCO3FCQUFoQyxNQUVPO0FBQ0gsdURBREc7cUJBRlA7aUJBREc7OztBQVJKLGtCQWlCSCxDQUFPLGNBQVAsQ0FBc0IsT0FBdEIsRUFBK0IsU0FBL0IsRUFBMEM7QUFDdEMsNEJBQVksS0FBWjtBQUNBLHVCQUFPLE9BQVA7YUFGSixFQWpCRzs7QUFzQkgsbUJBQU8sUUFBUSxPQUFSLENBQVAsQ0F0Qkc7U0FKUDtDQUZXIiwiZmlsZSI6ImJpbmQtYWRhcHRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3NBZGFwdGVyIGZyb20gJy4uL2FkYXB0ZXIvY3NzLWFkYXB0ZXInO1xuaW1wb3J0IHN2Z0FkYXB0ZXIgZnJvbSAnLi4vYWRhcHRlci9zdmctYWRhcHRlcic7XG5pbXBvcnQgc3ZnUGF0aEFkYXB0ZXIgZnJvbSAnLi4vYWRhcHRlci9zdmctcGF0aC1hZGFwdGVyJztcblxuY29uc3QgU0FWRV9QUk9QID0gJ19fcG1fYWRhcHRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IChlbGVtZW50KSA9PiB7XG4gICAgLy8gUmV0dXJuIGJvdW5kIGFkYXB0ZXIgaWYgcHJlc2VudFxuICAgIGlmIChlbGVtZW50W1NBVkVfUFJPUF0pIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRbU0FWRV9QUk9QXTtcblxuICAgIC8vIE9yIGRldGVjdCBhbmQgYmluZCBhZGFwdGVyXG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGFkYXB0ZXI7XG5cbiAgICAgICAgLy8gSWYgSFRNTEVsZW1lbnQgbG9hZCBDU1NcbiAgICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCBlbGVtZW50LnRhZ05hbWUgPT09ICdzdmcnKSB7XG4gICAgICAgICAgICBhZGFwdGVyID0gY3NzQWRhcHRlcjtcblxuICAgICAgICAvLyBPciBTVkdcbiAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50IGluc3RhbmNlb2YgU1ZHRWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQudGFnTmFtZSA9PT0gJ3BhdGgnKSB7XG4gICAgICAgICAgICAgICAgYWRhcHRlciA9IHN2Z1BhdGhBZGFwdGVyO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhZGFwdGVyID0gc3ZnQWRhcHRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJpbmQgYWRhcHRlciB0byBlbGVtZW50XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCBTQVZFX1BST1AsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgdmFsdWU6IGFkYXB0ZXJcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGFkYXB0ZXIoZWxlbWVudCk7XG4gICAgfVxufTtcbiJdfQ==