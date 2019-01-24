---
title: Inertia
description: Inertial scrolling with spring-loaded boundaries.
category: animation
---

# Inertia

An animation decelerates a value based on its initial velocity, usually used to implement inertial scrolling.

Optionally, `min` and `max` boundaries can be defined, and `inertia` will snap to these with a [`spring`](/api/spring) animation.

This animation will automatically precalculate a target value, which can be modified with the `modifyTarget` property. This allows you to add snap-to-grid or similar functionality.

<TOC />

## Import

```javascript
import { inertia } from 'popmotion';
```

## Usage

Provide a `velocity` and `from` value, and `inertia` will automatically calculate a target and decelerate towards it.

```javascript
inertia({ velocity: 200, from: 50 })
  .start(v => console.log(v))
```

We can adjust the calculated target value with the `modifyTarget` prop.

This is a function that accepts the calculated target and returns a new one. For instance, we can snap the target to the nearest `100` like so:

```javascript
inertia({
  velocity: 200,
  from: 50,
  modifyTarget: v => Math.round(v / 100) * 100
})
```

We can also set `min` and/or `max` boundaries:

```javascript
inertia({
  velocity: 500,
  from: 50,
  max: 1000
})
```

When the animated value breaches `max`, it'll snap to `max` using a [spring](/api/spring) animation.

## Props

The following properties may be passed to `inertia`:

### velocity

Initial velocity to decelerate from.

**Default:** `0`

### from

Start value of the animation.

**Default:** `0`

### modifyTarget

A function that receives the calculated target and returns a new one. Useful for snapping the target to a grid, for example.

**Default:** `v => v`

### bounceStiffness

Stiffness of the bounce animations. Higher values will create more sudden movement.

**Default:** `500`

### bounceDamping

Strength of opposing force for the bounce animations. If set to `0`, spring will oscillate indefinitely.

**Default:** `10`

### power

Higher power = further target.

**Default:** `0.8`

### timeConstant

Adjusting the time constant will change the duration of the deceleration, thereby affecting its feel.

**Default:** `700`

## Methods

### Action methods

`inertia()` returns:

#### start

Starts the animation and returns playback controls.

Can be provided **either** a function:

```javascript
inertia(props).start(v => {})
```

Or a named map of functions for `update` and `complete`:

```javascript
inertia(props).start({
  update: v => {},
  complete: () => {}
})
```

#### filter

Returns a new version of the animation, that filters out any value when the provided predicate function returns `false`:

```javascript
const filtered = inertia(props).filter(v => v > 0.5)

// This animation will only output values higher than 0.5:
filtered.start(v => {})
```

#### pipe

Returns a new animation that will pass any output value through this series of functions:

```javascript
// This animation will round output values and then double them:
inertia({ from: 0, velocity: 1000 })
  .pipe(Math.round, v => v * 2)
  .start(v => {})
```

#### while

Returns a new animation that will `complete` when the provided predicate function returns `false`:

```javascript
// This animation will end when an output value is higher than 0.5:
inertia().while(v => v < 0.5)
```

### Playback methods

`inertia().start()` starts a new animation and returns the following playback methods:

#### stop

Stops the animation.

## Example

<CodePen id="BMNvqj" />
