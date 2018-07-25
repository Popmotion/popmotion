---
title: Decay
description: Exponential deceleration, primarily for use in momentum scrolling.
category: animation
---

# Decay

An animation that decelerates to an automatically generated target value, based on its initial velocity.

This target can be modified.

Decay is particularly useful for implementing momentum scrolling.

<TOC />

## Import

```javascript
import { decay } from 'popmotion';
```

## Usage

Provide a `velocity` and `from` value, and `decay` will calculate a `to` target value and decelerate towards it.

It will output values to a function provided to `start`:

```javascript
decay({ velocity: 200, from: 50 })
  .start(v => console.log(v))
```

We can adjust the calculated target value with the `modifyTarget` prop.

This is a function that accepts the calculated target and returns a new one. For instance, we can snap the target to the nearest `100` like so:

```javascript
decay({
  velocity: 200,
  from: 50,
  modifyTarget: v => Math.round(v / 100) * 100
})
```

## Props

The following properties may be passed to `decay`:

### velocity

Initial velocity to decelerate from.

**Default:** `0`

### from

Start value of the animation.

**Default:** `0`

### power

A constant with which to calculate a target value. Higher power = further target.

**Default:** `0.8`

### timeConstant

Adjusting the time constant will change the duration of the deceleration, thereby affecting its feel.

**Default:** `350`

### restDelta

Automatically completes the action when the calculated value is this far away from the target. The final output value will be snapped to the target.

**Default:** `0.5`

### modifyTarget

A function that receives the calculated target and returns a new one. Useful for snapping the target to a grid, for example.

**Default:** `v => v`

## Methods

### Action methods

`decay()` returns:

#### start

Starts the animation and returns playback controls.

Can be provided **either** a function:

```javascript
decay(props).start(v => {})
```

Or a named map of functions for `update` and `complete`:

```javascript
decay(props).start({
  update: v => {},
  complete: () => {}
})
```

#### filter

Returns a new version of the animation, that filters out any value when the provided predicate function returns `false`:

```javascript
const filtered = decay(props).filter(v => v > 0.5)

// This animation will only output values higher than 0.5:
filtered.start(v => {})
```

#### pipe

Returns a new animation that will pass any output value through this series of functions:

```javascript
// This animation will round output values and then double them:
decay({ from: 0, velocity: 1000 })
  .pipe(Math.round, v => v * 2)
  .start(v => {})
```

#### while

Returns a new animation that will `complete` when the provided predicate function returns `false`:

```javascript
// This animation will end when an output value is higher than 0.5:
decay().while(v => v < 0.5)
```

### Playback methods

`decay().start()` starts a new animation and returns the following playback methods:

#### stop

Stops the animation.

## Example

<CodePen id="Kyewbv" />
