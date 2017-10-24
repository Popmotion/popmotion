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

Finally, to simulate a spring we need to add `springTarget` and `springStrength` properties:

```javascript
physics({
  velocity: 1000,
  friction: 0.8,
  springTarget: 400,
  springStrength: 500
}).start((v) => console.log(v));
```

## Props

- `acceleration: number = 0`: Increase `velocity` by this amount every second.
- `restSpeed: number = 0.001`: When absolute speed drops below this value, `complete` is fired.
- `friction: number = 0`: Amount of friction to apply per frame, from `0` to `1`.
- `from: number = 0`: Start simulation from this number.
- `springStrength: number = 0`: If set with `springTarget`, will spring towards target with this strength.
- `springTarget: number = 0`: If set with `springStrength`, will gradually "spring" towards this value.
- `velocity: number = 0`: Velocity in units per second.

## Methods

- `setAcceleration(acceleration: number): this`
- `setFriction(friction: number): this`
- `setSpringStrength(strength: number): this`
- `setSpringTarget(target: number): this`
- `setVelocity(velocity: number): this`
- `stop(): void`

## Example

TODO
