# <a href="https://popmotion.io"><img src="https://user-images.githubusercontent.com/7850794/37059519-9a190c14-2185-11e8-894f-e82a99f45171.png" width="243" alt="React Pose" /></a>
### A React interface for the Popmotion Pose animation library

[![npm version](https://img.shields.io/npm/v/react-pose.svg?style=flat-square)](https://www.npmjs.com/package/react-pose)
[![npm downloads](https://img.shields.io/npm/dm/react-pose.svg?style=flat-square)](https://www.npmjs.com/package/react-pose)
[![Twitter Follow](https://img.shields.io/twitter/follow/espadrine.svg?style=social&label=Follow)](http://twitter.com/popmotionjs)
[![Join the community on Spectrum](https://withspectrum.github.io/badge/badge.svg)](https://spectrum.chat/popmotion)

## Examples
Coming soon

## Features
- **Tiny:**
- **Performant:** Unlike many React animation components, Pose works directly with the DOM node.
- **Declarative:** Pose automatically chooses appropriate animations based on the properties being animated. Custom animations can be declared for any transition into any post.
- **Supports SSR:**

## Install

### Package managers

```bash
npm install react-pose popmotion --save
```

```bash
yarn add react-pose popmotion
```

## Usage

React Pose is a declarative animation library.

```javascript
// Import
import { Pose } from 'react-pose';

// Define props
const poses = {
  open: { scaleX: 1 },
  close: { scaleX: 0 }
};

// Create poser
export default ({ isOpen }) => (
  <Pose poses={poses} current={isOpen ? 'open' : 'close'}>
    <div />
  </Pose>
);
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

**TODO:** Impose ranges for dragging.

### Children

By adding children to a poser, we can orchestrate multiple animations with a single `set` call.

#### Add children

Every poser has an `addChild` method, which adds another poser as a child.

Whenever `set` is called on the parent poser, it's also set on all children posers.

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
  .map(item => sidebarPoser.addChild(pose(item, itemProps)));

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

##### `draggable: boolean | 'x' | 'y'`

If `true`, `'x'` or `'y'`, the `Poser` will attach event listeners that allow the user to drag the element.

##### `initialPose: string`

The name of the initial pose.

##### `...poses`

All remaining props are poses. You can call a pose anything, and set it using the returned `Poser`'s `set` method.

A pose is defined as an object of style properties like `x`, `backgroundColor` etc along with the following properties:

- `transition: ({ from, to, velocity, key, prevPoseKey }) => animation`: Used to defined custom transitions. **Is run once for every style property in the pose.**
- `delay: number`: A duration, in milliseconds, to delay the transition to the current pose (does **not** affect children).
- `delayChildren: number`: A duration, in milliseconds, before setting any children to the same pose.
- `staggerChildren: number`: A duration, in milliseconds, between setting each child to the same pose.

### `Poser`

This is returned from `pose`.


## Upcoming features
- SVG support
- Personality-based config
- Support `range` while dragging
