---
title: Poser
description: Animate and HTML or SVG element with a poser.
category: vanilla
---

# Poser

A poser is used to animate an element and its poser children.

**Note:** For React, use [posed components](/pose/api/posed).

<TOC />

## Import

```javascript
import pose from 'popmotion-pose'
```

## Usage

### Create

Posers are created with the `pose` function.

`pose` accepts two arguments: A HTML or SVG element, and an object of [pose config](/pose/api/config).

```javascript
const poser = pose(element, config)
```

### Animate

Animating to a pose defined in the [pose config](/pose/api/config) is a matter of calling the poser's `set` method:

```javascript
poser.set('nameOfPose')
```

### Sequence

`set` returns a Promise, which resolves once all animations, and animations of any child posers, are complete.

```javascript
// Promise
poser.set('nameOfPose').then(() => /* Do other thing */)

// Async
await poser.set('nameOfPose')
/* Do other thing */
```

### Multiple animations

When a pose is set on a poser, it is only set on the values defined **in that pose**. Which means, if we have two poses with different sets of properties, we can animate both at the same time:

```javascript
const poser = pose(element, {
  flash: {
    backgroundColor: '#f00',
    transition: ({ from, to }) => tween({ from, to, yoyo: Infinity })
  },
  shake: {
    x: true, // We're not using `to` in the transition but want to animate x
    transition: ({ from, velocity }) => spring({
      from, velocity,
      stiffness: 1000,
      damping: 100
    })
  }
})

poser.set('flash')
poser.set('shake')
```

### Transitions

By default, Pose will choose a transition depending on the property being animated:

- `x`, `y`, `z`: [Spring](https://popmotion.io/api/spring)
- `scale`, `scaleX`, `scaleY`: [Spring](https://popmotion.io/api/spring) (overdamped)
- Other props: [Tween](https://popmotion.io/api/tween)

**Note:** In a future release, these default animations will be configurable via `personality` settings.

#### Custom transitions

Every pose has an optional `transition` property that allows you to define a custom transition:

```javascript
const config = {
  attention: {
    scale: 1.2,
    transition: ({ from, to }) => tween({ from, to, yoyo: Infinity })
  },
  rest: { scale: 1 }
}
```

This function is run **once for each animating property** and must return a [Popmotion animation](https://popmotion.io/api) (or `false` for no animation).

The `transition` function receives a single argument, an object containing:

- Information about the current transition: `from`, `to`, `velocity`, `key` and `prevPoseKey` properties.
- Transition props. These can be set statefully as `config.props` or via the `setProps` method. Or they can be set temporarily, as the second argument provided to `set`.
- **React Pose:** All props set on the posed component.

You can use these props to create different animations for different values.

### Dynamic values

Values on a pose can be set as a function that returns the `to` property for a transition.

This function is passed all the same properties as the `transition` function **except** for `to`, which this function is responsible for returning.

```javascript
const config = {
  open: { x: 0 },
  closed: {
    x: ({ i }) => Math.sin(i * 0.5) * 100
  }
}

// Vanilla
// --------------------
itemPosers = items.map((item, i) => pose(item, {
  ...config,
  props: { i }
}))

// React
// --------------------
const Item = posed.li(config)

// In component render
{items.map((item, i) => <Item pose="closed" i={i} />}
```

### Draggable

Any element can be made draggable by passing the `draggable` property to `config`:

```javascript
const config = { draggable: true };
```

Dragging can be locked to a single axis by passing the name of that axis instead:

```javascript
const config = { draggable: 'x' };
```

#### dragEnd pose

When an element is draggable and a user stops dragging, a special pose called `dragEnd` is automatically set.

You can decide what animation fires by using the `transition` property:

```javascript
const config = {
  draggable: 'x',
  dragEnd: {
    transition: ({ from }) => // return custom animation
  }
};
```

#### Drag lifecycle events

`onDragStart` and `onDragEnd` functions can be defined to fire when a user starts and stops dragging:

```javascript
const config {
  draggable: true,
  onDragStart: (e) => // not our business!
}
```

#### Bound drag movement

We can limit pointer-driven movement with the `dragBounds` object.

It can restrict movement in both dimensions with optional `left`, `right`, `top`, and `bottom` properties:

```javascript
const config = {
  draggable: 'x',
  dragBounds: { left: 0, right: 500 }
}
```

### onChange events

We can append `onChange` callbacks to any value with the `onChange` map:

```javascript
const config = {
  draggable: true,
  onChange: {
    x: v => // Do your thing!
  }
}
```

### Children

With a poser's `addChild` method, we can spawn a new poser as a child.

When we call `set` on the parent poser, the same `set` will be passed down to its children. Like this, we can orchestrate multiple animations with a single call.

#### Add children

`addChild` is called exactly like `pose`:

```javascript
const childPoser = parentPoser.addChild(element, childConfig)
```

Now, all `set` calls on `parentPoser` will be passed down to all of its children. It doesn't even need a pose with that label of its own to do so.

```javascript
parentPoser.set('open')
```

We can still call set on the child posers without affecting the parent or its siblings:

```javascript
childPoser.set('hover')
```

#### Delay and stagger children

We can delay the propagation of a set call `delayChildren` on the parent pose:

```javascript
const parentConfig = {
  initialPose: 'close',
  open: {
    x: '0%',
    delayChildren: 200
  },
  close: { x: '100%' }
}
```

Or if we wanted to stagger over the children, we can do so with `staggerChildren`, and **optionally** `staggerDirection`:

```javascript
const sidebarConfig = {
  initialPose: 'close',
  open: {
    x: '0%',
    delayChildren: 200,
    staggerChildren: 50,
    staggerDirection: -1 // stagger from the last child
  },
  close: { x: '100%' }
}
```

### Passive values

Not all values have to be actively animated via a pose. The `passive` property can be used to define values that simply subscribe to actively animated values and update when they do.

For instance, we could update `y` when `x` updates like so:

```javascript
const config = {
  draggable: 'x',
  passive: {
    y: ['x', x => x]
  }
}
```

Each passive value is defined as a tuple:

```javascript
[subscribeKey: string, transform: v => v, fromParent?: boolean]
```

- `subscribeKey`: The key of the value we'll subscribe to.
- `transform`: Receives the latest subscribed value and returns the passive value.
- `fromParent`: If `true`, will subscribe to this value in the direct parent instead of the current poser.

### FLIP

Animating positional and dimensional properties like `width` and `top` is tasking for browsers and can cause stuttering in animations.

The [FLIP technique](https://aerotwist.com/blog/flip-your-animations/) was developed to animate these performantly by replacing them with transforms.

When animating these properties, `flip: true` can be set to use FLIP:

```javascript
// Pose will automatically measure the difference
// in element size and animate `scaleX` instead:
const config = {
  open: { width: 200, flip: true }, // Will FLIP
  closed: { width: 0 } // Will not FLIP
}
```

#### Explicit FLIP methods

Alternatively, we might want to transition to a new state where we don't know the new position or size.

For instance, if we change the children of the element, we might change the height. We can smoothly transition to the new height with the `measure` and `flip` methods:

```javascript
const poser = pose(element, config)

// Measure the current bounding box
poser.measure()

// Do stuff, like swap the element's children
doStuff()

// FLIP!
poser.flip()
```

Alternatively, we can just pass a callback to `flip`:

```javascript
poser.flip(doStuff)
```

## Methods

### set

`set(poseName: string, props?: Object): Promise`

Sets the current pose to `poseName`. If `Poser` has children, this will get set on those, too. Returns a `Promise`.

If `props` is defined, these will be passed through to the selected pose's `transition` function.

### setProps

`setProps(props: Object)`

Sets props on the poser that will be passed to any functions set on a pose.

### measure

`measure()`

Measures the current bounding box. Use this before making a change to the element that will affect physical dimensions (like adding new children, or moving it in the DOM), and then use `flip` to animate it to the new size.

### flip

`flip()`

Performs a FLIP animation between the previously `measure`d bounding box and the latest one.

You can add `flip` as a custom pose use a custom transition for this:

```javascript
const config = {
  flip: {
    transition: () => // your custom transition
  }
};
```

### addChild

`addChild(element: HTMLElement | SVGElement, config: PoseConfig): Poser`

Creates and returns a new `Poser` as a child.

### removeChild

`removeChild(poser: Poser)`

Removes a child.

### clearChildren

`clearChildren()`

Removes all child posers and destroys them.

### destroy

`destroy()`

Stops all active transitions of this `Poser` and its children.
