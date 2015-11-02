'use strict';

var popmotion = require('./module.js'),
    UIref = window.ui;

popmotion.noConflict = function () {
    window.ui = UIref;
};

window.ui = window.popmotion = popmotion;