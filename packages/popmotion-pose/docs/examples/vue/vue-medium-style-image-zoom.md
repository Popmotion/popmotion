---
title: Medium-style image zoom
description: Pose for Vue makes it easy to write Medium-style image zoom.
category: vue
---

# Medium-style image zoom

By leveraging Pose's FLIP capabilities, and the `applyAtStart` and `applyAtEnd` properties, it becomes trivial to implement [Medium](https://medium.com)-style image zooming.

```javascript
const Frame = posed.div({
  zoomedOut: {
    applyAtEnd: { display: 'none' },
    opacity: 0
  },
  zoomedIn: {
    applyAtStart: { display: 'block' },
    opacity: 1
  }
});

const Image = posed.img({
  zoomedOut: {
    position: 'static',
    width: 'auto',
    height: 'auto',
    flip: true
  },
  zoomedIn: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flip: true
  }
});
```

<CodeSandbox height="700" id="4w9vq9vkmw" />
