/*
    Return current value and immedietly end
*/
"use strict";

var playRubix = require('./play.js'),
    fireRubix = require('./fire.js');

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
        
        Returns true to end immedietly
        
        @return [boolean]: true
    */
    hasEnded: fireRubix.hasEnded
};