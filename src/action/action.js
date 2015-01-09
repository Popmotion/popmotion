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
        self.values = new Values();
        
        // Create new property manager
        self.props = new Props();

        // Create data store
        self.data = new Data();
        
        // Register process wth cycl
        self.process = cycl.newProcess(function (framestamp, frameDuration) {
	        if (self.active) {
            	processor.action(self, framestamp, frameDuration);
	        }
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
	    var self = this;

        self.resetProgress();
        self.change(processType, base);
        self.isActive(true);
        self.started = utils.currentTime() + self.props.get('delay');
        self.framestamp = self.started;
        self.firstFrame = true;
        
        self.process.start();
        
        return self;
    },
    
    /*
        Stop current Action process
    */
    stop: function () {
	    var self = this;

        self.isActive(false);
        self.process.stop();

        return self;
    },
    
    /*
        Pause current Action
    */
    pause: function () {
	    var self = this;

        self.stop();
        
        return self;
    },
    
    /*
        Resume a paused Action
    */
    resume: function () {
	    var self = this;

        self.started = utils.currentTime() - self.elapsed;
        self.framestamp = self.started;
        
        self.process.start();
        
        return self;
    },
    
    /*
        Reset Action progress and values
    */
    reset: function () {
	    var self = this;

        self.resetProgress();
        self.values.reset();
        
        return self;
    },
    
    /*
	    Reset Action progress
    */
    resetProgress: function () {
	    var self = this;

        self.progress = 0;
        self.elapsed = 0;
        self.started = utils.currentTime();
        
        return self;
    },
    
    /*
	    Reverse Action progress and values
    */
    reverse: function () {
	    var self = this;

        self.progress = calc.difference(self.progress, 1);
        self.elapsed = calc.difference(self.elapsed, self.props.get('duration'));
        self.values.reverse();

        return self;
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
        if (active !== undefined) {
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
	    var values = {};

        // Assign the processing rubix
        base.rubix = rubix[processType];

        this.props.apply(base);
        this.values.apply(base.values, this.props);
        values = this.values.getAll();

        this.origin = {};
        // Create origins
        for (var key in values) {
            if (values.hasOwnProperty(key)) {
                this.origin[key] = values[key].current;
            }
        }
    }
    
};

module.exports = Action;