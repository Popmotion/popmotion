---
title: 'PoseGroup: Reordering items'
description: React Pose's powerful PoseGroup component can automatically animate reordered items.
category: react
---

# PoseGroup: Reordering items

When posed items in a `PoseGroup` component are reordered, they're automatically animated to their new position:

```javascript
const Item = posed.li();

export default ({ items }) => (
  <PoseGroup>
    {items.map(({ id }) => <Item key={id} />)}
  </PoseGroup>
)
```

<CodeSandbox height="500" id="82k2rxv3kl" />
