let Action = require('./Action'),
    calc = require('../inc/calc'),
    utils = require('../inc/utils'),
    each = utils.each,
    presetEasing = require('./tween/preset-easing'),
    valueOps = require('../actor/value-operations'),
    TweenControls = require('./tween/TweenControls'),

    nextSteps = {
        loop: 'restart',
        yoyo: 'reverse',
        flip: 'flipValues'
    },

    /*
        Ease value within ranged parameters
        
        @param [number]: Progress between 0 and 1
        @param [number]: Value of 0 progress
        @param [number]: Value of 1 progress
        @param [string || function]: Name of preset easing
            to use or generated easing function
        @return [number]: Value of eased progress in range
    */  
    ease = function (progress, from, to, ease) {
        var progressLimited = calc.restricted(progress, 0, 1),
            easingFunction = utils.isString(ease) ? presetEasing[ease] : ease;

        return calc.valueEased(progressLimited, from, to, easingFunction);
    };

const COUNT = 'count';

class Tween extends Action {
    getControls() {
        return TweenControls;
    }
    
    getDefaultProps() {
        return {
            delay: 0,
            dilate: 1,
            duration: 300,
            loop: false,
            yoyo: false,
            flip: false,
            playDirection: 1,
            ended: true,
            elapsed: 0
        };
    }

    getDefaultValue() {
        return {
            delay: 0,
            duration: 300,
            ease: 'easeOut',
            stagger: 0,
            steps: 0,
            to: 0,
            round: false
        };
    }

    getDefaultValueProp() {
        return 'to';
    }

    /*
        Update Action elapsed time
        
        @param [object]: Action properties
        @param [number]: Timestamp of current frame
    */
    onFrameStart(actor, frameDuration) {
        this.elapsed = this.elapsed || 0;

        if (frameDuration) {
            this.elapsed += (frameDuration * actor.dilate) * this.playDirection;
            this.ended = true;
        }
    }

    /*
        Calculate progress of value based on time elapsed,
        value delay/duration/stagger properties

        @param [Actor]
        @param [object]: Value state and properties
        @return [number]: Calculated value
    */
    process(actor, value) {
        var target = value.to,
            progressTarget = (this.playDirection === 1) ? 1 : 0,
            newValue = value.current,
            progress;

        // If this value has a to property, otherwise we just return current value
        if (target !== undefined) {
            progress = calc.restricted(calc.progress(this.elapsed - value.delay, value.duration) - value.stagger, 0, 1);

            // Mark Action as NOT ended if still in progress
            if (progress !== progressTarget) {
                this.ended = false;
            }

            // Step progress if we're stepping
            if (value.steps) {
                progress = utils.stepProgress(progress, value.steps);
            }

            // Ease value
            newValue = ease(progress, value.origin, target, value.ease);
        }

        return newValue;
    }

    /*
        If this tween has ended, check if we loop/yoyo/flip
        
        @return [boolean]: Has this tween really really ended?
    */
    hasEnded(actor) {
        if (this.ended) {
            each(nextSteps, (name, methodName) => {
                if (this.checkNextStep(actor, name, this[methodName])) {
                    this.ended = false;
                    actor.hasChanged = true;
                    return false;
                }
            });
        }

        return this.ended;
    }

    checkNextStep(actor, name, method) {
        var stepTaken = false,
            step = this[name],
            count = this[name + COUNT] || 0,
            forever = (step === true);

        if (forever || utils.isNum(step)) {
            ++count;
            this[name + COUNT] = count;

            if (forever || count <= step) {
                method.call(this, actor);
                stepTaken = true;
            }
        }

        return stepTaken;
    }

    flipValues(actor) {
        var actorValues = actor.values;
        this.elapsed = this.duration - this.elapsed;

        each(this.values, (key) => {
            let value = actorValues[key];

            if (value.children) {
                each(value.children, (childKey) => {
                    valueOps.flip(actorValues[key + childKey]);
                });
            }

            valueOps.flip(value);
        });
    }

    reverse() {
        this.playDirection *= -1;
    }

    restart() {
        this.elapsed = (this.playDirection === 1) ? 0 : this.duration;
        this.started = utils.currentTime();
    }
}

module.exports = Tween;