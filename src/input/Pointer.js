import composite from '../actions/composite';

function createPointer({ x, y }, { eventToPoints, moveEvent }) {

  const pointer = composite({
    x: {
      from: x
    },
    y: {
      from: x
    }
  });

  pointer.setProps({
    _onStart: () => document.documentElement.addEventListener(moveEvent, pointer.update),
    _onStop: () => document.documentElement.removeEventListener(moveEvent, pointer.update),
    _onUpdate: () => {}
  });
}

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
    createPointer(touchEventToPoint(e), {
      moveEvent: 'touchmove',
      eventToPoints: touchEventToPoint
    }) :
    createPointer(mouseEventToPoint(e), {
      moveEvent: 'mousemove',
      eventToPoints: mouseEventToPoint
    });
}
