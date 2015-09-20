"use strict";

var valueTypeManager = require('./value-types/manager'),
    Popmotion = {

    Actor: require('./actor/Actor'),

    ActorCollection: require('./actor/ActorCollection'),

    Input: require('./input/Input'),

    Process: require('./process/Process'),

    Easing: require('./actions/tween/Easing'),

    Role: require('./roles/Role'),

    Action: require('./actions/Action.es6'),
    Tween: require('./actions/Tween.es6'),
    Simulate: require('./actions/Simulate.es6'),
    Track: require('./actions/Track.es6'),

    select: require('./actor/select'),

    addValueType: function addValueType() {
        valueTypeManager.extend.apply(valueTypeManager, arguments);
        return this;
    },

    calc: require('./inc/calc')
};

module.exports = Popmotion;