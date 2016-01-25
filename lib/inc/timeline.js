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

var analyze = function (defs) {
    var timeline = [];
    var currentPlayhead = 0;

    defs.forEach(function (def) {
        var defIsObj = def.tween ? true : false;
        var tween = defIsObj ? def.tween : def;

        currentPlayhead += defIsObj && def.offset ? (0, _calc.relativeValue)(currentPlayhead, def.offset) : 0;

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmMvdGltZWxpbmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBNEN3Qjs7Ozs7Ozs7Ozs7Ozs7QUF2Q3hCLElBQU0sVUFBVSxVQUFDLElBQUQsRUFBVTtBQUN0QixRQUFNLFdBQVcsRUFBWCxDQURnQjtBQUV0QixRQUFJLGtCQUFrQixDQUFsQixDQUZrQjs7QUFJdEIsU0FBSyxPQUFMLENBQWEsVUFBQyxHQUFELEVBQVM7QUFDbEIsWUFBTSxXQUFXLElBQUksS0FBSixHQUFZLElBQVosR0FBbUIsS0FBbkIsQ0FEQztBQUVsQixZQUFNLFFBQVEsV0FBYSxJQUFJLEtBQUosR0FBWSxHQUF6QixDQUZJOztBQUlsQiwyQkFBb0IsUUFBQyxJQUFZLElBQUksTUFBSixHQUM3QixVQVpILGNBWUcsQ0FBYyxlQUFkLEVBQStCLElBQUksTUFBSixDQURmLEdBQzZCLENBRDdCLENBSkY7O0FBT2xCLFlBQUksV0FBVyxDQUFYLENBUGM7QUFRbEIsbUJBZEMsS0FjRCxDQUFLLE1BQU0sTUFBTixFQUFjLFVBQUMsS0FBRDttQkFBVyxXQUFXLEtBQUssR0FBTCxDQUFTLFFBQVQsRUFBbUIsTUFBTSxRQUFOLENBQTlCO1NBQVgsQ0FBbkIsQ0FSa0I7O0FBVWxCLGlCQUFTLElBQVQsQ0FBYztBQUNWLGtCQUFNLGVBQU47QUFDQSxzQkFBVSxRQUFWO0FBQ0Esa0JBQU0sTUFBTSxRQUFOO1NBSFYsRUFWa0I7O0FBZ0JsQiwyQkFBbUIsTUFBTSxRQUFOLENBaEJEO0tBQVQsQ0FBYixDQUpzQjs7QUF1QnRCLFdBQU8sRUFBRSxXQUFXLGVBQVgsRUFBNEIsa0JBQTlCLEVBQVAsQ0F2QnNCO0NBQVY7O0FBMEJoQixJQUFNLFlBQVksZ0JBQXlDO1FBQXRDLHlCQUFzQztRQUE1QixxQ0FBNEI7UUFBWixtQkFBWTs7QUFDdkQsUUFBTSxXQUFXLE1BQU0sQ0FBTixDQURzQzs7QUFHdkQsU0FBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksY0FBSixFQUFvQixHQUFwQyxFQUF5QztBQUNyQyxZQUFNLFFBQVEsU0FBUyxDQUFULENBQVIsQ0FEK0I7QUFFckMsWUFBTSxZQUFZLFdBQVcsTUFBTSxJQUFOLENBRlE7O0FBSXJDLFlBQUksWUFBWSxDQUFaLElBQWlCLFlBQVksTUFBTSxRQUFOLEVBQWdCO0FBQzdDLGtCQUFNLElBQU4sQ0FBVyxTQUFYLEVBRDZDO1NBQWpEO0tBSko7Q0FIYzs7QUFhSCxTQUFTLFFBQVQsQ0FBa0IsR0FBbEIsRUFBbUM7UUFBWiw4REFBUSxrQkFBSTs7bUJBQ2QsUUFBUSxHQUFSLEVBRGM7O1FBQ3RDLCtCQURzQztRQUMzQiw2QkFEMkI7O0FBRzlDLFFBQU0sNkJBQ0M7QUFDSCxrQkFBVSxTQUFWO0FBQ0EsZ0JBQVE7QUFDSixlQUFHLENBQUg7U0FESjtBQUdBLGtCQUFVLFFBQVY7QUFDQSx3QkFBZ0IsU0FBUyxNQUFUO0FBQ2hCLGtCQUFVLFNBQVY7TUFSRSxDQUh3Qzs7QUFjOUMsV0FBTyxvQkFBVSxhQUFWLENBQVAsQ0FkOEM7Q0FBbkMiLCJmaWxlIjoidGltZWxpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHdlZW4gZnJvbSAnLi4vYWN0aW9ucy9Ud2Vlbic7XG5pbXBvcnQgeyBsaW5lYXIgfSBmcm9tICcuLi9hY3Rpb25zL2Vhc2luZy9wcmVzZXQtZWFzaW5nJztcbmltcG9ydCB7IHJlbGF0aXZlVmFsdWUgfSBmcm9tICcuL2NhbGMnO1xuaW1wb3J0IHsgZWFjaCB9IGZyb20gJy4vdXRpbHMnO1xuXG5jb25zdCBhbmFseXplID0gKGRlZnMpID0+IHtcbiAgICBjb25zdCB0aW1lbGluZSA9IFtdO1xuICAgIGxldCBjdXJyZW50UGxheWhlYWQgPSAwO1xuXG4gICAgZGVmcy5mb3JFYWNoKChkZWYpID0+IHtcbiAgICAgICAgY29uc3QgZGVmSXNPYmogPSBkZWYudHdlZW4gPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIGNvbnN0IHR3ZWVuID0gKGRlZklzT2JqKSA/IGRlZi50d2VlbiA6IGRlZjtcblxuICAgICAgICBjdXJyZW50UGxheWhlYWQgKz0gKChkZWZJc09iaiAmJiBkZWYub2Zmc2V0KSA/XG4gICAgICAgICAgICByZWxhdGl2ZVZhbHVlKGN1cnJlbnRQbGF5aGVhZCwgZGVmLm9mZnNldCkgOiAwKTtcblxuICAgICAgICBsZXQgZHVyYXRpb24gPSAwO1xuICAgICAgICBlYWNoKHR3ZWVuLnZhbHVlcywgKHZhbHVlKSA9PiBkdXJhdGlvbiA9IE1hdGgubWF4KGR1cmF0aW9uLCB2YWx1ZS5kdXJhdGlvbikpO1xuXG4gICAgICAgIHRpbWVsaW5lLnB1c2goe1xuICAgICAgICAgICAgZnJvbTogY3VycmVudFBsYXloZWFkLFxuICAgICAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgICAgICAgZmlyZTogdHdlZW4uc2Vla1RpbWUsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGN1cnJlbnRQbGF5aGVhZCArPSB0d2Vlbi5kdXJhdGlvbjtcbiAgICB9KTtcblxuICAgIHJldHVybiB7IHRvdGFsVGltZTogY3VycmVudFBsYXloZWFkLCB0aW1lbGluZSB9O1xufVxuXG5jb25zdCBzZXRUd2VlbnMgPSAoeyB0aW1lbGluZSwgdGltZWxpbmVMZW5ndGgsIHN0YXRlIH0pID0+IHtcbiAgICBjb25zdCBwbGF5aGVhZCA9IHN0YXRlLnA7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRpbWVsaW5lTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgdHdlZW4gPSB0aW1lbGluZVtpXTtcbiAgICAgICAgY29uc3QgdHdlZW5UaW1lID0gcGxheWhlYWQgLSB0d2Vlbi5mcm9tO1xuXG4gICAgICAgIGlmICh0d2VlblRpbWUgPiAwICYmIHR3ZWVuVGltZSA8IHR3ZWVuLmR1cmF0aW9uKSB7XG4gICAgICAgICAgICB0d2Vlbi5maXJlKHR3ZWVuVGltZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRpbWVsaW5lKGRlZiwgcHJvcHMgPSB7fSkge1xuICAgIGNvbnN0IHsgdG90YWxUaW1lLCB0aW1lbGluZSB9ID0gYW5hbHl6ZShkZWYpO1xuXG4gICAgY29uc3QgdGltZWxpbmVQcm9wcyA9IHtcbiAgICAgICAgLi4ucHJvcHMsXG4gICAgICAgIGR1cmF0aW9uOiB0b3RhbFRpbWUsXG4gICAgICAgIHZhbHVlczoge1xuICAgICAgICAgICAgcDogMVxuICAgICAgICB9LFxuICAgICAgICB0aW1lbGluZTogdGltZWxpbmUsXG4gICAgICAgIHRpbWVsaW5lTGVuZ3RoOiB0aW1lbGluZS5sZW5ndGgsXG4gICAgICAgIG9uUmVuZGVyOiBzZXRUd2VlbnNcbiAgICB9O1xuXG4gICAgcmV0dXJuIG5ldyBUd2Vlbih0aW1lbGluZVByb3BzKTtcbn0iXX0=