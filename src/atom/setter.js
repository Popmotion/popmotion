"use strict";

var build = require('./builder.js'),
    css = require('../css/set.js');

module.exports = function (output) {
    var props = this.action.props.store,
        values = this.action.values.store,
        dom = props.dom,
        cssState;

    if (dom) {
        cssState = build(output, props.css, values);
        css(props.dom, cssState.latest);
        console.log(cssState.latest);
        props.css = cssState.cache;
    }
};