"use strict";
/*
    requestAnimationFrame polyfill
    
    For IE8/9 Flinstones

    Taken from Paul Irish. We've stripped out cancelAnimationFrame checks because we don't fox with that
    
    http://paulirish.com/2011/requestanimationframe-for-smart-animating/
    http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
     
    requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
     
    MIT license
*/
var lastTime = 0,
    vendors = ['ms', 'moz', 'webkit', 'o'],
    vendorsLength = vendors.length;

// Check for prefixed implementations
for (var x = 0; x < vendorsLength && !window.requestAnimationFrame; x++) {
    window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
}

// If there is, fo absolute shizzle, no rAF implementations, make one out of setTimeout and putty
if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function (callback) {
        var currTime = new Date().getTime(),
            timeToCall = Math.max(0, 16 - (currTime - lastTime)),
            id = window.setTimeout(function () {
                    callback(currTime + timeToCall);
                }, timeToCall);
        
        lastTime = currTime + timeToCall;
        
        return id;
    }
}