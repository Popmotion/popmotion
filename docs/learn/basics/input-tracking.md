---
title: Pointer tracking
description: Learn to track pointer movement and use that to drag DOM elements.
category: basics
next: velocity-and-physics
---

# Pointer tracking

Pointer tracking is an integral part of user interfaces.

Drag & drop, scrolling galleries, and measuring touch scroll speed are some obvious use cases.

In this quick tutorial, we'll look at how to track mouse and touch movement with the `pointer` action.

Then, we'll use the pointer's movement to drag a DOM element.

## The `listen` action

Popmotion provides the [`listen` action](/api/listen) to add event listeners to the DOM.

```javascript
import { listen } from 'popmotion';
```

It accepts event names as a space-delimited string, meaning you can use a single `listen` call to listen to mulitple events:

```javascript
listen(document, 'mousedown touchstart')
  .start((e) => console.log(e));
```

As `listen` is an [action](/api/action), it offers all the same chainable methods.

For example, here's how you could make a `touchmove` listener that only fires when there's more than two `touches`:

```javascript
listen(document, 'touchmove')
  .filter(({ touches }) => touches.length >= 2);
```

## The `pointer` action

The `pointer` action provides a generic interface for interacting with mouse and singe touch input (for multitouch, Popmotion offers the [`multitouch` action](/api/multitouch)).

```javascript
import { pointer } from 'popmotion';
```

By default, `pointer` outputs the pointer's `clientX` and `clientY` properties as `x` and `y`.

```javascript
let pointerTracker;

listen(document, 'mousedown touchstart').start(() => {
  pointerTracker = pointer()
    .start(({ x, y }) => console.log(x, y));
});

listen(document, 'mouseup touchend').start(() => {
  if (pointerTracker) pointerTracker.stop();
});
```

## Dragging

The majority of time we actually want to use this movement data to drag or scroll.

Let's use the `styler` function again to create a DOM element interface to provide the positional data to.

Look at `startTracking` function and try to drag the ball:

```marksy
<Example template="Ball" id="a" autostart={true}>{`
const ball = document.querySelector('#a .ball');
const ballStyler = styler(ball);
let pointerTracker;

const startTracking = () => {
  pointerTracker = pointer()
    .start(({ x, y }) => ballStyler.set({ x, y }));
};

const stopTracking = () => {
  if (pointerTracker) pointerTracker.stop();
};

listen(ball, 'mousedown touchstart').start(startTracking);
listen(document, 'mouseup touchend').start(stopTracking);
`}</Example>
```

Oh dear. The ball moves, but it jumps to a weird location (maybe one that's off-screen entirely!)

The reason for this is simple. `pointer` is outputting the `{ x, y }` position of the pointer **relative to the viewport**.

The **ball's** `{ x, y }` transform begins at `0, 0`. So if we apply the pointer's absolute position directly to the ball, it won't move where we want it to.

Instead, we want to apply the **movement** of the `pointer` to the ball's initial position.

To do this, we can provide `pointer` with an initial `{ x, y }` point, and it will output `{ x, y }` **relative to that point**:

```javascript
pointer({ x: ballX, y: ballY })
```

Dragging becomes trivial:

```marksy
<Example template="Ball" id="b" autostart={true}>{`
const ball = document.querySelector('#b .ball');
const ballStyler = styler(ball);
let pointerTracker;

const startTracking = () => {
  pointerTracker = pointer({
    x: ballStyler.get('x'),
    y: ballStyler.get('y')
  }).start(({ x, y }) => ballStyler.set({ x, y }));
};

const stopTracking = () => {
  if (pointerTracker) pointerTracker.stop();
};

listen(ball, 'mousedown touchstart').start(startTracking);
listen(document, 'mouseup touchend').start(stopTracking);
`}</Example>
```

Now that we've got dragging working, in the [next tutorial](/learn/velocity-and-physics) we will learn how to inspect the `velocity` of the dragged object and apply that to `decay`, `physics` and `spring` actions to create natural-feeling interactions.
