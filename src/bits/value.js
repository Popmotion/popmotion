"use strict";

var utils = require('../utils/utils.js'),
	calc = require('../utils/calc.js'),
	priorityProps = ['current', 'from', 'to', 'start'],
	
	/*
        Is this key a priority property?
        
        Priority properties are handled seperately and before all the other props
        
        @param [string]: The key to look up in our priority list
        @return [boolean]: Is this a priority?
	*/
	isPriority = function (key) {
    	return (priorityProps.indexOf(key) > -1);
	},
	
	/*
    	Calculate relative value
    	
    	Takes the operator and value from a string, ie "+=5", and applies
    	to the current value to resolve a new target.
    	
    	@param [string]: Relative value
    	@param [number]: Current value
    	@return [number]: New value
	*/
	calcRelativeValue = function (value, current) {
    	var newValue = current,
    	    equation = value.split('='),
    	    operator = equation[0],
    	    num = parseFloat(equation[1]);

    	switch (operator) {
        	case '+':
        	    newValue = current + num;
        	    break;
            case '-':
        	    newValue = current - num;
        	    break;
            case '*':
        	    newValue = current * num;
        	    break;
            case '/':
        	    newValue = current / num;
        	    break;
    	}

    	return newValue;
	},
	
	/*
    	Parse value
    	
    	Parses the value, whether its a number, string or function.
    	If a number, return.
    	If a string, it's a relative assignment so calculate new target based on its contents
    	If a function, fire it with action.data and current value as arguments
    	
    	@param [number/string/function]: Current value
    	@param [object]: Data of parent action
    	@param [number]: Current value
	*/
	parse = function (value, data, current) {
	    return (utils.isFunc(value)) ? value(data, current) : value;
	},
	
	/*
    	Value object
    	
    	On init, run update with isNewValue = true
    	
    	@param [number/string/function/object]: New value
    	@param [Aciton]: Parent action
	*/
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
    
    // Finally check if to was given as a string, and figure out the relative value
    if (utils.isString(this.to)) {
        this.to = calcRelativeValue(this.to, this.current);
    }
};

module.exports = Value;