"use strict";

var valueTypeManager = require('./value-types/manager'),
    _select = require('./actor/select'),
    Popmotion = {

    Actor: require('./actor/Actor'),

    Input: require('./input/Input'),

    Iterator: require('./iterator/Iterator'),

    Process: require('./process/Process'),

    Easing: require('./actions/tween/Easing'),

    Role: require('./roles/Role'),

    Action: require('./actions/Action'),
    Tween: require('./actions/Tween'),
    Simulate: require('./actions/Simulate'),
    Track: require('./actions/Track'),

    /*
        Create an Iterator of Actors with selected dom elements
    */
    select: function select(selector, opts) {
        var selection = _select(selector),
            actors = [];

        selection.forEach(function (element) {
            opts.element = element;
            actors.push(new Actor(opts));
        });

        return new this.Iterator(actors);
    },

    addValueType: function addValueType() {
        valueTypeManager.extend.apply(valueTypeManager, arguments);
        return this;
    },

    calc: require('./inc/calc')
};

module.exports = Popmotion;