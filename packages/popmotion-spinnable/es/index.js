import { pointer, calc, value, styler, physics, transform, listen } from 'popmotion';
var angle = calc.angle;
var applyOffset = transform.applyOffset;


export default function spinnable(node) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$initialRotation = _ref.initialRotation,
      initialRotation = _ref$initialRotation === undefined ? 0 : _ref$initialRotation,
      _ref$friction = _ref.friction,
      friction = _ref$friction === undefined ? 0.4 : _ref$friction,
      transformSpin = _ref.transformSpin,
      onSpin = _ref.onSpin;

  var nodeStyler = styler(node);
  var nodeRotation = value(initialRotation);
  var active = void 0;

  nodeRotation.subscribe(function (v) {
    var current = transformSpin ? transformSpin(v) : v;
    if (onSpin) onSpin(current);
    nodeStyler.set('rotate', current);
  });

  function startTracking(e) {
    e.preventDefault();
    if (active) active.stop();

    active = pointer().pipe(function (v) {
      var nodePos = node.getBoundingClientRect();
      var nodeCenter = {
        x: nodePos.left + nodePos.width / 2,
        y: nodePos.top + nodePos.height / 2
      };
      var angleFromCenter = angle(nodeCenter, v);

      return angleFromCenter;
    }, applyOffset(nodeRotation.get())).start(nodeRotation);
  }

  function stopTracking() {
    if (active) active.stop();
    active = physics({
      from: nodeRotation.get(),
      velocity: nodeRotation.getVelocity(),
      friction: friction
    }).start(nodeRotation);
  }

  listen(node, 'mousedown touchstart').start(startTracking);
  listen(document, 'mouseup touchend').start(stopTracking);

  return {
    stop: function stop() {
      return active && active.stop();
    }
  };
}