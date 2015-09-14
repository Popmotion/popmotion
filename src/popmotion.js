"use strict";

var actionManager = require('./actions/manager'),
    presetManager = require('./actor/preset-manager'),
    valueTypeManager = require('./value-types/manager'),

    Popmotion = {

        Actor: require('./actor/Actor'),

        ActorCollection: require('./actor/ActorCollection'),

        Input: require('./input/Input'),

        Process: require('./process/Process'),

        Easing: require('./actions/play/Easing'),

        Role: require('./roles/Role'),

        Tween: require('./actions/Tween.es6'),
        Simulation: require('./actions/Simulation.es6'),
        Tracker: require('./actions/Tracker.es6'),

        select: require('./actor/select'),

        addValueType: function () {
            valueTypeManager.extend.apply(valueTypeManager, arguments);
            return this;
        },

        calc: require('./inc/calc')
    };

module.exports = Popmotion;