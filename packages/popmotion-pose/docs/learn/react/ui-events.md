---
title: UI events and interactions
description: Trigger animations based on UI events like drag, press, hover and focus
category: react
next: react-exit-enter-transitions
---

# UI events and interactions

Pose can be used to power and animate interactions. Currently, it supports the following events: drag, press, hover and focus.

In this tutorial, we'll take a look at each.

<TOC />

## Drag

With Pose, making an element draggable is as simple as passing `draggable: true` to the config:

```javascript
const Box = posed.div({
  draggable: true
});
```

<CodeSandbox id="8z7j041kyl" />

`true` sets both axis to draggable, but we can select a single axis to drag by setting it to `'x'` or `'y'`.

<CodeSandbox id="x23pw14oop" />

### Boundaries

We can add boundaries to the range of motion with the `dragBounds` property.

It accepts `top`, `left`, `bottom` and/or `right`, measured in pixels or percentages:

```javascript
const Box = posed.div({
  draggable: 'x',
  dragBounds: { left: '-100%', right: '100%' }
});
```

<CodeSandbox id="j27p9l3v6y" />

### Poses

When a posed component is draggable, two new poses are fired.

While dragging is active, the `drag` pose takes effect.

```javascript
const Box = posed.div({
  draggable: true,
  init: { scale: 1 },
  drag: { scale: 1.2 }
});
```

**Note:** A current limitation with the `drag` pose is you must leave `transition` **undefined**.

When dragging finishes, by default all values revert to their previous pose. Optionally, a `dragEnd` pose can be defined:

```javascript
const Box = posed.div({
  draggable: true,
  init: { scale: 1 },
  drag: { scale: 1.2 },
  dragEnd: { scale: 0.5 }
});
```

<CodeSandbox id="0xjn840k6p" />

You can use this pose to animate `x` and `y`, too. For instance, you could make the object spring back to its origin:

```javascript
const Box = posed.div({
  draggable: true,
  init: { scale: 1 },
  drag: { scale: 1.2 },
  dragEnd: {
    x: 0,
    y: 0,
    transition: { type: 'spring' }
  }
});
```

<CodeSandbox id="mynjwyp478" />

### Events

We can respond to drag start, drag end, and value change events to trigger updates in our UI.

You can provide callbacks to the `onDragStart` and `onDragEnd` props. These fire with the originating mouse or touch events.

To track changes in `x` and `y`, the `onValueChange` prop accepts a map of callbacks, one for each animating value.

```javascript
const Box = posed.div({ draggable: 'x' })

export default ({ onStart, onEnd, onDrag }) => (
  <Box
    onDragStart={onStart}
    onDragEnd={onEnd}
    onValueChange={{ x: onDrag }}
  />
);
```

## Press

With `pressable` set to `true`, you can respond to mouse and touch down events with the `press` pose:

```javascript
const Box = posed.div({
  pressable: true,
  init: { scale: 1 },
  press: { scale: 0.8 }
});
```

<CodeSandbox id="31n86p0jw6" />

By default, when pressing ends, values will return to their previous pose. You can **optionally** set a `pressEnd` pose to override this.

### Events

We can respond to press start and end events with the `onPressStart` and `onPressEnd` callbacks:

```javascript
const Box = posed.div({
  pressable: true,
  init: { scale: 1 },
  press: { scale: 0.8 }
});

export default ({ onStart, onEnd }) => (
  <Box onPressStart={onStart} onPressEnd={onEnd} />
);
```

You might prefer to use this over React's in-built `onMouseDown`/`onMouseUp` etc events because Pose's event handling method avoids the annoying situation where a user presses an element, and only stops pressing once they've moved their pointer outside the element.

Those `onMouseUp`/`onTouchEnd` callbacks only fire if the pointer is still on the triggering element, whereas `onPressEnd` will fire anywhere in the page.

## Hover

Components can respond to hovers by settings `hoverable` to `true`. This will enable use of the `hover` pose:

```javascript
const Box = posed.div({
  hoverable: true,
  init: {
    scale: 1,
    boxShadow: '0px 0px 0px rgba(0,0,0,0)'
  },
  hover: {
    scale: 1.2,
    boxShadow: '0px 5px 10px rgba(0,0,0,0.2)'
  }
});
```

<CodeSandbox id="jlwnqwomo9" />

By default, when hovering ends, values will return to their previous pose. You can **optionally** set a `hoverEnd` pose to override this.

## Focus

Focusable elements can animate into the `focus` pose by setting `focusable: true`:

```javascript
const Box = posed.div({
  focusable: true,
  init: {
    color: '#aaa',
    outlineWidth: '0px',
    outlineOffset: '0px',
    scale: 1
  },
  focus: {
    color: '#000',
    outlineWidth: '12px',
    outlineOffset: '5px',
    outlineColor: '#AB36FF',
    scale: 1.2
  }
});
```

<CodeSandbox id="rlly2kryrn" />

By default, when hovering ends, values will return to their previous pose. You can **optionally** set a `blur` pose to override this.
