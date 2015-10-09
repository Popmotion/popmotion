var Actor = require('../actor/Actor');
var Tween = require('../actions/Tween');
var calcRelative = require('../inc/calc').relativeValue;

var playhead = new Tween({
    values: {
        playhead: {
            current: 0,
            to: 0
        }
    }
});

class Sequence {

    constructor() {
        var actor = new Actor({
            onUpdate: (output) => {
                console.log(output)
                this.check.forEach((toCheck, i) => {
                    if (output.elapsed > toCheck.timestamp) {
                        this.execute(toCheck.action);
                        this.check.splice(i, 1);
                    }
                });
            }
        });

        this.labels = {};
        this.check = [];
        this.clear();
        this.currentTimestamp = 0;
        this.timeline = actor.controls(playhead);
    }

    add(actor, action, timestamp) {
        this.sequence.push({
            timestamp: timestamp || this.currentTimestamp,
            action,
            actor
        });

        if (action.duration) {
            this.currentTimestamp += action.duration;
        }

        return this;
    }

    clear() {
        this.sequence = [];
        return this;
    }

    start() {
        this.timeline.start();
        return this;
    }

    stop() {
        this.timeline.stop();
        return this;
    }

    pause() {
        this.timeline.pause();
        return this;
    }

    resume() {
        this.timeline.resume();
        return this;
    }

    label(name, timestamp) {
        this.labels[name] = timestamp;
    }
}

module.exports = Sequence;