"use strict";

var update = function (framestamp, frameDuration) {
        console.log(framestamp);
    };

module.exports = function () {
    if (this.isActive) {
        update.apply(this, arguments);
    }
};