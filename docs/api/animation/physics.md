---
title: Physics
description: Integrated simulation of velocity, acceleration, friction and springs.
category: animation
---

# Physics

Integrated simulation of velocity, acceleration, friction and springs.

Because the simulation is integrated, we can expose `set` methods that can change the simulation while it is still running.

This is unlike the differential equations in [decay](/api/decay) and [spring](/api/spring), which can't be changed while in motion (although both offer higher-accuracy simulations which lead to smoother animations).

## Import

```javascript
import { physics } from 'popmotion';
// or stand-alone:
import physics from 'popmotion/animations/physics';
```

## Usage

To simulate velocity, we just need to provide a `velocity` property:

```javascript
physics({ velocity: 1000 })
  .start((v) => console.log(v));
```

To slow down over a duration of time, we can provide a `friction` prop between `0` (no friction) and `1` (dead stop):

```javascript
physics({ velocity: 1000, friction: 0.8 })
  .start((v) => console.log(v));
```

Finally, to simulate a spring we need to add `to` and `springStrength` properties:

```javascript
physics({
  velocity: 1000,
  friction: 0.8,
  to: 400,
  springStrength: 500
}).start((v) => console.log(v));
```

We can also provide many properties as `Vector` types, which are maps or arrays of numbers:

```javascript
physics({
  from: 100,
  to: { x: 30, y: 100, z: 20 },
  springStrength: 500
})
```

## Props

- `acceleration: number | Vector = 0`: Increase `velocity` by this amount every second.
- `restSpeed: number = 0.001`: When absolute speed drops below this value, `complete` is fired.
- `friction: number | Vector = 0`: Amount of friction to apply per frame, from `0` to `1`.
- `from: number | Vector = 0`: Start simulation from this number.
- `springStrength: number | Vector = 0`: If set with `to`, will spring towards target with this strength.
- `to: number | Vector = 0`: If set with `springStrength`, will gradually "spring" towards this value.
- `velocity: number | Vector = 0`: Velocity in units per second.

## Methods

### Action methods

`physics()` returns:

- `filter((v: any) => boolean)`: Returns a new action that filters out values when the provided function returns `false`.
- `pipe(...funcs: Array<(v) => v)`: Returns a new action that will run `update` values through this sequence of functions.
- `start(update | { update, complete })`: Starts the action and returns a subscription.
- `while((v: any) => boolean)`: Returns a new action that will `complete` when the provided function returns `false`.


### Subscription methods

`physics().start()` returns:

- `set(current: number): this`
- `setAcceleration(acceleration: number): this`
- `setFriction(friction: number): this`
- `setSpringStrength(strength: number): this`
- `setSpringTarget(target: number): this`
- `setVelocity(velocity: number): this`
- `stop(): void`

## Example

TODO
