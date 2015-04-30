/*
    Return current value and immedietly end
*/
"use strict";

module.exports = {

    // [boolean]: Create an Action method for this rubix?
    createMethod: true,

    /*
        Process new value
        
        Return existing current
        
        @param [string]: Name of value
        @param [Value]: Current value
    */
    process: function (key, value) {
        return value.current;
    },
    
    /*
        Has Action ended?
        
        Returns true to end immedietly
        
        @return [boolean]: true
    */
    hasEnded: function () {
        return true;
    }
};