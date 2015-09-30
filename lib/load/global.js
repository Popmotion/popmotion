'use strict';

var popmotion = require('./module.js'),
    UIref = window.ui;

window.ui = window.popmotion = popmotion;

/*
    If noConflict is run, the original reference to window.UI is
    restored and Popmotion is loaded to window.Popmotion
*/
window.ui.noConflict = function () {
    window.ui = UIref;
};