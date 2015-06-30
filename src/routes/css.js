"use strict";

var build = require('./css/build'),
    typeMap = require('./css/type-lookup'),
    CSS_CACHE = '_cssCache';

module.exports = {
    typeMap: typeMap,
    
    onChange: function (output, element) {
        element[CSS_CACHE] = element[CSS_CACHE] || {};
        element.style(build(output, element[CSS_CACHE]));
    }
    
};