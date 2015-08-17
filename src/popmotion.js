"use strict";

var select = require('./actor/select'),
    actionManager = require('./actions/manager'),
    presetManager = require('./actor/preset-manager'),
    valueTypeManager = require('./value-types/manager'),

    Popmotion = {

        Actor: require('./actor/Actor'),

        ActorCollection: require('./actor/ActorCollection'),

        Input: require('./input/Input'),

        Process: require('./process/Process'),

        Easing: require('./actions/play/Easing'),

        Output: require('./output/Output'),

        output: {
            Attr: require('./output/attr/AttrOutput'),
            CSS: require('./output/css/CSSOutput'),
            Path: require('./output/path/PathOutput')
        },        

        select: function (items) {
            return select(items);
        },

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