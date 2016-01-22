import Input from './Input';

const MOUSE_MOVE = 'mousemove';

/*
    Scrape x/y coordinates from provided event

    @param [event]
    @return [object]
*/
const eventToPoint = (e) => ({
    x: e.pageX,
    y: e.pageY
});

export default class Mouse extends Input {
    constructor(e) {
        super();
        this.state = eventToPoint(e);
        this.bindEvents();
    }

    latest(e) {
        super.latest(eventToPoint(e));
        e.preventDefault();
    }

    start() {
        super.start();
        document.documentElement.addEventListener(MOUSE_MOVE, this.onMove);
    }

    stop() {
        super.stop();
        document.documentElement.removeEventListener(MOUSE_MOVE, this.onMove);
    }
}