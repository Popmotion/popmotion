"use strict";

var createStyles = require('./path/build.js');

module.exports = {

    typeMap: {
        stroke: 'color'
    },

    onStart: function (output, actor) {
        if (actor.actor) {
            actor.pathLength = actor.element.getTotalLength();
        }
    },
    
    onChange: function (output, actor) {
        actor.style(createStyles(output, actor.pathLength));
    }
};