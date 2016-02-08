'use strict';

exports.__esModule = true;
exports.default = stagger;

var _Tween = require('../actions/Tween');

var _Tween2 = _interopRequireDefault(_Tween);

var _presetEasing = require('../actions/easing/preset-easing');

var _presetEasing2 = _interopRequireDefault(_presetEasing);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_INTERVAL = 100;

function stagger(array, callback, props) {
    var arrayLength = array.length;
    var propsIsInterval = (0, _utils.isNum)(props);
    var interval = propsIsInterval ? props : props.interval || DEFAULT_INTERVAL;
    var prevIndex = -1;

    var staggerTween = new _Tween2.default({
        duration: interval * arrayLength,
        values: {
            i: {
                from: 0,
                to: arrayLength - 1,
                round: true,
                ease: propsIsInterval ? _presetEasing2.default.linear : props.ease || _presetEasing2.default.linear
            }
        },
        onRender: function (tween) {
            var i = tween.state.i;
            var gapIndex = prevIndex + 1;

            for (; gapIndex <= i; gapIndex++) {
                callback(array[gapIndex], gapIndex);
            }

            prevIndex = i;
        },
        onComplete: propsIsInterval ? undefined : props.onComplete
    });

    staggerTween.start();

    return staggerTween;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmMvc3RhZ2dlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7a0JBTXdCOzs7Ozs7Ozs7Ozs7OztBQUZ4QixJQUFNLG1CQUFtQixHQUFuQjs7QUFFUyxTQUFTLE9BQVQsQ0FBaUIsS0FBakIsRUFBd0IsUUFBeEIsRUFBa0MsS0FBbEMsRUFBeUM7QUFDcEQsUUFBTSxjQUFjLE1BQU0sTUFBTixDQURnQztBQUVwRCxRQUFNLGtCQUFrQixXQU5uQixNQU1tQixDQUFNLEtBQU4sQ0FBbEIsQ0FGOEM7QUFHcEQsUUFBTSxXQUFXLGtCQUFrQixLQUFsQixHQUEwQixNQUFNLFFBQU4sSUFBa0IsZ0JBQWxCLENBSFM7QUFJcEQsUUFBSSxZQUFZLENBQUMsQ0FBRCxDQUpvQzs7QUFNcEQsUUFBTSxlQUFlLG9CQUFVO0FBQzNCLGtCQUFVLFdBQVcsV0FBWDtBQUNWLGdCQUFRO0FBQ0osZUFBRztBQUNDLHNCQUFNLENBQU47QUFDQSxvQkFBSSxjQUFjLENBQWQ7QUFDSix1QkFBTyxJQUFQO0FBQ0Esc0JBQU0sa0JBQWtCLHVCQUFPLE1BQVAsR0FBZ0IsTUFBTSxJQUFOLElBQWMsdUJBQU8sTUFBUDthQUoxRDtTQURKO0FBUUEsa0JBQVUsVUFBQyxLQUFELEVBQVc7QUFDakIsZ0JBQU0sSUFBSSxNQUFNLEtBQU4sQ0FBWSxDQUFaLENBRE87QUFFakIsZ0JBQUksV0FBVyxZQUFZLENBQVosQ0FGRTs7QUFJakIsbUJBQU8sWUFBWSxDQUFaLEVBQWUsVUFBdEIsRUFBa0M7QUFDOUIseUJBQVMsTUFBTSxRQUFOLENBQVQsRUFBMEIsUUFBMUIsRUFEOEI7YUFBbEM7O0FBSUEsd0JBQVksQ0FBWixDQVJpQjtTQUFYO0FBVVYsb0JBQVksa0JBQWtCLFNBQWxCLEdBQThCLE1BQU0sVUFBTjtLQXBCekIsQ0FBZixDQU44Qzs7QUE2QnBELGlCQUFhLEtBQWIsR0E3Qm9EOztBQStCcEQsV0FBTyxZQUFQLENBL0JvRDtDQUF6QyIsImZpbGUiOiJzdGFnZ2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFR3ZWVuIGZyb20gJy4uL2FjdGlvbnMvVHdlZW4nO1xuaW1wb3J0IGVhc2luZyBmcm9tICcuLi9hY3Rpb25zL2Vhc2luZy9wcmVzZXQtZWFzaW5nJztcbmltcG9ydCB7IGlzTnVtIH0gZnJvbSAnLi91dGlscyc7XG5cbmNvbnN0IERFRkFVTFRfSU5URVJWQUwgPSAxMDA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YWdnZXIoYXJyYXksIGNhbGxiYWNrLCBwcm9wcykge1xuICAgIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICAgIGNvbnN0IHByb3BzSXNJbnRlcnZhbCA9IGlzTnVtKHByb3BzKTtcbiAgICBjb25zdCBpbnRlcnZhbCA9IHByb3BzSXNJbnRlcnZhbCA/IHByb3BzIDogcHJvcHMuaW50ZXJ2YWwgfHwgREVGQVVMVF9JTlRFUlZBTDtcbiAgICBsZXQgcHJldkluZGV4ID0gLTE7XG5cbiAgICBjb25zdCBzdGFnZ2VyVHdlZW4gPSBuZXcgVHdlZW4oe1xuICAgICAgICBkdXJhdGlvbjogaW50ZXJ2YWwgKiBhcnJheUxlbmd0aCxcbiAgICAgICAgdmFsdWVzOiB7XG4gICAgICAgICAgICBpOiB7XG4gICAgICAgICAgICAgICAgZnJvbTogMCxcbiAgICAgICAgICAgICAgICB0bzogYXJyYXlMZW5ndGggLSAxLFxuICAgICAgICAgICAgICAgIHJvdW5kOiB0cnVlLFxuICAgICAgICAgICAgICAgIGVhc2U6IHByb3BzSXNJbnRlcnZhbCA/IGVhc2luZy5saW5lYXIgOiBwcm9wcy5lYXNlIHx8IGVhc2luZy5saW5lYXJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb25SZW5kZXI6ICh0d2VlbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgaSA9IHR3ZWVuLnN0YXRlLmk7XG4gICAgICAgICAgICBsZXQgZ2FwSW5kZXggPSBwcmV2SW5kZXggKyAxO1xuXG4gICAgICAgICAgICBmb3IgKDsgZ2FwSW5kZXggPD0gaTsgZ2FwSW5kZXgrKykge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGFycmF5W2dhcEluZGV4XSwgZ2FwSW5kZXgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwcmV2SW5kZXggPSBpO1xuICAgICAgICB9LFxuICAgICAgICBvbkNvbXBsZXRlOiBwcm9wc0lzSW50ZXJ2YWwgPyB1bmRlZmluZWQgOiBwcm9wcy5vbkNvbXBsZXRlXG4gICAgfSk7XG5cbiAgICBzdGFnZ2VyVHdlZW4uc3RhcnQoKTtcblxuICAgIHJldHVybiBzdGFnZ2VyVHdlZW47XG59Il19