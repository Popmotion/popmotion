---
title: Touches
description: Tracks multi-touch movement.
category: action
---

# Touches

Creates a [`parallel`](/api/parallel) action that tracks an array of `x`/`y` movements from multiple touch targets.

`touches(e <MouseEvent | TouchEvent>, props <Object>)`

Mouse movements will generate a single touch.

## Example

```javascript
import { touches } from 'popmotion';

let touchesTracker;

document.addEventListener('touchstart', (e) => {
  if (action) action.stop();
  touchesTracker = touches(e, {
    preventDefault: false,
    onUpdate: (touches) => {
      console.log(
        'Touch count: ' + touches.length,
         'First touch x: ' + touches[0].x.get()
      );
    }
  }).start();
});

document.addEventListener('touchend', (e) => {
  if (touchesTracker) touchesTracker.stop();
});
```

## Props

- `preventDefault <Boolean>`: (default `true`) Will `preventDefault` for the `touchmove` or `mousemove` events (default `true`)
