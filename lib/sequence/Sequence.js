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
        var numItems = iterator.members.length,
            interval = utils.isNum(staggerProps) ? staggerProps : staggerProps.interval || 100,
            duration = action.duration ? action.duration : 0;

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
})(Actor);

module.exports = Sequence;