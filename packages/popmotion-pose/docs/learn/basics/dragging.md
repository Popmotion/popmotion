---
title: Dragging
description: Make elements draggable and impose drag limits with Pose
category: basics
next: passive
---

# Dragging

Simplifying interactivity is a core aim of Pose. Currently, it supports dragging and hard drag boundaries, but in the future we'll have elasticated drag boundaries and more.

For now, let's implement dragging, boundaries and apply momentum when a user stops dragging.

For this tutorial you can follow with [vanilla Pose](https://codepen.io/popmotion/pen/RMVKRM?editors=0010) or [React Pose](https://codepen.io/popmotion/pen/zWwNKK?editors=0010).

## `dragging`

Making an element draggable is as simple as setting `draggable: true` in the config:

```javascript
const config = {
  draggable: true
}
```

<CodePen id="OvmWZG" />

`true` sets both axis to draggable, but we can select a single axis to drag on by setting it to `'x'` or `'y'`:

```javascript
const config = {
  draggable: 'x'
}
```

<CodePen id="BrRpPe" />

## Drag boundaries

We can add drag boundaries with the `dragBounds` property. It accepts `top`, `left`, `bottom` and/or `right`, measured in pixels or percentages:

```javascript
const config = {
  draggable: 'x',
  dragBounds: { left: -100, right: 100 }
}
```

<CodePen id="RMVKYq" />

## `dragEnd` pose

Making an element draggable triggers a new pose when the user stops dragging, `dragEnd`. This can be used like any other pose, which means you can use a custom `transition` function.

For example, we could have the element spring back to the center:

```javascript
const { spring } = popmotion

const config = {
  draggable: true,
  dragEnd: { transition: spring }
}
```

<CodePen id="xWdqLy" />

Or (throw lightly!) we can use [decay](/api/decay) to create momentum scrolling.

```javascript
const { decay } = popmotion

const config = {
  draggable: true,
  dragEnd: { transition: decay }
}
```

<CodePen id="dmWWdp" />

## `onChange`

Often, we want to respond to changes in a value. We can use the `onChange` prop to accomplish this.

This object allows us to create a callback for each value we animate:

```javascript
const config = {
  draggable: true,
  dragEnd: { transition: decay },
  onChange: {
    x: x => console.log(x)
  }
}
```

### `onChange` with React

With React, `onChange` callbacks are handled a little differently to vanilla Pose. Instead, we pass them to the posed component itself as `onValueChange`:

```javascript
<Box onValueChange={{ x: x => console.log(x) }} />
```

It's important to note that `onValueChange` can only be defined once, when the component mounts.

## Next

So far we've covered animations and interactions, active stuff. Next, we'll take a look at some values who prefer to sit back, relax, and only change when others do.
