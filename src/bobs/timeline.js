"use strict";

var Action = require('../action/action.js'),

    Timeline = function () {
        console.log(this);
    };
    
Timeline.prototype = new Action({
    values: {
        progress: {
            min: 0,
            max: 1
        }
    },
    onChange: function (output) {
        this.seek(output.progress);
    }
});

Timeline.prototype.seek = function (seek) {
    
};
    
module.exports = Timeline;