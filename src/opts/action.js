"use strict";

module.exports = {
    
    // Is this action active
    active: false,
    
    // What to use to process this aciton
    rubix: 'Play',
    
    // Multiply output value by
    amp: 1,
    
    // Multiply output value outside min/max by
    escapeAmp: 0,
    
    // Delay this action by x ms
    delay: 0,
    
    // Time of animation (if animating) in ms
    duration: 400,
    
    // Ease animation
    ease: 'easeInOut',
    
    // 
    dilate: 1,
    
    // Number of times animation has looped
    loopCount: 0,
    
    // Number of times animation has yoyoed
    yoyoCount: 0
    
    /*
        
        Recognised values with either false or undefined as default
    
        // Order of values
        order: undefined,
        
        progress: undefined,
        
        // The object we're checking
        input: undefined,
        
        // Input origin on tracking start
        inputOrigin: undefined,
        
        // Use the progress of this property of linked input
        link: undefined,
        
        // Loop animation x number of times (true for ETERNALLY)
        loop: false,
        
        // Play animation and reverse x number of times (true for forever)
        yoyo: false,
        
        // Run this callback on action start
        onStart: undefined,
        
        // Run this on action end
        onEnd: undefined,
        
        // Run this every frame
        onFrame: undefined,
        
        // Run this when action changes
        onChange: undefined,
        
        output: undefined
        
    */
};