---
title: Draggable
description: Make any DOM node or React component draggable with one line of code!
category: plugins
---

# Draggable

Make any DOM node or React DOM component draggable in one line of code. Provides an optional component for simple use with React.

```
draggable(node, options);
```

## Install

```
npm install popmotion-draggable --save
```

## DOM

To use with DOM nodes, simply provide a node to `draggable`:

```javascript
import draggable from 'popmotion-draggable';

const node = document.querySelector('div');
draggable(node);
```

Or provide additional options:

```javascript
spinnable(node, {
  y: false,
  onDragStop: ({ x }) => physics({
    from: x.get(),
    velocity: x.getVelocity(),
    to: 0,
    spring: 500,
    onUpdate: x
  })
});
```

## React

```javascript
import Draggable from 'popmotion-draggable/lib/react';

export default ({ onDrag }) => (
  <Draggable className="my-class" onDrag={onDrag} />
);
```

## Options
- `x`, `y`: If `true`, `draggable` will track these axes. Providing one as `false` will lock movement to the other. **Default:** `true`
- `initialX`, `initialY`: Provides the initialisation values for `x` and `y`. Only affects the first drag. Set these only if the provide element already has `translate` set. **Default:** `0`
- `onDragStart`: Fired when dragging begins. Provided `x` and `y` [values](/api/value)
- `onDrag`: Fired every frame dragging is active.
- `onDragEnd`: Fired when dragging finishes. Provided `x` and `y` [values](/api/value)
- `className`: **React only** Provides support for adding a class for styling purposes, and adds support for `styled-components`-esque styling systems.

## Methods

- `stop`: Hard stops any currently active actions. Generally only used when unmounting the node.
