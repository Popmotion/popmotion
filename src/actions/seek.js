/*
    Return current value and immedietly end
*/
"use strict";

var playRubix = require('./play.js');

module.exports = {

   /*
        Process new value
        
        Return existing current
        
        @param [string]: Name of value
        @param [Value]: Current value
    */
    process: playRubix.process,
    
    /*
        Has Action ended?
        
        Returns true to end animation, and sets rubix to 'play'
        
        @return [boolean]: true
    */
    hasEnded: function (action) {
        action.rubix = 'play';
        return true;
    }
};