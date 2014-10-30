"use strict";

var KEY = require('../opts/keys.js'),
    utils = require('../utils/utils.js'),
    Token = require('../bobs/token.js'),
    token = new Token(),
    Value = require('./value.js'),
    priorityProps = ['values', 'origin', 'scope'],
	/*
        Is this key a priority property?
        
        Priority properties are handled seperately and before all the other props
        
        @param [string]: The key to look up in our priority list
        @return [boolean]: Is this a priority?
	*/
	isPriority = function (key) {
    	return (priorityProps.indexOf(key) > -1);
	},
    callback = function () {},
    Action = function () {
        this.created = utils.currentTime();
        this.token = token.generate();
    },
    defaults = {
    
        // Is this action active
        active: false,
        
        // What to use to process this aciton
        link: KEY.LINK.TIME,
        
        // Multiply output value by
        amp: 1,
        
        // Multiply output value outside min/max by
        escapeAmp: 0,
        
        // Action data storage
        data: {},
        
        // Delay this action by x ms
        delay: 0,
        
        // Time of animation (if animating) in ms
        duration: 400,
        
        // Ease animation
        ease: KEY.EASING.QUAD_IN_OUT,
        
        // Apply this Math function to output value
        math: undefined,
        
        // Divide animation into this many steps
        steps: 0,
        
        // 
        pointerOffset: undefined,
        
        // Ordered list of animations to execute
        playlist: [],
        
        // Index of currently playing animation
        playhead: 0,
        
        // Loop animation x number of times (true for ETERNALLY)
        loop: false,
        
        // Number of times animation has looped
        loopCount: 0,
        
        // Play animation and reverse x number of times (true for forever)
        yoyo: false,
        
        // Number of times animation has yoyoed
        yoyoCount: 0,
        
        // Run this callback on action start
        onStart: callback,
        
        // Run this on action end
        onEnd: callback,
        
        // Run this every frame
        onFrame: callback,
        
        // Run this when action changes
        onChange: callback,
        
        // Callbacks run with this as scope
        scope: false,
        
        // The values we're animating
        values: {},
        
        // Values as originally set
        origin: {}
    };

/*
    Set Action options
    
    @param [object]: User-defined options
*/
Action.prototype.set = function (options) {
    
    // Loop through standard options and assign
    for (var key in defaults) {
        if (defaults.hasOwnProperty(key) && !isPriority(key)) {
            
            // If user has set this option
            if (options.hasOwnProperty(key)) {
                this[key] = options[key];
            
            // Or we haven't set this option before, set it as default
            } else if (!this.hasOwnProperty(key)) {
                this[key] = defaults[key];
            }
            
        }
    }
    
    this.scope = options.scope || this;

    // Set the values
    this.setValues(options.values);
};
 

/*
    Set Values
    
    @param [object]: User-defined values
*/   
Action.prototype.setValues = function (values) {
    this.values = this.values || defaults.values;

    // Create or update Value objects for each defined value
    for (var key in values) {
        if (values.hasOwnProperty(key)) {
            
            if (this.values[key]) {
                this.values[key].update(values[key], this);
            } else {
                this.values[key] = new Value(values[key], this);
            }
        }
    }
    
    // Handle special values

    if (this.values.angle) {
    	this.values.x = this.values.x || new Value(0, this);
        this.values.y = this.values.y || new Value(0, this);
    }
    
    this.origin = {};

    // Create origins
    for (var key in this.values) {
        if (this.values.hasOwnProperty(key)) {
            this.origin[key] = this.values[key].current;
        }
    }
};

/*
    Reset values
*/
Action.prototype.resetValues = function () {
    for (var key in this.values) {
        this.values[key].current = this.values[key].from;
    }
    
    this.progress = 0;
};

/*
    Reverse values
*/
Action.prototype.reverseValues = function () {
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
};

/*
    Start the action
*/
Action.prototype.start = function () {
    this.active = true;
    this.started = utils.currentTime() + this.delay;
    this.firstFrame = true;
};

/*
    Stop the action
*/
Action.prototype.stop = function () {
    this.active = false;
};


module.exports = Action;