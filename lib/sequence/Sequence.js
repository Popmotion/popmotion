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

function checkActions(_ref, sequence) {
    var playhead = _ref.playhead;

    var i = sequence.check.length;

    while (i--) {
        var toCheck = sequence.check[i];

        if (playhead >= toCheck.timestamp) {
            toCheck.callback();
            sequence.check.splice(i, 1);
        }
    }
}

function generateCallback(actor, action) {
    var callback;

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
}

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
            var numItems = iterator.members.length,
                interval = utils.isNum(staggerProps) ? staggerProps : staggerProps.interval || 100,
                duration = action.duration ? action.duration : 0;

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXF1ZW5jZS9TZXF1ZW5jZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUN0QyxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUN4QyxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDcEMsSUFBSSxZQUFZLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLGFBQWEsQ0FBQzs7QUFFeEQsSUFBSSxRQUFRLEdBQUcsSUFBSSxLQUFLLENBQUM7QUFDckIsUUFBSSxFQUFFLFFBQVE7QUFDZCxVQUFNLEVBQUU7QUFDSixnQkFBUSxFQUFFLENBQUM7S0FDZDtDQUNKLENBQUMsQ0FBQzs7QUFFSCxTQUFTLFlBQVksT0FBZSxRQUFRLEVBQUU7UUFBdEIsUUFBUSxRQUFSLFFBQVE7O0FBQzVCLFFBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDOztBQUU5QixXQUFPLENBQUMsRUFBRSxFQUFFO0FBQ1IsWUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzs7QUFFaEMsWUFBSSxRQUFRLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTtBQUMvQixtQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQ25CLG9CQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDL0I7S0FDSjtDQUNKOztBQUVELFNBQVMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRTtBQUNyQyxRQUFJLFFBQVEsQ0FBQzs7QUFFYixRQUFJLEtBQUssQ0FBQyxJQUFJLEVBQUU7QUFDWixnQkFBUSxHQUFHLFlBQU07QUFDYixpQkFBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztT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QUNKO2FBQ0osQ0FBQyxFQUFFOztBQUVKLG1CQUFPLElBQUksQ0FBQztTQUNmOzs7a0NBRVM7QUFDTixnQkFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3RDOzs7Z0NBRU87QUFDSixnQkFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7QUFDbkIsZ0JBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO0FBQy9ELG1CQUFPLElBQUksQ0FBQztTQUNmOzs7V0EvRUMsUUFBUTtHQUFTLEtBQUs7O0FBa0Y1QixNQUFNLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyIsImZpbGUiOiJTZXF1ZW5jZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBBY3RvciA9IHJlcXVpcmUoJy4uL2FjdG9yL0FjdG9yJyk7XG52YXIgVHdlZW4gPSByZXF1aXJlKCcuLi9hY3Rpb25zL1R3ZWVuJyk7XG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcbnZhciBjYWxjUmVsYXRpdmUgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpLnJlbGF0aXZlVmFsdWU7XG5cbnZhciB0aW1lbGluZSA9IG5ldyBUd2Vlbih7XG4gICAgZWFzZTogJ2xpbmVhcicsXG4gICAgdmFsdWVzOiB7XG4gICAgICAgIHBsYXloZWFkOiAwXG4gICAgfVxufSk7XG5cbmZ1bmN0aW9uIGNoZWNrQWN0aW9ucyh7IHBsYXloZWFkIH0sIHNlcXVlbmNlKSB7XG4gICAgdmFyIGkgPSBzZXF1ZW5jZS5jaGVjay5sZW5ndGg7XG5cbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgIGxldCB0b0NoZWNrID0gc2VxdWVuY2UuY2hlY2tbaV07XG5cbiAgICAgICAgaWYgKHBsYXloZWFkID49IHRvQ2hlY2sudGltZXN0YW1wKSB7XG4gICAgICAgICAgICB0b0NoZWNrLmNhbGxiYWNrKCk7XG4gICAgICAgICAgICBzZXF1ZW5jZS5jaGVjay5zcGxpY2UoaSwgMSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlQ2FsbGJhY2soYWN0b3IsIGFjdGlvbikge1xuICAgIHZhciBjYWxsYmFjaztcblxuICAgIGlmIChhY3Rvci5lYWNoKSB7XG4gICAgICAgIGNhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgYWN0b3IuZWFjaChhY3Rpb24pO1xuICAgICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgYWN0b3Iuc3RhcnQoYWN0aW9uKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2FsbGJhY2s7XG59XG5cbmNsYXNzIFNlcXVlbmNlIGV4dGVuZHMgQWN0b3Ige1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKHtcbiAgICAgICAgICAgIGNoZWNrOiBbXSxcbiAgICAgICAgICAgIHNlcXVlbmNlOiBbXSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAwLFxuICAgICAgICAgICAgY3VycmVudFRpbWVzdGFtcDogMCxcbiAgICAgICAgICAgIHByZXZBY3Rpb25FbmQ6IDAsXG4gICAgICAgICAgICBvblVwZGF0ZTogY2hlY2tBY3Rpb25zXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGRvKGFjdG9yLCBhY3Rpb24pIHtcbiAgICAgICAgdmFyIGlzQ2FsbGJhY2sgPSB1dGlscy5pc0Z1bmMoYWN0b3IpO1xuXG4gICAgICAgIHRoaXMuc2VxdWVuY2UucHVzaCh7XG4gICAgICAgICAgICB0aW1lc3RhbXA6IHRoaXMuY3VycmVudFRpbWVzdGFtcCxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBpc0NhbGxiYWNrID8gYWN0b3IgOiBnZW5lcmF0ZUNhbGxiYWNrKGFjdG9yLCBhY3Rpb24pXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChhY3Rpb24gJiYgYWN0aW9uLmR1cmF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnByZXZBY3Rpb25FbmQgPSB0aGlzLmN1cnJlbnRUaW1lc3RhbXAgKyBhY3Rpb24uZHVyYXRpb247XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzdGFnZ2VyKGl0ZXJhdG9yLCBhY3Rpb24sIHN0YWdnZXJQcm9wcykge1xuICAgICAgICB2YXIgbnVtSXRlbXMgPSBpdGVyYXRvci5tZW1iZXJzLmxlbmd0aCxcbiAgICAgICAgICAgIGludGVydmFsID0gdXRpbHMuaXNOdW0oc3RhZ2dlclByb3BzKSA/IHN0YWdnZXJQcm9wcyA6IHN0YWdnZXJQcm9wcy5pbnRlcnZhbCB8fCAxMDAsXG4gICAgICAgICAgICBkdXJhdGlvbiA9IGFjdGlvbi5kdXJhdGlvbiA/IGFjdGlvbi5kdXJhdGlvbiA6IDA7XG5cbiAgICAgICAgdGhpcy5kbyhpdGVyYXRvciwgKCkgPT4ge1xuICAgICAgICAgICAgaXRlcmF0b3Iuc3RhZ2dlcihhY3Rpb24sIHN0YWdnZXJQcm9wcyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucHJldkFjdGlvbkVuZCA9IHRoaXMuY3VycmVudFRpbWVzdGFtcCArIGR1cmF0aW9uICsgKGludGVydmFsICogbnVtSXRlbXMpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGF0KHRpbWVzdGFtcCkge1xuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcodGltZXN0YW1wKSkge1xuICAgICAgICAgICAgdGltZXN0YW1wID0gY2FsY1JlbGF0aXZlKHRoaXMuY3VycmVudFRpbWVzdGFtcCwgdGltZXN0YW1wKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY3VycmVudFRpbWVzdGFtcCA9IHRpbWVzdGFtcDtcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IE1hdGgubWF4KHRoaXMuY3VycmVudFRpbWVzdGFtcCwgdGhpcy5kdXJhdGlvbik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHRoZW4ob2Zmc2V0ID0gXCIrPTBcIikge1xuICAgICAgICB0aGlzLmF0KGNhbGNSZWxhdGl2ZSh0aGlzLnByZXZBY3Rpb25FbmQsIG9mZnNldCkpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgc3VwZXIuc3RhcnQodGltZWxpbmUuZXh0ZW5kKHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiB0aGlzLmR1cmF0aW9uLFxuICAgICAgICAgICAgdmFsdWVzOiB7XG4gICAgICAgICAgICAgICAgcGxheWhlYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudDogMCxcbiAgICAgICAgICAgICAgICAgICAgdG86IHRoaXMuZHVyYXRpb25cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBvblN0YXJ0KCkge1xuICAgICAgICB0aGlzLmNoZWNrID0gdGhpcy5zZXF1ZW5jZS5zbGljZSgpO1xuICAgIH1cblxuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLnNlcXVlbmNlID0gW107XG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSB0aGlzLmN1cnJlbnRUaW1lc3RhbXAgPSB0aGlzLnByZXZBY3Rpb25FbmQgPSAwO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2VxdWVuY2U7Il19