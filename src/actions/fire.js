/*
    Return current value and immedietly end
*/
"use strict";

module.exports = {

    parse: require('./generic/parse-args'),

   /*
        Process new value
        
        Return existing current
        
        @param [Value]: Current value
    */
    process: function (value) {
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