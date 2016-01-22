'use strict';

exports.__esModule = true;
exports.default = stagger;

var _tween = require('../actions/tween');

var _tween2 = _interopRequireDefault(_tween);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_INTERVAL = 100;
var DEFAULT_EASING = Easing.Linear;

function stagger(array, props, callback) {
    var arrayLength = array.length;
    var propsIsInterval = (0, _utils.isNum)(props);
    var interval = propsIsInterval ? props : props.interval || DEFAULT_INTERVAL;
    var prevIndex = -1;

    var staggerTween = new _tween2.default({
        duration: interval * arrayLength,
        values: {
            i: {
                from: 0,
                to: numMembers - 1,
                round: true,
                ease: propsIsInterval ? DEFAULT_EASING : props.ease || DEFAULT_EASING
            }
        },
        onRender: function (_ref) {
            var i = _ref.i;

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmMvc3RhZ2dlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7a0JBTXdCOzs7Ozs7Ozs7O0FBSHhCLElBQU0sbUJBQW1CLEdBQW5CO0FBQ04sSUFBTSxpQkFBaUIsT0FBTyxNQUFQOztBQUVSLFNBQVMsT0FBVCxDQUFpQixLQUFqQixFQUF3QixLQUF4QixFQUErQixRQUEvQixFQUF5QztBQUNwRCxRQUFNLGNBQWMsTUFBTSxNQUFOLENBRGdDO0FBRXBELFFBQU0sa0JBQWtCLFdBUG5CLE1BT21CLENBQU0sS0FBTixDQUFsQixDQUY4QztBQUdwRCxRQUFNLFdBQVcsa0JBQWtCLEtBQWxCLEdBQTBCLE1BQU0sUUFBTixJQUFrQixnQkFBbEIsQ0FIUztBQUlwRCxRQUFJLFlBQVksQ0FBQyxDQUFELENBSm9DOztBQU1wRCxRQUFNLGVBQWUsb0JBQVU7QUFDM0Isa0JBQVUsV0FBVyxXQUFYO0FBQ1YsZ0JBQVE7QUFDSixlQUFHO0FBQ0Msc0JBQU0sQ0FBTjtBQUNBLG9CQUFJLGFBQWEsQ0FBYjtBQUNKLHVCQUFPLElBQVA7QUFDQSxzQkFBTSxrQkFBa0IsY0FBbEIsR0FBbUMsTUFBTSxJQUFOLElBQWMsY0FBZDthQUo3QztTQURKO0FBUUEsa0JBQVUsZ0JBQVc7Z0JBQVIsV0FBUTs7QUFDakIsZ0JBQUksV0FBVyxZQUFZLENBQVosQ0FERTs7QUFHakIsbUJBQU8sWUFBWSxDQUFaLEVBQWUsVUFBdEIsRUFBa0M7QUFDOUIseUJBQVMsTUFBTSxRQUFOLENBQVQsRUFBMEIsUUFBMUIsRUFEOEI7YUFBbEM7O0FBSUEsd0JBQVksQ0FBWixDQVBpQjtTQUFYO0FBU1Ysb0JBQVksa0JBQWtCLFNBQWxCLEdBQThCLE1BQU0sVUFBTjtLQW5CekIsQ0FBZixDQU44Qzs7QUE0QnBELGlCQUFhLEtBQWIsR0E1Qm9EOztBQThCcEQsV0FBTyxZQUFQLENBOUJvRDtDQUF6QyIsImZpbGUiOiJzdGFnZ2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFR3ZWVuIGZyb20gJy4uL2FjdGlvbnMvdHdlZW4nO1xuaW1wb3J0IHsgaXNOdW0gfSBmcm9tICcuL3V0aWxzJztcblxuY29uc3QgREVGQVVMVF9JTlRFUlZBTCA9IDEwMDtcbmNvbnN0IERFRkFVTFRfRUFTSU5HID0gRWFzaW5nLkxpbmVhcjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhZ2dlcihhcnJheSwgcHJvcHMsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gICAgY29uc3QgcHJvcHNJc0ludGVydmFsID0gaXNOdW0ocHJvcHMpO1xuICAgIGNvbnN0IGludGVydmFsID0gcHJvcHNJc0ludGVydmFsID8gcHJvcHMgOiBwcm9wcy5pbnRlcnZhbCB8fCBERUZBVUxUX0lOVEVSVkFMO1xuICAgIGxldCBwcmV2SW5kZXggPSAtMTtcblxuICAgIGNvbnN0IHN0YWdnZXJUd2VlbiA9IG5ldyBUd2Vlbih7XG4gICAgICAgIGR1cmF0aW9uOiBpbnRlcnZhbCAqIGFycmF5TGVuZ3RoLFxuICAgICAgICB2YWx1ZXM6IHtcbiAgICAgICAgICAgIGk6IHtcbiAgICAgICAgICAgICAgICBmcm9tOiAwLFxuICAgICAgICAgICAgICAgIHRvOiBudW1NZW1iZXJzIC0gMSxcbiAgICAgICAgICAgICAgICByb3VuZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBlYXNlOiBwcm9wc0lzSW50ZXJ2YWwgPyBERUZBVUxUX0VBU0lORyA6IHByb3BzLmVhc2UgfHwgREVGQVVMVF9FQVNJTkdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb25SZW5kZXI6ICh7IGkgfSkgPT4ge1xuICAgICAgICAgICAgbGV0IGdhcEluZGV4ID0gcHJldkluZGV4ICsgMTtcblxuICAgICAgICAgICAgZm9yICg7IGdhcEluZGV4IDw9IGk7IGdhcEluZGV4KyspIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhhcnJheVtnYXBJbmRleF0sIGdhcEluZGV4KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcHJldkluZGV4ID0gaTtcbiAgICAgICAgfSxcbiAgICAgICAgb25Db21wbGV0ZTogcHJvcHNJc0ludGVydmFsID8gdW5kZWZpbmVkIDogcHJvcHMub25Db21wbGV0ZVxuICAgIH0pO1xuXG4gICAgc3RhZ2dlclR3ZWVuLnN0YXJ0KCk7XG5cbiAgICByZXR1cm4gc3RhZ2dlclR3ZWVuO1xufSJdfQ==