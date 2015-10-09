'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Actor = require('../actor/Actor');
var Tween = require('../actions/Tween');
var calcRelative = require('../inc/calc').relativeValue;

var playhead = new Tween({
    values: {
        playhead: {
            ease: 'linear',
            current: 0,
            to: 0
        }
    }
});

var Sequence = (function () {
    function Sequence() {
        var _this = this;

        _classCallCheck(this, Sequence);

        var actor = new Actor({
            onUpdate: function onUpdate(output) {
                console.log(_this.check);
                _this.check.forEach(function (toCheck, i) {
                    if (output.elapsed > toCheck.timestamp) {
                        _this.execute(toCheck.action);
                        _this.check.splice(i, 1);
                    }
                });
            }
        });

        this.labels = {};
        this.check = [];
        this.clear();
        this.currentTimestamp = 0;
        this.timeline = actor.controls(playhead);
        this.playhead = this.timeline.action.values.playhead;
    }

    _createClass(Sequence, [{
        key: 'add',
        value: function add(actor, action, timestamp) {
            this.sequence.push({
                timestamp: timestamp || this.currentTimestamp,
                action: action,
                actor: actor
            });

            if (action.duration) {
                var newDuration = this.currentTimestamp += action.duration;
                this.playhead.to = this.playhead.duration = newDuration;
            }

            return this;
        }
    }, {
        key: 'clear',
        value: function clear() {
            this.sequence = [];
            return this;
        }
    }, {
        key: 'start',
        value: function start() {
            this.check = this.sequence.splice();
            console.log(this.check);
            this.timeline.start();
            return this;
        }
    }, {
        key: 'stop',
        value: function stop() {
            this.timeline.stop();
            return this;
        }
    }, {
        key: 'pause',
        value: function pause() {
            this.timeline.pause();
            return this;
        }
    }, {
        key: 'resume',
        value: function resume() {
            this.timeline.resume();
            return this;
        }
    }, {
        key: 'label',
        value: function label(name, timestamp) {
            this.labels[name] = timestamp;
        }
    }]);

    return Sequence;
})();

module.exports = Sequence;