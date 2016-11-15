import Input from './Input';

export default class Pointer extends Input {
  constructor(initialState, moveEvent, eventToPoint, preventDefault) {
    super(initialState);
    this.preventDefault = preventDefault;
    this.eventToPoint = eventToPoint;
    this.moveEvent = moveEvent;
    this.boundLatest = this.latest.bind(this);
  }

  latest(e) {
    super.latest(this.eventToPoint(e));
    if (this.preventDefault) {
      e.preventDefault();
    }
  }

  start() {
    super.start();
    document.documentElement.addEventListener(this.moveEvent, this.boundLatest);
  }

  stop() {
    super.stop();
    document.documentElement.removeEventListener(this.moveEvent, this.boundLatest);
  }
}
