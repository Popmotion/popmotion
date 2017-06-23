---
title: Input Tracking
description: Track user input
category: basics
---

User input tracking can be used for a ton of different purposes. Drag & drop, scrolling galleries and performantly measuring touch scroll speed are some of the first to come to mind.

In this quick tutorial, we'll look at:
1) 


```marksy
<Example template="Ball" id="b">{`
const ball = document.querySelector('#b .ball');
const ballRenderer = css(ball);

tween({
  to: 300,
  duration: 1000,
  onUpdate: (x) => ballRenderer.set('x', x)
}).start();
`}</Example>
```

And that's it! Your first animation.
