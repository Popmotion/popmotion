let Action = require('./Action.es6');

class Track extends Action {
    constructor(props) {
        this.action = 'track';
        this.set(props);
    }

    getDefaultValue() {
        return {
            amp: 1,
            escapeAmp: 0
        };
    }
}

module.exports = Track;