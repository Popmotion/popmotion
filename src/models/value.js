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
        }
    	
    	this.current = utils.isNum(value.current) ? value.current : this.from;
    	this.duration = utils.isNum(value.duration) ? value.duration : baseDuration;
    	this.delay = utils.isNum(value.delay) ? value.delay : baseDelay;
    	this.ease = value.ease || baseEase;
    	this.amp = utils.isNum(value.amp) ? value.amp : baseAmp;
    	this.constant = utils.isNum(value.constant) ? value.constant : false;
    	this.link = value.link;
    	this.math = value.math || baseMath;
    	this.escapeAmp = utils.isNum(value.escapeAmp) ? value.escapeAmp : baseEscape;
        this.endSnap = value.endSnap;
    };

module.exports = Value;