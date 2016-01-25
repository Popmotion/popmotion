import Input from './Input';

export default class Pointer extends Input {
    constructor(initialState, moveEvent, eventToPoint) {
        super(initialState);
        this.eventToPoint = eventToPoint;
        this.moveEvent = moveEvent;
    }

    latest(e) {
        super.latest(this.eventToPoint(e));
        e.preventDefault();
    }

    start() {
        super.start();
        document.documentElement.addEventListener(this.moveEvent, this.latest);
    }

    stop() {
        super.stop();
        document.documentElement.removeEventListener(this.moveEvent, this.latest);
    }
}
