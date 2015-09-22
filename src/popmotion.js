"use strict";

var valueTypeManager = require('./value-types/manager'),

    Popmotion = {

        Actor: require('./actor/Actor'),

        ActorCollection: require('./actor/ActorCollection'),

        Input: require('./input/Input'),

        Process: require('./process/Process'),

        Easing: require('./actions/tween/Easing'),

        Role: require('./roles/Role'),

        Action: require('./actions/Action'),
        Tween: require('./actions/Tween'),
        Simulate: require('./actions/Simulate'),
        Track: require('./actions/Track'),

        select: require('./actor/select'),

        addValueType: function () {
            valueTypeManager.extend.apply(valueTypeManager, arguments);
            return this;
        },

        calc: require('./inc/calc')
    };

module.exports = Popmotion;