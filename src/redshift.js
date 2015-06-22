"use strict";

var select = require('./element/select');

module.exports = {

    Element: require('./element/Element'),

    ElementSystem: require('./element/ElementSystem'),

    Input: require('./input/Input'),

    Process: require('./process/Process'),

    select: function (items) {
        return select(items);
    },

    addAction: function () {
        addAction.apply(this, arguments);
        return this;
    },

    addEasing: function () {
        addEasing.apply(this, arguments);
        return this;
    },

    addPreset: function () {
        addPreset.apply(this, arguments);
        return this;
    },

    addSimulation: function () {
        addSimulation.apply(this, arguments);
        return this;
    },

    addElementType: function () {
        addElementType.apply(this, arguments);
        return this;
    },

    addValueType: function () {
        addValueType.apply(this, arguments);
        return this;
    },

    addRoute: function () {
        addRoute.apply(this, arguments);
        return this;
    }

};