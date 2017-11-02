---
title: Pointers and dragging
description: Learn to track mouse and touch movement and use that to drag DOM elements.
category: basics
next: velocity-and-physics
---

# Pointers and dragging

Pointer tracking can be used for multiple purposes. Drag & drop, scrolling galleries, and performantly measuring touch scroll speed are some obvious ones.

In this quick tutorial, we'll look at how to track mouse and touch movement with the `pointer` action.

Then, we'll track the pointer's offset and use that to drag a DOM element around.

## The `pointer` action

The `pointer` action provides a generic interface for interacting with mouse and singe touch input (for multitouch, Popmotion offers direct access to the `touch` action). 

It outputs the pointer's `clientX` and `clientY` properties as `x` and `y` respectively.

First, import the action along with `style`:

```javascript
import { pointer, style } from 'popmotion';
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

It's that simple to track and output pointer movement, but the majority of time we're actually using that data to drag or scroll.

Let's use `style` again to provide the pointer coordinates to the DOM element.

This time, we won't provide `style` with a property name. It's return a function that accepts an object of values - exactly what `pointer` outputs!

(To activate this demo, click "Start" and then drag the ball around)

```marksy
<Example template="Ball" id="a">{`
const ball = document.querySelector('#a .ball');
const setBallPos = style(ball);
let pointerTracker;

function startTracking() {
  pointerTracker = pointer().start(setBallPos);
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

The reason for this is simple. `pointer` is outputting the position of the pointer on the screen. The ball's `x` and `y` transform begins at `0, 0`. What we actually want to do is apply the **offset** of `pointer`'s output, from its initial value.

For this, we can use some simple functional composition, a core concept in Popmotion.

## Transformers

[Transformers](/api/transformers) are simple functions that accept a **single value** and return a **single value**.

Consider this:

```javascript
const double = (v) => v * 2;
```

That is a transformer. Here is another:

```javascript
const multiply = (multiple) => (v) => v * multiple;
const double = multiply(2);
```

In this instance, `multiply` is not a `transformer`, but it does create one. Popmotion includes many such transformers, and as demonstrated, it's easy to write your own.

In this case, we want to apply the **offset** of the pointer to the ball's position. Popmotion includes a transformer that does just that, aptly named `applyOffset`.

## Single-axis dragging

First, let's use this to drag **just** the x-offset. For this, we need to get the current position of the ball.

Popmotion includes [Stylefire](/api/stylefire), so we can use that instead of the `style` reaction to create an optimised styler for the ball that will allow us to `get` its `x` position:

```javascript
import styler from 'stylefire';
import { transform, pointer } from 'popmotion';

const ball = document.querySelector('.ball');
const ballStyler = styler(ball);
let pointerTracker;
```

Every action in Popmotion has a `pipe` method. `pipe` takes a list of transformers and returns a **new version** of the action, which, when started, will first pass its `update` output through these functions.

So we can provide it with two functions, one that returns **just the `x`** pointer, and `applyOffset`:

```marksy
<Example template="Ball" id="b">{`
const ball = document.querySelector('#b .ball');
const setBallPos = style(ball);
let pointerTracker;

function startTracking() {
  pointerTracker = pointer()
    .pipe(
      ({ x }) => x,
      transform.applyOffset(ballStyler.get('x'))
    )
    .start(ballStyler.set('x'));
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

Much better!

## Multi-axis dragging

As `applyOffset` accepts just one numerical value, so we can use another transformer, `widen`.

`widen` accepts 

```javascript
const wideApplyOffset = widen(applyOffset);

const offsetPointer = (x, y) => pointer()
  .pipe(wideApplyOffset({
    x: ballStyler.set('x'),
    y: ballStyler.set('y')
  }));

function startTracking() {
  const { x = 0, y = 0 } = ballStyler.get(); 
  pointerTracker = offsetPointer(x, y)
    .start(ballStyler.set);
}
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

Now we've got dragging working, in the [next topic](/learn/velocity-and-physics) we'll look at getting the velocity of a user's pointer movements and providing that to a `physics` action. With that, we can produce a variety of momentum-based scrolling or spring-based "snap to" animations that feel natural, physical and engaging compared to traditional tweens.
