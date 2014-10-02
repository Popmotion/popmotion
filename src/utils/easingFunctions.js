/*
    Easing functions
    ----------------------------------------
    
    Generates and provides easing functions based on baseFunction definitions
    
    A call to easingFunction.get('functionName') returns a function that can be passed:
        @param [number]: Progress 0-1
        @param [number] (optional): Amp modifier, only accepted in some easing functions
                                    and is used to adjust overall strength
        @return [number]: Eased progress
        
    We can generate new functions by sending an easing function through easingFunction.extend(name, method).
    Which will make nameIn, nameOut and nameInOut functions available to use.
    
    Base easing
        linear: default, no in/out/inOut variations
        quad
        cubic
        quart
        quint
        exp
        circ
        back
        
    Easing functions from Robert Penner
    http://www.robertpenner.com/easing/
        
    Bezier curve interpretor created from Gaëtan Renaudeau's original BezierEasing  
    https://github.com/gre/bezier-easing/blob/master/index.js  
    https://github.com/gre/bezier-easing/blob/master/LICENSE
*/
"use strict";

var calc = require('./calc.js'),
 	util = require('./utils.js'),
 	KEY = require('../opts/keys.js'),
 	defaults = require('../opts/defaults.js'),
 	Bezier = require('../models/bezier.js'),
 	EasingFunction = function () {},
	easingFunction,
	/*
    	Each of these base functions is an easeIn
    	
    	On init, we use EasingFunction.mirror and .reverse to generate easeInOut and
    	easeOut functions respectively.
	*/
	baseFunctions = {
	    /*
    	    Quad - Qunit easing
    	    
    	    Generates easing curve based on exponent of time
	    */
        quad: function (progress) {
            return Math.pow(progress, 2);
        },
        cubic: function (progress) {
            return Math.pow(progress, 3);
        },
        quart: function (progress) {
            return Math.pow(progress, 4);
        },
        quint: function (progress) {
            return Math.pow(progress, 5);
        },
        circ: function (progress) {
            return 1 - Math.sin(Math.acos(progress));
        },
        back: function (progress) {
            var strength = 1.5;

            return (progress * progress) * ((strength + 1) * progress - strength);
        }
	};
	
EasingFunction.prototype = {

    /*
        Get the named easing function
        
        @param [string]: Name of the easing function to get 
        @return [function || boolean]: Easing function or false if function undefined
    */
	get: function (name) {
		return this[name] || false;
	},
	
	
	addBezier: function (name, x1, y1, x2, y2) {
		if (!this[name]) {
			this[name] = new Bezier(x1, y1, x2, y2);
		}
	},

      
    /*
        Mirror easing
        
        Mirrors the provided easing function, used here for mirroring an
        easeIn into an easeInOut
        
        @param [number]: Progress, from 0 - 1, of current shift
        @param [function]: The easing function to mirror
        @returns [number]: The easing-adjusted delta
    */
	mirrorEasing: function (progress, method) {
        var delta;
        
        if (progress <= 0.5) {
            delta = method(2 * progress) / 2;
        } else {
            delta = (2 - method(2 * (1 - progress))) / 2;
        }
        
        return delta;
    },
            
    /*
        Reverse easing
        
        Reverses the output of the provided easing function, used for flipping easeIn
        curve to an easeOut.
        
        @param [number]: Progress, from 0 - 1, of current shift
        @param [function]: The easing function to reverse
        @returns [number]: The easing-adjusted delta
    */
    reverseEasing: function (progress, method) {
        return 1 - method(1 - progress);
    },
    
    
    /*
        Add new easing function
        
        Takes name and generates nameIn, nameOut, nameInOut, and easing functions to match
        
        @param [string]: Base name of the easing functions to generate
        @param [function]: Base easing function, as an easeIn, from which to generate Out and InOut
    */
	generate: function (name, method) {
		var self = this,
			names = {
				easeIn: name + KEY.EASING.IN, 
				easeOut: name + KEY.EASING.OUT,
				easeInOut: name + KEY.EASING.IN_OUT
			};

        // Create the In function
        this[names.easeIn] = method;

        // Create the Out function by reversing the transition curve
        this[names.easeOut] = function (progress) {
            return self.reverseEasing(progress, self[names.easeIn]);
        };
        
        // Create the InOut function by mirroring the transition curve
        this[names.easeInOut] = function (progress) {
            return self.mirrorEasing(progress, self[names.easeIn]);
        };
	},
    
    
    /*
        Ease value within ranged parameters
        
        @param [number]: Progress between 0 and 1
        @param [number]: Value of 0 progress
        @param [number]: Value of 1 progress
        @param [string]: Easing to use
        @param [number]: Amplify progress out of specified range
        @return [number]: Value of eased progress in range
    */  
    withinRange: function (progress, from, to, ease, escapeAmp) {
        var newProgress = calc.restricted(progress, 0, 1),
            inRange = util.isInRange(progress, 0, 1);
            
        ease = inRange ? ease : KEY.EASING.LINEAR;
        
        if (!inRange) {
            newProgress = newProgress + (calc.difference(newProgress, inRange) * escapeAmp);
        }

        return calc.valueEased(newProgress, from, to, this.get(ease));
    },
        
    /*
        Linear easing adjustment
        
        The default easing method, not added with .extend as it has no Out or InOut
        variation.
        
        @param [number]: Progress, from 0-1
        @return [number]: Unadjusted progress
    */
    'linear': function (progress) {
        return progress;
    },
    
    'ease':			new Bezier(.25, .1, .25, 1.0),
    'ease-in':		new Bezier(.42, 0, 1.00, 1.0),
    'ease-out':		new Bezier(0, 0, .58, 1.0),
    'ease-in-out':	new Bezier(.42, 0, .58, 1.0),
    'back-in': 		new Bezier(.48,-0.45,.99,.79),
    'back-out': 	new Bezier(.11,.7,.6,1.31)

};

easingFunction = new EasingFunction();

init();

function init() {
	for (var key in baseFunctions) {
		if (baseFunctions.hasOwnProperty(key)) {
			easingFunction.generate(key, baseFunctions[key]);
		}
	}
}

module.exports = easingFunction;
