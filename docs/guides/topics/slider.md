---
title: Slider
description: This guide explains how we can build complex interaction behaviors out of very simple functional blocks.
---

# Create a momentum and spring-based slider with composed value pipelines

In this guide, we're going to explore how you can use [Popmotion](https://github.com/Popmotion/popmotion) and basic functional composition to build complex behaviors from small, readable and testable units of code.

We'll be using physics and pointer tracking to create a scrollable list of items that, when released, move with momentum and slow down via friction. The scroll will be bounded by springs, so when the list is dragged out of bounds it'll be "pulled" back by an iOS-esque spring.

## [Live example and full code](http://codepen.io/popmotion/pen/EZaPxZ/)

You can fork [this tutorial template](http://codepen.io/popmotion/pen/XpXoqW?editors=0010) to follow along in CodePen.

## Create the slider renderer

Our first job is to make a simple renderer for the slider. The [css renderer](../../api/renderers/css.md) included in Popmotion can create an optimized get/setter for CSS properties. We'll use this to set the `translateX` transform property of the slider.

```javascript
const { css } = window.popmotion;
// Or with npm modules
// import { css } from 'popmotion';

const sliderDom = document.querySelector('.slider');
const sliderRenderer = css(sliderDom);
```

We can now `set` the `translateX` like this:

```javascript
sliderRenderer.set('x', -50);
```

By setting a property, Popmotion will schedule a render for the next `frameRender` step in the [render loop](../../api/render-loop.md).

## Pointer tracking

Popmotion provides a `pointer` action to track the movement of mouse and touch movement events. To begin, a mouse or touch event should be passed to `pointer`, and `start` called on the created action:

```javascript
const { pointer } = window.popmotion;
let activeAction;

function startDrag(e) {
  activeAction = pointer(e, {
    onUpdate: (v) => console.log(v)
  }).start();
}

document.body.addEventListener('mousedown', startDrag);
```

And to stop the action from tracking the pointer we can add a second event listener:

```javascript
function stopDrag() {
  if (activeAction) activeAction.stop();
}

document.body.addEventListener('mouseup', stopDrag);
```

## Drag the list

To now use this pointer to drag the list, we can give the pointer action a new `onUpdate` function that simply sets the `x` property on the renderer we created earlier. As `pointer` returns a [composite action](../../api/actions/composite.md), we can do this directly on its `x` value using the `output` shorthand method:

```javascript
// We'll be using this function a lot, so let's abstract it
const setSliderX = (x) => sliderRenderer.set('x', x);

function startDrag(e) {
  if (activeAction) activeAction.stop();
  activeAction = pointer(e).start();
  activeAction.x.output(setSliderX);
}
```

We're now dragging the list, but the `x` value being set is the direct value from the pointer. What we really want is to:

1. Measure the offset from the pointer's `x` origin.
2. Apply that offset to the slider's `x` origin.

This is where functional composition enters.

## Drag the list, properly

Functional value pipelines in Popmotion are composed from multiple functions that we refer to as [transformers](../../api/transformers.md). Transformers are simply pure functions that take a value, change it, and return it. Many transformers are curried, which means they first take some configuration properties and return a function that itself changes that value.

The glue of functional composition in Popmotion is the `flow` function. It takes a series of functions, and creates a new function where the provided argument is passed from left to right. Here's a completely arbitrary example:

```javascript
const plusOne = (v) => v + 1;
const plusThree = flow(plusOne, plusOne, plusOne);
const value = plusThree(0);
// value = 3
```

As an action's `onUpdate` is a function that's passed a single value, we can easily compose other functions into a single `onUpdate` function with `flow`.

```javascript
const { transform } = window.popmotion;
const { add, subtract, flow } = transform;

function startDrag(e) {
  if (activeAction) activeAction.stop();
  activeAction = pointer(e).start();

  const pointerX = activeAction.x.get();
  const sliderX = sliderRenderer.get('x');
  const onUpdate = flow(
    // Step 1: Measure the offset from the pointer's x origin
    subtract(pointerX),
    // Step 2: Apply that offset to the slider's x origin
    add(sliderX),
    // Step 3: Set slider x
    setSliderX
  );

  activeAction.x.setProps({ onUpdate });
}
```

Now the slider correctly drags, but it feels a little weird to have it stop dead when we let go. To preserve the momentum of the user's input, we can use physics.

## Scrolling momentum

The [physics](../../api/actions/physics.md) action takes a `velocity` property, measured in units per second (these units are usually pixels). Every action, whether it's a tween, pointer, anything, has a `getVelocity` method. So we can use this method to provide a velocity to `physics` when a user stops dragging:

```javascript
const { physics } = window.popmotion;
function stopDrag() {
  if (activeAction) {
    const sliderX = sliderRenderer.get('x');
    const sliderVelocity = activeAction.x.getVelocity();

    activeAction.stop();

    activeAction = physics({
      from: sliderX,
      velocity: sliderVelocity,
      onUpdate: setSliderX
    }).start();
  }
}
```

If you throw the slider gently, you'll see it move at the speed defined in `velocity`. But we need it to slow down, so we can provide a `friction` property to `physics`. Friction can be defined as `0`, no friction, or `1`, total friction. So let's set it to `0.2`, and you'll see it slow down very gradually.

```javascript
activeAction = physics({
  from: sliderX,
  velocity: sliderVelocity,
  friction: 0.98,
  onUpdate: setSliderX
}).start();
```

Play around with this setting to find a feeling you prefer. Higher levels of friction can produce feelings of weight, and vice versa.

This is all well and good, but the slider can be dragged and thrown outside of the screen. To prevent this, we could set hard limits, and stop the scrolling dead when the slider breaches them. But we can also make something nicer, more reactive, responsive and playful, by using springs.

## Define our boundaries

To know when to apply our springs, we need to define a value range, in pixels. Then we'll know, when the slider `x` offset moves beyond this range, to apply the springs.

In this instance we want the left boundary to be `0`, the left side of the screen. And the right offset should be the width of our viewport **minus** the width of the slider. This will set the right boundary to when the slider moves just within the right side of the viewport.

So at the top of our script:

```javascript
// Define the slider width
const items = document.querySelectorAll('.box');
const sliderWidth = items[items.length - 1].getBoundingClientRect().right;

// Define the viewport width and range
const range = [0];
let viewportWidth = 0;
function setMovementRange() {
  viewportWidth = container.clientWidth;
  range[1] = viewportWidth - sliderWidth - 10;
}
setMovementRange();

// Update the range when the browser resizes
window.addEventListener('resize', setMovementRange);
```

## Springs while dragging

Now we have the range of our permitted free movement, we can start applying springs.

Let's revisit our `startDrag` `onUpdate` function:

```javascript
const onUpdate = flow(
  subtract(pointerX),
  add(sliderX),
  setSliderX
);
```

We want to **conditionally** apply springs when our value is outside the permitted range, **before** we set the slider offset. Luckily, we have two transformers that can help us with just that: `conditional`, and `nonlinearSpring`.

`conditional` takes at least two arguments. The first is a comparitor - it takes our value and returns either `true` or `false`. If `true`, it fires the second argument, if `false` it either fires an optional third argument or returns the value unaltered.

`nonlinearSpring` is a spring implementation that, the further from the `target` our provided value is, the tighter the spring becomes. So as a user pulls further, the distance the slider will move will decrease.

Here's our updated `onUpdate` function:

```javascript
const SPRING_ELASTICITY = 5; // 0 is no elasticity
const onUpdate = flow(
  subtract(pointerX),
  add(sliderX),
  // If we're out of bounds to the left, apply spring
  conditional(
    (v) => v > range[0],
    nonlinearSpring(SPRING_ELASTICITY, range[0])
  ),
  // Or if we're out of bounds to the right, apply spring
  conditional(
    (v) => v < range[1],
    nonlinearSpring(SPRING_ELASTICITY, range[1])
  ),
  setSliderX
);
```

This works great **while** we're dragging, but we still need to deal with the slider when it's scrolling out of bounds.

## Spring while scrolling

There are two phases to this:
- What happens when the user stops scrolling when the slider is out of bounds? - What happens when a freely scrolling slider moves out of bounds?

The spring transformer is useful for instances when the input is time-independent. For instance, a user's finger may move anywhere at any point, so we can constantly recalculate a new value based from that. But when the input is time-dependent, like a physics simulation, we need to use a different method to integrate and feed back the effects of the spring.

The `physics` action itself actually has that capability, and we can use it to answer both of our questions above.

First, let's change our `stopDrag` function to answer both of these eventualities:

```javascript
const isOffLeft = (v) => (v >= range[0]);
const isOffRight = (v) => (v <= range[1]);
const isOutOfBounds = (v) => (isOffLeft(v) || isOffRight(v));

function stopDrag(e) {
  if (activeAction) {
    const offset = sliderRenderer.get('x');
    const velocity = activeAction.x.getVelocity();
    activeAction.stop();

    if (isOutOfBounds(offset)) {
      snapToNearestBoundary(offset, velocity);
    } else {
      startMomentumScrolling(offset, velocity);
    }
  }
}
```

## Snap to nearest boundary

The first eventuality, a user releases their pointer while the slider is out of bounds, is a simple spring physics simulation to the nearest boundary:

```javascript
function snapToNearestBoundary(offset, velocity) {
  activeAction = physics({
    from: offset,
    to: isOffLeft(offset) ? range[0] : range[1],
    spring: 1000,
    friction: 0.98,
    velocity,
    onUpdate: setSliderX
  }).start();
}
```

Here, we've provided a `spring` value - this is a different to the transformer's elasticity value in that higher numbers produce stronger springs. In the near future it will also provide an elasticity property for consistency.

We've set `spring` to a high value, `1000`. This produces a sharp action that feels very responsive. With a `friction` as high as `0.98`, the overshoot, or bounciness, of the spring, is slight but present. This gives it a slight softness that responds the distance the slider is released at.

## Momentum scroll

Our momentum action is the same as our first `stopDrag` momentum effect, except now we can compose a new `onUpdate` that checks, once per frame, if the slider offset has drifted out of bounds.

```javascript
function startMomentumScrolling(offset, velocity) {
  const onUpdate = flow(
    conditional(
      isOutOfBounds,
      (v, action) => {
        activeAction.stop();

        // Bounce slider against boundary
        activeAction = physics({
          from: v,
          velocity: action.getVelocity(),
          to: isOffLeft(offset) ? range[0] : range[1],
          spring: 300,
          friction: 0.9,
          onUpdate: setSliderX
        }).start();
      }
    ),
    setSliderX
  );

  // Momentum scroll physics
  activeAction = physics({
    from: offset,
    velocity,
    friction: 0.2,
    onUpdate
  }).start();
}
```

If our value drifts out of bounds we use another `physics` action, with a much softer spring and slightly lower friction. This softer spring is a much lazier one, and provides quite a nice effect when the slider settles to its nearest boundary position.

## [Finished example](http://codepen.io/popmotion/pen/EZaPxZ/)

And that's it! Only around 100 lines to make a snappy, responsive slider that works in a fairly declarative manner.

The great thing about this kind of composition is it's quite easy to imagine how we can create configurable factory functions that return these value pipelines. They can then become sharable across a codebase or as modules on npm.

This kind of composition is really changing the way I think about building interactions and I feel like there's a lot of potential to be explored in this area.
