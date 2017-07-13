import { composite, value, css, pointer, trackOffset } from 'popmotion';

export default function draggable(node, {
  x = true,
  y = true,
  initialX = 0,
  initialY = 0,
  onDrag,
  onDragStart,
  onDragStop
}) {
  const nodeRenderer = css(node);
  const values = {};
  if (x) values.x = value(initialX, (v) => nodeRenderer.set('x', v));
  if (y) values.y = value(initialY, (v) => nodeRenderer.set('y', v));
  const nodeXY = composite(values, {
    onUpdate: onDrag
  });

  function startTracking(e) {
    const pointerTracker = pointer(e).start();

    trackOffset(pointerTracker.x, {
      from: nodeXY.x.get(),
      onUpdate: nodeXY.x
    }).start();

    trackOffset(pointerTracker.y, {
      from: nodeXY.y.get(),
      onUpdate: nodeXY.y,
      onStop: () => pointerTracker.stop()
    }).start();

    if (onDragStart) onDragStart();
  }

  function stopTracking() {
    nodeXY.stop();

    if (onDragStop) onDragStop();
  }

  node.addEventListener('mousedown', startTracking);
  node.addEventListener('touchstart', startTracking, { passive: false });
  document.addEventListener('mouseup', stopTracking);
  document.addEventListener('touchend', stopTracking);

  return nodeXY;
}
