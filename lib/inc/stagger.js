'use strict';

exports.__esModule = true;
exports.default = stagger;

var _Tween = require('../actions/Tween');

var _Tween2 = _interopRequireDefault(_Tween);

var _presetEasing = require('../actions/easing/preset-easing');

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_INTERVAL = 100;

function stagger(array, props, callback) {
    var arrayLength = array.length;
    var propsIsInterval = (0, _utils.isNum)(props);
    var interval = propsIsInterval ? props : props.interval || DEFAULT_INTERVAL;
    var prevIndex = -1;

    var staggerTween = new _Tween2.default({
        duration: interval * arrayLength,
        values: {
            i: {
                from: 0,
                to: numMembers - 1,
                round: true,
                ease: propsIsInterval ? _presetEasing.linear : props.ease || _presetEasing.linear
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmMvc3RhZ2dlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7a0JBTXdCLE9BQU87Ozs7Ozs7Ozs7OztBQUYvQixJQUFNLGdCQUFnQixHQUFHLEdBQUcsQ0FBQzs7QUFFZCxTQUFTLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRTtBQUNwRCxRQUFNLFdBQVcsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO0FBQ2pDLFFBQU0sZUFBZSxHQUFHLGtCQUFNLEtBQUssQ0FBQyxDQUFDO0FBQ3JDLFFBQU0sUUFBUSxHQUFHLGVBQWUsR0FBRyxLQUFLLEdBQUcsS0FBSyxDQUFDLFFBQVEsSUFBSSxnQkFBZ0IsQ0FBQztBQUM5RSxRQUFJLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQzs7QUFFbkIsUUFBTSxZQUFZLEdBQUcsb0JBQVU7QUFDM0IsZ0JBQVEsRUFBRSxRQUFRLEdBQUcsV0FBVztBQUNoQyxjQUFNLEVBQUU7QUFDSixhQUFDLEVBQUU7QUFDQyxvQkFBSSxFQUFFLENBQUM7QUFDUCxrQkFBRSxFQUFFLFVBQVUsR0FBRyxDQUFDO0FBQ2xCLHFCQUFLLEVBQUUsSUFBSTtBQUNYLG9CQUFJLEVBQUUsZUFBZSwwQkFBWSxLQUFLLENBQUMsSUFBSSx3QkFBVTthQUN4RDtTQUNKO0FBQ0QsZ0JBQVEsRUFBRSxnQkFBVztnQkFBUixDQUFDLFFBQUQsQ0FBQzs7QUFDVixnQkFBSSxRQUFRLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQzs7QUFFN0IsbUJBQU8sUUFBUSxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsRUFBRTtBQUM5Qix3QkFBUSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQzthQUN2Qzs7QUFFRCxxQkFBUyxHQUFHLENBQUMsQ0FBQztTQUNqQjtBQUNELGtCQUFVLEVBQUUsZUFBZSxHQUFHLFNBQVMsR0FBRyxLQUFLLENBQUMsVUFBVTtLQUM3RCxDQUFDLENBQUM7O0FBRUgsZ0JBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7QUFFckIsV0FBTyxZQUFZLENBQUM7Q0FDdkIiLCJmaWxlIjoic3RhZ2dlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUd2VlbiBmcm9tICcuLi9hY3Rpb25zL1R3ZWVuJztcbmltcG9ydCB7IGxpbmVhciB9IGZyb20gJy4uL2FjdGlvbnMvZWFzaW5nL3ByZXNldC1lYXNpbmcnO1xuaW1wb3J0IHsgaXNOdW0gfSBmcm9tICcuL3V0aWxzJztcblxuY29uc3QgREVGQVVMVF9JTlRFUlZBTCA9IDEwMDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhZ2dlcihhcnJheSwgcHJvcHMsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gICAgY29uc3QgcHJvcHNJc0ludGVydmFsID0gaXNOdW0ocHJvcHMpO1xuICAgIGNvbnN0IGludGVydmFsID0gcHJvcHNJc0ludGVydmFsID8gcHJvcHMgOiBwcm9wcy5pbnRlcnZhbCB8fCBERUZBVUxUX0lOVEVSVkFMO1xuICAgIGxldCBwcmV2SW5kZXggPSAtMTtcblxuICAgIGNvbnN0IHN0YWdnZXJUd2VlbiA9IG5ldyBUd2Vlbih7XG4gICAgICAgIGR1cmF0aW9uOiBpbnRlcnZhbCAqIGFycmF5TGVuZ3RoLFxuICAgICAgICB2YWx1ZXM6IHtcbiAgICAgICAgICAgIGk6IHtcbiAgICAgICAgICAgICAgICBmcm9tOiAwLFxuICAgICAgICAgICAgICAgIHRvOiBudW1NZW1iZXJzIC0gMSxcbiAgICAgICAgICAgICAgICByb3VuZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBlYXNlOiBwcm9wc0lzSW50ZXJ2YWwgPyBsaW5lYXIgOiBwcm9wcy5lYXNlIHx8IGxpbmVhclxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvblJlbmRlcjogKHsgaSB9KSA9PiB7XG4gICAgICAgICAgICBsZXQgZ2FwSW5kZXggPSBwcmV2SW5kZXggKyAxO1xuXG4gICAgICAgICAgICBmb3IgKDsgZ2FwSW5kZXggPD0gaTsgZ2FwSW5kZXgrKykge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGFycmF5W2dhcEluZGV4XSwgZ2FwSW5kZXgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwcmV2SW5kZXggPSBpO1xuICAgICAgICB9LFxuICAgICAgICBvbkNvbXBsZXRlOiBwcm9wc0lzSW50ZXJ2YWwgPyB1bmRlZmluZWQgOiBwcm9wcy5vbkNvbXBsZXRlXG4gICAgfSk7XG5cbiAgICBzdGFnZ2VyVHdlZW4uc3RhcnQoKTtcblxuICAgIHJldHVybiBzdGFnZ2VyVHdlZW47XG59Il19