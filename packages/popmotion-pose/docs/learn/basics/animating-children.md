---
title: Animating children
description: How to orchestrate animations across multiple elements
category: basics
next: dragging
---

# Animating children

Traditionally, coordinating animation across multiple children has been an involved process. Especially with React.

With Pose, it's as simple as animating just one. In vanilla Pose, it looks like this:

```javascript
parent.set('poseName')
```

And in React Pose, like this:

```javascript
({items}) => (
  <Parent pose="poseName">
    {items.map(item => <Child item={item} />)}
  </Parent>
)
```

Here's how:

<TOC />

## Setup

To demonstrate animating children, we're going to create this sidebar animation (press 'rereun' in the lower-right of the `iframe` if the animation has already played):

<CodePen id="yKbawK" />

We've created these two CodePen templates for you to use to follow along:

- [Pose](https://codepen.io/popmotion/pen/eMeGeE?editors=0010)
- [React Pose](https://codepen.io/popmotion/pen/LdOzzJ?editors=0010)

## Pose config

First, we need to describe two poses, "open" and "closed", for both the sidebar and the items within it.

At the top of your editor, define the poses:

```javascript
const sidebarConfig = {
  open: { x: '0%' },
  closed: { x: '-100%' },
  initialPose: 'closed'
}

const itemConfig = {
  open: { y: 0, opacity: 1 },
  closed: { y: 20, opacity: 0 }
}
```

Here, we've defined an `initialPose`. This is only necessary for vanilla Pose, as React Pose will automatically use the `pose` it's mounted with.

## Children

How we set the children up varies whether we're using vanilla Pose or React Pose:

- [Pose](#animating-children-children-pose)
- [React Pose](#animating-children-children-react)

### Pose

With Popmotion Pose, we need to select the elements we're going to animate.

```javascript
const sidebar = document.querySelector('.sidebar')
const items = sidebar.querySelectorAll('.item')
```

We'll make a poser exactly as before:

```javascript
const sidebarPoser = pose(sidebar, sidebarConfig)
```

To create new posers as children of `sidebarPoser`, we'll use its `addChild` method instead of `pose`:

```javascript
const itemPosers = Array.from(items).map(
  item => sidebarPoser.addChild(item, itemConfig)
)
```

The returned posers are now children of `sidebarPoser`.

Setting a pose on all of these posers is exactly the same as before:

```javascript
sidebarPoser.set('open')
```

This pose will be set both on the parent **and any children that also contain this pose**. You could even set children on all the `itemPosers` in the same way and trigger animations on those too.

<CodePen id="LdybdN" />

### React

In React, things are slightly different. We don't need to select any elements or call `addChild` because React is totally declarative and so are our posed components.

Instead, the parent-child relationship is inferred by the component hierarchy.

Let's make our `Sidebar` and `Item` posed components:

```javascript
const Sidebar = posed.ul(sidebarConfig)
const Item = posed.li(itemConfig)
```

Now, when we set a pose on the parent component, it is also triggered on all child components that contain this same pose. Replace the `Example` component's render function with this:

```javascript
render() {
  const { isOpen } = this.state;

  return (
    <Sidebar className="sidebar" pose={isOpen ? 'open' : 'closed'}>
      <Item className="item" />
      <Item className="item" />
      <Item className="item" />
      <Item className="item" />
    </Sidebar>
  );
}
```

<CodePen id="yKbawK" />

It's important to note that the posed children **don't need to be direct descendants** of the parent. They can appear anywhere down the tree and the relationship will still be formed.

This can be blocked by setting `withParent={false}`:

```javascript
// Will not respond to pose changes on parent
<Item withParent={false} />
```

## Schedule parent and child animations

Currently, our children animations are being fired at the exact same time as the parent. But, often we'd prefer the child animations to be delayed or staggered.

Luckily, we've got properties for that!

### `delay`

The `delay` property can be used to delay the animation on the current poser, without affecting the execution of child animations.

So by setting `delay: 300` on the sidebar's `closed` pose, the children will all animate out before the sidebar itself.

```javascript
const sidebarConfig = {
  open: { x: '0%' },
  closed: { x: '-100%', delay: 300 },
  initialPose: 'closed'
}
```

### `delayChildren`

Conversely, the `delayChildren` property can be used to delay all the children animations.

By setting `delayChildren` on the sidebar's `open` pose, we can animate the sidebar out and **then** animate the children in:

```javascript
const sidebarConfig = {
  open: { x: '0%', delayChildren: 200 },
  closed: { x: '-100%', delay: 300 },
  initialPose: 'closed'
}
```

### `staggerChildren`

Rather than animating all the children in at once, it's possible to stagger them in individually. The `staggerChildren` prop can be used to determine the delay between each one, starting from **after** the `delayChildren` duration:

```javascript
const sidebarConfig = {
  open: {
    x: '0%',
    delayChildren: 200,
    staggerChildren: 50
  },
  closed: { x: '-100%', delay: 300 },
  initialPose: 'closed'
}
```

### `staggerDirection`

`staggerDirection` can be used to determine which order we stagger over the children in. It can either be `1` (first to last, default), or `-1` (last to first).

### `beforeChildren`/`afterChildren`

Setting either `beforeChildren` or `afterChildren` props to `true` will make the parent animation play **before** or **after** any children animations.

## Next

So far we've focused on animations. But Popmotion was created with interaction at its core, and Pose is no different. In the next tutorial, we'll take a look at how easy it is to incorporate dragging.