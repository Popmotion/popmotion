'use strict';

module.exports = {
    // [number]: Duration of animation in ms
    duration: 400,

    // [number]: Duration of delay in ms
    delay: 0,

    // [number]: Stagger delay as factor of duration (ie 0.2 with duration of 1000ms = 200ms)
    stagger: 0,

    // [string]: Easing to apply
    ease: 'easeInOut',

    // [number]: Number of steps to execute animation
    steps: 0,

    // [string]: Tells Redshift when to step, at the start or end of a step. Other option is 'start' as per CSS spec
    stepDirection: 'end'
};