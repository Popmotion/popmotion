/*
    String constants
    ----------------------------------------
*/
"use strict";

module.exports = {
    JQUERY_ELEMENT: '_jQueryElement',
    REDSHIFT: 'redshift',
    EASING: {
        QUAD_IN_OUT: 'quadInOut',
        IN: 'In',
        IN_OUT: 'InOut',
        OUT: 'Out',
        LINEAR: 'linear'
    },
    RUBIX: {
        INPUT: 'Input',
        TIME: 'Time',
        RUN: 'Run',
        FIRE: 'Progress'
    },
    ERROR: {
        ACTION_EXISTS: "Action already defined. Use forceOverride: true to override.",
        NO_ACTION: "No action defined to inherit from.",
        INVALID_EASING: ": Easing not defined",
    },
    EVENT: {
        MOUSE: 'mouse',
        MOUSEMOVE: 'mousemove',
        TOUCH: 'touch',
        TOUCHMOVE: 'touchmove',
    },
    PROGRESS: {
        DIRECT: 'Direct',
        RANGE: 'Range'
    }
};