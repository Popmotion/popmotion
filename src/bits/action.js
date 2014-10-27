/*
    Action class
    ----------------------------------------
    
    Defines the action object.
    
    Actions describe a process, be it an animation or a pointer tracking
    
    Properties
	    active: false,
	    alternate: false,
	    amp: 0,
	    duration: defaults.duration,
	    ease: defaults.ease,
	    link: defaults.link,
	    onEnd: function () {},
	    onFrame: function () {},
	    origin: {},
	    output: {},
	    progress: 0,
	    tick: 0,
	    time: {},
	    token: 0,
	    type: defaults.type,
	    valueIndex: 0,
	    values: {}
    
*/
"use strict";

var KEY = require('../opts/keys.js'),
    defaults = require('../opts/defaults.js'),
    calc = require('../utils/calc.js'),
    utils = require('../utils/utils.js'),
    Value = require('./value.js'),
    Token = require('../bobs/token.js'),
    callback = function () {},
    token = new Token(),
    Action = function () {
        this.created = utils.currentTime();
        this.token = token.generate();
        this.data = {};
    };
    
Action.prototype = {
    
    /*
	    Set action properties
	    
	    @param [object]: Properties
    */
    set: function (opts) {
	    
	    this.link = opts.link || this.link || defaults.link;
	    
        // Action parameters
        this.amp = utils.isNum(opts.amp) ? opts.amp : defaults.amp;
        this.escapeAmp = utils.isNum(opts.escapeAmp) ? opts.escapeAmp : defaults.escapeAmp;
        this.delay = utils.isNum(opts.delay) ? opts.delay : defaults.delay;
        this.duration = utils.isNum(opts.duration) ? opts.duration : defaults.duration;
        this.ease = opts.ease || defaults.ease;
        this.math = opts.math;
        this.steps = utils.isNum(opts.steps) ? opts.steps : defaults.steps;
        this.alternate = opts.alternate;
        this.pointerOffset = opts.pointerOffset;
        
        // Play list
        this.playlist = opts.playlist || this.playlist || [];
        this.playCurrent = utils.isNum(opts.playCurrent) ? opts.playCurrent : this.playCurrent;
        
        // Looping
        this.loop = opts.loop || false;
        this.loopCount = 0;

        // Callbacks
        this.onStart = opts.onStart || callback;
        this.onEnd = opts.onEnd || callback;
        this.onFrame = opts.onFrame || this.onFrame || callback;

		// Values
        this.setValues(opts.values);
        this.origin = {};
        
        for (var key in this.values) {
	        if (this.values.hasOwnProperty(key)) {
	            this.origin[key] = this.values[key].current;
	        }
        }
    
    	// Set last modified timestamp
	    this.lastModified = utils.currentTime();
    },
    
    setValues: function (values) {
        var key;
        
        this.values = this.values || {};

        for (key in values) {
	        if (values.hasOwnProperty(key)) {
	        	if (this.values[key]) {
		        	this.values[key].update(values[key], this);
	        	} else {
		        	this.values[key] = new Value(values[key], this);	
	        	}
	        }
        }
        
        if (this.values.angle) {
        	this.values.x = this.values.x || new Value(0, this);
            this.values.y = this.values.y || new Value(0, this);
        }
    },
    
    reverseValues: function () {
    	var key, to, from;
    	
    	this.progress = calc.difference(this.progress, 1);

	    for (key in this.values) {
		    if (this.values.hasOwnProperty(key)) {
		    	to = this.values[key].to;
		    	from = this.values[key].from;
		    	
		    	this.values[key].to = from;
			    this.values[key].from = to;
		    }
	    }
    },
    
    /*
        Set start time and activate
    */
    start: function () {
        this.active = true;
        this.started = utils.currentTime() + this.delay;
        this.firstFrame = true;
        //this.started = utils.currentTime() + this.delay - calc.value(this.progress, this.duration);
    },
    
    stop: function () {
        this.active = false;
    }
};

module.exports = Action;