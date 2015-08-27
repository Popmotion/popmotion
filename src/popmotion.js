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

        select: require('./actor/select'),

        addAction: function () {
            actionManager.extend.apply(actionManager, arguments);
            return this;
        },

        addPreset: function () {
            presetManager.extend.apply(presetManager, arguments);
            return this;
        },

        addValueType: function () {
            valueTypeManager.extend.apply(valueTypeManager, arguments);
            return this;
        },

        calc: require('./inc/calc')
    };

module.exports = Popmotion;