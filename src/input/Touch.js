import Input from './Pointer';

const TOUCH_MOVE = 'touchmove';

/*
    Scrape x/y coordinates from provided event

    @param [event]
    @return [object]
*/
const eventToPoint = ({ changedTouches }) => ({
    x: changedTouches[0].clientX,
    y: changedTouches[0].clientY
});

export default class Touch extends Input {
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
        document.documentElement.addEventListener(TOUCH_MOVE, this.latest);
    }

    stop() {
        super.stop();
        document.documentElement.removeEventListener(TOUCH_MOVE, this.latest);
    }
}