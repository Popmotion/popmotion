---
title: Touches
description: Tracks multi-touch movement.
---

# Touches

Creates a composite action that tracks a collection of `x`/`y` movements from multiple touch targets.

`touches(e <MouseEvent | TouchEvent>, props <Object>)`

Mouse movements will generate a single touch.

## Example

```javascript
import { touches } from 'popmotion';

let action;

document.addEventListener('touchstart', (e) => {
  if (action) action.stop();
  action = touches(e, {
    preventDefault: true,
    onUpdate: (touches) => {
      console.log(
        `Touch count: ${touches.length},
         Touch coordinates: ${touches}`)
    }
  }).start();
});

document.addEventListener('touchend', (e) => {
  if (action) action.stop();
});
```

## Props

- `preventDefault <Boolean>`: (default `true`) Will `preventDefault` for the `touchmove` or `mousemove` events .
