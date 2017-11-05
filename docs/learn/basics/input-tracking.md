---
title: Pointers and dragging
description: Learn to track pointer movement and use that to drag DOM elements.
category: basics
next: velocity-and-physics
---

# Pointers and dragging

Pointer tracking can be used for multiple purposes. Drag & drop, scrolling galleries, and performantly measuring touch scroll speed are some obvious ones.

In this quick tutorial, we'll look at how to track mouse and touch movement with the `pointer` action.

Then, we'll use the pointer's movement to drag a DOM element.

## The `pointer` action

The `pointer` action provides a generic interface for interacting with mouse and singe touch input (for multitouch, Popmotion offers direct access to the `touch` action). 

It outputs the pointer's `clientX` and `clientY` properties as `x` and `y` respectively (while also returning its other positional properties like `pageX`.

First, import the action:

```javascript
import { pointer } from 'popmotion';
```

Let's make a simple example so we can see what `pointer` outputs:

```javascript
let pointerTracker;

// Start tracking pointer movement
document.addEventListener('mousedown', (event) => {
  pointerTracker = pointer().start(({ x, y }) => console.log(x, y));
});

// Stop tracking pointer movement
document.addEventListener('mouseup', () => {
  if (pointerTracker) pointerTracker.stop();
});
```

## Dragging

It's really that simple to track and output pointer movement, but the majority of time we're actually using that data to drag or scroll.

Let's use the `styler` function again to create a DOM element interface to provide the positional data to.

(To activate this demo, click "Start" and then drag the ball around)

```marksy
<Example template="Ball" id="a">{`
const ball = document.querySelector('#a .ball');
const ballStyler = styler(ball);
let pointerTracker;

function startTracking() {
  pointerTracker = pointer().start(({ x, y }) => ballStyler.set({ x, y }));
}

function stopTracking() {
  if (pointerTracker) pointerTracker.stop();
}

ball.addEventListener('mousedown', startTracking);
ball.addEventListener('touchstart', startTracking);
document.addEventListener('mouseup', stopTracking);
document.addEventListener('touchend', stopTracking);
`}</Example>
```

Oh dear. The ball moves, but it jumps to a weird location (maybe one that's off-screen entirely!)

The reason for this is simple. `pointer` is outputting the position of the pointer **relative to the viewport**. The ball's `x` and `y` transform begins at `0, 0`. So if we apply the pointer's position directly to the ball, it won't move where we want it to.

What we actually want to do is apply the **offset** of the `pointer`'s output, to the ball's initial position.

For this, Popmotion offers a second `pointer` input, called `pointerDelta`.

## Pointer Delta

`pointerDelta` accepts an **initial position**, in this case the ball's position, and then outputs its movement applied to that position.

So dragging becomes trivial:

```marksy
<Example template="Ball" id="b">{`
const ball = document.querySelector('#b .ball');
const ballStyler = styler(ball);
let pointerTracker;

function startTracking() {
  pointerTracker = pointerDelta({
    x: ballStyler.get('x'),
    y: ballStyler.get('y')
  }).start(({ x, y }) => ballStyler.set({ x, y }));
}

function stopTracking() {
  if (pointerTracker) pointerTracker.stop();
}

ball.addEventListener('mousedown', startTracking);
ball.addEventListener('touchstart', startTracking);
document.addEventListener('mouseup', stopTracking);
document.addEventListener('touchend', stopTracking);
`}</Example>
```

To drive home the power of functional composition, as discussed in the [previous tutorial](/learn/action-basics), here's the full source code of `pointerDelta`:

```javascript
const pointerDelta = ({ x, y }) => {
  const applyXOffset = applyOffset(x);
  const applyYOffset = applyOffset(y);
  const delta = { x: 0, y: 0 };

  return pointer().pipe((point) => {
    delta.x = applyXOffset(point.x);
    delta.y = applyYOffset(point.y);
    return delta;
  });
};
```

Now that we've got dragging working, in the [next tutorial](/learn/velocity-and-physics) we can learn how to inspect the `velocity` of a number and apply that to `decay`, `physics` and `spring` to create natural-feeling interactions.
