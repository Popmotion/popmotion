import value from '../value';

class Pointer {
  constructor({ x, y }, { eventToPoints, moveEvent }) {
    this.x = value(x);
    this.y = value(y);
    this.moveEvent = moveEvent;
    this.eventToPoints = eventToPoints;
    this.update = this.update.bind(this);
  }

  update(e) {
    e.preventDefault();
    const { x, y } = this.eventToPoints(e);
    this.x.update(x);
    this.y.update(y);
  }

  start() {
    document.documentElement.addEventListener(this.moveEvent, this.update);
  }

  stop() {
    document.documentElement.removeEventListener(this.moveEvent, this.update);
  }
}

const mouseEventToPoint = (e) => ({
  x: e.pageX,
  y: e.pageY
});

const touchEventToPoint = ({ changedTouches }) => ({
  x: changedTouches[0].clientX,
  y: changedTouches[0].clientY
});

const getNativeEvent = (e) => e.originalEvent || e.nativeEvent || e;

export default (e) => {
  const nativeEvent = getNativeEvent(e);
  return (nativeEvent.touches) ?
    new Pointer(touchEventToPoint(e), {
      moveEvent: 'touchmove',
      eventToPoints: touchEventToPoint
    }) :
    new Pointer(mouseEventToPoint(e), {
      moveEvent: 'mousemove',
      eventToPoints: mouseEventToPoint
    });
}
