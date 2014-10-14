"use strict";

var KEY = require('../opts/keys.js'),
    callbacks = {},
    event = {};

module.exports = {
    
    addListeners: function (onMove, onEnd, isTouchEvent) {
        var self = this;

        event.move = isTouchEvent ? KEY.EVENT.TOUCHMOVE : KEY.EVENT.MOUSEMOVE;
        event.end = isTouchEvent ? KEY.EVENT.TOUCHEND : KEY.EVENT.MOUSEUP;

        callbacks.onMove = onMove;

        callbacks.onEnd = function () {
            if (typeof onEnd === 'function') {
                onEnd();
            }
        };

		document.documentElement.addEventListener(event.move, callbacks.onMove);
		document.documentElement.addEventListener(event.end, callbacks.onEnd);
    },
    
    removeListeners: function () {
		document.documentElement.removeEventListener(event.move, callbacks.onMove);
		document.documentElement.removeEventListener(event.end, callbacks.onEnd);
    }
    
};