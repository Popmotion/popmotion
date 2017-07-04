import value from './value';
import composite from './composite';

function createPointer({ x, y }, { eventToPoints, moveEvent, ...props }) {
  const pointer = composite({
    x: value(x),
    y: value(y)
  }, {
    preventDefault: true,
    ...props
  });

  const updatePointer = (e) => {
    if (pointer.getProp('preventDefault')) {
      e.preventDefault();
    }

    const points = eventToPoints(e);
    pointer.x.set(points.x);
    pointer.y.set(points.y);
  };

  pointer.setProps({
    _onStart: () => document.documentElement.addEventListener(moveEvent, updatePointer, { passive: !pointer.getProp('preventDefault') }),
    _onStop: () => document.documentElement.removeEventListener(moveEvent, updatePointer)
  });

  return pointer;
}

const mouseEventToPoint = (e) => ({
  x: e.clientX,
  y: e.clientY
});

const touchEventToPoint = ({ changedTouches }) => ({
  x: changedTouches[0].clientX,
  y: changedTouches[0].clientY
});

const getNativeEvent = (e) => e.originalEvent || e.nativeEvent || e;

export default (e, props) => {
  const nativeEvent = getNativeEvent(e);
  return (nativeEvent.touches) ?
    createPointer(touchEventToPoint(e), {
      moveEvent: 'touchmove',
      eventToPoints: touchEventToPoint,
      ...props
    }) :
    createPointer(mouseEventToPoint(e), {
      moveEvent: 'mousemove',
      eventToPoints: mouseEventToPoint,
      ...props
    });
};
