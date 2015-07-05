/*
    Return current value and immedietly end
*/
"use strict";

var play = require('./play.js');

module.exports = {

    surpressMethod: true,

    actorMethods: {
        seek: function (seekTo) {
            this.elapsed = this.duration * seekTo;

            if (!this.isActive) {
                this.action = 'seek';
                this.activate();
            }

            return this;
        }
    },

   /*
        Process new value
        
        Return existing current
        
        @param [string]: Name of value
        @param [Value]: Current value
    */
    process: play.process,
    
    /*
        Has Action ended?
        
        Returns true to end animation, and sets rubix to 'play'
        
        @return [boolean]: true
    */
    hasEnded: function () {
        this.rubix = 'play';
        return true;
    }
};