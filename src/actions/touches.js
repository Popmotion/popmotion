import value from './value';
import composite from './composite';

function createTouches({ changed, target, all }, { eventToTouches, moveEvent, ...props }) {
  const touches = composite({
    changedTouches: mapCoordsToActions(changed),
    targetTouches: mapCoordsToActions(target),
    touches: mapCoordsToActions(all),
    touchCount: value(all.length)
  }, {
    preventDefault: true,
    ...props
  });

  function updateTouches(e) {
    if (props.preventDefault) {
      e.preventDefault();
    }
    const { changed, target, all } = eventToTouches(e);
    updateActionWithTouches(touches, 'changedTouches', changed);
    updateActionWithTouches(touches, 'targetTouches', target);
    updateActionWithTouches(touches, 'touches', all);
    touches.touchCount.set(all.length);
  }

  touches.setProps({
    _onStart: () => document.documentElement.addEventListener(moveEvent, updateTouches),
    _onStop: () => document.documentElement.removeEventListener(moveEvent, updateTouches)
  });

  return touches;
}

function mapCoordsToActions(coords) { 
  let actions = [];
  for (var i = 0; i < coords.length; i++) {
    const { x, y } = coords[i];
    actions[i] = composite({
      x: value(x),
      y: value(y)
    });
  }
  return composite(actions);
}

function updateActionWithTouches(action, name, newTouches) {
  for (const i in newTouches) {
    const { x, y } = newTouches[i];
    if (action[name][i] != null) {
      action[name][i].x.set(x);
      action[name][i].y.set(y);
    } else {
      action[name][i] = composite({
        x: value(x),
        y: value(y)
      });
    }
  }
}

const mouseEventToTouches = ({ pageX, pageY }) => {
  const touches = [{
    x: pageX,
    y: pageY
  }];
  return {
    changed: touches,
    target: touches,
    all: touches
  };
};

const touchEventToTouches = ({ changedTouches, targetTouches, touches }) => {
  return {
    changed: extractCoords(changedTouches),
    target: extractCoords(targetTouches),
    all: extractCoords(touches)
  };
};

function extractCoords(touches) { 
  let actions = [];
  for (var i = 0; i < touches.length; i++) {
    const { clientX, clientY } = touches[i];
    actions[i] = {
      x: clientX,
      y: clientY
    };
  }
  return actions;
}

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
