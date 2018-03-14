# <a href="https://popmotion.io"><img src="https://user-images.githubusercontent.com/7850794/36951814-dbd58448-1fff-11e8-8fc7-4b03531ddffb.png" width="243" alt="Popmotion Pose" /></a>
### A declarative animation library

[![npm version](https://img.shields.io/npm/v/popmotion-pose.svg?style=flat-square)](https://www.npmjs.com/package/popmotion-pose)
[![npm downloads](https://img.shields.io/npm/dm/popmotion-pose.svg?style=flat-square)](https://www.npmjs.com/package/popmotion-pose)
[![Twitter Follow](https://img.shields.io/twitter/follow/espadrine.svg?style=social&label=Follow)](http://twitter.com/popmotionjs)
[![Join the community on Spectrum](https://withspectrum.github.io/badge/badge.svg)](https://spectrum.chat/popmotion)

Pose is a declarative DOM animation library. It removes all the plumbing typically associated with JavaScript animation and reduces it to code like this:

```javascript
sidePanel.set('open')
```

With the right configuration, that single call can orchestrate an animation as complex as this:

![Sidebar animation example](https://user-images.githubusercontent.com/7850794/37285984-90b7b860-25f8-11e8-8035-01b99bd0b762.gif)

- [Live example](https://codepen.io/popmotion/pen/EQBxOY)

## Examples

[FLIP Tooltip](https://codepen.io/popmotion/pen/paXyRE?editors=0010)

## Features

- **Declarative:** Set up a collection of poses and animate between them using a simple `set` command.
- **Orchestrate:** Add children to orchestrate multiple levels of animations, with full delay and stagger support.
- **FLIP:** Friends don't let friends animate `width`, and neither does Pose. It uses the [FLIP](https://aerotwist.com/blog/flip-your-animations/) technique to convert slow animations into fast `transform`s.
- **Interactive:** Making an element draggable is as simple as setting `draggable: true`.
- **Tiny:** Just a 2kb dusting on top of the bits of Popmotion you already use.

## Contents
- [Install](#install)
- [Usage](#install)
  - [Transitions](#transitions)
  - [Draggable](#draggable)
  - [`onChange` events](#onchange-events)
  - [Children](#children)
  - [FLIP](#flip)
- [API](#api)

## Install

### Package managers

```bash
npm install popmotion-pose --save
```

```bash
yarn add popmotion-pose
```

### CDN

```bash
https://unpkg.com/popmotion-pose/dist/popmotion-pose.js
```

## Usage

Pose exports a single function, `pose`.

```javascript
import pose from 'popmotion-pose'
```

It accepts two arguments. A single HTML or SVG element, and a `props` object.

`props` defines some optional configuration options and a series of **poses**. It looks like this:

```javascript
const props = {
  initialPose: 'close',
  open: { scaleX: 1 },
  close: { scaleX: 0 }
}
```

`pose` returns a **poser**:

```javascript
const elementPoser = pose(element, props)
```

The poser is used to `set` different poses:

```javascript
elementPoser.set('open')
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
const props = {
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
- Any custom props sent as the second argument of `set`.

You can **optionally** use all, some or none of these to create different animations for different values.

### Draggable

Any element can be made draggable by passing the `draggable` property to `props`:

```javascript
const props = { draggable: true };
```

Dragging can be locked to a single axis by passing the name of that axis instead:

```javascript
const props = { draggable: 'x' };
```

#### `dragEnd` pose

When an element is draggable and a user stops dragging, a special pose called `dragEnd` is automatically set.

You can decide what animation fires by using the `transition` property:

```javascript
const props = {
  draggable: 'x',
  dragEnd: {
    transition: ({ from }) => // return custom animation
  }
};
```

#### Drag lifecycle events

`onDragStart` and `onDragEnd` functions can be defined to fire when a user starts and stops dragging:

```javascript
const props {
  draggable: true,
  onDragStart: (e) => // not our business!
}
```

#### Bound drag movement

We can limit pointer-driven movement with the `dragBounds` object.

It can restrict movement in both dimensions with optional `left`, `right`, `top`, and `bottom` properties:

```javascript
const props = {
  draggable: 'x',
  dragBounds: { left: 0, right: 500 }
}
```

### `onChange` events

We can append `onChange` callbacks to any value with the `onChange` map:

```javascript
const props = {
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
const childPoser = parentPoser.addChild(element, childProps)
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
const parentProps = {
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
const sidebarProps = {
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
const props = {
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

When animating these properties, Pose will automatically perform a FLIP animation instead:

```javascript
// Pose will automatically measure the difference
// in element size and animate `scaleX` instead:
const props = {
  open: { width: 200 },
  closed: { width: 0 }
}
```

#### Explicit FLIP methods

Alternatively, we might want to transition to a new state where we don't know the new position or size.

For instance, if we change the children of the element, we might change the height. We can smoothly transition to the new height with the `measure` and `flip` methods:

```javascript
const poser = pose(element, props)

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

## API

### `pose`

```javascript
pose(element, props)
```

Returns a `Poser`.

#### `props`

##### `initialPose: string`

The name of the initial pose.

##### `draggable: boolean | 'x' | 'y'`

If `true`, `'x'` or `'y'`, the `Poser` will attach event listeners that allow the user to drag the element.

##### `dragBounds: { top: number, bottom: number, left: number, right: number }`

An object containing limits beyond which a user can't drag an element.

##### `onDragStart`/`onDragEnd`

Optional callbacks for when dragging starts/ends. Both are passed the original `event`.

##### `onChange`

Optional map of callbacks, one for each value, that will fire when that value changes.

##### `passive`

A passive value 

```typescript
passive: {
  [key: string]: [subscribeKey: string, transform: v => v, fromParent?: boolean]
}
```

###### Example

The `transform` function here is composed with Popmotion [transformers](https://popmotion.io/api/transformers):

```javascript
const props = {
  draggable: 'x',
  passive: {
    backgroundColor: ['x', pipe(
      clamp(0, 300),
      interpolate([0, 300], [0, 1]),
      blendColor('#f00', '#0f0')
    )]
  }
}
```

##### `...poses`

All remaining props are poses. You can call a pose anything, and set it using the returned `Poser`'s `set` method.

A pose is defined as an object of style properties like `x`, `backgroundColor` etc along with the following properties:

- `transition: ({ from, to, velocity, key, prevPoseKey, ...props }) => animation`: Used to defined custom transitions. **Is run once for every style property in the pose.** Additional `props` can be sent via the `set` method.
- `delay: number`: A duration, in milliseconds, to delay the transition to the current pose (does **not** affect children).
- `delayChildren: number`: A duration, in milliseconds, before setting any children to the same pose.
- `staggerChildren: number`: A duration, in milliseconds, between setting each child to the same pose.
- `staggerDirection: 1 | -1 (default: 1)`: If `1`, staggers from first child to last. `-1` is last child to first.

### `Poser`

This is returned from `pose`.

#### Methods

##### `set(poseName: string, props?: Object): Promise`

Sets the current pose to `poseName`. If `Poser` has children, this will get set on those, too. Returns a `Promise`.

If `props` is defined, these will be passed through to the selected pose's `transition` function.

##### `measure()`

Measures the current bounding box. Use this before making a change to the element that will affect physical dimensions (like adding new children, or moving it in the DOM), and then use `flip` to animate it to the new size.

##### `flip()`

Performs a FLIP animation between the previously `measure`d bounding box and the latest one.

You can add `flip` as a custom pose use a custom transition for this:

```javascript
const props = {
  flip: {
    transition: () => // your custom transition
  }
};
```

##### `has(poseName: string): boolean`

Checks if the `Poser` has `poseName` defined as a valid pose.

##### `destroy()`

Stops all active transitions of this `Poser` and its children.

##### `addChild(element: HTMLElement | SVGElement, props: PoseProps): Poser`

Creates and returns a new `Poser` as a child.

##### `removeChild(poser: Poser)`

Removes a child.

##### `clearChildren()`

Removes all child posers and destroys them.
