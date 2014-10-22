"use strict";

var utils = require('../utils/utils.js'),
	calc = require('../utils/calc.js'),
	parse = function (value, data, current) {
		return (utils.isFunc(value)) ? value(data, current) : value;
	},
	Value = function (value, action) {
		this.update(value, action, true);
	};

Value.prototype = {
	
	// Actual value
	current: 0,
	
	// Current range for value
	from: 0,
	to: 1,
	
	// Maximum range for value (TODO)
	min: 0,
	max: 1,
	
	// Speed for .move(), in xps
	speed: 0,
	friction: 0,
	thrust: 0,
	
	// Options
	duration: 400,
	delay: 0,
	ease: 'ease-in-out',
	link: null, // use the progress of this value
	math: null,
	steps: 0,
	
	// Amp for inside and outside range (ie value * amp)
	amp: 0,
	escapeAmp: 0,
	
	/*
		Update the value properties
	*/
	update: function (value, action, isNewValue) {
		var newValue,
			data = (action) ? action.data : {};

		for (var key in value) {
			if (value.hasOwnProperty(key) && !this[key] !== undefined) {
				newValue = parse(value[key], data, value.current);

				if (newValue === undefined && action[key] !== undefined) {
					newValue = action[key];
				}

				this[key] = newValue;
			}
		}
	}
	
};

module.exports = Value;

/*
"use strict";

var utils = require('../utils/utils.js'),
	calc = require('../utils/calc.js'),
	parse = function (value, data, current) {
    	var newValue = 0;

    	if (utils.isNum(value)) {
        	newValue = value;
    	} else if (utils.isFunc(value)) {
        	newValue = value(data, current);
    	}
    	
    	return newValue;
	},
    Value = function (value, data, baseDuration, baseDelay, baseEase, baseAmp, baseEscape, baseMath, baseSteps) {
        
        if (utils.isNum(value)) {
            this.from = 0;
            this.to = value;
            
        } else if (utils.isFunc(value)) {
            this.from = 0;
            this.to = value(data);
            
        } else if (utils.isObj(value)) {
            this.from = parse(value.from, data);
            this.to = parse(value.to, data);
            this.min = parse(value.min, data);
            this.max = parse(value.max, data);
            
            if (utils.isFunc(value.current)) {
	            this.current = value.current(data);
            } else if (utils.isNum(value.current)) {
	            this.current = value.current;
            }
        }
        
		this.current = (utils.isNum(this.current)) ? this.current : this.from;
    	this.link = value.link;
    	this.math = value.math || baseMath;
    	this.steps = value.steps || baseSteps;
		
		// Play values
    	this.duration = utils.isNum(value.duration) ? value.duration : baseDuration;
    	this.delay = utils.isNum(value.delay) ? value.delay : baseDelay;
    	this.ease = value.ease || baseEase;
    	this.amp = utils.isNum(value.amp) ? value.amp : baseAmp;
    	
    	// Track values
    	this.escapeAmp = utils.isNum(value.escapeAmp) ? value.escapeAmp : baseEscape;
    	
    	// Move values
        this.speed = value.speed || 0;
        this.friction = value.friction || 0;
        this.thrust = value.thrust || 0;
        
    };
    
Value.prototype = {
	
	update: function (value, data, baseDuration, baseDelay, baseEase, baseAmp, baseEscape, baseMath, baseSteps) {
        if (utils.isNum(value)) {
            this.from = 0;
            this.to = value;
            
        } else if (utils.isFunc(value)) {
            this.from = 0;
            this.to = value(data);
            
        } else if (utils.isObj(value)) {
    		this.to = parse(value.to, data, this.current);
            this.from = parse(value.from, data);
            this.min = parse(value.min, data);
            this.max = parse(value.max, data);
            
            if (utils.isFunc(value.current)) {
	            this.current = value.current(data);
            } else if (utils.isNum(value.current)) {
	            this.current = value.current;
            }
        }
        this.speed = value.speed || 0;
        this.ease = value.ease || baseEase;
        this.steps = value.steps || baseSteps;
        
        if (this.current && !utils.isFunc(value.from)) {
            this.from = this.current;
        }

        if (value.current && !utils.isNum(value.from)) {
            this.from = value.current;
            this.current = value.current;
        }

        if (value.override === true) {
            this.current = this.from;
        }
        
	}
	
};

module.exports = Value;*/