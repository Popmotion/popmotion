---
title: Offset
description: Outputs the offset of another action.
---

# Offset

`offset(props <Object>)`
`offset(input <Action>, onUpdate <Function>, props <Object>)`

Outputs the offset of the provided action. So, if the provided action `input` is at `500` when the `offset` action starts, and then changes to `700`, the `offset` action will be `200`.

An optional `from` property can be provided.

## Example

```javascript
import { offset, tween, easing } from 'popmotion';

const foo = tween({
  from: 0,
  to: 100,
  duration: 500,
  ease: easing.linear
}).start();

setTimeout(() => {
  const fooOffset = offset(foo, (v) => console.log(v)); // 0 - 50
}, 250);
```

## Props

- `from <Number>`: Start offset at this value. (default: `0`)
