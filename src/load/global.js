var Cowabunga = require('./module.js'),
    UIref = window.UI;

window.UI = window.Cowabunga = Cowabunga;

/*
    If noConflict is run, the original reference to window.UI is
    restored and Cowabunga is loaded to window.Cowabunga
*/
window.UI.noConflict = function () {
    window.UI = UIref;
};
