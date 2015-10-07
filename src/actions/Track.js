let Action = require('./Action'),
    Pointer = require('../input/Pointer'),
    calc = require('../inc/calc'),
    each = require('../inc/utils').each;

function smooth(newOffset, oldOffset, duration, smoothing) {
    var offset = {};

    each(newOffset, (key, newValue) => {
        let oldValue = oldOffset[key];

        offset[key] = oldValue + (duration * ( newValue - oldValue ) / smoothing);
    });

    return offset;
}

class Track extends Action {
    /*
        Update input offset
    */
    onFrameStart(actor, frameDuration, framestamp) {
        var newOffset;

        actor.state.input = this.input.onFrame(framestamp);
        
        newOffset = calc.offset(this.inputOrigin, this.input.current);

        this.inputOffset = (actor.smooth && this.inputOffset) ? smooth(newOffset, this.inputOffset, frameDuration, actor.smooth) : newOffset;
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
    hasEnded() {
        return false;
    }

    bindInput(input) {
        this.input = (!input.current) ? new Pointer(input) : input;
        this.inputOrigin = this.input.get();
    }

    getDefaultProps() {
        return {
            smooth: 0
        };
    }

    getDefaultValue() {
        return {
            amp: 1
        };
    }
}

module.exports = Track;