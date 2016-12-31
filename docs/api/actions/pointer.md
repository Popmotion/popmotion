---
title: Pointer
description: Tracks mouse and touch movement.
---

# Pointer

Creates a composite action that tracks the `x` and `y` movement of touch and mouse events.

`pointer(e <MouseEvent | TouchEvent>, props <Object>)`

## Example

```javascript
import { pointer } from 'popmotion';

document.addEventListener('mousedown', (e) => {
  pointer(e, {
    preventDefault: true,
    onUpdate: ({ x, y }) => console.log(x, y)
  }).start();
});
```

## Props

- `preventDefault <Boolean>`: If `true`, fire `preventDefault` on `mousemove` or `touchmove` events (default `false`)
