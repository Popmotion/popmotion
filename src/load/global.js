var Popmotion = require('./module.js'),
    UIref = window.UI;

window.UI = window.Popmotion = Popmotion;

/*
    If noConflict is run, the original reference to window.UI is
    restored and Popmotion is loaded to window.Popmotion
*/
window.UI.noConflict = function () {
    window.UI = UIref;
};