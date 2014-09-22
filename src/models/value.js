/**/
"use strict";

var utils = require('../utils/utils.js'),
	calc = require('../utils/calc.js'),
    Value = function (value, baseDuration, baseDelay, baseEase, baseAmp, baseEscape, baseMath) {
    	
    	if (utils.isNum(value)) {
        	value = {
            	to: value
        	};
    	}
    	
    	this.from = value.from || 0;
    	this.to = value.to || 0;
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