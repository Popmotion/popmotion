/*
    Default options
    ----------------------------------------
*/
"use strict";

var KEY = require('./keys.js');

module.exports = {
    amp: 1,
    delay: 0,
    duration: 400,
    ease: KEY.EASING.QUAD_IN_OUT,
    escapeAmp: 0,
    link: KEY.LINK.TIME,
    friction: 5,
    pointer: {
        historySize: 2, // number of pointer events to remember
        maxInactiveFrames: 2 // allow this number of frames to pass with no movement before we declare stationary pointer
    },
    tick: 0,
    trackEase: KEY.EASING.LINEAR,
    tweenTarget: 0 // default tween target value
};