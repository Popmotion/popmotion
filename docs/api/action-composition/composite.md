---
title: Composite
description: Control multiple named actions simultaneously.
category: action-composition
---

# Composite Action

Control multiple named actions simultaneously. Output value is an object. Composite actions can be nested.

`composite(actions <Object>, props <Object>)`

## Example

Press "start" and then try dragging the ball around:

```marksy
<Example template="Ball">{`
const ball = document.querySelector('.ball');
const ballRenderer = css(ball);
let pointerTracker;
let pointerOffset;

const springProps = {
  to: 0,
  spring: 500,
  friction: 0.9
};

function startTracking(e) {
  if (pointerOffset) pointerOffset.stop();

  pointerTracker = pointer(e).start();
  pointerOffset = composite({
    x: trackOffset(pointerTracker.x, {
      from: ballRenderer.get('x')
    }),
    y: trackOffset(pointerTracker.y, {
      from: ballRenderer.get('y')
    })
  }, {
    onUpdate: (props) => ballRenderer.set(props)
  }).start();
}

function stopTracking() {
  if (pointerTracker) pointerTracker.stop();
  if (pointerOffset) pointerOffset.stop();
  pointerOffset = composite({
    x: physics({
      from: pointerOffset.get().x,
      velocity: pointerOffset.getVelocity().x,
      ...springProps
    }),
    y: physics({
      from: pointerOffset.get().y,
      velocity: pointerOffset.getVelocity().y,
      ...springProps
    })
  }, {
    onUpdate: (props) => ballRenderer.set(props)
  }).start();
}

ball.addEventListener('mousedown', startTracking);
ball.addEventListener('touchstart', startTracking);
document.addEventListener('mouseup', stopTracking);
document.addEventListener('touchend', stopTracking);
`}</Example>
```

## Methods

[...Action](action)
