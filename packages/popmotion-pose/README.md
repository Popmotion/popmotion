# <a href="https://popmotion.io"><img src="https://user-images.githubusercontent.com/7850794/36951814-dbd58448-1fff-11e8-8fc7-4b03531ddffb.png" width="243" alt="Popmotion Pose" /></a>
### A declarative animation library

[![npm version](https://img.shields.io/npm/v/popmotion-pose.svg?style=flat-square)](https://www.npmjs.com/package/popmotion-pose)
[![npm downloads](https://img.shields.io/npm/dm/popmotion-pose.svg?style=flat-square)](https://www.npmjs.com/package/popmotion-pose)
[![Twitter Follow](https://img.shields.io/twitter/follow/espadrine.svg?style=social&label=Follow)](http://twitter.com/popmotionjs)
[![Join the community on Spectrum](https://withspectrum.github.io/badge/badge.svg)](https://spectrum.chat/popmotion)

JavaScript animation made simple:

```javascript
sidePanel.set('open');
```

## Examples

[FLIP Tooltip](https://codepen.io/popmotion/pen/paXyRE?editors=0010)

## Features
- **Declarative:** Set up a collection of poses and animate between them using a simple `set` command.
- **Orchestrate:** Add children to orchestrate multiple levels of animations, with full delay and stagger support.
- **FLIP:** Friends don't let friends animate `width`, and neither does POSE. It uses the [FLIP](https://aerotwist.com/blog/flip-your-animations/) technique to convert slow animations into fast `transform`s.
- **Tiny:** Just a 2kb dusting on top of the bits of Popmotion you already use.

## Install

### Package managers

```bash
npm install popmotion popmotion-pose --save
```

```bash
yarn add popmotion popmotion-pose
```

### CDN

```bash
https://unpkg.com/popmotion-pose/dist/popmotion-pose.js
```

## Usage

### Basic example

```javascript
// Import
import pose from 'popmotion-pose';

// Define props
const props = {
  initialPose: 'close',
  open: { scaleX: 1 },
  close: { scaleX: 0 }
};

// Create poser
const divPoser = pose(element, props);
```

### Transitions

#### Defaults

`pose` uses the following Popmotion animations by default:

- `x`, `y`, `z`: `spring` (slightly bouncy)
- Other `transform` properties: `spring` (stiff)
- Other properties: `tween`

#### Custom transitions

You can also override these animations completely with the `transition` property:

```javascript
const props = {
  alert: {
    backgroundColor: '#f00',
    scale: 1.2,
    transition: ({ from, to }) => tween({ from, to, yoyo: Infinity })
  },
  ok: {
    backgroundColor: '#0f0',
    scale: 1
  }
};
```

This function is run **once for each animating property**.

The `transition` function receives one argument, an object containing `from`, `to`, `velocity`, `key` and `prevPoseKey`.

You can **optionally** use any of these to create and return different animations for different values.

### Draggable

Any element can be made draggable by passing the `draggable` property to `props`:

```javascript
const props = { draggable: true };
```

Dragging can be locked to a single axis by passing that axis instead:

```javascript
const props = { draggable: 'x' };
```

#### `dragEnd` pose

When an element is draggable and a user stops dragging, a special pose called `dragEnd` is automatically set.

You can decide what animation fires by using `transition`:

```javascript
const props = {
  draggable: 'x',
  dragEnd: {
    transition: ({ from }) => // return custom animation
  }
};
```

#### Drag lifecycle events

`onDragStart` and `onDragEnd` functions can be defined:

```javascript
const props {
  draggable: true,
  onDragStart: (e) => // not our business!
}
```

#### Bound drag movement

We can limit user-input movement with the `dragBounds` object.

It can restrict movement in both dimensions with optional `left`, `right`, `top`, and `bottom` properties:

```javascript
const props = {
  draggable: 'x',
  dragBounds: { left: 0, right: 500 }
}
```

### Children

By adding children to a poser, we can orchestrate multiple animations with a single `set` call.

#### Add children

Every poser has an `addChild` method, which spawns another poser as a child.

Whenever `set` is called on the parent poser, it's also set on all children posers.

`addChild` also returns the child poser, and `set` can still be called on each individually.

```javascript
const sidebar = document.querySelector('.sidebar');
const sidebarPoser = pose(sidebarDom, {
  initialPose: 'close',
  open: { x: '0%' },
  close: { x: '100%' }
});

const sidebarItems = document.querySelectorAll('.sidebar .item');
const itemProps = {
  initialPose: 'close',
  open: { opacity: 1, x: 0 },
  close: { opacity: 0, x: 50 }
};
const itemsPoser = Array.from(sidebarItems)
  .map(item => sidebarPoser.addChild(item, itemProps));

sidebar.set('open');
```

#### Delay and stagger children

The above example will set its children's pose immediately. We can delay this by setting `delayChildren` on the parent:

```javascript
const sidebarProps = {
  initialPose: 'close',
  open: {
    x: '0%',
    delayChildren: 200
  },
  close: { x: '100%' }
};
```

Or if we wanted to stagger over the children, we can do so with `staggerChildren`:

```javascript
const sidebarProps = {
  initialPose: 'close',
  open: {
    x: '0%',
    delayChildren: 200,
    staggerChildren: 50
  },
  close: { x: '100%' }
};
```

**TODO:** Add a second prop to `set` that will allow staggering outwards from a child index other than `0`.

### FLIP

Animating positional and dimensional properties like `width` and `top` is tasking for browsers and can cause stuttering in animations.

The [FLIP technique](https://aerotwist.com/blog/flip-your-animations/) was developed to animate these performantly by replacing them with transforms.

When animating these properties, Popmotion Pose will perform a FLIP animation:

```javascript
// Popmotion Pose will automatically measure the difference
// in element size and animate `scaleX` instead:
const props = {
  open: { width: 200 },
  closed: { width: 0 }
};
```

#### Explicit FLIP methods

Alternatively, we might want to transition to a new state where we don't know the new position or size.

For instance, if we change the children of the element, we might change the height. We can smoothly transition to the new height with the `measure` and `flip` methods:

```javascript
const poser = pose(element, props);

// Measure the current bounding box
poser.measure();

// Do stuff, like swap the element's children
doStuff();

// FLIP!
poser.flip();
```

## API

### `pose`

```javascript
pose(element, props);
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

##### `...poses`

All remaining props are poses. You can call a pose anything, and set it using the returned `Poser`'s `set` method.

A pose is defined as an object of style properties like `x`, `backgroundColor` etc along with the following properties:

- `transition: ({ from, to, velocity, key, prevPoseKey }) => animation`: Used to defined custom transitions. **Is run once for every style property in the pose.**
- `delay: number`: A duration, in milliseconds, to delay the transition to the current pose (does **not** affect children).
- `delayChildren: number`: A duration, in milliseconds, before setting any children to the same pose.
- `staggerChildren: number`: A duration, in milliseconds, between setting each child to the same pose.
- `staggerDirection: 1 | -1 (default: 1)`: If `1`, staggers from first child to last. `-1` is last child to first.

### `Poser`

This is returned from `pose`.

#### Methods

##### `set(poseName: string): Promise`

Sets the current pose to `poseName`. If `Poser` has children, this will get set on those, too.

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
