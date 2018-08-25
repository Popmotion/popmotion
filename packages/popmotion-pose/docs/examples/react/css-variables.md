---
title: CSS variables
description: A live example of Pose declaratively animating CSS variables
category: react
---

# CSS variables

Pose can animate CSS variables like normal style props.

In the following example, all the boxes have the class `.box` with these styles:

```css
.box {
  background: var(--color);
}
```

So to animate their background color, we can animate the `--color` property of one of their ancestors. In the following example, that's the `Container` posed component.

[Read the full tutorial](/pose/learn/css-variables/)

<CodeSandbox id="18vx11mr6q" />