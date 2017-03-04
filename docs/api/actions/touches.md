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

let action;

document.addEventListener('touchstart', (e) => {
  if (action) action.stop();
  action = touches(e, {
    preventDefault: true,
    onUpdate: ({ touches, touchCount }) => {
      console.log(
        `Touch count: ${touchCount},
         Touch coordinates: ${touches}`)
    }
  }).start();
});

document.addEventListener('touchend', (e) => {
  if (action) action.stop();
});
```

## Properties

* `touches <Array<{x:Number,y:Number}>>`
  * list of client {x,y} coordinates from the TouchEvent's `touches`
  * mouse events are always a list of one
* `touchCount <Number>`
  * count of `touches` in the `touchmove` event
  * mouse events will always be `1`

## Props

- `preventDefault <Boolean>`: (default `true`) Will `preventDefault` for the `touchmove` or `mousemove` events .
