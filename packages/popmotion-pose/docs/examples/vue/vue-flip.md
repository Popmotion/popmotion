---
title: FLIP
description: An live example of making FLIP animations in Pose for Vue
category: vue
---

# FLIP

The FLIP technique, [fully explained here](https://aerotwist.com/blog/flip-your-animations/), is a way of animating expensive, layout-breaking animations like `width` and `top` by using quick transforms.

In Pose for Vue, performing a FLIP animation is as simple as providing a pose the `flip: true` property.

```javascript
Box: posed.div({
  fullscreen: {
    width: '100vw',
    height: '100vh',
    transition: tween,
    flip: true
  },
  thumbnail: {
    width: 100,
    height: 100,
    transition: tween,
    flip: true
  }
})
```

Click on this box to see it in action:

<CodeSandbox id="vvw57kww70" height="500" vue />
