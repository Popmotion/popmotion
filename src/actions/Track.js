import Action from './Action';
import Pointer from '../input/Pointer';
import { offset } from '../inc/calc';

/*
    Scrape x/y coordinates from provided event

    @param [event]
    @return [object]
*/
const mouseEventToPoint = (e) => ({
    x: e.pageX,
    y: e.pageY
});

const touchEventToPoint = ({ changedTouches }) => ({
    x: changedTouches[0].clientX,
    y: changedTouches[0].clientY
});

const createPointer = (e) => e.touches ?
    new Pointer(touchEventToPoint(e), 'touchmove', touchEventToPoint) : 
    new Pointer(mouseEventToPoint(e), 'mousemove', mouseEventToPoint);

const getActualEvent = (e) => e.originalEvent || e;

export default class Track extends Action {
    start(input) {
        super.start();

        if (input) {
            this.input = input.state ? input : createPointer(getActualEvent(input));
        }

        this.inputOffset = {};
        this.inputOrigin = { ...this.input.state };
        this.input.start();
    }

    stop() {
        super.stop();
        this.input.stop();
    }

    onUpdate() {
        const values = this.values;
        this.inputOffset = offset(this.inputOrigin, this.input.state);

        for (let key in values) {
            if (values.hasOwnProperty(key) && this.inputOffset.hasOwnProperty(key)) {
                const value = values[key];
                if (value.direct) {
                    value.current = this.input.state[key];
                } else {
                    value.current = value.origin + this.inputOffset[key];
                }
            }
        }
    }

    getDefaultValue() {
        return {
            ...super.getDefaultValue(),
            amp: 1,
            escapeAmp: 0,
            direct: false
        };
    }
}
