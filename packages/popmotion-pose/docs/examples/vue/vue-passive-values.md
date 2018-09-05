---
title: Passive values
description: An live example of making passive values in Pose for Vue
category: vue
---

# Passive values

A passive value is a value that isn't animated directly. It only changes when another value changes.

```javascript
posed.div({
  draggable: 'x',
  passive: {
    opacity: ['x', interpolate(
      [-200, -100, 100, 200],
      [0, 1, 1, 0]
    )]
  }
})
```

<CodeSandbox id="848v06y8yj" height="400" vue />
