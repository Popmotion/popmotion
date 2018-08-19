---
title: UI events and interactions
description: Trigger animations based on UI events like drag, press, hover and focus
category: basics
next: passive
---

# UI events and interactions

Pose can be used to power and animate interactions. Currently, it supports the following events: drag, press, hover and focus.

In this tutorial, we'll take a look at each.

<TOC />

## Dragging

With Pose, making an element draggable is as simple as passing `draggable: true` to the config:

```javascript
const config = {
  draggable: true
}
```

<CodeSandbox id="8z7j041kyl" />

`true` sets both axis to draggable, but we can select a single axis to drag by setting it to `'x'` or `'y'`.

<CodeSandbox id="x23pw14oop" />

### Boundaries

We can add boundaries to the range of motion with the `dragBounds` property.

It accepts `top`, `left`, `bottom` and/or `right`, measured in pixels or percentages:

```javascript
const config = {
  draggable: 'x',
  dragBounds: { left: '-100%', right: '100%' }
}
```

<CodeSandbox id="j27p9l3v6y" />

### Poses

When a posed component is draggable, two new poses are fired.

While dragging is active, the `drag` pose takes effect.

```javascript
const config = {
  draggable: true,
  init: { scale: 1 },
  drag: { scale: 1.2 }
};
```

When dragging finishes, by default all values revert to their previous pose. Optionally, a `dragEnd` pose can be defined:

```javascript
const config = {
  draggable: true,
  init: { scale: 1 },
  drag: { scale: 1.2 },
  dragEnd: { scale: 0.5 }
};
```



## dragEnd pose

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

## onChange

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

### onChange with React

With React, `onChange` callbacks are handled a little differently to vanilla Pose. Instead, we pass them to the posed component itself as `onValueChange`:

```javascript
<Box onValueChange={{ x: x => console.log(x) }} />
```

It's important to note that `onValueChange` can only be defined once, when the component mounts.

## Next

So far we've covered animations and interactions, active stuff. Next, we'll take a look at some values who prefer to sit back, relax, and only change when others do.
