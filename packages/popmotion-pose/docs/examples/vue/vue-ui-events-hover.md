---
title: "UI events: Hover"
description: An live example of making an element hoverable with a single prop in Pose for Vue
category: vue
---

# UI events: Hover

Making an element hoverable in Pose for Vue is a simple matter of setting `press` to `true`, with associated poses:

```javascript
posed.div({
  hoverable: true,
  init: {
    scale: 1,
    boxShadow: '0px 0px 0px rgba(0,0,0,0)'
  },
  hover: {
    scale: 1.2,
    boxShadow: '0px 5px 10px rgba(0,0,0,0.2)'
  }
})
```

<CodeSandbox id="qvnw69lv9" height="400" vue />
