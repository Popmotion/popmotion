---
title: Pointer tracking
description: Learn to track pointer movement and use that to drag DOM elements.
category: basics
next: velocity-and-physics
---

# Pointer tracking

Pointer tracking is an integral part of user interfaces.

Drag & drop, scrolling galleries, and measuring touch scroll speed are some obvious use cases.

In this quick tutorial, we'll first see how to convert DOM events into streams of values with the `listen` action.

Then, we'll look at how to track mouse and touch movement with the `pointer` action and then use that pointer's movement to drag a DOM element.

## The `listen` action

Popmotion provides the [`listen` action](/api/listen) to add event listeners to the DOM.

```javascript
import { listen } from 'popmotion';
```

It accepts event names as a space-delimited string, meaning you can use a single `listen` call to listen to multiple events:

```javascript
listen(document, 'mousedown touchstart')
  .start((e) => console.log(e));
```

Just like the good-old days of jQuery!

As `listen` is an [action](/api/action), it offers all the same chainable methods.

For example, here's how you could make a `touchmove` listener that only fires when there's more than two `touches`:

```javascript
listen(document, 'touchmove')
  .filter(({ touches }) => touches.length >= 2)
  .start((e) => /* This event has more than 2 touches! */);
```

## The `pointer` action

The `pointer` action provides a generic interface for interacting with **single point** mouse and touch inputs (for multitouch, Popmotion offers the [`multitouch` action](/api/multitouch)).

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
    .start(ballStyler.set);
};

const stopTracking = () => {
  if (pointerTracker) pointerTracker.stop();
};

listen(ball, 'mousedown touchstart').start(startTracking);
listen(document, 'mouseup touchend').start(stopTracking);
`}</Example>
```

**Oh dear.** The ball moves, but it jumps to a weird location (maybe one that's off-screen entirely!)

The reason for this is simple. `pointer` is outputting the `{ x, y }` position of the pointer **relative to the viewport**.

The **ball's** `{ x, y }` transform begins at `0, 0`. So if we apply the pointer's absolute position directly to the ball, it won't move where we want it to.

Instead, we want to apply the **movement** of the `pointer` to the ball's initial position.

To do this, we can provide `pointer` with an initial `{ x, y }` point, and it will output the movement of its `{ x, y }` **relative to that point**:

```javascript
pointer({ x: 0, y: 0 })
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
  }).start(ballStyler.set);
};

const stopTracking = () => {
  if (pointerTracker) pointerTracker.stop();
};

listen(ball, 'mousedown touchstart').start(startTracking);
listen(document, 'mouseup touchend').start(stopTracking);
`}</Example>
```

## Single-axis dragging

Limiting dragging to a single axis is a matter of using just the `x` or `y` output from `pointer`.

We could do this via the reaction:

```javascript
pointer().start(({ x }) => ballStyler.set('x', x));
```

But the more reusable way is to **compose a new action** using `pointer`'s `pipe` method. We can provide it a simple picker function that selects `x` from `pointer`'s output and returns it:

```javascript
const xPointer = (initialX) => pointer({ x: initialX })
  .pipe(({ x }) => x);
```

Now we can use our newly composed `xPointer` like so:

```javascript
xPointer(ballStyler.get('x'))
  .start(ballStyler.set('x'));
```

```marksy
<Example template="Ball" id="c" autostart={true}>{`
const ball = document.querySelector('#c .ball');
const ballStyler = styler(ball);
const xPointer = (initialX) => pointer({ x: initialX })
  .pipe(({ x }) => x);

let pointerTracker;

const startTracking = () => {
  pointerTracker = xPointer(ballStyler.get('x'))
    .start(ballStyler.set('x'));
};

const stopTracking = () => {
  if (pointerTracker) pointerTracker.stop();
};

listen(ball, 'mousedown touchstart').start(startTracking);
listen(document, 'mouseup touchend').start(stopTracking);
`}</Example>
```

## Conclusion

`listen` can convert DOM events into reactive streams of values. Useful for leveraging `pipe` and other chainable methods, and composing `listen` with other actions.

`pointer` can output values either absolutely, or, if we provide initial coordinates, by applying its delta relatively.

Finally, we can compose new actions to produce reusable bits of code with new behaviour, like single-axis dragging.

## Next

Now that we've got dragging working, in the [next tutorial](/learn/velocity-and-physics) we will learn how to inspect the `velocity` of the dragged object and apply that to `decay`, `physics` and `spring` actions to create natural-feeling interactions.
