let Action = require('./Action.es6');

const DEFAULT_PROP = 'velocity';

class Simulate extends Action {
    constructor(props) {
        this.action = 'simulate';
        this.inactiveFrames = 0;
        this.maxInactiveFrames = 3;
        this.set(props, DEFAULT_PROP);
    }

    getDefaultValue() {
        return {
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
    }

    getDefaultValueProp() {
        return DEFAULT_PROP;
    }

    extend(props) {
        return new Simulate(this).set(props, DEFAULT_PROP);
    }
}

module.exports = Simulate;