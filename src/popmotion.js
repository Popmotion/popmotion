"use strict";

var select = require('./actor/select'),
    actionManager = require('./actions/manager'),
    easingManager = require('./actions/play/easing-manager'),
    presetManager = require('./actor/preset-manager'),
    routeManager = require('./routes/manager'),
    simulationManager = require('./actions/run/simulation-manager'),
    valueTypeManager = require('./value-types/manager'),
    calc = require('./inc/calc'),

    Actor = require('./actor/Actor'),
    ActorCollection = require('./actor/ActorCollection'),
    Input = require('./input/Input'),
    Process = require('./process/Process'),
    Easing = require('./actions/play/Easing'),

    Popmotion = {

        Actor: Actor,

        ActorCollection: ActorCollection,

        Input: Input,

        Process: Process,

        Easing: Easing,

        select: function (items) {
            return select(items);
        },

        addAction: function () {
            actionManager.extend.apply(actionManager, arguments);
            return this;
        },

        addEasing: function () {
            easingManager.extend.apply(easingManager, arguments);
            return this;
        },

        addPreset: function () {
            presetManager.extend.apply(presetManager, arguments);
            return this;
        },

        addSimulation: function () {
            simulationManager.extend.apply(simulationManager, arguments);
            return this;
        },

        addValueType: function () {
            valueTypeManager.extend.apply(valueTypeManager, arguments);
            return this;
        },

        addRoute: function () {
            routeManager.extend.apply(routeManager, arguments);
            return this;
        },

        calc: calc
    };

module.exports = Popmotion;