---
title: Medium-style image zoom
description: Pose for React makes it easy to write Medium-style image zoom.
category: react
---

# Medium-style image zoom

By leveraging Pose's FLIP capabilities, and the `applyAtStart` and `applyAtEnd` properties, it becomes trivial to implement [Medium](https://medium.com)-style image zooming.

```javascript
const Frame = posed.div({
  init: {
    opacity: 0,
    applyAtEnd: { position: 'static' }
  },
  zoom: {
    opacity: 1,
    applyAtStart: fillViewport
  }
});

const Image = posed.img({
  init: {
    position: 'static',
    width: 'auto',
    height: 'auto',
    transition,
    flip: true
  },
  zoom: {
    ...fillViewport,
    maxWidth: '100%',
    maxHeight: '100%',
    transition,
    flip: true
  }
});
```

<CodeSandbox height="500" id="rrjx477w3n" />
