---
title: Popmotion 8 upgrade guide
description: How to upgrade Popmotion 7 to 8
published: 20171210
author: Matt Perry
---

# Popmotion 8 upgrade guide

This guide will explain the breaking changes in Popmotion 8 and how to upgrade your project from version 7.

## `onUpdate` and `onComplete`

The biggest change, from a practical point of view, is the way animations are initialised.

Previously, a `tween` might have been defined like this:

```javascript
tween({
  from: 0,
  to: 1,
  onUpdate: (v) => console.log(v)
}).start();
```

Now, that `onUpdate` is instead provided to `start`:

```javascript
tween({ from: 0, to: 1 })
  .start((v) => console.log(v));

// This is equivalent:
tween({ from: 0, to: 1 })
  .start({
    update: (v) => console.log(v)
  });
```

Likewise, `onComplete` also provided to `start`:

```javascript
tween({
  from: 0,
  to: 1
}).start({
  update: (v) => console.log(v),
  complete: () => console.log('complete!')
})
```

## Immutable

Each animation, once defined, is immutable. Once `start` is called, a **new instance** of that animation is created and executed. Which means you can define an animation once:

```javascript
const foo = tween({ from: 0, to: 1 });
```

And use that definition to power multiple animations:

```javascript
foo.start((v) => console.log('first animation', v));
foo.start((v) => console.log('second animation', v));
```

## Playback controls

This means that `stop`, and other playback controls, aren't returned by `tween`, they're returned from `start`:

```javascript
const myTween = foo.start(console.log);
myTween.stop();
```

## `transform` property

Previously, there was a `transform` property available to actions. It accepted  a pure function that accepted a value and returned a new one.

In Popmotion, we refer to these as [transformers](/api/transformers). As the API has evolved, its skewed towards using these pure functions to define functionality. Documents increasingly included references to the `pipe` transformer, which composes a new transformer from multiple others.

In Popmotion 8, `pipe` has been promoted to an action method. When used, it returns **a new version of that action** that pipes all `update` values through the functions given to `pipe`:

```javascript
const double = (v) => v * 2;
const px = (v) => v + 'px';

const foo = tween({ from: 0, to: 1 });
const bar = foo.pipe(double, px);

foo.start(console.log); // Ends with 1
bar.start(console.log); // Ends with '2px'
```

## Chainable

`pipe` isn't the only chainable functions available to actions. There's also `while` and `filter`, and an API to add new functions will be available in the near future.

Here's a `listen` action, which is our [DOM event listener action](/api/listen), that only fires when it detects more than two `touches`:

```javascript
listen(document, 'touchstart')
  .filter(({ touches }) => touches.length > 1)
  .start(({ touches }) => {
    console.log(touches.length); // more than 1
  });
```

## `value.set`

`value` is now a **reaction**. Which means you can still pass one to an action like this:

```javascript
const foo = value(0, console.log);
spring({ to: 300 }).start(foo);
```

As `start` accepts reactions either as a function or an object with an `update` function, `value.set()` becomes `value.update()`.

## `getVelocity`

Previously, every action has a `getVelocity` method. In Popmotion 8 I'm attempting to reduce statefulness and move to reactive streams.

`value` is now the only stateful function to offer a `getVelocity` function. It's a special type of reaction that maintains state.

```javascript
const ball = document.querySelector('#ball');
const ballX = value(0, styler(ball).set('x'));

spring({ to: 400, stiffness: 500 }).start(ballX);

setTimeout(() => console.log(ballX.getVelocity()), 200);
```

## Every animation can handle color

The `colorTween` animation has been replaced by the capability for every animation to handle colors. Even `spring` and `physics`!

So this:

```javascript
colorTween({ from: '#fff', to: '#000' })
```

Is now this:

```javascript
tween({ from: '#fff', to: '#000' })
```

## Every animation can handle arrays and objects

In Popmotion 7, animation of arrays and objects was achieved via the `parallel` and `composite` actions respectively.

These functions still exist in order to compose different animations. But when the animations are the same, this syntax has been greatly simplified:

```javascript
physics({
  from: 0,
  velocity: {
    x: 100,
    y: 200
  }
}).start(console.log) // Receives { x, y }
```

`value` can now also be an n-dimensional array or object too, and `value.getVelocity` will return velocities in the defined format.

## `stagger`

As the `update` method is bound to an animation only when `start` is called, `stagger` now accepts functions that can **optionally** return a started action. So this:

```javascript
stagger([
  tween({ onUpdate: (v) => console.log('1st', v) }),
  tween({ onUpdate: (v) => console.log('2nd', v) })
], 50).start();
```

Becomes: 

```javascript
stagger([
  () => tween().start((v) => console.log('1st', v)),
  () => tween().start((v) => console.log('2nd', v))
], 50).start();
```

This also means that `stagger` can iterate over any function, not just animations.

## `touch` is now `multitouch`

The `touch` action has been renamed `multitouch`.

Previously, it provided `onUpdate` with an array of touches. Now, `touches` is a property that sits alongside `scale` and `rotate` properties:

```javascript
multitouch().start(({ touches, scale, rotate }) => {});
```

## And the rest

- `physics` `spring` property is now `springStrength`.
- `physics` `autoStopSpeed` property is now `restSpeed`.
- `spring` `restDisplacement` property is now `restDelta`.
- `flow` alias for `pipe` has been removed.
- `add`, `subtract`, `divide`, `multiply`, `conditional`, `alpha`, `percent`, `degrees`, `px`, `rgbUnit`, `rgba`, `hex`, `color`, `hsla` transformers have been removed. Value type transformers like `hex` can still be accessed from the [valueTypes](https://github.com/Popmotion/popmotion/tree/master/packages/style-value-types).
- Render loop function must be imported separately from [Framesync](https://github.com/Popmotion/framesync)

