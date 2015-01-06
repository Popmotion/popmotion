"use strict";

var cycl = require('cycl'),
    processor = require('./processor.js'),
    presets = require('./presets.js'),
    rubix = require('./rubix.js'),
    KEY = require('../opts/keys.js'),
    Data = require('../bits/data.js'),

    Action = function () {
        var self = this;
        
        

        // Create data store
        this.data = new Data();
        
        // Register process wth cycl
        this.process = cycl.newProcess(function (framestamp, frameDuration) {
            processor.action(self, framestamp, frameDuration);
        });
    };

Action.prototype = {

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
            override = hasAllArgs ? arguments[1] : {};
        
        return this.start(KEY.RUBIX.INPUT, presets.createBase(defs, override), input);
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
    start: function (processType, base, input) {
        this.change(processType, base, input);
        
        this.process.start();
        
        return this;
    },
    
    stop: function () {},
    
    pause: function () {},
    
    resume: function () {},
    
    setValue: function () {},
    
    getValue: function () {},
    
    isActive: function () {
        
    },
    
    change: function (processType, base, input) {
        
        // If we have an input, check if it's a custom input.
        // Create a new pointer if it isn't
        if (input) {
            base.input = (input.current) ? input : new Pointer(input);
            base.inputOrigin = base.input.get();
        }
        
        // Assign the processing rubix
        this.rubix = rubix[processType];

        // TODO: Migrate
        action.set(changes);
    }
    
};

module.exports = Action;