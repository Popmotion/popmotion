"use strict";

var lookup = require('./css/lookup');

module.exports = {
    typeMap: lookup,
    
    onChange: function (output, element) {
        element.style(output);

        // TODO: Add a way to set Element type, explicitly or automatically
/*
        action[cssCache] = action[cssCache] || {};
        action.style(build(output, action[cssOrder],  action[cssCache], values));
*/
    }
    
};