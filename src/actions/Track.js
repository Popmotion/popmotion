import Action from './Action';
import Pointer from '../input/Pointer';
import { smooth, offset } from '../inc/calc';

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

class Track extends Action {
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

    onUpdate(track, frameStamp, elapsed) {
        this.inputOffset = offset(this.inputOrigin, this.input.state);

        for (let i = 0; i < this.numValueKeys; i++) {
            const key = this.valueKeys[i];

            if (this.inputOffset.hasOwnProperty(key)) {
                const value = this.values[key];
                const inputProp = value.hasOwnProperty('watch') ? value.watch : key;

                if (value.direct) {
                    value.current = this.input.state[inputProp];
                } else {
                    value.current = value.from + this.inputOffset[inputProp];
                }

                // Smooth value if we have smoothing
                if (value.smooth) {
                    value.current = smooth(value.current, value.prev, elapsed, value.smooth);
                }
            }
        }
    }
}

Track.prototype.defaultValueProp = 'watch';
Track.prototype.defaultValue = Action.extendDefaultValue({
    direct: false
});

export default Track;
