---
title: "Enter/exit: Single component"
description: React Pose's powerful PoseGroup component can be used to animate single children in and out of the DOM.
category: react
---

# Enter/exit: Single component

`PoseGroup` can be used to animate `enter` and `exit` states of a single component when it's added/removed to and from the component tree.

```javascript
const Modal = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
});

export default ({ isVisible }) => (
  <PoseGroup>
    {isVisible ? <Menu /> : null}
  </PoseGroup>
)
```

<CodeSandbox height="500" id="lx6k64453l" />
