---
title: Decay
description: Exponential deceleration, primarily for use in momentum scrolling
category: animation
---

# Decay

`decay` returns an [action](/api/action) that exponentially decelerates a number and velocity to an automatically generated target value. This target can be modified by the user.

This animation is particularly useful for implementing momentum scrolling.

## Import

```javascript
import { decay } from 'popmotion';
// or stand-alone:
import decay from 'popmotion/lib/animations/decay';
```

## Usage

```javascript
decay({ velocity: 200, from: 50 })
  .start((v) => console.log(v));
```

## Props

- `velocity: number = 0`: Initial velocity to decelerate from.
- `from: number = 0`: Number to apply movement to.
- `power: number = 0.8`: A constant with which to calculate a target value. Higher power = further target. `0.8` should be okay.
- `timeConstant: number = 350`: Adjusting the time constant will change the duration of the deceleration, thereby affecting its feel.
- `autoStopDelta: number = 0.5`: Automatically completes the action when the calculated value is this far away from the target.
- `modifyTarget: (v: number) => number`: A function that receives the calculated target and returns a new one. Useful for snapping the target to a grid, for example.

## Example

TODO
