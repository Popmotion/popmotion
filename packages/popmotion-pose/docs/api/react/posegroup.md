---
title: PoseGroup
description: Animate a group of posed components as they're added and removed.
category: react
---

# PoseGroup

The `PoseGroup` component manages `enter` and `exit` animations on its direct children as they enter and exit the component tree.

<TOC />

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

**Notes:**
- Every child must be provided a unique `key` property for `PoseGroup` to track entering and exiting children.
- Entering children transition from their pre-enter pose to `'enter'`. The pre-enter pose is `'exit'` by default, and can be edited with the [`preEnterPose` prop](#posegroup-props-preenterpose).

### Animating children

As with any posed component, the `enter`/`exit` pose will propagate throughout any of its posed component children.

In the case of the `exit` pose, `PoseGroup` will only unmount the animating component once **all of its children** have also finished their `exit` animation.

### Passing props to children

A common problem with transition components is passing props to components that have been removed from the tree. They might be animating out, but as far as React is concerned, they've already left (so props don't get updated).

With Pose for React, any props you provide to `PoseGroup` will be forwarded to all children, even ones that are leaving the tree.

This allows you to use the latest props in dynamic poses:

```javascript
const Item = posed.li({
  enter: { opacity: 1, x: 0 },
  exit: {
    opacity: 0,
    x: ({ selectedItemId, id }) =>
      id === selectedItemId ? 100 : -100
  }
});

export default ({ items, selectedItemId }) => (
  <PoseGroup selectedItemId={selectedItemId}>
    {items.map(({ id }) => <Item id={id} />)}
  </PoseGroup>
);
```

## Props

### animateOnMount

`animateOnMount: boolean = false`

By default, only children added to the `PoseGroup` **after** it has mounted are animated to `enter`.

By setting `animateOnMount` to `true`, all children elements will animate in on mount.

### enterPose

`enterPose: string = 'enter'`

The name of the pose to use when a component enters.

### exitPose

`exitPose: string = 'exit'`

The name of the pose to use when a component leaves.

### preEnterPose

`preEnterPose: string = 'exit'`

The name of the pose to set before a component enters. This can be used to configure where a components animates in **from**.

### flipMove

`flipMove: boolean = true`

When an element exits, Pose takes it out of the layout and applies `position: absolute` so it can detect the new position of surrounding elements and animate via FLIP.

While it attempts to figure out the correct matching `transform-origin` there are times when this fails. Setting `flipMove={false}` will prevent these issues.
