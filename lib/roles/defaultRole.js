'use strict';

var Role = require('./Role');

module.exports = new Role({
    init: function init(actor) {
        if (actor.init) {
            actor.init(actor);
        }
    },

    start: function start(actor) {
        if (actor.onStart) {
            actor.onStart(actor);
        }
    },

    frame: function frame(state, actor) {
        if (actor.onFrame) {
            actor.onFrame(state, actor);
        }
    },

    update: function update(state, actor) {
        if (actor.onUpdate) {
            actor.onUpdate(state, actor);
        }
    },

    complete: function complete(actor) {
        if (actor.onComplete) {
            actor.onComplete(actor);
        }
    }
});