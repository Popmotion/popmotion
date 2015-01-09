"use strict";

var cycl = require('cycl'),
    processor = require('./processor.js'),
    presets = require('./presets.js'),
    rubix = require('./rubix.js'),
    Props = require('./props.js'),
    Values = require('./values.js'),
    Pointer = require('../input/pointer.js'),
    KEY = require('../opts/keys.js'),
    calc = require('../utils/calc.js'),
    utils = require('../utils/utils.js'),
    Data = require('../bits/data.js'),

    Action = function () {
        var self = this;
        
        // Create value manager
        this.values = new Values();
        
        // Create new property manager
        this.props = new Props();

        // Create data store
        this.data = new Data();
        
        // Register process wth cycl
        this.process = cycl.newProcess(function (framestamp, frameDuration) {
            processor.action(self, framestamp, frameDuration);
        });
    };

Action.prototype = {

    // [number]: Progress represented in a range of 0 - 1
    progress: 0,
    
    // [number]: Time elapsed in ms
    elapsed: 0,

    /*
        Play the provided actions as animations
        
        Syntax
            .play(playlist, [override])
                @param [string]: Playlist of presets
                @param [object]: (optional) Override object
                
            .play(params)
                @param [object]: Action properties
                
        @return [Action]
    */
    play: function (defs, override) {
        return this.start(KEY.RUBIX.TIME, presets.createBase(defs, override));
    },
    
    /*
        Track values to mouse, touch or custom Input
        
        Syntax
            .track(preset, [override], input)
                @param [string]: Name of preset
                @param [object]: (optional) Override object
                @param [event || Input]: Input or event to start tracking
                
            .track(params, input)
                @param [object]: Action properties
                @param [event || Input]: Input or event to start tracking
                
        @return [Action]
    */
    track: function (defs) {
        var hasAllArgs = (arguments[2] !== undefined),
            input = hasAllArgs ? arguments[2] : arguments[1],
            override = hasAllArgs ? arguments[1] : {},
            base = presets.createBase(defs, override);
        
        // If we have an input, check if it's a custom input.
        // Create a new pointer if it isn't
        if (input) {
            base.input = (input.current) ? input : new Pointer(input);
            base.inputOrigin = base.input.get();
        }
        
        return this.start(KEY.RUBIX.INPUT, base);
    },

    /*
        Run Action indefinitely
        
        Syntax
            .run(preset, [override])
                @param [string]: Name of preset
                @param [object]: (optional) Override object
                
            .run(params)
                @param [object]: Action properties
                
        @return [Action]
    */
    run: function (defs, override) {
        return this.start(KEY.RUBIX.RUN, presets.createBase(defs, override));
    },
    
    /*
        Start Action

        @param [string]: Name of processing type to sue
        @param [object]: Base Action properties to apply
        @return [Action]
    */
    start: function (processType, base) {
        this.resetProgress();
        this.change(processType, base);
        this.isActive(true);
        this.started = utils.currentTime() + this.props.get('delay');
        this.framestamp = this.started;
        this.firstFrame = true;
        
        this.process.start();
        
        return this;
    },
    
    /*
        Stop current Action process
    */
    stop: function () {
        this.isActive(false);
        this.process.stop();
        
        return this;
    },
    
    /*
        Pause current Action
    */
    pause: function () {
        this.stop();
        
        return this;
    },
    
    /*
        Resume a paused Action
    */
    resume: function () {
        this.started = utils.currentTime() - this.elapsed;
        this.framestamp = this.started;
        
        this.process.start();
        
        return this;
    },
    
    /*
        Reset Action progress and values
    */
    reset: function () {
        this.resetProgress();
        this.values.reset();
        
        return this;
    },
    
    /*
	    Reset Action progress
    */
    resetProgress: function () {
        this.progress = 0;
        this.elapsed = 0;
        this.started = utils.currentTime();
    },
    
    /*
	    Reverse Action progress and values
    */
    reverse: function () {
        this.progress = calc.difference(this.progress, 1);
        this.elapsed = calc.difference(this.elapsed, this.props.get('duration'));
        this.values.reverse();

        return this;
    },
    
    /*
        Check for next steps and perform, stop if not
    */
    next: function () {
        var nexts = [{
                key: 'loop',
                callback: this.reset
            }, {
                key: 'yoyo',
                callback: this.reverse
            }],
            possibles = nexts.length,
            hasNext = false;
            
        for (var i = 0; i < possibles; ++i) {
            if (this.checkNextStep(nexts[i].key, nexts[i].callback)) {
                hasNext = true;
                break;
            }
        }

        if (!hasNext && !this.playNext()) {
            this.stop();
        }
    },
    
    /*
        Check next step
        
        @param [string]: Name of step ('yoyo' or 'loop')
        @param [callback]: Function to run if we take this step
    */
    checkNextStep: function (key, callback) {
        var stepTaken = false,
            step = this.props.get(key),
            count = this.props.get(key + 'Count'),
            forever = (step === true);
            
        if (forever || utils.isNum(step)) {
            ++count;
            this.props.set(key + 'Count', count);
            
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
            playlist = this.props.get('playlist'),
            playlistLength = playlist.length,
            playhead = this.props.get('playhead'),
            next = {};

        // Check we have a playlist
        if (playlistLength > 1) {
            ++playhead;
            
            if (playhead < playlistLength) {
                next = presets.getDefined(playlist[playhead]);
                next.playhead = playhead;
                this.change(KEY.RUBIX.TIME, next);
                this.reset();
                stepTaken = true;
            }
        }

        return stepTaken;
    },
    
    setValue: function (key, value) {
        this.values.set(key, value);
    },
    
    getValue: function (key) {
        return this.values.get(key);
    },
    
    setProp: function (key, value) {
        this.props.set(key, value);
    },
    
    getProp: function (key) {
        return this.props.get(key);
    },
    
    /*
        Is Action active?
        
        @param [boolean] (optional): If provided, will set action to active/inactive
        @return [boolean]: Active status
    */
    isActive: function (active) {
        if (active !== active) {
            this.active = active;
        }
        
        return this.active;
    },
    
    /*
        Change Action properties
        
        @param [string]: Type of processing rubix to use
        @param [object]: Base properties of new input
    */
    change: function (processType, base) {
        // Assign the processing rubix
        base.rubix = rubix[processType];

        this.props.apply(base);
        this.values.apply(base.values, this.props);

        this.origin = {};
        // Create origins
        for (var key in this.values) {
            if (this.values.hasOwnProperty(key)) {
                this.origin[key] = this.values[key].current;
            }
        }
    }
    
};

module.exports = Action;