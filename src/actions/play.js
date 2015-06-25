/*
    Play action
    
    Translate numbers for a set amount of time, applying easing if defined
*/
"use strict";

var calc = require('../inc/calc'),
    utils = require('../inc/utils'),
    easingManager = require('./play/easing-manager'),

    playAction = {

        // [object] Default Action properties
        actionDefaults: require('./play/default-action-props'),

        // [boolean] Prevent Redshift from autogenerating Element.prototype.play()
        surpressMethod: true,

        // [object] Methods to add to Element.prototype
        elementMethods: require('./play/element-methods'),

        /*
            Update Action elapsed time
            
            @param [object]: Action properties
            @param [number]: Timestamp of current frame
        */
        onFrameStart: function (frameDuration) {
            this.elapsed += (frameDuration * this.dilate) * this.playDirection;
            this.hasEnded = true;
        },

        /*
            Calculate progress of value based on time elapsed,
            value delay/duration/stagger properties

            @param [string]: Name of value being processed
            @param [object]: Value state and properties
            @return [number]: Calculated value
        */
        process: function (key, value) {
            var target = value.to,
                progressTarget = (this.playDirection === 1) ? 1 : 0,
                newValue = value.current,
                progress;

            // If this value has a to property, otherwise we just return current value
            if (target !== undefined) {
                progress = calc.restricted(calc.progress(this.elapsed - value.delay, value.duration) - value.stagger, 0, 1);
                
                // Mark Action as NOT ended if still in progress
                if (progress !== progressTarget) {
                    this.hasEnded = false;

                // Or, if we have ended, clear value target
                } else {
                    value.to = undefined;
                }

                // Step progress if we're stepping
                if (value.steps) {
                    progress = utils.stepProgress(progress, value.steps);
                }

                // Ease value
                newValue = easingManager.withinRange(progress, value.origin, target, value.ease);
            }

            return newValue;
        },
        
        /*
            Return hasEnded property
            
            @return [boolean]: Have all Values hit 1 progress?
        */
        hasEnded: function () {
            return this.hasEnded;
        }
    };

module.exports = playAction;
