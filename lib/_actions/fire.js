/*
    Return current value and immedietly end
*/
"use strict";

module.exports = {

    /*
         Process new value
         
         Return existing current
         
         @param [Value]: Current value
     */
    process: function process(value) {
        return value.current;
    },

    /*
        Has Action ended?
        
        Returns true to end immedietly
        
        @return [boolean]: true
    */
    hasEnded: function hasEnded() {
        return true;
    }
};