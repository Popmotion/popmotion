"use strict";

var select = require('./element/select'),
    actionManager = require('./actions/manager'),
    easingManager = require('./actions/play/easing-manager'),
    presetManager = require('./element/preset-manager'),
    routeManager = require('./routes/manager'),
    simulationManager = require('./actions/run/simulation-manager'),
    valueTypeManager = require('./value-types/manager');

module.exports = {

    Element: require('./element/Element'),

    ElementSystem: require('./element/ElementSystem'),

    Input: require('./input/Input'),

    Process: require('./process/Process'),

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

    addElementType: function () {
        elementTypeManager.extend.apply(elementTypeManager, arguments);
        return this;
    },

    addValueType: function () {
        valueTypeManager.extend.apply(valueTypeManager, arguments);
        return this;
    },

    addRoute: function () {
        routeManager.extend.apply(routeManager, arguments);
        return this;
    }

};