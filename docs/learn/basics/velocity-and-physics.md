---
title: Velocity and physics
description: Create responsive interactions with velocity, decay, physics and spring.
category: basics
---

# Velocity and physics

A core feature of Popmotion is to easily inspect the `velocity` of numbers.

We can pass `velocity` to `decay`, `physics` and `spring` actions to create smooth transitions between animations and let the user affect the animations with their own input.

## Inspect velocity

Popmotion provides a special type of reaction called `value`.

`value` can be subscribed to by multiple other reactions and, crucially, it can maintain state. This state can be retrieved with `get`, or its velocity queried with `getVelocity`.

`velocity` is measured in **units per second**. Why? Although 60fps is the current common framerate, VR devices support 90+ fps and the iPad Pro delivers a silky 120 frames per second!

To future-proof our code, we decouple velocity from the device framerate, otherwise our animations would run at 1.5x or even 2x the speed on these faster displays.

## Using `value`

`value` is provided a single argument, its initial value:

```javascript
import { value } from 'popmotion';

const foo = value(0);
```

As `value` is a reaction, it has an `update` method. We can call it to update the value:

```javascript
foo.update(5);
```

We can also subscribe to the value with another reaction:

```javascript
foo.subscribe((v) => console.log(v)); // 5
```

This reaction will receive the current value as soon as it subscribes, and any future `update`s.

Now, if we pass this value to an animation or input, we can query it to receive the animation's current velocity.

## Get `pointer` velocity

Using the example from the [previous tutorial](/learn/input-tracking), let's first make a `value` that updates `ballStyler`'s `x` property when it `update`s:

```javascript
const ballX = value(0);
ballX.subscribe((v) => ballStyler.set('x', v));
```

Now we can replace the `startDrag` and `stopDrag` functions with this:

```javascript
function startDrag() {
  pointerTracker = pointerDelta({ x: ballX.get('x'), y: 0 })
    .start(ballX);
}

function stopDrag() {
  pointerTracker.stop();
  const velocity = ballX.getVelocity();
}
```

## Using `velocity`

Three Popmotion actions accept a `velocity` property: `decay`, `physics` and `spring`.

By using the current velocity of an animation to affect a new one, transitions between animations are smoother.

Likewise, it's incredibly engaging, delightful and playful for a user when the energy from their actions directly affects the following animations.

Let's modify `stopDrag` three times so we provide `velocity` and take a look at what each of these animations does with it.

## `decay`

[`decay`](/api/decay) exponentially decreases a velocity over time. It's a form of the algorthim used in smartphone momentum scrolling, making it a natural-feeling way of slowing something down.

Based on the initial properties and `velocity`, it'll automatically calculate a `target` to animate to.

Using it is as easy as passing our newly-calculated `velocity` to `decay`:

```javascript
decay({ velocity }).start(ballX);
```

```marksy
<Example template="Ball" id="a">{`
const ball = document.querySelector('#a .ball');
const ballStyler = styler(ball);
const ballX = value(0);
ballX.subscribe((v) => ballStyler.set('x', v));

let activeAction;

function startDrag() {
  if (activeAction) activeAction.stop();
  activeAction = pointerDelta({ x: ballX.get('x'), y: 0 })
    .start(ballX);
}

function stopDrag() {
  if (activeAction) activeAction.stop();
  const velocity = ballX.getVelocity();
  activeAction = decay({ velocity }).start(ballX);
}

ball.addEventListener('mousedown', startTracking);
ball.addEventListener('touchstart', startTracking);
document.addEventListener('mouseup', stopTracking);
document.addEventListener('touchend', stopTracking);
`}</Example>
```

`decay` also accepts a `modifyTarget` function, which is provided the calculated target and returns a new one.

This can be used, for instance, to snap the target to a grid:

```javascript
decay({
  velocity,
  modifyTarget: (target) => Math.ceil(target / 100) * 100
})
```

## `spring`

[`spring`](/api/spring) is a spring simulation using `mass`, `velocity`, `stiffness` and `damping`. It can be used to simulate a wide variety of spring-feels.

Springs are great for interaction designers because they're expressive. For instance, you could design a spring that has the same `stiffness` and `damping`, but the `mass` property could be based on the relative size of the element moving. A very easy way to make an interface feel "real".

`spring` has defaults for all properties but you'll more than likely want to adjust at least `stiffness` and `damping`, and the lower the `stiffness` the more important it is you pass through `velocity` too:

```javascript
spring({
  velocity,
  stiffness: 300,
  damping: 10
}).start(ballX);
```

```marksy
<Example template="Ball" id="b">{`
const ball = document.querySelector('#b .ball');
const ballStyler = styler(ball);
const ballX = value(0);
ballX.subscribe((v) => ballStyler.set('x', v));

let activeAction;

function startDrag() {
  if (activeAction) activeAction.stop();
  activeAction = pointerDelta({ x: ballX.get('x'), y: 0 })
    .start(ballX);
}

function stopDrag() {
  if (activeAction) activeAction.stop();
  const velocity = ballX.getVelocity();
  activeAction = spring({
    velocity,
    stiffness: 300,
    damping: 10
  }).start(ballX);
}

ball.addEventListener('mousedown', startTracking);
ball.addEventListener('touchstart', startTracking);
document.addEventListener('mouseup', stopTracking);
document.addEventListener('touchend', stopTracking);
`}</Example>
```

## `physics`

The `physics` animation is the swiss army knife of velocity-based animations.

It offers `friction`, `springTarget` and `springStrength` properties, so it can theoretically be used to create motion similar to `decay` and `spring`. 

However, `decay` and `spring` animations are **differential equations** that resolve for a given `elapsedTime`. In practical terms, this means that if you want to change the animation they're creating, you need create a new animation with the new properties.

These equations are incredibly accurate, offering the smoothest motion and in the near future, will allow these animations to be scrubbable the same way `tween` is.

Instead, `physics` is an **intergrated simulation**. This means that, once the simulation has started, its properties **can be modified** because `physics` uses **its current state** to calculate its next, unlike the other two which are entirely deterministic.

For instance, you could modify `startDrag` to make a `pointer` update the `springTarget` of a `physics` animation to make the ball spring towards the pointer:

```javascript
const springTo = physics({
  velocity: ballX.getVelocity(),
  friction: 0.8,
  springStrength: 400,
  springTarget: ballX.get('x'),
  restSpeed: false
}).start(ballX);

pointerDelta({ x: ballX.get('x'), y: 0 })
  .start((v) => springTo.setSpringTarget(v));
```

```marksy
<Example template="Ball" id="c">{`
const ball = document.querySelector('#c .ball');
const ballStyler = styler(ball);
const ballX = value(0);
ballX.subscribe((v) => ballStyler.set('x', v));

let activeAction;
let pointerTracker;

function startDrag() {
  if (activeAction) activeAction.stop();

  activeAction = physics({
    velocity: ballX.getVelocity(),
    friction: 0.8,
    springStrength: 400,
    springTarget: ballX.get('x'),
    restSpeed: false
  }).start(ballX);

  pointerTracker = pointerDelta({ x: ballX.get('x'), y: 0 })
    .start((v) => activeAction.setSpringTarget(v));
}

function stopDrag() {
  if (activeAction) activeAction.stop();
  if (pointerTracker) pointerTracker.stop();

  const velocity = ballX.getVelocity();
  activeAction = spring({
    velocity,
    stiffness: 300,
    damping: 10
  }).start(ballX);
}

ball.addEventListener('mousedown', startTracking);
ball.addEventListener('touchstart', startTracking);
document.addEventListener('mouseup', stopTracking);
document.addEventListener('touchend', stopTracking);
`}</Example>
```

## Conclusion

`velocity` is a key part of creating natural interactions with Popmotion.

Be sure to check out the full docs of [value](/api/value), [decay](/api/decay), [spring](/api/spring) and [physics](/api/physics), as there's much more to each than we've been able to cover in this introductory tutorial.
