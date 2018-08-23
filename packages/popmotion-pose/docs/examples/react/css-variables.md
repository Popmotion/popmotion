---
title: CSS variables
description: A live example of Pose declaratively animating CSS variables
category: react
---

# CSS variables

Pose can animate CSS variables like normal style props.

In the following example, all the boxes have a class `.box` with these styles:

```css
.box {
  background: var(--color);
}
```

So to animate their background color, we simply need to animate the `--color` property of one of their ancestors. In this example, that's the `Container` posed component.

<CodeSandbox id="18vx11mr6q" />