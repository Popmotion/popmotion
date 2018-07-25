---
title: Animating children
description: How to orchestrate animations across multiple elements
category: react-native
next: native-dragging
---

# Animating children

Traditionally, coordinating animations across multiple children has been a delicate, involved process.

With Pose, animating multiple components is as simple as animating one.

It looks like this:

```javascript
export default ({items}) => (
  <Parent pose="poseName">
    {items.map(item => <Child />)}
  </Parent>
)
```

<Video src="/static/videos/native-children.mp4" height="320" />

Here's how it's done.

<TOC />

## Child animation

We're going to make an animation of an overlay sliding in from the bottom of the screen. As it animates in, its children items will fade and slide in from the right.

First, we need to define the posed components:

```javascript
const Overlay = posed.View({
  open: { y: 0 },
  closed: { y: '100vh' }
});

const Item = posed.View({
  open: { x: 0, opacity: 1 },
  closed: { x: 100, opacity: 0 }
})
```

To make the transition between the two states, we make `Item` children components of `Overlay`: 

```javascript
export default ({ isOpen }) => (
  <Overlay pose={isOpen ? 'open' : 'closed'}>
    <Item />
    <Item />
    <Item />
    <Item />
  </Overlay>
)
```

When `pose` changes on `Overlay`, that will be propagated through to `Item`.

For simplicity's sake, they're shown here as direct children. But it's important to note that they don't need to be direct children, or rendered in the same component. Plus, `Item` could have posed children that also had `open` and `closed` poses, and the animations would propagate through to those too.

## Block pose propagation

If you have a posed component that's a child of another posed component, and you **don't** want pose changes propagating down to it, you can start a new ancestor chain by passing `withParent={false}`:

```javascript
<Item withParent={false} />
```

## Schedule parent and child animations

Currently, our child animations are being fired at the exact same time as the parent. We can change that with some props that can delay, stagger or rearrange animations.

### delay

The `delay` property can be used to delay the animation on the current poser, without affecting the execution of child animations.

So by setting `delay: 300` on the overlay's `closed` pose, the children animations will wait 300 milliseconds before animating out.

```javascript
const Overlay = posed.View({
  open: { y: 0 },
  closed: { y: '100vh', delay: 300 }
});
```

### delayChildren

Conversely, the `delayChildren` property can be used to delay all the children animations.

By setting `delayChildren` on the overlay's `open` pose, we can animate the overlay out and **then** animate the children in:

```javascript
const Overlay = posed.View({
  open: { y: 0, delayChildren: 200 },
  closed: { y: '100vh', delay: 300 }
});
```

### staggerChildren

Rather than animating all the children in at once, it's possible to stagger them in individually. The `staggerChildren` prop can be used to determine the delay between each one, starting from **after** the `delayChildren` duration:

```javascript
const Overlay = posed.View({
  open: {
    y: 0,
    delayChildren: 200,
    staggerChildren: 50
  },
  closed: { y: '100vh', delay: 300 }
});
```

### staggerDirection

`staggerDirection` can be used to determine which order we stagger over the children in. It can either be `1` (first to last, default), or `-1` (last to first).

### beforeChildren/afterChildren

Setting either `beforeChildren` or `afterChildren` props to `true` will make the parent animation play **before** or **after** any children animations.
