---
title: Pointer
description: Tracks mouse and touch movement.
category: action
---

# Pointer

Creates a [`composite`](/api/composite) action that tracks the `x` and `y` movement of touch and mouse events.

`pointer(e <MouseEvent | TouchEvent>, props <Object>)`

```javascript
import { pointer } from 'popmotion';
```

Click "start" and then click and drag around the page.

```marksy
<Example template="Counter" id="a">{`
const counter = document.querySelector('#a .counter');
let pointerTracker;

function startTracking(e) {
  pointerTracker = pointer(e, {
    onUpdate: ({ x, y }) => counter.innerHTML = 'x: ' + x + ' y: ' + y
  }).start();
}

function stopTracking() {
  if (pointerTracker) pointerTracker.stop();
}

document.addEventListener('mousedown', startTracking);
document.addEventListener('touchstart', startTracking);
document.addEventListener('mouseup', stopTracking);
document.addEventListener('touchend', stopTracking);
`}</Example>
```

## Props

- `preventDefault <Boolean>`: If `true`, fire `preventDefault` on `mousemove` or `touchmove` events (default `true`)
[...Action](/api/action)

## Methods

[...Action](/api/action)
