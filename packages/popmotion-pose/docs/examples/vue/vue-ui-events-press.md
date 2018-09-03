---
title: "UI events: Press"
description: An live example of making an element pressable with a single prop in Pose for Vue
category: vue
---

# UI events: Press

Making an element pressable in Pose for Vue is a simple matter of setting `press` to `true`, with associated poses:

```javascript
posed.div({
  pressable: true,
  init: { scale: 1 },
  press: { scale: 0.8 }
})
```

<CodeSandbox id="6jqrnr57ok" height="400" vue />
