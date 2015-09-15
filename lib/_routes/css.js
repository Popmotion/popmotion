/*
    DOM CSS route
    ==============================================
*/
"use strict";

var build = require('./css/build'),
    styleDom = require('./css/style-dom'),
    typeMap = require('./css/type-lookup'),
    CSS_CACHE = '_cssCache';

module.exports = {
    typeMap: typeMap,

    onChange: function onChange(output) {
        this[CSS_CACHE] = this[CSS_CACHE] || {};
        this.css(build(output, this[CSS_CACHE]));
    },

    get: function get(key) {
        return styleDom.get(this.element, key);
    },

    set: function set(key, value) {
        styleDom.set(this.element, key, value);
    }

};