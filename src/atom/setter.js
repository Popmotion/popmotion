"use strict";

var build = require('./builder.js'),
    css = require('css-styler');

module.exports = function (output) {
    var props = this.action.props.store,
        dom = props.dom,
        cssState;
    /*
    if (dom) {
        cssState = build(output, props.css);
        css(props.dom, cssState.latest);
        props.css = cssState.cache;
    }
    */
};