"use strict";

module.exports = {
    // Actual value
    current: 0,
    start: 0,

    // Current range for value
    from: 0,
    to: 1,

    // Maximum range for value
    min: undefined,
    max: undefined,
    hasRange: false,
    
    // Speed for .move(), in xps
    velocity: 0,
    friction: 0,
    thrust: 0,
    
    // Options
    duration: 400,
    delay: 0,
    ease: 'easeInOut',
    link: null, // use the progress of this value
    round: false,
    steps: 0,
    
    // Amp for inside and outside range (ie value * amp)
    amp: 0,
    escapeAmp: 0
};