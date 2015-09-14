let Action = require('./Action.es6');

const DEFAULT_PROP = 'to';

class Tween extends Action {
    constructor(props) {
        this.action = 'tween';
        this.delay = 0;
        this.dilate = 1;
        this.duration = 300;
        this.ease = 'easeOut';
        this.stagger = 0;
        this.steps = 0;
        this.loop = false;
        this.yoyo = false;
        this.flip = false;
        this.set(props, DEFAULT_PROP);
    }

    getDefaultValue() {
        return {
            to: 0,
            flip: false,
            loop: false,
            yoyo: false
        };
    }

    getDefaultValueProp() {
        return DEFAULT_PROP;
    }
}

module.exports = Tween;