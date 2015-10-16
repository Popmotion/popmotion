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

function checkActions({ playhead }, sequence) {
    var i = sequence.check.length;

    while (i--) {
        let toCheck = sequence.check[i];

        if (playhead >= toCheck.timestamp) {
            toCheck.callback();
            sequence.check.splice(i, 1);
        }
    }
}

function generateCallback(actor, action) {
    var callback;

    if (actor.each) {
        callback = () => {
            actor.each(action);
        };
    } else {
        callback = () => {
            actor.start(action);
        };
    }

    return callback;
}

class Sequence extends Actor {

    constructor() {
        super({
            check: [],
            sequence: [],
            duration: 0,
            currentTimestamp: 0,
            prevActionEnd: 0,
            onUpdate: checkActions
        });
    }

    do(actor, action) {
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

    stagger(iterator, action, staggerProps) {
        var numItems = iterator.members.length,
            interval = utils.isNum(staggerProps) ? staggerProps : staggerProps.interval || 100,
            duration = action.duration ? action.duration : 0;

        this.do(iterator, () => {
            iterator.stagger(action, staggerProps);
        });

        this.prevActionEnd = this.currentTimestamp + duration + (interval * numItems);

        return this;
    }

    at(timestamp) {
        if (utils.isString(timestamp)) {
            timestamp = calcRelative(this.currentTimestamp, timestamp);
        }

        this.currentTimestamp = timestamp;
        this.duration = Math.max(this.currentTimestamp, this.duration);
        return this;
    }

    then(offset = "+=0") {
        this.at(calcRelative(this.prevActionEnd, offset));
        return this;
    }

    start() {
        super.start(timeline.extend({
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

    onStart() {
        this.check = this.sequence.slice();
    }

    clear() {
        this.sequence = [];
        this.duration = this.currentTimestamp = this.prevActionEnd = 0;
        return this;
    }
}

module.exports = Sequence;