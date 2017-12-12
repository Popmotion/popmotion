import value from 'popmotion/reactions/value';
import listen from 'popmotion/input/listen';
import pointer from 'popmotion/input/pointer';
import styler from 'stylefire';

export default function draggable(node, {
  x = true,
  y = true,
  initialX = 0,
  initialY = 0,
  onDrag,
  onDragStart,
  onDragStop
} = {}) {
  const nodeStyler = styler(node);
  const values = {};

  if (x) {
    values.x = value(initialX, nodeStyler.set('x'));
  }

  if (y) {
    values.y = value(initialY, nodeStyler.set('y'));
  }

  let trackPointer;

  function startTracking() {
    trackPointer = pointer({
      x: x ? values.x.get() : 0,
      y: y ? values.y.get() : 0
    }).start((v) => {
      if (x) values.x.update(v.x);
      if (y) values.y.update(v.y);
      if (onDrag) onDrag(values);
    });

    if (onDragStart) onDragStart(values);
  }

  function stopTracking() {
    if (trackPointer) trackPointer.stop();
    if (onDragStop) onDragStop(values);
  }

  listen(node, 'mousedown touchstart').start(startTracking);
  listen(document, 'mouseup touchend').start(stopTracking);

  return {
    stop: () => trackPointer && trackPointer.stop()
  };
}
