---
title: "UI events: Drag"
description: An live example of making an element draggable with a single prop in Pose for Vue
category: vue
---

# UI events: Drag

Making an element draggable in Pose for Vue is a simple matter of setting `draggable` to `true`.

```javascript
posed.div({ draggable: true })
```

To restrict to a single axis, use either `'x'` or `'y'`.

```javascript
posed.div({ draggable: 'x' })
```

<CodeSandbox id="xo2zn69j9p" height="400" vue />

You can use the special `drag` and `dragEnd` poses to animate the element while dragging is in progress:

<CodeSandbox id="xvjnq4q6p4" height="400" vue />


