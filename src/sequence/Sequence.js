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

function checkActions({ playhead }, sequence) {
    sequence.check.forEach((toCheck, i) => {
        if (playhead >= toCheck.timestamp) {
            toCheck.callback();
            sequence.check.splice(i, -1);
        }
    });
}

function generateCallback(actor, action) {
    var callback;

    if (actor.each) {
        callback = () => {
            actor.each((actor) => {
                actor.start(action);
            });
        }
    } else {
        callback = () => {
            actor.start(action);
        }
    }

    return callback;
}

class Sequence extends Actor {

    constructor() {
        super({
            labels: {},
            check: [],
            sequence: [],
            currentTimestamp: 0,
            onUpdate: checkActions
        });
    }

    add(actor, action) {
        var isCallback = isFunc(actor),
            callback = isCallback ? actor : generateCallback(actor, action),
            offset = arguments[arguments.length - 1],
            timestamp = isString(offset) ? calcRelative(this.currentTimestamp, offset) : this.currentTimestamp;

        this.sequence.push({ timestamp, callback });

        if (action && action.duration) {
            this.currentTimestamp = timestamp + action.duration;
        }

        return this;
    }

    start() {
        super.start(timeline.extend({
            duration: this.currentTimestamp,
            values: {
                playhead: this.currentTimestamp
            }
        }));

        this.currentTimestamp = 0;
        return this;
    }

    onStart() {
        this.check = this.sequence.slice();
    }

    label(name, timestamp) {
        this.labels[name] = timestamp;
    }
}

module.exports = Sequence;