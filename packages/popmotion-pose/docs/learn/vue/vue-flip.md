---
title: FLIP
description: A look at Pose for Vue's powerful FLIP API
category: vue
---

# FLIP

The FLIP technique, [fully explained here](https://aerotwist.com/blog/flip-your-animations/), is a way of animating expensive, layout-breaking animations like `width` and `top` by using quick transforms.

Pose for Vue makes animating using the FLIP technique as simple as `flip: true`. Let's take a look.

<TOC />

## width/top

The problem with animating size and position properties is that they break layout. Recalculating layout is expensive, which can slow animations to below 60fps.

So, when you set a pose with `flip: true` and any of `width`, `height`, `top`, `left`, `right`, or `bottom` values, these will applied at the start of the animation. Pose will measure the size and position of the element before and after, and animate from one to the other using transform properties instead.

For instance, we can switch a `div` to fullscreen and back using the following config:

```javascript
Panel: posed.div({
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
});
```

<CodeSandbox id="vvw57kww70" vue />
