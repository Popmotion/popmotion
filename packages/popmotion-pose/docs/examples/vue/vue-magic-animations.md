---
title: Magic animations
description: An live example of magic animations in Pose for Vue.
category: vue
---

# Magic animations

Even with no `transition` defined, Pose for Vue will automatically create snappy and responsive transitions between to states.

```javascript
posed.div({
  left: { x: -100 },
  right: { x: 100 }
})
```

<CodeSandbox id="74471lpxqx" vue />