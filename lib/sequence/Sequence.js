'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var Actor = require('../actor/Actor');
var Tween = require('../actions/Tween');
var calcRelative = require('../inc/calc').relativeValue;
var utils = require('../inc/utils');
var isFunc = utils.isFunc;
var isString = utils.isString;

var timeline = new Tween({
    values: {
        playhead: {
            ease: 'linear',
            current: 0,
            to: 0
        }
    }
});

function checkActions(_ref, sequence) {
    var playhead = _ref.playhead;

    sequence.check.forEach(function (toCheck, i) {
        if (playhead >= toCheck.timestamp) {
            toCheck.callback();
            sequence.check.splice(i, -1);
        }
    });
}

function generateCallback(actor, action) {
    var callback;

    if (actor.each) {
        callback = function () {
            actor.each(function (actor) {
                actor.start(action);
            });
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
            labels: {},
            check: [],
            sequence: [],
            currentTimestamp: 0,
            onUpdate: checkActions
        });
    }

    _createClass(Sequence, [{
        key: 'add',
        value: function add(actor, action) {
            var isCallback = isFunc(actor),
                callback = isCallback ? actor : generateCallback(actor, action),
                offset = arguments[arguments.length - 1],
                timestamp = isString(offset) ? calcRelative(this.currentTimestamp, offset) : this.currentTimestamp;

            this.sequence.push({ timestamp: timestamp, callback: callback });

            if (action && action.duration) {
                this.currentTimestamp = timestamp + action.duration;
            }

            return this;
        }
    }, {
        key: 'start',
        value: function start() {
            _get(Object.getPrototypeOf(Sequence.prototype), 'start', this).call(this, timeline.extend({
                duration: this.currentTimestamp,
                values: {
                    playhead: this.currentTimestamp
                }
            }));

            this.currentTimestamp = 0;
            return this;
        }
    }, {
        key: 'onStart',
        value: function onStart() {
            this.check = this.sequence.slice();
        }
    }, {
        key: 'label',
        value: function label(name, timestamp) {
            this.labels[name] = timestamp;
        }
    }]);

    return Sequence;
})(Actor);

module.exports = Sequence;