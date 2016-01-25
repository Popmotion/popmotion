'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.__esModule = true;
exports.default = timeline;

var _Tween = require('../actions/Tween');

var _Tween2 = _interopRequireDefault(_Tween);

var _presetEasing = require('../actions/easing/preset-easing');

var _calc = require('./calc');

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
    @param [array]
        Sequential array of tweens, each item can be a tween or definition obj:

        [
            new Tween(),
            stagger(),
            timeline(),
            {
                tween: new Tween(),
                at: 100,
                offset: "+=100"
            }
        ]
*/
var analyze = function (defs) {
    var timeline = [];
    var currentPlayhead = 0;

    defs.forEach(function (def) {
        var defIsObj = def.tween ? true : false;
        var tween = defIsObj ? def.tween : def;

        currentPlayhead += defIsObj && def.offset ? def.at || (0, _calc.relativeValue)(currentPlayhead, def.offset) : 0;

        var duration = 0;
        (0, _utils.each)(tween.values, function (value) {
            return duration = Math.max(duration, value.duration);
        });

        timeline.push({
            from: currentPlayhead,
            duration: duration,
            fire: tween.seekTime
        });

        currentPlayhead += tween.duration;
    });

    return { totalTime: currentPlayhead, timeline: timeline };
};

var setTweens = function (_ref) {
    var timeline = _ref.timeline;
    var timelineLength = _ref.timelineLength;
    var state = _ref.state;

    var playhead = state.p;

    for (var i = 0; i < timelineLength; i++) {
        var tween = timeline[i];
        var tweenTime = playhead - tween.from;

        if (tweenTime > 0 && tweenTime < tween.duration) {
            tween.fire(tweenTime);
        }
    }
};

function timeline(def) {
    var props = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var _analyze = analyze(def);

    var totalTime = _analyze.totalTime;
    var timeline = _analyze.timeline;

    var timelineProps = _extends({}, props, {
        duration: totalTime,
        values: {
            p: 1
        },
        timeline: timeline,
        timelineLength: timeline.length,
        onRender: setTweens
    });

    return new _Tween2.default(timelineProps);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmMvdGltZWxpbmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBMkR3QixRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXZDaEMsSUFBTSxPQUFPLEdBQUcsVUFBQyxJQUFJLEVBQUs7QUFDdEIsUUFBTSxRQUFRLEdBQUcsRUFBRSxDQUFDO0FBQ3BCLFFBQUksZUFBZSxHQUFHLENBQUMsQ0FBQzs7QUFFeEIsUUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQUcsRUFBSztBQUNsQixZQUFNLFFBQVEsR0FBRyxHQUFHLENBQUMsS0FBSyxHQUFHLElBQUksR0FBRyxLQUFLLENBQUM7QUFDMUMsWUFBTSxLQUFLLEdBQUcsQUFBQyxRQUFRLEdBQUksR0FBRyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7O0FBRTNDLHVCQUFlLElBQUssQUFBQyxRQUFRLElBQUksR0FBRyxDQUFDLE1BQU0sR0FDdkMsR0FBRyxDQUFDLEVBQUUsSUFBSSx5QkFBYyxlQUFlLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQUFBQyxDQUFDOztBQUU5RCxZQUFJLFFBQVEsR0FBRyxDQUFDLENBQUM7QUFDakIseUJBQUssS0FBSyxDQUFDLE1BQU0sRUFBRSxVQUFDLEtBQUs7bUJBQUssUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUM7U0FBQSxDQUFDLENBQUM7O0FBRTdFLGdCQUFRLENBQUMsSUFBSSxDQUFDO0FBQ1YsZ0JBQUksRUFBRSxlQUFlO0FBQ3JCLG9CQUFRLEVBQUUsUUFBUTtBQUNsQixnQkFBSSxFQUFFLEtBQUssQ0FBQyxRQUFRO1NBQ3ZCLENBQUMsQ0FBQzs7QUFFSCx1QkFBZSxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUM7S0FDckMsQ0FBQyxDQUFDOztBQUVILFdBQU8sRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBUixRQUFRLEVBQUUsQ0FBQztDQUNuRCxDQUFBOztBQUVELElBQU0sU0FBUyxHQUFHLGdCQUF5QztRQUF0QyxRQUFRLFFBQVIsUUFBUTtRQUFFLGNBQWMsUUFBZCxjQUFjO1FBQUUsS0FBSyxRQUFMLEtBQUs7O0FBQ2hELFFBQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7O0FBRXpCLFNBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxjQUFjLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDckMsWUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzFCLFlBQU0sU0FBUyxHQUFHLFFBQVEsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDOztBQUV4QyxZQUFJLFNBQVMsR0FBRyxDQUFDLElBQUksU0FBUyxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUU7QUFDN0MsaUJBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDekI7S0FDSjtDQUNKLENBQUE7O0FBRWMsU0FBUyxRQUFRLENBQUMsR0FBRyxFQUFjO1FBQVosS0FBSyx5REFBRyxFQUFFOzttQkFDWixPQUFPLENBQUMsR0FBRyxDQUFDOztRQUFwQyxTQUFTLFlBQVQsU0FBUztRQUFFLFFBQVEsWUFBUixRQUFROztBQUUzQixRQUFNLGFBQWEsZ0JBQ1osS0FBSztBQUNSLGdCQUFRLEVBQUUsU0FBUztBQUNuQixjQUFNLEVBQUU7QUFDSixhQUFDLEVBQUUsQ0FBQztTQUNQO0FBQ0QsZ0JBQVEsRUFBRSxRQUFRO0FBQ2xCLHNCQUFjLEVBQUUsUUFBUSxDQUFDLE1BQU07QUFDL0IsZ0JBQVEsRUFBRSxTQUFTO01BQ3RCLENBQUM7O0FBRUYsV0FBTyxvQkFBVSxhQUFhLENBQUMsQ0FBQztDQUNuQyIsImZpbGUiOiJ0aW1lbGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUd2VlbiBmcm9tICcuLi9hY3Rpb25zL1R3ZWVuJztcbmltcG9ydCB7IGxpbmVhciB9IGZyb20gJy4uL2FjdGlvbnMvZWFzaW5nL3ByZXNldC1lYXNpbmcnO1xuaW1wb3J0IHsgcmVsYXRpdmVWYWx1ZSB9IGZyb20gJy4vY2FsYyc7XG5pbXBvcnQgeyBlYWNoIH0gZnJvbSAnLi91dGlscyc7XG5cbi8qXG4gICAgQHBhcmFtIFthcnJheV1cbiAgICAgICAgU2VxdWVudGlhbCBhcnJheSBvZiB0d2VlbnMsIGVhY2ggaXRlbSBjYW4gYmUgYSB0d2VlbiBvciBkZWZpbml0aW9uIG9iajpcblxuICAgICAgICBbXG4gICAgICAgICAgICBuZXcgVHdlZW4oKSxcbiAgICAgICAgICAgIHN0YWdnZXIoKSxcbiAgICAgICAgICAgIHRpbWVsaW5lKCksXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHdlZW46IG5ldyBUd2VlbigpLFxuICAgICAgICAgICAgICAgIGF0OiAxMDAsXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiBcIis9MTAwXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuKi9cbmNvbnN0IGFuYWx5emUgPSAoZGVmcykgPT4ge1xuICAgIGNvbnN0IHRpbWVsaW5lID0gW107XG4gICAgbGV0IGN1cnJlbnRQbGF5aGVhZCA9IDA7XG5cbiAgICBkZWZzLmZvckVhY2goKGRlZikgPT4ge1xuICAgICAgICBjb25zdCBkZWZJc09iaiA9IGRlZi50d2VlbiA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgY29uc3QgdHdlZW4gPSAoZGVmSXNPYmopID8gZGVmLnR3ZWVuIDogZGVmO1xuXG4gICAgICAgIGN1cnJlbnRQbGF5aGVhZCArPSAoKGRlZklzT2JqICYmIGRlZi5vZmZzZXQpID9cbiAgICAgICAgICAgIGRlZi5hdCB8fCByZWxhdGl2ZVZhbHVlKGN1cnJlbnRQbGF5aGVhZCwgZGVmLm9mZnNldCkgOiAwKTtcblxuICAgICAgICBsZXQgZHVyYXRpb24gPSAwO1xuICAgICAgICBlYWNoKHR3ZWVuLnZhbHVlcywgKHZhbHVlKSA9PiBkdXJhdGlvbiA9IE1hdGgubWF4KGR1cmF0aW9uLCB2YWx1ZS5kdXJhdGlvbikpO1xuXG4gICAgICAgIHRpbWVsaW5lLnB1c2goe1xuICAgICAgICAgICAgZnJvbTogY3VycmVudFBsYXloZWFkLFxuICAgICAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgICAgICAgZmlyZTogdHdlZW4uc2Vla1RpbWUsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGN1cnJlbnRQbGF5aGVhZCArPSB0d2Vlbi5kdXJhdGlvbjtcbiAgICB9KTtcblxuICAgIHJldHVybiB7IHRvdGFsVGltZTogY3VycmVudFBsYXloZWFkLCB0aW1lbGluZSB9O1xufVxuXG5jb25zdCBzZXRUd2VlbnMgPSAoeyB0aW1lbGluZSwgdGltZWxpbmVMZW5ndGgsIHN0YXRlIH0pID0+IHtcbiAgICBjb25zdCBwbGF5aGVhZCA9IHN0YXRlLnA7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRpbWVsaW5lTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgdHdlZW4gPSB0aW1lbGluZVtpXTtcbiAgICAgICAgY29uc3QgdHdlZW5UaW1lID0gcGxheWhlYWQgLSB0d2Vlbi5mcm9tO1xuXG4gICAgICAgIGlmICh0d2VlblRpbWUgPiAwICYmIHR3ZWVuVGltZSA8IHR3ZWVuLmR1cmF0aW9uKSB7XG4gICAgICAgICAgICB0d2Vlbi5maXJlKHR3ZWVuVGltZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRpbWVsaW5lKGRlZiwgcHJvcHMgPSB7fSkge1xuICAgIGNvbnN0IHsgdG90YWxUaW1lLCB0aW1lbGluZSB9ID0gYW5hbHl6ZShkZWYpO1xuXG4gICAgY29uc3QgdGltZWxpbmVQcm9wcyA9IHtcbiAgICAgICAgLi4ucHJvcHMsXG4gICAgICAgIGR1cmF0aW9uOiB0b3RhbFRpbWUsXG4gICAgICAgIHZhbHVlczoge1xuICAgICAgICAgICAgcDogMVxuICAgICAgICB9LFxuICAgICAgICB0aW1lbGluZTogdGltZWxpbmUsXG4gICAgICAgIHRpbWVsaW5lTGVuZ3RoOiB0aW1lbGluZS5sZW5ndGgsXG4gICAgICAgIG9uUmVuZGVyOiBzZXRUd2VlbnNcbiAgICB9O1xuXG4gICAgcmV0dXJuIG5ldyBUd2Vlbih0aW1lbGluZVByb3BzKTtcbn0iXX0=