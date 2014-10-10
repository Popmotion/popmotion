/**/
"use strict";

var utils = require('../utils/utils.js'),
	calc = require('../utils/calc.js'),
	parse = function (value, data) {
    	var newValue = 0;

    	if (utils.isNum(value)) {
        	newValue = value;
    	} else if (utils.isFunc(value)) {
        	newValue = value(data);
    	}
    	
    	return newValue;
	},
    Value = function (value, data, baseDuration, baseDelay, baseEase, baseAmp, baseEscape, baseMath) {
        
        if (utils.isNum(value)) {
            this.from = 0;
            this.to = value;
            
        } else if (utils.isFunc(value)) {
            this.from = 0;
            this.to = value(data);
            
        } else if (utils.isObj(value)) {
            this.from = parse(value.from, data);
            this.to = parse(value.to, data);
            
            if (utils.isFunc(value.current)) {
	            this.current = value.current(data);
            } else if (utils.isNum(value.current)) {
	            this.current = value.current;
            }
        }
        
		this.current = (utils.isNum(this.current)) ? this.current : this.from;
    	this.duration = utils.isNum(value.duration) ? value.duration : baseDuration;
    	this.delay = utils.isNum(value.delay) ? value.delay : baseDelay;
    	this.ease = value.ease || baseEase;
    	this.amp = utils.isNum(value.amp) ? value.amp : baseAmp;
    	this.link = value.link;
    	this.math = value.math || baseMath;
    	this.escapeAmp = utils.isNum(value.escapeAmp) ? value.escapeAmp : baseEscape;
        this.speed = value.speed || 0;
        this.friction = value.friction || 0;
        this.thrust = value.thrust || 0;
    };
    
Value.prototype = {
	
	update: function (value, data, baseDuration, baseDelay, baseEase, baseAmp, baseEscape, baseMath) {
		this.to = parse(value.to, data);
        this.from = parse(value.from, data);
        this.speed = value.speed || 0;
        this.ease = value.ease || baseEase;
        
        if (this.current && !utils.isNum(value.from)) {
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

module.exports = Value;