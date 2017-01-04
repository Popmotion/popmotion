---
title: Blend Tweens
description: Blend between two tweens using a bezier interpolator.
---

# Blend Tweens

## Example

```javascript
import { tween, blendTweens } from 'popmotion';

const logValue = (v) => console.log(v);

const foo = tween({
  from: 0,
  to: 1,
  onUpdate: logValue
});

const bar = tween({
  from: 1,
  to: 0
});

foo.start();

setTimeout(() => {
  // Unset the first tween's `onUpdate`
  foo.setProps({
    onUpdate: undefined
  });
  blendTweens({
    from: foo,
    to: bar,
    onUpdate: logValue
  }).start();
}, 150);
```

## Props

- `from <Tween>`: The tween to blend from.
- `to <Tween>`: The tween to blend to.
