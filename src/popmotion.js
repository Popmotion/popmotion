var valueTypes = require('./value-types/manager'),

    Popmotion = {

        Actor: require('./actor/Actor'),

        Sequence: require('./sequence/Sequence'),

        Input: require('./input/Input'),

        Iterator: require('./iterator/Iterator'),

        Process: require('./process/Process'),

        Easing: require('./actions/tween/Easing'),

        Role: require('./roles/Role'),

        Action: require('./actions/Action'),
        Tween: require('./actions/Tween'),
        Simulate: require('./actions/Simulate'),
        Track: require('./actions/Track'),

        /*
            Create an Iterator of Actors with selected dom elements
        */
        select: require('./inc/select-actor'),

        ease: require('./actions/tween/preset-easing'),

        /*
            Modify properties of inbuilt easing function
        */
        modifyEase: require('./actions/tween/modify-ease'),

        addValueType: types => {
            valueTypes.extend(types);
            return Popmotion;
        },

        calc: require('./inc/calc')
    };

module.exports = Popmotion;