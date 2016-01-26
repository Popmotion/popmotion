import Action from './Action';
import Pointer from '../input/Pointer';
import { offset } from '../inc/calc';
import { each } from '../inc/utils';

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
    new Pointer(mouseEventToPoint(e), 'mousemove', mouseEventToPoint) :
    new Pointer(touchEventToPoint(e), 'touchmove', touchEventToPoint);

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

    onUpdate() {
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
