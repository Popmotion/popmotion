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
        
    Easing functions from Robert Penner
    http://www.robertpenner.com/easing/
        
    Bezier curve interpretor created from Gaëtan Renaudeau's original BezierEasing  
    https://github.com/gre/bezier-easing/blob/master/index.js  
    https://github.com/gre/bezier-easing/blob/master/LICENSE
*/
"use strict";

var calc = require('./calc.js'),
    Bezier = require('../types/bezier.js'),
    
    // Constants
    INVALID_EASING = ": Not defined",
    EASE_IN = 'In',
    EASE_OUT = 'Out',
    EASE_IN_OUT = EASE_IN + EASE_OUT,
    
    // Base power ease names
    powerEasing = ['ease', 'cubic', 'quart', 'quint'],
    
    // Generate easing function with provided power
    generatePowerEasing = function (power) {
        return function (progress) {
            return Math.pow(progress, power);
        }
    },

    /*
        Each of these base functions is an easeIn
        
        On init, we use EasingFunction.mirror and .reverse to generate easeInOut and
        easeOut functions respectively.
    */
    baseEasing = {
        circ: function (progress) {
            return 1 - Math.sin(Math.acos(progress));
        },
        back: function (progress) {
            var strength = 1.5;

            return (progress * progress) * ((strength + 1) * progress - strength);
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
    mirrorEasing = function (progress, method) {
        return (progress <= 0.5) ? method(2 * progress) / 2 : (2 - method(2 * (1 - progress))) / 2;
    },
            
    /*
        Reverse easing
        
        Reverses the output of the provided easing function, used for flipping easeIn
        curve to an easeOut.
        
        @param [number]: Progress, from 0 - 1, of current shift
        @param [function]: The easing function to reverse
        @returns [number]: The easing-adjusted delta
    */
    reverseEasing = function (progress, method) {
        return 1 - method(1 - progress);
    },
    
    /*
        Add new easing function
        
        Takes name and generates nameIn, nameOut, nameInOut, and easing functions to match
        
        @param [string]: Base name of the easing functions to generate
        @param [function]: Base easing function, as an easeIn, from which to generate Out and InOut
    */
    generateVariations = function (name, method, isBaseIn) {
        var easeIn = name + EASE_IN,
            easeOut = name + EASE_OUT,
            easeInOut = name + EASE_IN_OUT,
            baseName = isBaseIn ? easeIn : easeOut,
            reverseName = isBaseIn ? easeOut : easeIn;

        // Create the In function
        easing[baseName] = method;

        // Create the Out function by reversing the transition curve
        easing[reverseName] = function (progress) {
            return reverseEasing(progress, easing[baseName]);
        };
        
        // Create the InOut function by mirroring the transition curve
        easing[easeInOut] = function (progress) {
            return mirrorEasing(progress, easing[baseName]);
        };
    },
    
    easing = {
    
        /*
            Get the named easing function
            
            @param [string]: Name of the easing function to get 
            @return [function || boolean]: Easing function or false if function undefined
        */
        get: function (name) {
            var easing = this[name];
            
            if (!easing) {
                throw name + INVALID_EASING;
            }
    
            return easing;
        },
        
        
        /*
            Add Bezier Curve easing
            
            @param [string]: Name of new easing
            @parma [number]: X of coordinate 1
            @parma [number]: Y of coordinate 1
            @parma [number]: X of coordinate 2
            @parma [number]: Y of coordinate 2
        */
        add: function (name, x1, y1, x2, y2) {
            if (!this[name]) {
                this[name] = new Bezier(x1, y1, x2, y2);
            }
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
            var progressLimited = calc.restricted(progress, 0, 1);
    
            if (progressLimited !== progress && escapeAmp) {
                ease = 'linear';
                progressLimited = progressLimited + (calc.difference(progressLimited, progress) * escapeAmp);
            }
    
            return calc.valueEased(progressLimited, from, to, this.get(ease));
        },
            
        /*
            Linear easing adjustment
            
            The default easing method, not added with .extend as it has no Out or InOut
            variation.
            
            @param [number]: Progress, from 0-1
            @return [number]: Unadjusted progress
        */
        linear: function (progress) {
            return progress;
        }
    };


// Initialise Easing  
(function () {
    var i = 0,
        key = '';
        
    // Generate power easing functions
    for (; i < 4; i++) {
        baseEasing[powerEasing[i]] = generatePowerEasing(i + 2);
    }
    
    // Generate in/out/inOut easing variations
    for (key in baseEasing) {
        if (baseEasing.hasOwnProperty(key)) {
            generateVariations(key, baseEasing[key], true);
        }
    }
})();

module.exports = easing;
