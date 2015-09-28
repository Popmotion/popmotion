let Action = require('./Action'),
    Pointer = require('../input/Pointer'),
    calc = require('../inc/calc');

class Track extends Action {
    /*
        Update input offset
    */
    onFrameStart(actor, frameDuration, framestamp) {
        actor.state.input = this.input.onFrame(framestamp);
        this.inputOffset = calc.offset(this.inputOrigin, this.input.current);
    }

    /*
        Move Value relative to Input movement
        
        @param [Value]: Current value
        @param [string]: Key of current value
        @return [number]: Calculated value
    */
    process(actor, value, key) {
        return (this.inputOffset.hasOwnProperty(key)) ? value.origin + this.inputOffset[key] : value.current;
    }

    /*
        Has this Action ended? 
        
        @return [boolean]: False to make user manually finish .track()
    */
    hasEnded(actor) {
        return false;
    }

    bindInput(input) {
        this.input = (!input.current) ? new Pointer(input) : input;
        this.inputOrigin = this.input.get();
    }
}

module.exports = Track;