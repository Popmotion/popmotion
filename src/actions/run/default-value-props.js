module.exports = {

    // [string]: Simulation to .run
    simulate: 'velocity',
    
    // [number]: Deceleration to apply to value, in units per second
    deceleration: 0,
    
    // [number]: Acceleration to apply to value, in units per second
    acceleration: 0,
    
    // [number]: Factor to multiply velocity by on bounce
    bounce: 0,
    
    // [number]: Spring strength during 'string'
    spring: 80,
    
    // [number]: Timeconstant of glide
    timeConstant: 395,
    
    // [number]: Stop simulation under this speed
    stopSpeed: 5,
    
    // [boolean]: Capture with spring physics on limit breach
    capture: false,
    
    // [number]: Friction to apply per frame
    friction: 0

};