/*
    Play rubix
    
    Translate numbers for a set amount of time, applying easing if defined
*/
"use strict";

var calc = require('../inc/calc'),
    utils = require('../inc/utils'),
    easingManager = require('./play/easing-manager'),
    presetManager = require('../element/preset-manager'),

    playAction = {

        // Prevent Redshift from autogenerating 
        surpressMethod: true,

        elementMethods: {
            /*
                Play an animation

                @param [object || string]: Parameters or preset names
                @param [object]: Override parameters
            */
            play: function () {
                var action = 'play';

                // If there's an active Action, and its play, add to queue
                if (this.isActive && this.action === action) {
                    this.queue.add.apply(this.queue, arguments);
                
                // Else, start playing
                } else {
                    this.set(playAction.parse.apply(this, arguments), 'to');
                    this.action = action;
                    this.start();
                }

                return this;
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
                Next in playlist
            */
            playNext: function () {
                var stepTaken = false,
                    nextInQueue = this.queue.next(this.playDirection);

                if (utils.isArray(nextInQueue)) {
                    this.set(playAction.parse.apply(this, nextInQueue), 'to')
                        .reset();

                    stepTaken = true;
                }

                return stepTaken;
            }
        },

        parse: function (base, override) {
            var props = {},
                playlist = [],
                argsAsArray = [],
                i = 0,
                playlistLength;

            // If this is a playlist reference, add presets to queue
            if (typeof base === 'string') {
                playlist = base.split(' ');
                playlistLength = playlist.length;
                props = presetManager.getDefined(playlist[0]);

                // If we've got multiple playlists, loop through and add each to the queue
                if (playlistLength > 1) {
                    argsAsArray = [].slice.call(arguments);

                    for (; i < playlistLength; i++) {
                        argsAsArray.shift();
                        argsAsArray.unshift(playlist[i]);
                        this.queue.add.apply(this.queue, argsAsArray);
                    }
                }

            // Or, this is a straight set of properties
            } else {
                props = base;
            }

            // Override properties with second arg if it's an object
            if (typeof override === 'object') {
                props = utils.merge(props, override);
            }

            // Default .play properties
            props.loopCount = props.yoyoCount = props.flipCount = 0;
            props.playDirection = 1;

            return props;
        },

        /*
            Update Action elapsed time
            
            @param [object]: Action properties
            @param [number]: Timestamp of current frame
        */
        updateInput: function (frameDuration) {
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
                progressTarget = (this.playDirection === 1) ? 1 : 0;
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
                newValue = easing.withinRange(progress, value.origin, target, value.ease);
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
