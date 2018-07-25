---
title: Physics
description: Integrated simulation of velocity, acceleration, friction and springs.
category: animation
---

# Physics

Simulate velocity, acceleration, friction and springs.

This is an integrated simulation, meaning the latest state is incorporated at discrete time intervals. It exposes `set` methods that change the simulation while it's running.

This is unlike the differential equations in [decay](/api/decay) and [spring](/api/spring), which can't be changed while in motion (although both offer higher-accuracy simulations which lead to smoother animations).

<TOC />

## Import

```javascript
import { physics } from 'popmotion';
```

## Usage

We can simulate a consistent velocity by providing the `velocity` property. Values are output to the function provided to `start`:

```javascript
physics({ from: 0, velocity: 1000 })
  .start(v => console.log(v))
```

To slow the velocity down over time, we can provide a `friction` value between `0` (no friction) and `1` (dead stop):

```javascript
physics({
  from: 0,
  velocity: 1000,
  friction: 0.8
})
```

To put speed back in the system we can use `acceleration`, measured in units per second:

```javascript
physics({
  from: 0,
  velocity: 1000,
  acceleration: 200
})
```

To simulate a spring, we add `to` and `springStrength` values:

```javascript
physics({
  from: 0,
  velocity: 1000,
  friction: 0.8,
  to: 400,
  springStrength: 500
})
```

### Value types

`physics` supports the animation of a number of different value types.

#### Number

```javascript
physics({ from: 0, velocity: 100 })
```

#### Units

**Supported**: `px`, `%`, `deg`, `vh`, and `vw`

```javascript
physics({ from: '0px', velocity: 100 })
```

#### Objects

Named objects composed of any of the above types may also be animated.

`friction`, `acceleration`, `velocity` and `springStrength` can also be set as objects, to apply property-specific settings:

```javascript
physics({
  from: { x: '0px', y: '0px' },
  velocity: { x: 200, y: 1000 }
})
```

#### Arrays

Arrays composed of any of the above types may also be animated.

`friction`, `acceleration`, `velocity` and `springStrength` can also be set as arrays, to apply property-specific settings:

```javascript
physics({
  from: ['10vh', 0],
  velocity: [100, 100]
})
```

## Props

The following properties may be passed to `physics`:

### velocity

Velocity in units per second.

**Default:** `0`

### from

Start simulation from this number.

**Default:** `0`

### acceleration

Increase `velocity` by this amount every second.

**Default:** `0`

### restSpeed

When absolute speed drops below this value, `complete` is fired.

**Default:** `0.001`

### friction

Amount of friction to apply per frame, from `0` to `1`.

**Default:** `0`

### springStrength

If set with `to`, will spring towards target with this strength.

**Default:** `0`

### to

If set with `springStrength`, will gradually "spring" towards this value.

**Default:** `0` 

## Methods

### Action methods

`physics()` returns:

#### start

Starts the animation and returns playback controls.

Can be provided **either** a function:

```javascript
physics().start(v => {})
```

Or a named map of functions for `update` and `complete`:

```javascript
physics().start({
  update: v => {},
  complete: () => {}
})
```

#### filter

Returns a new version of the animation, that filters out any value when the provided predicate function returns `false`:

```javascript
const filtered = physics().filter(v => v > 0.5)

// This animation will only output values higher than 0.5:
filtered.start(v => {})
```

#### pipe

Returns a new animation that will pass any output value through this series of functions:

```javascript
// This animation will round output values and then double them:
physics({ from: 0, velocity: 100 })
  .pipe(Math.round, v => v * 2)
  .start(v => {})
```

#### while

Returns a new animation that will `complete` when the provided predicate function returns `false`:

```javascript
// This animation will end when an output value is higher than 0.5:
physics().while(v => v < 0.5)
```

### Playback methods

`physics().start()` starts a new animation and returns the following playback methods:

#### set

Change the current value.

#### setAcceleration

Set `acceleration`.

#### setFriction

Set `friction`.

#### setSpringStrength

Set `springStrength`.

#### setSpringTarget

Set `to`.

#### setVelocity

Set `velocity`.

#### stop

Stops the animation.

## Example

<CodePen id="ooybYP" />
