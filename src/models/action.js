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
    Token = require('../controllers/token.js'),
    callback = function () {},
    token = new Token(),
    Action = function () {
        this.created = utils.currentTime();
        this.token = token.generate();
    };
    
Action.prototype = {
    
    /*
	    Set action properties
	    
	    @param [object]: Properties
    */
    set: function (opts) {
	    
	    this.link = opts.link;
        
        // Action parameters
        this.amp = utils.isNum(opts.amp) ? opts.amp : defaults.amp;
        this.escapeAmp = utils.isNum(opts.escapeAmp) ? opts.escapeAmp : defaults.escapeAmp;
        this.delay = utils.isNum(opts.delay) ? opts.delay : defaults.delay;
        this.duration = utils.isNum(opts.duration) ? opts.duration : defaults.duration;
        this.ease = opts.ease || defaults.ease;
        this.math = opts.math;
        this.tick = utils.isNum(opts.tick) ? opts.tick : defaults.tick;
        this.alternate = opts.alternate;
        this.pointerOffset = opts.pointerOffset;
        
        // Callbacks
        this.onEnd = opts.onEnd || callback;
        this.onFrame = opts.onFrame || this.onFrame || callback;

        this.setValues(opts.values);
/*
        // If this is the first init
	    if (!this.lastModified) {
        	this.progress = 0;
	    	this.setValues(opts.values);
	   
        // If user has forced value refresh
	    } else if (opts.refreshValues) {
	    	this.setValues(opts.values);
	   
	    // If values are meant to alternate on each init
	    } else if (this.alternate) {
		    this.reverseValues();

	    } else if (opts.link === KEY.LINK.MOMENTUM) {
    	    this.velocity = this.pointer.velocity.y;
	    }
*/
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
        
        this.values = {};

        for (key in values) {
	        if (values.hasOwnProperty(key)) {
		        this.values[key] = new Value(values[key], this.duration, this.delay, this.ease, this.amp, this.escapeAmp, this.math);
	        }
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
        //this.started = utils.currentTime() + this.delay - calc.value(this.progress, this.duration);
    },
    
    stop: function () {
        this.active = false;
    }
};

module.exports = Action;