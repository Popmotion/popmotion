---
title: Physics and velocity
description: Create responsive interactions with velocity, decay, physics and spring.
category: basics
---

# Physics and velocity

A core feature of Popmotion is the ability for some animations (`decay`, `physics` and `spring`) to take a `velocity` parameter.

`velocity` changes each of these animations in a way that feels natural and visceral. By accepting the velocity of a previous animation we create smoother transitions between animations.

When we take this `velocity` from pointer input, it allows the user to directly affect animations with their own force leading to natural and playful interactions. 

## Inspect velocity

But how do we get `velocity`?

Popmotion provides a special type of reaction called `value`.

```javascript
import { value } from 'popmotion';
```

`value` sits between your action and another reaction (for instance a style setter), and can be queried with `get` and `getVelocity`:

```javascript
const myValue = value(0, console.log);

tween().start(myValue);

setTimeout(() => myValue.getVelocity(), 100)
```

The returned `velocity` is measured in **units per second**. Why? Although 60fps is the current common framerate, VR devices support 90+ fps and the iPad Pro delivers a silky 120 frames per second!

To future-proof our code, we decouple velocity from the device framerate, otherwise our animations would run at 1.5x or even 2x the speed on these faster displays.

## Using `value`

`value` is provided two arguments: A value, and a function to call when this value updates:

```javascript
const foo = value(0, console.log);
```

As `value` is a reaction, it has an `update` method. We can call it to update the value:

```javascript
foo.update(5);
```

Usually though, we provide the `value` directly to an action:

```javascript
tween({ to: 5 }).start(foo);
```

Like our animations, `value` can accept objects and arrays:

```javascript
const xy = value({ x: 0, y: 0 }, console.log);
const foo = tween({
  to: { x: 100, y: 200 }
}).start(xy);

setTimeout(() => foo.getVelocity(), 100); // Returns as object
```

Now we know enough about `value` to get the velocity of our user's pointer.

## Get `pointer` velocity

Using the example from the [previous tutorial](/learn/input-tracking), let's first make a `value` that updates `ballStyler`'s `x` and `y` properties:

```javascript
const ballXY = value({ x: 0, y: 0 }, ballStyler.set);
```

Now we can replace our `startTracking` function with this:

```javascript
const startTracking = () => {
  pointer(ballXY.get())
    .start(ballXY);
};
```

As an added benefit of using `value`, a value **can't be subscribed to more than one action at a time**.

This means that we can stop using `pointerTracker` to maintain a reference to our active `pointer`.

Instead, we can either use `ballXY.stop()`, which will stop its currently active action. Or, we can provide it to a different action, which is what we'll do in the following examples.

For now, amend `stopTracking` so it queries `ballXY`'s current velocity:

```javascript
const stopTracking = () => {
  const velocity = ballXY.getVelocity();
};
```

## Using `velocity`

Three Popmotion animations accept a `velocity` property: `decay`, `physics` and `spring`.

Let's modify `stopTracking` three times so we provide `velocity` and take a look at what each of these animations does with it.

### `decay`

[`decay`](/api/decay) exponentially decreases a velocity over time. It's a form of the algorthim used in smartphone momentum scrolling, making it a natural-feeling way of slowing something down.

Based on the initial properties and `velocity`, it'll automatically calculate a `target` to animate to.

Using it is as easy as passing our newly-calculated `velocity` to `decay`:

```javascript
decay({ velocity }).start(ballXY);
```

```marksy
<Example template="Ball" id="a" autostart={true}>{`
const ball = document.querySelector('#a .ball');
const ballStyler = styler(ball);
const ballXY = value({ x: 0, y: 0 }, ballStyler.set);

function startTracking() {
  pointer(ballXY.get())
    .start(ballXY);
}

function stopTracking() {
  decay({
    from: ballXY.get(),
    velocity: ballXY.getVelocity()
  }).start(ballXY);
}

listen(ball, 'mousedown touchstart').start(startTracking);
listen(document, 'mouseup touchend').start(stopTracking);
`}</Example>
```

`decay` also accepts a `modifyTarget` function, which is provided the calculated target and returns a new one.

This can be used, for instance, to snap the target to a grid:

```javascript
decay({
  from: ballX.get(),
  velocity,
  modifyTarget: (target) => Math.ceil(target / 100) * 100
})
```

### `spring`

[`spring`](/api/spring) is a spring simulation using `mass`, `velocity`, `stiffness` and `damping`. It can be used to simulate a wide variety of spring-feels.

Springs are great for interaction designers because they're expressive. For instance, you could design a spring that has the same `stiffness` and `damping`, but the `mass` property could be based on the relative size of the element moving. A very easy way to make an interface feel "real".

`spring` has defaults for all properties but you'll more than likely want to adjust at least `stiffness` and `damping`, and the lower the `stiffness` the more important it is you pass through `velocity` too:

```javascript
spring({
  from: ballXY.get(),
  velocity,
  stiffness: 300,
  damping: 10
}).start(ballXY);
```

```marksy
<Example template="Ball" id="b" autostart={true}>{`
const ball = document.querySelector('#b .ball');
const ballStyler = styler(ball);
const ballXY = value({ x: 0, y: 0 }, ballStyler.set);

function startTracking() {
  pointer(ballXY.get())
    .start(ballXY);
}

function stopTracking() {
  spring({
    from: ballXY.get(),
    velocity: ballXY.getVelocity(),
    stiffness: 100,
    damping: 10
  }).start(ballXY);
}

listen(ball, 'mousedown touchstart').start(startTracking);
listen(document, 'mouseup touchend').start(stopTracking);
`}</Example>
```

### `physics`

The `physics` animation is the swiss army knife of velocity-based animations.

It offers `friction`, `to` and `springStrength` properties, so it can theoretically be used to create motion similar to `decay` and `spring`. 

However, `decay` and `spring` animations are **differential equations** that resolve for a given `elapsedTime`. In practical terms, this means that if you want to change the animation they're creating, you need create a new animation with the new properties.

These equations are incredibly accurate, offering the smoothest motion and in the near future, will allow these animations to be scrubbable the same way `tween` is.

Instead, `physics` is an **intergrated simulation**. This means that, once the simulation has started, its properties **can be modified** because `physics` uses **its current state** to calculate its next, unlike the other two which are entirely deterministic.

For instance, instead of using `pointer` to drag the ball, you could use `physics` to spring towards the output of `pointer`.

```javascript
const springTo = physics({
  velocity: ballXY.getVelocity(),
  friction: 0.8,
  springStrength: 400,
  to: ballXY.get(),
  restSpeed: false
}).start(ballXY);

pointer(ballXY.get())
  .start((v) => springTo.setSpringTarget(v));
```

```marksy
<Example template="Ball" id="c" autostart={true}>{`
const ball = document.querySelector('#c .ball');
const ballStyler = styler(ball);
const ballX = value(0, ballStyler.set('x'));

let activeAction;
let pointerTracker;

function startTracking() {
  activeAction = physics({
    velocity: ballX.getVelocity(),
    friction: 0.8,
    springStrength: 400,
    to: ballX.get(),
    restSpeed: false
  }).start(ballX);

  pointerTracker = pointer({ x: ballX.get(), y: 0 })
    .pipe(({ x }) => x)
    .start((v) => activeAction.setSpringTarget(v));
}

function stopTracking() {
  if (activeAction) activeAction.stop();
  if (pointerTracker) pointerTracker.stop();
  spring({
    velocity: ballX.getVelocity(),
    from: ballX.get(),
    stiffness: 300,
    damping: 10
  }).start(ballX);
}

listen(ball, 'mousedown touchstart').start(startTracking);
listen(document, 'mouseup touchend').start(stopTracking);
`}</Example>
```

## Conclusion

`velocity` is a key part of creating natural interactions with Popmotion.

Be sure to check out the full docs of [value](/api/value), [decay](/api/decay), [spring](/api/spring) and [physics](/api/physics), as there's much more to each than we've been able to cover in this introductory tutorial.
