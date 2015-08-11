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

        Role: require('./roles/Role'),

        createRole: require('./roles/create-role'),

        roles: {
            Attr: require('./roles/attr/AttrRole'),
            CSS: require('./roles/css/CSSRole'),
            Path: require('./roles/path/PathRole')
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