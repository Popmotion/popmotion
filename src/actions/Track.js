let Action = require('./Action'),
    calc = require('../inc/calc');

class Track extends Action {
    getName() {
        return 'track';
    }

    /*
        Update input offset
    */
    onFrameStart(actor) {
        actor.inputOffset = calc.offset(actor.inputOrigin, actor.input.current);
    }

    /*
        Move Value relative to Input movement
        
        @param [Value]: Current value
        @param [string]: Key of current value
        @return [number]: Calculated value
    */
    process(actor, value, key) {
        return (actor.inputOffset.hasOwnProperty(key)) ? value.origin + actor.inputOffset[key] : value.current;
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