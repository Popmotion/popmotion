# Popmotion Pose
### A declarative animation library

[![npm version](https://img.shields.io/npm/v/popmotion-pose.svg?style=flat-square)](https://www.npmjs.com/package/popmotion-pose)
[![npm downloads](https://img.shields.io/npm/dm/popmotion-pose.svg?style=flat-square)](https://www.npmjs.com/package/popmotion-pose)
[![Twitter Follow](https://img.shields.io/twitter/follow/espadrine.svg?style=social&label=Follow)](http://twitter.com/popmotionjs)
[![Join the community on Spectrum](https://withspectrum.github.io/badge/badge.svg)](https://spectrum.chat/popmotion)

JavaScript animation made simple:

```javascript
sidePanel.set('open');
```

## Install

### Package managers

```bash
npm install popmotion popmotion-pose --save
```

```bash
yarn add popmotion popmotion-pose
```

### CDN

```
https://unpkg.com/popmotion-pose/dist/popmotion-pose.min.js
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

The `transition` function receives one argument, an object containing `from`, `to`, `velocity`, `key` and `prevPoseKey`, which you can use to create and return different animations for different values.

### Draggable

Any element can be made draggable by passing the `draggable` property to `props`:

```javascript
const props = { draggable: true };
```

Dragging can be locked to a single axis by passing that axis instead:

```javascript
const props = { draggable: 'x' };
```

### Children



### FLIP

Animating positional and dimensional properties like `width` and `top` is tasking for browsers and can cause stuttering in animations.

The [FLIP technique](https://aerotwist.com/blog/flip-your-animations/) was developed to animate these performantly by replacing them with transforms.

When animating these properties, Popmotion Pose will perform a FLIP animation:

```javascript
// Popmotion Pose will animate `scaleX` instead:
const props = {
  open: { width: 200 },
  closed: { width: 0 }
};
```

#### FLIP with calculated dimensions

Alternatively, we might be animating from one state to another without knowing the new calculated size. We can do this with the `measureOnEnd` and `measureOnStart` properties.

Imagine a modal where we want to animate out its contents, resize the modal to accomodate its new contents and then animate those in:

```javascript
const modal = document.querySelector('.modal');
const modalContents = document.querySelector('.modal-contents');

const modalProps = {
  contentOut: { measureOnEnd: true },
  contentIn: {
    measureOnStart: true,
    delayChildren: 200
  }
};

const modalContentsProps = {
  contentOut: { z: 20, opacity: 0 },
  contentIn: { z: 0, opacity: 1 }
};

const modalPoser = pose(modal, modalProps);
let modalContentsPoser = pose(modalContents, modalContentsProps);
modalPoser.addChild(modalContentsPoser);

async function swapContents(contents) {
  await modalPoser.set('contentOut');
  modalPoser.clearChildren();
  modalContentsPoser = pose(contents, {
    initialPose: 'contentOut',
    ...modalContentsProps
  });
  modalPose.addChild(modalContentsPoser);
  modalPoser.set('contentIn');
}
```

## API

### `pose`