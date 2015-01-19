"use strict";

var KEY = require('../opts/keys.js'),
    rubix = require('./rubix.js'),
    defaults = {
        // Is this action active
        active: false,
        
        // What to use to process this aciton
        rubix: rubix[KEY.RUBIX.TIME],
        
        // Multiply output value by
        amp: 1,
        
        // Multiply output value outside min/max by
        escapeAmp: 0,
        
        // Delay this action by x ms
        delay: 0,
        
        // Time of animation (if animating) in ms
        duration: 400,
        
        // Ease animation
        ease: KEY.EASING.QUAD_IN_OUT,
        
        // Round output value?
        round: false,
        
        // Divide animation into this many steps
        steps: 0,
        
        // 
        dilate: 1,
        
        playhead: 0,
        
        // The object we're checking
        input: undefined,
        
        // Input origin on tracking start
        inputOrigin: undefined,
        
        // Use the progress of this property of linked input
        link: undefined,
        
        // Loop animation x number of times (true for ETERNALLY)
        loop: false,
        
        // Number of times animation has looped
        loopCount: 0,
        
        // Play animation and reverse x number of times (true for forever)
        yoyo: false,
        
        // Number of times animation has yoyoed
        yoyoCount: 0,
        
        // Run this callback on action start
        onStart: undefined,
        
        // Run this on action end
        onEnd: undefined,
        
        // Run this every frame
        onFrame: undefined,
        
        // Run this when action changes
        onChange: undefined
    },

    /*
        Props constructor
    */
    Props = function () {};

Props.prototype = {
    
    /*
        Apply properties
        
        @param [object]: User-defined options
    */
    apply: function (props) {
        // Loop through defaults
        for (var key in defaults) {
            if (defaults.hasOwnProperty(key)) {
                
                // If user has set this option
                if (props.hasOwnProperty(key)) {
                    this.set(key, props[key]);
                
                // Or set to default
                } else {
                    this.set(key, defaults[key]);
                }
            }
        }
                
        this.playlist = props.playlist || this.playlist || [];
        this.scope = props.scope || this.scope || this;
    },
    
    set: function (key, value) {
        this[key] = value;
    },
    
    get: function (key) {
        return this[key];
    }
};

module.exports = Props;