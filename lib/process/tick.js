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
var tick,
    lastTime = 0,
    hasWindow = typeof window !== 'undefined';

if (!hasWindow) {
    // Load rAF shim
    tick = function (callback) {
        var currTime = new Date().getTime(),
            timeToCall = Math.max(0, 16 - (currTime - lastTime)),
            id = setTimeout(function () {
            callback(currTime + timeToCall);
        }, timeToCall);

        lastTime = currTime + timeToCall;

        return id;
    };
} else {
    tick = window.requestAnimationFrame;
}

module.exports = tick;