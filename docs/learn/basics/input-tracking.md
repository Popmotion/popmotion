---
title: Pointers and dragging
description: Learn to track mouse and touch movement and use that to drag DOM elements.
category: basics
next: velocity-and-physics
---

# Pointers and dragging

User input tracking can be used for a ton of different purposes. Drag & drop, scrolling galleries and performantly measuring touch scroll speed are some obvious use cases.

In this quick tutorial, we'll look at how to track mouse and touch movement with the `pointer` action.

Then, we'll track the pointer's offset and use that to drag a DOM element around.

## The `pointer` action

The `pointer` action provides a generic interface for interacting with mouse and touch input. When provided with a `MouseEvent` or `TouchEvent`, it will output the `clientX` `clientY` positions.

First, import the action:

```javascript
import { pointer } from 'popmotion';
```

We need to provide either a `MouseEvent` or `TouchEvent` to `pointer` to begin tracking. This is usually taken from a `mousedown`/`touchstart` event, as this is when a user is signalling an intent to interact, but `mousemove`/`touchmove` also work.

```javascript
let pointerTracker;

// Start tracking pointer movement
document.addEventListener('mousedown', (e) => {
  pointerTracker = pointer(e).start()
    .subscribe(({ x, y }) => console.log(x, y));
});

// Stop tracking pointer movement
document.addEventListener('mouseup', () => {
  if (pointerTracker) pointerTracker.stop();
});
```

## Dragging

When building interfaces, the majority of the time we're using pointer movement it's to drag.

`pointer` provides "absolute" positioning. That is, if you touch the screen at `x: 50, y: 100` **on the screen**, the element you want to drag might have a CSS transform of `x: 0, y: 0`. So we don't want to apply the pointer's screen coordinates directly to the element.

Instead, we want to apply the pointer's offset. That is, if it moves `50px` to the right, we want to move our element `50px` to the right.

For that, Popmotion includes a function called `applyOffset`. When given a number to **measure the offset from**, and a number to **apply that offset to**, it produces a new function that does exactly that.

It's a type of function called a **transformer**. Transformers are pure functions that take a value, change them, and return them.

In this case, `applyOffset(100, 75)(99)` would return `74`.

Because transformers all have the same signature, `(v) => v`, they can be **composed**. This is a concept in functional programming where we create complex functionality from simple functions.

An action's `subscribe` method can perform a simple composition, commonly called "pipe", automatically. By passing it multiple functions, `subscribe` will call each one in order, passing the next function the output of the last.

Let's see how we can use these concepts to neatly apply pointer movement to an element.

First, import `applyOffset`:

```javascript
import { pointer, transform } from 'popmotion';
const { applyOffset } = transform;
```

Now, we can amend our `mousedown` event:

```javascript
pointerTracker = pointer(e).start();
pointerTracker.subscribe(
  ({ x }) => x,
  applyOffset(pointerTracker.get().x, 0),
  (x) => console.log(x)
);
```

This will now output the **difference in the position of `x` from its original starting point**.

Which means, if we have a DOM element, we can provide its current `x` location to `applyOffset`'s `from` argument and we'll start applying pointer movement to that, resulting in a drag. Take a look at this live, editable example:

(To activate this demo, press "Start" and then start dragging the ball around)

```marksy
<Example template="Ball">{`
const { applyOffset } = transform;

const ball = document.querySelector('.ball');
const ballRenderer = css(ball);
let pointerTracker;

// Start tracking
function startTracking(e) {
  pointerTracker = pointer(e).start();
  pointerTracker.subscribe(
    ({ x }) => x,
    applyOffset(
      pointerTracker.get().x,
      ballRenderer.get('x')
    ),
    (x) => ballRenderer.set('x', x)
  );
}

// Finish tracking
function stopTracking() {
  if (pointerTracker) pointerTracker.stop();
}

ball.addEventListener('mousedown', startTracking);
ball.addEventListener('touchstart', startTracking);
document.addEventListener('mouseup', stopTracking);
document.addEventListener('touchend', stopTracking);
`}</Example>
```

Now we've got dragging working, in the [next topic](/learn/velocity-and-physics) we'll look at getting the `velocity` of a user's pointer movements and providing that to a `physics` action. With that, we can produce a variety of momentum-based scrolling or spring-based "snap to" animations that feel natural, physical and engaging compared to traditional tweens.
