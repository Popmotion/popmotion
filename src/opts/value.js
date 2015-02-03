"use strict";

module.exports = {
    // Actual value
    current: 0,
    start: 0,

    // Current target
    to: 1,

    // Maximum range for value
    min: undefined,
    max: undefined,
    hasRange: false,

    // Simulation defaults
    simulate: 'velocity',
    velocity: 0,
    deceleration: 0,
    acceleration: 0,
    gravity: 30,
    bounce: 0,
    friction: 0,
    spring: 0.03,
    
    // Animation defaults
    duration: 400,
    delay: 0,
    ease: 'easeInOut',
    stagger: 0,

    round: false,
    steps: 0,
    
    // Tracking defaults
    escapeAmp: 0,
    link: null // use the progress of this value
};