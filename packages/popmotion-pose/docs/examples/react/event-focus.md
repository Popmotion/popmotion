---
title: "Events: Focus"
description: Easily make elements focusable with Popmotion Pose
category: react
---

# Events: Focus

To animate an element on focus, set `focusable: true` and a `focus` prop.

```javascript
const config = {
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
}
```

<CodeSandbox id="rlly2kryrn" />
