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
            callback = isCallback ? actor : () => { actor.start(action); },
            timestamp = arguments[arguments.length - 1];

        timestamp = utils.isString(timestamp) ? calcRelative(this.currentTimestamp, timestamp) : timestamp;

        this.sequence.push({
            timestamp: timestamp || this.currentTimestamp,
            callback
        });
        
        return this;
    }

    start() {
        super.start(timeline);
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