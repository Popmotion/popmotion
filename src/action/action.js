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

    Action = function (def, override) {
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
        
        self.set(def, override);
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
        this.set(defs, override);
        return this.start(KEY.RUBIX.TIME);
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
        this.set(defs, override);
        return this.start(KEY.RUBIX.RUN);
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
    track: function () {
        var args = arguments,
            argsLength = args.length,
            defs = (argsLength > 1) ? args[0] : undefined,
            override = (argsLength === 3) ? args[1] : undefined,
            input = args[argsLength - 1];
        
        if (!input.current) {
            input = new Pointer(input);
        }

        this.set(defs, override, input);

        return this.start(KEY.RUBIX.INPUT);
    },
    
    /*
        Start Action

        @param [string]: Name of processing type to use
        @return [Action]
    */
    start: function (processType) {
	    var self = this;

        self.resetProgress();
        
        if (processType) {
            self.changeRubix(processType);
        }

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
	    this.stop();
	    
	    return this;
    },
    
    /*
        Resume a paused Action
    */
    resume: function () {
	    var self = this;
	    
        self.started = utils.currentTime();
        self.framestamp = self.started;
        self.isActive(true);
        
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
    
    toggle: function () {
        if (this.isActive()) {
            this.pause();
        } else {
            this.resume();
        }
    },
    
    /*
        Check for next steps and perform, stop if not
    */
    next: function () {
        var self = this,
            nexts = [{
                key: 'loop',
                callback: self.reset
            }, {
                key: 'yoyo',
                callback: self.reverse
            }],
            possibles = nexts.length,
            hasNext = false;
            
        for (var i = 0; i < possibles; ++i) {
            if (self.checkNextStep(nexts[i].key, nexts[i].callback)) {
                hasNext = true;
                break;
            }
        }

        if (!hasNext && !self.playNext()) {
            self.stop();
        }
        
        return self;
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
                this.set(next);
                this.reset();
                stepTaken = true;
            }
        }

        return stepTaken;
    },
    
    /*
        Set Action values and properties
        
        Syntax
            .set(preset[, override, input])
                @param [string]: Name of preset to apply
                @param [object] (optional): Properties to override preset
            
            .set(params[, input])
                @param [object]: Action properties
            
        @return [Action]
    */
    set: function (defs, override, input) {
        var self = this,
            validDefinition = (defs !== undefined),
            base = {},
            values = {};
console.log(defs, override, input);
        if (validDefinition) {
            base = presets.createBase(defs, override);
            
            if (input !== undefined) {
                base.input = input;
                base.inputOrigin = input.get();
            }

            self.props.apply(base);
            self.values.apply(base.values, self.props);
            
            values = this.values.getAll();
            
            // Create origins
            self.origin = {};
            for (var key in values) {
                if (values.hasOwnProperty(key)) {
                    self.origin[key] = values[key].current;
                }
            }
        }
        
        return self;
    },
    
    setValue: function (key, value) {
        var self = this;

        // If this is a number, set current (as opposed to 'to')
        if (utils.isNum(value)) {
            self.values.set(key, { current: value });
        
        // Or just set normal object
        } else {
            self.values.set(key, value);
        }
        
        return self;
    },
    
    getValue: function (key) {
        return this.values.get(key);
    },
    
    setProp: function (key, value) {
        this.props.set(key, value);
        
        return this;
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
    changeRubix: function (processType) {
        this.props.set('rubix', rubix[processType]);

        return this;
    }
    
};

module.exports = Action;