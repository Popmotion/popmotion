"use strict";

var build = require('./css/build'),
    lookup = require('./css/lookup'),
    CSS_CACHE = '_cssCache';

module.exports = {
    typeMap: lookup,
    
    onChange: function (output, element) {
        element[CSS_CACHE] = element[CSS_CACHE] || {};
        element.style(build(output, element[CSS_CACHE]));
    }
    
};