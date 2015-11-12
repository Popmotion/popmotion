var Process = require('./process/Process'),
    valueTypes = require('./value-types/manager'),

    Popmotion = {

        Actor: require('./actor/Actor'),

        Sequence: require('./sequence/Sequence'),

        Input: require('./input/Input'),

        Iterator: require('./iterator/Iterator'),

        Process: Process,

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

        /*
            Process helper methods
        */
        onNextFrame: method => {
            const process = new Process(method);
            return process.start(1);
        },
        setInterval: (method, interval) => {
            const process = new Process(method);
            return process.every(interval);
        },
        setTimeout: (method, timeout) => {
            const process = new Process(method);
            return process.after(timeout);
        },

        addValueType: types => {
            valueTypes.extend(types);
            return Popmotion;
        },

        calc: require('./inc/calc')
    };

module.exports = Popmotion;