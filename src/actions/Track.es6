let Action = require('./Action.es6');

class Track extends Action {
    getName() {
        return 'track';
    }

    getDefaultValue() {
        return {
            amp: 1,
            escapeAmp: 0
        };
    }
}

module.exports = Track;