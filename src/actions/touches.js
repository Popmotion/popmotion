import value from './value';
import composite from './composite';

function createTouches(newTouches, { eventToTouches, moveEvent, ...props }) {
  let touchValues = [];
  for (const i in newTouches) {
    const { x, y } = newTouches[i];
    touchValues[i] = composite({
      x: value(x),
      y: value(y)
    });
  }
  const touches = composite({
    changed: composite(touchValues),
    targetCount: value(newTouches.targetCount)
  }, {
    preventDefault: true,
    ...props
  });

  const updateTouches = (e) => {
    if (props.preventDefault) {
      e.preventDefault();
    }

    const newTouches = eventToTouches(e);
    for (const i in newTouches) {
      const { x, y } = newTouches[i];
      if (touches.changed[i] != null) {
        touches.changed[i].x.set(x);
        touches.changed[i].y.set(y);
      } else {
        touches.changed[i] = composite({
          x: value(x),
          y: value(y)
        });
      }
      touches.targetCount.set(newTouches.targetCount);
    }
  };

  touches.setProps({
    _onStart: () => document.documentElement.addEventListener(moveEvent, updateTouches),
    _onStop: () => document.documentElement.removeEventListener(moveEvent, updateTouches)
  });

  return touches;
}

const mouseEventToTouches = (e) => {
  let touches = [{
    x: e.pageX,
    y: e.pageY
  }];
  touches.targetCount = 1;
  return touches;
};

const touchEventToTouches = ({ changedTouches, touches }) => {
  let newTouches = [];
  for (var i = 0; i < changedTouches.length; i++) {
    const { clientX, clientY } = changedTouches[i];
    newTouches[i] = {
      x: clientX,
      y: clientY
    };
  }
  newTouches.targetCount = touches.length;
  return newTouches;
};

const getNativeEvent = (e) => e.originalEvent || e.nativeEvent || e;

export default (e, props) => {
  const nativeEvent = getNativeEvent(e);
  return (nativeEvent.touches) ?
    createTouches(touchEventToTouches(e), {
      moveEvent: 'touchmove',
      eventToTouches: touchEventToTouches,
      ...props
    }) :
    createTouches(mouseEventToTouches(e), {
      moveEvent: 'mousemove',
      eventToTouches: mouseEventToTouches,
      ...props
    });
};
