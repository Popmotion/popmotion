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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmMvc3RhZ2dlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7a0JBTXdCLE9BQU87Ozs7Ozs7Ozs7Ozs7O0FBRi9CLElBQU0sZ0JBQWdCLEdBQUcsR0FBRyxDQUFDOztBQUVkLFNBQVMsT0FBTyxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFO0FBQ3BELFFBQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7QUFDakMsUUFBTSxlQUFlLEdBQUcsa0JBQU0sS0FBSyxDQUFDLENBQUM7QUFDckMsUUFBTSxRQUFRLEdBQUcsZUFBZSxHQUFHLEtBQUssR0FBRyxLQUFLLENBQUMsUUFBUSxJQUFJLGdCQUFnQixDQUFDO0FBQzlFLFFBQUksU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDOztBQUVuQixRQUFNLFlBQVksR0FBRyxvQkFBVTtBQUMzQixnQkFBUSxFQUFFLFFBQVEsR0FBRyxXQUFXO0FBQ2hDLGNBQU0sRUFBRTtBQUNKLGFBQUMsRUFBRTtBQUNDLG9CQUFJLEVBQUUsQ0FBQztBQUNQLGtCQUFFLEVBQUUsV0FBVyxHQUFHLENBQUM7QUFDbkIscUJBQUssRUFBRSxJQUFJO0FBQ1gsb0JBQUksRUFBRSxlQUFlLEdBQUcsdUJBQU8sTUFBTSxHQUFHLEtBQUssQ0FBQyxJQUFJLElBQUksdUJBQU8sTUFBTTthQUN0RTtTQUNKO0FBQ0QsZ0JBQVEsRUFBRSxVQUFDLEtBQUssRUFBSztBQUNqQixnQkFBTSxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDeEIsZ0JBQUksUUFBUSxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUM7O0FBRTdCLG1CQUFPLFFBQVEsSUFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUU7QUFDOUIsd0JBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7YUFDdkM7O0FBRUQscUJBQVMsR0FBRyxDQUFDLENBQUM7U0FDakI7QUFDRCxrQkFBVSxFQUFFLGVBQWUsR0FBRyxTQUFTLEdBQUcsS0FBSyxDQUFDLFVBQVU7S0FDN0QsQ0FBQyxDQUFDOztBQUVILGdCQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7O0FBRXJCLFdBQU8sWUFBWSxDQUFDO0NBQ3ZCIiwiZmlsZSI6InN0YWdnZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHdlZW4gZnJvbSAnLi4vYWN0aW9ucy9Ud2Vlbic7XG5pbXBvcnQgZWFzaW5nIGZyb20gJy4uL2FjdGlvbnMvZWFzaW5nL3ByZXNldC1lYXNpbmcnO1xuaW1wb3J0IHsgaXNOdW0gfSBmcm9tICcuL3V0aWxzJztcblxuY29uc3QgREVGQVVMVF9JTlRFUlZBTCA9IDEwMDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhZ2dlcihhcnJheSwgY2FsbGJhY2ssIHByb3BzKSB7XG4gICAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gICAgY29uc3QgcHJvcHNJc0ludGVydmFsID0gaXNOdW0ocHJvcHMpO1xuICAgIGNvbnN0IGludGVydmFsID0gcHJvcHNJc0ludGVydmFsID8gcHJvcHMgOiBwcm9wcy5pbnRlcnZhbCB8fCBERUZBVUxUX0lOVEVSVkFMO1xuICAgIGxldCBwcmV2SW5kZXggPSAtMTtcblxuICAgIGNvbnN0IHN0YWdnZXJUd2VlbiA9IG5ldyBUd2Vlbih7XG4gICAgICAgIGR1cmF0aW9uOiBpbnRlcnZhbCAqIGFycmF5TGVuZ3RoLFxuICAgICAgICB2YWx1ZXM6IHtcbiAgICAgICAgICAgIGk6IHtcbiAgICAgICAgICAgICAgICBmcm9tOiAwLFxuICAgICAgICAgICAgICAgIHRvOiBhcnJheUxlbmd0aCAtIDEsXG4gICAgICAgICAgICAgICAgcm91bmQ6IHRydWUsXG4gICAgICAgICAgICAgICAgZWFzZTogcHJvcHNJc0ludGVydmFsID8gZWFzaW5nLmxpbmVhciA6IHByb3BzLmVhc2UgfHwgZWFzaW5nLmxpbmVhclxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvblJlbmRlcjogKHR3ZWVuKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpID0gdHdlZW4uc3RhdGUuaTtcbiAgICAgICAgICAgIGxldCBnYXBJbmRleCA9IHByZXZJbmRleCArIDE7XG5cbiAgICAgICAgICAgIGZvciAoOyBnYXBJbmRleCA8PSBpOyBnYXBJbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soYXJyYXlbZ2FwSW5kZXhdLCBnYXBJbmRleCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHByZXZJbmRleCA9IGk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ29tcGxldGU6IHByb3BzSXNJbnRlcnZhbCA/IHVuZGVmaW5lZCA6IHByb3BzLm9uQ29tcGxldGVcbiAgICB9KTtcblxuICAgIHN0YWdnZXJUd2Vlbi5zdGFydCgpO1xuXG4gICAgcmV0dXJuIHN0YWdnZXJUd2Vlbjtcbn0iXX0=