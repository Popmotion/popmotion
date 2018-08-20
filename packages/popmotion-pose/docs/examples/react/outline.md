---
title: CSS outline
description: A live example of animating CSS outline with React Pose
category: react
---

# CSS outline

The outline properties can be animated with Pose either individually:

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
};
```

Or as a single property:

```javascript
const config = {
  focusable: true,
  init: {
    outline: '0px ridge rgba(170, 50, 220, 0)'
  },
  focus: {
    outline: '8px ridge rgba(170, 50, 220, .6)'
  }
};
```

<CodeSandbox id="rlly2kryrn" />
