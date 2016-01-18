import Action from './Action';
import { offset } from 'ui-calc';
import { each } from 'ui-utils';

export default class Track extends Action {
    constructor(props, input) {
        super(props);
        this.input = input;
    }

    start() {
        super.start();
        this.inputOrigin = {};
    }

    update(track, frameDuration, elapsed) {
        this.inputOffset = offset(this.inputOrigin, this.input.current);

        each(this.values, (value, key) => {
            if (this.inputOffset.hasOwnProperty(key)) {
                if (value.direct) {
                    value.current = this.input.current[key];
                } else {
                    value.current = value.origin + this.inputOffset[key];
                }
            }
        });
    }

    getDefaultValue() {
        return {
            amp: 1,
            escapeAmp: 0,
            direct: false,
            smooth: 0
        };
    }
}
