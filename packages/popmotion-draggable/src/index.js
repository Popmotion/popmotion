import value from 'popmotion/reactions/value';
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
    values.x = value(initialX);
    values.x.subscribe((v) => nodeStyler.set('x', v));
  }

  if (y) {
    values.y = value(initialY);
    values.y.subscribe((v) => nodeStyler.set('y', v));
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

  node.addEventListener('mousedown', startTracking);
  node.addEventListener('touchstart', startTracking, { passive: false });
  document.addEventListener('mouseup', stopTracking);
  document.addEventListener('touchend', stopTracking);

  return {
    stop: () => trackPointer && trackPointer.stop()
  };
}
