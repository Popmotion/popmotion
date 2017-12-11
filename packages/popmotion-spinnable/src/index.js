import {
  pointer,
  calc,
  value,
  styler,
  physics,
  transform
} from 'popmotion';
const { angle } = calc;
const { applyOffset } = transform;

export default function spinnable(node, {
  initialRotation = 0,
  friction = 0.4,
  transformSpin,
  onSpin
} = {}) {
  const nodeStyler = styler(node);
  const nodeRotation = value(initialRotation);
  let active;

  nodeRotation.subscribe((v) => {
    const current = transformSpin ? transformSpin(v) : v;
    if (onSpin) onSpin(current);
    nodeStyler.set('rotate', current);
  });

  function startTracking(e) {
    e.preventDefault();
    if (active) active.stop();

    active = pointer()
      .pipe(
        (v) => {
          const nodePos = node.getBoundingClientRect();
          const nodeCenter = {
            x: nodePos.left + (nodePos.width / 2),
            y: nodePos.top + (nodePos.height / 2)
          };
          const angleFromCenter = angle(nodeCenter, v);

          return angleFromCenter;
        },
        applyOffset(nodeRotation.get())
      )
      .start(nodeRotation);
  }

  function stopTracking() {
    if (active) active.stop();
    active = physics({
      from: nodeRotation.get(),
      velocity: nodeRotation.getVelocity(),
      friction
    }).start(nodeRotation);
  }

  node.addEventListener('mousedown', startTracking);
  node.addEventListener('touchstart', startTracking, { passive: false });
  document.addEventListener('mouseup', stopTracking);
  document.addEventListener('touchend', stopTracking);

  return {
    stop: () => active && active.stop()
  };
}
