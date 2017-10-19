---
title: Chain
description: Chain a linear sequence of actions.
category: action-composition
---

# Chain

Chain a linear sequence of actions. The next action in the sequence is started when the previous action is completed.

`chain(actions <Array>)`

## Example

```marksy
<Example template="Ball">{`
const ball = document.querySelector('.ball');
const ballRenderer = css(ball);
const setBallX = (v) => ballRenderer.set('x', v);

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
