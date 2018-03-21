---
title: Animating children
description: How to orchestrate animations across multiple elements
category: basics
next: dragging
---

# Animating children

Animating multiple elements with Pose is as simple as animating just one.

In vanilla Pose, it looks like this:

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

## Setup

To demonstrate animating children, we're going to create this sidebar animation:

<CodePen id="yKbawK" />

First, we need to describe two poses, "open" and "closed", for both the sidebar and the items within it:

```javascript
const sidebarProps = {
  open: { x: '0%' },
  closed: { x: '-100%' },
  initialPose: 'closed'
}

const itemProps = {
  open: { y: 0, opacity: 1 },
  closed: { y: 20, opacity: 0 }
}
```

How we set the children up varies whether we're using vanilla DOM or React:

- [DOM](#dom)
- [React](#react)

### DOM

With Popmotion Pose, we need to select the elements we're going to animate.

```javascript
const sidebar = document.querySelector('.sidebar')
const items = Array.from(sidebar.querySelectorAll('.item'))
```

Then make posers for all of them. For the sidebar, we'll do this exactly as in the previous tutorials:

```javascript
const sidebarPoser = pose(sidebar, sidebarProps)
```

We want to set the item posers up as children of the `sidebarPoser`. Instead of constructing them with `pose`, we can use a poser method called `addChild`.

It works the exact same way except it also creates a parent-child relationship between the two posers:

```javascript
items.forEach(item => sidebarPoser.addChild(item, itemProps))
```

Now, firing the animation is the same as before:

```javascript
sidebarPoser.set('open')
```

[See the final product](https://codepen.io/popmotion/pen/LdybdN?editors=0010)

### React

In React, things are slightly different. We don't need to select any elements or call `addChild` because React is totally declarative and so are our posed components.

Instead, we need to make our `Sidebar` and `Item` components:

```javascript
const Sidebar = posed.ul(sidebarProps)
const Item = posed.li(itemProps)
```

In React Pose, whenever a posed component is created as a child of another, they automatically bind as parent-child. So if we make `Item` the child of `Sidebar`, we only need to set `pose` on `Sidebar` for all the components down the tree to animate:

```javascript
({ isOpen, items }) => (
  <Sidebar pose={isOpen ? 'open' : 'closed'}>
    {items.map(() => <Item />)}
  </Sidebar>
)
```

It's important to note that the posed children **don't need to be direct descendants** of the parent. They can appear anywhere down the tree and the relationship will still be formed.

This can be blocked by setting `withParent={false}`:

```javascript
// Will not respond to pose changes on parent
<Item withParent={false} />
```

[See the final product](https://codepen.io/popmotion/pen/yKbawK?editors=0010)

## Delay and stagger children

Currently, our children animations are being fired at the exact same time as the parent. But, often we'd prefer the child animations to be delayed or staggered.

Luckily, we've got properties for that!

### `delay`

The `delay` property can be used to delay the animation on the current poser, without affecting the execution of child animations.

So by setting `delay: 300` on the sidebar's `closed` pose, the children will all animate out before the sidebar itself.

```javascript
const sidebarProps = {
  open: { x: '0%' },
  closed: { x: '-100%', delay: 300 },
  initialPose: 'closed'
}
```

### `delayChildren`

Conversely, the `delayChildren` property can be used to delay all the children animations.

By setting `delayChildren` on the sidebar's `open` pose, we can animate the sidebar out and **then** animate the children in:

```javascript
const sidebarProps = {
  open: { x: '0%', delayChildren: 200 },
  closed: { x: '-100%', delay: 300 },
  initialPose: 'closed'
}
```

### `staggerChildren`

Rather than animating all the children in at once, it's possible to stagger them in individually. The `staggerChildren` prop can be used to determine the delay between each one, starting from **after** the `delayChildren` duration:

```javascript
const sidebarProps = {
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

Finally, `staggerDirection` can be used to determine which order we stagger over the children in. It can either be `1` (first to last, default), or `-1` (last to first).

## Next

So far we've focused on animations. But Popmotion was created with interaction at its core, and Pose is no different. In the next tutorial, we'll take a look at how easy it is to incorporate dragging.