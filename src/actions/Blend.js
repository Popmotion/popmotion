// Imports
const Action = require('./Action');

class Blend extends Action {

    onStart(...args) {
        this.actions.forEach((action) => action.onStart(...args));
    }

    onFrameStart(...args) {
        this.actions.forEach((action) => action.onFrameStart(...args));
    }

    process(...args) {
        this.actions.forEach((action) => action.process(...args));
        return 0;
    }

    hasEnded(...args) {
        this.actions.forEach((action) => action.hasEnded(...args));

        return false;
    }

    getDefaultProps() {
        return {
            actions: []
        };
    }
};

module.exports = Blend;