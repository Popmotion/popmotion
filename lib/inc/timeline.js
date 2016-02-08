'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.__esModule = true;
exports.default = timeline;

var _Tween = require('../actions/Tween');

var _Tween2 = _interopRequireDefault(_Tween);

var _presetEasing = require('../actions/easing/preset-easing');

var _presetEasing2 = _interopRequireDefault(_presetEasing);

var _calc = require('./calc');

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
    var numDefs = defs.length;
    var currentPlayhead = 0;

    var _loop = function (i) {
        var def = defs[i];
        var defIsObj = def.tween ? true : false;
        var tween = defIsObj ? def.tween : def;

        currentPlayhead += defIsObj && def.offset ? def.at || (0, _calc.relativeValue)(currentPlayhead, def.offset) : 0;

        var duration = 0;
        for (var key in tween.values) {
            if (tween.values.hasOwnProperty(key)) {
                var value = tween.values[key];
                duration = Math.max(duration, value.duration);
            }
        }

        timeline.push({
            from: currentPlayhead,
            duration: duration,
            fire: function (time) {
                return tween.seekTime(time);
            }
        });

        currentPlayhead += tween.duration;
    };

    for (var i = 0; i < numDefs; i++) {
        _loop(i);
    }

    return { totalTime: currentPlayhead, timeline: timeline };
};

var setTweens = function (_ref) {
    var elapsed = _ref.elapsed;
    var timeline = _ref.timeline;
    var timelineLength = _ref.timelineLength;

    for (var i = 0; i < timelineLength; i++) {
        var _tween = timeline[i];
        var tweenTime = elapsed - _tween.from;

        if (tweenTime > 0 && tweenTime < _tween.duration) {
            _tween.fire(tweenTime);
        }
    }
};

function timeline(def) {
    var props = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var _analyze = analyze(def);

    var totalTime = _analyze.totalTime;
    var timeline = _analyze.timeline;

    return new _Tween2.default(_extends({}, props, {
        duration: totalTime,
        ease: _presetEasing2.default.linear,
        values: {
            p: 1
        },
        timeline: timeline,
        timelineLength: timeline.length,
        onRender: setTweens
    }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmMvdGltZWxpbmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBK0R3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE1Q3hCLElBQU0sVUFBVSxVQUFDLElBQUQsRUFBVTtBQUN0QixRQUFNLFdBQVcsRUFBWCxDQURnQjtBQUV0QixRQUFNLFVBQVUsS0FBSyxNQUFMLENBRk07QUFHdEIsUUFBSSxrQkFBa0IsQ0FBbEIsQ0FIa0I7OzBCQUtiO0FBQ0wsWUFBTSxNQUFNLEtBQUssQ0FBTCxDQUFOO0FBQ04sWUFBTSxXQUFXLElBQUksS0FBSixHQUFZLElBQVosR0FBbUIsS0FBbkI7QUFDakIsWUFBTSxRQUFRLFdBQWEsSUFBSSxLQUFKLEdBQVksR0FBekI7O0FBRWQsMkJBQW9CLFFBQUMsSUFBWSxJQUFJLE1BQUosR0FDN0IsSUFBSSxFQUFKLElBQVUsVUE1QmIsY0E0QmEsQ0FBYyxlQUFkLEVBQStCLElBQUksTUFBSixDQUF6QyxHQUF1RCxDQUR2Qzs7QUFHcEIsWUFBSSxXQUFXLENBQVg7QUFDSixhQUFLLElBQUksR0FBSixJQUFXLE1BQU0sTUFBTixFQUFjO0FBQzFCLGdCQUFJLE1BQU0sTUFBTixDQUFhLGNBQWIsQ0FBNEIsR0FBNUIsQ0FBSixFQUFzQztBQUNsQyxvQkFBTSxRQUFRLE1BQU0sTUFBTixDQUFhLEdBQWIsQ0FBUixDQUQ0QjtBQUVsQywyQkFBVyxLQUFLLEdBQUwsQ0FBUyxRQUFULEVBQW1CLE1BQU0sUUFBTixDQUE5QixDQUZrQzthQUF0QztTQURKOztBQU9BLGlCQUFTLElBQVQsQ0FBYztBQUNWLGtCQUFNLGVBQU47QUFDQSxzQkFBVSxRQUFWO0FBQ0Esa0JBQU0sVUFBQyxJQUFEO3VCQUFVLE1BQU0sUUFBTixDQUFlLElBQWY7YUFBVjtTQUhWOztBQU1BLDJCQUFtQixNQUFNLFFBQU47TUEzQkQ7O0FBS3RCLFNBQUssSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLE9BQUosRUFBYSxHQUE3QixFQUFrQztjQUF6QixHQUF5QjtLQUFsQzs7QUF5QkEsV0FBTyxFQUFFLFdBQVcsZUFBWCxFQUE0QixrQkFBOUIsRUFBUCxDQTlCc0I7Q0FBVjs7QUFpQ2hCLElBQU0sWUFBWSxnQkFBMkM7UUFBeEMsdUJBQXdDO1FBQS9CLHlCQUErQjtRQUFyQixxQ0FBcUI7O0FBQ3pELFNBQUssSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLGNBQUosRUFBb0IsR0FBcEMsRUFBeUM7QUFDckMsWUFBTSxTQUFRLFNBQVMsQ0FBVCxDQUFSLENBRCtCO0FBRXJDLFlBQU0sWUFBWSxVQUFVLE9BQU0sSUFBTixDQUZTOztBQUlyQyxZQUFJLFlBQVksQ0FBWixJQUFpQixZQUFZLE9BQU0sUUFBTixFQUFnQjtBQUM3QyxtQkFBTSxJQUFOLENBQVcsU0FBWCxFQUQ2QztTQUFqRDtLQUpKO0NBRGM7O0FBV0gsU0FBUyxRQUFULENBQWtCLEdBQWxCLEVBQW1DO1FBQVosOERBQVEsa0JBQUk7O21CQUNkLFFBQVEsR0FBUixFQURjOztRQUN0QywrQkFEc0M7UUFDM0IsNkJBRDJCOztBQUc5QyxXQUFPLGlDQUNBO0FBQ0gsa0JBQVUsU0FBVjtBQUNBLGNBQU0sdUJBQU8sTUFBUDtBQUNOLGdCQUFRO0FBQ0osZUFBRyxDQUFIO1NBREo7QUFHQSxrQkFBVSxRQUFWO0FBQ0Esd0JBQWdCLFNBQVMsTUFBVDtBQUNoQixrQkFBVSxTQUFWO01BVEcsQ0FBUCxDQUg4QztDQUFuQyIsImZpbGUiOiJ0aW1lbGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUd2VlbiBmcm9tICcuLi9hY3Rpb25zL1R3ZWVuJztcbmltcG9ydCBlYXNpbmcgZnJvbSAnLi4vYWN0aW9ucy9lYXNpbmcvcHJlc2V0LWVhc2luZyc7XG5pbXBvcnQgeyByZWxhdGl2ZVZhbHVlIH0gZnJvbSAnLi9jYWxjJztcblxuLypcbiAgICBAcGFyYW0gW2FycmF5XVxuICAgICAgICBTZXF1ZW50aWFsIGFycmF5IG9mIHR3ZWVucywgZWFjaCBpdGVtIGNhbiBiZSBhIHR3ZWVuIG9yIGRlZmluaXRpb24gb2JqOlxuXG4gICAgICAgIFtcbiAgICAgICAgICAgIG5ldyBUd2VlbigpLFxuICAgICAgICAgICAgc3RhZ2dlcigpLFxuICAgICAgICAgICAgdGltZWxpbmUoKSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0d2VlbjogbmV3IFR3ZWVuKCksXG4gICAgICAgICAgICAgICAgYXQ6IDEwMCxcbiAgICAgICAgICAgICAgICBvZmZzZXQ6IFwiKz0xMDBcIlxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4qL1xuY29uc3QgYW5hbHl6ZSA9IChkZWZzKSA9PiB7XG4gICAgY29uc3QgdGltZWxpbmUgPSBbXTtcbiAgICBjb25zdCBudW1EZWZzID0gZGVmcy5sZW5ndGg7XG4gICAgbGV0IGN1cnJlbnRQbGF5aGVhZCA9IDA7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bURlZnM7IGkrKykge1xuICAgICAgICBjb25zdCBkZWYgPSBkZWZzW2ldO1xuICAgICAgICBjb25zdCBkZWZJc09iaiA9IGRlZi50d2VlbiA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgY29uc3QgdHdlZW4gPSAoZGVmSXNPYmopID8gZGVmLnR3ZWVuIDogZGVmO1xuXG4gICAgICAgIGN1cnJlbnRQbGF5aGVhZCArPSAoKGRlZklzT2JqICYmIGRlZi5vZmZzZXQpID9cbiAgICAgICAgICAgIGRlZi5hdCB8fCByZWxhdGl2ZVZhbHVlKGN1cnJlbnRQbGF5aGVhZCwgZGVmLm9mZnNldCkgOiAwKTtcblxuICAgICAgICBsZXQgZHVyYXRpb24gPSAwO1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdHdlZW4udmFsdWVzKSB7XG4gICAgICAgICAgICBpZiAodHdlZW4udmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHR3ZWVuLnZhbHVlc1trZXldO1xuICAgICAgICAgICAgICAgIGR1cmF0aW9uID0gTWF0aC5tYXgoZHVyYXRpb24sIHZhbHVlLmR1cmF0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRpbWVsaW5lLnB1c2goe1xuICAgICAgICAgICAgZnJvbTogY3VycmVudFBsYXloZWFkLFxuICAgICAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgICAgICAgZmlyZTogKHRpbWUpID0+IHR3ZWVuLnNlZWtUaW1lKHRpbWUpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGN1cnJlbnRQbGF5aGVhZCArPSB0d2Vlbi5kdXJhdGlvbjtcbiAgICB9XG5cbiAgICByZXR1cm4geyB0b3RhbFRpbWU6IGN1cnJlbnRQbGF5aGVhZCwgdGltZWxpbmUgfTtcbn07XG5cbmNvbnN0IHNldFR3ZWVucyA9ICh7IGVsYXBzZWQsIHRpbWVsaW5lLCB0aW1lbGluZUxlbmd0aCB9KSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aW1lbGluZUxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHR3ZWVuID0gdGltZWxpbmVbaV07XG4gICAgICAgIGNvbnN0IHR3ZWVuVGltZSA9IGVsYXBzZWQgLSB0d2Vlbi5mcm9tO1xuXG4gICAgICAgIGlmICh0d2VlblRpbWUgPiAwICYmIHR3ZWVuVGltZSA8IHR3ZWVuLmR1cmF0aW9uKSB7XG4gICAgICAgICAgICB0d2Vlbi5maXJlKHR3ZWVuVGltZSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0aW1lbGluZShkZWYsIHByb3BzID0ge30pIHtcbiAgICBjb25zdCB7IHRvdGFsVGltZSwgdGltZWxpbmUgfSA9IGFuYWx5emUoZGVmKTtcblxuICAgIHJldHVybiBuZXcgVHdlZW4oe1xuICAgICAgICAuLi5wcm9wcyxcbiAgICAgICAgZHVyYXRpb246IHRvdGFsVGltZSxcbiAgICAgICAgZWFzZTogZWFzaW5nLmxpbmVhcixcbiAgICAgICAgdmFsdWVzOiB7XG4gICAgICAgICAgICBwOiAxXG4gICAgICAgIH0sXG4gICAgICAgIHRpbWVsaW5lOiB0aW1lbGluZSxcbiAgICAgICAgdGltZWxpbmVMZW5ndGg6IHRpbWVsaW5lLmxlbmd0aCxcbiAgICAgICAgb25SZW5kZXI6IHNldFR3ZWVuc1xuICAgIH0pO1xufSJdfQ==