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
        var tween = timeline[i];
        var tweenTime = elapsed - tween.from;

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmMvdGltZWxpbmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBK0R3QixRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTVDaEMsSUFBTSxPQUFPLEdBQUcsVUFBQyxJQUFJLEVBQUs7QUFDdEIsUUFBTSxRQUFRLEdBQUcsRUFBRSxDQUFDO0FBQ3BCLFFBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7QUFDNUIsUUFBSSxlQUFlLEdBQUcsQ0FBQyxDQUFDOzswQkFFZixDQUFDO0FBQ04sWUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3BCLFlBQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQztBQUMxQyxZQUFNLEtBQUssR0FBRyxBQUFDLFFBQVEsR0FBSSxHQUFHLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQzs7QUFFM0MsdUJBQWUsSUFBSyxBQUFDLFFBQVEsSUFBSSxHQUFHLENBQUMsTUFBTSxHQUN2QyxHQUFHLENBQUMsRUFBRSxJQUFJLHlCQUFjLGVBQWUsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxBQUFDLENBQUM7O0FBRTlELFlBQUksUUFBUSxHQUFHLENBQUMsQ0FBQztBQUNqQixhQUFLLElBQUksR0FBRyxJQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUU7QUFDMUIsZ0JBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7QUFDbEMsb0JBQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDaEMsd0JBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDakQ7U0FDSjs7QUFFRCxnQkFBUSxDQUFDLElBQUksQ0FBQztBQUNWLGdCQUFJLEVBQUUsZUFBZTtBQUNyQixvQkFBUSxFQUFFLFFBQVE7QUFDbEIsZ0JBQUksRUFBRSxVQUFDLElBQUk7dUJBQUssS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7YUFBQTtTQUN2QyxDQUFDLENBQUM7O0FBRUgsdUJBQWUsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDOzs7QUF0QnRDLFNBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Y0FBekIsQ0FBQztLQXVCVDs7QUFFRCxXQUFPLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQVIsUUFBUSxFQUFFLENBQUM7Q0FDbkQsQ0FBQzs7QUFFRixJQUFNLFNBQVMsR0FBRyxnQkFBMkM7UUFBeEMsT0FBTyxRQUFQLE9BQU87UUFBRSxRQUFRLFFBQVIsUUFBUTtRQUFFLGNBQWMsUUFBZCxjQUFjOztBQUNsRCxTQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsY0FBYyxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ3JDLFlBQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMxQixZQUFNLFNBQVMsR0FBRyxPQUFPLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQzs7QUFFdkMsWUFBSSxTQUFTLEdBQUcsQ0FBQyxJQUFJLFNBQVMsR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFO0FBQzdDLGlCQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3pCO0tBQ0o7Q0FDSixDQUFDOztBQUVhLFNBQVMsUUFBUSxDQUFDLEdBQUcsRUFBYztRQUFaLEtBQUsseURBQUcsRUFBRTs7bUJBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQzs7UUFBcEMsU0FBUyxZQUFULFNBQVM7UUFBRSxRQUFRLFlBQVIsUUFBUTs7QUFFM0IsV0FBTyxpQ0FDQSxLQUFLO0FBQ1IsZ0JBQVEsRUFBRSxTQUFTO0FBQ25CLFlBQUksRUFBRSx1QkFBTyxNQUFNO0FBQ25CLGNBQU0sRUFBRTtBQUNKLGFBQUMsRUFBRSxDQUFDO1NBQ1A7QUFDRCxnQkFBUSxFQUFFLFFBQVE7QUFDbEIsc0JBQWMsRUFBRSxRQUFRLENBQUMsTUFBTTtBQUMvQixnQkFBUSxFQUFFLFNBQVM7T0FDckIsQ0FBQztDQUNOIiwiZmlsZSI6InRpbWVsaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFR3ZWVuIGZyb20gJy4uL2FjdGlvbnMvVHdlZW4nO1xuaW1wb3J0IGVhc2luZyBmcm9tICcuLi9hY3Rpb25zL2Vhc2luZy9wcmVzZXQtZWFzaW5nJztcbmltcG9ydCB7IHJlbGF0aXZlVmFsdWUgfSBmcm9tICcuL2NhbGMnO1xuXG4vKlxuICAgIEBwYXJhbSBbYXJyYXldXG4gICAgICAgIFNlcXVlbnRpYWwgYXJyYXkgb2YgdHdlZW5zLCBlYWNoIGl0ZW0gY2FuIGJlIGEgdHdlZW4gb3IgZGVmaW5pdGlvbiBvYmo6XG5cbiAgICAgICAgW1xuICAgICAgICAgICAgbmV3IFR3ZWVuKCksXG4gICAgICAgICAgICBzdGFnZ2VyKCksXG4gICAgICAgICAgICB0aW1lbGluZSgpLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR3ZWVuOiBuZXcgVHdlZW4oKSxcbiAgICAgICAgICAgICAgICBhdDogMTAwLFxuICAgICAgICAgICAgICAgIG9mZnNldDogXCIrPTEwMFwiXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiovXG5jb25zdCBhbmFseXplID0gKGRlZnMpID0+IHtcbiAgICBjb25zdCB0aW1lbGluZSA9IFtdO1xuICAgIGNvbnN0IG51bURlZnMgPSBkZWZzLmxlbmd0aDtcbiAgICBsZXQgY3VycmVudFBsYXloZWFkID0gMDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtRGVmczsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGRlZiA9IGRlZnNbaV07XG4gICAgICAgIGNvbnN0IGRlZklzT2JqID0gZGVmLnR3ZWVuID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICBjb25zdCB0d2VlbiA9IChkZWZJc09iaikgPyBkZWYudHdlZW4gOiBkZWY7XG5cbiAgICAgICAgY3VycmVudFBsYXloZWFkICs9ICgoZGVmSXNPYmogJiYgZGVmLm9mZnNldCkgP1xuICAgICAgICAgICAgZGVmLmF0IHx8IHJlbGF0aXZlVmFsdWUoY3VycmVudFBsYXloZWFkLCBkZWYub2Zmc2V0KSA6IDApO1xuXG4gICAgICAgIGxldCBkdXJhdGlvbiA9IDA7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiB0d2Vlbi52YWx1ZXMpIHtcbiAgICAgICAgICAgIGlmICh0d2Vlbi52YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdHdlZW4udmFsdWVzW2tleV07XG4gICAgICAgICAgICAgICAgZHVyYXRpb24gPSBNYXRoLm1heChkdXJhdGlvbiwgdmFsdWUuZHVyYXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGltZWxpbmUucHVzaCh7XG4gICAgICAgICAgICBmcm9tOiBjdXJyZW50UGxheWhlYWQsXG4gICAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICAgICAgICBmaXJlOiAodGltZSkgPT4gdHdlZW4uc2Vla1RpbWUodGltZSlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY3VycmVudFBsYXloZWFkICs9IHR3ZWVuLmR1cmF0aW9uO1xuICAgIH1cblxuICAgIHJldHVybiB7IHRvdGFsVGltZTogY3VycmVudFBsYXloZWFkLCB0aW1lbGluZSB9O1xufTtcblxuY29uc3Qgc2V0VHdlZW5zID0gKHsgZWxhcHNlZCwgdGltZWxpbmUsIHRpbWVsaW5lTGVuZ3RoIH0pID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRpbWVsaW5lTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgdHdlZW4gPSB0aW1lbGluZVtpXTtcbiAgICAgICAgY29uc3QgdHdlZW5UaW1lID0gZWxhcHNlZCAtIHR3ZWVuLmZyb207XG5cbiAgICAgICAgaWYgKHR3ZWVuVGltZSA+IDAgJiYgdHdlZW5UaW1lIDwgdHdlZW4uZHVyYXRpb24pIHtcbiAgICAgICAgICAgIHR3ZWVuLmZpcmUodHdlZW5UaW1lKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRpbWVsaW5lKGRlZiwgcHJvcHMgPSB7fSkge1xuICAgIGNvbnN0IHsgdG90YWxUaW1lLCB0aW1lbGluZSB9ID0gYW5hbHl6ZShkZWYpO1xuXG4gICAgcmV0dXJuIG5ldyBUd2Vlbih7XG4gICAgICAgIC4uLnByb3BzLFxuICAgICAgICBkdXJhdGlvbjogdG90YWxUaW1lLFxuICAgICAgICBlYXNlOiBlYXNpbmcubGluZWFyLFxuICAgICAgICB2YWx1ZXM6IHtcbiAgICAgICAgICAgIHA6IDFcbiAgICAgICAgfSxcbiAgICAgICAgdGltZWxpbmU6IHRpbWVsaW5lLFxuICAgICAgICB0aW1lbGluZUxlbmd0aDogdGltZWxpbmUubGVuZ3RoLFxuICAgICAgICBvblJlbmRlcjogc2V0VHdlZW5zXG4gICAgfSk7XG59Il19