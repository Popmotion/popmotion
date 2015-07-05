"use strict";

var select = require('./element/select'),
    actionManager = require('./actions/manager'),
    easingManager = require('./actions/play/easing-manager'),
    presetManager = require('./element/preset-manager'),
    routeManager = require('./routes/manager'),
    simulationManager = require('./actions/run/simulation-manager'),
    elementTypeManager = require('./element-types/manager'),
    valueTypeManager = require('./value-types/manager'),
    calc = require('./inc/calc'),

    Element = require('./element/Element'),
    ElementGroup = require('./element/ElementGroup'),
    Input = require('./input/Input'),
    Process = require('./process/Process');

module.exports = {

    Element: Element,

    ElementGroup: ElementGroup,

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
    },

    calc: calc,

    /* Depricated methods, removing in 4.0.0 */
    newAction: function (a, b) {
        return new Element(a, b);
    },
    newActionGroup: function (a) {
        return new ElementGroup(a);
    },
    newInput: function (a, b) {
        return new Input(a, b);
    },
    newProcess: function (a, b) {
        return new Process(a, b);
    },
    addBezier: this.addEasing,
    addRubix: this.addAction
};