"use strict";

var update = function (framestamp, frameDuration) {

    };

module.exports = function () {
    if (this.isActive) {
        update.apply(this, arguments);
    }
};