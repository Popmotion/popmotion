'use strict';

var Role = require('./Role');

module.exports = new Role({
    init: function init() {
        if (this.init) {
            this.init();
        }
    },

    start: function start() {
        if (this.onStart) {
            this.onStart();
        }
    },

    frame: function frame(state) {
        if (this.onFrame) {
            this.onFrame(state);
        }
    },

    update: function update(state) {
        if (this.onUpdate) {
            this.onUpdate(state);
        }
    },

    complete: function complete() {
        if (this.onComplete) {
            this.onComplete();
        }
    }
});