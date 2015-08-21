var Role = require('./Role');

module.exports = new Role({
    init: function () {
        if (this.onInit) {
            this.onInit();
        }
    },

    start: function () {
        if (this.onStart) {
            this.onStart();
        }
    },

    frame: function (state) {
        if (this.onFrame) {
            this.onFrame(state);
        }
    },

    update: function (state) {
        if (this.onUpdate) {
            this.onUpdate(state);
        }
    },

    complete: function () {
        if (this.onComplete) {
            this.onComplete();
        }
    }
});