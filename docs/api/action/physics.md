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
- `from <Number>`: Start from this number. (default `0`)
- `to <Number>`: If set, is used as an anchor for spring physics simulations.

## Methods

[...Action](/api/action)

## Playground

```javascript
import { physics } from 'popmotion';
```

```marksy
<Example template="Ball">{`
const ball = document.querySelector('.ball');
const ballRenderer = css(ball);

physics({
  to: 150,
  velocity: 500,
  spring: 300,
  friction: 0.8,
  onUpdate: (x) => ballRenderer.set('x', x)
}).start();
`}</Example>
```
