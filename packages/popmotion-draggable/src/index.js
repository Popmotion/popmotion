import { value, styler, pointerDelta } from 'popmotion';

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
    values.x.subscribe((v) => nodeRenderer.set('x', v));
  }

  if (y) {
    values.y = value(initialY);
    values.y.subscribe((v) => nodeRenderer.set('y', v));
  }

  let trackPointer;

  function startTracking(e) {
    trackPointer = pointerDelta({
      x: x ? values.x.get() : 0,
      y: y ? values.y.get() : 0
    }).start((v) => {
      if (x) values.x.update(v);
      if (y) values.y.update(v);
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

  return nodeXY;
}
