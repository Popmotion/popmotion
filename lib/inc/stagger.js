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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmMvc3RhZ2dlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7a0JBTXdCOzs7Ozs7Ozs7Ozs7QUFGeEIsSUFBTSxtQkFBbUIsR0FBbkI7O0FBRVMsU0FBUyxPQUFULENBQWlCLEtBQWpCLEVBQXdCLEtBQXhCLEVBQStCLFFBQS9CLEVBQXlDO0FBQ3BELFFBQU0sY0FBYyxNQUFNLE1BQU4sQ0FEZ0M7QUFFcEQsUUFBTSxrQkFBa0IsV0FObkIsTUFNbUIsQ0FBTSxLQUFOLENBQWxCLENBRjhDO0FBR3BELFFBQU0sV0FBVyxrQkFBa0IsS0FBbEIsR0FBMEIsTUFBTSxRQUFOLElBQWtCLGdCQUFsQixDQUhTO0FBSXBELFFBQUksWUFBWSxDQUFDLENBQUQsQ0FKb0M7O0FBTXBELFFBQU0sZUFBZSxvQkFBVTtBQUMzQixrQkFBVSxXQUFXLFdBQVg7QUFDVixnQkFBUTtBQUNKLGVBQUc7QUFDQyxzQkFBTSxDQUFOO0FBQ0Esb0JBQUksYUFBYSxDQUFiO0FBQ0osdUJBQU8sSUFBUDtBQUNBLHNCQUFNLGdDQWxCYixNQWtCYSxHQUEyQixNQUFNLElBQU4sa0JBbEJ4QyxNQWtCd0M7YUFKckM7U0FESjtBQVFBLGtCQUFVLGdCQUFXO2dCQUFSLFdBQVE7O0FBQ2pCLGdCQUFJLFdBQVcsWUFBWSxDQUFaLENBREU7O0FBR2pCLG1CQUFPLFlBQVksQ0FBWixFQUFlLFVBQXRCLEVBQWtDO0FBQzlCLHlCQUFTLE1BQU0sUUFBTixDQUFULEVBQTBCLFFBQTFCLEVBRDhCO2FBQWxDOztBQUlBLHdCQUFZLENBQVosQ0FQaUI7U0FBWDtBQVNWLG9CQUFZLGtCQUFrQixTQUFsQixHQUE4QixNQUFNLFVBQU47S0FuQnpCLENBQWYsQ0FOOEM7O0FBNEJwRCxpQkFBYSxLQUFiLEdBNUJvRDs7QUE4QnBELFdBQU8sWUFBUCxDQTlCb0Q7Q0FBekMiLCJmaWxlIjoic3RhZ2dlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUd2VlbiBmcm9tICcuLi9hY3Rpb25zL1R3ZWVuJztcbmltcG9ydCB7IGxpbmVhciB9IGZyb20gJy4uL2FjdGlvbnMvZWFzaW5nL3ByZXNldC1lYXNpbmcnO1xuaW1wb3J0IHsgaXNOdW0gfSBmcm9tICcuL3V0aWxzJztcblxuY29uc3QgREVGQVVMVF9JTlRFUlZBTCA9IDEwMDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhZ2dlcihhcnJheSwgcHJvcHMsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gICAgY29uc3QgcHJvcHNJc0ludGVydmFsID0gaXNOdW0ocHJvcHMpO1xuICAgIGNvbnN0IGludGVydmFsID0gcHJvcHNJc0ludGVydmFsID8gcHJvcHMgOiBwcm9wcy5pbnRlcnZhbCB8fCBERUZBVUxUX0lOVEVSVkFMO1xuICAgIGxldCBwcmV2SW5kZXggPSAtMTtcblxuICAgIGNvbnN0IHN0YWdnZXJUd2VlbiA9IG5ldyBUd2Vlbih7XG4gICAgICAgIGR1cmF0aW9uOiBpbnRlcnZhbCAqIGFycmF5TGVuZ3RoLFxuICAgICAgICB2YWx1ZXM6IHtcbiAgICAgICAgICAgIGk6IHtcbiAgICAgICAgICAgICAgICBmcm9tOiAwLFxuICAgICAgICAgICAgICAgIHRvOiBudW1NZW1iZXJzIC0gMSxcbiAgICAgICAgICAgICAgICByb3VuZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBlYXNlOiBwcm9wc0lzSW50ZXJ2YWwgPyBsaW5lYXIgOiBwcm9wcy5lYXNlIHx8IGxpbmVhclxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvblJlbmRlcjogKHsgaSB9KSA9PiB7XG4gICAgICAgICAgICBsZXQgZ2FwSW5kZXggPSBwcmV2SW5kZXggKyAxO1xuXG4gICAgICAgICAgICBmb3IgKDsgZ2FwSW5kZXggPD0gaTsgZ2FwSW5kZXgrKykge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGFycmF5W2dhcEluZGV4XSwgZ2FwSW5kZXgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwcmV2SW5kZXggPSBpO1xuICAgICAgICB9LFxuICAgICAgICBvbkNvbXBsZXRlOiBwcm9wc0lzSW50ZXJ2YWwgPyB1bmRlZmluZWQgOiBwcm9wcy5vbkNvbXBsZXRlXG4gICAgfSk7XG5cbiAgICBzdGFnZ2VyVHdlZW4uc3RhcnQoKTtcblxuICAgIHJldHVybiBzdGFnZ2VyVHdlZW47XG59Il19