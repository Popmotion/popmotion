let Action = require('./Action.es6'),
    calc = require('../inc/calc');

class Track extends Action {
    getName() {
        return 'track';
    }

    getDefaultValue() {
        return {
            amp: 1,
            escapeAmp: 0,
            round: false
        };
    }

    /*
        Update input offset
    */
    onFrameStart() {
        this.inputOffset = calc.offset(this.inputOrigin, this.input.current);
    }

    /*
        Move Value relative to Input movement
        
        @param [Value]: Current value
        @param [string]: Key of current value
        @return [number]: Calculated value
    */
    process(value, key) {
        return (this.inputOffset.hasOwnProperty(key)) ? value.origin + this.inputOffset[key] : value.current;
    }

    /*
        Has this Action ended? 
        
        @return [boolean]: False to make user manually finish .track()
    */
    hasEnded() {
        return false;
    }
}

module.exports = Track;