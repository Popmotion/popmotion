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

function checkActions({ playhead }, sequence, action) {
    sequence.check.forEach((toCheck, i) => {
        if (playhead > toCheck.timestamp) {
            sequence.execute();
            sequence.check.splice(i, -1);
        }
    });
};

class Sequence extends Actor {

    constructor() {
        super({
            labels: {},
            check: [],
            sequence: [],
            currentTimestamp: 0,
            onUpdate: checkActions
        });

        this.timeline = undefined;
    }

    add(actor, action, timestamp) {
        this.sequence.push({
            timestamp: timestamp || this.currentTimestamp,
            action,
            actor
        });

        if (action.duration) {
            let newDuration = this.currentTimestamp += action.duration;
            this.playhead.to = this.playhead.duration = newDuration;
        }

        return this;
    }

    clear() {
        this.sequence = [];
        return this;
    }

    start() {
        this.check = this.sequence.slice();
        this.timeline.start();
        return this.timeline;
    }

    label(name, timestamp) {
        this.labels[name] = timestamp;
    }

    execute(actor, action) {
        actor.start(action);
    }
}

module.exports = Sequence;