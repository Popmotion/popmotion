"use strict";

module.exports = {
    // [number]: The canonical value
    current: 0,
    
    // [number]: The value to start from
    start: 0,

    // [number]: Current target value
    to: undefined,

    // [number]: Maximum permitted value during .track and .run
    min: undefined,
    
    // [number]: Minimum permitted value during .track and .run
    max: undefined,
    
    // [boolean]: Set to true when both min and max detected
    hasRange: false,

    // [boolean]: Round output if true
    round: false,

    /*
        Link properties
    */

    // [string]: Name of value to listen to
    link: undefined,
    
    // [array]: Linear range of values (eg [-100, -50, 50, 100]) of linked value to map to .mapTo
    mapLink: undefined,
    
    // [array]: Non-linear range of values (eg [0, 1, 1, 0]) to map to .mapLink - here the linked value being 75 would result in a value of 0.5
    mapTo: undefined,


    /*
        .run() properties
    */

    // [string]: Simulation to .run
    simulate: 'velocity',
    
    // [number]: Current velocity of value, in units per second
    velocity: 0,
    
    // [number]: Deceleration to apply to value, in units per second
    deceleration: 0,
    
    // [number]: Acceleration to apply to value, in units per second
    acceleration: 0,
    
    // [number]: Gravity acceleration to apply to value, in units per second
    gravity: 30,
    
    // [number]: Factor to multiply velocity by on bounce
    bounce: 0,
    
    // [number]: Friction factor to apply per frame (TODO: Figure out per second factor)
    friction: 0,
    
    // [number]: Spring strength during 'string'
    spring: 0.03,


    /*
        .play() properties
    */

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
    

    /*
        .track() properties
    */

    // [number]: Factor of movement outside of maximum range (ie 0.5 will move half as much as 1)
    escapeAmp: 0
};