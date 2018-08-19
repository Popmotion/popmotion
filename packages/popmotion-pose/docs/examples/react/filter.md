---
title: CSS filters
description: A live example of animating CSS filters with React Pose
category: react
---

# CSS filters

CSS filters can be animated by settings `filter` as you [would in CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/filter):

```javascript
const config = {
  blur: { filter: 'blur(20px) grayscale()' },
  focus: { filter: 'blur(0px)' }
};
```

Hover over, or tap, the image in this example to see the effect in action.

<CodeSandbox example="pose-image-filter" />
