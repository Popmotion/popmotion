---
title: Accordion
description: Make accordion animations in React by animating height between 0 and 'auto'
category: react
---

# Accordion

Pose supports animating between any unit type for `width` and `height`, including `'auto'`.

This makes it trivial to create accordion animations.

```javascript
const Content = posed.div({
  closed: { height: 0 },
  open: { height: 'auto' }
});
```

<CodeSandbox id="pwk5yq8pzx" height="500" />
