---
title: Animating children
description: How to orchestrate animations across multiple elements
category: react
next: ui-events
---

# Animating children

Traditionally, coordinating animation across multiple children has been an involved process. Especially with React.

With Pose, it's as simple as animating just one. It looks like this:

```javascript
const Parent = posed.ul();
const Child = posed.li();

({items}) => (
  <Parent pose="poseName">
    {items.map(item => <Child item={item} />)}
  </Parent>
)
```

Whenever a posed component changes `pose`, that change is communicated throughout all of its children posed components via React's context API. So even if they're not direct children, they still update accordingly.

This makes it super-simple to, for instance, make page-wide [route transitions](/pose/learn/route-transitions-react-router).

<TOC />

## Setup

To demonstrate animating children, we're going to create this sidebar animation (if the animation has already played, refresh the iframe):

<CodeSandbox id="w6m757yj6l" />

Follow along by forking this [CodeSandbox](https://codesandbox.io/s/0q10o2xlyl).

## Poses

First, we need to describe two poses, "open" and "closed", for both the sidebar and the items within it.

At the top of your `index.js`, create your posed components:

```javascript
const Sidebar = posed.ul({
  open: { x: '0%' },
  closed: { x: '-100%' }
});

const Item = posed.li({
  open: { y: 0, opacity: 1 },
  closed: { y: 20, opacity: 0 }
});
```

## Render

In our `render` function, replace `return null` with our `Sidebar`, setting our `pose` prop to either the `open` or `closed` poses defined above:

```javascript
return (
  <Sidebar className="sidebar" pose={isOpen ? 'open' : 'closed'} />
);
```

Now when the `isOpen` is `true`, our sidebar animates out. All we have to do to also animate the `Item` components is add those as children:

```javascript
return (
  <Sidebar className="sidebar" pose={isOpen ? 'open' : 'closed'}>
    <Item className="item" />
    <Item className="item" />
    <Item className="item" />
    <Item className="item" />
  </Sidebar>
);
```

We only provide `pose` to `Sidebar`, yet `Item` components also animate!

## Scheduling animations

Currently, our children animations are being fired at the exact same time as the parent. But, often we'd prefer the child animations to be delayed or staggered.

Luckily, we've got properties for that!

### delay

The `delay` property can be used to delay the animation on the **current** poser, without affecting the execution of child animations.

So by setting `delay: 300` on the sidebar's `closed` pose, the children will all animate out before the sidebar itself.

```javascript
const Sidebar = posed.ul({
  open: { x: '0%' },
  closed: { x: '-100%', delay: 300 }
});
```

### delayChildren

Conversely, the `delayChildren` property can be used to delay all the children animations.

By setting `delayChildren` on the sidebar's `open` pose, we can animate the sidebar out and **then** animate the children in:

```javascript
const Sidebar = posed.ul({
  open: { x: '0%', delayChildren: 200 },
  closed: { x: '-100%', delay: 300 }
});
```

### staggerChildren

Rather than animating all the children in at once, it's possible to stagger them in individually. The `staggerChildren` prop can be used to determine the delay between each one, starting from **after** the `delayChildren` duration:

```javascript
const Sidebar = posed.ul({
  open: {
    x: '0%',
    delayChildren: 200,
    staggerChildren: 50
  },
  closed: { x: '-100%', delay: 300 },
  initialPose: 'closed'
});
```

### staggerDirection

`staggerDirection` can be used to determine which order we stagger over the children in. It can either be `1` (first to last, default), or `-1` (last to first).

### beforeChildren/afterChildren

Setting either `beforeChildren` or `afterChildren` props to `true` will make the parent animation play **before** or **after** any children animations.