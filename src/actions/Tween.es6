let Action = require('./Action.es6'),
    calc = require('../inc/calc'),
    utils = require('../inc/utils'),
    each = utils.each,
    presetEasing = require('./tween/preset-easing'),

    nextSteps = {
        loop: 'reset',
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
        @param [number]: Amplify progress out of specified range
        @return [number]: Value of eased progress in range
    */  
    ease = function (progress, from, to, ease, escapeAmp) {
        var progressLimited = calc.restricted(progress, 0, 1),
            easingFunction = utils.isString(ease) ? presetEasing[ease] : ease;

        return calc.valueEased(progressLimited, from, to, easingFunction);
    };

const COUNT = 'count';

class Tween extends Action {
    getName() {
        return 'tween';
    }

    getDefaultProps() {
        return {
            delay: 0,
            dilate: 1,
            duration: 300,
            loop: false,
            yoyo: false,
            flip: false,
            playDirection: 1
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
        if (frameDuration) {
            actor.elapsed += (frameDuration * actor.dilate) * actor.playDirection;
        }

        actor.hasEnded = true;
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
            progressTarget = (actor.playDirection === 1) ? 1 : 0,
            newValue = value.current,
            progress;

        // If this value has a to property, otherwise we just return current value
        if (target !== undefined) {
            progress = calc.restricted(calc.progress(actor.elapsed - value.delay, value.duration) - value.stagger, 0, 1);

            // Mark Action as NOT ended if still in progress
            if (progress !== progressTarget) {
                actor.hasEnded = false;
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
        if (actor.hasEnded) {
            each(nextSteps, (name, action) => {
                if (this.checkNextStep(actor, name, actor[action])) {
                    actor.hasEnded = false;
                    actor.hasChanged = true;
                    return false;
                }
            });
        }

        return actor.hasEnded;
    }

    checkNextStep(actor, name, action) {
        var stepTaken = false,
            step = actor[name],
            count = actor[name + COUNT] || 0,
            forever = (step === true);

        if (forever || utils.isNum(step)) {
            ++count;
            actor[name + COUNT] = count;

            if (forever || count <= step) {
                action.call(actor);
                stepTaken = true;
            }
        }

        return stepTaken;
    }
}

module.exports = Tween;