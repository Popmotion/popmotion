---
title: Pointers and dragging
description: Learn to track mouse and touch movement and use that to drag DOM elements.
category: basics
next: velocity-and-physics
---

# Pointers and dragging

User input tracking can be used for a ton of different purposes. Drag & drop, scrolling galleries and performantly measuring touch scroll speed are some of the first to come to mind.

In this quick tutorial, we'll look at how to track mouse and touch movement with the `pointer` action.

Then, we'll track the pointer's offset and use that to drag a DOM element around.

## The `pointer` action

The `pointer` action provides a generic interface for interacting with mouse and touch input. When provided with a `MouseEvent` or `TouchEvent`, it will output the `clientX` `clientY` positions to the provided `onUpdate` function.

First, import the action:

```javascript
import { pointer } from 'popmotion';
```

We need to provide either a `MouseEvent` or `TouchEvent` to `pointer` to begin tracking. This is usually taken from a `mousedown`/`touchstart` event, as this is when a user is signalling an intent to interact. But it can be just as easily taken from `mousemove`/`touchmove`.

```javascript
let pointerTracker;

// Start tracking pointer movement
document.addEventListener('mousedown', (event) => {
  pointerTracker = pointer(event, {
    onUpdate: ({ x, y }) => console.log(x, y)
  }).start();
});

// Stop tracking pointer movement
document.addEventListener('mouseup', () => {
  if (pointerTracker) pointerTracker.stop();
});
```

## Dragging

It's that simple to track and output pointer movement, but the majority of the time we're using that data to drag or scroll.

`pointer` provides "absolute" positioning. That is, if you start tracking at `x: 50, y: 100`, you can't apply those values directly to an element that might technically be at the location on screen and yet has a `x,y` transform of `0,0`.

To get "relative" positioning we have another action, `trackOffset`. This tracks the **offset** of any provided action, whether it's `tween`, `physics` or in our case, `pointer`.

```javascript
import { pointer, trackOffset } from 'popmotion';
```

Here's how we'd track the offset of just the `x` axis:

```javascript
document.addEventListener('mousedown', (e) => {
  const pointerTracker = pointer(e).start();

  // Note: We're providing just the `x` property of `pointerTracker`, as
  // `pointer` returns a composite action of `x` and `y` actions.
  trackOffset(pointerTracker.x, {
    onUpdate: (x) => console.log(x)
  }).start();
});
```

This code will output `0` when the mouse starts moving, and apply any further mouse movement to that `0`. We can also supply a different `from` value to start from a number other than `0`:

```javascript
trackOffset(pointerTracker.x, {
  from: 50,
  onUpdate: (x) => console.log(x)
}).start();
```

Which means, if we have a DOM element, we can provide its current `x` location to the `from` property and we'll start applying pointer movement to that, resulting in a drag. Take a look at this live, editable example:

(To activate this demo, press "Start" and then start dragging the ball around)

```marksy
<Example template="Ball">{`
const ball = document.querySelector('.ball');
const ballRenderer = css(ball);
let pointerTracker;
let xOffset;

// Start tracking
function startTracking(e) {
  pointerTracker = pointer(e).start();
  xOffset = trackOffset(pointerTracker.x, {
    from: ballRenderer.get('x'),
    onUpdate: (x) => ballRenderer.set('x', x)
  }).start();
}

// Finish tracking
function stopTracking() {
  if (pointerTracker) pointerTracker.stop();
  if (xOffset) xOffset.stop();
}

ball.addEventListener('mousedown', startTracking);
ball.addEventListener('touchstart', startTracking);
document.addEventListener('mouseup', stopTracking);
document.addEventListener('touchend', stopTracking);
`}</Example>
```

Now we've got dragging working, in the next topic we'll look at getting the velocity of a user's pointer movements and providing that to a `physics` action. With that, we can produce a variety of momentum-based scrolling or spring-based "snap to" animations that feel natural, physical and engaging compared to traditional tweens.
