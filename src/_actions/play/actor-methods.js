"use strict";

var parseArgs = require('./parse-args'),
    utils = require('../../inc/utils');

module.exports = {
    /*
        Play an animation

        @param [object || string]: Parameters or preset names
        @param [object]: Override parameters
    */
    play: function () {
        this.action = 'play';
        this.set(parseArgs.apply(this, arguments), 'to');
        return this.start();
    },

    /*
        Check for next steps and perform, stop if not
    */
    next: function () {
        var nextSteps = [{
                key: 'loop',
                callback: this.reset
            }, {
                key: 'yoyo',
                callback: this.reverse
            }, {
                key: 'flip',
                callback: this.flipValues
            }],
            numSteps = nextSteps.length,
            hasNextStep = false,
            i = 0;

        for (; i < numSteps; ++i) {
            if (this.checkNextStep(nextSteps[i].key, nextSteps[i].callback)) {
                hasNextStep = true;
                break;
            }
        }

        if (!hasNextStep && !this.playNext()) {
            this.stop();
        } else {
            this.isActive = true;
        }

        return this;
    },

    /*
        Check next step
        
        @param [string]: Name of step ('yoyo' or 'loop')
        @param [callback]: Function to run if we take this step
    */
    checkNextStep: function (key, callback) {
        var COUNT = 'Count',
            stepTaken = false,
            step = this[key],
            count = this[key + COUNT],
            forever = (step === true);

        if (forever || utils.isNum(step)) {
            ++count;
            this[key + COUNT] = count;
            if (forever || count <= step) {
                callback.call(this);
                stepTaken = true;
            }
        }

        return stepTaken;
    },

    /*
        Next in queue
    */
    playNext: function () {
        var stepTaken = false,
            nextInQueue = this.queue.next(this.playDirection);

        if (utils.isArray(nextInQueue)) {
            this.set(parseArgs.apply(this, nextInQueue), 'to')
                .resetProgress();

            stepTaken = true;
        }

        return stepTaken;
    },

    seek: function (progress) {
        this.elapsed = this.duration * progress;

        if (!this.isActive) {
            this.process.fire();
        }
    }
};