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
        ease: _presetEasing.linear,
        values: {
            p: 1
        },
        timeline: timeline,
        timelineLength: timeline.length,
        onRender: setTweens
    });

    return new _Tween2.default(timelineProps);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmMvdGltZWxpbmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBMkR3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF2Q3hCLElBQU0sVUFBVSxVQUFDLElBQUQsRUFBVTtBQUN0QixRQUFNLFdBQVcsRUFBWCxDQURnQjtBQUV0QixRQUFJLGtCQUFrQixDQUFsQixDQUZrQjs7QUFJdEIsU0FBSyxPQUFMLENBQWEsVUFBQyxHQUFELEVBQVM7QUFDbEIsWUFBTSxXQUFXLElBQUksS0FBSixHQUFZLElBQVosR0FBbUIsS0FBbkIsQ0FEQztBQUVsQixZQUFNLFFBQVEsV0FBYSxJQUFJLEtBQUosR0FBWSxHQUF6QixDQUZJOztBQUlsQiwyQkFBb0IsUUFBQyxJQUFZLElBQUksTUFBSixHQUM3QixJQUFJLEVBQUosSUFBVSxVQTNCYixjQTJCYSxDQUFjLGVBQWQsRUFBK0IsSUFBSSxNQUFKLENBQXpDLEdBQXVELENBRHZDLENBSkY7O0FBT2xCLFlBQUksV0FBVyxDQUFYLENBUGM7QUFRbEIsbUJBN0JDLEtBNkJELENBQUssTUFBTSxNQUFOLEVBQWMsVUFBQyxLQUFEO21CQUFXLFdBQVcsS0FBSyxHQUFMLENBQVMsUUFBVCxFQUFtQixNQUFNLFFBQU4sQ0FBOUI7U0FBWCxDQUFuQixDQVJrQjs7QUFVbEIsaUJBQVMsSUFBVCxDQUFjO0FBQ1Ysa0JBQU0sZUFBTjtBQUNBLHNCQUFVLFFBQVY7QUFDQSxrQkFBTSxNQUFNLFFBQU47U0FIVixFQVZrQjs7QUFnQmxCLDJCQUFtQixNQUFNLFFBQU4sQ0FoQkQ7S0FBVCxDQUFiLENBSnNCOztBQXVCdEIsV0FBTyxFQUFFLFdBQVcsZUFBWCxFQUE0QixrQkFBOUIsRUFBUCxDQXZCc0I7Q0FBVjs7QUEwQmhCLElBQU0sWUFBWSxnQkFBeUM7UUFBdEMseUJBQXNDO1FBQTVCLHFDQUE0QjtRQUFaLG1CQUFZOztBQUN2RCxRQUFNLFdBQVcsTUFBTSxDQUFOLENBRHNDOztBQUd2RCxTQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxjQUFKLEVBQW9CLEdBQXBDLEVBQXlDO0FBQ3JDLFlBQU0sUUFBUSxTQUFTLENBQVQsQ0FBUixDQUQrQjtBQUVyQyxZQUFNLFlBQVksV0FBVyxNQUFNLElBQU4sQ0FGUTs7QUFJckMsWUFBSSxZQUFZLENBQVosSUFBaUIsWUFBWSxNQUFNLFFBQU4sRUFBZ0I7QUFDN0Msa0JBQU0sSUFBTixDQUFXLFNBQVgsRUFENkM7U0FBakQ7S0FKSjtDQUhjOztBQWFILFNBQVMsUUFBVCxDQUFrQixHQUFsQixFQUFtQztRQUFaLDhEQUFRLGtCQUFJOzttQkFDZCxRQUFRLEdBQVIsRUFEYzs7UUFDdEMsK0JBRHNDO1FBQzNCLDZCQUQyQjs7QUFHOUMsUUFBTSw2QkFDQztBQUNILGtCQUFVLFNBQVY7QUFDQSw0QkFoRUMsTUFnRUQ7QUFDQSxnQkFBUTtBQUNKLGVBQUcsQ0FBSDtTQURKO0FBR0Esa0JBQVUsUUFBVjtBQUNBLHdCQUFnQixTQUFTLE1BQVQ7QUFDaEIsa0JBQVUsU0FBVjtNQVRFLENBSHdDOztBQWU5QyxXQUFPLG9CQUFVLGFBQVYsQ0FBUCxDQWY4QztDQUFuQyIsImZpbGUiOiJ0aW1lbGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUd2VlbiBmcm9tICcuLi9hY3Rpb25zL1R3ZWVuJztcbmltcG9ydCB7IGxpbmVhciB9IGZyb20gJy4uL2FjdGlvbnMvZWFzaW5nL3ByZXNldC1lYXNpbmcnO1xuaW1wb3J0IHsgcmVsYXRpdmVWYWx1ZSB9IGZyb20gJy4vY2FsYyc7XG5pbXBvcnQgeyBlYWNoIH0gZnJvbSAnLi91dGlscyc7XG5cbi8qXG4gICAgQHBhcmFtIFthcnJheV1cbiAgICAgICAgU2VxdWVudGlhbCBhcnJheSBvZiB0d2VlbnMsIGVhY2ggaXRlbSBjYW4gYmUgYSB0d2VlbiBvciBkZWZpbml0aW9uIG9iajpcblxuICAgICAgICBbXG4gICAgICAgICAgICBuZXcgVHdlZW4oKSxcbiAgICAgICAgICAgIHN0YWdnZXIoKSxcbiAgICAgICAgICAgIHRpbWVsaW5lKCksXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHdlZW46IG5ldyBUd2VlbigpLFxuICAgICAgICAgICAgICAgIGF0OiAxMDAsXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiBcIis9MTAwXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuKi9cbmNvbnN0IGFuYWx5emUgPSAoZGVmcykgPT4ge1xuICAgIGNvbnN0IHRpbWVsaW5lID0gW107XG4gICAgbGV0IGN1cnJlbnRQbGF5aGVhZCA9IDA7XG5cbiAgICBkZWZzLmZvckVhY2goKGRlZikgPT4ge1xuICAgICAgICBjb25zdCBkZWZJc09iaiA9IGRlZi50d2VlbiA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgY29uc3QgdHdlZW4gPSAoZGVmSXNPYmopID8gZGVmLnR3ZWVuIDogZGVmO1xuXG4gICAgICAgIGN1cnJlbnRQbGF5aGVhZCArPSAoKGRlZklzT2JqICYmIGRlZi5vZmZzZXQpID9cbiAgICAgICAgICAgIGRlZi5hdCB8fCByZWxhdGl2ZVZhbHVlKGN1cnJlbnRQbGF5aGVhZCwgZGVmLm9mZnNldCkgOiAwKTtcblxuICAgICAgICBsZXQgZHVyYXRpb24gPSAwO1xuICAgICAgICBlYWNoKHR3ZWVuLnZhbHVlcywgKHZhbHVlKSA9PiBkdXJhdGlvbiA9IE1hdGgubWF4KGR1cmF0aW9uLCB2YWx1ZS5kdXJhdGlvbikpO1xuXG4gICAgICAgIHRpbWVsaW5lLnB1c2goe1xuICAgICAgICAgICAgZnJvbTogY3VycmVudFBsYXloZWFkLFxuICAgICAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgICAgICAgZmlyZTogdHdlZW4uc2Vla1RpbWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY3VycmVudFBsYXloZWFkICs9IHR3ZWVuLmR1cmF0aW9uO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHsgdG90YWxUaW1lOiBjdXJyZW50UGxheWhlYWQsIHRpbWVsaW5lIH07XG59O1xuXG5jb25zdCBzZXRUd2VlbnMgPSAoeyB0aW1lbGluZSwgdGltZWxpbmVMZW5ndGgsIHN0YXRlIH0pID0+IHtcbiAgICBjb25zdCBwbGF5aGVhZCA9IHN0YXRlLnA7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRpbWVsaW5lTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgdHdlZW4gPSB0aW1lbGluZVtpXTtcbiAgICAgICAgY29uc3QgdHdlZW5UaW1lID0gcGxheWhlYWQgLSB0d2Vlbi5mcm9tO1xuXG4gICAgICAgIGlmICh0d2VlblRpbWUgPiAwICYmIHR3ZWVuVGltZSA8IHR3ZWVuLmR1cmF0aW9uKSB7XG4gICAgICAgICAgICB0d2Vlbi5maXJlKHR3ZWVuVGltZSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0aW1lbGluZShkZWYsIHByb3BzID0ge30pIHtcbiAgICBjb25zdCB7IHRvdGFsVGltZSwgdGltZWxpbmUgfSA9IGFuYWx5emUoZGVmKTtcblxuICAgIGNvbnN0IHRpbWVsaW5lUHJvcHMgPSB7XG4gICAgICAgIC4uLnByb3BzLFxuICAgICAgICBkdXJhdGlvbjogdG90YWxUaW1lLFxuICAgICAgICBlYXNlOiBsaW5lYXIsXG4gICAgICAgIHZhbHVlczoge1xuICAgICAgICAgICAgcDogMVxuICAgICAgICB9LFxuICAgICAgICB0aW1lbGluZTogdGltZWxpbmUsXG4gICAgICAgIHRpbWVsaW5lTGVuZ3RoOiB0aW1lbGluZS5sZW5ndGgsXG4gICAgICAgIG9uUmVuZGVyOiBzZXRUd2VlbnNcbiAgICB9O1xuXG4gICAgcmV0dXJuIG5ldyBUd2Vlbih0aW1lbGluZVByb3BzKTtcbn0iXX0=