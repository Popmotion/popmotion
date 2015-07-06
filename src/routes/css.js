"use strict";

var build = require('./css/build'),
    typeMap = require('./css/type-lookup'),
    CSS_CACHE = '_cssCache';

module.exports = {
    typeMap: typeMap,
    
    onChange: function (output, actor) {
        actor[CSS_CACHE] = actor[CSS_CACHE] || {};
        actor.style(build(output, actor[CSS_CACHE]));
    }
    
};