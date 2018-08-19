---
title: "Events: Drag with boundaries"
description: Animate hover events with Pose
category: react
---

# Events: Drag with boundaries

Boundaries can be imposed on dragging by using the `dragBounds` property.

It accepts `top`, `left`, `right`, and `bottom` properties in either pixels or percentages.

```javascript
const config = {
  draggable: 'x',
  dragBounds: { left: '-100%', right: '100%' }
}
```

<CodeSandbox height="500" id="j27p9l3v6y" />
