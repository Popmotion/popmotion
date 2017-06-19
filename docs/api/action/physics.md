---
title: Physics
description: Simulate velocity, acceleration, friction and spring physics.
category: action
---

# Physics

Simulate velocity, acceleration, friction and spring physics.

`physics(props <Object>)`

## Props

- `acceleration <Number>`: Increase `velocity` by this amount, in units per second. (default: `0`)
- `friction <Number>`: The amount of friction to apply, from `0` to `1`. (default: `0`)
- `velocity <Number>`: Speed in units per second. (default: `0`)
- `autoStopSpeed <Number>`: When absolute speed drops below this value, physics is marked as complete. (default: `0.001`)
- `spring <Number>`: If non-zero and `to` is set, decides the intensity of the "pull" of `to`.
- `to <Number>`: If set, is used as an anchor for spring physics simulations.

## Methods

[...Action](action)
