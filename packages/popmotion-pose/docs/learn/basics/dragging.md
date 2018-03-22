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

Making an element draggable is as simple as setting `draggable: true` in the props:

```javascript
const props = {
  draggable: true
}
```

<CodePen id="OvmWZG" />

`true` sets both axis to draggable, but we can select a single axis to drag on by setting it to `'x'` or `'y'`:

```javascript
const props = {
  draggable: 'x'
}
```

<CodePen id="BrRpPe" />

## Drag boundaries

We can add drag boundaries with the `dragBounds` property. It accepts `top`, `left`, `bottom` and/or `right`, measured in pixels:

```javascript
const props = {
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

const props = {
  draggable: true,
  dragEnd: {
    transition: spring
  }
}
```

<CodePen id="xWdqLy" />
