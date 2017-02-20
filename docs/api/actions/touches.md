---
title: Touches
description: Tracks multi-touch movement.
---

# Touches

Creates a composite action that tracks a collection of `x`/`y` movements from multiple touch targets.

`touches(e <MouseEvent | TouchEvent>, props <Object>)`

Mouse movements will only ever generate a single touch.

## Example

```javascript
import { touches } from 'popmotion';

document.addEventListener('onTouchStart', (e) => {
  touches(e, {
    preventDefault: true,
    onUpdate: ({ touchChanges, touchCount }) => {
      console.log(
        `Total active touches: ${touchCount},
         Array of changed {x,y} touches: ${touchChanges}`)
    }
  }).start();
});
```

## Properties

* `touchChanges <Array<{x:Number,y:Number}>>`
  * list of {x,y} coordinates from the `changedTouches` of `touchmove` event
  * mouse events are always a list of one
* `touchCount <Number>`
  * count of `touches` in the `touchmove` event
  * includes all UI touches; may be greater than `touchChanges.length`
  * mouse events will always be `1`

## Props

- `preventDefault <Boolean>`: (default `true`) Will `preventDefault` for the `touchmove` or `mousemove` events .
