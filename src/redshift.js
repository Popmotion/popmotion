"use strict";

var select = require('./actor/select'),
    actionManager = require('./actions/manager'),
    easingManager = require('./actions/play/easing-manager'),
    presetManager = require('./actor/preset-manager'),
    routeManager = require('./routes/manager'),
    simulationManager = require('./actions/run/simulation-manager'),
    actorTypeManager = require('./actor-types/manager'),
    valueTypeManager = require('./value-types/manager'),
    calc = require('./inc/calc'),

    Actor = require('./actor/Actor'),
    ActorGroup = require('./actor/ActorGroup'),
    Input = require('./input/Input'),
    Process = require('./process/Process'),

    Redshift = {

        Actor: Actor,

        ActorGroup: ActorGroup,

        Input: Input,

        Process: Process,

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

        addActorType: function () {
            actorTypeManager.extend.apply(actorTypeManager, arguments);
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

        calc: calc,

        /* Depricated methods, removing in 4.0.0 */
        newAction: function (a, b) {
            return new Actor(a, b);
        },
        newActionGroup: function (a) {
            return new ActorGroup(a);
        },
        newInput: function (a, b) {
            return new Input(a, b);
        },
        newProcess: function (a, b) {
            return new Process(a, b);
        }
    };

Redshift.addBezier = Redshift.addEasing;
Redshift.addRubix = Redshift.addAction;

module.exports = Redshift;