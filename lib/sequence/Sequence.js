'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

        _get(Object.getPrototypeOf(Sequence.prototype), 'constructor', this).call(this, {
            check: [],
            sequence: [],
            duration: 0,
            currentTimestamp: 0,
            prevActionEnd: 0,
            onUpdate: checkActions
        });
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

            this['do'](iterator, function () {
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