/*
    Token controller
*/
"use strict";

var Token = function () {
        this.counter = 0;
    };

Token.prototype = {
    
    /*
        Get the current token count
        
        @return [int]: Current token count
    */
    get: function () {
        return this.counter;
    },
    
    /*
        Generate a new token
        
        @return [int]: New token
    */
    generate: function () {
        var token = this.get();
        
        this.increment();

        return token;
    },
    
    /*
        Increase token counter
    */
    increment: function () {
        this.counter ++;
    }
    
};

module.exports = Token;