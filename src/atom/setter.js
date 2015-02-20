"use strict";

var build = require('./builder.js'),
    css = require('css-styler');

module.exports = function (output, action, values, props) {
    var dom = props.dom,
        cssState;
    
    if (dom) {
        cssState = build(output, props.cssCache);
        css(props.dom, cssState.latest);
        props.cssCache = cssState.cache;
    }
};