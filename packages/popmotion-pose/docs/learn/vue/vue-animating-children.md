---
title: Animating children
description: How to orchestrate animations across multiple elements in Pose for Vue
category: vue
next: vue-ui-events
---

# Animating children

Traditionally, coordinating animation across multiple children has been an involved process.

With Pose for Vue, it's as simple as animating just one. It looks like this:

```javascript
const Component = {
  components: {
    Parent: posed.ul(ulPoses),
    Child: posed.li(liPoses)
  },
  template: `
    <Parent :pose="currentPose">
      <Child v-for="items in item" v-bind:key="item" />
    </Parent>
  `
};
```

Whenever a posed component changes `pose`, that change is communicated throughout all of its children components. Even if they're not direct children, they still update accordingly.

This makes it super-simple to, for instance, make page-wide route transitions.

<TOC />

## Setup

To demonstrate animating children, we're going to create this sidebar animation:

<CodeSandbox id="qq667ljpz4" vue height="500" />

Follow along by forking this [CodeSandbox](https://codesandbox.io/s/n36vyq63vm?module=%2Fsrc%2FApp.vue).

## Sidebar (parent)

In our sandbox, look in the `script` section. We're exporting a component that simply toggles an `isVisible` boolean every two seconds.

Our template is currently empty, so let's add a `Sidebar` that open and closes depending on the status of `isVisible`.

Add a new property to our exported component called `components`. In it, add a `Sidebar` posed component with a couple of poses, `'visible'` and `'hidden'`:

```javascript
components: {
  Sidebar: posed.ul({
    visible: { x: 0 },
    hidden: { x: '-100%' }
  })
}
```

In our `template` section, lets render this `Sidebar` component, passing it either a `'visible'` or `'hidden'` pose depending on `isVisible`:

```javascript
<template>
  <Sidebar class="sidebar" :pose="isVisible ? 'visible' : 'hidden'" />
</template>
```

Already, we can see our sidebar peeking in and out of our page. Let's add some items to it.

## Items (children)

We need a new posed component, this time called `Item`. Add it to `components`:

```javascript
Item: posed.li({
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 20 }
})
```

We can render this by iterating over the `items` array being created our exported component's `data` function. Pass this as a child of `Sidebar`:

```javascript
<template>
  <Sidebar class="sidebar" :pose="isVisible ? 'visible': 'hidden'">
    <Item class="item" v-for="item in items" v-bind:key="item" />
  </Sidebar>
</template>
```

We've only passed `pose` to `Sidebar`, but all our `Item`s are animating in and out, too!

In this example, `Item` is a direct child of `Sidebar`, but this will still work if it was a far descendant of `Sidebar`. You could even add children to `Item` and those would be animated correctly, too.

## Scheduling animations

Currently, our children animations are being fired at the exact same time as the parent. But, often we'd prefer the child animations to be delayed or staggered.

Luckily, we've got properties for that!

### delay

The `delay` property can be used to delay the animation on the **current** poser, without affecting the execution of child animations.

So by setting `delay: 300` on the sidebar's `closed` pose, the children will all animate out before the sidebar itself.

```javascript
Sidebar: posed.ul({
  open: { x: '0%' },
  closed: { x: '-100%', delay: 300 }
});
```

### delayChildren

Conversely, the `delayChildren` property can be used to delay all the children animations.

By setting `delayChildren` on the sidebar's `open` pose, we can animate the sidebar out and **then** animate the children in:

```javascript
Sidebar: posed.ul({
  open: { x: '0%', delayChildren: 200 },
  closed: { x: '-100%', delay: 300 }
});
```

### staggerChildren

Rather than animating all the children in at once, it's possible to stagger them in individually. The `staggerChildren` prop can be used to determine the delay between each one, starting from **after** the `delayChildren` duration:

```javascript
Sidebar: posed.ul({
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