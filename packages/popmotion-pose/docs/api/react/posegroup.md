---
title: PoseGroup
description: Create a Poser
category: react
---

# `PoseGroup`

The `PoseGroup` component manages `enter` and `exit` animations on its direct children as they enter and exit the component tree.

## Import

```javascript
import posed, { PoseGroup } from 'react-pose'
```

## Usage

By adding a [posed component](/api/posed) as a direct child of `PoseGroup`, it will gain two new poses: `enter` and `exit`.

```javascript
const Item = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
})

const ItemList = ({ items }) => (
  <PoseGroup>
    {items.map((item) => <Item key={item.id} />)}
  </PoseGroup>
)
```

**Note:** Every child must be provided a unique `key` property for `PoseGroup` to track entering and exiting children.

### Animating children

As with any posed component, the `enter`/`exit` pose will propagate throughout any of its posed component children.

In the case of the `exit` pose, `PoseGroup` will only unmount the animating component once **all of its children** have also finished their `exit` animation.

## Props

### `animateOnMount: boolean = false`

By default, only children added to the `PoseGroup` **after** it has mounted are animated to `enter`.

By setting `animateOnMount` to `true`, all children elements will animate in on mount.

### `singleChild: boolean = false`

If `true`, `PoseGroup` will:

- Only render a single child
- Finish animating the original posed component out, before animating the new one in.
