import {
  pointer,
  calc,
  value,
  css,
  physics,
  trackOffset
} from 'popmotion';
const { angle } = calc;

export default function spinnable(node, {
  initialRotation = 0,
  friction = 0.4,
  transformSpin,
  onSpin
}) {
  const renderer = css(node);
  const nodeRotation = value(initialRotation, (v) => {
    const current = transformSpin ? transformSpin(v) : v;
    if (onSpin) onSpin(current);
    renderer.set('rotate', current);
  });

  function startTracking(e) {
    e.preventDefault();
    const pointerAngle = pointer(e, {
      transform: (v) => {
        const nodePos = node.getBoundingClientRect();
        const nodeCenter = {
          x: nodePos.left + (nodePos.width / 2),
          y: nodePos.top + (nodePos.height / 2)
        };
        const angleFromCenter = angle(nodeCenter, v);

        return angleFromCenter;
      }
    }).start();

    trackOffset(pointerAngle, {
      from: nodeRotation.get(),
      onUpdate: nodeRotation,
      onStop: () => pointerAngle.stop()
    }).start();
  }

  function stopTracking() {
    physics({
      from: nodeRotation.get(),
      velocity: nodeRotation.getVelocity(),
      friction,
      onUpdate: nodeRotation
    }).start();
  }

  node.addEventListener('mousedown', startTracking);
  node.addEventListener('touchstart', startTracking, { passive: false });
  document.addEventListener('mouseup', stopTracking);
  document.addEventListener('touchend', stopTracking);

  return nodeRotation;
}
