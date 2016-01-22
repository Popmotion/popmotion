'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Actor = require('../actor/Actor');
var Tween = require('../actions/Tween');
var utils = require('../inc/utils');
var calcRelative = require('../inc/calc').relativeValue;

var timeline = new Tween({
    ease: 'linear',
    values: {
        playhead: 0
    }
});

var checkActions = function (_ref, sequence) {
    var playhead = _ref.playhead;

    var i = sequence.check.length;

    while (i--) {
        var toCheck = sequence.check[i];

        if (playhead >= toCheck.timestamp) {
            toCheck.callback();
            sequence.check.splice(i, 1);
        }
    }
};

var generateCallback = function (actor, action) {
    var callback = undefined;

    if (actor.each) {
        callback = function () {
            actor.each(action);
        };
    } else {
        callback = function () {
            actor.start(action);
        };
    }

    return callback;
};

var Sequence = function (_Actor) {
    _inherits(Sequence, _Actor);

    function Sequence() {
        _classCallCheck(this, Sequence);

        return _possibleConstructorReturn(this, _Actor.call(this, {
            check: [],
            sequence: [],
            duration: 0,
            currentTimestamp: 0,
            prevActionEnd: 0,
            onUpdate: checkActions
        }));
    }

    Sequence.prototype.do = function _do(actor, action) {
        var isCallback = utils.isFunc(actor);

        this.sequence.push({
            timestamp: this.currentTimestamp,
            callback: isCallback ? actor : generateCallback(actor, action)
        });

        if (action && action.duration) {
            this.prevActionEnd = this.currentTimestamp + action.duration;
        }

        return this;
    };

    Sequence.prototype.stagger = function stagger(iterator, action, staggerProps) {
        var numItems = iterator.members.length;
        var interval = utils.isNum(staggerProps) ? staggerProps : staggerProps.interval || 100;
        var duration = action.duration ? action.duration : 0;

        this.do(iterator, function () {
            iterator.stagger(action, staggerProps);
        });

        this.prevActionEnd = this.currentTimestamp + duration + interval * numItems;

        return this;
    };

    Sequence.prototype.at = function at(timestamp) {
        if (utils.isString(timestamp)) {
            timestamp = calcRelative(this.currentTimestamp, timestamp);
        }

        this.currentTimestamp = timestamp;
        this.duration = Math.max(this.currentTimestamp, this.duration);
        return this;
    };

    Sequence.prototype.then = function then() {
        var offset = arguments.length <= 0 || arguments[0] === undefined ? "+=0" : arguments[0];

        this.at(calcRelative(this.prevActionEnd, offset));
        return this;
    };

    Sequence.prototype.start = function start() {
        _Actor.prototype.start.call(this, timeline.extend({
            duration: this.duration,
            values: {
                playhead: {
                    current: 0,
                    to: this.duration
                }
            }
        }));

        return this;
    };

    Sequence.prototype.onStart = function onStart() {
        this.check = this.sequence.slice();
    };

    Sequence.prototype.clear = function clear() {
        this.sequence = [];
        this.duration = this.currentTimestamp = this.prevActionEnd = 0;
        return this;
    };

    return Sequence;
}(Actor);

module.exports = Sequence;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXF1ZW5jZS9TZXF1ZW5jZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLElBQU0sUUFBUSxRQUFRLGdCQUFSLENBQVI7QUFDTixJQUFNLFFBQVEsUUFBUSxrQkFBUixDQUFSO0FBQ04sSUFBTSxRQUFRLFFBQVEsY0FBUixDQUFSO0FBQ04sSUFBTSxlQUFlLFFBQVEsYUFBUixFQUF1QixhQUF2Qjs7QUFFckIsSUFBTSxXQUFXLElBQUksS0FBSixDQUFVO0FBQ3ZCLFVBQU0sUUFBTjtBQUNBLFlBQVE7QUFDSixrQkFBVSxDQUFWO0tBREo7Q0FGYSxDQUFYOztBQU9OLElBQU0sZUFBZSxnQkFBZSxRQUFmLEVBQTRCO1FBQXpCLHlCQUF5Qjs7QUFDN0MsUUFBSSxJQUFJLFNBQVMsS0FBVCxDQUFlLE1BQWYsQ0FEcUM7O0FBRzdDLFdBQU8sR0FBUCxFQUFZO0FBQ1IsWUFBSSxVQUFVLFNBQVMsS0FBVCxDQUFlLENBQWYsQ0FBVixDQURJOztBQUdSLFlBQUksWUFBWSxRQUFRLFNBQVIsRUFBbUI7QUFDL0Isb0JBQVEsUUFBUixHQUQrQjtBQUUvQixxQkFBUyxLQUFULENBQWUsTUFBZixDQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUYrQjtTQUFuQztLQUhKO0NBSGlCOztBQWFyQixJQUFNLG1CQUFtQixVQUFDLEtBQUQsRUFBUSxNQUFSLEVBQW1CO0FBQ3hDLFFBQUksb0JBQUosQ0FEd0M7O0FBR3hDLFFBQUksTUFBTSxJQUFOLEVBQVk7QUFDWixtQkFBVyxZQUFNO0FBQ2Isa0JBQU0sSUFBTixDQUFXLE1BQVgsRUFEYTtTQUFOLENBREM7S0FBaEIsTUFJTztBQUNILG1CQUFXLFlBQU07QUFDYixrQkFBTSxLQUFOLENBQVksTUFBWixFQURhO1NBQU4sQ0FEUjtLQUpQOztBQVVBLFdBQU8sUUFBUCxDQWJ3QztDQUFuQjs7SUFnQm5COzs7QUFFRixhQUZFLFFBRUYsR0FBYzs4QkFGWixVQUVZOztnREFDVixrQkFBTTtBQUNGLG1CQUFPLEVBQVA7QUFDQSxzQkFBVSxFQUFWO0FBQ0Esc0JBQVUsQ0FBVjtBQUNBLDhCQUFrQixDQUFsQjtBQUNBLDJCQUFlLENBQWY7QUFDQSxzQkFBVSxZQUFWO1NBTkosR0FEVTtLQUFkOztBQUZFLHVCQWFGLGtCQUFHLE9BQU8sUUFBUTtBQUNkLFlBQU0sYUFBYSxNQUFNLE1BQU4sQ0FBYSxLQUFiLENBQWIsQ0FEUTs7QUFHZCxhQUFLLFFBQUwsQ0FBYyxJQUFkLENBQW1CO0FBQ2YsdUJBQVcsS0FBSyxnQkFBTDtBQUNYLHNCQUFVLGFBQWEsS0FBYixHQUFxQixpQkFBaUIsS0FBakIsRUFBd0IsTUFBeEIsQ0FBckI7U0FGZCxFQUhjOztBQVFkLFlBQUksVUFBVSxPQUFPLFFBQVAsRUFBaUI7QUFDM0IsaUJBQUssYUFBTCxHQUFxQixLQUFLLGdCQUFMLEdBQXdCLE9BQU8sUUFBUCxDQURsQjtTQUEvQjs7QUFJQSxlQUFPLElBQVAsQ0FaYzs7O0FBYmhCLHVCQTRCRiwyQkFBUSxVQUFVLFFBQVEsY0FBYztBQUNwQyxZQUFNLFdBQVcsU0FBUyxPQUFULENBQWlCLE1BQWpCLENBRG1CO0FBRXBDLFlBQU0sV0FBVyxNQUFNLEtBQU4sQ0FBWSxZQUFaLElBQTRCLFlBQTVCLEdBQTJDLGFBQWEsUUFBYixJQUF5QixHQUF6QixDQUZ4QjtBQUdwQyxZQUFNLFdBQVcsT0FBTyxRQUFQLEdBQWtCLE9BQU8sUUFBUCxHQUFrQixDQUFwQyxDQUhtQjs7QUFLcEMsYUFBSyxFQUFMLENBQVEsUUFBUixFQUFrQixZQUFNO0FBQ3BCLHFCQUFTLE9BQVQsQ0FBaUIsTUFBakIsRUFBeUIsWUFBekIsRUFEb0I7U0FBTixDQUFsQixDQUxvQzs7QUFTcEMsYUFBSyxhQUFMLEdBQXFCLEtBQUssZ0JBQUwsR0FBd0IsUUFBeEIsR0FBb0MsV0FBVyxRQUFYLENBVHJCOztBQVdwQyxlQUFPLElBQVAsQ0FYb0M7OztBQTVCdEMsdUJBMENGLGlCQUFHLFdBQVc7QUFDVixZQUFJLE1BQU0sUUFBTixDQUFlLFNBQWYsQ0FBSixFQUErQjtBQUMzQix3QkFBWSxhQUFhLEtBQUssZ0JBQUwsRUFBdUIsU0FBcEMsQ0FBWixDQUQyQjtTQUEvQjs7QUFJQSxhQUFLLGdCQUFMLEdBQXdCLFNBQXhCLENBTFU7QUFNVixhQUFLLFFBQUwsR0FBZ0IsS0FBSyxHQUFMLENBQVMsS0FBSyxnQkFBTCxFQUF1QixLQUFLLFFBQUwsQ0FBaEQsQ0FOVTtBQU9WLGVBQU8sSUFBUCxDQVBVOzs7QUExQ1osdUJBb0RGLHVCQUFxQjtZQUFoQiwrREFBUyxxQkFBTzs7QUFDakIsYUFBSyxFQUFMLENBQVEsYUFBYSxLQUFLLGFBQUwsRUFBb0IsTUFBakMsQ0FBUixFQURpQjtBQUVqQixlQUFPLElBQVAsQ0FGaUI7OztBQXBEbkIsdUJBeURGLHlCQUFRO0FBQ0oseUJBQU0sS0FBTixZQUFZLFNBQVMsTUFBVCxDQUFnQjtBQUN4QixzQkFBVSxLQUFLLFFBQUw7QUFDVixvQkFBUTtBQUNKLDBCQUFVO0FBQ04sNkJBQVMsQ0FBVDtBQUNBLHdCQUFJLEtBQUssUUFBTDtpQkFGUjthQURKO1NBRlEsQ0FBWixFQURJOztBQVdKLGVBQU8sSUFBUCxDQVhJOzs7QUF6RE4sdUJBdUVGLDZCQUFVO0FBQ04sYUFBSyxLQUFMLEdBQWEsS0FBSyxRQUFMLENBQWMsS0FBZCxFQUFiLENBRE07OztBQXZFUix1QkEyRUYseUJBQVE7QUFDSixhQUFLLFFBQUwsR0FBZ0IsRUFBaEIsQ0FESTtBQUVKLGFBQUssUUFBTCxHQUFnQixLQUFLLGdCQUFMLEdBQXdCLEtBQUssYUFBTCxHQUFxQixDQUFyQixDQUZwQztBQUdKLGVBQU8sSUFBUCxDQUhJOzs7V0EzRU47RUFBaUI7O0FBa0Z2QixPQUFPLE9BQVAsR0FBaUIsUUFBakIiLCJmaWxlIjoiU2VxdWVuY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBBY3RvciA9IHJlcXVpcmUoJy4uL2FjdG9yL0FjdG9yJyk7XG5jb25zdCBUd2VlbiA9IHJlcXVpcmUoJy4uL2FjdGlvbnMvVHdlZW4nKTtcbmNvbnN0IHV0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5jb25zdCBjYWxjUmVsYXRpdmUgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpLnJlbGF0aXZlVmFsdWU7XG5cbmNvbnN0IHRpbWVsaW5lID0gbmV3IFR3ZWVuKHtcbiAgICBlYXNlOiAnbGluZWFyJyxcbiAgICB2YWx1ZXM6IHtcbiAgICAgICAgcGxheWhlYWQ6IDBcbiAgICB9XG59KTtcblxuY29uc3QgY2hlY2tBY3Rpb25zID0gKHsgcGxheWhlYWQgfSwgc2VxdWVuY2UpID0+IHtcbiAgICBsZXQgaSA9IHNlcXVlbmNlLmNoZWNrLmxlbmd0aDtcblxuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgbGV0IHRvQ2hlY2sgPSBzZXF1ZW5jZS5jaGVja1tpXTtcblxuICAgICAgICBpZiAocGxheWhlYWQgPj0gdG9DaGVjay50aW1lc3RhbXApIHtcbiAgICAgICAgICAgIHRvQ2hlY2suY2FsbGJhY2soKTtcbiAgICAgICAgICAgIHNlcXVlbmNlLmNoZWNrLnNwbGljZShpLCAxKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY29uc3QgZ2VuZXJhdGVDYWxsYmFjayA9IChhY3RvciwgYWN0aW9uKSA9PiB7XG4gICAgbGV0IGNhbGxiYWNrO1xuXG4gICAgaWYgKGFjdG9yLmVhY2gpIHtcbiAgICAgICAgY2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBhY3Rvci5lYWNoKGFjdGlvbik7XG4gICAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBhY3Rvci5zdGFydChhY3Rpb24pO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBjYWxsYmFjaztcbn1cblxuY2xhc3MgU2VxdWVuY2UgZXh0ZW5kcyBBY3RvciB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoe1xuICAgICAgICAgICAgY2hlY2s6IFtdLFxuICAgICAgICAgICAgc2VxdWVuY2U6IFtdLFxuICAgICAgICAgICAgZHVyYXRpb246IDAsXG4gICAgICAgICAgICBjdXJyZW50VGltZXN0YW1wOiAwLFxuICAgICAgICAgICAgcHJldkFjdGlvbkVuZDogMCxcbiAgICAgICAgICAgIG9uVXBkYXRlOiBjaGVja0FjdGlvbnNcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZG8oYWN0b3IsIGFjdGlvbikge1xuICAgICAgICBjb25zdCBpc0NhbGxiYWNrID0gdXRpbHMuaXNGdW5jKGFjdG9yKTtcblxuICAgICAgICB0aGlzLnNlcXVlbmNlLnB1c2goe1xuICAgICAgICAgICAgdGltZXN0YW1wOiB0aGlzLmN1cnJlbnRUaW1lc3RhbXAsXG4gICAgICAgICAgICBjYWxsYmFjazogaXNDYWxsYmFjayA/IGFjdG9yIDogZ2VuZXJhdGVDYWxsYmFjayhhY3RvciwgYWN0aW9uKVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoYWN0aW9uICYmIGFjdGlvbi5kdXJhdGlvbikge1xuICAgICAgICAgICAgdGhpcy5wcmV2QWN0aW9uRW5kID0gdGhpcy5jdXJyZW50VGltZXN0YW1wICsgYWN0aW9uLmR1cmF0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc3RhZ2dlcihpdGVyYXRvciwgYWN0aW9uLCBzdGFnZ2VyUHJvcHMpIHtcbiAgICAgICAgY29uc3QgbnVtSXRlbXMgPSBpdGVyYXRvci5tZW1iZXJzLmxlbmd0aDtcbiAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSB1dGlscy5pc051bShzdGFnZ2VyUHJvcHMpID8gc3RhZ2dlclByb3BzIDogc3RhZ2dlclByb3BzLmludGVydmFsIHx8IDEwMDtcbiAgICAgICAgY29uc3QgZHVyYXRpb24gPSBhY3Rpb24uZHVyYXRpb24gPyBhY3Rpb24uZHVyYXRpb24gOiAwO1xuXG4gICAgICAgIHRoaXMuZG8oaXRlcmF0b3IsICgpID0+IHtcbiAgICAgICAgICAgIGl0ZXJhdG9yLnN0YWdnZXIoYWN0aW9uLCBzdGFnZ2VyUHJvcHMpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnByZXZBY3Rpb25FbmQgPSB0aGlzLmN1cnJlbnRUaW1lc3RhbXAgKyBkdXJhdGlvbiArIChpbnRlcnZhbCAqIG51bUl0ZW1zKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBhdCh0aW1lc3RhbXApIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHRpbWVzdGFtcCkpIHtcbiAgICAgICAgICAgIHRpbWVzdGFtcCA9IGNhbGNSZWxhdGl2ZSh0aGlzLmN1cnJlbnRUaW1lc3RhbXAsIHRpbWVzdGFtcCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmN1cnJlbnRUaW1lc3RhbXAgPSB0aW1lc3RhbXA7XG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSBNYXRoLm1heCh0aGlzLmN1cnJlbnRUaW1lc3RhbXAsIHRoaXMuZHVyYXRpb24pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB0aGVuKG9mZnNldCA9IFwiKz0wXCIpIHtcbiAgICAgICAgdGhpcy5hdChjYWxjUmVsYXRpdmUodGhpcy5wcmV2QWN0aW9uRW5kLCBvZmZzZXQpKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHN1cGVyLnN0YXJ0KHRpbWVsaW5lLmV4dGVuZCh7XG4gICAgICAgICAgICBkdXJhdGlvbjogdGhpcy5kdXJhdGlvbixcbiAgICAgICAgICAgIHZhbHVlczoge1xuICAgICAgICAgICAgICAgIHBsYXloZWFkOiB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIHRvOiB0aGlzLmR1cmF0aW9uXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgb25TdGFydCgpIHtcbiAgICAgICAgdGhpcy5jaGVjayA9IHRoaXMuc2VxdWVuY2Uuc2xpY2UoKTtcbiAgICB9XG5cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5zZXF1ZW5jZSA9IFtdO1xuICAgICAgICB0aGlzLmR1cmF0aW9uID0gdGhpcy5jdXJyZW50VGltZXN0YW1wID0gdGhpcy5wcmV2QWN0aW9uRW5kID0gMDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNlcXVlbmNlOyJdfQ==