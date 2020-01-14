---
title: Transition
description: Control enter/exit animations with Pose for React Native's Transition component
category: react-native
---

# `Transition`

The `Transition` component is used to animate components as they enter and exit the component tree.

<TOC />

## Import

```javascript
import posed, { Transition } from 'react-native-pose';
```

## Usage

To animate posed components as they're added and removed from the React tree, provide them as **direct** children of `Transition`.

Set `enter` and `exit` poses to define how they should animate in and out.

### Switching visibility

```javascript
const Box = posed.View({
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 50 }
});

export default ({ isVisible }) => (
  <Transition>
    {isVisible && <Box key="a" />}
  </Transition>
)
```

### Switching components

```javascript
export default ({ toShow }) => (
  <Transition>
    {toShow === 'a' ? <Box key="a" /> : <Box key="b" />}
  </Transition>
)
```

### Multiple children

```javascript
export default ({ items }) => (
  <Transition>
    {items.map(item => <Box key={item.id} />)}
  </Transition>
)
```

### Passing props to children

A common problem with transition components is passing props to components that have been removed from the tree. They might be animating out, but as far as React is concerned, they've already left (so props don't get updated).

With Pose for React Native, any props you provide to `Transition` will be forwarded to all children, even ones that are leaving the tree.

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
  <Transition selectedItemId={selectedItemId}>
    {items.map(({ id }) => <Item id={id} />)}
  </Transition>
);
```

### Notes

- Posed components must be direct children of `Transition`.
- Enter and exit poses will propagate throughout posed components, allowing you to animate multiple children components when their parent enters/exits.
- Every child must have a unique `key` property.
- If components affect each other's layout, some snapping will occur when exiting components are removed. Position with `position: 'absolute'` or ensure exiting components animate out **before** animating new components in via the `enterAfterExit` prop. 

## Props

### animateOnMount

`animateOnMount: boolean = false`

By default, only children added to the `Transition` **after** it has mounted are animated to `enter`.

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

### enterAfterExit

`enterAfterExit: boolean = false`

If `true`, `Transition` will finish animating exiting components out **before** animating entering components in.

This can be useful when animating two or more components that affect each other's layout, which can lead to snapping when the exiting components are removed.

### onRest

`onRest: Function`

When a component finishes exiting, it isn't removed immediately. Instead, it's kept in the DOM until **all** currently leaving components have finished animating out to prevent expensive layout thrashing.

`onRest` will fire when all exit transitions are complete.

If new exit transitions begin in the meantime, `onRest` won't be fired until these have also finished.

### ...props

All remaining props passed to `Transition` will be forwarded to its immediate children, for use in dynamic props.

This is useful because if you're removing a component, it's impossible in React to update its props without doing a two-pass render.

By providing them to the `Transition` prop, Pose can pass these to the posed components to change the `exit` animation:

```javascript
const Box = posed.View({
  enter: { x: 0 },
  exit: { x: ({ delta }) => - delta * 100 + 'vw' }
});

export default ({ isVisible }) => (
  <Transition delta={1}>
    {isVisible && <Box key="a" />}
  </Transition>
)
```
