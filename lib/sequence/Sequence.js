'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

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

var checkActions = function checkActions(_ref, sequence) {
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

var generateCallback = function generateCallback(actor, action) {
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

var Sequence = (function (_Actor) {
    _inherits(Sequence, _Actor);

    function Sequence() {
        _classCallCheck(this, Sequence);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Sequence).call(this, {
            check: [],
            sequence: [],
            duration: 0,
            currentTimestamp: 0,
            prevActionEnd: 0,
            onUpdate: checkActions
        }));
    }

    _createClass(Sequence, [{
        key: 'do',
        value: function _do(actor, action) {
            var isCallback = utils.isFunc(actor);

            this.sequence.push({
                timestamp: this.currentTimestamp,
                callback: isCallback ? actor : generateCallback(actor, action)
            });

            if (action && action.duration) {
                this.prevActionEnd = this.currentTimestamp + action.duration;
            }

            return this;
        }
    }, {
        key: 'stagger',
        value: function stagger(iterator, action, staggerProps) {
            var numItems = iterator.members.length;
            var interval = utils.isNum(staggerProps) ? staggerProps : staggerProps.interval || 100;
            var duration = action.duration ? action.duration : 0;

            this.do(iterator, function () {
                iterator.stagger(action, staggerProps);
            });

            this.prevActionEnd = this.currentTimestamp + duration + interval * numItems;

            return this;
        }
    }, {
        key: 'at',
        value: function at(timestamp) {
            if (utils.isString(timestamp)) {
                timestamp = calcRelative(this.currentTimestamp, timestamp);
            }

            this.currentTimestamp = timestamp;
            this.duration = Math.max(this.currentTimestamp, this.duration);
            return this;
        }
    }, {
        key: 'then',
        value: function then() {
            var offset = arguments.length <= 0 || arguments[0] === undefined ? "+=0" : arguments[0];

            this.at(calcRelative(this.prevActionEnd, offset));
            return this;
        }
    }, {
        key: 'start',
        value: function start() {
            _get(Object.getPrototypeOf(Sequence.prototype), 'start', this).call(this, timeline.extend({
                duration: this.duration,
                values: {
                    playhead: {
                        current: 0,
                        to: this.duration
                    }
                }
            }));

            return this;
        }
    }, {
        key: 'onStart',
        value: function onStart() {
            this.check = this.sequence.slice();
        }
    }, {
        key: 'clear',
        value: function clear() {
            this.sequence = [];
            this.duration = this.currentTimestamp = this.prevActionEnd = 0;
            return this;
        }
    }]);

    return Sequence;
})(Actor);

module.exports = Sequence;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXF1ZW5jZS9TZXF1ZW5jZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUN4QyxJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUMxQyxJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDdEMsSUFBTSxZQUFZLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLGFBQWEsQ0FBQzs7QUFFMUQsSUFBTSxRQUFRLEdBQUcsSUFBSSxLQUFLLENBQUM7QUFDdkIsUUFBSSxFQUFFLFFBQVE7QUFDZCxVQUFNLEVBQUU7QUFDSixnQkFBUSxFQUFFLENBQUM7S0FDZDtDQUNKLENBQUMsQ0FBQzs7QUFFSCxJQUFNLFlBQVksR0FBRyxTQUFmLFlBQVksT0FBa0IsUUFBUSxFQUFLO1FBQXpCLFFBQVEsUUFBUixRQUFROztBQUM1QixRQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQzs7QUFFOUIsV0FBTyxDQUFDLEVBQUUsRUFBRTtBQUNSLFlBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7O0FBRWhDLFlBQUksUUFBUSxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7QUFDL0IsbUJBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUNuQixvQkFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQy9CO0tBQ0o7Q0FDSixDQUFBOztBQUVELElBQU0sZ0JBQWdCLEdBQUcsU0FBbkIsZ0JBQWdCLENBQUksS0FBSyxFQUFFLE1BQU0sRUFBSztBQUN4QyxRQUFJLFFBQVEsWUFBQSxDQUFDOztBQUViLFFBQUksS0FBSyxDQUFDLElBQUksRUFBRTtBQUNaLGdCQUFRLEdBQUcsWUFB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QVEsRUFBRTtBQUNOLCtCQUFPLEVBQUUsQ0FBQztBQUNWLDBCQUFFLEVBQUUsSUFBSSxDQUFDLFFBQVE7cUJBQ3BCO2lCQUNKO2FBQ0osQ0FBQyxFQUFFOztBQUVKLG1CQUFPLElBQUksQ0FBQztTQUNmOzs7a0NBRVM7QUFDTixnQkFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3RDOzs7Z0NBRU87QUFDSixnQkFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7QUFDbkIsZ0JBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO0FBQy9ELG1CQUFPLElBQUksQ0FBQztTQUNmOzs7V0EvRUMsUUFBUTtHQUFTLEtBQUs7O0FBa0Y1QixNQUFNLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyIsImZpbGUiOiJTZXF1ZW5jZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEFjdG9yID0gcmVxdWlyZSgnLi4vYWN0b3IvQWN0b3InKTtcbmNvbnN0IFR3ZWVuID0gcmVxdWlyZSgnLi4vYWN0aW9ucy9Ud2VlbicpO1xuY29uc3QgdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcbmNvbnN0IGNhbGNSZWxhdGl2ZSA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJykucmVsYXRpdmVWYWx1ZTtcblxuY29uc3QgdGltZWxpbmUgPSBuZXcgVHdlZW4oe1xuICAgIGVhc2U6ICdsaW5lYXInLFxuICAgIHZhbHVlczoge1xuICAgICAgICBwbGF5aGVhZDogMFxuICAgIH1cbn0pO1xuXG5jb25zdCBjaGVja0FjdGlvbnMgPSAoeyBwbGF5aGVhZCB9LCBzZXF1ZW5jZSkgPT4ge1xuICAgIGxldCBpID0gc2VxdWVuY2UuY2hlY2subGVuZ3RoO1xuXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgICBsZXQgdG9DaGVjayA9IHNlcXVlbmNlLmNoZWNrW2ldO1xuXG4gICAgICAgIGlmIChwbGF5aGVhZCA+PSB0b0NoZWNrLnRpbWVzdGFtcCkge1xuICAgICAgICAgICAgdG9DaGVjay5jYWxsYmFjaygpO1xuICAgICAgICAgICAgc2VxdWVuY2UuY2hlY2suc3BsaWNlKGksIDEpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jb25zdCBnZW5lcmF0ZUNhbGxiYWNrID0gKGFjdG9yLCBhY3Rpb24pID0+IHtcbiAgICBsZXQgY2FsbGJhY2s7XG5cbiAgICBpZiAoYWN0b3IuZWFjaCkge1xuICAgICAgICBjYWxsYmFjayA9ICgpID0+IHtcbiAgICAgICAgICAgIGFjdG9yLmVhY2goYWN0aW9uKTtcbiAgICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjYWxsYmFjayA9ICgpID0+IHtcbiAgICAgICAgICAgIGFjdG9yLnN0YXJ0KGFjdGlvbik7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhbGxiYWNrO1xufVxuXG5jbGFzcyBTZXF1ZW5jZSBleHRlbmRzIEFjdG9yIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcih7XG4gICAgICAgICAgICBjaGVjazogW10sXG4gICAgICAgICAgICBzZXF1ZW5jZTogW10sXG4gICAgICAgICAgICBkdXJhdGlvbjogMCxcbiAgICAgICAgICAgIGN1cnJlbnRUaW1lc3RhbXA6IDAsXG4gICAgICAgICAgICBwcmV2QWN0aW9uRW5kOiAwLFxuICAgICAgICAgICAgb25VcGRhdGU6IGNoZWNrQWN0aW9uc1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBkbyhhY3RvciwgYWN0aW9uKSB7XG4gICAgICAgIGNvbnN0IGlzQ2FsbGJhY2sgPSB1dGlscy5pc0Z1bmMoYWN0b3IpO1xuXG4gICAgICAgIHRoaXMuc2VxdWVuY2UucHVzaCh7XG4gICAgICAgICAgICB0aW1lc3RhbXA6IHRoaXMuY3VycmVudFRpbWVzdGFtcCxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBpc0NhbGxiYWNrID8gYWN0b3IgOiBnZW5lcmF0ZUNhbGxiYWNrKGFjdG9yLCBhY3Rpb24pXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChhY3Rpb24gJiYgYWN0aW9uLmR1cmF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnByZXZBY3Rpb25FbmQgPSB0aGlzLmN1cnJlbnRUaW1lc3RhbXAgKyBhY3Rpb24uZHVyYXRpb247XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzdGFnZ2VyKGl0ZXJhdG9yLCBhY3Rpb24sIHN0YWdnZXJQcm9wcykge1xuICAgICAgICBjb25zdCBudW1JdGVtcyA9IGl0ZXJhdG9yLm1lbWJlcnMubGVuZ3RoO1xuICAgICAgICBjb25zdCBpbnRlcnZhbCA9IHV0aWxzLmlzTnVtKHN0YWdnZXJQcm9wcykgPyBzdGFnZ2VyUHJvcHMgOiBzdGFnZ2VyUHJvcHMuaW50ZXJ2YWwgfHwgMTAwO1xuICAgICAgICBjb25zdCBkdXJhdGlvbiA9IGFjdGlvbi5kdXJhdGlvbiA/IGFjdGlvbi5kdXJhdGlvbiA6IDA7XG5cbiAgICAgICAgdGhpcy5kbyhpdGVyYXRvciwgKCkgPT4ge1xuICAgICAgICAgICAgaXRlcmF0b3Iuc3RhZ2dlcihhY3Rpb24sIHN0YWdnZXJQcm9wcyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucHJldkFjdGlvbkVuZCA9IHRoaXMuY3VycmVudFRpbWVzdGFtcCArIGR1cmF0aW9uICsgKGludGVydmFsICogbnVtSXRlbXMpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGF0KHRpbWVzdGFtcCkge1xuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcodGltZXN0YW1wKSkge1xuICAgICAgICAgICAgdGltZXN0YW1wID0gY2FsY1JlbGF0aXZlKHRoaXMuY3VycmVudFRpbWVzdGFtcCwgdGltZXN0YW1wKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY3VycmVudFRpbWVzdGFtcCA9IHRpbWVzdGFtcDtcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IE1hdGgubWF4KHRoaXMuY3VycmVudFRpbWVzdGFtcCwgdGhpcy5kdXJhdGlvbik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHRoZW4ob2Zmc2V0ID0gXCIrPTBcIikge1xuICAgICAgICB0aGlzLmF0KGNhbGNSZWxhdGl2ZSh0aGlzLnByZXZBY3Rpb25FbmQsIG9mZnNldCkpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgc3VwZXIuc3RhcnQodGltZWxpbmUuZXh0ZW5kKHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiB0aGlzLmR1cmF0aW9uLFxuICAgICAgICAgICAgdmFsdWVzOiB7XG4gICAgICAgICAgICAgICAgcGxheWhlYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudDogMCxcbiAgICAgICAgICAgICAgICAgICAgdG86IHRoaXMuZHVyYXRpb25cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBvblN0YXJ0KCkge1xuICAgICAgICB0aGlzLmNoZWNrID0gdGhpcy5zZXF1ZW5jZS5zbGljZSgpO1xuICAgIH1cblxuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLnNlcXVlbmNlID0gW107XG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSB0aGlzLmN1cnJlbnRUaW1lc3RhbXAgPSB0aGlzLnByZXZBY3Rpb25FbmQgPSAwO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2VxdWVuY2U7Il19