"use strict";

var getterSetter = require('../inc/getter-setter'),
    build = require('./css/build'),
    styleDom = require('./css/style-dom'),
    typeMap = require('./css/type-lookup'),
    CSS_CACHE = '_cssCache';

module.exports = {
    typeMap: typeMap,
    
    onChange: function (output, actor) {
        actor[CSS_CACHE] = actor[CSS_CACHE] || {};
        getterSetter.call(this, build(output, actor[CSS_CACHE]), false, false,
            function (name, rule) {
                styleDom.set(actor.element, name, rule);
            }
        );
    }
    
};