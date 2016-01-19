import Action from './Action';
import Mouse from '../input/Mouse';
import Touch from '../input/Touch';
import { offset } from 'ui-calc';
import { each } from 'ui-utils';

const createPointer = (e) => e.touches ? new Touch(e) : new Mouse(e);
const getActualEvent = (e) => e.originalEvent || e;

export default class Track extends Action {
    constructor(props, input) {
        super(props);
        this.input = input.state ? input : createPointer(getActualEvent(input));
    }

    start() {
        super.start();
        this.inputOrigin = {};
    }

    update(track, frameDuration, elapsed) {
        this.inputOffset = offset(this.inputOrigin, this.input.state);

        each(this.values, (value, key) => {
            if (this.inputOffset.hasOwnProperty(key)) {
                if (value.direct) {
                    value.current = this.input.state[key];
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
