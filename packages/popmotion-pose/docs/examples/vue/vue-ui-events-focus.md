---
title: "UI events: Focus"
description: An live example of making an element focusable with a single prop in Pose for Vue
category: vue
---

# UI events: Focus

Making an element focusable in Pose for Vue is a simple matter of setting `press` to `true`, with associated poses:

```javascript
posed.input({
  focusable: true,
  init: {
    color: '#aaa',
    outlineWidth: '0px',
    outlineOffset: '0px',
    scale: 1
  },
  focus: {
    color: '#000',
    outlineWidth: '12px',
    outlineOffset: '5px',
    outlineColor: '#AB36FF',
    scale: 1.2
  }
})
```

<CodeSandbox id="k3j0q867v7" height="400" vue />
