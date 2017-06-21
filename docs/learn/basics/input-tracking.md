---
title: Input Tracking
description: Track user input
category: basics
---


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
