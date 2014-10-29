"use strict";

var utils = require('../utils/utils.js'),
	calc = require('../utils/calc.js'),
	isPriority = function (key) {
    	var prioritys = ['current', 'from', 'to', 'start'];
    	return (prioritys.indexOf(key) > -1);
	},
	parse = function (value, data, current) {
	    return (utils.isFunc(value)) ? value(data, current) : value;
	},
	Value = function (value, action) {
		this.update(value, action, true);
	},
	defaults = {
	    // Actual value
    	current: 0,
    	start: 0,
	
    	// Current range for value
    	from: 0,
    	to: 1,
	
    	// Maximum range for value (TODO - has no current effect)
    	min: null,
    	max: null,
    	
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
    	escapeAmp: 0
	};

	
/*
	Update the value properties
	
	@param [object || number]: User-defined value
	@param [object]: Action this value belongs to
	@param [boolean] (optional): Is this a new value construct
*/
Value.prototype.update = function (value, action, isNewValue) {
	var data = (action) ? action.data : {};

	// If value is just a number
	if (utils.isNum(value) || utils.isFunc(value)) {
	    this.from = (isNewValue) ? 0 : this.from;
	    this.current = (isNewValue) ? this.from : this.current;
		this.to = parse(value, data, this.current);

	// Or if it is an object
	} else {
	
	    // Deal with our priorities
	    // TODO: See if this badass if statement (emphasis on ass) can be refactored
	    if (isNewValue && value.hasOwnProperty('start')) {
		    value.current = parse(value.start, data);
	    }
	    
	    // If user has defined a new current, but not a from
	    if (value.hasOwnProperty('current') && !value.hasOwnProperty('from')) {
    	    this.current = parse(value.current, data);
    	    this.from = this.current;
	    
	    // Or if user has defined a from, but not a current
	    } else if (!value.hasOwnProperty('current') && value.hasOwnProperty('from')) {
    	    this.from = isNewValue ? parse(value.from, data) : this.current;
    	    this.current = isNewValue ? this.from : this.current;
        
        // Or they've defined both
	    } else if (value.hasOwnProperty('current') && value.hasOwnProperty('from')) {
    	    this.current = parse(value.current, data);
    	    this.from = isNewValue ? parse(value.from, data) : this.current;
    	    
        // Or they've defined neither
	    } else {
    	    this.current = isNewValue ? defaults.current : this.current;
    	    this.from = isNewValue ? defaults.from : this.current;
	    }

		this.to = parse(value.to, data, this.current);
	}
	
    // Loop through permitted values
    for (var key in defaults) {
	    if (defaults.hasOwnProperty(key) && !isPriority(key)) {

		    // If user has submitted a property
		    if (utils.isObj(value) && value.hasOwnProperty(key)) {
                this[key] = parse(value[key], data, this.current);
                
            // Or there's a default set on the action
		    } else if (utils.isObj(action) && action.hasOwnProperty(key)) {
                this[key] = parse(action[key], data, this.current);
                
            // Otherwise, if this is our first time (honest judge), set as the default.
		    } else if (isNewValue) {
    		    this[key] = defaults[key];
		    }
		    
	    }
    }
};

module.exports = Value;