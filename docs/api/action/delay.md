---
title: Delay
description: A dummy action that completes after a set duration of time.
category: action
---

# Delay

`delay(duration <Number>, onComplete <Function>)`

Delay is a dummy action that fires `onComplete` after a set duration of time. This is useful in composing with other actions.

```javascript
import { delay } from 'popmotion';
```

```marksy
<Example template="Ball">{`
const ball = document.querySelector('.ball');
const ballRenderer = css(ball);
const setBallX = (x) => ballRenderer.set('x', x);

chain([
  tween({
    to: 300,
    onUpdate: setBallX
  }),
  delay(200),
  physics({
    from: 300,
    to: 0,
    spring: 500,
    friction: 0.9,
    onUpdate: setBallX
  })
]).start();
`}</Example>
```

## Methods

[...Action](/api/action)
